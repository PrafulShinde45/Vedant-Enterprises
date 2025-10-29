'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const galleryItems = [
  {
    id: 1,
    image: '/assets/images/rcc-pipes.jpg',
    title: 'RCC Pipes',
    description: 'Durable and ready-made from Pune, India'
  },
  {
    id: 2,
    image: '/assets/images/compound-wall.jpg',
    title: 'Compound Wall',
    description: 'Strong and reliable boundary solutions'
  },
  {
    id: 3,
    image: '/assets/images/septic-tank.jpg',
    title: 'Septic Tank',
    description: 'High-quality septic tank systems'
  },
  {
    id: 4,
    image: '/assets/images/fencing-post.jpg',
    title: 'Fencing Post',
    description: 'Robust fencing solutions'
  },
  {
    id: 5,
    image: '/assets/images/cover-block.jpg',
    title: 'Cover Block',
    description: 'Premium cover blocks for construction'
  },
  {
    id: 6,
    image: '/assets/images/drain-cover.jpg',
    title: 'Drain Cover',
    description: 'Heavy-duty drain covers'
  },
  {
    id: 7,
    image: '/assets/images/boundary-wall.jpg',
    title: 'Boundary Wall',
    description: 'Secure boundary wall systems'
  },
  {
    id: 8,
    image: '/assets/images/chamber-cover.jpg',
    title: 'Chamber Cover',
    description: 'Durable chamber covers'
  },
  {
    id: 9,
    image: '/assets/images/culvert-pipe.jpg',
    title: 'Culvert Pipe',
    description: 'Reliable culvert pipe solutions'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-12">
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-[#333333] mb-8 text-center">Our Gallery</h1>
            <p className="text-lg text-[#333333] leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              Explore our wide range of high-quality construction products. Each item is crafted with precision and durability in mind, serving various construction and infrastructure needs.
            </p>
            <div className="text-center mb-12">
              <button className="bg-[#5A6E45] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#4A5E35] transition-colors duration-300">
                See what we have for you..!
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => openModal(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300 z-60"
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-lg">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
