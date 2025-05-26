<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Cart;
use App\Models\Product;
use App\Models\Category;
use App\Models\Order;
use App\Models\Order_item;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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

    public function profilePage() {
        $userDetail = Auth::user();
        if ($userDetail) {
            return inertia::render('Profile',[
                'userDetail' => $userDetail
            ]);
        }
    }

    public function cartPage(){
        $user = Auth::user();

        // if (!$user) {
        //     return redirect()->route('login');
        // }

        $cartItems = Cart::with('product')
            ->where('user_id', $user->id)
            ->get();

        foreach ($cartItems as $item) {
            if ($item->product && $item->product->stock <= 0) {
                $item->delete();
            }
        }

        $cartItems = Cart::with('product')
            ->where('user_id', $user->id)
            ->get();

        return Inertia::render('Cart', [
            'cartItems' => $cartItems,
        ]);
    }

    public function deleteCartItem($id) {
        Cart::destroy($id);
        return redirect()->route('cart.index');
    }


    public function favoritePage() {
        return inertia::render('Favorite');
    }

    public function addToCart(Request $request) {
        $user = Auth::id();
        $productId = $request->input('productId');

        Cart::create([
            'user_id' => $user,
            'product_id' => $productId,
            'qty' => 1
        ]);

        return redirect()->route('cart.index')->with('success', 'Produk berhasil ditambahkan ke keranjang.');
    }

    public function formCheckout(Request $request) {
        $user = auth::user();
        $selectedIds = explode(',', $request->query('items'));
        // dd($selectedIds);
        $cartItems =  Cart::where('user_id', $user->id)
                        ->whereIn('id', $selectedIds)
                        ->get();

        $totalPrice = $cartItems->sum(fn($item) => $item->product->price * $item->qty);

        return Inertia::render('FormCheckout', [
            'cartItems' => $cartItems,
            'totalPrice' => $totalPrice,
        ]);
    }

    public function createOrder(Request $request) {
        $user = Auth::id();
        $validated = $request->validate([
            'total' => 'required|numeric',
            'payment_method' => 'required|in:qris,in_store_pickup',
            'shipping_address' => $request->payment_method === 'in_store_pickup' ? '' : 'required|string',
            'items' => 'required|array',
            'items.*.id' => 'required|exists:carts,id',
        ]);
        
        try {
            // Use transaction to ensure all operations succeed or fail together
            DB::beginTransaction();
            
            // Create the order
            $order = Order::create([
                'user_id' => $user,
                'total' => $validated['total'],
                'payment_method' => $validated['payment_method'],
                'shipping_address' => $validated['shipping_address'] ?? null,
                'status' => 'pending',
            ]);
            
            // Process each item in the order
            foreach ($validated['items'] as $item) {
                $cartItem = Cart::with('product')->find($item['id']);
                
                if (!$cartItem) {
                    continue; // Skip if cart item not found
                }
                
                // Create order item
                Order_item::create([
                    'order_id' => $order->id,
                    'product_id' => $cartItem->product_id,
                    'qty' => $cartItem->qty,
                    'price' => $cartItem->product->price,
                ]);
                
                // Remove item from cart
                $cartItem->delete();
            }
            
            DB::commit();
            
            // Redirect to order details page
            return redirect()->route('home', $order->id)
                ->with('success', 'Pesanan berhasil dibuat!');
                
        } catch (\Exception $e) {
            DB::rollBack();
            
            // Log the error
            // \Log::error('Order creation failed: ' . $e->getMessage());
            
            // Redirect back with error
            return redirect()->back()
                ->with('error', 'Terjadi kesalahan saat membuat pesanan. Silakan coba lagi.');
        }
    }

    public function orderPage() {
        $user = Auth::id();
        $orders = Order::with('orderItems.product')
                        ->where('user_id', $user)
                        ->latest()
                        ->get();

        return inertia::render('Order' , [
            'orders' => $orders
        ]);
    }
}
