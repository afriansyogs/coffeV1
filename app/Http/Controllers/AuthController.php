<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class AuthController extends Controller
{
    public function registerPage() {
        return Inertia::render('RegisterPage');
    }

    public function registerProcess(Request $request) {
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ], [
        'password.confirmed' => 'Confirm password does not match',
        ]);

        User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'user',
        ]);

        $login = [
            'username' => $request->username,
            'password' => $request->password,
        ];

        if (Auth::attempt($login)) {
            return redirect('/')->with('success', 'Acount Berhasil Dibuat.');
        } else {
        return redirect()->route('registerPage')->with('failed', 'Incorrect Username, Email or Password');
        }
    }

    public function loginPage() {
        return Inertia::render('LoginPage');
    }

    public function loginProcess(Request $request) {
        $request->validate([
        'email' => 'required|email',
        'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');
        $remember = $request->has('remember');

        if (Auth::attempt($credentials, $remember)) { // Gunakan remember token
        $user = Auth::user();
        if ($user->role !== 'user') {
            Auth::logout();
            return redirect()->route('loginPage')->withErrors(['email' => 'Unauthorized access.']);
        }
        return redirect('/');
        }
        return back()->withErrors(['email' => 'Invalid credentials.']);
    }

    public function logout() {
        Auth::logout();
        return redirect()->route('loginPage')->with('success', 'You have Successfully Logout');
    }
}
