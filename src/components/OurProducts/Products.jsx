import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "LifelineCart",
    type: "E-commerce Platform",
    category: "web",
    description:
      "Lifeline Cart is a cutting-edge e-commerce solution with advanced inventory management, multiple payment gateways, and AI-powered recommendations. Our platform offers seamless checkout experiences and mobile-responsive design. Comprehensive analytics help you understand customer behavior and optimize sales strategy for maximum conversion rates.",
    image: "/images/ecommerce-platform.jpg",
    themeColor: "from-blue-500 to-blue-300",
    features: ["AI Recommendations", "Secure Payments", "Inventory Management", "Sales Analytics"]
  },
  {
    id: 2,
    name: "Fetch True",
    type: "Business Application",
    category: "mobile",
    description:
      "Fetch True simplifies business workflows with powerful data management and team collaboration tools. The mobile app enables real-time inventory tracking, CRM, and sales analytics on the go. With offline capabilities and cloud synchronization, your team works efficiently anywhere. Customizable dashboards and automated reporting help make data-driven decisions.",
    image: "/images/business-app.jpg",
    themeColor: "from-green-500 to-green-300",
    features: ["Real-time Tracking", "Offline Access", "Team Collaboration", "Custom Dashboards"]
  },
  {
    id: 3,
    name: "StayBea",
    type: "Dating Application",
    category: "mobile",
    description:
      "StayBea is a modern dating app designed for meaningful connections using advanced matching algorithms. Our verification system ensures authentic profiles while privacy controls give users complete control. With video calling, icebreaker prompts, and community events, StayBea creates opportunities for genuine connections in a safe digital environment.",
    image: "/images/dating-app.jpg",
    themeColor: "from-pink-500 to-pink-300",
    features: ["Smart Matching", "Video Calls", "Profile Verification", "Community Events"]
  },
  {
    id: 4,
    name: "Portfolio Pro",
    type: "Portfolio Platform",
    category: "web",
    description:
      "Portfolio Pro offers modern, responsive templates designed for creative professionals to showcase their work. Our platform includes SEO optimization, integrated contact forms, and e-commerce capabilities. With built-in analytics, you can track visitor engagement and optimize content to maximize opportunities and grow your professional presence online.",
    image: "/images/portfolio-template.jpg",
    themeColor: "from-purple-500 to-purple-300",
    features: ["Custom Templates", "SEO Optimization", "E-commerce Integration", "Visitor Analytics"]
  }
];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Innovative Digital Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Discover our cutting-edge mobile and web applications designed to transform your business and personal experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition">
              View Our Work
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-4"
          >
            Our Products
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-center max-w-2xl mx-auto mb-10"
          >
            Explore our portfolio of innovative mobile and web applications designed to solve real-world problems
          </motion.p>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-2 sm:space-x-4 mb-12 flex-wrap gap-2"
          >
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveCategory("mobile")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === "mobile"
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              Mobile Apps
            </button>
            <button
              onClick={() => setActiveCategory("web")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === "web"
                  ? "bg-purple-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              Web Applications
            </button>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`h-48 bg-gradient-to-r ${product.themeColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute bottom-4 left-5">
                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                      product.category === "mobile" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {product.category === "mobile" ? "Mobile App" : "Web App"}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-5">
                    <h3 className="text-white font-bold text-2xl">{product.name}</h3>
                    <p className="text-white text-sm">{product.type}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition">
                      Learn More
                    </button>
                    <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition">
                      Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to start your project?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you create an exceptional digital experience for your users
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition">
                Get in Touch
              </button>
              <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold transition">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}