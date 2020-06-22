<?php

namespace App\Http\Controllers\users;

// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller{
    //
    use RegistersUsers;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    protected $redirectTo = '/home';

    public function __construct(){
        $this->middleware('guest');
    }

    public function Index(){
        return view('register');
    }
}
