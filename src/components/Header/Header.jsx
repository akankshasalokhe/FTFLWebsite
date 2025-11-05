// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Styles from "./Header.module.css"; 

// const HeroSection = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.3,
//     triggerOnce: true
//   });

//   return (
//     <section
//       ref={ref}
//       className={`relative mt-[80px] text-white text-center px-4 sm:px-6 lg:px-8 overflow-hidden ${Styles.hero}`}
//       style={{
//         height: "calc(100vh - 80px)",
//         minHeight: "500px",
//         maxHeight: "1200px"
//       }}
//     >
//       {/* Background Image with Enhanced Parallax Effect */}
//       <motion.div
//         className="absolute inset-0 bg-inherit bg-center z-0"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
//           backgroundPosition: "center center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat"
//         }}
//         initial={{ scale: 1.3, opacity: 0 }}
//         animate={inView ? { scale: 1, opacity: 1 } : {}}
//         transition={{ 
//           duration: 1.5, 
//           ease: [0.16, 0.77, 0.47, 0.97],
//           opacity: { duration: 1.2 }
//         }}
//       />

//       {/* Gradient Overlay with Animation */}
//       <motion.div
//         className="absolute inset-0 z-10"
//         style={{
//           background: "linear-gradient(135deg, rgba(7,24,43,0.85) 0%, rgba(23,64,110,0.7) 100%)",
//         }}
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         transition={{ duration: 1.2, delay: 0.3 }}
//       />

//       {/* Content */}
//       <div className="relative z-20 h-full flex flex-col items-center justify-center">
//         <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//           <motion.div
//             initial={{ y: 40, opacity: 0 }}
//             animate={inView ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="mb-4 sm:mb-6 md:mb-8 w-full"
//           >
//             {/* <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-900 bg-opacity-40 rounded-full backdrop-blur-sm mb-4 sm:mb-6 border border-blue-700">
//               <span className="text-blue-300 font-medium text-sm sm:text-base">Innovating Since 2015</span>
//             </div> */}
            
//             <motion.h1
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight px-2 sm:px-4"
//             >
//               <span className="block">FTFL Technology</span>
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
//                 Turns visions into digital reality
//               </span>
//             </motion.h1>

//             <motion.p
//               className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-2xl sm:max-w-3xl mx-auto text-gray-300 px-2 sm:px-4"
//               initial={{ y: 20, opacity: 0 }}
//               animate={inView ? { y: 0, opacity: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.7 }}
//             >
//               We craft future-ready IT solutions that scale with your business — blending creativity, code, and cloud innovation.
//             </motion.p>
//           </motion.div>

//           <motion.div
//             className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 w-full px-2 sm:px-4"
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.9 }}
//           >
//             <Link
//               href="#homeservices"
//               className="relative overflow-hidden group w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm sm:text-base"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#298cf3] to-blue-600 group-hover:from-blue-500 group-hover:to-cyan-600 transition-all duration-300"></span>
//               <span id='#homeservices' className="relative flex items-center justify-center gap-2">
//                 Explore Services
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </span>
//             </Link>

//             <Link
//               href="/about"
//               className="relative overflow-hidden group w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm sm:text-base border-2 border-blue-400"
//             >
//               <span className="absolute inset-0 bg-blue-900 bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 backdrop-blur-sm"></span>
//               <span className="relative flex items-center justify-center gap-2">
//                 Learn More
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
//                 </svg>
//               </span>
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#143154] text-white px-6"
    >
      {/* 🔷 Glowing Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(0,150,255,0.25), transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌟 Animated Heading */}
      <motion.h1
        className="z-20 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent relative"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.span
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "linear-gradient(90deg, #00c6ff, #0072ff, #00c6ff)",
            WebkitBackgroundClip: "text",
            backgroundSize: "200% auto",
          }}
        >
          FTFL Technology
        </motion.span>

        {/* 🔹 Pulsing underline */}
        {/* <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] h-[3px] w-40 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full shadow-lg"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        /> */}
      </motion.h1>

      {/* ✨ Subheading */}
      <motion.h2
        className="z-20 mt-6 text-2xl sm:text-3xl text-gray-300 font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Turning <span className="text-cyan-400 font-semibold">visions</span> into{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
          digital reality
        </span>
      </motion.h2>

      {/* 💬 Description */}
      <motion.p
        className="z-20 mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 1 }}
      >
        We craft future-ready IT solutions that scale with your business —
        blending creativity, code, and cloud innovation to deliver excellence.
      </motion.p>

      {/* 🔘 Buttons */}
      <motion.div
        className="z-20 flex justify-center gap-4 pt-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <Link
          href="#homeservices"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#298cf3] to-blue-600 font-semibold hover:shadow-[0_0_20px_#298cf3] hover:scale-105 transition-all duration-300"
        >
          Explore Services
        </Link>
        <Link
          href="/about"
          className="px-6 py-3 rounded-lg border border-blue-400 hover:bg-blue-900/30 font-semibold transition-all duration-300"
        >
          Learn More
        </Link>
      </motion.div>

      {/* 🌌 Floating Particles */}
      {/* {[...Array(30)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-[3px] h-[3px] bg-cyan-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.5,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))} */}

      {/* Code Syntax Particles */}
{[...Array(20)].map((_, i) => (
  <motion.span
    key={i}
    className="absolute text-[10px] font-mono text-blue-400/70"
    style={{
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [0, -20, 0],
      opacity: [0, 5, 2],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      repeat: Infinity,
      delay: i * 0.2,
    }}
  >
    {['</>', '{ }', '=>', '()', '[]', '{}', '<div>', 'fn()', 'const', 'import'][i % 10]}
  </motion.span>
))}
    </section>
  );
};

export default HeroSection;




