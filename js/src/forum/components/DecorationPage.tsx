import Mithril from 'mithril';
import UserPage from 'flarum/forum/components/UserPage';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import app from 'flarum/forum/app';
import UserOwnDecoration from '../../common/models/UserOwnDecoration';
import DecorationBox from './DecorationBox';
import Button from 'flarum/common/components/Button';
import CreateDecorationModal from './CreateDecorationModal';
export class DecorationPage extends UserPage {
  loading: boolean = false;
  record: UserOwnDecoration[] | null = null;
  oninit(vnode: Mithril.Vnode<any, this>): void {
    super.oninit(vnode);
    this.loadUser(m.route.param('username'));
    this.loadData();
  }
  content(): JSX.Element {
    return (
      <div className="decoration-page-container">
        <div class="decoration-page-title">
          <h2>{app.translator.trans('xypp-user-decoration.forum.decorations')}</h2>
          {(app.session.user as any).canCreateDecoration() ? (
            <Button class="Button Button--primary" onclick={this.create.bind(this)}>
              <i class="fas fa-plus" />
              <span>{app.translator.trans('xypp-user-decoration.forum.create')}</span>
            </Button>
          ) : (
            ''
          )}
        </div>

        <div className="decoration-page">
          {this.loading ? (
            <LoadingIndicator display="block" />
          ) : (
            this.record?.map((item, index) => {
              return (
                <DecorationBox
                  type={item.decoration_type()}
                  user_own_decoration_id={item.id()}
                  decoration_id={item.decoration_id()}
                  noBtn={this.user?.id() != app.session.user?.id()}
                  noDelete={!(app.session.user as any)?.canDeleteDecoration()}
                  noEdit={!(app.session.user as any).canCreateDecoration()}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
  async loadData() {
    this.loading = true;
    await app.store.find('user-own-decoration', { id: this.user?.id() } as any);
    this.record = app.store.all('user-own-decoration');
    this.loading = false;
    m.redraw();
  }
  create() {
    app.modal.show(CreateDecorationModal);
  }
}
