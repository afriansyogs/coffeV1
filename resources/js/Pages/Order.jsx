import React from 'react';
import { usePage } from '@inertiajs/react';
import MainLayout from '../layouts/MainLayout';

const Order = () => {
  const { orders } = usePage().props;

  const statusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'text-gray-500';
      case 'processing':
        return 'text-blue-400';
      case 'completed':
        return 'text-green-500';
      case 'cancelled':
        return 'text-red-500';
      default:
        return '';
    }
  };
  
  return(
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-brown mb-6 mt-20 text-center">Pesanan Saya</h1>

        {orders.length === 0 ? (
          <div className="text-center text-gray-500">Belum ada pesanan.</div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
              >
                <div className="flex justify-between flex-wrap gap-y-2">
                  <div>
                    <p className="text-lg font-semibold">Order #{order.id}</p>
                    <p className="text-sm text-gray-600">
                      Metode: <span className="font-medium text-black">{order.payment_method}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Status: <span className={`font-semibold ${statusColor(order.status)}`}>{order.status}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Date: {new Date(order.created_at).toLocaleDateString()}</p>
                    <p className="text-xl font-bold text-black">                        
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(order.total)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t pt-4 space-y-3">
                  {order.order_items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={JSON.parse(item.product.product_img)[0]}
                          alt={item.product.product_name}
                          className="w-14 h-14 object-cover rounded-md"
                        />
                        <div>
                          <p className="font-medium">{item.product.product_name}</p>
                          <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                        </div>
                      </div>
                      <div className="text-right text-red-500 font-semibold">
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

Order.layout = (page) => <MainLayout children={page} />;
export default Order;