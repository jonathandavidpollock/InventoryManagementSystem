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

Route::get('/products', 'ProductsController@index');

Route::get('/products/add/{id}', 'ProductsController@add');

Route::get('/products/delete/{id}', 'ProductsController@delete');



Route::get('/', function () {

    $products = DB::table('products')->get();

    return view('welcome',compact('products'));
});
