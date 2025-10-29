import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Eye, Award, Users, Leaf, Clock, MapPin, Calendar } from 'lucide-react';

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
      <section className="relative gradient-hero text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-6xl mx-auto px-6 md:px-16 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Vedant Enterprises</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Building trust through quality, innovation, and sustainable construction solutions for over a decade.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-gray-50">
        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="animate-slide-in-left">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To provide innovative and sustainable construction solutions that empower our clients to build a better future. We strive to exceed expectations through quality products, exceptional service, and a commitment to environmental responsibility.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is to be the trusted partner for all your construction needs, offering a wide range of products from RCC pipes to boundary walls, all manufactured with precision and care.
                </p>
              </div>

              <div className="animate-slide-in-right">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To be the premier construction materials supplier in India, recognized for our excellence in product quality, customer service, and innovation. We envision a world where construction is sustainable, efficient, and accessible to all.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through continuous improvement and adaptation to new technologies, we aim to set new standards in the industry and contribute positively to the communities we serve.
                </p>
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
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A journey of growth, innovation, and unwavering commitment to quality.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Founded in Pune, Maharashtra</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Vedant Enterprises has been serving the construction industry for over a decade. What started as a small family business has grown into a trusted name in the region, known for our commitment to quality and customer satisfaction.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our journey began with a simple belief: that every construction project deserves the best materials available. This belief has driven us to continuously improve our products and services, investing in modern manufacturing techniques and quality control processes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we proudly serve clients across Maharashtra and beyond, providing everything from RCC pipes and septic tanks to boundary walls and drainage solutions. Our dedication to excellence and customer service remains as strong as ever, ensuring that every client receives the support they need to bring their vision to life.
                </p>
              </div>

              <div className="animate-slide-in-right">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <Calendar className="w-6 h-6 text-green-600 mr-2" />
                    Key Milestones
                  </h4>
                  <div className="space-y-4">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <span className="font-semibold text-green-600">{milestone.year}:</span>
                          <span className="text-gray-700 ml-2">{milestone.event}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team/Commitment Section */}
        <section className="py-20 gradient-primary text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-16 text-center animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-12 h-12 text-green-300 mr-4" />
              <h2 className="text-4xl font-bold">Our Commitment</h2>
            </div>
            <p className="text-xl mb-8 leading-relaxed">
              At Vedant Enterprises, we don't just provide products – we build lasting relationships. Our commitment to quality, timely delivery, and customer satisfaction has made us the preferred choice for construction projects across Maharashtra.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">15+ Years</h3>
                <p className="text-green-200">Of Industry Experience</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-green-200">Satisfied Customers</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">1000+</h3>
                <p className="text-green-200">Projects Completed</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
