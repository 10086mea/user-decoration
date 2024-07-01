<?php

namespace Xypp\UserAvatar\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;
use Xypp\UserAvatar\Api\Serializer\UserDecorationSerializer;
use Xypp\UserAvatar\UserDecoration;

class ListUserDecorations extends AbstractListController
{
    public $serializer = UserDecorationSerializer::class;

    protected function data(Request $request, Document $document)
    {
        return UserDecoration::all();
    }
}
