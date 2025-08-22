// pages/index.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

// Demo products with image IDs from Picsum
const PRODUCTS = [
  {
    title: "Dating App",
    slug: "dating-app",
    type: "App",
    color: "#FF6B6B",
    accentColor: "#FF3B3B",
    subtitle: "Find meaningful connections",
    description: "A modern dating app that uses AI to match you with compatible partners based on interests, values, and lifestyle preferences.",
    tags: ["React Native", "Firebase", "Socket.IO"],
    imageId: '100',
    keyFeatures: ["AI Matching", "Secure Chat", "Video Profiles", "Interest-Based Groups"]
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    type: "Web",
    color: "#4ECDC4",
    accentColor: "#2BB8AF",
    subtitle: "Showcase your work elegantly",
    description: "A responsive portfolio website template designed to highlight your projects with beautiful galleries and smooth animations.",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    imageId: 200,
    keyFeatures: ["Responsive Design", "Project Galleries", "Contact Forms", "SEO Optimized"]
  },
  {
    title: "E-commerce Store",
    slug: "ecommerce-store",
    type: "Web",
    color: "#FFD93D",
    accentColor: "#FFC800",
    subtitle: "Modern shopping experience",
    description: "A full-featured e-commerce platform with product management, secure payments, inventory tracking, and customer analytics.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    imageId: 300,
    keyFeatures: ["Product Catalog", "Secure Checkout", "Inventory Management", "Customer Dashboard"]
  },
  {
    title: "Fitness Tracker",
    slug: "fitness-tracker",
    type: "App",
    color: "#6C63FF",
    accentColor: "#524BDB",
    subtitle: "Achieve your health goals",
    description: "Comprehensive fitness app that tracks workouts, nutrition, and progress with personalized recommendations.",
    tags: ["React Native", "GraphQL", "HealthKit"],
    imageId: 400,
    keyFeatures: ["Workout Plans", "Nutrition Tracking", "Progress Analytics", "Community Challenges"]
  },
  {
    title: "Task Manager",
    slug: "task-manager",
    type: "Web",
    color: "#FF9A8B",
    accentColor: "#FF7A6B",
    subtitle: "Boost your productivity",
    description: "An intuitive task management system with team collaboration, deadlines, progress tracking, and integrations.",
    tags: ["Vue.js", "Node.js", "PostgreSQL"],
    imageId: 500,
    keyFeatures: ["Team Collaboration", "Progress Tracking", "Calendar View", "Third-party Integrations"]
  },
  {
    title: "Travel Planner",
    slug: "travel-planner",
    type: "Web",
    color: "#36D1DC",
    accentColor: "#29B0BB",
    subtitle: "Plan your perfect getaway",
    description: "All-in-one travel planning platform with destination research, itinerary building, booking, and expense tracking.",
    tags: ["Next.js", "Mapbox", "Stripe"],
    imageId: 600,
    keyFeatures: ["Destination Research", "Itinerary Builder", "Booking System", "Expense Tracker"]
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { 
    y: 40, 
    opacity: 0,
    scale: 0.95
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      duration: 0.6
    }
  },
  exit: {
    y: 20,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.3
    }
  }
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Products() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filtered = PRODUCTS.filter(
    (p) =>
      (filter === "All" || p.type === filter) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/30">
      <Head>
        <title>Modern Product Showcase | Next.js</title>
        <meta name="description" content="Explore our innovative products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced header with animation */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-center mb-16"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-sm"></div>
                <svg 
                  className="w-10 h-10 text-white relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 bg-clip-text  bg-gradient-to-r from-gray-800 to-gray-600">
              Explore Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover innovative solutions designed to meet your needs and exceed expectations.
            </p>
          </motion.div>

          {/* Enhanced Filters + Search */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-16 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex flex-wrap gap-2">
              {["All", "App", "Web"].map((t) => (
                <motion.button
                  key={t}
                  onClick={() => setFilter(t)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    filter === t
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm"
                  }`}
                >
                  {t}
                </motion.button>
              ))}
            </div>

            <motion.div 
              className="relative w-full sm:w-80"
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-5 py-3 pl-12 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg
                className="absolute left-4 top-3.5 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Product list with enhanced animations */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div
                    key={item}
                    className="flex flex-col bg-white/50 rounded-2xl shadow-md overflow-hidden h-96"
                  >
                    <div className="h-40 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-t-2xl"></div>
                    <div className="p-6 flex flex-col justify-center space-y-4">
                      <div className="h-6 w-24 bg-gray-300 rounded-full animate-pulse"></div>
                      <div className="h-8 w-56 bg-gray-300 rounded-lg animate-pulse"></div>
                      <div className="h-5 w-64 bg-gray-300 rounded animate-pulse"></div>
                      <div className="flex gap-2">
                        <div className="h-7 w-16 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="h-7 w-20 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="h-7 w-24 bg-gray-300 rounded-full animate-pulse"></div>
                      </div>
                      <div className="h-10 w-32 bg-gray-300 rounded-full animate-pulse mt-4"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : filtered.length > 0 ? (
              <motion.div
                key="products"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((p, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                    }}
                    onHoverStart={() => setIsHovered(idx)}
                    onHoverEnd={() => setIsHovered(null)}
                    className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100/70 group"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-blue-100/20 group-hover:to-purple-100/20 transition-all duration-500 z-0"></div>
                    
                    {/* Mockup container */}
                    <div className={`relative h-56 overflow-hidden flex items-center justify-center p-4 ${p.type === "App" ? "bg-gray-900" : "bg-gray-800"}`}>
                      {/* App mockup (mobile) */}
                      {p.type === "App" && (
                        <div className="relative mx-auto">
                          {/* Phone frame */}
                          <div className="w-44 h-88 bg-gray-800 rounded-3xl p-2 shadow-xl">
                            <div className="relative h-full overflow-hidden rounded-2xl bg-gray-900 flex items-center justify-center">
                              {/* Screen content */}
                              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80"></div>
                              <img 
                                src={`https://picsum.photos/seed/${p.imageId}/300/600`} 
                                alt={p.title}
                                className="w-full h-full object-cover opacity-90"
                              />
                              {/* App UI elements */}
                              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <div className="w-8 h-2 bg-white rounded-full"></div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <div className="absolute top-4 left-0 right-0 px-4">
                                <div className="h-4 bg-white/20 rounded-full w-3/4 mx-auto"></div>
                              </div>
                            </div>
                          </div>
                          {/* Phone notch */}
                          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-gray-800 rounded-b-lg z-10"></div>
                        </div>
                      )}
                      
                      {/* Web mockup (browser) */}
                      {p.type === "Web" && (
                        <div className="relative w-full max-w-md mx-auto">
                          {/* Browser frame */}
                          <div className="bg-gray-700 rounded-t-lg p-2 flex items-center">
                            <div className="flex gap-2">
                              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                            <div className="flex-1 mx-4 bg-gray-600 rounded-full h-5"></div>
                          </div>
                          {/* Browser content */}
                          <div className="bg-gray-900 h-48 rounded-b-lg overflow-hidden relative">
                            <img 
                              src={`https://picsum.photos/seed/${p.imageId}/600/400`} 
                              alt={p.title}
                              className="w-full h-full object-cover opacity-90"
                            />
                            {/* Browser UI elements */}
                            <div className="absolute top-4 left-4 right-4">
                              <div className="h-4 bg-white/20 rounded-full w-1/2"></div>
                            </div>
                            <div className="absolute bottom-4 left-4">
                              <div className="h-3 bg-white/20 rounded-full w-16"></div>
                            </div>
                            <div className="absolute bottom-4 right-4">
                              <div className="h-3 bg-white/20 rounded-full w-20"></div>
                            </div>
                            <div className="absolute bottom-12 left-4 right-4 grid grid-cols-4 gap-2">
                              {[1, 2, 3, 4].map(i => (
                                <div key={i} className="h-10 bg-white/10 rounded"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow relative z-10">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-xs font-semibold px-3 py-1.5 rounded-full inline-block w-fit"
                            style={{ backgroundColor: `${p.color}20`, color: p.color }}
                          >
                            {p.type}
                          </motion.span>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            className="flex -space-x-2"
                          >
                            {[1, 2, 3].map(i => (
                              <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"></div>
                            ))}
                          </motion.div>
                        </div>
                        
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="text-xl font-bold text-gray-900 mb-3"
                        >
                          {p.title}
                        </motion.h3>
                        
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="text-gray-600 mb-4 text-sm"
                        >
                          {p.subtitle}
                        </motion.p>
                        
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="mb-5"
                        >
                          <h4 className="text-sm font-bold text-gray-900 mb-2">Key Features:</h4>
                          <ul className=" flex-2/12 text-500 text-gray-600 space-y-1">
                            {p.keyFeatures.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <svg className="w-3 h-3 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                        
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="flex flex-wrap gap-2 mb-5"
                        >
                          {p.tags.map((tag, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 text-xs font-medium bg-gray-100 rounded-full transition-all duration-300 hover:bg-gray-200"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                      <Link href={`/products/${p.slug}`} passHref>
                          <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 + idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{ 
                          background: `linear-gradient(145deg, ${p.color}, ${p.accentColor})`,
                          boxShadow: `0 4px 14px 0 ${p.color}40`
                        }}
                        className="px-2 py-2 text-white font-medium rounded-xl transition-all duration-300 self-start flex items-center gap-2 group-hover:shadow-lg"
                      >
                        Learn More
                        <svg 
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </svg>
                      </motion.button>
                      </Link>
                      
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg
                    className="w-20 h-20 mx-auto text-gray-400 mb-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-medium text-gray-900 mb-3">
                  No products found
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
                <motion.button
                  onClick={() => {
                    setSearch("");
                    setFilter("All");
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-5 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-xl transition-all duration-300 hover:bg-gray-200"
                >
                  Clear filters
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}