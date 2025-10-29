'use client';

import { useState } from 'react';
import { Search, Phone, MapPin, FileText } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Top Bar */}
      <div className="gradient-primary text-white py-3 px-4 md:px-8 animate-fade-in-up">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>GST No: 27AMKPC3004A1ZW</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Address: Haveli Pune - 412201, Maharashtra, India</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>Contact: +91 8048619027</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="gradient-secondary text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#6E7C59] font-bold text-lg">VE</span>
            </div>
            <div className="text-xl font-bold">Vedant Enterprises</div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="/" className="hover:text-white transition-all duration-300 relative group">Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="#products" className="hover:text-white transition-all duration-300 relative group">Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="/gallery" className="hover:text-white transition-all duration-300 relative group">Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="/about" className="hover:text-white transition-all duration-300 relative group">About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="/contact" className="hover:text-white transition-all duration-300 relative group">Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a></li>
          </ul>

          {/* Search Icon */}
          <div className="hidden md:block">
            <Search className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden gradient-primary border-t border-green-700 animate-slide-in-left">
            <ul className="px-4 py-4 space-y-4">
              <li><a href="/" className="block hover:text-white transition-colors py-2">Home</a></li>
              <li><a href="#products" className="block hover:text-white transition-colors py-2">Products</a></li>
              <li><a href="/gallery" className="block hover:text-white transition-colors py-2">Gallery</a></li>
              <li><a href="/about" className="block hover:text-white transition-colors py-2">About Us</a></li>
              <li><a href="/contact" className="block hover:text-white transition-colors py-2">Contact Us</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
