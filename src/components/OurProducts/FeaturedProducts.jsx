import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "LifelineCart",
    type: "E-commerce",
    description:
      "Lifeline Cart is a cutting-edge e-commerce solution with advanced inventory management, multiple payment gateways, and AI-powered recommendations. Our platform offers seamless checkout experiences and mobile-responsive design.",
    image: "/s4.jpeg",
    themeColor: "from-blue-400 to-blue-200",
    features: ["AI Recommendations", "Secure Payments", "Inventory Management", "Sales Analytics"]
  },
  {
    id: 2,
    name: "Fetch True",
    type: "B2B",
    description:
      "Fetch True simplifies your business workflows, offering powerful features for data management and team collaboration.",
    image: "/s1.jpeg",
    themeColor: "from-blue-400 to-blue-200",
    features: ["Data Integration", "Collaboration Tools", "Custom Workflows", "Real-time Analytics"]
  },
  {
    id: 3,
    name: "StayBea",
    type: "Dating App",
    description:
      "Find your perfect match with our engaging, secure, and modern dating application designed for meaningful connections.",
    image: "/images/staybea.jpg",
    themeColor: "from-blue-400 to-blue-200",
    features: ["AI Matchmaking", "Video Profiles", "Secure Messaging", "Event Integration"]
  },
];

export default function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
          Explore Our Trending Products
        </h1>

        {/* Product Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:scale-105 ${
                selectedProduct.id === product.id
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {product.type}
            </button>
          ))}
        </div>

        {/* Product Details */}
        <motion.div
          key={selectedProduct.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden flex flex-col lg:grid lg:grid-cols-2 gap-6 bg-white p-4 sm:p-6"
        >
          {/* Image Container - Adjusted for mobile visibility */}
          <div className="h-64 sm:h-80 md:h-96 w-full relative mx-auto max-w-md">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full relative"
            >
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-contain rounded-xl"
                priority={selectedProduct.id === 1}
              />
            </motion.div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-900">
              {selectedProduct.name}
            </h2>
            <p className="text-base sm:text-lg font-semibold text-blue-500 mb-2">
              {selectedProduct.type}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              {selectedProduct.description}
            </p>
            <p className="text-lg sm:text-xl mb-2 text-gray-900">Features</p>
            <ul className="mb-4 sm:mb-6 space-y-1 sm:space-y-2">
              {selectedProduct.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href={`/products/${selectedProduct.id}`}>
                <button className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform text-sm sm:text-base">
                  Learn More
                </button>
              </Link>
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition text-sm sm:text-base">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-8 sm:mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/products" passHref>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-base sm:text-lg font-semibold shadow-lg inline-flex items-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(37, 99, 235, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explore All Products
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}