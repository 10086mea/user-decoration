<?php

namespace Xypp\UserDecoration\Api\Serializer;


class UserAttributeSerializer
{

    public function __invoke($serializer, $user, $attributes)
    {
        $attributes['canOfferDecoration'] = $serializer->getActor()->can('offer_decoration');
        $attributes['canCreateDecoration'] = $serializer->getActor()->can('create_decoration');
        $attributes['canDeleteDecoration'] = $serializer->getActor()->can('delete_decoration');
        return $attributes;
    }
}