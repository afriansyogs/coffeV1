import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { router } from "@inertiajs/react";
import MainLayout from '../layouts/MainLayout';

const ProductDetail = () => {
  const { product } = usePage().props;
  const [mainImage, setMainImage] = useState(JSON.parse(product.product_img)[0]);
  const handleAddToCart = () => {
    router.post("/cart/add", { productId: product.id });
  }
  return(
    <>
      <div className="bg-transparent">
      <div className="max-w-7xl mx-auto p-4 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gambar Produk */}
          <div className="md:sticky top-20 pt-5">
            <div className="w-full h-96 relative">
              <img
                src={`/${mainImage}`}
                alt={product.product_name}
                className="w-full h-full object-cover rounded-lg mt-2 border-2 border-slate-200"
              />
            </div>
            <div className="flex mt-8 space-x-2 py-2 overflow-x-auto">
              {JSON.parse(product.product_img).map((img, i) => (
                <img
                  key={i}
                  src={`/${img}`}
                  alt={product.product_name}
                  className="w-20 h-20 object-cover rounded cursor-pointer"
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Info Produk */}
          <div className="space-y-6 mt-10 h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold">{product.product_name}</h1>
            <h1 className="text-xl font-semibold">Stock: {product.stock}</h1>
            <div className="text-3xl font-bold text-red-600">
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
            </div>

            <p className="whitespace-pre-line">{product.description}</p>

            <div>
              {product.stock === 0 ? (<Link
                href={'/product'}
                type="button"
                className="flex justify-center items-center px-6 py-3 border border-black text-white bg-slate-500 rounded-lg w-full"
              >
                <span className="ms-3">Find Other Product</span>
              </Link>) : (<button
                onClick={handleAddToCart}
                type="button"
                className="flex justify-center items-center px-6 py-3 border border-black text-white bg-dark-brown rounded-lg w-full"
              >
                <i className="fa-solid fa-cart-plus"></i>
                <span className="ms-3">Add to Cart</span>
              </button>)}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

ProductDetail.layout = page => <MainLayout children={page} />
export default ProductDetail;