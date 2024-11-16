import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { FaChartPie, FaDollarSign, FaUserFriends } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="bg-black border border-gray-600 h-screen flex flex-col w-3/12">
      {/* Logo */}
      <div className="h-16 flex items-center justify-start border-b border-gray-600 px-5">
        <span className="text-white text-3xl font-bold">Logo</span>
      </div>

      {/* Menu Items */}
      <div className="mt-4">
        <span className="text-gray-500 text-sm px-6 mb-3 block">MENU</span>
        <div className="space-y-2">
          <div className="flex items-center text-white px-6 py-2 bg-gray-700 rounded-lg">
            <FaChartPie className="mr-3" />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center text-gray-400 hover:text-white px-6 py-2">
            <FiCreditCard className="mr-3" />
            <span>Transactions</span>
          </div>
          <div className="flex items-center text-gray-400 hover:text-white px-6 py-2">
            <BiTargetLock className="mr-3" />
            <span>My Goals</span>
          </div>
          <div className="flex items-center text-gray-400 hover:text-white px-6 py-2">
            <FaDollarSign className="mr-3" />
            <span>Investment</span>
          </div>
          <div className="flex items-center text-gray-400 hover:text-white px-6 py-2">
            <FiCreditCard className="mr-3" />
            <span>Bills and Payment</span>
          </div>
          <div className="flex items-center text-gray-400 hover:text-white px-6 py-2">
            <FaUserFriends className="mr-3" />
            <span>Analytics and Reports</span>
          </div>
        </div>
      </div>
    </div>
  );
}
