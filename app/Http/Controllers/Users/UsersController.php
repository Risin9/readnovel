<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Users\Users;

class UsersController extends Controller
{

    public function login(Request $request){

        if(!empty($request->loginInfo)){

            var_dump($request->loginInfo['loginName']);
            var_dump($request->loginInfo['password']);
            die;
            return $request;
            die;
        }else{
            return view('/users/index');
        }
        
    }

    //register user
    public function register(Request $request){

        if (!empty($request->formData)) {

            $user = new Users();
            $userInfo = [
                'name'=> $request->formData['userName'],
                'email'=> $request->formData['email'],
                'password'=> password_hash($request->formData['pwd'], PASSWORD_BCRYPT)
            ];

            $userId = '';
            $userId = $user->insertGetId($userInfo);

            return $userId;
        }else{

            return view('users/index');
        }
    }
    //get user info
    public function getUserIdByNameOrEmail(Request $request){
        $user = new Users();
        //var_dump($request->userInfo);

        $searchAttribute = array_keys($request->userInfo)[0];

        $userInfo = [];

        if ($searchAttribute == 'userName') {
            $userInfo = $user->where('name', "=", $request->userInfo['userName'])->get();

        } else if($searchAttribute == 'email') {
            $userInfo = $user->where('email', '=', $request->userInfo['email'])->get();
        }
        return empty($userInfo[0]) ? [] : $userInfo[0];
    }
}
