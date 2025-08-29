
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Lifeline Cart",
    type: "E-commerce Website",
    description:
      "Lifeline Cart is a cutting-edge e-commerce platform offering fast, secure, and user-friendly shopping experiences.",
    image:
      "https://images.unsplash.com/photo-1594384987989-c89cae4b5e12?auto=format&fit=crop&w=800&q=80",
    themeColor: "from-blue-400 to-blue-200",
  },
  {
    id: 2,
    name: "Dating App",
    type: "Mobile Application",
    description:
      "Find your perfect match with our engaging, secure, and modern dating application designed for meaningful connections.",
    image:
      "https://images.unsplash.com/photo-1601597111158-9073b78caa3f?auto=format&fit=crop&w=800&q=80",
    themeColor: "from-pink-400 to-pink-200",
  },
  {
    id: 3,
    name: "Fetch True",
    type: "Business App",
    description:
      "Fetch True simplifies your business workflows, offering powerful features for data management and team collaboration.",
    image:
      "https://images.unsplash.com/photo-1504691342899-9d7eea6fc0a4?auto=format&fit=crop&w=800&q=80",
    themeColor: "from-green-400 to-green-200",
  },
];

export default function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse">
          Explore Our Trending Products
        </h1>

        {/* Product Selector */}
        <div className="flex justify-center space-x-4 mb-10 flex-wrap">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:scale-105 ${
                selectedProduct.id === product.id
                  ? "bg-gradient-to-r from-purple-400 to-blue-400 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Product Details */}
        <motion.div
          key={selectedProduct.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-6 bg-white p-6`}
        >
          <motion.img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-80 object-cover rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {selectedProduct.name}
            </h2>
            <p className="text-lg font-semibold text-purple-500 mb-2">
              {selectedProduct.type}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {selectedProduct.description}
            </p>

            <div className="flex space-x-4">
              <Link href={`/products/${selectedProduct.id}`}>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform">
                Learn More
              </button>
              </Link>
              <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
        
      </div>

      {/* CTA Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/products" passHref>
            <motion.button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg inline-flex items-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(37, 99, 235, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explore All Products
              <svg
                className="w-5 h-5 ml-2"
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
  );
}