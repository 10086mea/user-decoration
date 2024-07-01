<?php

namespace Xypp\UserAvatar\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;
use Xypp\UserAvatar\Api\Serializer\UserOwnDecorationSerializer;
use Xypp\UserAvatar\UserDecoration;
use Xypp\UserAvatar\UserOwnDecoration;
use Illuminate\Support\Arr;

class AddUserOwnDecoration extends AbstractCreateController
{
    public $serializer = UserOwnDecorationSerializer::class;
    protected function data(Request $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertCan('offer_decoration');

        $attributes = Arr::get($request->getParsedBody(), 'attributes', []);
        $newModel = new UserOwnDecoration();
        $newModel->user_id = Arr::get($attributes, 'user_id');
        $newModel->decoration_id = Arr::get($attributes, 'decoration_id');
        $dm = UserDecoration::findOrFail($newModel->decoration_id);
        $newModel->type = $dm->type;
        $newModel->save();
        return $newModel;
    }
}
