import { Phone, Mail, MapPin, FileText, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="gradient-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4">Vedant Enterprises</h3>
            <p className="text-sm leading-relaxed mb-4">
              Leading provider of high-quality construction materials and solutions in Pune, Maharashtra. Committed to excellence and sustainability.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-green-200 transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-green-200 transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-green-200 transition-colors" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-green-200 transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-green-200 transition-colors">Home</a></li>
              <li><a href="#products" className="text-sm hover:text-green-200 transition-colors">Products</a></li>
              <li><a href="/gallery" className="text-sm hover:text-green-200 transition-colors">Gallery</a></li>
              <li><a href="/about" className="text-sm hover:text-green-200 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-sm hover:text-green-200 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 8048619027</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@vedantenterprises.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">Haveli Pune - 412201, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span className="text-sm">GST: 27AMKPC3004A1ZW</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="animate-bounce-in">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center">
          <p className="text-sm">© 2025 Vedant Enterprises. All rights reserved. | Designed with ❤️ for quality construction</p>
        </div>
      </div>
    </footer>
  );
}
