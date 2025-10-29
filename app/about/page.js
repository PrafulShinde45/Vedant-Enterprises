import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-12">
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-[#333333] mb-8 text-center">About Us</h1>
            <p className="text-lg text-[#333333] leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              Vedant Enterprises is a leading provider of high-quality construction materials and solutions in Pune, Maharashtra. With years of experience in the industry, we are committed to delivering durable, reliable products that meet the highest standards of quality and sustainability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-[#333333] mb-6">Our Mission</h2>
                <p className="text-lg text-[#333333] leading-relaxed mb-6">
                  To provide innovative and sustainable construction solutions that empower our clients to build a better future. We strive to exceed expectations through quality products, exceptional service, and a commitment to environmental responsibility.
                </p>
                <p className="text-lg text-[#333333] leading-relaxed">
                  Our mission is to be the trusted partner for all your construction needs, offering a wide range of products from RCC pipes to boundary walls, all manufactured with precision and care.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#333333] mb-6">Our Vision</h2>
                <p className="text-lg text-[#333333] leading-relaxed mb-6">
                  To be the premier construction materials supplier in India, recognized for our excellence in product quality, customer service, and innovation. We envision a world where construction is sustainable, efficient, and accessible to all.
                </p>
                <p className="text-lg text-[#333333] leading-relaxed">
                  Through continuous improvement and adaptation to new technologies, we aim to set new standards in the industry and contribute positively to the communities we serve.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#333333] mb-6 text-center">Why Choose Vedant Enterprises?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-[#6E7C59] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">Q</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">Quality Assurance</h3>
                  <p className="text-[#333333]">Every product undergoes rigorous testing to ensure it meets the highest standards of durability and performance.</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#6E7C59] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">E</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">Expertise</h3>
                  <p className="text-[#333333]">Our team of experienced professionals brings decades of knowledge to every project and product we deliver.</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#6E7C59] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">S</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">Sustainability</h3>
                  <p className="text-[#333333]">We are committed to eco-friendly practices and sustainable manufacturing processes for a better tomorrow.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#333333] mb-6 text-center">Our Story</h2>
              <p className="text-lg text-[#333333] leading-relaxed mb-6">
                Founded in Pune, Maharashtra, Vedant Enterprises has been serving the construction industry for over a decade. What started as a small family business has grown into a trusted name in the region, known for our commitment to quality and customer satisfaction.
              </p>
              <p className="text-lg text-[#333333] leading-relaxed mb-6">
                Our journey began with a simple belief: that every construction project deserves the best materials available. This belief has driven us to continuously improve our products and services, investing in modern manufacturing techniques and quality control processes.
              </p>
              <p className="text-lg text-[#333333] leading-relaxed">
                Today, we proudly serve clients across Maharashtra and beyond, providing everything from RCC pipes and septic tanks to boundary walls and drainage solutions. Our dedication to excellence and customer service remains as strong as ever, ensuring that every client receives the support they need to bring their vision to life.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
