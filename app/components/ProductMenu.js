'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, Package, Wrench, Shield, Box, Droplet, Building } from 'lucide-react';
import Link from 'next/link';

// Centralized URL mapping for all products
const productUrlMap = {
  '(Np2/Np3/Np4) RCC Pipe All size of Dia': '/products/rcc-pipe-all-sizes',
  'RCC Pipe 200mm Dia': '/products/rcc-pipe-200mm',
  'RCC Spun Pipe': '/products/rcc-spun-pipe',
  'RCC Cement Pipe': '/products/rcc-cement-pipe',
  '300 MM Cement Pipe': '/products/300-mm-cement-pipe',
  'RCC Half Round Pipe': '/products/rcc-half-round-pipe',
  'RCC Manhole Cover in all size': '/products/rcc-manhole-cover-all-sizes',
  '1200 MM X 1200 MM Heavy Duty Plain Drain Cover': '/products/1200mm-x-1200mm-heavy-duty-plain-drain-cover',
  '1200 MM X 1200 MM Heavy Duty Perforated Drain Cover': '/products/1200mm-x-1200mm-heavy-duty-perforated-drain-cover',
  'Concrete Chamber Cover': '/products/concrete-chamber-cover',
  'RCC Chamber Cover': '/products/rcc-chamber-cover',
  'RCC Circular Manhole Cover': '/products/rcc-circular-manhole-cover',
  'Readymade RCC Septic Tank': '/products/readymade-rcc-septic-tank',
  '600 MM Dia RCC Septic Tank': '/products/600-mm-dia-rcc-septic-tank',
  '900 MM Dia RCC Septic Tank': '/products/900-mm-dia-rcc-septic-tank',
  '1200 MM Dia RCC Septic Tank': '/products/1200-mm-dia-rcc-septic-tank',
  '1800 MM Dia RCC Septic Tank': '/products/1800-mm-dia-rcc-septic-tank',
  'RCC Wall Compound': '/products/rcc-wall-compound'
};

// Helper function to get product URL
export const getProductUrl = (productName) => {
  return productUrlMap[productName] || '/products';
};

// Category icons mapping
const categoryIcons = {
  'RCC Pipe': Package,
  'Cement Pipe': Wrench,
  'Manhole Cover': Shield,
  'Chamber Cover': Box,
  'RCC Septic Tank': Droplet,
  'RCC Wall Compound': Building
};

export const menuData = [
  {
    title: 'RCC Pipe',
    icon: 'Package',
    subcategories: [
      '(Np2/Np3/Np4) RCC Pipe All size of Dia',
      'RCC Pipe 200mm Dia',
      'RCC Spun Pipe'
    ]
  },
  {
    title: 'Cement Pipe',
    icon: 'Wrench',
    subcategories: [
      'RCC Cement Pipe',
      '300 MM Cement Pipe',
      'RCC Half Round Pipe'
    ]
  },
  {
    title: 'Manhole Cover',
    icon: 'Shield',
    subcategories: [
      'RCC Manhole Cover in all size',
      '1200 MM X 1200 MM Heavy Duty Plain Drain Cover',
      '1200 MM X 1200 MM Heavy Duty Perforated Drain Cover'
    ]
  },
  {
    title: 'Chamber Cover',
    icon: 'Box',
    subcategories: [
      'Concrete Chamber Cover',
      'RCC Chamber Cover',
      'RCC Circular Manhole Cover'
    ]
  },
  {
    title: 'RCC Septic Tank',
    icon: 'Droplet',
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
    icon: 'Building',
    subcategories: [
      'RCC Wall Compound'
    ]
  }
];

export default function ProductMenu({ defaultOpenCategory = null, currentProduct = null }) {
  const [openMenus, setOpenMenus] = useState(() => {
    if (defaultOpenCategory !== null) {
      return { [defaultOpenCategory]: true };
    }
    return {};
  });
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

  const getCategoryIcon = (categoryTitle) => {
    const IconComponent = categoryIcons[categoryTitle];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : <Package className="w-5 h-5" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold flex items-center justify-between hover:from-green-700 hover:to-green-800 transition-all duration-300"
        >
          <span className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Browse Categories
          </span>
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
                  <span className="flex items-center gap-3">
                    <span className="text-green-600">{getCategoryIcon(menu.title)}</span>
                    <span className="font-semibold text-gray-800">{menu.title}</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openMenus[index] ? 'rotate-90' : ''}`} />
                </button>

                {openMenus[index] && (
                  <div className="bg-gray-50 px-6 py-2">
                    {menu.subcategories.map((sub, subIndex) => {
                      const isActive = currentProduct === sub;
                      return (
                        <Link
                          key={subIndex}
                          href={getProductUrl(sub)}
                          className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                            isActive 
                              ? 'bg-green-100 text-green-700 font-semibold' 
                              : 'text-gray-600 hover:text-green-600 hover:bg-white'
                          }`}
                        >
                          {sub}
                        </Link>
                      );
                    })}
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
            <div key={index} className="border-r border-b border-gray-200 last:border-r-0">
              <div className="relative">
                <button
                  onClick={() => toggleMenu(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 group"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-green-600 group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(menu.title)}
                    </span>
                    <span className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      {menu.title}
                    </span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-all duration-300 group-hover:text-green-600 ${openMenus[index] ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown */}
                <div className={`absolute left-0 right-0 top-full bg-white border-x border-b border-gray-200 rounded-b-lg shadow-xl z-10 transition-all duration-300 overflow-hidden ${
                  openMenus[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="py-2">
                    {menu.subcategories.map((sub, subIndex) => {
                      const isActive = currentProduct === sub;
                      return (
                        <Link
                          key={subIndex}
                          href={getProductUrl(sub)}
                          className={`block px-6 py-3 transition-all duration-200 border-l-4 ${
                            isActive 
                              ? 'border-green-600 bg-green-50 text-green-700 font-semibold' 
                              : 'border-transparent text-gray-600 hover:text-green-600 hover:bg-gray-50 hover:border-green-300'
                          }`}
                        >
                          <span className="flex items-center justify-between">
                            <span>{sub}</span>
                            {isActive && (
                              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                                Current
                              </span>
                            )}
                          </span>
                        </Link>
                      );
                    })}
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
