"use client";

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/" className="text-gray-600 hover:text-blue-800 transition">
          View Me
          </Link>
        </div>
        <div className="space-x-4">
          <a href="/tours" className="text-gray-700 hover:text-blue-600 transition">Our tours</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600 transition">About us</a>
          <a href="/booking" className="text-gray-700 hover:text-blue-600 transition">Booking</a>
          <a href="/faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
        </div>
        <button className="menu-button">&#9776;</button>
      </div>
    </nav>
  );
};

export default NavBar;