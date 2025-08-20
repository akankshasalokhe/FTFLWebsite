// pages/index.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

// Demo products
const PRODUCTS = [
  {
    title: "Dating App",
    slug: "dating-app",
    type: "App",
    color: "#FF6B6B",
    accentColor: "#FF3B3B",
    subtitle: "Find meaningful connections",
    tags: ["React Native", "Firebase", "Socket.IO"],
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    type: "Web",
    color: "#4ECDC4",
    accentColor: "#2BB8AF",
    subtitle: "Showcase your work elegantly",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "E-commerce Store",
    slug: "ecommerce-store",
    type: "Web",
    color: "#FFD93D",
    accentColor: "#FFC800",
    subtitle: "Modern shopping experience",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Fitness Tracker",
    slug: "fitness-tracker",
    type: "App",
    color: "#6C63FF",
    accentColor: "#524BDB",
    subtitle: "Achieve your health goals",
    tags: ["React Native", "GraphQL", "HealthKit"],
  },
  {
    title: "Task Manager",
    slug: "task-manager",
    type: "Web",
    color: "#FF9A8B",
    accentColor: "#FF7A6B",
    subtitle: "Boost your productivity",
    tags: ["Vue.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Travel Planner",
    slug: "travel-planner",
    type: "Web",
    color: "#36D1DC",
    accentColor: "#29B0BB",
    subtitle: "Plan your perfect getaway",
    tags: ["Next.js", "Mapbox", "Stripe"],
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
        <div className="max-w-6xl mx-auto">
          {/* Enhanced header with animation */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              ease: "easeOut" // Fixed easing function
            }}
            className="text-center mb-16"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto shadow-lg">
                <svg 
                  className="w-8 h-8 text-white" 
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
            
            <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
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
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} // Fixed easing function
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
              className="relative w-full sm:w-72"
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
                      transition: { duration: 0.3, ease: "easeOut" } // Fixed easing function
                    }}
                    className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100/70 h-96"
                  >
                    {/* Image with gradient overlay */}
                    <div className="relative h-40 overflow-hidden">
                      <div
                        className="h-full w-full flex items-center justify-center relative"
                        style={{ backgroundColor: p.color }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
                        <motion.div 
                          className="text-center text-white p-6 relative z-10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.1, ease: "easeOut" }} // Fixed easing function
                        >
                          <motion.div
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <svg
                              className="w-12 h-12 mx-auto mb-3 opacity-95 drop-shadow-md"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {p.type === "App" ? (
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                />
                              ) : (
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                              )}
                            </svg>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1, ease: "easeOut" }} // Fixed easing function
                          className="text-xs font-semibold px-3 py-1.5 rounded-full inline-block mb-4 w-fit"
                          style={{ backgroundColor: `${p.color}20`, color: p.color }}
                        >
                          {p.type}
                        </motion.span>
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1, ease: "easeOut" }} // Fixed easing function
                          className="text-xl font-bold text-gray-900 mb-3"
                        >
                          {p.title}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1, ease: "easeOut" }} // Fixed easing function
                          className="text-gray-600 mb-5 text-sm"
                        >
                          {p.subtitle}
                        </motion.p>
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + idx * 0.1, ease: "easeOut" }} // Fixed easing function
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
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 + idx * 0.1, ease: "easeOut" }} // Fixed easing function
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{ 
                          background: `linear-gradient(145deg, ${p.color}, ${p.accentColor})`,
                          boxShadow: `0 4px 14px 0 ${p.color}40`
                        }}
                        className="px-6 py-3 text-white font-medium rounded-xl transition-all duration-300 self-start flex items-center gap-2"
                      >
                        Learn More
                        <svg 
                          className="w-4 h-4" 
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