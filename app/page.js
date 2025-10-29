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
      image: '/assets/compound-wall.webp',
      title: 'Compound Walls',
      description: 'Strong boundary walls for security and demarcation.'
    },
    {
      id: 3,
      image: '/assets/septic-tank.webp',
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
<section
  className="relative text-white py-20 md:py-32 bg-cover bg-center"
  style={{
    backgroundImage: "url(/assets/bg-pic.webp)",
  }}
>


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
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
                    <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300">
                      Learn More
                    </button>
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
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Vedant Enterprises?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're committed to delivering excellence in every aspect of our service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-slide-in-left">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every product undergoes rigorous testing to ensure it meets the highest standards of durability and performance.
                </p>
              </div>

              <div className="text-center animate-bounce-in">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our experienced professionals bring decades of knowledge to every project and product we deliver.
                </p>
              </div>

              <div className="text-center animate-slide-in-right">
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
        <section className="py-20 gradient-primary text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-16 text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Contact us today for a free consultation and quote. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get In Touch
              </a>
              <a href="tel:+918048619027" className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
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
