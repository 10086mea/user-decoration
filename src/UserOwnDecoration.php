<?php

namespace Xypp\UserDecoration;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

class UserOwnDecoration extends AbstractModel
{
    // See https://docs.flarum.org/extend/models.html#backend-models for more information.

    protected $table = 'user_own_decoration';

    public function user()
    {
        return $this->hasOne(User::class);
    }
    public function decoration()
    {
        return $this->hasOne(UserDecoration::class, "decoration_id");
    }
}
