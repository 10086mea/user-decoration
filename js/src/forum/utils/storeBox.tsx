import { extend, override } from 'flarum/common/extend';
import ForumApplication from 'flarum/forum/ForumApplication';
import DecorationBox from '../components/DecorationBox';

export function storeBox(app: ForumApplication) {
  override((flarum.extensions['xypp-store'].StoreItemUtils as any).prototype, 'createItemShowCase', function (org: any, items: any) {
    if (items.provider() != 'decoration') {
      return org(items);
    }
    const info: {
      id: string;
      name: string;
      desc: string;
      type: string;
    } = items.itemData();

    return (
      <div class="decoration-ShowCase">
        <DecorationBox decoration_id={info.id} type={info.type} noBtn={true} noDelete={true} noEdit={true}></DecorationBox>
      </div>
    );
  });
  override((flarum.extensions['xypp-store'].CreateItemModal as any).prototype, 'getProviderData', async function (origin: (e: string) => Promise<any>, e: string) {
    if (e == "decoration") {
      const data = await app.store.find('user_decoration_all');
      //@ts-ignore
      const that = this;
      app.store.all('user-decorations').forEach((decoration) => {
        that.providerDatas[parseInt(decoration.id() as string)] =
          '[' +
          app.translator.trans('xypp-user-decoration.forum.decoration-box.' + decoration.attribute('type')) +
          ']' +
          decoration.attribute('name') +
          ':' +
          decoration.attribute('desc');
      });
    }
    await origin(e);
  } as any);
  extend((flarum.extensions['xypp-store'].CreateItemModal as any).prototype, 'oninit', function () {
    this.providers['decoration'] = app.translator.trans("xypp-store.forum.create-modal.providers.decoration");
  });
}
