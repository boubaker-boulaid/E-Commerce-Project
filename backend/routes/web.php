<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hello',function () {
    return 'hello world';
});

// name taywli ikhtiyari 
Route::get('/dashbord/{nom?}',function(string $name = 'guest'){
    return 'hello '.$name .'!';
});

// kandiro wahd regix bach t9bl l9ima ila mat9blatch tay3tina 404
Route::get('/users/{username}', function ($username) {
    return "hello" . $username;
})->where('username', '[A-Za-z0-9_]+');



Route::prefix('admin')->group(function() {
    Route::get('/dashboard' , function () {
        return 'admin dashboard !!';
    });
    Route::get('/profile' , function () {
        return 'the admin profile !!';
    });
});