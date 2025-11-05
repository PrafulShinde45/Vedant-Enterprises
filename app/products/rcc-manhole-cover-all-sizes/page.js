import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Eye } from 'lucide-react';

export default function RCCManholeCoverAllSizes() {
  const productData = [
    { particulars: '18" x 18"', class: 'HD', brand: 'VEDANT', weight: '125 KG', loadCapacity: '16 MT' },
    { particulars: '18" x 24"', class: 'HD', brand: 'VEDANT', weight: '130 KG', loadCapacity: '08 MT' },
    { particulars: '18" x 36"', class: 'MD', brand: 'VEDANT', weight: '180 KG', loadCapacity: '16 MT' },
    { particulars: '18" x 36"', class: 'HD', brand: 'VEDANT', weight: '180 KG', loadCapacity: '08 MT' },
    { particulars: '24" x 24"', class: 'MD', brand: 'VEDANT', weight: '240 KG', loadCapacity: '16 MT' },
    { particulars: '24" x 24"', class: 'HD', brand: 'VEDANT', weight: '225 KG', loadCapacity: '16 MT' },
    { particulars: '24" x 36"', class: 'MD', brand: 'VEDANT', weight: '210 KG', loadCapacity: '08 MT' },
    { particulars: '24" x 36"', class: 'HD', brand: 'VEDANT', weight: '320 KG', loadCapacity: '16 MT' },
    { particulars: '30" x 30"', class: 'MD', brand: 'VEDANT', weight: '300 KG', loadCapacity: '08 MT' },
    { particulars: '30" x 30"', class: 'HD', brand: 'VEDANT', weight: '420 KG', loadCapacity: '16 MT' },
    { particulars: '36" x 36"', class: 'MD', brand: 'VEDANT', weight: '420 KG', loadCapacity: '16 MT' },
    { particulars: '36" x 36"', class: 'HD', brand: 'VEDANT', weight: '600 KG', loadCapacity: '16 MT' },
    { particulars: '36" x 48"', class: 'HD', brand: 'VEDANT', weight: '900.KG', loadCapacity: '16 MT' },
    { particulars: '48" x 48"', class: 'HD', brand: 'VEDANT', weight: '180 KG', loadCapacity: '16 MT' },
    { particulars: '21" ROUND', class: 'HD', brand: 'VEDANT', weight: '210 KG', loadCapacity: '16 MT' },
    { particulars: '24" ROUND ISI', class: 'HD', brand: 'VEDANT', weight: '420 KG', loadCapacity: '16 MT' },
  ];

  const relatedProducts = [
    {
      name: '1200 MM X 1200 MM Heavy Duty Plain Drain Cover',
      image: '/assets/manh2-300x400.webp',
      link: '/products/1200mm-x-1200mm-heavy-duty-plain-drain-cover'
    },
    {
      name: '1200 MM X 1200 MM Heavy Duty Perforated Drain Cover',
      image: '/assets/manh3-300x400.webp',
      link: '/products/1200mm-x-1200mm-heavy-duty-perforated-drain-cover'
    },
    {
      name: 'RCC Circular Manhole Cover',
      image: '/assets/manh1-300x400.webp',
      link: '/products/rcc-circular-manhole-cover'
    },
    {
      name: 'Concrete Chamber Cover',
      image: '/assets/cc1-300x400.webp',
      link: '/products/concrete-chamber-cover'
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
                    src="/assets/manh1-150x150.webp"
                    alt="RCC Manhole Cover All Sizes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Information */}
              <div className="animate-slide-in-right">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    RCC Manhole Cover in All Sizes
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    We are engaged in offering a wide range of quality Products to our clients. Our range of all products is widely appreciated.
                  </p>
                  <div className="text-lg font-semibold text-green-600 mb-6">
                    Approx. Price: Rs 3,500 / Piece <span className="text-sm text-gray-500">(Get Latest Price)</span>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-lg inline-block">
                    <span className="font-semibold text-gray-700">CATEGORY: MANHOLE COVER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Details</h2>
              <p className="text-lg text-gray-600">
                Detailed specifications and features of our RCC Manhole Covers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Shape:</span>
                    <span className="text-gray-600">Round/Square</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Material:</span>
                    <span className="text-gray-600">RCC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Brand:</span>
                    <span className="text-gray-600">Vedant Enterprises</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Usage/Application:</span>
                    <span className="text-gray-600">Drainage Systems</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Color:</span>
                    <span className="text-gray-600">Gray</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Load Bearing:</span>
                    <span className="text-gray-600">Heavy Duty</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">I Deal In:</span>
                    <span className="text-gray-600">New Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Country of Origin:</span>
                    <span className="text-gray-600">Made in India</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Features</h3>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    High load bearing capacity
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Corrosion resistant
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Easy installation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Long service life
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Available in multiple sizes
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Details</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">PARTICULARS</th>
                      <th className="px-4 py-3 text-left font-semibold">CLASS</th>
                      <th className="px-4 py-3 text-left font-semibold">BRAND</th>
                      <th className="px-4 py-3 text-left font-semibold">WEIGHT</th>
                      <th className="px-4 py-3 text-left font-semibold">LOAD CAPACITY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productData.map((row, index) => (
                      <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <td className="px-4 py-3 font-semibold text-gray-800">{row.particulars}</td>
                        <td className="px-4 py-3 text-gray-600">{row.class}</td>
                        <td className="px-4 py-3 text-gray-600">{row.brand}</td>
                        <td className="px-4 py-3 text-gray-600">{row.weight}</td>
                        <td className="px-4 py-3 text-gray-600">{row.loadCapacity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Manhole Cover Products</h2>
              <p className="text-lg text-gray-600">
                Explore other manhole cover options from our collection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product, index) => (
                <Link key={index} href={product.link} className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover-lift animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Need a Quote?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us for pricing, custom orders, or any questions about our RCC Manhole Covers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?product=RCC Manhole Cover All Sizes"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300"
              >
                Get Quote
              </Link>
              <a
                href="tel:+919881346886"
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
