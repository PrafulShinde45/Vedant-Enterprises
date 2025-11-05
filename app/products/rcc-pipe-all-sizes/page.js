import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowLeft, Eye } from 'lucide-react';

export default function RCCPipeAllSizes() {
  const productData = [
    { size: '150', class: 'NP2 / NP3 / NP4', thickness: '25 / 25 / 25', length: '2.0 mtr', collar: 'Spigot & Socket' },
    { size: '200', class: 'NP2 / NP3 / NP4', thickness: '25 / 30 / 30', length: '2.0 mtr', collar: 'Spigot & Socket' },
    { size: '250', class: 'NP2 / NP3 / NP4', thickness: '25 / 30 / 30', length: '2.0 mtr', collar: 'Spigot & Socket' },
    { size: '300', class: 'NP2 / NP3 / NP4', thickness: '30 / 40 / 40', length: '2.0 mtr', collar: 'Spigot & Socket' },
    { size: '350', class: 'NP2 / NP3 / NP4', thickness: '32 / 75 / 75', length: '2.5 mtr', collar: 'Spigot & Socket' },
    { size: '400', class: 'NP2 / NP3 / NP4', thickness: '32 / 75 / 75', length: '2.5 mtr', collar: 'Spigot & Socket' },
    { size: '450', class: 'NP2 / NP3 / NP4', thickness: '35 / 75 / 75', length: '2.5 mtr', collar: 'Spigot & Socket' },
    { size: '500', class: 'NP2 / NP3 / NP4', thickness: '35 / 75 / 75', length: '2.5 mtr', collar: 'Spigot & Socket' },
    { size: '600', class: 'NP2 / NP3 / NP4', thickness: '45 / 85 / 75', length: '2.5 mtr', collar: 'Spigot & Socket' },
    { size: '700', class: 'NP2 / NP3 / NP4', thickness: '85 / 85', length: '2.5 mtr', collar: 'Spigot & Socket' },
    { size: '800', class: 'NP2 / NP3 / NP4', thickness: '50 / 95 / 95', length: '2.5 mtr', collar: 'Spigot & Socket' },
    { size: '900', class: 'NP2 / NP3 / NP4', thickness: '55 / 100 / 100', length: '2.5 mtr', collar: 'Spigot & Socket' },
    { size: '1000', class: 'NP2 / NP3 / NP4', thickness: '60 / 115 / 115', length: '2.5 mtr', collar: 'Spigot & Socket' },
    { size: '1200', class: 'NP2 / NP3 / NP4', thickness: '70 / 120 / 120', length: '2.5 mtr', collar: 'Spigot & Socket' },
    { size: '1400', class: 'NP3 / NP4', thickness: '135 / 135', length: '2.5 mtr', collar: 'Male & Female' },
    { size: '1500', class: 'NP3 / NP4', thickness: '135 / 135', length: '2.5 mtr', collar: 'Male & Female' },
    { size: '1600', class: 'NP3 / NP4', thickness: '140 / 140', length: '2.5 mtr', collar: 'Male & Female' },
    { size: '1800', class: 'NP3 / NP4', thickness: '150 / 150', length: '2.5 mtr', collar: 'Male & Female' },
    { size: '2000', class: 'NP3 / NP4', thickness: '170 / 170', length: '2.5 mtr', collar: 'Male & Female' }
  ];

  const relatedProducts = [
    {
      name: 'RCC Pipe 200mm Dia',
      image: '/assets/200mm-rcc-pipe.webp',
      link: '#'
    },
    {
      name: 'RCC Spun Pipe',
      image: '/assets/rcc-spun-pipe-300x400.webp',
      link: '#'
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
        <section className="pt-48 pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="animate-slide-in-left">
                <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
                  <img
                    src="/assets/150mm-dia-rcc-pipe.webp"
                    alt="RCC Pipe All Sizes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Information */}
              <div className="animate-slide-in-right">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    (Np2/Np3/Np4) RCC Pipe All Sizes of Dia
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    With the aid of years of experience and understanding of this domain, we render the best quality of 150 MM RCC Pipe. Appreciated for their elegant design and high strength, the quality of the RCC pipe is never compromised and it is always maintained.
                  </p>
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-lg inline-block">
                    <span className="font-semibold text-gray-700">CATEGORY: RCC PIPE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Specifications Table */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Specifications</h2>
              <p className="text-lg text-gray-600">
                Detailed specifications for all RCC pipe sizes
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden min-w-[600px]">
                <thead className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">SIZES (mm)</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">CLASS</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">THICKNESS (mm)</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">LENGTH</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">COLLAR TYPE</th>
                  </tr>
                </thead>
                <tbody>
                  {productData.map((row, index) => (
                    <tr key={index} className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-800 text-sm sm:text-base">{row.size}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-sm sm:text-base">{row.class}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-sm sm:text-base">{row.thickness}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-sm sm:text-base">{row.length}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-sm sm:text-base">{row.collar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              Contact us for pricing, custom orders, or any questions about our RCC pipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?product=RCC Pipe All Sizes"
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
