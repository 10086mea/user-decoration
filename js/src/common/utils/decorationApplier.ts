import Mithril from "mithril";
import UserDecorations from "../models/UserDecorations";
import { userElementInfo } from "../type";
import { StyleFetcher } from "../../common/data/styleFetcher";

/**
 * 在用户界面对象上应用样式
 * @param elementInfo 用户界面元素对象.由各种事件中直接获取包装得到.
 */
export function applyDecoration(elementInfo: userElementInfo, ctx: any) {
    if (!elementInfo.decoration) {
        if (elementInfo.decorationId) {
            elementInfo.decoration = StyleFetcher.getInstance()?.fetchStyleSync(elementInfo.decorationId);
            if (!elementInfo.decoration) {
                StyleFetcher.getInstance()?.fetchStyle(elementInfo.decorationId).then(() => {
                    $(ctx.element).addClass("user-avatar-hijack-wait-reload");
                    m.redraw();
                });
            }
        }
        if (!elementInfo.decoration)
            return;
    }
    if (!elementInfo.container) return;
    applyDecorationOn(elementInfo.container, elementInfo.decoration);
}
/**
 * 在容器元素上应用样式
 * @param element 容器元素
 * @param decoration 用户装饰样式对象
 */
export function applyDecorationOn(element: Mithril.Vnode<any>, decoration: UserDecorations) {
    let ctr = $(`head #user-decoration-${decoration.id()}`);
    if (!ctr.length) {
        ctr = $("<style>").attr("id", `user-decoration-${decoration.id()}`);
        let style = decoration.style() as string || "";
        style = style.replace(/\.base/g, `.user-decoration-${decoration.id()}`);
        ctr.html(style);
        $("head").append(ctr);
    }
    /\.element-[a-zA-Z0-9-_]+{/.exec(ctr.html())?.forEach((value, i, ar) => {
        (element.children as Mithril.Vnode<any, any>[]).push({
            tag: "span",
            state: undefined,
            attrs: { className: value.substring(1, value.length - 1) }
        });
    });
    if (!new RegExp(`( |^)user-decoration-${decoration.id()}( |$)`).test(element.attrs.className))
        element.attrs.className += ` user-decoration-${decoration.id()}`;

    if (!/( |^)has-user-decoration( |$)/.test(element.attrs.className))
        element.attrs.className += ` has-user-decoration`;
}