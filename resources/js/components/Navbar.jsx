import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';

const Navbar = () => {
  const { auth } = usePage().props;
  const menuData = [
    {title:"Home", url:"", position:"start"},
    {title:"Shop", url:"", position:"start"},
    {title:"Blog", url:"", position:"start"},
    {title:"Pages", url:"", position:"start"},
    {title:"Favorite", url:"", icon:"fa-solid fa-heart", position:"end"},
    {title:"Cart", url:"", icon:"fa-solid fa-cart-shopping", position:"end"},
  ];
  const [open, setIsOpen] = useState(false)
  return(
    <>
      <nav className="navbar justify-between items-center relative w-[96%] mx-auto mt-4 rounded-xl shadow-md bg-white">
        <div className="navbar-start">
          <div className='flex space-x-3 ms-4'>
            {menuData.filter(item => item.position == "start").map((item, index) => (
              <div key={index} className="cursor-pointer px-2">
                <a href={item.url}>{item.title}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <img src="/assets/img/burga_final.png" alt="Beanie Logo" className="w-28 h-28 object-contain" />
        </div>
        <div className="navbar-end">
          <label className="hidden lg:flex input input-bordered items-center gap-2">
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
              <div className="flex space-x-3 ms-4">
              {menuData.filter(item => item.position == "end").map((item, index) => (
                <div key={index} className="rounded-full px-3 py-2 hover:bg-blue-400 hover:text-red-600 cursor-pointer">
                  <a href={item.url} className={item.icon}></a>
                </div>
              ))}
              </div>
            </>
        </div>
      </nav>
    </>
  )
}

export default Navbar;