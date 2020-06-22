<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Phones;
use Faker\Generator as Faker;
//use Faker\Factory as Faker;
use Illuminate\Support\Str;


$factory->define(Phones::class, function (Faker $faker) {
    return [
        //
        'UserId' => 1,
        'TxtPhoneNum' => $faker->phoneNumber(),
        'IsActive' => 1
    ];
});
