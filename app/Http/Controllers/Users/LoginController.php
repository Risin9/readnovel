<?php

namespace App\Http\Controllers\users;

// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;

use Illuminate\Foundation\Auth\AuthenticatesUsers;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class LoginController extends Controller
{
    use AuthenticatesUsers;

    /**
     * where direct to after login
     */

    protected $redirectTo = '/';



}
