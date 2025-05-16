import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { auth } = usePage().props;
  const menuData = [
    {title:"Home", url:"/", position:"start"},
    {title:"Shop", url:"/product", position:"start"},
    {title:"Blog", url:"/blog", position:"start"},
    {title:"Favorite", url:"/favorite", icon:"fa-solid fa-heart", position:"end"},
    {title:"Cart", url:"/cart", icon:"fa-solid fa-cart-shopping", position:"end"},
  ];
  const [open, setIsOpen] = useState(false)
  const pathName = window.location.pathname;
  const isActive = (url) => pathName === url; 
  
  return(
    <>
      <nav className="navbar fixed justify-between items-center top-0 left-0 w-full shadow-md bg-white border-2 border-b-brown lg:border-brown z-50 
                    lg:top-auto lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-[96%] lg:mt-5 lg:rounded-xl">
        {/* navbar start  */}
        <div className="navbar-start">
          <div className='hidden lg:flex space-x-3 ms-4'>
            {menuData.filter(item => item.position == "start").map((item, index) => (
              <div key={index} className={`cursor-pointer px-2 ${isActive(item.url) ? "font-bold text-brown" : ""}`}>
                <a href={item.url}>{item.title}</a>
              </div>
            ))}
          </div>
          <div className="lg:hidden">
            <img src="/assets/img/logo_coffe.png" alt="Beanie Logo" className="w-14 h-auto object-contain" />
          </div>
        </div>
        {/* navbar center  */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <img src="/assets/img/logo_coffe.png" alt="Beanie Logo" className="w-24 h-24 object-contain" />
        </div>
        {/* navbar end  */}
        <div className="navbar-end">
          <label className="hidden lg:flex input input-bordered items-center gap-2 border-2 border-brown">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <>
            <div className="flex md:space-x-2 lg:ms-4">
              {menuData.filter(item => item.position == "end").map((item, index) => (
                <div key={index} className={`rounded-full px-3 py-2 text-brown hover:bg-brown hover:text-white cursor-pointer ${isActive(item.url) ? " text-white bg-brown" : ""}`}>
                  <a href={item.url} className={item.icon}></a>
                </div>
              ))}
            </div>
          </>
          <button className="rounded-full px-3 py-2 ms-2 text-brown hover:bg-brown hover:text-white lg:hidden"
            onClick={() => setIsOpen(!open)}>
            {open ? <i className="fa-solid fa-xmark fa-lg"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
        </div>
        {/* mobile menu  */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-base-100 shadow-lg lg:hidden z-50">
            <ul className="px-1 py-3 space-y-3">
              {menuData.filter(item => item.position == "start").map((item, index) => (
                <li key={index} className={`flex items-center px-3 ${isActive(item.url) ? "font-bold" : ""}`}>
                  <a href={item.url}>
                    <span className={`relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-brown after:mt-[4px] 
                                            ${isActive(item.url) ? "after:scale-x-100 after:origin-left after:transition after:duration-200 text-brown" : "after:scale-x-0"} 
                                            hover:after:scale-x-100 hover:after:origin-left hover:after:transition hover:after:duration-200`}
                    >
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
              <li className="w-full px-3">
                <label className="input input-bordered flex items-center gap-2 w-[340px] md:w-[730px] border-2 border-brown">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar;