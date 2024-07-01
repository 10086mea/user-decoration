<?php

namespace Xypp\UserAvatar\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;
use Xypp\UserAvatar\Api\Serializer\UserDecorationSerializer;
use Xypp\UserAvatar\Api\Serializer\UserOwnDecorationSerializer;
use Xypp\UserAvatar\UserDecorationRepository;
use Xypp\UserAvatar\UserOwnDecoration;

class ListUserOwnDecoration extends AbstractListController
{
    public $serializer = UserOwnDecorationSerializer::class;

    protected function data(Request $request, Document $document)
    {
        $param = $request->getQueryParams();
        $actor = RequestUtil::getActor($request);
        if (!isset($param['id']) && $param['id'] == '') {
            $id = $actor->id;
        } else {
            $id = $param['id'];
            if ($id != $actor->id)
                $actor->assertCan('view-decoration');
        }
        $builder = UserOwnDecoration::where("user_id", $id);
        return $builder->get();
    }
}
