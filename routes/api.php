<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('todos', 'TodoController@index');
Route::post('todos', 'TodoController@create');
Route::get('todos/{id}', 'TodoController@show');
Route::put('todos/{todo}', 'TodoController@update');
Route::post('todos/{todo}/complete', 'TodoController@complete');

Route::get('products', 'ProductController@index');
Route::delete('products/{product}', 'ProductController@delete');
