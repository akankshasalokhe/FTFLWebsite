"use client";

import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Parallax } from "react-scroll-parallax";
import axios from "axios";

const AboutUsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const controls = useAnimation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 🔹 Stats data from backend
  const [stats, setStats] = useState([]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    // Backend se data fetch
    axios
      .get("https://landing-page-yclw.vercel.app/api/counter")
      .then((res) => {
        if (res.data.success) {
          setStats(res.data.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching stats:", err);
      });
  }, []);

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX - 16);
    cursorY.set(e.clientY - 16);
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const brandColor = {
    primary: "#298cf3",
    light: "#e6f2fe",
    dark: "#1a6bc4",
    gradient: "from-[#298cf3] to-blue-500",
  };

  return (
    <section
      className=" py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-100 opacity-10"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-blue-100 opacity-10"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Custom cursor */}
      <motion.div
        className="fixed w-8 h-8 bg-blue-500/20 rounded-full pointer-events-none z-50 backdrop-blur-sm border border-blue-500"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: hoveredCard !== null ? 1.5 : 1,
          backgroundColor: hoveredCard !== null ? "#298cf3" : "#298cf320",
        }}
        transition={{ type: "spring", damping: 10 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Who{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#298cf3] to-blue-600"
            >
              We Are
            </motion.span>
          </h1>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#298cf3] to-blue-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* Main content */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Text */}
          <motion.div
            className="lg:w-1/2 order-2 lg:order-1"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              About <span className="text-[#298cf3]">Our Company</span>
            </h2>
            <motion.p
              className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              We are a passionate IT solutions company delivering modern web,
              mobile, and cloud-based applications. Our goal is to help
              businesses achieve digital transformation with innovative
              solutions.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Founded in 2013, we've grown from a small team of developers to a
              full-service digital agency serving clients worldwide.
            </motion.p>
            <motion.button
              className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#298cf3] to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-[#1a6bc4] hover:to-blue-700 text-sm sm:text-base relative overflow-hidden group"
              style={{ backgroundColor: brandColor.primary }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Our Story</span>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:w-1/2 relative order-1 lg:order-2 mb-8 lg:mb-0"
            variants={itemVariants}
          >
            <Parallax speed={-5}>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-xl transition-shadow duration-300">
                <motion.img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1484&q=80"
                  alt="Our Team"
                  className="w-full h-auto rounded-xl sm:rounded-2xl transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 rounded-xl sm:rounded-2xl"></div>
              </div>
            </Parallax>
          </motion.div>
        </motion.div>

        {/* 🔹 Stats (dynamic from backend) - REDESIGNED WITH CIRCULAR CARDS */}
        <motion.div
          className="relative grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 mt-5 md:grid-cols-3 gap-6 sm:gap-20 mb-12 sm:mb-16 lg:mb-14 "
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat._id}
              variants={itemVariants}
              className="flex justify-center"
              whileHover={{
                scale: 1,
                transition: { type: "spring", stiffness: 200 }
              }}
              onMouseEnter={() => setHoveredCard(`stat-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
                              {/* Outer ring that animates on hover */}

              <div className="relative group">
                <motion.div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  animate={{
                    scale: hoveredCard === `stat-${index}` ? [1, 0, 1] : 1,
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{
                    background: "conic-gradient(from 0deg, #298cf3, #1a6bc4, #298cf3)"
                  }}
                />
                
                {/* Main circular card */}
                <motion.div
                  className="relative w-55 h-55 mt-5 rounded-full flex flex-col items-center justify-center p-6 border-2 border-blue-200 bg-white hover:shadow-2xl transition-all duration-300"
                  animate={{
                    boxShadow: hoveredCard === `stat-${index}` 
                      ? "0 0 1px rgba(0, 0, 0, 0.4)" 
                      : "0 0px 5px rgba(0, 0, 0, 0.1)",
                    y: hoveredCard === `stat-${index}` ? -2 : 0,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Icon with gradient background */}
                  <motion.div
                    className="w-12 h-12 rounded-full mb-3 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-7 h-7 bg-gradient-to-r from-[#298cf3] to-blue-500 rounded-full flex items-center justify-center shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5h6m-6 4h6m-6 4h6m-6 4h6"
                        />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Stat number with plus sign */}
                  <div className="flex items-end justify-center mb-1">
                    <h3 className="text-2xl font-bold text-gray-900 mr-1">
                      <CountUp end={stat.count} duration={3} />
                    </h3>
                    <span className="text-lg font-semibold text-blue-500 mb-0.5">
                      +
                    </span>
                  </div>

                  {/* Stat title */}
                  <p className="text-sm text-gray-600 font-medium text-center group-hover:text-gray-800 transition-colors duration-300 px-2">
                    {stat.title}
                  </p>
                  
                  {/* Animated dots around the circle */}
                  <motion.div 
                    className="absolute -inset-2 rounded-full border-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      rotate: hoveredCard === `stat-${index}` ? 360 : 0,
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;