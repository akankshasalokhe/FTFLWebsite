import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import styles from "/Header.module.css"

const HeroSection = () => {
  return (
    <section
      className={`relative text-white text-center mt-1 px-4 lg:px-8 md:px-6 h-100 sm:px-4 sm:h-50 bg-inherit overflow-hidden `}
      style={{
        height: "90vh",
      }}
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute lg:h-full inset-0 bg-cover bg-center z-0 object-cover md:h-120 w-full lg:w-full sm:h-50 sm:w-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute lg:h-full inset-0 z-10 md:h-120 sm:h-50"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.75), rgba(20,20,20,0.5))",
          backdropFilter: "blur(2px)",
        }}
      ></div>

      {/* Content */}
      <div
        className="relative z-20 max-w-4xl mx-auto flex flex-col items-center justify-center"
        style={{
          height: "100%",
          paddingTop: "60px",
          paddingBottom: "40px",
        }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
                        {/* FTFL Technology turns your boldest visions into digital reality. */}

          FTFL Technology <span className="text-blue-400">turns your boldest visions into digital reality.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
            We craft future-ready IT solutions that scale with your business — blending creativity, code, and cloud innovation.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:scale-105 hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Explore Services
          </Link>
          <Link
            href="/about"
            className="border border-white text-white px-6 py-3 rounded shadow hover:bg-white hover:text-blue-700 transition duration-300 font-semibold"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Responsive Height */}
      {/* <style jsx>{`
        @media (max-width: 768px) {
          section {
            height: 80vh;
          }
        }
        @media (max-width: 425px) {
          section {
            height: 60vh;
          }
        }
      `}</style> */}
    </section>
  );
};

export default HeroSection;
