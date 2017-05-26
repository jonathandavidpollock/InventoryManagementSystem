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

Route::get('/products/add', 'ProductsController@add');

Route::get('/products/delete/{id}', 'ProductsController@delete');



Route::get('/', function () {

    $products = DB::table('products')->get();
    $data = DB::SELECT(DB::raw('SELECT categories ,SUM(quantity) as TOTAL
FROM products GROUP BY categories;'));


    return view('welcome',compact('products', 'data'));
});

Route::post('/products/update/', 'ProductsController@update');
