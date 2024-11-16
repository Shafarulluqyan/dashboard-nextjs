import React from "react";
import { LuBellRing } from "react-icons/lu";

export default function Sidebar() {
  return (
    <div className="bg-black border border-gray-600 border-t-0  h-screen flex w-3/12">
      {/* Logo */}
      <div className="flex h-screen items-center px-4">
        <span className="text-white text-3xl font-bold">Side bar</span>
      </div>
    </div>
  );
}
