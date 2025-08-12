import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCode,
  FaMobileAlt,
  FaLaptopCode,
  FaShoppingCart,
  FaPalette,
  FaPlug,
  FaServer,
  FaRobot,
  FaChartLine,
  FaDatabase
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const ServiceCategories = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: "Web Development",
      description: "Modern, performant websites with React, Next.js, and cutting-edge technologies",
      highlights: ["SSR/SSG", "Headless CMS", "Web Performance"],
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Mobile Apps",
      description: "Cross-platform mobile solutions with React Native and Flutter",
      highlights: ["iOS & Android", "Offline-first", "Push Notifications"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: "Custom Software",
      description: "Tailored business solutions that fit your workflow perfectly",
      highlights: ["CRM/ERP", "Automation", "Workflow Tools"],
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: <FaShoppingCart className="text-4xl" />,
      title: "E-commerce",
      description: "Scalable online stores with seamless checkout experiences",
      highlights: ["Shopify", "WooCommerce", "Custom Solutions"],
      gradient: "from-emerald-500 to-teal-400"
    },
    {
      icon: <FaPalette className="text-4xl" />,
      title: "UI/UX Design",
      description: "Beautiful interfaces with intuitive user experiences",
      highlights: ["Figma/XD", "Prototyping", "Design Systems"],
      gradient: "from-rose-500 to-red-500"
    },
    {
      icon: <FaPlug className="text-4xl" />,
      title: "API Services",
      description: "Robust API development and third-party integrations",
      highlights: ["REST/GraphQL", "Microservices", "Webhooks"],
      gradient: "from-violet-500 to-indigo-500"
    },
    {
      icon: <FaServer className="text-4xl" />,
      title: "Cloud Solutions",
      description: "Scalable infrastructure on AWS, GCP, and Azure",
      highlights: ["DevOps", "Serverless", "CI/CD"],
      gradient: "from-sky-500 to-blue-400"
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: "AI Integration",
      description: "Smart features powered by machine learning",
      highlights: ["Chatbots", "Recommendations", "Computer Vision"],
      gradient: "from-fuchsia-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transformative <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Digital Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We craft digital experiences that drive growth and innovation for your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br rounded-2xl shadow-xl ${service.gradient} opacity-10`}></div>
              
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 group">
                <div className="p-6 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white`}>
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    {service.highlights.map((highlight, i) => (
                      <span key={i} className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 mr-2 mb-2">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="inline-flex items-center text-sm font-semibold mt-auto"
                    style={{ color: service.gradient.includes('blue') ? '#3B82F6' : service.gradient.includes('purple') ? '#8B5CF6' : service.gradient.includes('emerald') ? '#10B981' : '#3B82F6' }}
                  >
                    Explore service
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>

                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br blur-md ${service.gradient} opacity-20`}
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl font-bold text-white shadow-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl transition-all"
            >
              <span>Start Your Project Today</span>
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
          
          <p className="mt-6 text-gray-500">
            Have a unique challenge? Let's discuss custom solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCategories;