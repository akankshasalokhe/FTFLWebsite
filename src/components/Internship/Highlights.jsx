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
      icon: <FaBuilding />,
      title: "Real Industry Exposure",
      text: "Work on real company projects and learn industry workflows.",
    },
    {
      icon: <FaChartLine />,
      title: "Skill Growth",
      text: "Develop both technical and soft skills for professional growth.",
    },
    {
      icon: <FaHandshake />,
      title: "Professional Network",
      text: "Connect with mentors and industry professionals.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Career Direction",
      text: "Discover your strengths and career preferences through experience.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Resume Advantage",
      text: "Boost your resume with practical work experience.",
    },
  ];

  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* ========== LEFT: IMAGE ========== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <div className="w-full h-[300px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
            <img
              src="Digital marketing works 24_7 even when you don’t….jpeg"
              alt="Corporate Internship"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* ========== RIGHT: CONTENT ========== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Internship at{" "}
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
                FTFL
              </span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mb-6"></div>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-lg">
              FTFL Technology Pvt. Ltd. provides hands-on internship experience
              where students and fresh graduates work on live projects in Web
              Development, App Development, Digital Marketing, AI/ML, and
              Creative Design under expert mentorship.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 p-4 flex items-center justify-center rounded-lg bg-blue-600 text-white text-xl">
                  {b.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{b.title}</h4>
                  <p className="text-gray-600 text-sm">{b.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}













