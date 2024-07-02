<?php

namespace Xypp\UserDecoration\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Xypp\UserDecoration\UserDecoration;
use InvalidArgumentException;

class UserDecorationSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'user-decorations';

    /**
     * {@inheritdoc}
     *
     * @param UserDecoration $model
     * @throws InvalidArgumentException
     */
    protected function getDefaultAttributes($model)
    {
        if (!($model instanceof UserDecoration)) {
            throw new InvalidArgumentException(
                get_class($this) . ' can only serialize instances of ' . UserDecoration::class
            );
        }

        // See https://docs.flarum.org/extend/api.html#serializers for more information.

        return [
            "style" => $model->style,
            "type" => $model->type,
            "name" => $model->name,
            "desc" => $model->desc
        ];
    }
}
