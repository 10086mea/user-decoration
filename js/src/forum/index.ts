import app from 'flarum/forum/app';
import { StyleFetcher } from '../common/data/styleFetcher';
import { initAvatarHijack } from '../common/utils/avatarHijack';
import { extend } from 'flarum/common/extend';
import UserPage from 'flarum/forum/components/UserPage';
import LinkButton from 'flarum/common/components/LinkButton';
import { DecorationPage } from '../forum/components/DecorationPage';
import OfferDecorationModal from '../forum/components/OfferDecorationModal';
import UserControls from 'flarum/forum/utils/UserControls';
import Button from 'flarum/common/components/Button';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';

app.initializers.add('xypp/user-decoration', () => {
  //@ts-ignore
  User.prototype.canOfferDecoration = Model.attribute('canOfferDecoration');
  new StyleFetcher(app);
  initAvatarHijack();

  app.routes['user.user_own_decoration'] = { path: '/u/:username/user_own_decoration', component: DecorationPage };
  extend(UserPage.prototype, 'navItems', function (items) {
    if (app.session.user) {
      items.add(
        'user_own_decoration',
        LinkButton.component(
          {
            href: app.route('user.user_own_decoration', { username: this.user?.username() }),
            icon: 'fas fa-receipt',
          },
          [
            app.translator.trans('xypp-user-decoration.forum.page.show-decorations')
          ]
        ),
        10
      );
    }
  });
  extend(UserControls, 'moderationControls', (items, user) => {
    //@ts-ignore
    if (user.canOfferDecoration()) {
      items.add('money', Button.component({
        icon: 'fas fa-money-bill',
        onclick: () => app.modal.show(OfferDecorationModal, { user_id:user.id() })
      }, app.translator.trans('xypp-user-decoration.forum.user_controls.offer')));
    }
  });
});