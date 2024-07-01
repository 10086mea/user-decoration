<?php

use Illuminate\Database\Schema\Builder;
use Illuminate\Database\Schema\Blueprint;

return [
    'up' => function (Builder $schema) {
        $schema->table('users', function (Blueprint $table) {
            $table->integer('name_decoration')->nullable()->unsigned();
            $table->foreign('name_decoration')->on('user_decoration')->references('id')->onDelete('SET NULL');
            $table->integer('card_decoration')->nullable()->unsigned();
            $table->foreign('card_decoration')->on('user_decoration')->references('id')->onDelete('SET NULL');
        });
    },
    'down' => function (Builder $schema) {
        $schema->table('users', function (Blueprint $table) {
            $table->dropConstrainedForeignId('name_decoration')->dropColumn('name_decoration');
            $table->dropConstrainedForeignId('card_decoration')->dropColumn('card_decoration');
        });
    }
];