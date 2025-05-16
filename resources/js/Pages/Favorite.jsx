import React from "react";
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react'
import MainLayout from '../layouts/MainLayout';

const Favorite = () => {
  return(
    <>
    {/* UI facorite jika kosong  */}
      <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4">
      {/* Icon atau gambar ilustrasi */}
      <img
        src="/assets/img/favorite_img.png"
        alt="Cart Kosong"
        className="w-40 h-40 object-contain mb-6 mt-24"
      />
      
      {/* Pesan kosong */}
      <h2 className="text-2xl font-semibold text-brown mb-2">You don't have a favorite product</h2>
      <p className="text-gray-500 mb-6">
        Let's find your favorite products and start shopping now!
      </p>

      {/* Tombol ke halaman produk */}
      <Link
        href="/product"
        className="btn bg-dark-brown text-white px-6 py-3 rounded-lg hover:bg-dark-brown transition mb-10"
      >
        Show Product
      </Link>
    </div>
    </>
  )
}

Favorite.layout = page => <MainLayout children={page} />
export default Favorite;