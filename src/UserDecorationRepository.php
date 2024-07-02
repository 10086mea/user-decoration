<?php

namespace Xypp\UserDecoration;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;
use Xypp\UserDecoration\UserDecoration;

class UserDecorationRepository
{
    public function findInIds(array $ids)
    {
        $qb = UserDecoration::query();
        $qb->whereIn("id", $ids);
        return $qb->get();
    }
}
