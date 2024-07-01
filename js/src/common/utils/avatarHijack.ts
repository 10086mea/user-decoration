import Component from "flarum/common/Component";
import { extend, override } from "flarum/common/extend";
import User from "flarum/common/models/User";
import { StyleFetcher } from "../data/styleFetcher";
import { userElementInfo } from "../type";
import { applyDecoration, applyDecorationOn } from "../utils/decorationApplier";
import computed from 'flarum/common/utils/computed';
import stringToColor from 'flarum/common/utils/stringToColor';
import ColorThief, { Color } from "color-thief-browser";
/**
 * @description 劫持用户头像生成.将用户信息编码到头像信息中.
 */
export function initAvatarHijack() {
    const originalUserAvater = User.prototype.avatarUrl;


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
    User.prototype.realAvatarUrl = originalUserAvater;
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
        return (originalUserAvater.call(this) || "").split("#").pop() + "#" + encodedUserInfo;
    });

    extend(Component.prototype, ['onupdate', "oncreate"], async function () {
        let elements = overrideAllAvatars($(this.element as HTMLElement));
        const result = elements.forEach(async (element) => {
            if (element.decorationId !== undefined) {
                const result = await StyleFetcher.getInstance()?.fetchStyle(element.decorationId);
                element.decoration = result || undefined;
                applyDecoration(element);
            }
        })
    });

    console.log("Avatar Hijack loaded");
}
export function overrideAvatar(_element: HTMLElement): userElementInfo | null {
    let element = $(_element);
    const attrData = ($(_element).attr("src") as string).split("#");
    if (attrData.length != 2) return {
        username: "",
        color: "",
        id: 0
    };

    const userInfo: userElementInfo = JSON.parse(attrData.pop()!);
    const avatarUrl = attrData.shift();
    if (!avatarUrl) {
        element = $("<span></span>");
        for (let i = 0; i < _element.attributes.length; i++) {
            element.attr(_element.attributes[i].name, _element.attributes[i].value);
        }
        element.text(userInfo.username.charAt(0));
        let color = userInfo.color;
        if (color && !!(color['charAt'])) {
            color = color.replace(/@/g, "#");
        }
        color && element.css("--avatar-bg", color);
        $(_element).before(element);
        $(_element).remove();
    }
    const avaterImg = element;
    avaterImg.attr("src", avatarUrl!);
    const ctr = $("<span>");
    avaterImg.after(ctr);
    const id = (/u\/(.*)/.exec(ctr.parent().attr("href") ?? "") ?? [])[1]
    ctr.append(avaterImg);
    ctr.attr("class", avaterImg.attr("class") as any);
    ctr.attr("style", avaterImg.attr("style") as any);
    ctr.addClass("Avater-container");
    ctr.attr("data-id", id);
    if (!(["absolute", "fixed", "relative"].includes(getComputedStyle(ctr[0]).position)))
        ctr.attr("style", "position: relative");
    avaterImg.removeAttr("class");

    userInfo.container = ctr;
    return userInfo;
}

export function overrideAllAvatars(element: JQuery<HTMLElement>): userElementInfo[] {
    const ret: (userElementInfo | null)[] = [];
    $(element).find("img.Avatar").each((_, _element) => { ret.push(overrideAvatar(_element)) });
    return ret.filter(x => x !== null) as userElementInfo[];
}