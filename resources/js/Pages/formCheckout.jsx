import { useState } from 'react';
// import { router } from '@inertiajs/react';
import { usePage, Link, router } from "@inertiajs/react";

export default function FormCheckout() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const { cartItems, totalPrice } = usePage().props;
  const orderData = {
    total: totalPrice,
    payment_method: paymentMethod,
    shipping_address: paymentMethod === 'in_store_pickup' ? null : shippingAddress,
    items: cartItems.map(item => ({ id: item.id }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    router.post('/createOrder', orderData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <div className="p-5 space-y-4">
      {cartItems.map((item, index) => (
        <div key={index} className="card lg:card-side bg-base-100 shadow-xl p-5">
          <figure className=''>
            <img
              src={JSON.parse(item.product.product_img)[0]}
              alt={item.product.product_name}
              className="lg:w-40 rounded-md"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">{item.product.product_name}</h2>
            <p className="text-black">Qty: {item.qty}</p>
            <p className="text-black">Price: ${item.product.price * item.qty}</p>
          </div>
        </div>
      ))}
      <div className="text-right text-xl font-bold text-red-500">
        Total: ${totalPrice}
      </div>
    </div>
      <div className="mb-4">
        <label>Metode</label>
        <select
          className="select select-bordered w-full"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Select Metode</option>
          <option value="qris">QRIS</option>
          <option value="in_store_pickup">Pickup In Store</option>
        </select>
      </div>

      {paymentMethod && (
        <div className="mb-4">
          <img
            src="/assets/img/qris.jpg"
            alt="Metode Pembayaran"
            className="w-48 h-auto mx-auto"
          />
        </div>
      )}

      {paymentMethod && paymentMethod !== 'in_store_pickup' && (
        <div className="mb-4">
          <label>Alamat Pengiriman</label>
          <textarea
            className="textarea textarea-bordered w-full"
            rows="3"
            required
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
          />
        </div>
      )}

      <div className="mb-4 flex">
        <p>Total: </p>
        <span className='font-bold text-black ms-1'>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalPrice)}
        </span>
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={!paymentMethod || (paymentMethod !== 'in_store_pickup' && !shippingAddress)}
      >
        Buat Pesanan
      </button>
    </form>
  );
}
