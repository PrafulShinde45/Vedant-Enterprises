
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Phone, MapPin, FileText, ChevronDown, X } from 'lucide-react';
import { menuData, getProductUrl } from './ProductMenu';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const [manuallyClosed, setManuallyClosed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('manuallyClosed');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  // Searchable content database
  const searchableContent = [
    // Pages
    { title: 'Home', type: 'page', url: '/', keywords: ['home', 'main', 'index', 'vedant enterprises'] },
    { title: 'Products', type: 'page', url: '/products', keywords: ['products', 'catalog', 'items'] },
    { title: 'Gallery', type: 'page', url: '/gallery', keywords: ['gallery', 'images', 'photos', 'pictures'] },
    { title: 'About Us', type: 'page', url: '/about', keywords: ['about', 'company', 'information', 'vedant'] },
    { title: 'Contact Us', type: 'page', url: '/contact', keywords: ['contact', 'phone', 'email', 'address', 'reach'] },
    
    // Products - RCC Pipe
    { title: 'RCC Pipe All Sizes', type: 'product', category: 'RCC Pipe', url: '/products/rcc-pipe-all-sizes', keywords: ['rcc', 'pipe', 'np2', 'np3', 'np4', 'all sizes', 'diameter'] },
    { title: 'RCC Pipe 200mm Dia', type: 'product', category: 'RCC Pipe', url: '/products/rcc-pipe-200mm', keywords: ['rcc', 'pipe', '200mm', 'diameter', '200'] },
    { title: 'RCC Spun Pipe', type: 'product', category: 'RCC Pipe', url: '/products/rcc-spun-pipe', keywords: ['rcc', 'spun', 'pipe', 'reinforced', 'concrete'] },
    
    // Products - Cement Pipe
    { title: 'RCC Cement Pipe', type: 'product', category: 'Cement Pipe', url: '/products/rcc-cement-pipe', keywords: ['rcc', 'cement', 'pipe', 'concrete', 'drainage'] },
    { title: '300 MM Cement Pipe', type: 'product', category: 'Cement Pipe', url: '/products/300-mm-cement-pipe', keywords: ['300mm', 'cement', 'pipe', '300', 'diameter'] },
    { title: 'RCC Half Round Pipe', type: 'product', category: 'Cement Pipe', url: '/products/rcc-half-round-pipe', keywords: ['rcc', 'half', 'round', 'pipe', 'semi', 'circular'] },
    
    // Products - Manhole Cover
    { title: 'RCC Manhole Cover All Sizes', type: 'product', category: 'Manhole Cover', url: '/products/rcc-manhole-cover-all-sizes', keywords: ['manhole', 'cover', 'rcc', 'all sizes', 'drain'] },
    { title: '1200mm x 1200mm Heavy Duty Plain Drain Cover', type: 'product', category: 'Manhole Cover', url: '/products/1200mm-x-1200mm-heavy-duty-plain-drain-cover', keywords: ['1200mm', 'heavy duty', 'plain', 'drain', 'cover', 'manhole'] },
    { title: '1200mm x 1200mm Heavy Duty Perforated Drain Cover', type: 'product', category: 'Manhole Cover', url: '/products/1200mm-x-1200mm-heavy-duty-perforated-drain-cover', keywords: ['1200mm', 'heavy duty', 'perforated', 'drain', 'cover', 'manhole'] },
    
    // Products - Chamber Cover
    { title: 'Concrete Chamber Cover', type: 'product', category: 'Chamber Cover', url: '/products/concrete-chamber-cover', keywords: ['concrete', 'chamber', 'cover', 'inspection'] },
    { title: 'RCC Chamber Cover', type: 'product', category: 'Chamber Cover', url: '/products/rcc-chamber-cover', keywords: ['rcc', 'chamber', 'cover', 'reinforced'] },
    { title: 'RCC Circular Manhole Cover', type: 'product', category: 'Chamber Cover', url: '/products/rcc-circular-manhole-cover', keywords: ['rcc', 'circular', 'manhole', 'cover', 'round'] },
    
    // Products - RCC Septic Tank
    { title: 'Readymade RCC Septic Tank', type: 'product', category: 'RCC Septic Tank', url: '/products/readymade-rcc-septic-tank', keywords: ['readymade', 'rcc', 'septic', 'tank', 'precast'] },
    { title: '600 MM Dia RCC Septic Tank', type: 'product', category: 'RCC Septic Tank', url: '/products/600-mm-dia-rcc-septic-tank', keywords: ['600mm', 'septic', 'tank', 'rcc', '600'] },
    { title: '900 MM Dia RCC Septic Tank', type: 'product', category: 'RCC Septic Tank', url: '/products/900-mm-dia-rcc-septic-tank', keywords: ['900mm', 'septic', 'tank', 'rcc', '900'] },
    { title: '1200 MM Dia RCC Septic Tank', type: 'product', category: 'RCC Septic Tank', url: '/products/1200-mm-dia-rcc-septic-tank', keywords: ['1200mm', 'septic', 'tank', 'rcc', '1200'] },
    { title: '1800 MM Dia RCC Septic Tank', type: 'product', category: 'RCC Septic Tank', url: '/products/1800-mm-dia-rcc-septic-tank', keywords: ['1800mm', 'septic', 'tank', 'rcc', '1800'] },
    
    // Products - RCC Wall Compound
    { title: 'RCC Wall Compound', type: 'product', category: 'RCC Wall Compound', url: '/products/rcc-wall-compound', keywords: ['rcc', 'wall', 'compound', 'boundary', 'fence'] },
  ];

  useEffect(() => {
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
  }, [manuallyClosed]);

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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = searchableContent.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const keywordMatch = item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery));
      const categoryMatch = item.category?.toLowerCase().includes(lowerQuery);
      return titleMatch || keywordMatch || categoryMatch;
    }).slice(0, 8); // Limit to 8 results

    setSearchResults(results);
  };

  const handleResultClick = (url) => {
    router.push(url);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isSearchOpen) {
        toggleSearch();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isSearchOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Top Bar */}
      <div className="gradient-primary text-white py-2 sm:py-3 px-4 md:px-8 animate-fade-in-up">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0 w-full md:w-auto">
            <div className="flex items-center space-x-2">
              <FileText className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">GST No: 27AMKPC3004A1ZW</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">Address: Haveli Pune - 412201, Maharashtra, India</span>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
        
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+91 98813 46886</span>
           
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
            <li><Link href="/" className="hover:text-white transition-all duration-300 relative group">Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link></li>
            <li className="relative">
              <div
                className="relative group"
                onMouseEnter={() => {
                  if (closeTimeoutRef.current) {
                    clearTimeout(closeTimeoutRef.current);
                    closeTimeoutRef.current = null;
                  }
                  setIsProductsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (closeTimeoutRef.current) {
                    clearTimeout(closeTimeoutRef.current);
                  }
                  closeTimeoutRef.current = setTimeout(() => {
                    setIsProductsDropdownOpen(false);
                  }, 150);
                }}
              >
                <Link href="/products" className="hover:text-white transition-all duration-300 relative flex items-center cursor-pointer">
                  Products
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Professional Mega Menu Dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 w-[960px] max-w-[92vw] transition-all duration-200 ${
                    isProductsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                  }`}
                  style={{ pointerEvents: isProductsDropdownOpen ? 'auto' : 'none' }}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-gray-200">
                    <div className="px-6 py-5 border-b border-gray-100">
                      <div className="text-sm font-semibold text-gray-900">Browse products</div>
                      <div className="text-xs text-gray-500">Quickly find a category and jump in</div>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {menuData.map((category, index) => (
                          <div key={index}>
                            <div className="text-[13px] uppercase tracking-wide text-gray-500 mb-2">{category.title}</div>
                            <ul className="space-y-1.5">
                              {category.subcategories.map((sub, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={getProductUrl(sub)}
                                    onClick={() => setIsProductsDropdownOpen(false)}
                                    className="group flex items-center justify-between rounded-md px-2 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                                  >
                                    <span className="truncate">{sub}</span>
                                    <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-gray-300 group-hover:text-gray-400" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href="/contact"
                        onClick={() => setIsProductsDropdownOpen(false)}
                        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                      >
                        Contact sales
                      </Link>
                      <Link
                        href="/products"
                        onClick={() => setIsProductsDropdownOpen(false)}
                        className="text-sm text-green-700 hover:text-green-800"
                      >
                        View all products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li><Link href="/gallery" className="hover:text-white transition-all duration-300 relative group">Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link></li>
            <li><Link href="/about" className="hover:text-white transition-all duration-300 relative group">About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link></li>
            <li><Link href="/contact" className="hover:text-white transition-all duration-300 relative group">Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link></li>
          </ul>

          {/* Search Icon */}
          <div className="hidden md:block">
            <Search 
              className="w-6 h-6 cursor-pointer hover:text-white transition-colors" 
              onClick={toggleSearch}
            />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden hover:text-white transition-colors p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Search Modal */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 animate-fade-in">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 animate-slide-in-down">
              {/* Search Header */}
              <div className="flex items-center gap-3 p-4 border-b border-gray-200">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search products, pages..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="flex-1 outline-none text-gray-800 text-lg"
                />
                <button 
                  onClick={toggleSearch}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {searchQuery.trim().length < 2 ? (
                  <div className="p-8 text-center text-gray-500">
                    <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>Type at least 2 characters to search</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result.url)}
                        className="w-full px-6 py-3 hover:bg-gray-50 transition-colors text-left flex items-center justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                            {result.title}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-xs ${
                              result.type === 'product' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {result.type}
                            </span>
                            {result.category && (
                              <span className="text-gray-400">• {result.category}</span>
                            )}
                          </div>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90 group-hover:text-green-600 transition-colors" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <div className="text-4xl mb-3">🔍</div>
                    <p className="font-semibold mb-1">No results found</p>
                    <p className="text-sm">Try searching for products like "pipe", "septic tank", or "manhole cover"</p>
                  </div>
                )}
              </div>

              {/* Search Footer */}
              <div className="p-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
                <span>Press ESC to close</span>
                <span>{searchResults.length} result{searchResults.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden gradient-primary border-t border-green-700 animate-slide-in-left">
            <ul className="px-4 py-4 space-y-4">
              <li><Link href="/" className="block hover:text-white transition-colors py-2">Home</Link></li>
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
                              <Link
                                key={subIndex}
                                href={getProductUrl(sub)}
                                className="block py-2 px-4 text-sm text-gray-300 hover:text-white transition-colors"
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
              </li>
              <li><Link href="/gallery" className="block hover:text-white transition-colors py-2">Gallery</Link></li>
              <li><Link href="/about" className="block hover:text-white transition-colors py-2">About Us</Link></li>
              <li><Link href="/contact" className="block hover:text-white transition-colors py-2">Contact Us</Link></li>
              <li>
                <button 
                  onClick={toggleSearch}
                  className="flex items-center gap-2 hover:text-white transition-colors py-2"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
