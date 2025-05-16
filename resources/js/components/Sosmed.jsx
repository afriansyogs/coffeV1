import React from 'react';

const Sosmed = () => {
  const sosmedData = [
    { icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/Starbucks/" },
    { icon: "fa-brands fa-instagram", url: "https://www.instagram.com/starbucks/?hl=en" },
    { icon: "fa-brands fa-x-twitter", url: "https://x.com/starbucks?lang=en" },
    { icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/company/starbucks" },
    { icon: "fa-brands fa-youtube", url: "https://www.youtube.com/user/starbucks" },
  ]
  return (
    <>
      <div className="relative bg-[#faf9f7] py-28 px-4 flex justify-center items-center">
        <img
          alt="Motif S"
          aria-hidden="true"
          className="absolute top-0 left-0 w-40 h-40 z-10 pointer-events-none select-none"
          src="/assets/img/37.png"
        />

        {/* motif_e - pojok kanan bawah  */}
        <img
          alt="Motif E"
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-40 h-40 z-10 pointer-events-none select-none"
          src="/assets/img/38.png"
        />

        {/* motif_x - center  */}
        <img
          alt="Motif X"
          aria-hidden="true"
          className="hidden md:block absolute top-0 right-0 left-0 mx-auto w-44 h-44 z-10 pointer-events-none select-none"
          src="/assets/img/39.png"
        />

        <div className="max-w-4xl px-8 text-center relative z-20">
          <h1 className='text-center font-semibold text-2xl md:text-3xl lg:text-4xl text-dark-brown font-serif'>SUSCRIBE US</h1>
          <h4 className='text-center mt-2 font-medium text-brown'>Follow our stories, on our social media!</h4>
          <div className="flex justify-center mt-5 mb-2 px-4">
            <form className="flex w-full max-w-md rounded-full border-2 border-brown overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="Write your email address here..."
                className="flex-grow px-4 py-2 text-xs sm:text-sm md:text-base outline-none text-gray-700 placeholder-gray-400"
              />
              <button type="submit" className="bg-white hover:bg-brown hover:text-white px-4 sm:px-5 text-xs sm:text-sm md:text-base font-semibold text-brown border-l-2 border-brown rounded-l-full">
                SUBSCRIBE
              </button>
            </form>
          </div>
          <div className="flex space-x-4 p-2 justify-center items-center pb-6">
            {sosmedData.map((item, index) => (
              <div key={index} className="transition-transform transform duration-200 hover:scale-125 cursor-pointer">
                <a href={item.url} className='text-brown'>
                  <i className={item.icon}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sosmed;