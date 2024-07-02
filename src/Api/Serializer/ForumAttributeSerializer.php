<?php

namespace Xypp\UserDecoration\Api\Serializer;

use Flarum\Settings\SettingsRepositoryInterface;

class ForumAttributeSerializer
{
    protected $settings;
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke($serializer, $user, $attributes)
    {
        $attributes['username_hijack'] = !!($this->settings->get('xypp-user-decoration.username_hijack', true));
        $attributes['avatar_hijack'] = !!($this->settings->get('xypp-user-decoration.avatar_hijack', true));
        return $attributes;
    }
}