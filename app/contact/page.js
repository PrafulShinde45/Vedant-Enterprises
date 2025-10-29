'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API or email)
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-12">
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-[#333333] mb-8 text-center">Contact Us</h1>
            <p className="text-lg text-[#333333] leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              Get in touch with Vedant Enterprises for any inquiries, support, or to learn more about our products. We're here to help you with your construction needs.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#333333] mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#333333]">Physical Address</h3>
                    <p className="text-[#333333]">Haveli Pune - 412201, Maharashtra, India</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#333333]">Email</h3>
                    <p className="text-[#333333]">info@vedantenterprises.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#333333]">Phone</h3>
                    <p className="text-[#333333]">+91 8048619027</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#333333]">GST No</h3>
                    <p className="text-[#333333]">27AMKPC3004A1ZW</p>
                  </div>
                </div>

                {/* Google Map */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-[#333333] mb-4">Our Location</h3>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1234567890123!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2b1b1b1b1b%3A0x4b4b4b4b4b4b4b4b!2sHaveli%2C%20Pune%2C%20Maharashtra%20412201%2C%20India!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-[#333333] mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#333333]">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6E7C59] focus:border-[#6E7C59]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#333333]">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6E7C59] focus:border-[#6E7C59]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#333333]">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6E7C59] focus:border-[#6E7C59]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#6E7C59] text-white px-4 py-2 rounded-md shadow-lg hover:bg-[#5A6E45] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
