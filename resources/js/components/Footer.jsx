const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        
        {/* Kolom 1: Tentang Kami */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Tentang Kami</h3>
          <p className="text-sm">
            Kami adalah platform yang menyediakan berbagai layanan inovatif untuk kebutuhan Anda.
          </p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Beranda</a></li>
            <li><a href="#" className="hover:text-gray-400">Layanan</a></li>
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            <li><a href="#" className="hover:text-gray-400">Kontak</a></li>
          </ul>
        </div>

        {/* Kolom 3: Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Ikuti Kami</h3>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-gray-400"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>

        {/* Kolom 4: Hubungi Kami */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Hubungi Kami</h3>
          <p className="text-sm">Email: support@example.com</p>
          <p className="text-sm">Telepon: +62 812-3456-7890</p>
        </div>
      </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-400 border-t-2 border-black pb-6">
        <h1 className="mt-4">&copy; 2025 Semua Hak Dilindungi.</h1>
      </div>
    </footer>
  );
};

export default Footer;
