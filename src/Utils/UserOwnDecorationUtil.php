<?php

namespace Xypp\UserAvatar\Utils;

use Xypp\UserAvatar\UserOwnDecoration;

class UserOwnDecorationUtil
{
    public static function AssertAddUserDecorationId($user_id, $decoration_id)
    {
        if (
            UserOwnDecoration::where([
                'user_id' => $user_id,
                'decoration_id' => $decoration_id
            ])->exists()
        ) {
            throw new \RuntimeException("User already has this decoration", 501);
        }
    }
}