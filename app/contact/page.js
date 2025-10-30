

'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Mail, Phone, FileText, Send, CheckCircle, Clock, Users, Award, Star, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API or email)
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const features = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for your construction needs.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals ready to guide your projects.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'ISO 9001 certified with uncompromising quality standards.'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Construction Contractor',
      message: 'Vedant Enterprises provided exceptional RCC pipes for our project. Their quality and timely delivery exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Project Manager',
      message: 'Outstanding service and premium materials. The team was incredibly helpful throughout our collaboration.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Builder',
      message: 'Reliable partner for all construction materials. Their septic tanks and compound walls are top-notch.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 bg-cover bg-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-transparent to-green-800/60"></div>
        <div className="absolute inset-0 bg-[url('/assets/bg-pic.webp')] bg-cover bg-center opacity-20"></div>
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-green-400 rounded-full blur-2xl animate-float opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-400 rounded-full blur-2xl animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-400 rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 md:px-16 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
              Let's Build Together
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              Connect with Vedant Enterprises for premium construction materials, expert guidance, and unparalleled service that brings your vision to life.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+91 8048619027</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">info@vedantenterprises.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Contact & Map Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Information */}
              <div className="animate-slide-in-left">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 hover-lift">
                  <h2 className="text-4xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-gray-800 via-green-600 to-gray-800 bg-clip-text text-transparent">
                    Get In Touch
                  </h2>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Physical Address</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">Haveli Pune - 412201, Maharashtra, India</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                        <p className="text-gray-600 text-lg">info@vedantenterprises.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                        <p className="text-gray-600 text-lg">+91 8048619027</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">GST No</h3>
                        <p className="text-gray-600 text-lg">27AMKPC3004A1ZW</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="animate-slide-in-right">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover-lift">
                  <div className="p-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
                    <h3 className="text-2xl font-bold">Our Exact Location</h3>
                    <p className="text-green-100">Find us in Haveli, Pune - Red marker indicates our office</p>
                  </div>
                  <div className="relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1234567890123!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2b1b1b1b1b%3A0x4b4b4b4b4b4b4b4b!2sVedant%20Enterprises%20Haveli%20Pune!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin&q=Vedant+Enterprises+Haveli+Pune+Maharashtra+India&markers=color:red%7CVedant+Enterprises+Haveli+Pune+Maharashtra+India"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                    ></iframe>
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Our Location
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have a question or need a quote? We'd love to hear from you. Fill out the form below and we'll get back to you promptly.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 hover-lift animate-fade-in-up">
              {isSubmitted ? (
                <div className="text-center py-16 animate-bounce-in">
                  <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h3>
                  <p className="text-lg text-gray-600 mb-8">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 px-6 py-3 rounded-full">
                      <span className="text-gray-700 font-semibold">Response Time: Within 24 hours</span>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-3">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="8"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 resize-none text-lg"
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-12 rounded-2xl font-bold text-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center mx-auto"
                    >
                      <Send className="w-6 h-6 mr-3" />
                      Send Message
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about working with Vedant Enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 hover-lift animate-bounce-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.message}"</p>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
