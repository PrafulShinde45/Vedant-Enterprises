'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Phone, MapPin, FileText, ChevronDown } from 'lucide-react';
import { menuData } from './ProductMenu';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [manuallyClosed, setManuallyClosed] = useState(false);

  useEffect(() => {
    // Only restore manually closed state, don't auto-open dropdown
    const savedManuallyClosed = localStorage.getItem('manuallyClosed');
    if (savedManuallyClosed !== null) {
      setManuallyClosed(JSON.parse(savedManuallyClosed));
    }

    // Handle dropdown state based on current page - only open if manually opened before
    const handleRouteChange = () => {
      if (typeof window !== 'undefined') {
        if (window.location.pathname === '/products' && !manuallyClosed) {
          setIsProductsDropdownOpen(true);
          localStorage.setItem('productsDropdownOpen', 'true');
        } else {
          setIsProductsDropdownOpen(false);
          localStorage.setItem('productsDropdownOpen', 'false');
        }
      }
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProductsDropdown = () => {
    const newState = !isProductsDropdownOpen;
    setIsProductsDropdownOpen(newState);
    localStorage.setItem('productsDropdownOpen', JSON.stringify(newState));
    setManuallyClosed(!newState); // Set manually closed when closing
    localStorage.setItem('manuallyClosed', JSON.stringify(!newState));
    setExpandedCategories({}); // Reset expanded categories when closing/opening
  };

  const toggleCategory = (index) => {
    setExpandedCategories(prev => {
      const newState = {};
      newState[index] = !prev[index];
      return newState;
    });
  };

  const toggleMobileProducts = () => {
    setIsMobileProductsOpen(!isMobileProductsOpen);
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
            <div className="text-xl font-bold">Vedant Enterprises</div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="/" className="hover:text-white transition-all duration-300 relative group">Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li className="relative">
              <a href="/products" onClick={(e) => { e.preventDefault(); toggleProductsDropdown(); }} className="hover:text-white transition-all duration-300 relative group flex items-center cursor-pointer">
                Products
                <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <div
                className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg z-50 border border-gray-200 transition-all duration-300 ${isProductsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                style={{
                  width: Object.keys(expandedCategories).some(key => expandedCategories[key]) ? '24rem' : '16rem',
                  pointerEvents: isProductsDropdownOpen ? 'auto' : 'none'
                }}
              >
                <div className="flex">
                  {/* Categories Column */}
                  <div className={`py-2 ${
                    Object.keys(expandedCategories).some(key => expandedCategories[key]) ? 'w-1/2 border-r border-gray-200' : 'w-full'
                  }`}>
                    {menuData.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => toggleCategory(index)}
                        className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                          expandedCategories[index] ? 'bg-gray-100 text-green-600' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className="font-semibold text-gray-800">{category.title}</span>
                        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${expandedCategories[index] ? 'rotate-180' : ''}`} />
                      </button>
                    ))}
                  </div>
                  {/* Subcategories Column - Only show when a category is expanded */}
                  {Object.keys(expandedCategories).some(key => expandedCategories[key]) && (
                    <div className="w-1/2">
                      <div className="py-2 px-4">
                        {menuData[Object.keys(expandedCategories)[0]].subcategories.map((sub, subIndex) => (
                          <a
                            key={subIndex}
                            href={sub === '(Np2/Np3/Np4) RCC Pipe All size of Dia' ? '/products/rcc-pipe-all-sizes' : sub === 'RCC Pipe 200mm Dia' ? '/products/rcc-pipe-200mm' : sub === 'RCC Spun Pipe' ? '/products/rcc-spun-pipe' : '/products'}
                            onClick={() => {
                              setIsProductsDropdownOpen(false);
                              localStorage.setItem('productsDropdownOpen', 'false');
                            }}
                            className="block py-2 px-4 text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </li>
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
              <li>
                <button onClick={toggleMobileProducts} className="flex items-center justify-between w-full hover:text-white transition-colors py-2">
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProductsOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    {menuData.map((category, index) => (
                      <div key={index} className="border-b border-green-600 last:border-b-0">
                        <button
                          onClick={() => toggleCategory(index)}
                          className="w-full text-left flex items-center justify-between hover:text-gray-200 transition-colors py-2"
                        >
                          <span className="font-semibold">{category.title}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCategories[index] ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedCategories[index] && (
                          <div className="bg-green-800 rounded-lg p-2 mt-1">
                            {category.subcategories.map((sub, subIndex) => (
                              <a
                                key={subIndex}
                                href={sub === '(Np2/Np3/Np4) RCC Pipe All size of Dia' ? '/products/rcc-pipe-all-sizes' : sub === 'RCC Pipe 200mm Dia' ? '/products/rcc-pipe-200mm' : sub === 'RCC Spun Pipe' ? '/products/rcc-spun-pipe' : '/products'}
                                className="block py-2 px-4 text-sm text-gray-300 hover:text-white transition-colors"
                              >
                                {sub}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
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
