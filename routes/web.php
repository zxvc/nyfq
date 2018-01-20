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
//登录
Route::get('/admin/login', 'Admin\LoginController@login');        //登录
Route::post('/admin/login', 'Admin\LoginController@loginDo');   //post登录请求
Route::get('/admin/loginout', 'Admin\LoginController@loginout');  //注销
Route::group(['prefix' => 'admin', 'middleware' => ['admin.login']], function () {

    //首页
    Route::get('/', 'Admin\IndexController@index');       //首页
    Route::get('/index', 'Admin\IndexController@index');  //首页
    Route::get('/welcome', 'Admin\IndexController@welcome');  //欢迎页

    Route::get('/dashboard/index', 'Admin\IndexController@index');    //首页

    //错误页面
    Route::get('/error/500', 'Admin\IndexController@error');  //错误页面

    //管理员管理
    Route::get('/admin/index', 'Admin\AdminController@index');  //管理员管理首页
    Route::post('/admin/index', 'Admin\AdminController@index');  //搜索管理员
    Route::get('/admin/del/{id}', 'Admin\AdminController@del');  //删除管理员
    Route::get('/admin/edit', 'Admin\AdminController@edit');  //新建或编辑管理员
    Route::post('/admin/edit', 'Admin\AdminController@editDo');  //新建或编辑管理员
    Route::get('/admin/editMySelf', ['as' => 'editMySelf', 'uses' => 'Admin\AdminController@editMySelf']);  //新建或编辑管理员
    Route::post('/admin/editMySelf', 'Admin\AdminController@editMySelfPost');  //新建或编辑管理员
    Route::post('/admin/testPassword', 'Admin\AdminController@testPassword');  //新建或编辑管理员

    //Banner管理
    Route::get('/banner/index', 'Admin\BannerController@index');  //Banner管理首页
    Route::post('/banner/index', 'Admin\BannerController@index');  //搜索管理员
    Route::get('/banner/add', 'Admin\BannerController@add');  //新建Banner
    Route::post('/banner/add', 'Admin\BannerController@addDo');  //新建Banner
    Route::get('/banner/del/{id}', 'Admin\BannerController@del');  //删除Banner
});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
