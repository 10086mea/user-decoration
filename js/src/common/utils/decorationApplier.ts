import UserDecorations from "../models/UserDecorations";
import { userElementInfo } from "../type";

/**
 * 在用户界面对象上应用样式
 * @param elementInfo 用户界面元素对象.由各种事件中直接获取包装得到.
 */
export function applyDecoration(elementInfo: userElementInfo) {
    if (!elementInfo.decoration) return;
    if (!elementInfo.container) return;
    applyDecorationOn(elementInfo.container, elementInfo.decoration);
}
/**
 * 在容器元素上应用样式
 * @param element 容器元素
 * @param decoration 用户装饰样式对象
 */
export function applyDecorationOn(element: JQuery<HTMLElement>, decoration: UserDecorations) {
    let ctr = $(`head #user-decoration-${decoration.id()}`);
    if (!ctr.length) {
        ctr = $("<style>").attr("id", `user-decoration-${decoration.id()}`);
        let style = decoration.style() as string || "";
        style = style.replace(/\.base/g, `.user-decoration-${decoration.id()}`);
        ctr.html(style);
        $("head").append(ctr);
    }
    /\.element-[a-zA-Z0-9-_]+{/.exec(ctr.html())?.forEach((value, i, ar) => {
        element.append($("<span>").attr("class", value.substring(1, value.length - 1)));
    });
    element.addClass("user-decoration-" + decoration.id());
    element.addClass("has-user-decoration");
}