<?php

namespace Xypp\UserAvatar\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;
use Xypp\UserAvatar\Api\Serializer\UserDecorationSerializer;
use Xypp\UserAvatar\UserDecorationRepository;

class ListUserDecorationWithId extends AbstractListController
{
    public $serializer = UserDecorationSerializer::class;
    public $userDecorationRepository;
    public function __construct(UserDecorationRepository $userDecorationRepository)
    {
        $this->userDecorationRepository = $userDecorationRepository;
    }

    protected function data(Request $request, Document $document)
    {
        $param = $request->getQueryParams();
        if (!isset($param['id'])) {
            return [];
        }
        $ids = $param['id'];
        if (!is_array($ids)) {
            if (stripos($ids, ",") !== false) {
                $ids = explode($ids, ",");
            } else {
                $ids = [$ids];
            }
        }

        return $this->userDecorationRepository->findInIds($ids);
    }
}
