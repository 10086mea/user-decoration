<?php

/*
 * This file is part of xypp/user-decoration.
 *
 * Copyright (c) 2024 小鱼飘飘.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Xypp\UserAvatar;

use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Api\Controller\ListUsersController;
use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Extend;
use Flarum\Frontend\Controller;
use Flarum\User\User;
use Flarum\User\UserValidator;
use Xypp\UserAvatar\Api\Controller\AddUserDecoration;
use Xypp\UserAvatar\Api\Controller\AddUserOwnDecoration;
use Xypp\UserAvatar\Api\Controller\DeleteUserOwnDecoration;
use Xypp\UserAvatar\Api\Controller\ListUserDecorations;
use Xypp\UserAvatar\Api\Controller\ListUserDecorationWithId;
use Xypp\UserAvatar\Api\Controller\ListUserOwnDecoration;
use Flarum\User\Event\Saving as EventUserSaving;
use Xypp\UserAvatar\Listener\UserSaving;
use Xypp\UserAvatar\Utils\UserOwnDecorationUtil;

$ret = [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),
    (new Extend\Model(User::class))
        ->cast("avatar_decoration", "integer"),
    (new Extend\Routes('api'))
        ->get("/user_decoration", "user_decoration.list", ListUserDecorationWithId::class)
        ->get("/user_decoration_all", "user_decoration_all.list", ListUserDecorations::class)
        ->post("/user_decoration", "user_decoration.create", AddUserDecoration::class)
        ->get("/user-own-decoration", "user_own_decoration.list", ListUserOwnDecoration::class)
        ->post("/user-own-decoration", "user_own_decoration.create", AddUserOwnDecoration::class)
        ->get("/user-own-decoration/{id}/delete", "user_own_decoration.delete", DeleteUserOwnDecoration::class),
    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->attributes(function ($serializer, $user, $attributes) {
            $avatar_decoration = "";
            if (isset($user->avatar_decoration)) {
                $avatar_decoration = $user->avatar_decoration;
            }
            $attributes['avatar_decoration'] = $avatar_decoration;
            return $attributes;
        }),
    (new Extend\ApiSerializer(UserSerializer::class))
        ->attributes(function ($serializer, $user, $attributes) {
            $attributes['canOfferDecoration'] = $serializer->getActor()->can('offer_decoration');
            $attributes['canCreateDecoration'] = $serializer->getActor()->can('create_decoration');
            $attributes['canDeleteDecoration'] = $serializer->getActor()->can('delete_decoration');
            return $attributes;
        }),
    (new Extend\Event())
        ->listen(EventUserSaving::class, UserSaving::class),
    new Extend\Locales(__DIR__ . '/locale'),
];
if (class_exists("\\Xypp\\Store\\Extend\\StoreItemProvider")) {
    $ret[] = (new \Xypp\Store\Extend\StoreItemProvider())->provide('decoration', function ($item) {
        $decoration = UserDecoration::findOrFail($item->provider_data);
        return [
            "name" => $decoration->name,
            "desc" => $decoration->desc,
            "type" => $decoration->type,
            "id" => $decoration->id
        ];
    }, function ($actor, $item) {
        UserOwnDecorationUtil::AssertAddUserDecorationId($actor->id, $item->provider_data);
        $newModel = new UserOwnDecoration();
        $newModel->user_id = $actor->id;
        $newModel->decoration_id = $item->provider_data;
        $decoration = UserDecoration::findOrFail($newModel->decoration_id);
        $newModel->type = $decoration->type;
        $newModel->save();
        return true;
    })->limit('decoration', function ($actor, $item, $count) {
        if (
            UserOwnDecoration::where([
                'user_id' => $actor->id,
                'decoration_id' => $item->provider_data
            ])->exists()
        ) {
            return "decoration.dumplicate";
        }
        return true;
    });
}
return $ret;