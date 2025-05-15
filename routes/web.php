<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

// Auth route
Route::get('/register', [AuthController::class, 'registerPage'])->name('registerPage');
Route::post('/register', [AuthController::class, 'registerProcess'])->name('registerProcess');

Route::get('/login', [AuthController::class, 'loginPage'])->name('loginPage');
Route::post('/login', [AuthController::class, 'loginProcess'])->name('loginProcess');
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');