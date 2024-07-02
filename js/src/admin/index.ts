import app from 'flarum/admin/app';
import { StyleFetcher } from '../common/data/styleFetcher';
import { initDecorationHijack } from '../common/utils/DecorationHijack';

app.initializers.add('xypp/user-decoration', () => {
  new StyleFetcher(app);
  app.extensionData.for('xypp-user-decoration')
    .registerSetting({
      setting: 'xypp-user-decoration.username_hijack',
      type: 'boolean',
      label: app.translator.trans('xypp-user-decoration.admin.settings.username_hijack.title'),
      help: app.translator.trans('xypp-user-decoration.admin.settings.username_hijack.desc'),
      default: true,
    })
    .registerSetting({
      setting: 'xypp-user-decoration.avatar_hijack',
      type: 'boolean',
      label: app.translator.trans('xypp-user-decoration.admin.settings.avatar_hijack.title'),
      help: app.translator.trans('xypp-user-decoration.admin.settings.avatar_hijack.desc'),
      default: true,
    })
    .registerSetting({
      setting: 'xypp-user-decoration.view-all',
      type: 'boolean',
      label: app.translator.trans('xypp-user-decoration.admin.settings.view-all.title'),
      help: app.translator.trans('xypp-user-decoration.admin.settings.view-all.desc'),
      default: true,
    })
    .registerPermission({
      icon: 'fas fa-brush',
      label: app.translator.trans('xypp-user-decoration.admin.permissions.offer_decoration'),
      permission: 'user.offer_decoration',
    }, 'moderate', 30)
    .registerPermission({
      icon: 'fas fa-eye',
      label: app.translator.trans('xypp-user-decoration.admin.permissions.view_decoration'),
      permission: 'user.view_decoration',
    }, 'moderate', 30)
    .registerPermission({
      icon: 'fas fa-trash',
      label: app.translator.trans('xypp-user-decoration.admin.permissions.delete_decoration'),
      permission: 'user.delete_decoration',
    }, 'moderate', 30)
    .registerPermission({
      icon: 'fas fa-plus-circle',
      label: app.translator.trans('xypp-user-decoration.admin.permissions.create_decoration'),
      permission: 'user.create_decoration',
    }, 'moderate', 30)
    .registerPermission({
      icon: 'fas fa-eye',
      label: app.translator.trans('xypp-user-decoration.admin.permissions.view-all'),
      permission: 'user.view_all',
    }, 'moderate', 30)
});
