import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowLeft, Eye } from 'lucide-react';

export default function RCCSpunPipe() {
  const relatedProducts = [
    {
      name: 'RCC Pipe All Sizes',
      image: '/assets/150mm-dia-rcc-pipe.webp',
      link: '/products/rcc-pipe-all-sizes'
    },
    {
      name: 'RCC Pipe 200mm Dia',
      image: '/assets/200mm-rcc-pipe.webp',
      link: '/products/rcc-pipe-200mm'
    },
    {
      name: 'RCC Cement Pipe',
      image: '/assets/rcc-cement-pipe.webp',
      link: '#'
    },
    {
      name: 'Half Round Pipe',
      image: '/assets/half-round-pipe-300x400.webp',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-50">
        {/* Product Details Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="animate-slide-in-left">
                <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
                  <img
                    src="/assets/rcc-spun-pipe-300x400.webp"
                    alt="RCC Spun Pipe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Information */}
              <div className="animate-slide-in-right">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    RCC Spun Pipe
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Our RCC spun pipes are manufactured using advanced centrifugal spinning technology, ensuring uniform wall thickness, superior strength, and excellent durability. Available in various sizes and classes to meet different application requirements.
                  </p>
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-lg inline-block">
                    <span className="font-semibold text-gray-700">CATEGORY: RCC PIPE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features and Pricing */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Features</h2>
              <p className="text-lg text-gray-600">
                Key features of our RCC spun pipes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Impeccable finish
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    High strength
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Ability to tolerate harsh weathering condition
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Sturdy construction
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Longer functional life
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Dimensional accuracy
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Pricing</h3>
                <div className="text-lg font-semibold text-green-600 mb-4">
                  Approx. Price: Rs 160/ Meter <span className="text-sm text-gray-500">(Get Latest Price)</span>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-lg inline-block">
                  <span className="font-semibold text-gray-700">CATEGORY: RCC PIPE</span>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Related Products */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Related RCC Pipe Products</h2>
              <p className="text-lg text-gray-600">
                Explore other RCC pipe options from our collection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product, index) => (
                <div key={index} className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover-lift animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
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
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Need a Quote?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us for pricing, custom orders, or any questions about our RCC spun pipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?product=RCC Spun Pipe"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300"
              >
                Get Quote
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
