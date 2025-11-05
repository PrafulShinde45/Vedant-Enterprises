'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Filter, X, Eye } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    image: '/assets/150mm-dia-rcc-pipe-300x400.webp',
    title: 'RCC Pipe 150mm',
    description: 'Durable 150mm diameter RCC pipe',
    category: 'pipes'
  },
  {
    id: 2,
    image: '/assets/200mm-rcc-pipe-300x400.webp',
    title: 'RCC Pipe 200mm',
    description: 'High-quality 200mm RCC pipe',
    category: 'pipes'
  },
  {
    id: 3,
    image: '/assets/300mm-cement-pipe-300x400.webp',
    title: 'Cement Pipe 300mm',
    description: 'Strong 300mm cement pipe',
    category: 'pipes'
  },
  {
    id: 4,
    image: '/assets/half-round-pipe-300x400.webp',
    title: 'Half Round Pipe',
    description: 'Versatile half-round pipe design',
    category: 'pipes'
  },
  {
    id: 5,
    image: '/assets/rcc-spun-pipe-300x400.webp',
    title: 'RCC Spun Pipe',
    description: 'Precision spun RCC pipe',
    category: 'pipes'
  },
  {
    id: 6,
    image: '/assets/rcc-cement-pipe-300x400.webp',
    title: 'RCC Cement Pipe',
    description: 'High-strength RCC cement pipe',
    category: 'pipes'
  },
  {
    id: 7,
    image: '/assets/manh1-300x400.webp',
    title: 'Manhole Cover Type 1',
    description: 'Heavy-duty manhole cover',
    category: 'covers'
  },
  {
    id: 8,
    image: '/assets/manh2-300x400.webp',
    title: 'Manhole Cover Type 2',
    description: 'Industrial grade manhole cover',
    category: 'covers'
  },
  {
    id: 9,
    image: '/assets/manh3-300x400.webp',
    title: 'Manhole Cover Type 3',
    description: 'Reinforced manhole cover',
    category: 'covers'
  },
  {
    id: 10,
    image: '/assets/st1-300x400.webp',
    title: 'Septic Tank Model 1',
    description: 'Reliable septic tank system',
    category: 'tanks'
  },
  {
    id: 11,
    image: '/assets/st2-300x400.webp',
    title: 'Septic Tank Model 2',
    description: 'Advanced septic tank design',
    category: 'tanks'
  },
  {
    id: 12,
    image: '/assets/st3-300x400.webp',
    title: 'Septic Tank Model 3',
    description: 'Premium septic tank solution',
    category: 'tanks'
  },
  {
    id: 13,
    image: '/assets/cc1-300x400.webp',
    title: 'Chamber Cover Type 1',
    description: 'Durable chamber cover',
    category: 'covers'
  },
  {
    id: 14,
    image: '/assets/cc2-300x400.webp',
    title: 'Chamber Cover Type 2',
    description: 'Weather-resistant chamber cover',
    category: 'covers'
  },
  {
    id: 15,
    image: '/assets/cc3-300x400.webp',
    title: 'Chamber Cover Type 3',
    description: 'Heavy-duty chamber cover',
    category: 'covers'
  },
  {
    id: 16,
    image: '/assets/WhatsApp-Image-2025-02-01-at-6.07.07-PM-300x400.webp',
    title: 'Construction Material',
    description: 'Quality construction material',
    category: 'walls'
  },
  {
    id: 17,
    image: '/assets/slider2.webp',
    title: 'Construction Equipment',
    description: 'Advanced construction equipment and machinery',
    category: 'equipment'
  },
  {
    id: 18,
    image: '/assets/g2.webp',
    title: 'General Product',
    description: 'High-quality construction material',
    category: 'walls'
  }
];

const categories = [
  { id: 'all', name: 'All Products', count: galleryItems.length },
  { id: 'pipes', name: 'Pipes', count: galleryItems.filter(item => item.category === 'pipes').length },
  { id: 'walls', name: 'Walls', count: galleryItems.filter(item => item.category === 'walls').length },
  { id: 'tanks', name: 'Tanks', count: galleryItems.filter(item => item.category === 'tanks').length },
  { id: 'covers', name: 'Covers', count: galleryItems.filter(item => item.category === 'covers').length },
  { id: 'equipment', name: 'Equipment', count: galleryItems.filter(item => item.category === 'equipment').length }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(galleryItems);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === category));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 bg-cover bg-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-transparent to-green-800/50"></div>
        <div className="absolute inset-0 bg-[url('/assets/slider2.webp')] bg-cover bg-center opacity-20"></div>
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-green-400 rounded-full blur-2xl animate-float opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-400 rounded-full blur-2xl animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-400 rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 md:px-16 pt-28 md:pt-16 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent leading-tight">Our Concrete Innovations</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of high-quality construction materials, each crafted with precision and built to last.
            </p>
            <div className="flex justify-center">
              <a href="/contact" className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-white/20 transition-all duration-300">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-gray-50">
        {/* Filter Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0 animate-fade-in-up">Browse by Category</h2>
              <div className="flex items-center text-gray-600">
                <Filter className="w-5 h-5 mr-2" />
                <span>{filteredItems.length} products</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center animate-slide-in-left">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => filterItems(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover-lift animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openModal(item)}
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                      <div className="flex items-center mt-3 text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>Click to view details</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-5 h-5 text-gray-800" />
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>


      </main>

      <Footer />

      {/* Enhanced Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-fade-in-up" onClick={closeModal}>
          <div className="relative max-w-5xl max-h-full p-4">
            <button
              className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-gray-300 transition-colors z-60"
              onClick={closeModal}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full max-h-96 object-cover"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
                  <Eye className="w-5 h-5 text-gray-800" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedImage.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{selectedImage.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`/contact?product=${encodeURIComponent(selectedImage.title)}`}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 text-center"
                  >
                    Get Quote
                  </a>
                  <button
                    onClick={closeModal}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
