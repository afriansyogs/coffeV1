<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;


// Auth route
Route::get('/register', [AuthController::class, 'registerPage'])->name('registerPage');
Route::post('/register', [AuthController::class, 'registerProcess'])->name('registerProcess');

Route::get('/login', [AuthController::class, 'loginPage'])->name('loginPage');
Route::post('/login', [AuthController::class, 'loginProcess'])->name('loginProcess');
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

// pages route
Route::get('/', [MainController::class, 'homePage'])->name('home');
Route::get('/product', [MainController::class, 'productPage'])->name('product.index');
Route::get('/product/{id}', [MainController::class, 'productDetail'])->name('product.show');
Route::get('/blog', [MainController::class, 'blogPage'])->name('blog.index');
Route::get('/blog/{id}', [MainController::class, 'blogDetail'])->name('blog.show');