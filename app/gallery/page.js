'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Filter, X, Eye } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    image: '/assets/images/rcc-pipes.jpg',
    title: 'RCC Pipes',
    description: 'Durable and ready-made from Pune, India',
    category: 'pipes'
  },
  {
    id: 2,
    image: '/assets/images/compound-wall.jpg',
    title: 'Compound Wall',
    description: 'Strong and reliable boundary solutions',
    category: 'walls'
  },
  {
    id: 3,
    image: '/assets/images/septic-tank.jpg',
    title: 'Septic Tank',
    description: 'High-quality septic tank systems',
    category: 'tanks'
  },
  {
    id: 4,
    image: '/assets/images/fencing-post.jpg',
    title: 'Fencing Post',
    description: 'Robust fencing solutions',
    category: 'fencing'
  },
  {
    id: 5,
    image: '/assets/images/cover-block.jpg',
    title: 'Cover Block',
    description: 'Premium cover blocks for construction',
    category: 'blocks'
  },
  {
    id: 6,
    image: '/assets/images/drain-cover.jpg',
    title: 'Drain Cover',
    description: 'Heavy-duty drain covers',
    category: 'covers'
  },
  {
    id: 7,
    image: '/assets/images/boundary-wall.jpg',
    title: 'Boundary Wall',
    description: 'Secure boundary wall systems',
    category: 'walls'
  },
  {
    id: 8,
    image: '/assets/images/chamber-cover.jpg',
    title: 'Chamber Cover',
    description: 'Durable chamber covers',
    category: 'covers'
  },
  {
    id: 9,
    image: '/assets/images/culvert-pipe.jpg',
    title: 'Culvert Pipe',
    description: 'Reliable culvert pipe solutions',
    category: 'pipes'
  }
];

const categories = [
  { id: 'all', name: 'All Products', count: galleryItems.length },
  { id: 'pipes', name: 'Pipes', count: galleryItems.filter(item => item.category === 'pipes').length },
  { id: 'walls', name: 'Walls', count: galleryItems.filter(item => item.category === 'walls').length },
  { id: 'tanks', name: 'Tanks', count: galleryItems.filter(item => item.category === 'tanks').length },
  { id: 'fencing', name: 'Fencing', count: galleryItems.filter(item => item.category === 'fencing').length },
  { id: 'blocks', name: 'Blocks', count: galleryItems.filter(item => item.category === 'blocks').length },
  { id: 'covers', name: 'Covers', count: galleryItems.filter(item => item.category === 'covers').length }
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
      <section className="relative gradient-hero text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-6xl mx-auto px-6 md:px-16 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Product Gallery</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of high-quality construction materials, each crafted with precision and built to last.
            </p>
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

        {/* CTA Section */}
        <section className="py-20 gradient-primary text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-16 text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Need Something Specific?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Can't find what you're looking for? Contact us for custom solutions and bulk orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Request Custom Quote
              </a>
              <a href="tel:+918048619027" className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Call for Details
              </a>
            </div>
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
                    href="/contact"
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
