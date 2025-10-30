
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ArrowRight, Star, Users, Award, Truck } from 'lucide-react';

export default function Home() {
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

  {/* Hero Section */}
<section className="relative text-white py-20 md:py-32 bg-cover bg-center">
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-transparent to-green-800/50"></div>
  <div className="absolute inset-0 bg-[url('/assets/bg-pic.webp')] bg-cover bg-center opacity-20"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 text-center">
    <div className="animate-fade-in-up">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Building Tomorrow's
        <span className="block text-green-300">Infrastructure Today</span>
      </h1>

      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
        Vedant Enterprises delivers premium construction materials with unmatched
        quality, reliability, and sustainability for projects across Maharashtra.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#products"
          className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
        >
          Explore Products
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>

        <a
          href="/contact"
          className="border-2 border-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
        >
          Get Quote
        </a>
      </div>
    </div>
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
        <section className="py-20 bg-gradient-to-br from-[#fdfbf8] via-white to-[#f8f9fa] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="flex-1 animate-stagger-1">
                <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full mb-6">
                  <Star className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Building Excellence Since 2010</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-gray-800 via-green-600 to-gray-800 bg-clip-text text-transparent">
                  About Vedant Enterprises
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Leading provider of high-quality construction materials in Pune, Maharashtra. We are committed to excellence, sustainability, and innovation, delivering premium solutions that empower builders and developers to create lasting infrastructure.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white rounded-lg shadow-md px-4 py-3 hover-lift">
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md px-4 py-3 hover-lift">
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md px-4 py-3 hover-lift">
                    <div className="text-2xl font-bold text-purple-600">1000+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 animate-stagger-2">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift transform hover:scale-105 transition-all duration-500">
                    <img
                      src="/assets/150mm-dia-rcc-pipe.webp"
                      alt="Vedant Enterprises RCC Pipes"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mr-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">ISO 9001</div>
                      <div className="text-sm text-gray-600">Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-br from-[#f8f9fa] via-white to-[#fdfbf8] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-20 w-36 h-36 bg-green-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="flex-1 animate-stagger-3">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift transform hover:scale-105 transition-all duration-500">
                    <img
                      src="/assets/Vedant-enterprises-9001_page-0001-1087x1536.webp"
                      alt="Vedant Enterprises ISO 9001 Certification"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-3">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">Growing</div>
                      <div className="text-sm text-gray-600">Strong</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 animate-stagger-4">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Our Driving Force</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-gray-800 bg-clip-text text-transparent">
                  Our Mission: Building Tomorrow's Infrastructure Today
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  To deliver premium construction materials and solutions that empower our clients to build a sustainable and resilient future. We combine quality craftsmanship, innovative products, and environmental responsibility to create infrastructure that stands the test of time.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl shadow-md p-4 hover-lift">
                    <div className="flex items-center mb-2">
                      <Award className="w-6 h-6 text-green-600 mr-2" />
                      <span className="font-semibold text-gray-800">Quality</span>
                    </div>
                    <p className="text-sm text-gray-600">Rigorous testing and standards</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-4 hover-lift">
                    <div className="flex items-center mb-2">
                      <Users className="w-6 h-6 text-blue-600 mr-2" />
                      <span className="font-semibold text-gray-800">Expertise</span>
                    </div>
                    <p className="text-sm text-gray-600">Decades of industry knowledge</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-4 hover-lift">
                    <div className="flex items-center mb-2">
                      <Truck className="w-6 h-6 text-purple-600 mr-2" />
                      <span className="font-semibold text-gray-800">Delivery</span>
                    </div>
                    <p className="text-sm text-gray-600">Timely and reliable service</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-4 hover-lift">
                    <div className="flex items-center mb-2">
                      <Star className="w-6 h-6 text-red-600 mr-2" />
                      <span className="font-semibold text-gray-800">Customer First</span>
                    </div>
                    <p className="text-sm text-gray-600">Your success is our priority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our premium range of construction materials, crafted with precision and built to last.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <a href="/gallery" className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 inline-block text-center">
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/gallery" className="inline-flex items-center bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Vedant Enterprises?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're committed to delivering excellence in every aspect of our service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center animate-slide-in-left hover-lift">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every product undergoes rigorous testing to ensure it meets the highest standards of durability and performance.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center animate-bounce-in hover-lift">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our experienced professionals bring decades of knowledge to every project and product we deliver.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center animate-slide-in-right hover-lift">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Timely Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  We ensure prompt and reliable delivery of all materials to keep your projects on schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg text-gray-600 mb-8">Contact us today for a free consultation and quote. Let's build something amazing together.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-800 transition-colors">
                  Get In Touch
                </a>
                <a href="tel:+918048619027" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
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
