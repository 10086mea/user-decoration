import Mithril from 'mithril';
import UserPage from 'flarum/forum/components/UserPage';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import app from 'flarum/forum/app';
import UserOwnDecoration from '../../common/models/UserOwnDecoration';
import DecorationBox from './DecorationBox';
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
      <div className="decoration-page">
        {this.loading ? (
          <LoadingIndicator display="block" />
        ) : (
          this.record?.map((item, index) => {
            return (
              <DecorationBox type={item.decoration_type()} decoration_id={item.decoration_id()} noBtn={this.user?.id() !== app.session.user?.id()} />
            );
          })
        )}
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
}
