import React from 'react';
import { usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import MainLayout from '../layouts/MainLayout';

const Product = () => {
  const { products } = usePage().props;
  return (
    <>
      <div className="pt-24 mx-4">
          <h2 className="mt-4 mb-10 text-2xl md:text-4xl font-bold text-dark-brown text-center">Shop Best Coffe</h2>

        {/* product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.data.map((product, index) => (
            <div
            key={index}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden lg:hover:shadow-2xl transition duration-300"
          >
            {/* product_img */}
            <div className="overflow-hidden">
              <img
                src={JSON.parse(product.product_img)[0]}
                alt={product.product_name}
                className="w-full h-64 object-cover transform transition duration-500 lg:group-hover:scale-110 lg:group-hover:brightness-90"
              />
            </div>
            {/* Info Produk */}
            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-800 line-clamp-1">
                {product.product_name}
              </h3>
              <p className="text-sm text-red-500">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
              </p>
              {/* button md dan sm  */}
              <div className="mt-3 block lg:hidden z-10">
                <Link href={`/product/${product.id}`}>
                  <button className="btn btn-sm btn-neutral w-full bg-brown">Show</button>
                </Link>
              </div>
            </div>
          
            {/* Hover Overlay product */}
            <div className="hidden absolute inset-0 bg-black bg-opacity-0 lg:group-hover:bg-opacity-40 lg:flex items-center justify-center transition-all duration-300">
              <div className="opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <Link href={`/product/${product.id}`}>
                  <button className="btn btn-active shadow-md">Show</button>
                </Link>
              </div>
            </div>
          </div>
          
          ))}
        </div>
        <div className="flex justify-end my-4">
          {/* Tombol Previous (←) */}
          {products.links.map((link, index) => (
            <button
              key={index}
              disabled={!link.url}
              onClick={() => link.url && router.visit(link.url)}
              dangerouslySetInnerHTML={{ __html: link.label }}
              className={`px-4 py-2 border text-sm mx-1 rounded ${link.active
                  ? 'bg-dark-brown text-white'
                  : 'bg-white text-gray-700 hover:bg-brown hover:text-white'
                } ${!link.url ? 'cursor-not-allowed text-gray-400' : ''}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

Product.layout = page => <MainLayout children={page} />
export default Product;