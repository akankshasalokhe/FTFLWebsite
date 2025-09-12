"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "LifelineCart",
    type: "E-commerce Platform",
    category: "web",
    description:
      "Lifeline Cart is a cutting-edge e-commerce solution with advanced inventory management, multiple payment gateways, and AI-powered recommendations.",
    image: "/Team.jpeg",
    features: ["Inventory", "Payments", "AI Suggestions"],
  },
  {
    id: 2,
    name: "EduSphere",
    type: "Learning Management System",
    category: "web",
    description:
      "EduSphere is an online learning platform with virtual classrooms, interactive assignments, and progress tracking to make education smarter and more accessible.",
    image: "/Team.jpeg",
    features: ["Virtual Classes", "Assignments", "Progress Tracking"],
  },
  {
    id: 3,
    name: "HealthConnect",
    type: "Mobile Health App",
    category: "mobile",
    description:
      "HealthConnect helps patients track their vitals, connect with doctors in real-time, and manage appointments seamlessly with a user-friendly mobile interface. and more. Our platform offers seamless checkout experiences and mobile-responsive design.",
    image: "/Fetch True Modules mockup (2).png",
    features: ["Appointments", "Live Chat", "Reports"],
  },
  
];

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div className="py-16 px-6 md:px-16 bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Our Products
      </h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-12">
        {["all", "web", "mobile"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab === "all"
              ? "All"
              : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60, 
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row `}
          >
            {/* Device Mockup Container */}
            <div className="relative flex items-center justify-center bg-gray-100 p-6 md:w-1/2">
              {product.category === "mobile" ? (
                // Phone Mockup
                <div className="relative w-full h-full rounded-3xl bg-gray-100 overflow-hidden shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                // Laptop Mockup
                <div className="relative w-full max-w-lg border-4 border-gray-800 rounded-md shadow-lg bg-gray-100">
                  {/* <div className="h-6 bg-gray-800 flex items-center justify-center rounded-t-md">
                    <span className="w-3 h-3 bg-gray-600 rounded-full mx-1"></span>
                    <span className="w-3 h-3 bg-gray-600 rounded-full mx-1"></span>
                    <span className="w-3 h-3 bg-gray-600 rounded-full mx-1"></span>
                  </div> */}
                  <div className="h-full  overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-2 w-24 bg-gray-800 mx-auto rounded-b-md"></div>
                </div>
              )}

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                    product.category === "mobile"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {product.category === "mobile"
                    ? "Mobile App"
                    : "Web App"}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow md:w-1/2 mt-4 md:mt-0">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{product.type}</p>
              <p className="text-gray-600 mb-4  leading-relaxed flex-grow">
                {product.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Key Features:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mt-auto">
                <Link href={`/products/${product.id}`} className="flex-1">
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition">
                    Learn More
                  </button>
                </Link>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition">
                  Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
