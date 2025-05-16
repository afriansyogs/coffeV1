import { router } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

const BestCoffe = ({ productData = { data: [], links: [] } }) => {
  console.log(productData)
  return (
    <div className="mt-12 mx-4">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-dark-brown">Shop Best Coffe</h2>
        <div className="flex justify-end gap-2">
          <a href="/product" className="hidden lg:flex items-center justify-center w-32 h-12 rounded-full bg-brown text-white border-2 hover:bg-white hover:text-brown hover:border-brown active:scale-95 transition duration-200">
            View All
          </a>
            {/* Tombol Previous (←) */}
            <button
              onClick={() => {
                if (productData.prev_page_url) {
                  router.visit(productData.prev_page_url)
                }
              }}
              disabled={!productData.prev_page_url}
              className={`w-10 h-10 flex items-center justify-center rounded-full border text-lg transition ${productData.prev_page_url
                  ? 'bg-white text-gray-700 hover:bg-red-100'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>

            {/* Tombol Next (→) */}
            <button
              onClick={() => {
                if (productData.next_page_url) {
                  router.visit(productData.next_page_url)
                }
              }}
              disabled={!productData.next_page_url}
              className={`w-10 h-10 flex items-center justify-center rounded-full border text-lg transition ${productData.next_page_url
                  ? 'bg-white text-gray-700 hover:bg-red-100'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
      </div>

      {/* product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {productData.data.map((product, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
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
              <div className="mt-3 block lg:hidden">
                <Link href={`/product/${product.id}`}>
                  <button className="btn btn-sm btn-neutral w-full bg-brown">Show</button>
                </Link>
              </div>
            </div>

            {/* Hover Overlay product */}
            <div className="absolute inset-0 bg-black bg-opacity-0 lg:group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300">
              <div className="opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
              <Link href={`/product/${product.id}`}>
                <button className="btn btn-active shadow-md">Show</button>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12 md:mt-16 bg-transparent lg:hidden">
        <button className='w-72 h-14 rounded-md bg-dark-brown text-white border-2 hover:bg-white hover:text-brown hover:border-brown active:scale-110 transition duration-200'>
          View All
        </button>
      </div>
    </div>
  );
};

export default BestCoffe;
