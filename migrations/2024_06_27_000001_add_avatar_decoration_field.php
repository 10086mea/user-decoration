<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;

return [
    'up' => function (Builder $schema) {
        $schema->table('users', function (Blueprint $table) {
            $table->integer('avatar_decoration')->nullable()->unsigned();
            $table->foreign('avatar_decoration')->on('user_decoration')->references('id')->onDelete('SET NULL');
        });
    },
    'down' => function (Builder $schema) {
        $schema->table('users', function (Blueprint $table) {
            $table->dropConstrainedForeignId('avatar_decoration')->dropColumn('avatar_decoration');
        });
    }
];