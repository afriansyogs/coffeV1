import React from 'react';

const Sosmed = () => {
  const sosmedData = [
    {icon:"fa-brands fa-facebook-f", url:""},
    {icon:"fa-brands fa-instagram", url:""},
    {icon:"fa-brands fa-x-twitter", url:""},
    {icon:"fa-brands fa-linkedin-in", url:""},
    {icon:"fa-brands fa-youtube", url:""},
  ]
  return(
    <>
      <h1 className='text-center font-semibold text-4xl'>SUSCRIBE US</h1>
      <h4 className='text-center mt-2'>Ikuti cerita kami, di social media kami!</h4>
      <div className="flex space-x-4 p-2 justify-center items-center">
        {sosmedData.map((item, index) => (
          <div key={index} className="transition-transform transform duration-200 hover:scale-125 cursor-pointer">
            <a href={item.url}>
              <i className={item.icon}></i>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}


export default Sosmed;