import React from "react";
import { LuBellRing } from "react-icons/lu";

export default function Navbar() {
  return (
    <div className="bg-black h-20 flex">
      {/* Logo */}
      <div className="flex w-3/12 h-full items-center border border-gray-600">
        <span className="text-white text-3xl mx-5 font-bold">Logo</span>
      </div>

      {/* Navbar Items */}
      <div className="flex px-4 items-center justify-between w-full border border-gray-600 border-l-0">
        {/* Profile Section */}
        <div className="text-white flex items-center space-x-2">
          <div className="bg-[#eeb58f] rounded-full overflow-hidden">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg"
              alt="profile"
              className="object-cover"
              width={42}
              height={42}
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-md font-bold">Shafarul Luqyan</h2>
            <p className="text-sm text-gray-300">Hello, Welcome back!</p>
          </div>
        </div>

        {/* Search & Notifications */}
        <div className="flex items-center space-x-2">
          <span className="w-72 h-9 flex items-center bg-[#eeb58f] rounded-lg px-3">
            Search
          </span>
          <span>
            <LuBellRing className="text-white text-lg" />
          </span>
          <span className="px-2.5 py-1.5 flex items-center bg-[#98E5DD] rounded-lg text-xs">
            2 New
          </span>
        </div>
      </div>
    </div>
  );
}
