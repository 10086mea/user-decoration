import Component from "flarum/common/Component";
import { extend, override } from "flarum/common/extend";
import User from "flarum/common/models/User";
import { StyleFetcher } from "../data/styleFetcher";
import { userElementInfo } from "../type";
import { applyDecoration, applyDecorationOn } from "../utils/decorationApplier";
import computed from 'flarum/common/utils/computed';
import stringToColor from 'flarum/common/utils/stringToColor';
import ColorThief, { Color } from "color-thief-browser";
import Mithril from "mithril";
var globalUserAvatarHijackIid = 0;
/**
 * @description 劫持用户头像生成.将用户信息编码到头像信息中.
 */
export function initAvatarHijack() {
    const originalUserAvatar = User.prototype.avatarUrl;
    function calculateAvatarColor(user: User, avatarUrl: string) {
        const image = new Image();
        image.addEventListener('load', function (this: HTMLImageElement) {
            try {
                const colorThief = new ColorThief();
                //@ts-ignore
                user.avatarColor = colorThief.getColor(this);
            } catch (e) {
                // Completely white avatars throw errors due to a glitch in color thief
                // See https://github.com/lokesh/color-thief/issues/40
                if (e instanceof TypeError) {
                    //@ts-ignore
                    user.avatarColor = [255, 255, 255];
                } else {
                    throw e;
                }
            }
            user.freshness = new Date();
            m.redraw();
        });
        image.crossOrigin = 'anonymous';
        image.src = avatarUrl ?? '';
    }
    //@ts-ignore
    User.prototype.realAvatarUrl = originalUserAvatar;
    //@ts-ignore
    User.prototype.hijackColor = function () {
        return computed<string, User>('displayName', 'realAvatarUrl', 'avatarColor', (displayName, avatarUrl, avatarColor) => {
            if (avatarColor) {
                return `rgb(${(avatarColor as Color).join(', ')})`;
            } else if (avatarUrl) {
                calculateAvatarColor(this, avatarUrl as string);
                return '';
            }
            return '#' + stringToColor(displayName as string);
        }).call(this);
    };

    override(User.prototype, "avatarUrl", function () {
        //@ts-ignore
        let color = this.hijackColor();
        if (color && !!(color['charAt'])) {
            color = color.replace(/#/g, '@');
        }
        const encodedUserInfo: string = JSON.stringify({
            decorationId: this.data.attributes?.avatar_decoration,
            username: this.username(),
            displayName: this.displayName(),
            id: this.id(),
            color
        });
        //@ts-ignore
        return (originalUserAvatar.call(this) || "").split("#").pop() + "#" + encodedUserInfo;
    });

    extend(Component.prototype, ['oninit'], function () {
        (this as any).userAvatarHijackIid = globalUserAvatarHijackIid++;
        (this as any).originalView = this.view.bind(this);
        this.view = hijackViewHandler.bind(this);
        (this as any).originalOnBefUp = this.onbeforeupdate.bind(this);
        this.onbeforeupdate = hijackOnBeforeUpdate.bind(this);
    });
    extend(Component.prototype, ['onupdate', "oncreate"], async function () {
        const ctr = $(`.Avatar-container[data-userAvatarHijackIid="${(this as any).userAvatarHijackIid}"]`);
        if (ctr.length && !["absolute", "fixed", "relative"].includes(window.getComputedStyle(ctr[0]).position)) {
            ctr.css("position", "relative");
        }
    });
    console.log("Avatar Hijack loaded");
}
function hijackOnBeforeUpdate(...a: any) {
    //@ts-ignore
    const injected = this.$(".user-avatar-hijack-wait-reload").length !== 0 || $(this.element).hasClass("user-avatar-hijack-wait-reload");
    //@ts-ignore
    $(this.element).removeClass("user-avatar-hijack-wait-reload");
    //@ts-ignore
    if (this.originalOnBefUp.apply(this, a) === false) {
        if (injected) {
            return;
        }
        return false;
    }
    return;
}
function hijackViewHandler(vnode: any) {
    //@ts-ignore
    const vnodeTree = (this as any).originalView(vnode);
    if (!vnodeTree) return vnodeTree;
    if (vnodeIsAvatar(vnodeTree)) {
        //@ts-ignore
        return createWrappedAvatar(vnodeTree, this);
    }
    else {
        //@ts-ignore
        hijackView(null, vnodeTree, vnode, this);
    }
    return vnodeTree;
}
function hijackView(parent: Mithril.Vnode<any> | null, root: Mithril.Vnode<any>, stopAt: Mithril.Vnode<any>, ctx: any) {
    if (root === stopAt) return;
    if (parent && vnodeIsAvatar(root)) {
        parent.children = (parent.children as Mithril.Vnode<any>[]).map((child) => {
            if (child === root) {
                return createWrappedAvatar(child, ctx);
            } else return child;
        });
    } else if (typeof root.children === 'object' && root.children['forEach']) {
        root.children.forEach((child: any) => {
            child && hijackView(root, child, stopAt, ctx);
        });
    }
}
function vnodeIsAvatar(vnode: any): boolean {
    return vnode && vnode.tag == "img" && vnode.attrs.className?.includes("Avatar") && /( |^)Avatar( |$)/.test(vnode.attrs.className) && (vnode.attrs as any).src;
}
function createWrappedAvatar(vnode: Mithril.Vnode<any, any>, ctx: any) {
    const attrData = vnode.attrs.src.split("#");
    if (attrData.length != 2) return vnode;
    let toWarp: Mithril.Vnode<any, any> = vnode
    const userInfo: userElementInfo = JSON.parse(attrData.pop()!);
    const avatarUrl = attrData.shift();
    if (!avatarUrl) {
        toWarp.tag = "span";
        toWarp.children = [{
            tag: "#",
            children: userInfo.username.charAt(0),
            state: undefined,
            attrs: {}
        }];
        let color = userInfo.color;
        if (color && !!(color['charAt'])) {
            color = color.replace(/@/g, "#");
        }
        if (color) {
            toWarp.attrs.style = (toWarp.attrs.style ?? "") + `;--avatar-bg: ${color};`;
        }
    }
    toWarp.attrs.src = avatarUrl;
    const ctr: Mithril.Vnode<any, any> = {
        tag: "span",
        attrs: {
            "data-ctr": "avatar"
        },
        state: undefined,
        children: [toWarp]
    };
    ctr.attrs.style = toWarp.attrs.style;
    ctr.attrs.className = (toWarp.attrs.className ?? "") + " Avatar-container";
    ctr.attrs['data-userAvatarHijackIid'] = ctx.userAvatarHijackIid;
    //@ts-ignore
    if (ctx.appendRelative) {
        ctr.attrs.style = (ctr.attrs.style ?? "") + ";position:relative;"
    }
    toWarp.attrs.className = "";
    userInfo.container = ctr;
    applyDecoration(userInfo, ctx);
    return ctr;
}