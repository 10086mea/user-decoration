<?php

namespace Xypp\UserAvatar\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Xypp\UserAvatar\UserOwnDecoration;
use InvalidArgumentException;

class UserOwnDecorationSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'user-own-decoration';
    private UserDecorationSerializer $userDecorationSerializer;
    public function __construct(UserDecorationSerializer $userDecorationSerializer)
    {
        $this->userDecorationSerializer = $userDecorationSerializer;
    }
    /**
     * {@inheritdoc}
     *
     * @param UserOwnDecoration $model
     * @throws InvalidArgumentException
     */
    protected function getDefaultAttributes($model)
    {
        if (!($model instanceof UserOwnDecoration)) {
            throw new InvalidArgumentException(
                get_class($this) . ' can only serialize instances of ' . UserOwnDecoration::class
            );
        }
        return [
            "user_id" => $model->user_id,
            "decoration_id" => $model->decoration_id,
            "type" => $model->type
        ];
    }
}
