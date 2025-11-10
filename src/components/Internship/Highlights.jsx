// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { FaCertificate, FaLaptopCode, FaUserTie, FaBuilding, FaArrowRight } from "react-icons/fa";

// const InternshipHighlights = () => {
//   const highlights = [
//     {
//       id: 1,
//       icon: <FaCertificate className="text-white text-3xl" />,
//       title: "Real-World Exposure",
//       description: "Work directly on real-world industry projects to expand your professional portfolio and gain real-world exposure.",
//     },
//     {
//       id: 2,
//       icon: <FaLaptopCode className="text-white text-3xl" />,
//       title: "Performance Recognition ",
//       description: "Your efforts never go unnoticed. FTFL rewards innovation and dedication with constructive feedback, appreciation, and growth opportunities.",
//     },
//     {
//       id: 3,
//       icon: <FaUserTie className="text-white text-3xl" />,
//       title: "Networking Opportunities",
//       description: "Establish beneficial relationships with mentors, industry professionals, and other interns.",
//     },
//     {
//       id: 4,
//       icon: <FaBuilding className="text-white text-3xl" />,
//       title: "Career Advancement",
//       description: " Promising interns could get recommendation letters or pre-placement offers.",
//     },
//   ];

//   return (
//     <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-lavender-50 px-6 overflow-hidden mt-[-2px]">

//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
//       <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
//       <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

//       <div className="max-w-7xl mx-auto text-center relative z-10">
//         {/* Section Heading with Animation */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6"
//         >
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#298cf3] to-blue-600">
//             KickStart Your Journey<br />Shape Your Future
//           </span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
//         >
//           Our program goes beyond just learning. With internship letters,
//           hands-on projects, and guaranteed placement opportunities in our
//           company, we help you launch your career with confidence.
//         </motion.p>

//         {/* Highlights Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {highlights.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               whileInView={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true, margin: "-50px" }}
//               whileHover={{
//                 y: -10,
//                 transition: { duration: 0.3 }
//               }}
//               className="group relative"
//             >
//               <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-lavender-300 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
//               <div className="relative bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
//                 <div className="inline-flex items-center justify-center w-16 h-16 mb-5 rounded-xl bg-gradient-to-br from-blue-400 to-lavender-400 shadow-md">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-500 transition-colors">{item.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="mt-16"
//         >
//           <motion.a
//             href="#contactform"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             // className="inline-flex items-center bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
//             className="
//   flex items-center justify-center gap-2
//   px-6 py-3 rounded-lg cursor-pointer
//   bg-gradient-to-r from-[#298cf3] to-blue-600
//   text-white font-semibold text-sm sm:text-base
//   hover:shadow-lg transition-transform duration-300
//   w-full md:w-1/2 mx-auto
// "


//           >
//             Start Your Internship Journey
//             <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//           </motion.a>
//         </motion.div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default InternshipHighlights;


"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaChartLine,
  FaUserGraduate,
  FaHandshake,
  FaClipboardCheck,
} from "react-icons/fa";

export default function WhatIsInternship() {
  const benefits = [
    {
      icon: <FaBuilding className="text-blue-600 text-3xl" />,
      title: "Real-World Experience",
      text: "Gain hands-on exposure in corporate environments and understand how real businesses operate.",
    },
    {
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
      title: "Skill Advancement",
      text: "Develop both technical and interpersonal skills that prepare you for your professional journey.",
    },
    {
      icon: <FaHandshake className="text-blue-600 text-3xl" />,
      title: "Networking & Mentorship",
      text: "Connect with industry professionals and build valuable mentorship relationships.",
    },
    {
      icon: <FaUserGraduate className="text-blue-600 text-3xl" />,
      title: "Career Exploration",
      text: "Discover your strengths, interests, and preferred industries through immersive learning.",
    },
    {
      icon: <FaClipboardCheck className="text-blue-600 text-3xl" />,
      title: "Resume Value",
      text: "Enhance your resume with credible work experience that demonstrates initiative and capability.",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Subtle floating gradient orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-5">
            Internship in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              FTFL
            </span>
          </h2>
          <div className="w-28 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our internship program at FTFL Technology Pvt. Ltd. aims to close the knowledge gap between academic study and practical work experience. In fields including web development, mobile app development, digital marketing, AI/ML, and creative design, we provide students and recent graduates practical exposure to cutting-edge technology, actual projects, and industry practices.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
              <img
                src="https://images.unsplash.com/photo-1581092334472-7b1c92a7bfa7?auto=format&fit=crop&w=900&q=80"
                alt="Corporate Internship"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right — Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center lg:text-left">
              Why Internships Matter
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-3">{b.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {b.title}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {b.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}










