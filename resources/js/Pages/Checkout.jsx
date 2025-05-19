const Checkout = () => {
  const { cartItems } = usePage().props;
  const [step, setStep] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      router.visit("/cart");
    }
  }, [cartItems]);

  const toggleSelect = (item) => {
    const isSelected = selectedItems.some((i) => i.id === item.id);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const totalQty = selectedItems.reduce((total, item) => total + item.qty, 0);
  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.product.price * item.qty,
    0
  );

  return (
    <section className="min-h-screen py-10 px-6">
      {step === 1 ? (
        <>
          <h2 className="text-2xl font-bold mb-6">Pilih Item untuk Checkout</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center p-4 border rounded-lg shadow">
                  <input
                    type="checkbox"
                    checked={selectedItems.some((i) => i.id === item.id)}
                    onChange={() => toggleSelect(item)}
                    className="checkbox checkbox-primary mr-4"
                  />
                  <img
                    src={JSON.parse(item.product.product_img)[0]}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.product.product_name}</h3>
                    <p>Qty: {item.qty}</p>
                    <p>Rp {item.product.price.toLocaleString("id-ID")}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-4 rounded-lg shadow h-fit">
              <h3 className="text-lg font-bold mb-4">Ringkasan</h3>
              <p>Total Item: {selectedItems.length}</p>
              <p>Total Qty: {totalQty}</p>
              <p className="font-bold">
                Total: Rp {totalPrice.toLocaleString("id-ID")}
              </p>
              <button
                className="btn btn-primary w-full mt-4"
                disabled={selectedItems.length === 0}
                onClick={() => setStep(2)}
              >
                Lanjut ke Pembayaran
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <button onClick={() => setStep(1)} className="mb-4 text-primary underline">
            &larr; Kembali
          </button>
          <h2 className="text-2xl font-bold mb-6">Checkout</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Item yang Dibeli</h3>
              {selectedItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={JSON.parse(item.product.product_img)[0]}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p>{item.product.product_name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                    <p className="font-semibold">
                      Rp {(item.product.price * item.qty).toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* <FormCheckout selectedItems={selectedItems} totalPrice={totalPrice} /> */}
          </div>
        </>
      )}
    </section>
  );
};

Checkout.layout = (page) => <MainLayout children={page} />;

export default Checkout;