"use client";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [isCarsOpen, setIsCarsOpen] = useState(false);
  const [isHousesOpen, setIsHousesOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">RentalApp</div>

      {/* Main Categories */}
      <ul className="flex space-x-6">
        <li
          className="relative"
          onMouseEnter={() => setIsCarsOpen(true)}
          onMouseLeave={() => setIsCarsOpen(false)}
        >
          <span className="text-white cursor-pointer">Cars</span>
          {isCarsOpen && (
            <ul className="absolute left-0 mt-2 bg-white text-black p-2 rounded-md shadow-lg">
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Rent a Car
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Sell a Car
              </li>
            </ul>
          )}
        </li>

        <li
          className="relative"
          onMouseEnter={() => setIsHousesOpen(true)}
          onMouseLeave={() => setIsHousesOpen(false)}
        >
          <span className="text-white cursor-pointer">Houses</span>
          {isHousesOpen && (
            <ul className="absolute left-0 mt-2 bg-white text-black p-2 rounded-md shadow-lg">
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Rent a House
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Sell a House
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search for cars or houses..."
          className="px-4 py-2 rounded-md border-none"
        />
      </div>

      {/* Icons */}
      <div className="flex space-x-4">
        <span className="text-white">❤️</span>
        <span className="text-white">✉️</span>
        <span className="text-white">👤</span>
      </div>

      {/* Auth Buttons */}
      <div className="space-x-4">
        <button className="bg-white text-gray-800 px-4 py-2 rounded-md">
          Login
        </button>
        <button className="bg-white text-gray-800 px-4 py-2 rounded-md">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
