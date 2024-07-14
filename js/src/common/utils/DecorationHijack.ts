import Component from "flarum/common/Component";
import { extend, override } from "flarum/common/extend";
import User from "flarum/common/models/User";
import { StyleFetcher } from "../data/styleFetcher";
import { userElementInfo } from "../type";
import { applyDecoration, applyDecorationOn } from "./DecorationApplier";
import computed from 'flarum/common/utils/computed';
import stringToColor from 'flarum/common/utils/stringToColor';
import ColorThief, { Color } from "color-thief-browser";
import Mithril, { Vnode } from "mithril";
import Post from "flarum/forum/components/Post";
import UserCard from "flarum/forum/components/UserCard";
import { DecorationWarpComponent, makeWarpComponent } from "./DecorationWarpComponent";
var globalUserDecorationHijackIid = 0;

function usernameHijack() {
    return StyleFetcher.getInstance()?.getApp().forum?.attribute("username_hijack");
}
function avatarHijack() {
    return StyleFetcher.getInstance()?.getApp().forum?.attribute("avatar_hijack");
}

export function initDecorationHijack() {
    const originalUserAvatar = User.prototype.avatarUrl;
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
        if (!avatarHijack()) return originalUserAvatar.call(this);
        //@ts-ignore
        let color = this.hijackColor();
        if (color && !!(color['charAt'])) {
            color = color.replace(/#/g, '@');
        }
        const encodedUserInfo: string = JSON.stringify({
            decorationId: this.data.attributes?.avatar_decoration,
            username: this.username(),
            //@ts-ignore
            displayName: this.realDisplayName(),
            id: this.id(),
            color
        });
        //@ts-ignore
        return (originalUserAvatar.call(this) || "").split("#").pop() + "#" + encodedUserInfo;
    });


    const originalUserName = User.prototype.username;
    //@ts-ignore
    User.prototype.realUserName = originalUserName;
    //@ts-ignore
    User.prototype.realDisplayName = User.prototype.displayName;

    override(User.prototype, "displayName", function (orgUserName) {
        if (!usernameHijack()) return orgUserName();
        return makeWarpComponent({
            tag: "span",
            attrs: {
                className: "username-container",
                user: this
            }
        }, orgUserName(), { user: this }, "username-text");
    });


    extend(Component.prototype, ['oninit'], function () {
        if (!usernameHijack() && !avatarHijack()) return;
        (this as any).userDecorationHijackIid = globalUserDecorationHijackIid++;
        (this as any).originalView = this.view.bind(this);
        this.view = hijackViewHandler.bind(this);
        (this as any).originalOnBefUp = this.onbeforeupdate.bind(this);
        this.onbeforeupdate = hijackOnBeforeUpdate.bind(this);
    });


    // This function should be save and not to control it.
    extend(Component.prototype, ['onupdate', "oncreate"], async function () {
        const ctr = $(`.decoration-container`);
        ctr.each((_, el) => {
            const ctr = $(el);
            if (ctr.length && !["absolute", "fixed", "relative"].includes(window.getComputedStyle(ctr[0]).position)) {
                ctr.css("position", "relative");
            }
            // User card and post component has controls a large amount of elements and setting z-index may cause many problems.
            if (ctr.length && !ctr.hasClass("Post") && !ctr.hasClass("UserCard") && window.getComputedStyle(ctr[0]).zIndex === "auto") {
                ctr.css("z-index", "0");
            }
        });
    });
    console.log("Decoration Hijack loaded");
}

export function initDecorationExtend() {
    override(Post.prototype, "view", function (o, ...a) {
        //@ts-ignore
        this.userDecorationHijackIid = this.userDecorationHijackIid || (globalUserDecorationHijackIid++);
        //@ts-ignore
        const tree: any = o(a);
        //@ts-ignore
        tree.attrs['data-userDecorationHijackIid'] = this.userDecorationHijackIid;
        tree.attrs.className = (tree.attrs.className || "") + " decoration-container"
        //@ts-ignore
        const user = this.attrs.post.user();
        const infoElem: userElementInfo = {
            username: user.realUserName(),
            container: tree,
            id: user.id(),
            decorationId: user.attribute("post_decoration")
        }
        //@ts-ignore
        if (this.attrs.decoration_id) infoElem.decorationId = this.attrs.decoration_id;
        applyDecoration(infoElem, this);
        return tree;
    })
    override(UserCard.prototype, "view", function (o, ...a) {
        //@ts-ignore
        this.userDecorationHijackIid = this.userDecorationHijackIid || (globalUserDecorationHijackIid++);
        //@ts-ignore
        const tree: any = o(a);
        //@ts-ignore
        tree.attrs['data-userDecorationHijackIid'] = this.userDecorationHijackIid;
        tree.attrs.className = (tree.attrs.className || "") + " decoration-container"
        //@ts-ignore
        const user = this.attrs.user;
        const infoElem: userElementInfo = {
            username: user.realUserName(),
            container: tree,
            id: user.id(),
            decorationId: user.attribute("card_decoration")
        }
        //@ts-ignore
        if (this.attrs.decoration_id) infoElem.decorationId = this.attrs.decoration_id;
        applyDecoration(infoElem, this);
        return tree;
    })
}
function hijackOnBeforeUpdate(...a: any) {
    //@ts-ignore
    const injected = this.$(".user-decoration-hijack-wait-reload").length !== 0 || $(this.element).hasClass("user-decoration-hijack-wait-reload");
    //@ts-ignore
    $(this.element).removeClass("user-decoration-hijack-wait-reload");
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
function hijackView(parent: any, root: any, stopAt: Mithril.Vnode<any>, ctx: any) {
    if (root === stopAt) return;
    if (typeof root === "object" && root['forEach']) {
        root.forEach((child: any) => {
            child && hijackView({ children: root }, child, stopAt, ctx);
        });
    }
    if (parent && vnodeIsAvatar(root)) {
        parent.children = (parent.children as Mithril.Vnode<any>[]).map((child) => {
            if (child === root) {
                return createWrappedAvatar(child, ctx);
            } else return child;
        });
    } else if (parent && vnodeIsUsername(root)) {
        createWrappedUserName(root, ctx);
    } else if (typeof root.children === 'object' && root.children['forEach']) {
        root.children.forEach((child: any) => {
            child && hijackView(root, child, stopAt, ctx);
        });
    }
}
function vnodeIsAvatar(vnode: any): boolean {
    return vnode && vnode.tag == "img" && vnode.attrs.className?.includes("Avatar") && /( |^)Avatar( |$)/.test(vnode.attrs.className) && (vnode.attrs as any).src;
}
function vnodeIsUsername(vnode: any): boolean {
    return vnode && vnode instanceof DecorationWarpComponent && vnode.attrs.className == "username-container";
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
            children: userInfo.username?.charAt(0),
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
    ctr.attrs.className = (toWarp.attrs.className ?? "") + " Avatar-container decoration-container";
    ctr.attrs['data-userDecorationHijackIid'] = ctx.userDecorationHijackIid;
    //@ts-ignore
    if (ctx.appendRelative) {
        ctr.attrs.style = (ctr.attrs.style ?? "") + ";position:relative;"
    }
    toWarp.attrs.className = "";
    userInfo.container = ctr;
    applyDecoration(userInfo, ctx);
    return ctr;
}
function createWrappedUserName(vnode: any, ctx: any) {
    const user = vnode.data.user;
    const userInfo: userElementInfo = {
        decorationId: user.attribute("name_decoration"),
        username: user.attribute("username"),
        container: vnode
    };
    applyDecoration(userInfo, ctx);
}
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
export const avatarColor = calculateAvatarColor;