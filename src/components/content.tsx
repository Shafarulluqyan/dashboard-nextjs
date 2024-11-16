import React from "react";
import { LuBellRing } from "react-icons/lu";

export default function Content() {
  return (
    <div className="flex flex-col w-full">
      {/* Navbar */}
      <div className="bg-black h-20 flex w-full border border-gray-600">
        <div className="flex items-center justify-between w-full px-5">
          {/* Profile Section */}
          <div className="flex items-center space-x-2 text-white">
            <div className="bg-[#eeb58f] rounded-full overflow-hidden">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg"
                alt="profile"
                className="object-cover"
                width={42}
                height={42}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-md font-bold">Shafarul Luqyan</h2>
              <p className="text-sm text-gray-300">Hello, Welcome back!</p>
            </div>
          </div>

          {/* Search & Notifications */}
          <div className="flex items-center space-x-2">
            <input
              className="w-72 h-9 bg-gray-800 rounded-lg px-4 text-sm text-white placeholder-gray-400"
              placeholder="Search or type command"
            />
            <LuBellRing className="text-lg text-white" />
            <span className="px-2.5 py-1.5 bg-[#98E5DD] rounded-lg text-xs flex items-center">
              2 New
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-700 h-full">
        <div className="bg-gray-800 ">
          <h2>ada disini</h2>
        </div>
      </div>
    </div>
  );
}
