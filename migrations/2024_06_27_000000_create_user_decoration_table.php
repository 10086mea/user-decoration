<?php

use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return Migration::createTable(
    'user_decoration',
    function (Blueprint $table) {
        $table->increments('id');
        $table->string('type');
        $table->string("style",2048);
    }
);

