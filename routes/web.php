<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// Auth route
Route::get('/register', [AuthController::class, 'registerPage'])->name('registerPage');
Route::post('/register', [AuthController::class, 'registerProcess'])->name('registerProcess');

Route::get('/login', [AuthController::class, 'loginPage'])->name('login');
Route::post('/login', [AuthController::class, 'loginProcess'])->name('loginProcess');
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

Route::middleware(['web', 'auth'])->group(function () {
  // cart 
  Route::get('/cart', [MainController::class, 'cartPage'])->name('cart.index');
  Route::post('/cart/add', [MainController::class, 'addToCart'])->name('addToCart');
  Route::delete('/cart/{id}', [MainController::class, 'deleteCartItem'])->name('deleteCart');

  // checkout 
  Route::get('/formCheckout', [MainController::class, 'formCheckout'])->name('formCheckout');
  Route::post('/createOrder', [MainController::class, 'createOrder'])->name('createOrder');

  // favorite 
  Route::get('/favorite', [MainController::class, 'favoritePage'])->name('favorite.index');
  
  // profile
  Route::get('/profile', [MainController::class, 'profilePage'])->name('profilePage');
  
  // order
  Route::get('/order', [MainController::class, 'orderPage'])->name('orderPage');
  
});

// pages route
Route::get('/', [MainController::class, 'homePage'])->name('home');

Route::get('/product', [MainController::class, 'productPage'])->name('product.index');
Route::get('/product/{id}', [MainController::class, 'productDetail'])->name('product.show');

Route::get('/blog', [MainController::class, 'blogPage'])->name('blog.index');
Route::get('/blog/{id}', [MainController::class, 'blogDetail'])->name('blog.show');

