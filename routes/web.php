<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

//Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    //Route::get('/', 'Auth\LoginController@login')->name('login');
    Route::get('/', 'IndexController@index')->name('index');
});
Auth::routes();

Route::group(['before' => 'users'], function () {

});

Route::get('/users/login', 'Users\UsersController@login')->name('login');
Route::post('/users/login', 'Users\UsersController@login');
//Route::get('/users/register', 'Users\UsersController@register');
// Route::post('/users/getUsers', 'Users\UsersController@getUsers');
Route::get('/users/register', 'Users\UsersController@register')->name('register');
//Route::post('/users/register', 'Users\RegisterController');
Route::post('/users/getUserIdByNameOrEmail', 'Users\UsersController@getUserIdByNameOrEmail');
Route::get('/hello', 'HelloController@index')->name('hello');
Route::get('/index', 'IndexController@index')->name('index');

