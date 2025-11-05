
'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ArrowRight, Star, Users, Award, Truck, CheckCircle, Shield, Zap, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [particles, setParticles] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef(null);

  const slides = [
    '/assets/150mm-dia-rcc-pipe-300x400.webp',
    '/assets/slider2.webp',
    '/assets/bg-pic.webp'
  ];

  const fullText = "Infrastructure Today";

  // Generate particles only on client side after mount
  useEffect(() => {
    setIsMounted(true);
    const generatedParticles = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationClass: i % 2 === 0 ? 'animate-particle-float' : 'animate-particle-float-2'
    }));
    setParticles(generatedParticles);
  }, []);

  // Background slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Changed to 5 seconds for smoother experience

    return () => clearInterval(timer);
  }, [slides.length]);

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingTimer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingTimer);
      }
    }, 100);

    return () => clearInterval(typingTimer);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featuredProducts = [
    {
      id: 1,
      image: '/assets/rcc-cement-pipe.webp',
      title: 'RCC Pipes',
      description: 'Durable and reliable concrete pipes for various construction needs.'
    },
    {
      id: 2,
      image: '/assets/300mm-cement-pipe.webp',
      title: 'Cement Pipes',
      description: 'Strong 300mm cement pipes for various construction applications.'
    },
    {
      id: 3,
      image: '/assets/st1-150x150.webp',
      title: 'Septic Tanks',
      description: 'High-quality septic systems for residential and commercial use.'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Customers' },
    { icon: Truck, value: '1000+', label: 'Projects Completed' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '4.8', label: 'Customer Rating' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

  {/* Enhanced Hero Section */}
<section ref={heroRef} className="relative text-white py-12 sm:py-16 md:py-20 lg:py-32 xl:py-40 bg-cover bg-center overflow-hidden min-h-screen flex items-center">
  {/* Background Slider with improved transitions */}
  <div className="absolute inset-0">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ${
          index === currentSlide ? 'opacity-30 scale-105' : 'opacity-0 scale-100'
        }`}
        style={{
          backgroundImage: `url(${slide})`,
          transform: `scale(${index === currentSlide ? 1.05 : 1})`
        }}
      ></div>
    ))}
  </div>

  {/* Animated Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-gray-900/70 to-green-800/80 animate-gradient-shift"></div>

  {/* Pattern Overlay */}
  <div className="absolute inset-0 hero-pattern"></div>

  {/* Floating Particles */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {isMounted && particles.map((particle) => (
      <div
        key={particle.id}
        className={`absolute w-2 h-2 bg-green-400/30 rounded-full ${particle.animationClass}`}
        style={{
          left: `${particle.left}%`,
          top: `${particle.top}%`,
          animationDelay: `${particle.animationDelay}s`,
        }}
      ></div>
    ))}
  </div>

  {/* Geometric Shapes */}
  <div className="absolute top-20 right-10 w-32 h-32 border-4 border-green-400/20 rounded-full animate-rotate-shape hidden lg:block"></div>
  <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-green-500/10 to-blue-500/10 animate-morph-shape hidden lg:block"></div>
  <div className="absolute top-1/2 right-1/4 w-24 h-24 border-4 border-green-300/20 rotate-45 animate-float hidden lg:block"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 w-full">
    <div className="text-center">
      {/* Trust Badge */}
      <div
        className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 animate-smooth-reveal badge-glow border border-green-400/30"
        style={{
          transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`
        }}
      >
        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 animate-scale-pulse" />
        <span className="text-xs sm:text-sm font-semibold text-white">ISO 9001:2015 Certified | 15+ Years of Excellence</span>
      </div>

      {/* Main Heading with Parallax */}
      <div
        className="animate-fade-in-up parallax-slow"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
        }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Building Tomorrow's
          <span className="block text-gradient-animated mt-1 sm:mt-2">
            {typedText}
            <span className="inline-block w-1 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 2xl:h-16 bg-green-400 ml-1 sm:ml-2 animate-pulse"></span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200 px-2 sm:px-0">
          Vedant Enterprises delivers premium construction materials with unmatched
          quality, reliability, and sustainability for projects across Maharashtra.
        </p>

        {/* Value Propositions */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 animate-fade-in-up delay-300">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
            <span className="text-xs sm:text-sm font-medium">Premium Quality</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
            <span className="text-xs sm:text-sm font-medium">Fast Delivery</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
            <span className="text-xs sm:text-sm font-medium">Trusted by 500+</span>
          </div>
        </div>

        {/* CTA Buttons with Enhanced Effects */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up delay-400">
          <a
            href="/products"
            className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center btn-ripple btn-shine shadow-2xl hover:shadow-green-500/50 min-h-[44px]"
            style={{
              transform: `translate(${mousePosition.x * -3}px, ${mousePosition.y * -3}px)`
            }}
          >
            Explore Products
            <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/contact"
            className="group border-2 border-white/80 hover:bg-white hover:text-gray-900 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center backdrop-blur-sm bg-white/5 shadow-2xl min-h-[44px]"
            style={{
              transform: `translate(${mousePosition.x * -3}px, ${mousePosition.y * -3}px)`
            }}
          >
            Get Free Quote
            <Star className="ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-180 transition-transform duration-500" />
          </a>
        </div>
      </div>

    </div>
  </div>

  {/* Slide Indicators */}
  <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 flex gap-2 z-20">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
          index === currentSlide
            ? 'bg-green-400 w-6 sm:w-8'
            : 'bg-white/30 hover:bg-white/50'
        }`}
        aria-label={`Go to slide ${index + 1}`}
      ></button>
    ))}
  </div>
</section>



      <main className="flex-1 bg-gray-50">
        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center animate-bounce-in hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#fdfbf8] via-white to-[#f8f9fa] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-16">
              <div className="flex-1 animate-stagger-1">
                <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">Building Excellence Since 2010</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 bg-gradient-to-r from-gray-800 via-green-600 to-gray-800 bg-clip-text text-transparent">
                  About Vedant Enterprises
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  Leading provider of high-quality construction materials in Pune, Maharashtra. We are committed to excellence, sustainability, and innovation, delivering premium solutions that empower builders and developers to create lasting infrastructure.
                </p>
                <a
                  href="/about"
                  className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
              <div className="flex-1 animate-stagger-2">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift transform hover:scale-105 transition-all duration-500">
                    <img
                      src="/assets/150mm-dia-rcc-pipe.webp"
                      alt="Vedant Enterprises RCC Pipes"
                      className="w-full h-64 sm:h-80 md:h-96 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 animate-float">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mr-3">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-sm sm:text-base">ISO 9001</div>
                      <div className="text-xs sm:text-sm text-gray-600">Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Featured Products */}
        <section id="products" className="py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our premium range of construction materials, crafted with precision and built to last.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {featuredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">{product.description}</p>
                    <a href="/gallery" className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 inline-block text-center text-sm sm:text-base">
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <a href="/products" className="inline-flex items-center bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Why Choose Vedant Enterprises?</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                We're committed to delivering excellence in every aspect of our service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center animate-slide-in-left hover-lift">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Quality Assurance</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Every product undergoes rigorous testing to ensure it meets the highest standards of durability and performance.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center animate-bounce-in hover-lift">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Expert Team</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our experienced professionals bring decades of knowledge to every project and product we deliver.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center animate-slide-in-right hover-lift">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Timely Delivery</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We ensure prompt and reliable delivery of all materials to keep your projects on schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12 text-center animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">Contact us today for a free consultation and quote. Let's build something amazing together.</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-800 transition-colors text-sm sm:text-base">
                  Get In Touch
                </a>
                <a href="tel:+919881346886" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
