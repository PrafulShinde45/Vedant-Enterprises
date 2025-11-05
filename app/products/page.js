'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductMenu from '../components/ProductMenu';
import { Eye } from 'lucide-react';

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
        {/* Featured Products Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
              <p className="text-lg text-gray-600">
                Take a closer look at some of our premium construction materials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* RCC Pipe */}
              <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover-lift animate-bounce-in">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/assets/150mm-dia-rcc-pipe-300x400.webp"
                    alt="RCC Pipe 150mm"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">RCC Pipe 150mm</h3>
                    <p className="text-sm opacity-90">Durable 150mm diameter RCC pipe</p>
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

              {/* Cement Pipe */}
              <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover-lift animate-bounce-in" style={{ animationDelay: '0.1s' }}>
                <div className="h-64 overflow-hidden">
                  <img
                    src="/assets/300mm-cement-pipe-300x400.webp"
                    alt="Cement Pipe 300mm"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Cement Pipe 300mm</h3>
                    <p className="text-sm opacity-90">Strong 300mm cement pipe</p>
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

              {/* Manhole Cover */}
              <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover-lift animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                <div className="h-64 overflow-hidden">
                  <img
                    src="/assets/manh1-300x400.webp"
                    alt="Manhole Cover Type 1"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Manhole Cover Type 1</h3>
                    <p className="text-sm opacity-90">Heavy-duty manhole cover</p>
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

              {/* Septic Tank */}
              <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover-lift animate-bounce-in" style={{ animationDelay: '0.3s' }}>
                <div className="h-64 overflow-hidden">
                  <img
                    src="/assets/st1-300x400.webp"
                    alt="Septic Tank Model 1"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Septic Tank Model 1</h3>
                    <p className="text-sm opacity-90">Reliable septic tank system</p>
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

              {/* Chamber Cover */}
              <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover-lift animate-bounce-in" style={{ animationDelay: '0.4s' }}>
                <div className="h-64 overflow-hidden">
                  <img
                    src="/assets/cc1-300x400.webp"
                    alt="Chamber Cover Type 1"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Chamber Cover Type 1</h3>
                    <p className="text-sm opacity-90">Durable chamber cover</p>
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

              {/* Construction Equipment */}
              <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover-lift animate-bounce-in" style={{ animationDelay: '0.5s' }}>
                <div className="h-64 overflow-hidden">
                  <img
                    src="/assets/slider2.webp"
                    alt="Construction Equipment"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Construction Equipment</h3>
                    <p className="text-sm opacity-90">Advanced construction equipment and machinery</p>
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
            </div>

            <div className="text-center mt-12">
              <a
                href="/gallery"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 inline-block"
              >
                View All Products
              </a>
            </div>
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
