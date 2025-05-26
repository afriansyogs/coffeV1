import React, { useState } from "react";

const DropdownProfile = ({ show, setShowUserMenu }) => {
  const dropdownProfileData = [
    {name: "Profile", url: "/profile", icon:"fa-solid fa-user"},
    {name: "Transaction", url: "/order", icon:"fa-solid fa-receipt"},
    {name: "Logout", url: "/logout", icon:"fa-solid fa-right-from-bracket"},
  ]
  return(
    <div 
    className={`absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 text-brown ${show ? "block" : "hidden"}`}
    onMouseEnter={() => setShowUserMenu(true)}
    onMouseLeave={() => setShowUserMenu(false)}
  >
    {dropdownProfileData.map((item, index) => (
      <a key={index} href={item.url} className="flex items-center space-x-4 px-4 py-2 text-brown hover:bg-brown hover:text-white rounded-md">
        <i className={item.icon}></i> 
        <span className="">{item.name}</span>
      </a>
    ))}
    {/* <a href="/profile" className="block hover:bg-gray-200 px-4 py-2">Profile</a>
    <a href="/settings" className="block hover:bg-gray-200 px-4 py-2">Settings</a>
    <a href="/logout" className="block hover:bg-gray-200 px-4 py-2">Logout</a> */}
  </div>
  )
}

export default DropdownProfile;