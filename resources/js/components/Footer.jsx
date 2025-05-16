const Footer = () => {
  return (
    <footer className="bg-brown text-white">
      <div className="p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        
        {/* Kolom 1: Tentang Kami */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-sm">
            We offer more than just brewed coffee, eEplore premium beans and top-quality brewing equipment for the perfect cup at home.
          </p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/product" className="hover:text-gray-400">Shop</a></li>
            <li><a href="/nlog" className="hover:text-gray-400">Blog</a></li>
          </ul>
        </div>

        {/* Kolom 3: Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Information</h3>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-gray-400"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>

        {/* Kolom 4: Hubungi Kami */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              {/* Icon Lokasi */}
              <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span className="">
                Jl. Bledak Kantil IV No.27, Tlogosari Kulon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50196
              </span>
            </li>
            <li className="flex items-center gap-3">
              {/* Icon WhatsApp */}
              <i className="fa-brands fa-whatsapp text-white fa-xl"></i>
              <p className="">089670388783</p>
            </li>
            <li className="flex items-center gap-3">
              {/* Icon Telepon */}
              <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <p className="">089670388783</p>
            </li>
          </ul>
        </div>
      </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-white border-t-2 border-white pb-6">
        <h1 className="mt-4">&copy; 2025 Semua Hak Dilindungi.</h1>
      </div>
    </footer>
  );
};

export default Footer;
