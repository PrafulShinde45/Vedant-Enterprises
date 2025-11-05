'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductMenu from '../components/ProductMenu';
import { Eye } from 'lucide-react';
import Link from 'next/link';

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 bg-cover bg-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-transparent to-green-800/50"></div>
        <div className="absolute inset-0 bg-[url('/assets/bg-pic.webp')] bg-cover bg-center opacity-20"></div>
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-green-400 rounded-full blur-2xl animate-float opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-400 rounded-full blur-2xl animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-400 rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 md:px-16 pt-12 md:pt-16 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent leading-tight">
              Our Products
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium construction materials, designed for durability, reliability, and sustainability in every project.
            </p>
            <div className="flex justify-center">
              <a href="/gallery" className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-white/20 transition-all duration-300">
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-gray-50">
        {/* All Products from Gallery with View Details */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">All Products</h2>
              <p className="text-lg text-gray-600">Hover any item and click View Details to open the product page.</p>
            </div>

            {(() => {
              const productCards = [
                { image: '/assets/150mm-dia-rcc-pipe-300x400.webp', title: 'RCC Pipe 150mm', desc: 'Durable 150mm diameter RCC pipe', href: '/products/rcc-pipe-all-sizes' },
                { image: '/assets/200mm-rcc-pipe-300x400.webp', title: 'RCC Pipe 200mm', desc: 'High-quality 200mm RCC pipe', href: '/products/rcc-pipe-200mm' },
                { image: '/assets/300mm-cement-pipe-300x400.webp', title: 'Cement Pipe 300mm', desc: 'Strong 300mm cement pipe', href: '/products/300-mm-cement-pipe' },
                { image: '/assets/half-round-pipe-300x400.webp', title: 'Half Round Pipe', desc: 'Versatile half-round pipe design', href: '/products/rcc-half-round-pipe' },
                { image: '/assets/rcc-spun-pipe-300x400.webp', title: 'RCC Spun Pipe', desc: 'Precision spun RCC pipe', href: '/products/rcc-spun-pipe' },
                { image: '/assets/rcc-cement-pipe-300x400.webp', title: 'RCC Cement Pipe', desc: 'High-strength RCC cement pipe', href: '/products/rcc-cement-pipe' },
                { image: '/assets/manh1-300x400.webp', title: 'Manhole Cover Type 1', desc: 'Heavy-duty manhole cover', href: '/products/rcc-manhole-cover-all-sizes' },
                { image: '/assets/manh2-300x400.webp', title: 'Manhole Cover Type 2', desc: 'Industrial grade manhole cover', href: '/products/1200mm-x-1200mm-heavy-duty-plain-drain-cover' },
                { image: '/assets/manh3-300x400.webp', title: 'Manhole Cover Type 3', desc: 'Reinforced manhole cover', href: '/products/1200mm-x-1200mm-heavy-duty-perforated-drain-cover' },
                { image: '/assets/st1-300x400.webp', title: 'Septic Tank Model 1', desc: 'Reliable septic tank system', href: '/products/readymade-rcc-septic-tank' },
                { image: '/assets/st2-300x400.webp', title: 'Septic Tank Model 2', desc: 'Advanced septic tank design', href: '/products/600-mm-dia-rcc-septic-tank' },
                { image: '/assets/st3-300x400.webp', title: 'Septic Tank Model 3', desc: 'Premium septic tank solution', href: '/products/900-mm-dia-rcc-septic-tank' },
                { image: '/assets/cc1-300x400.webp', title: 'Chamber Cover Type 1', desc: 'Durable chamber cover', href: '/products/concrete-chamber-cover' },
                { image: '/assets/cc2-300x400.webp', title: 'Chamber Cover Type 2', desc: 'Weather-resistant chamber cover', href: '/products/rcc-chamber-cover' },
                { image: '/assets/cc3-300x400.webp', title: 'Chamber Cover Type 3', desc: 'Heavy-duty chamber cover', href: '/products/rcc-circular-manhole-cover' },
                { image: '/assets/WhatsApp-Image-2025-02-01-at-6.07.07-PM-300x400.webp', title: 'Construction Material', desc: 'Quality construction material', href: '/products/rcc-wall-compound' },
                { image: '/assets/slider2.webp', title: 'Construction Equipment', desc: 'Advanced construction equipment and machinery', href: '/products' },
                { image: '/assets/g2.webp', title: 'General Product', desc: 'High-quality construction material', href: '/products/rcc-wall-compound' }
              ];

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {productCards.map((item, index) => (
                    <div
                      key={item.title + index}
                      className="relative group rounded-xl overflow-hidden shadow-lg hover-lift animate-bounce-in"
                      style={{ animationDelay: `${index * 0.06}s` }}
                    >
                      <div className="h-64 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                          <p className="text-sm opacity-90 mb-3">{item.desc}</p>
                          <Link href={item.href} className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100">
                            <Eye className="w-4 h-4" />
                            View Details
                          </Link>
                        </div>
                      </div>

                      {/* Quick eye button */}
                      <Link href={item.href} className="absolute top-4 right-4 bg-white/95 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="w-5 h-5 text-gray-800" />
                      </Link>
                    </div>
                  ))}
                </div>
              );
            })()}

          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Custom Solutions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our experts for custom orders, bulk pricing, or specialized requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="tel:+918048619027"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
