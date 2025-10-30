import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Eye, Award, Users, Leaf, Clock, MapPin, Calendar, Sparkles, TrendingUp, Heart, ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous testing to ensure it meets the highest standards of durability and performance.',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Our team of experienced professionals brings decades of knowledge to every project and product we deliver.',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We are committed to eco-friendly practices and sustainable manufacturing processes for a better tomorrow.',
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const milestones = [
    { year: '2010', event: 'Founded Vedant Enterprises' },
    { year: '2012', event: 'Expanded product line to include septic tanks' },
    { year: '2015', event: 'Achieved ISO 9001 certification' },
    { year: '2018', event: 'Opened new manufacturing facility' },
    { year: '2020', event: 'Launched eco-friendly product line' },
    { year: '2023', event: 'Celebrated 500+ satisfied customers' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 bg-cover bg-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-transparent to-green-800/50"></div>
        <div className="absolute inset-0 bg-[url('/assets/bg-pic.webp')] bg-cover bg-center opacity-20"></div>
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="floating-element w-8 h-8 text-green-300 opacity-20 top-20 left-10" />
          <TrendingUp className="floating-element w-6 h-6 text-blue-300 opacity-30 top-32 right-20" />
          <Heart className="floating-element w-10 h-10 text-purple-300 opacity-25 bottom-20 left-20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 md:px-16 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
              About Vedant Enterprises
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Building trust through quality, innovation, and sustainable construction solutions for over a decade.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-gray-50">
        {/* Intro Section */}
        <section className="py-20 bg-gradient-to-br from-[#fdfbf8] via-white to-[#f8f9fa] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="flex-1 animate-stagger-1">
                <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-5 h-5 text-green-600 mr-2" />
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
                    <div className="flex items-center">
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
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-3">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Growing</div>
                        <div className="text-sm text-gray-600">Strong</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 animate-stagger-4">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
                  <Target className="w-5 h-5 text-blue-600 mr-2" />
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
                      <Leaf className="w-6 h-6 text-green-600 mr-2" />
                      <span className="font-semibold text-gray-800">Sustainability</span>
                    </div>
                    <p className="text-sm text-gray-600">Eco-friendly practices in every product</p>
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
                      <Award className="w-6 h-6 text-purple-600 mr-2" />
                      <span className="font-semibold text-gray-800">Quality</span>
                    </div>
                    <p className="text-sm text-gray-600">Rigorous testing and standards</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-4 hover-lift">
                    <div className="flex items-center mb-2">
                      <Heart className="w-6 h-6 text-red-600 mr-2" />
                      <span className="font-semibold text-gray-800">Customer First</span>
                    </div>
                    <p className="text-sm text-gray-600">Your success is our priority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Vedant Enterprises?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our core values drive everything we do, ensuring excellence in every aspect of our service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover-lift animate-bounce-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 via-green-600 to-gray-800 bg-clip-text text-transparent">
                Our Inspiring Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to industry leadership - a story of passion, perseverance, and innovation.
              </p>
            </div>

            {/* Journey Path */}
            <div className="relative mb-16">
              {/* Path Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transform -translate-y-1/2 rounded-full"></div>

              {/* Milestone Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {[
                  { year: '2010', event: 'Founded', desc: 'Vision born in Pune' },
                  { year: '2015', event: 'Certified', desc: 'ISO 9001 achieved' },
                  { year: '2020', event: 'Eco-Leader', desc: 'Green products launched' },
                  { year: '2023', event: 'Milestone', desc: '500+ happy customers' }
                ].map((milestone, index) => (
                  <div key={index} className="text-center animate-fade-in-up group" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="relative mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                        <Calendar className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover-lift group-hover:shadow-2xl transition-shadow duration-300">
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">{milestone.year}</h4>
                      <h5 className="text-lg font-semibold text-green-600 mb-3">{milestone.event}</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Story Essence */}
            <div className="bg-gradient-to-r from-green-50 via-white to-blue-50 rounded-2xl p-8 md:p-12 shadow-xl animate-fade-in-up">
              <div className="text-center max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Our Essence</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                  Born in Pune, Maharashtra, Vedant Enterprises transformed a simple belief into an industry beacon. From family roots to innovation leaders, we've built not just products, but lasting partnerships. Our promise: uncompromising quality, relentless innovation, and customer-first service.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center group cursor-pointer">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                      <Sparkles className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Quality First</h4>
                    <p className="text-sm text-gray-600">Every product meets the highest standards</p>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Innovation Driven</h4>
                    <p className="text-sm text-gray-600">Constantly evolving with new technologies</p>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                      <Heart className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Customer Centric</h4>
                    <p className="text-sm text-gray-600">Your success is our ultimate goal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
