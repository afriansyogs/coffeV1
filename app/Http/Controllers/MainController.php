<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MainController extends Controller
{
    public function homePage() {
        $category = Category::all();
        $products = Product::with('category')->orderBy('created_at', 'desc')->paginate(4);
        $newArrival = Product::with('category')->orderBy('created_at', 'desc')->limit(5)->get();
        $blogs = Blog::all();

        return Inertia::render('Home', [
            'category' => $category,
            'products' => $products,
            'newArrival' => $newArrival,
            'blogs' => $blogs
        ]);
    }

    public function productPage() {
        $products = Product::with('category')->orderBy('created_at', 'desc')->paginate(8);

        return Inertia::render('Product', [
            'products' => $products
        ]);
    }

    public function productDetail($id) {
        $product = Product::with('category')->findOrFail($id);

        return Inertia::render('ProductDetail', [
            'product' => $product
        ]);
    }

    public function blogPage() {
        $blogs = Blog::all();

        return Inertia::render('Blog', [
            'blogs' => $blogs
        ]);
    }

    public function blogDetail($id) {
        $blogs = Blog::findOrFail($id);

        return Inertia::render('BlogDetail', [
            'blogs' => $blogs
        ]);
    }

    public function cartPage() {
        return inertia::render('Cart');
    }

    public function favoritePage() {
        return inertia::render('Favorite');
    }
}
