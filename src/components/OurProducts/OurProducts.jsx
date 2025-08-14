import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const OurProducts = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);

  const products = [
    {
      name: "Fetch True",
      tagline: "Enterprise Intelligence Platform",
      description: "Transform franchise operations with AI-driven analytics and automation tools that provide real-time business insights.",
      features: [
        { icon: "📊", name: "Real-time Analytics", desc: "Interactive dashboards with customizable KPIs" },
        { icon: "⚡", name: "Workflow Automation", desc: "Reduce manual processes by 80% with smart automation" },
        { icon: "🔒", name: "Secure Payments", desc: "End-to-end encrypted transaction processing" }
      ],
      stats: [
        { value: "10K+", label: "Businesses" },
        { value: "95%", label: "Efficiency Gain" },
        { value: "24/7", label: "Global Support" }
      ],
      appImage: "/effective.png",
      color: "#4F46E5", // indigo-600
      slug: "fetch-true"
    },
    {
      name: "Spark",
      tagline: "Next-Gen Social Platform",
      description: "Authentic connections powered by AI matching and multi-layer identity verification systems.",
      features: [
        { icon: "✅", name: "Identity Verification", desc: "Biometric and document verification" },
        { icon: "💞", name: "Smart Matching", desc: "Compatibility scoring based on 50+ factors" },
        { icon: "🎥", name: "Video Chat", desc: "HD video with virtual backgrounds" }
      ],
      stats: [
        { value: "1M+", label: "Active Users" },
        { value: "4.9★", label: "Rating" },
        { value: "90%", label: "Verified" }
      ],
      appImage: "/images/spark-screen.png",
      color: "#EC4899", // pink-500
      slug: "spark"
    },
    {
      name: "TaskFlow",
      tagline: "Productivity Reinvented",
      description: "Collaborative workspace with intelligent task management that adapts to your team's workflow.",
      features: [
        { icon: "📋", name: "Smart Projects", desc: "AI-assisted task organization" },
        { icon: "👥", name: "Team Sync", desc: "Real-time collaboration tools" },
        { icon: "⏱️", name: "Time Tracking", desc: "Automated productivity analytics" }
      ],
      stats: [
        { value: "5K+", label: "Teams" },
        { value: "3×", label: "Output" },
        { value: "99.9%", label: "Uptime" }
      ],
      appImage: "/images/taskflow-screen.png",
      color: "#10B981", // emerald-500
      slug: "taskflow"
    },
   
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-indigo-50 blur-[150px]"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-pink-50 blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Clean Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Product Suite
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Innovative
            </span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed to streamline operations and enhance user experiences
          </p>
        </motion.div>

        {/* Product Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-100 p-1 rounded-xl">
            {products.map((product, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveProduct(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 text-sm font-medium rounded-lg transition-all ${activeProduct === index ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
              >
                {product.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
          {/* Product Visual */}
          <motion.div 
            className="relative h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-lg">
              <div className="relative h-full w-full flex items-center justify-center p-8">
                <Image
                  src={products[activeProduct].appImage}
                  alt={`${products[activeProduct].name} interface`}
                  width={600}
                  height={600}
                  className="object-contain transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div 
              className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full opacity-10 blur-[80px]"
              style={{ backgroundColor: products[activeProduct].color }}
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {products[activeProduct].name}
              </h3>
              <p className="text-lg text-indigo-600 mb-4">
                {products[activeProduct].tagline}
              </p>
              <p className="text-gray-600">
                {products[activeProduct].description}
              </p>
            </div>

            {/* Interactive Features */}
            <div className="space-y-4">
              {products[activeProduct].features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${expandedFeature === index ? 'border-indigo-300 bg-indigo-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                  onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">{feature.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900">{feature.name}</h4>
                      <AnimatePresence>
                        {expandedFeature === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-gray-600 overflow-hidden pt-2"
                          >
                            {feature.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats and CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
              <div className="flex space-x-8">
                {products[activeProduct].stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link href={`/products/${products[activeProduct].slug}`} passHref>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-md transition-all flex items-center group"
                >
                  Explore Platform
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* All Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-28"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Our Product Ecosystem</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl p-6 border border-gray-200 bg-white hover:border-indigo-200 transition-all ${activeProduct === index ? 'ring-2 ring-indigo-500/30' : ''}`}
                whileHover={{ y: -5 }}
                onClick={() => setActiveProduct(index)}
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: product.color }}
                ></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-10 h-10 rounded-lg mr-3 flex items-center justify-center text-white"
                      style={{ backgroundColor: product.color }}
                    >
                      <span className="text-lg font-bold">{product.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-500">{product.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      {product.features.slice(0, 2).map((feature, i) => (
                        <span key={i} className="text-2xl" title={feature.name}>{feature.icon}</span>
                      ))}
                    </div>
                    <Link href={`/products/${product.slug}`} passHref>
                      <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors flex items-center group">
                        Learn more
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-100 blur-[100px]"></div>
          <div className="relative z-10 p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Custom Enterprise Solutions</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Tailored software solutions designed for your unique business requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" passHref>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all shadow-sm"
                >
                  Request Consultation
                </motion.button>
              </Link>
              <Link href="/cases" passHref>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all border border-gray-200"
                >
                  View Case Studies
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProducts;