import Component, { ComponentAttrs } from 'flarum/common/Component';
import Mithril, { Attributes } from 'mithril';
import app from 'flarum/forum/app';
import { userElementInfo } from '../../common/type';
import { StyleFetcher } from '../../common/data/styleFetcher';
import Button from 'flarum/common/components/Button';
import UserDecorations from '../../common/models/UserDecorations';
import CreateDecorationModal from '../../forum/components/CreateDecorationModal';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import setRouteWithForcedRefresh from 'flarum/common/utils/setRouteWithForcedRefresh';
import username from 'flarum/common/helpers/username';
import UserCard from 'flarum/forum/components/UserCard';
import { avatarColor } from '../../common/utils/DecorationHijack';
import { generatePost } from '../utils/fakePost';
import { applyDecorationOn } from '../../common/utils/DecorationApplier';
export default class DecorationBox<Attrs extends ComponentAttrs = ComponentAttrs> extends Component {
  type: string = '';
  id: number = 0;
  isCurrent: boolean = false;
  uodId: number = 0;
  decoration: UserDecorations | null = null;
  changing = false;
  oninit(vnode: Mithril.Vnode<Attrs, this>) {
    super.oninit(vnode);
    this.id = (this.attrs as any)['decoration_id'];
    this.type = (this.attrs as any)['type'];
    this.uodId = (this.attrs as any)['user_own_decoration_id'];
  }

  oncreate(vnode: Mithril.Vnode<Attrs, this>) {
    super.oncreate(vnode);
  }

  onupdate(vnode: Mithril.Vnode<Attrs, this>) {
    super.onupdate(vnode);
    this.id = (this.attrs as any)['decoration_id'];
    this.type = (this.attrs as any)['type'];
    this.uodId = (this.attrs as any)['user_own_decoration_id'];
  }
  async change() {
    this.changing = true;
    m.redraw();
    const toSave: Record<string, string | null> = {};
    if (this.isCurrent) {
      toSave[`${this.type}_decoration`] = 'null';
    } else {
      toSave[`${this.type}_decoration`] = this.decoration!.id() as string;
    }
    await app.session.user!.save(toSave);
    this.changing = false;
    m.redraw();
  }
  view() {
    let content: any = <div class="error">{app.translator.trans('xypp-user-decoration.forum.decoration-box.error')}</div>;

    let decorationObj: userElementInfo = {
      id: parseInt(app.session.user!.id() || ''),
      username: app.session.user!.username(),
      decorationId: this.id,
      //@ts-ignore
      color: app.session.user!.hijackColor().replace(/\#/g, "@")
    };
    this.decoration = app.store.getById('user-decorations', decorationObj.decorationId + '') as UserDecorations;
    if (!this.decoration) {
      StyleFetcher.getInstance()
        ?.fetchStyle(this.id)
        .then(() => m.redraw());
    }
    if (this.changing) {
      content = <LoadingIndicator></LoadingIndicator>;
    } else if (this.type == 'avatar') {
      this.isCurrent = this.decoration && app.session.user?.data.attributes?.avatar_decoration == this.decoration.id();
      if (!app.forum.attribute("username_hijack")) {
        content = [
          <h3>{app.translator.trans('xypp-user-decoration.forum.decoration-box.avatar')}</h3>,
          <div>{app.translator.trans('xypp-user-decoration.forum.decoration-box.closed')}</div>
        ]
      } else {
        content = [
          <h3>{app.translator.trans('xypp-user-decoration.forum.decoration-box.avatar')}</h3>,
          <div class="avatar-box" data-uiid={this.id}>
            {
              <img
                title="-"
                class="Avatar"
                src={
                  //@ts-ignore
                  (app.session.user?.realAvatarUrl() || '') + '#' + JSON.stringify(decorationObj)
                }
              />
            }
          </div>,

        ];
      }
    } else if (this.type == 'name') {
      this.isCurrent = this.decoration && app.session.user?.data.attributes?.name_decoration == this.decoration?.id();
      if (!app.forum.attribute("username_hijack")) {
        content = [
          <h3>{app.translator.trans('xypp-user-decoration.forum.decoration-box.name')}</h3>,
          <div>{app.translator.trans('xypp-user-decoration.forum.decoration-box.closed')}</div>
        ]
      } else {
        const decorated = (<span class="username-container username"><span class="username-text">{
          //@ts-ignore
          app.session.user?.realUserName()
        }</span></span>);
        if (this.decoration)
          applyDecorationOn(decorated, this.decoration);
        content = [
          <h3>{app.translator.trans('xypp-user-decoration.forum.decoration-box.name')}</h3>,
          <div>{decorated}</div>
        ];
      }
    } else if (this.type == "card") {
      this.isCurrent = this.decoration && app.session.user?.data.attributes?.card_decoration == this.decoration?.id();
      content = [
        <h3>{app.translator.trans('xypp-user-decoration.forum.decoration-box.card')}</h3>,
        <div class="decoration-box-card-container">
          <UserCard user={app.session.user} controlsButtonClassName="UserCard-controls App-primaryControl" className="UserCard--popover in" decoration_id={this.decoration?.id()}></UserCard>
        </div>
      ]
    } else if (this.type == "post") {
      this.isCurrent = this.decoration && app.session.user?.data.attributes?.post_decoration == this.decoration?.id();
      const afterDecoration = generatePost(app.session.user!);
      if (this.decoration)
        applyDecorationOn(afterDecoration, this.decoration);
      content = [
        <h3>{app.translator.trans('xypp-user-decoration.forum.decoration-box.post')}</h3>,
        <div class="decoration-box-card-container">{afterDecoration}</div>
      ]
    }
    return (
      <div className="DecorationBox">
        <div className='prev-warpper'>
          {content}
        </div>
        <div class="decoration-box-content">
          {this.decoration ? this.decoration!.desc() : app.translator.trans('xypp-user-decoration.forum.decoration-box.loading')}
        </div>
        {(this.attrs as any).noBtn ? (
          ''
        ) : (
          <Button class="Button Button--primary" loading={this.changing} disabled={this.changing} onclick={this.change.bind(this)}>
            {this.isCurrent
              ? app.translator.trans('xypp-user-decoration.forum.decoration.remove_button')
              : app.translator.trans('xypp-user-decoration.forum.decoration.change_button')}
          </Button>
        )}
        {(this.attrs as any).noDelete || !this.uodId ? (
          ''
        ) : (
          <div class="delete-decoration" onclick={this.delete.bind(this)}>
            <i class="fas fa-times" aria-label={app.translator.trans('xypp-user-decoration.forum.decoration.delete_button')}></i>
          </div>
        )}
        {(this.attrs as any).noEdit ? (
          ''
        ) : (
          <div class="edit-decoration" onclick={this.edit.bind(this)}>
            <i class="fas fa-edit" aria-label={app.translator.trans('xypp-user-decoration.forum.decoration.edit_button')}></i>
          </div>
        )}
      </div>
    );
  }

  async delete() {
    if (confirm(app.translator.trans('xypp-user-decoration.forum.decoration.delete_confirm') as string)) {
      this.changing = true;
      await app.request({
        url: app.forum.attribute('apiUrl') + '/user-own-decoration/' + this.uodId + '/delete',
      });
      this.changing = false;

      setRouteWithForcedRefresh(app.history.getCurrent().url);
    }
  }

  edit() {
    app.modal.show(CreateDecorationModal, { decoration_id: this.decoration!.id() });
  }
}
