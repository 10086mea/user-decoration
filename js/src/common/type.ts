import Application from "flarum/common/Application";
import type UserDecorations from "./models/UserDecorations";
import ForumApplication from "flarum/forum/ForumApplication";
import AdminApplication from "flarum/admin/AdminApplication";
export type AllApplication = Application | ForumApplication | AdminApplication;
export interface userElementInfo {
    username: string;
    id: number;
    color?: string;
    container?: JQuery<HTMLElement>;
    decoration?: UserDecorations;
    decorationId?: number;
}