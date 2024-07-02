import app from 'flarum/admin/app';
import { StyleFetcher } from '../common/data/styleFetcher';
import { initAvatarHijack } from '../common/utils/avatarHijack';

app.initializers.add('xypp/user-decoration', () => {
  new StyleFetcher(app);
  initAvatarHijack();
  app.extensionData.for('xypp-user-decoration')
    .registerPermission({
      icon: 'fas fa-money-bill',
      label: app.translator.trans('xypp-user-decoration.admin.permissions.offer_decoration'),
      permission: 'user.offer_decoration',
    }, 'moderate', 30)
    .registerPermission({
      icon: 'fas fa-money-bill',
      label: app.translator.trans('xypp-user-decoration.admin.permissions.view_decoration'),
      permission: 'user.view_decoration',
    }, 'moderate', 30)
    .registerPermission({
      icon: 'fas fa-money-bill',
      label: app.translator.trans('xypp-user-decoration.admin.permissions.create_decoration'),
      permission: 'user.view_decoration',
    }, 'moderate', 30)
    .registerPermission({
      icon: 'fas fa-money-bill',
      label: app.translator.trans('xypp-user-decoration.admin.permissions.delete_decoration'),
      permission: 'user.delete_decoration',
    }, 'moderate', 30)
});
