<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;

return [
    'up' => function (Builder $schema) {
        $schema->table('user_decoration', function (Blueprint $table) {
            $table->string('name');
            $table->string('desc');
        });
    },
    'down' => function (Builder $schema) {
        $schema->table('user_decoration', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->dropColumn('desc');
        });
    }
];