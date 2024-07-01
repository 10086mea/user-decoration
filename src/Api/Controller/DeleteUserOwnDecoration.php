<?php

namespace Xypp\UserAvatar\Api\Controller;

;
use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\Http\RequestUtil;
use Psr\Http\Message\ServerRequestInterface as Request;
use Xypp\UserAvatar\Api\Serializer\UserOwnDecorationSerializer;
use Xypp\UserAvatar\UserOwnDecoration;
use Illuminate\Support\Arr;


class DeleteUserOwnDecoration extends AbstractDeleteController
{
    public $serializer = UserOwnDecorationSerializer::class;
    protected function delete(Request $request)
    {
        $actor = RequestUtil::getActor($request);
        $id = Arr::get($request->getQueryParams(), 'id');
        $model = UserOwnDecoration::findOrFail('id', $id);
        if ($model->user_id != $actor->id) {
            $actor->assertCan("delete_decoration");
        }
        $model->delete();
    }
}
