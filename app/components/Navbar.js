'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-green-600 text-white py-2 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0">
            <span>GST No: 27AMKPC3004A1ZW</span>
            <span>Address: Haveli Pune - 412201, Maharashtra, India</span>
          </div>
          <span>Contact: +91 8048619027</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#6E7C59] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            Vedant Enterprises
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="/" className="hover:text-green-200 transition-colors">Home</a></li>
            <li><a href="#products" className="hover:text-green-200 transition-colors">Products</a></li>
            <li><a href="/gallery" className="hover:text-green-200 transition-colors">Gallery</a></li>
            <li><a href="/about" className="hover:text-green-200 transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-200 transition-colors">Contact Us</a></li>
          </ul>

          {/* Search Icon */}
          <div className="hidden md:block">
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#6E7C59] border-t border-green-700">
            <ul className="px-4 py-4 space-y-4">
              <li><a href="/" className="block hover:text-green-200 transition-colors">Home</a></li>
              <li><a href="#products" className="block hover:text-green-200 transition-colors">Products</a></li>
              <li><a href="/gallery" className="block hover:text-green-200 transition-colors">Gallery</a></li>
              <li><a href="/about" className="block hover:text-green-200 transition-colors">About Us</a></li>
              <li><a href="/contact" className="block hover:text-green-200 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
