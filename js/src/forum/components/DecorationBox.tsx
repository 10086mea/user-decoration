import Component, { ComponentAttrs } from 'flarum/common/Component';
import Mithril, { Attributes } from 'mithril';
import app from 'flarum/forum/app';
import { userElementInfo } from '../../common/type';
import { StyleFetcher } from '../../common/data/styleFetcher';
import Button from 'flarum/common/components/Button';
import UserDecorations from 'src/common/models/UserDecorations';
export default class DecorationBox<Attrs extends ComponentAttrs = ComponentAttrs> extends Component {
  type: string = '';
  id: number = 0;
  isCurrent: boolean = false;
  decoration: UserDecorations | null = null;
  changing = false;
  oninit(vnode: Mithril.Vnode<Attrs, this>) {
    super.oninit(vnode);
    this.id = (this.attrs as any)['decoration_id'];
    this.type = (this.attrs as any)['type'];
  }

  oncreate(vnode: Mithril.Vnode<Attrs, this>) {
    super.oncreate(vnode);
  }

  onupdate(vnode: Mithril.Vnode<Attrs, this>) {
    super.onupdate(vnode);
    this.id = (this.attrs as any)['decoration_id'];
    this.type = (this.attrs as any)['type'];
    m.redraw();
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
    };
    this.decoration = app.store.getById('user-decorations', decorationObj.decorationId + '') as UserDecorations;
    if (!this.decoration) {
      StyleFetcher.getInstance()
        ?.fetchStyle(this.id)
        .then(() => m.redraw());
    }
    if (this.type == 'avatar') {
      this.isCurrent = this.decoration && app.session.user?.data.attributes?.avatar_decoration == this.decoration.id();
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
        <div class="decoration-box-content">
          {this.decoration ? this.decoration!.desc() : app.translator.trans('xypp-user-decoration.forum.decoration-box.loading')}
        </div>,
      ];
    }
    return (
      <div className="DecorationBox">
        {content}
        {(this.attrs as any).noBtn ? (
          ''
        ) : (
          <Button class="Button Button--primary" loading={this.changing} disabled={this.changing} onclick={this.change.bind(this)}>
            {this.isCurrent
              ? app.translator.trans('xypp-user-decoration.forum.decoration.remove_button')
              : app.translator.trans('xypp-user-decoration.forum.decoration.change_button')}
          </Button>
        )}
      </div>
    );
  }
}
