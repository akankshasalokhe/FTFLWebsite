// import React from 'react';
// import { useEffect, useRef } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import AboutUsSection from '@/components/AboutUs/AboutUs';
// import MissionSection from '@/components/OurMission/OurMission';
// import BoardMembers from '@/components/TeamMembers/TeamMembers';
// import Gallery from '@/components/Gallery/Gallery';
// import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
// import Testimonials from '@/components/Testimonial/Testimonial';
// import ContactForm from '@/components/ContactUs/ContactUs';
// import CompanyEventsGallery from '@/components/Events/Gallery';

// function About() {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [controls, isInView]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <div className="overflow-x-hidden">
//       {/* Hero Section - Fixed width and height */}
//       <div 
//         ref={ref}
//         className="relative mt-[80px] w-screen h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden"
//         style={{
//           background: "linear-gradient(135deg, rgba(7,24,43,0.85) 0%, rgba(23,64,110,0.7) 100%)",
//         }}
//       >
//         {/* Modern background elements */}
//         <motion.div 
//           className="absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.15 }}
//           transition={{ duration: 2 }}
//         >
//           {/* Geometric shapes */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2 mix-blend-overlay opacity-70"></div>
//           <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-lg transform -translate-x-1/3 translate-y-1/3 rotate-45 mix-blend-overlay opacity-70"></div>
//           <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 mix-blend-overlay opacity-70"></div>
//         </motion.div>

//         {/* Floating dots animation */}
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-white rounded-full"
//             style={{
//               width: `${Math.random() * 10 + 5}px`,
//               height: `${Math.random() * 10 + 5}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               opacity: 0.4
//             }}
//             animate={{
//               y: [0, Math.random() * 100 - 50],
//               x: [0, Math.random() * 60 - 30],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "easeInOut"
//             }}
//           />
//         ))}

//         {/* Content - Full width container */}
//         <motion.div
//           className="w-full h-full flex flex-col justify-center items-center px-6 relative z-10 text-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//         >
//           <div className="max-w-4xl mx-auto">
//             <motion.h1 
//               className="text-5xl md:text-7xl font-bold text-white mb-6"
//               variants={itemVariants}
//             >
//               Our Journey
//             </motion.h1>

//             <motion.p 
//               className="text-xl md:text-2xl text-white mb-8 leading-relaxed"
//               variants={itemVariants}
//             >
//               We combine innovation with passion to create exceptional experiences that make a difference.
//             </motion.p>

//             <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
//               <button 
//                 className="px-8 py-3 bg-white text-[#298cf3] rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
//                 onClick={() => {
//                   document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' });
//                 }}
//               >
//                 Meet Our Team
//               </button>
//               <button 
//                 className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
//                 onClick={() => {
//                   document.getElementById('values-section')?.scrollIntoView({ behavior: 'smooth' });
//                 }}
//               >
//                 Our Values
//               </button>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Clean bottom edge */}
//         <div className="absolute bottom-0 left-0 w-full h-16 bg-white clip-path-angle"></div>
//       </div>

//       <AboutUsSection />
//       <MissionSection />
//       <BoardMembers />
//       <WhyChooseUs />
//       {/* <CompanyEventsGallery /> */}
//       <Gallery />
//       <Testimonials />
//       <ContactForm />
//     </div>
//   );
// }

// export default About;








"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import MissionSection from "@/components/OurMission/OurMission";
import BoardMembers from "@/components/TeamMembers/TeamMembers";
// import Testimonials from "@/components/Testimonial/Testimonial";
// import ContactForm from "@/components/ContactUs/ContactUs";
import StorySection from "@/components/OurStory/OurStory";
import OurJourney from "@/components/OurJourney/OurJourney";
import Gallery from "@/components/Gallery/Gallery";
import CompanyEventsGallery from "@/components/Events/Gallery";

function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [banner, setBanner] = useState(null);

  const pageTitle = "About"; // 👈 change per page if needed

  // ✅ Fetch correct banner by matching title dynamically
   useEffect(() => {
    const canvas = document.getElementById("networkCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const points = [];
    const POINT_COUNT = 35;

    for (let i = 0; i < POINT_COUNT; i++) {
      points.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 2 + 1,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
      });
    }

    function drawLine(p1, p2, opacity) {
      ctx.strokeStyle = `rgba(110,190,255,${opacity})`;
      ctx.lineWidth = 1.2;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);

      // --- Bezier flowing line ---
      ctx.quadraticCurveTo(
        (p1.x + p2.x) / 2,
        (p1.y + p2.y) / 2 + Math.sin(Date.now() * 0.001) * 20,
        p2.x,
        p2.y
      );

      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);

      // Soft gradient overlay
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, "rgba(0,150,255,0.06)");
      gradient.addColorStop(1, "rgba(0,255,255,0.05)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < POINT_COUNT; i++) {
        const p = points[i];

        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        // bounce edges
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // glowing 3D node
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3 * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140,220,255,${0.35 * p.z})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#3ab4ff";
        ctx.fill();
        ctx.shadowBlur = 0;

        // connect with other nodes
        for (let j = i + 1; j < POINT_COUNT; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < 240) {
            drawLine(p, p2, 1 - dist / 240);
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    // Resize fix
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

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
        delayChildren: 0.3,
      },
    },
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
        duration: 0.5,
      },
    },
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div
      ref={ref}
      className="relative h-[35vh] min-h-[420px] max-h-[480px] overflow-hidden 
                 bg-gradient-to-r from-[#021030] via-[#032781] to-[#01154b]"
    >
      {/* ===================================== */}
      {/* Soft Blue Glowing Wave (Bottom)      */}
      {/* ===================================== */}
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-70 z-5">
        <div className="neon-wave"></div>
      </div>

      {/* ===================================== */}
      {/* 3D Network Web + Bezier Lines (Canvas) */}
      {/* ===================================== */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <canvas id="networkCanvas" className="w-full h-full"></canvas>
      </div>

      {/* Other background animations */}
      <div className="absolute inset-0 z-5">
        <div className="circuit-lines"></div>
      </div>

      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="neon-dots"></div>
      </div>

      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="floating-polygons"></div>
      </div>

      {/* ===================================== */}
      {/* CONTENT SECTION                       */}
      {/* ===================================== */}
      <motion.div
        className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 py-6 relative z-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="max-w-4xl mx-auto w-full px-4">

          <motion.h1
            className="relative text-3xl sm:text-5xl md:text-6xl font-bold 
            text-white bg-clip-text text-transparent leading-none mb-4"
          >
            Our Journey
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white mb-6 leading-relaxed px-2 sm:px-0"
            variants={itemVariants}
          >
            We combine innovation with passion to create exceptional
            experiences that make a difference.
          </motion.p>

          {/* <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-1 lg:gap-4 justify-center w-full px-2 sm:px-0"
          >
            <button
              className="flex items-center justify-center gap-2
              px-6 py-3 rounded-lg cursor-pointer
              bg-gradient-to-r from-[#298cf3] to-blue-600
              text-white font-semibold hover:shadow-lg hover:scale-[1.02]
              transition-transform duration-300"
              onClick={() => {
                document
                  .getElementById("team-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Meet Our Board Directors
            </button>

            <button
              className="mt-8 sm:mt-0 px-8 py-3 rounded-lg cursor-pointer 
              bg-gradient-to-r from-[#298cf3] to-blue-600 
              text-white font-semibold hover:shadow-lg hover:scale-105 
              transition-transform duration-300"
              onClick={() => {
                document
                  .getElementById("values-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Values
            </button>
          </motion.div> */}

        </div>
      </motion.div>

      {/* Bottom White Edge */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-white clip-path-angle z-30"></div>
    </div>





      {/* Page Sections */}

      {/* <OurJourney /> */}
      <StorySection />
      <MissionSection />

      <BoardMembers />
      {/* <WhyChooseUs /> */}
      {/* <CompanyEventsGallery /> */}
      <Gallery />
      {/* <Testimonials /> */}
      {/* <ContactForm /> */}
    </div>
  );
}

export default About;

