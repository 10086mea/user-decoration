import { override } from 'flarum/common/extend';
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
}
