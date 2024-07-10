import { extend, override } from 'flarum/common/extend';
import ForumApplication from 'flarum/forum/ForumApplication';
import DecorationBox from '../components/DecorationBox';
import { showIf } from '../utils/nodeUtil';
import Placeholder from 'flarum/common/components/Placeholder';
type feApp = (
  provider: string,
  name: string,
  getProviderData: (providerDatas: { [key: string]: string }) => Promise<void>,
  getShowCase: (item: any) => any,
  getUseData: (item: any) => Promise<string>
) => void;
export function storeBox(app: ForumApplication) {
  (flarum.extensions['xypp-store'].addFrontendProviders as feApp)(
    "decoration", app.translator.trans("xypp-store.forum.create-modal.providers.decoration") as string,
    async function getProviderData(providerDatas) {
      await app.store.find('user_decoration_all');
      app.store.all('user-decorations').forEach((decoration) => {
        providerDatas[parseInt(decoration.id() as string)] =
          '[' +
          app.translator.trans('xypp-user-decoration.forum.decoration-box.' + decoration.attribute('type')) +
          ']' +
          decoration.attribute('name') +
          ':' +
          decoration.attribute('desc');
      });
    },
    function createItemShowCase(item) {
      const info: {
        id: string;
        name: string;
        desc: string;
        type: string;
      } = item.itemData();

      return (
        <div class="decoration-ShowCase">
          {
            showIf(!!(app.session.user),
              <DecorationBox decoration_id={info.id} type={info.type} noBtn={true} noDelete={true} noEdit={true}></DecorationBox>,
              <Placeholder text={app.translator.trans('xypp-user-decoration.forum.decoration-box.no-login')} />
            )
          }
        </div>
      );
    },
    async function (str): Promise<string> {
      return "";
    }
  )
}
