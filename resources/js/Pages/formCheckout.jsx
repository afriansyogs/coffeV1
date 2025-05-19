import { useState } from 'react';
// import { router } from '@inertiajs/react';
import { usePage, Link,router } from "@inertiajs/react";

export default function FormCheckout() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const { selectedItems, totalPrice } = usePage().props;

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post('/checkout', {
      payment_method: paymentMethod,
      shipping_address: paymentMethod === 'in_store_pickup' ? null : shippingAddress,
      items: selectedItems.map(item => ({ id: item.id }))
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      
      <div className="mb-4">
        <label>Metode Pembayaran</label>
        <select
          className="select select-bordered w-full"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Pilih Metode</option>
          <option value="qris">QRIS</option>
          <option value="in_store_pickup">Ambil di Toko</option>
        </select>
      </div>

      {paymentMethod && (
        <div className="mb-4">
          <img
            src="/assets/img/payment-preview.png"
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

      <div className="mb-4">
        <p>Total: Rp {totalPrice.toLocaleString("id-ID")}</p>
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
