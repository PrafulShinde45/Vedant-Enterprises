'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const menuData = [
  {
    title: 'RCC Pipe',
    subcategories: [
      '(Np2/Np3/Np4) RCC Pipe All size of Dia',
      'RCC Pipe 200mm Dia',
      'RCC Spun Pipe'
    ]
  },
  {
    title: 'Cement Pipe',
    subcategories: [
      'RCC Cement Pipe',
      '300 MM Cement Pipe',
      'RCC Half Round Pipe'
    ]
  },
  {
    title: 'Manhole Cover',
    subcategories: [
      'RCC Manhole Cover in all size',
      '1200 MM X 1200 MM Heavy Duty Plain Drain Cover',
      '1200 MM X 1200 MM Heavy Duty Perforated Drain Cover'
    ]
  },
  {
    title: 'Chamber Cover',
    subcategories: [
      'Concrete Chamber Cover',
      'RCC Chamber Cover',
      'RCC Circular Manhole Cover'
    ]
  },
  {
    title: 'RCC Septic Tank',
    subcategories: [
      'Readymade RCC Septic Tank',
      '600 MM Dia RCC Septic Tank',
      '900 MM Dia RCC Septic Tank',
      '1200 MM Dia RCC Septic Tank',
      '1800 MM Dia RCC Septic Tank'
    ]
  },
  {
    title: 'RCC Wall Compound',
    subcategories: [
      'RCC Wall Compound'
    ]
  }
];

export default function ProductMenu() {
  const [openMenus, setOpenMenus] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (index) => {
    setOpenMenus(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold flex items-center justify-between hover:from-green-700 hover:to-green-800 transition-all duration-300"
        >
          <span>Browse Categories</span>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
        </button>

        {isMobileMenuOpen && (
          <div className="border-t border-gray-200">
            {menuData.map((menu, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                <button
                  onClick={() => toggleMenu(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{menu.title}</span>
                  <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openMenus[index] ? 'rotate-90' : ''}`} />
                </button>

                {openMenus[index] && (
                  <div className="bg-gray-50 px-6 py-2">
                    {menu.subcategories.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sub === 'RCC Pipe 200mm Dia' ? '/products/rcc-pipe-200mm' : sub === '(Np2/Np3/Np4) RCC Pipe All size of Dia' ? '/products/rcc-pipe-all-sizes' : sub === 'RCC Spun Pipe' ? '/products/rcc-spun-pipe' : '#'}
                        className="block py-2 px-4 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-all duration-200"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {menuData.map((menu, index) => (
            <div key={index} className="border-r border-gray-200 last:border-r-0">
              <div className="relative">
                <button
                  onClick={() => toggleMenu(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300 group"
                >
                  <span className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                    {menu.title}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:text-green-600 ${openMenus[index] ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown */}
                <div className={`absolute left-0 right-0 top-full bg-white border border-gray-200 rounded-b-lg shadow-lg z-10 transition-all duration-300 overflow-hidden ${
                  openMenus[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="py-2">
                    {menu.subcategories.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sub === 'RCC Pipe 200mm Dia' ? '/products/rcc-pipe-200mm' : sub === '(Np2/Np3/Np4) RCC Pipe All size of Dia' ? '/products/rcc-pipe-all-sizes' : sub === 'RCC Spun Pipe' ? '/products/rcc-spun-pipe' : '#'}
                        className="block px-6 py-3 text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-all duration-200"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
