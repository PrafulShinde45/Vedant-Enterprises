import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-12">
          <section id="home" className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-[#333333] mb-8">Welcome to Vedant Enterprises</h1>
            <p className="text-lg text-[#333333] leading-relaxed mb-8 max-w-4xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </section>

          <section id="products" className="mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">Our Products</h2>
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              Discover our wide range of high-quality products designed to meet your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg text-[#333333] leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </section>

          <section id="gallery" className="mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">Gallery</h2>
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              Explore our gallery showcasing our work and achievements. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg text-[#333333] leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </section>

          <section id="about" className="mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">About Us</h2>
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              Learn more about Vedant Enterprises and our commitment to excellence. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg text-[#333333] leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </section>

          <section id="contact" className="mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">Contact Us</h2>
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              Get in touch with us for any inquiries or support. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg text-[#333333] leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
