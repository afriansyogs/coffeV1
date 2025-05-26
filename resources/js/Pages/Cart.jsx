import React, { useState } from "react";
import { usePage, Link,router } from "@inertiajs/react";
import MainLayout from "../layouts/MainLayout";
import FormCheckout from "./FormCheckout";

const Cart = () => {
  const { cartItems } = usePage().props;
  const [selectedItems, setSelectedItems] = useState([]);
  const [step, setStep] = useState(1);

  const toggleSelect = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const selectedCart = cartItems.filter((item) => selectedItems.includes(item.id));
  const totalItems = selectedCart.length;
  const totalQty = selectedCart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = selectedCart.reduce(
    (total, item) => total + item.product.price * item.qty,
    0
  );

  const handleCheckout = () => {
    // if (selectedItems.length > 0) {
    //   router.visit(`/checkout?items=${selectedItems.join(',')}`);
    // }
    const queryString = selectedItems.join(",");
    router.get(`/formCheckout?items=${queryString}`);
  };

  const handleDeleteCartItem = (id) => {
    router.delete(`/cart/${id}`);
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-10 min-h-svh">
    <h2 className="text-2xl font-bold text-center text-brown mb-8">Your Shopping Cart</h2>

    {cartItems.length === 0 ? (
      <div className="text-center py-20">
        <img src="/assets/img/cart_empty1.png" alt="Empty cart" className="mx-auto w-52 h-auto mb-6" />
        <p className="text-gray-600 text-lg mb-4">Waw, Your Cart Stil Empty!</p>
        <Link href="/product">
          <button className="btn bg-dark-brown text-white px-6 py-3 rounded-lg hover:bg-dark-brown transition">Shop Now</button>
        </Link>
      </div>
    ) : (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* List Item */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleSelect(item.id)}
                className="checkbox checkbox-sm"
              />
              <img
                src={JSON.parse(item.product.product_img)[0]}
                alt={item.product.product_name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.product.product_name}</h3>
                <p className="text-sm text-black">Qty: {item.qty}</p>
                <p className="text-sm text-red-500 mt-1">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.product.price)}
                </p>
              </div>
              {/* Tombol hapus bisa ditambahkan */}
              <button onClick={() => handleDeleteCartItem(item.id)} className="btn btn-error btn-sm btn-outline w-auto pt-3 pb-6 flex justify-center items-center">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
        </div>

        {/* Ringkasan */}
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Ringkasan Belanja</h3>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">Total Produk</p>
            <p className="text-gray-800">{totalQty} pcs</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">Total Item Terpilih</p>
            <p className="text-gray-800">{totalItems} item</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-600">Total Harga</p>
            <p className="text-gray-800 font-bold">
              Rp {totalPrice.toLocaleString("id-ID")}
            </p>
          </div>
          {/* <button
            className="btn btn-primary w-full"
            disabled={selectedItems.length === 0}
            onClick={handleCheckout}
          >
            Lanjut ke Pembayaran
          </button>
          {step === 2 && (
            <FormCheckout selectedItems={selectedItems} totalPrice={totalPrice} />
          )} */}

              <button
                className="btn btn-primary"
                disabled={selectedItems.length === 0}
                // onClick={() => {
                //   const selectedIds = selectedItems.map(item => item.id).join(',');
                //   router.visit(`/checkout/form?items=${selectedIds}`);
                // }}
                onClick={handleCheckout}
              >
                Checkout
              </button>

        </div>
      </div>
    )}
  </section>
  );
};

Cart.layout = (page) => <MainLayout children={page} />;
export default Cart;
