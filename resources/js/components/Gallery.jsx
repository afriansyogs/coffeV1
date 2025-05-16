import React from "react";

const Gallery = () => {
  const galleryData = [
    {img:"assets/img/gallery/ig_coffe1.jpg", url:"https://www.instagram.com/p/DJb4n2RIJVX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {img:"assets/img/gallery/ig_coffe2.jpg", url:"https://www.instagram.com/p/DIej46YRK4r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {img:"assets/img/gallery/ig_coffe3.jpg", url:"https://www.instagram.com/p/C663C_tybxm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {img:"assets/img/gallery/ig_coffe4.jpg", url:"https://www.instagram.com/p/DGYmbBcCHze/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {img:"assets/img/gallery/ig_coffe5.jpg", url:"https://www.instagram.com/p/C92fUCUy5IG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {img:"assets/img/gallery/ig_coffe6.jpg", url:"https://www.instagram.com/p/DIQlXPhs3yr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  ];

  return(
    <>
      <section className="py-10 bg-white">
  <div className="text-center mb-6 px-4">
    <h2 className="text-lg font-semibold tracking-wide uppercase">
      Follow our Instagram <span className="text-dark-brown">#COFFE</span>
    </h2>
  </div>
  <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-7 overflow-x-auto py-8 px-4 lg:px-0">
    {galleryData.map((item, index) => (
      <a
        key={index}
        href={item.url}
        className="transition-transform transform duration-300 hover:scale-110 ease-in-out hover:-translate-y-3 cursor-pointer"
      >
        <img
          src={item.img}
          alt={`Instagram ${index + 1}`}
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 object-cover rounded-xl flex-shrink-0"
        />
      </a>
    ))}
  </div>
</section>
    </>
  )
}

export default Gallery;