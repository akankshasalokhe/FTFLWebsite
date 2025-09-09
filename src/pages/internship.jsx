"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function InternshipBanner() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants for cleaner code
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden py-16 md:py-24 px-6 md:px-16 lg:px-24">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNjMmQ0ZmYiIHN0cm9rZS13aWR0aD0iMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      {/* Animated decorative elements */}
      {isMounted && (
        <>
          <motion.div
            className="absolute top-10 left-5% w-16 h-16 bg-blue-400 rounded-full opacity-20 blur-md"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-15% w-20 h-20 bg-purple-400 rounded-xl opacity-20 blur-md"
            animate={{ 
              x: [0, 15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 left-2/3 w-14 h-14 bg-indigo-400 rounded-full opacity-20 blur-md"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative grid lg:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
        {/* Left Text */}
        <motion.div 
          className="space-y-6"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            variants={fadeInUp}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              FTFL Internship
            </span>
            <br />
            Program
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed"
            variants={fadeInUp}
          >
            Future Tech For Life — build <span className="font-semibold text-indigo-600">real skills</span>, ship <span className="font-semibold text-indigo-600">real projects</span>, and step into the industry with <span className="font-semibold text-indigo-600">confidence</span>.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold text-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white text-indigo-600 border border-indigo-200 rounded-xl shadow-sm hover:shadow-md transition-all font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          
          <motion.div className="flex items-center gap-4 pt-4" variants={fadeInUp}>
            <div className="flex -space-x-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white"></div>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              Join <span className="font-semibold text-indigo-600">250+</span> students already enrolled
            </p>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl rotate-3 opacity-20 blur-lg"></div>
            
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border-8 border-white">
              <div className="aspect-video relative bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">FTFL Internship</h3>
                  <p className="text-gray-600">Real-world experience for aspiring developers</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-md px-3 py-2 flex items-center gap-2"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Active Hiring</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-md px-3 py-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <span className="text-sm font-medium text-indigo-600">12 Weeks</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}