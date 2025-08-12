"use client";

import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Parallax } from 'react-scroll-parallax';

const AboutUsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  const controls = useAnimation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX - 16);
    cursorY.set(e.clientY - 16);
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const brandColor = {
    primary: "#298cf3",
    light: "#e6f2fe",
    dark: "#1a6bc4",
    gradient: "from-[#298cf3] to-blue-500"
  };

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-100 opacity-10"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-blue-100 opacity-10"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
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
        {/* Title with text scramble effect */}
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

        {/* Main Content */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Text Content */}
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
              We are a passionate IT solutions company delivering modern web, mobile,
              and cloud-based applications. Our goal is to help businesses achieve
              digital transformation with innovative solutions.
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
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                animate={{ x: hoveredCard === 'button' ? '0%' : '-100%' }}
                onMouseEnter={() => setHoveredCard('button')}
                onMouseLeave={() => setHoveredCard(null)}
              />
            </motion.button>
          </motion.div>

          {/* Image with parallax */}
          <motion.div
            className="lg:w-1/2 relative order-1 lg:order-2 mb-8 lg:mb-0"
            variants={itemVariants}
          >
            <Parallax speed={-5}>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-xl transition-shadow duration-300">
                <motion.img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80"
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
            <motion.div 
              className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 bg-blue-100 rounded-xl sm:rounded-2xl -z-10"
              animate={{
                rotate: [0, 5, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity
              }}
            />
            <motion.div 
              className="hidden sm:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-blue-100 rounded-full -z-10"
              animate={{
                rotate: [0, -10, 0],
                y: [0, 15, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity
              }}
            />
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {[
            { 
              value: 150, 
              suffix: "+", 
              label: "Projects Completed", 
              color: "from-[#298cf3] to-blue-400",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              )
            },
            { 
              value: 50, 
              suffix: "+", 
              label: "Happy Clients", 
              color: "from-[#298cf3] to-blue-500",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )
            },
            { 
              value: 10, 
              suffix: "+", 
              label: "Years of Experience", 
              color: "from-[#298cf3] to-blue-600",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredCard(`stat-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated gradient background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity
                }}
              />
              
              {/* Decorative elements */}
              <motion.div 
                className={`absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                animate={{
                  x: [0, -10, 0],
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 10 + index * 2,
                  repeat: Infinity
                }}
              />
              
              <motion.div 
                className={`absolute -left-5 -bottom-5 w-20 h-20 rounded-full bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                animate={{
                  x: [0, 10, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 12 + index * 2,
                  repeat: Infinity
                }}
              />
              
              {/* Content */}
              <div className="relative p-8 backdrop-blur-sm">
                <motion.div 
                  className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${stat.color} shadow-md`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                
                <div className="flex items-end mb-2">
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mr-2">
                    <CountUp end={stat.value} duration={3} />
                  </h3>
                  <span className="text-2xl md:text-3xl font-semibold text-gray-700 mb-1">{stat.suffix}</span>
                </div>
                
                <p className="text-lg text-gray-600">{stat.label}</p>
                
                {/* Animated underline */}
                <div className="mt-4 relative">
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 rounded-full"></div>
                  <motion.div 
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${stat.color} rounded-full group-hover:w-full transition-all duration-500`}
                    initial={{ width: 0 }}
                    animate={{ width: hoveredCard === `stat-${index}` ? '100%' : 0 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {[
            {
              title: "Web Development",
              description: "Robust and scalable websites for every device.",
              technologies: ["HTML", "CSS", "JavaScript", "React"],
              color: "bg-blue-100 text-blue-800"
            },
            {
              title: "Mobile App Development",
              description: "Native & cross-platform mobile solutions.",
              technologies: ["Flutter", "React Native", "Kotlin", "Swift"],
              color: "bg-blue-100 text-blue-800"
            },
            {
              title: "UI/UX Design",
              description: "Stunning designs with seamless user flow.",
              technologies: ["Figma", "Adobe XD", "Sketch"],
              color: "bg-blue-100 text-blue-800"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative"
              onMouseEnter={() => setHoveredCard(`service-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div 
                className={`h-2 sm:h-3 bg-gradient-to-r from-[#298cf3] to-blue-500`}
                initial={{ width: '100%' }}
                animate={{ width: hoveredCard === `service-${index}` ? '80%' : '100%' }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6 sm:p-8">
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                  whileHover={{ color: brandColor.primary }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6"
                  whileHover={{ x: 5 }}
                >
                  {service.description}
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800`}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: brandColor.light
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;