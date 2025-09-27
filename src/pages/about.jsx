import React from 'react';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import AboutUsSection from '@/components/AboutUs/AboutUs';
import MissionSection from '@/components/OurMission/OurMission';
import BoardMembers from '@/components/TeamMembers/TeamMembers';
import Gallery from '@/components/Gallery/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Testimonials from '@/components/Testimonial/Testimonial';
import ContactForm from '@/components/ContactUs/ContactUs';

function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div 
        ref={ref}
        className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-[#298cf3] to-blue-500 overflow-hidden"
      >
        {/* Modern background elements */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
        >
          {/* Geometric shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2 mix-blend-overlay opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-lg transform -translate-x-1/3 translate-y-1/3 rotate-45 mix-blend-overlay opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 mix-blend-overlay opacity-70"></div>
        </motion.div>

        {/* Floating dots animation */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.4
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 60 - 30],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Content */}
        <motion.div
          className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Our Journey
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white max-w-2xl mb-8 leading-relaxed"
            variants={itemVariants}
          >
            We combine innovation with passion to create exceptional experiences that make a difference.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button 
              className="px-8 py-3 bg-white text-[#298cf3] rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              onClick={() => {
                document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Meet Our Team
            </button>
            <button 
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              onClick={() => {
                document.getElementById('values-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Our Values
            </button>
          </motion.div>
        </motion.div>

        {/* Clean bottom edge */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white clip-path-angle"></div>
      </div>
      
      <AboutUsSection />
      <MissionSection />
      <BoardMembers />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default About;