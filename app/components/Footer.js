import { Phone, Mail, MapPin, FileText, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/918048619027" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float hover:scale-110 inline-block">
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      <footer className="relative gradient-primary text-white py-16 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-green-800/20"></div>
        <div className="absolute inset-0 bg-[url('/assets/bg-pic.webp')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="glassmorphism p-6 animate-stagger-1 hover-lift">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">Vedant Enterprises</h3>
              <p className="text-sm leading-relaxed mb-4 opacity-90">
                Leading provider of high-quality construction materials and solutions in Pune, Maharashtra. Committed to excellence and sustainability.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-green-200 transition-all duration-300 animate-icon-pulse hover:scale-125" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-green-200 transition-all duration-300 animate-icon-pulse hover:scale-125" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-green-200 transition-all duration-300 animate-icon-pulse hover:scale-125" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-green-200 transition-all duration-300 animate-icon-pulse hover:scale-125" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="glassmorphism p-6 animate-stagger-2 hover-lift">
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-sm hover:text-green-200 transition-all duration-300 hover:translate-x-2 inline-block">Home</a></li>
                <li><a href="#products" className="text-sm hover:text-green-200 transition-all duration-300 hover:translate-x-2 inline-block">Products</a></li>
                <li><a href="/gallery" className="text-sm hover:text-green-200 transition-all duration-300 hover:translate-x-2 inline-block">Gallery</a></li>
                <li><a href="/about" className="text-sm hover:text-green-200 transition-all duration-300 hover:translate-x-2 inline-block">About Us</a></li>
                <li><a href="/contact" className="text-sm hover:text-green-200 transition-all duration-300 hover:translate-x-2 inline-block">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="glassmorphism p-6 animate-stagger-3 hover-lift">
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <Phone className="w-4 h-4 group-hover:text-green-200 transition-colors animate-icon-pulse" />
                  <span className="text-sm">+91 8048619027</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="w-4 h-4 group-hover:text-green-200 transition-colors animate-icon-pulse" />
                  <span className="text-sm">info@vedantenterprises.com</span>
                </div>
                <div className="flex items-start space-x-3 group">
                  <MapPin className="w-4 h-4 mt-0.5 group-hover:text-green-200 transition-colors animate-icon-pulse" />
                  <span className="text-sm">Haveli Pune - 412201, Maharashtra, India</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <FileText className="w-4 h-4 group-hover:text-green-200 transition-colors animate-icon-pulse" />
                  <span className="text-sm">GST: 27AMKPC3004A1ZW</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="glassmorphism p-6 animate-stagger-4 hover-lift">
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">Stay Updated</h4>
              <p className="text-sm mb-4 opacity-90">Subscribe to our newsletter for the latest updates and offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-3 text-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 py-3 rounded-r-lg transition-all duration-300 hover:scale-105 shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-green-700/50 mt-12 pt-8 text-center">
            <p className="text-sm opacity-80">© 2025 Vedant Enterprises. All rights reserved. | Developed By DW Innovation Pvt Ltd</p>
          </div>
        </div>
      </footer>
    </>
  );
}
