<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;

// Route::apiResource('login',AuthController::class);
// Route::apiResource('signup',AuthController::class);

Route::group([

    'middleware' => 'api',
    

], function ($router) {

    Route::post('/login', [App\Http\Controllers\AuthController::class,'login'])->name('login');
    Route::post('/signup', [App\Http\Controllers\AuthController::class,'signup'])->name('signup');
    Route::apiResource('users',UsersController::class);
    // Route::post('/sendPasswordResetLink', [App\Http\Controllers\ResetPasswordController::class,'sendPasswordResetLink'])->name('sendEmail');
    // Route::post('login', 'AuthController@login');
    // Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});