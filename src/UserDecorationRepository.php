<?php

namespace Xypp\UserAvatar;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;
use Xypp\UserAvatar\UserDecoration;

class UserDecorationRepository
{
    public function findInIds(array $ids)
    {
        $qb = UserDecoration::query();
        $qb->whereIn("id", $ids);
        return $qb->get();
    }
}
