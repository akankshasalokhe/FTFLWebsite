"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "AI Chatbot",
    description: "Automate customer support with smart AI responses.",
    image: "/Chatboat.jpeg",
  },
  {
    id: 2,
    name: "CRM Software",
    description: "Manage clients, projects, and sales with ease.",
    image: "/CRM.jpeg",
  },
  {
    id: 3,
    name: "E-learning Platform",
    description: "Interactive learning with video, quizzes, and progress tracking.",
    image: "/Elearn.jpeg",
  },
];

export default function OurProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title & See More Row */}
        <div className="flex items-center justify-between mb-4">
          <motion.h2
            className="text-4xl font-bold text-blue-800 text-center flex-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Products
          </motion.h2>

          <motion.a
            href="/products"
            className="flex items-center gap-2 text-blue-600 font-medium group ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="relative">
              See More
              <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Discover our cutting-edge solutions designed to boost your business.
        </motion.p>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
