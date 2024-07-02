import Modal from 'flarum/common/components/Modal';
import app from 'flarum/forum/app';
import Button from 'flarum/common/components/Button';
import Select from 'flarum/common/components/Select';
import setRouteWithForcedRefresh from 'flarum/common/utils/setRouteWithForcedRefresh';
import UserOwnDecoration from '../../common/models/UserOwnDecoration';
import DecorationBox from './DecorationBox';
import UserDecorations from '../../common/models/UserDecorations';
import { StyleFetcher } from '../../common/data/styleFetcher';
export default class CreateDecorationModal extends Modal {
  loading = false;
  decorationId: string = '';
  decoration: UserDecorations | null = null;

  className() {
    return 'Modal--small';
  }

  title() {
    return app.translator.trans('xypp-user-decoration.forum.create-modal.title');
  }

  content() {
    const that = this;
    return (
      <div className="Modal-body">
        <div className="Form">
          <div className="Form-group">
            <label for="xypp-user-decoration-create-ipt-type">{app.translator.trans('xypp-user-decoration.forum.create-modal.type.title')}</label>
            <Select
              id="xypp-user-decoration-create-ipt-type"
              options={{
                avatar: app.translator.trans('xypp-user-decoration.forum.create-modal.type.avatar'),
                username: app.translator.trans('xypp-user-decoration.forum.create-modal.type.username'),
                usercard: app.translator.trans('xypp-user-decoration.forum.create-modal.type.usercard'),
              }}
            ></Select>
          </div>
          <div className="Form-group">
            <label for="xypp-user-decoration-create-ipt-name">{app.translator.trans('xypp-user-decoration.forum.create-modal.name')}</label>
            <input id="xypp-user-decoration-create-ipt-name" required className="FormControl" step="any" />
          </div>
          <div className="Form-group">
            <label for="xypp-user-decoration-create-ipt-desc">{app.translator.trans('xypp-user-decoration.forum.create-modal.desc')}</label>
            <textarea id="xypp-user-decoration-create-ipt-desc" required className="FormControl" step="any"></textarea>
          </div>
          <p>{app.translator.trans('xypp-user-decoration.forum.create-modal.tip')}</p>
          <div className="Form-group">
            <label for="xypp-user-decoration-create-ipt-style">{app.translator.trans('xypp-user-decoration.forum.create-modal.style')}</label>
            <textarea id="xypp-user-decoration-create-ipt-style" required className="FormControl" step="any"></textarea>
          </div>
          <div className="Form-group">
            <Button class="Button Button--primary" type="submit" loading={this.loading} disabled={this.loading}>
              {app.translator.trans('xypp-user-decoration.forum.create-modal.button')}
            </Button>
          </div>
        </div>
      </div>
    );
  }
  onready() {
    this.decorationId = (this.attrs as any).decoration_id;
    if (this.decorationId) {
      this.loading = true;
      StyleFetcher.getInstance()
        ?.fetchStyle(this.decorationId)
        .then((style: any) => {
          this.decoration = style;
          this.loading = false;
          this.$('#xypp-user-decoration-create-ipt-name').val(style.name() as string);
          this.$('#xypp-user-decoration-create-ipt-desc').val(style.desc() as string);
          this.$('#xypp-user-decoration-create-ipt-style').val(style.style() as string);
          this.$('#xypp-user-decoration-create-ipt-type').val(style.type() as string);

          m.redraw();
        });
    }
  }
  async onsubmit(e: any) {
    e.preventDefault();
    this.loading = true;
    try {
      await app.request({
        url: app.forum.attribute('apiUrl') + '/user_decoration',
        method: 'POST',
        body: {
          attributes: {
            id: this.decorationId,
            style: this.$('#xypp-user-decoration-create-ipt-style').val(),
            desc: this.$('#xypp-user-decoration-create-ipt-desc').val(),
            name: this.$('#xypp-user-decoration-create-ipt-name').val(),
            type: this.$('#xypp-user-decoration-create-ipt-type').val(),
          },
        },
      });
      app.modal.close();
      app.alerts.show({ type: 'success' }, app.translator.trans('xypp-user-decoration.forum.create-success'));
    } catch (e: any) {
      app.alerts.show({ type: 'error' }, e.toString());
      this.loading = false;
    }
  }
}
