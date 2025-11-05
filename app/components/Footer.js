'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, FileText, Facebook, Twitter, Instagram, Linkedin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

      // In a real application, you would send this to your backend API
      // await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });

      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/918048619027" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float hover:scale-110 inline-block">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>

      <footer className="relative gradient-primary text-white py-12 sm:py-16 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-green-800/20"></div>
        <div className="absolute inset-0 bg-[url('/assets/bg-pic.webp')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="glassmorphism p-6 animate-stagger-1 hover-lift">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">Vedant Enterprises</h3>
              <p className="text-sm leading-relaxed mb-4 opacity-90">
                Leading provider of high-quality construction materials and solutions in Pune, Maharashtra. Committed to excellence and sustainability.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/sharer.php?u=https://www.vedantspunpipes.com/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 cursor-pointer hover:text-green-200 transition-all duration-300 animate-icon-pulse hover:scale-125" />
                </a>
                <a href="https://twitter.com/share?url=https://www.vedantspunpipes.com/&text=Vedant%20Enterprises" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 cursor-pointer hover:text-green-200 transition-all duration-300 animate-icon-pulse hover:scale-125" />
                </a>
                <a href="https://www.linkedin.com/cws/share?url=https://www.vedantspunpipes.com/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 cursor-pointer hover:text-green-200 transition-all duration-300 animate-icon-pulse hover:scale-125" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="glassmorphism p-6 animate-stagger-2 hover-lift">
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-sm hover:text-green-200 transition-all duration-300 hover:translate-x-2 inline-block">Home</a></li>
                <li><a href="/products" className="text-sm hover:text-green-200 transition-all duration-300 hover:translate-x-2 inline-block">Products</a></li>
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

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 mb-3 p-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-200">Successfully subscribed!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 mb-3 p-2 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-red-200">Please enter a valid email address.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                  className="flex-1 px-3 py-3 text-white placeholder-white border border-white/30 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300 bg-transparent disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 py-3 rounded-r-lg transition-all duration-300 hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-green-700/50 mt-12 pt-8 text-center">
            <p className="text-sm opacity-80">© 2025 Vedant Enterprises. All rights reserved. | Developed By DW Innovation Pvt. Ltd.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
