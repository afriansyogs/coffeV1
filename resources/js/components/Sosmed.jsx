import React from 'react';

const Sosmed = () => {
  const sosmedData = [
    {icon:"fa-brands fa-facebook-f", url:"https://www.facebook.com/Starbucks/"},
    {icon:"fa-brands fa-instagram", url:"https://www.instagram.com/starbucks/?hl=en"},
    {icon:"fa-brands fa-x-twitter", url:"https://x.com/starbucks?lang=en"},
    {icon:"fa-brands fa-linkedin-in", url:"https://www.linkedin.com/company/starbucks"},
    {icon:"fa-brands fa-youtube", url:"https://www.youtube.com/user/starbucks"},
  ]
  return(
    <>
      <h1 className='text-center font-semibold text-2xl md:text-3xl lg:text-4xl text-dark-brown font-serif'>SUSCRIBE US</h1>
      <h4 className='text-center mt-2 font-medium text-brown'>Follow our stories, on our social media!</h4>
      <div className="flex justify-center mt-5 mb-2 px-4">
        <form className="flex w-full max-w-md rounded-full border-2 border-brown overflow-hidden shadow-sm">
          <input
            type="email"
            placeholder="Write your email address here..."
            className="flex-grow px-4 py-2 text-xs sm:text-sm md:text-base outline-none text-gray-700 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-white hover:bg-brown hover:text-white px-4 sm:px-5 text-xs sm:text-sm md:text-base font-semibold text-brown border-l-2 border-brown rounded-l-full"
          >
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
    </>
  )
}


export default Sosmed;