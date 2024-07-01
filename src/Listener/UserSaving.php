<?php

namespace Xypp\UserAvatar\Listener;

use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;

class UserSaving
{
    public function handle(Saving $event)
    {
        $data = $event->data;
        $user = $event->user;

        $attributes = Arr::get($data, 'attributes', []);
        if (isset($attributes["avatar_decoration"])) {
            if ($attributes["avatar_decoration"] == "null")
                $user->avatar_decoration = null;
            else
                $user->avatar_decoration = $attributes["avatar_decoration"];
        }
    }
}
