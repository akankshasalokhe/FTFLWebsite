// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiAward,
//   FiUsers,
//   FiClock,
//   FiTrendingUp,
//   FiCheck,
//   FiArrowRight,
// } from "react-icons/fi";

// const WhyChooseUs = () => {
//   const [activeReason, setActiveReason] = useState(0);

//   const reasons = [
//     {
//       icon: <FiAward className="h-8 w-8" />,
//       title: "Innovation Solution",
//       description:
//         "Making use of state-of-the-art technology to develop solutions that have an effect and are prepared for the future.",
//       highlights: [
//         "Future-Ready Technology ",
//         "Enhanced Efficiency ",
//         "Competitive Advantage",
//         "Scalable & Flexible",
//         "Impactful Result"
//       ],
//       color: "from-blue-500/10 to-blue-600/20",
//     },
//     {
//       icon: <FiUsers className="h-8 w-8" />,
//       title: "Expert Team",
//       description: "Knowledgeable experts committed to producing dependable, superior outcomes.",
//       highlights: [
//         "Proven Expertise",
//         "10+ years Of Experience",
//         "Innovative Solutions",
//         "Collaborative Approach",
//         "Continuous Learning"
//       ],
//       color: "from-blue-500/10 to-blue-600/20",
//     },
//     {
//       icon: <FiClock className="h-8 w-8" />,
//       title: "Future-Ready Tech",
//       description: "Skilled professionals driving excellence.",
//       highlights: [
//         "Cutting-Edge Solutions",
//         "Scalability",
//         "Enhanced Efficiency",
//         "Competitive Advantage",
//         "Long-Term Sustainability"
//       ],
//       color: "from-blue-500/10 to-blue-600/20",
//     },
//     {
//       icon: <FiTrendingUp className="h-8 w-8" />,
//       title: "Client-Centric",
//       description: "Dedicated to smooth cooperation, prompt delivery, and quantifiable results.",
//       highlights: [
//         "Seamless Collaboration",
//         "Timely Delivery",
//         "Measurable Results",
//         "Customer Satisfaction",
//         "Trust & Reliability"
//       ],
//       color: "from-blue-500/10 to-blue-600/20",
//     },
//   ];

//   const toggleReason = (index) => {
//     setActiveReason(activeReason === index ? null : index);
//   };

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           {/* <span className="inline-block mb-4 text-4xl font-semibold tracking-wider uppercase text-blue-600">
//             Why Choose Us
//           </span> */}
//           <span className="inline-block mb-4 text-2xl md:text-4xl font-semibold tracking-tight md:tracking-wider uppercase text-blue-600 whitespace-nowrap">
//             Why Choose Us
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             The <span className="text-blue-600">Right Choice</span> For Your
//             Digital Success
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We go beyond standard services to deliver exceptional value and
//             results.
//           </p>
//         </div>

//         {/* Desktop Grid */}
//         <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {reasons.map((reason, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -5 }}
//               whileTap={{ scale: 0.98 }}
//               className={`p-6 rounded-xl cursor-pointer transition-all ${activeReason === index
//                   ? "bg-white shadow-lg border border-blue-200"
//                   : "bg-white/80 hover:bg-white shadow-sm border border-gray-200"
//                 }`}
//               onClick={() => setActiveReason(index)}
//             >
//               <div
//                 className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${activeReason === index
//                     ? "bg-blue-100 text-blue-600"
//                     : "bg-blue-400 text-white"
//                   }`}
//               >
//                 {reason.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {reason.title}
//               </h3>
//               <p className="text-gray-600 text-sm">{reason.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Desktop detail card */}
//         <div className="hidden lg:block">
//           <AnimatePresence mode="wait">
//             {activeReason !== null && (
//               <motion.div
//                 key={activeReason}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden"
//               >
//                 <div className="flex flex-col lg:flex-row">
//                   <div
//                     className={`lg:w-2/5 p-8 md:p-10 bg-gradient-to-br ${reasons[activeReason].color}`}
//                   >
//                     <div className="text-gray-900">
//                       <div className="w-20 h-20 mb-6 flex items-center justify-center bg-blue-300 rounded-2xl backdrop-blur-sm">
//                         <div className="text-3xl">
//                           {reasons[activeReason].icon}
//                         </div>
//                       </div>
//                       <h3 className="text-3xl font-bold mb-3">
//                         {reasons[activeReason].title}
//                       </h3>
//                       <p className="text-gray-700">
//                         {reasons[activeReason].description}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="lg:w-3/5 mt-4 p-8 md:p-10">
//                     <h4 className="text-xl font-semibold mb-6 text-gray-900">
//                       How This Benefits You:
//                     </h4>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//                       {reasons[activeReason].highlights.map((item, i) => (
//                         <div
//                           key={i}
//                           className="flex items-start bg-gray-50 p-4 rounded-lg"
//                         >
//                           <div className="bg-blue-100 rounded-full p-1.5 mr-3 flex-shrink-0">
//                             <FiCheck className="h-4 w-4 text-blue-600" />
//                           </div>
//                           <span className="font-medium text-gray-700">
//                             {item}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* <div className="flex flex-col sm:flex-row gap-4">
//                       <motion.button
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//                       >
//                         Get Started <FiArrowRight />
//                       </motion.button>
                    
//                     </div> */}
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Mobile / Tablet Accordion */}
//         <div className="lg:hidden space-y-4">
//           {reasons.map((reason, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden"
//             >
//               <button
//                 onClick={() => toggleReason(index)}
//                 className="w-full flex items-center justify-between p-6 text-left"
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="w-12 h-12 rounded-lg p-3 bg-blue-500 flex items-center justify-center text-white">
//                     {reason.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       {reason.title}
//                     </h3>
//                     <p className="text-sm text-gray-600">{reason.description}</p>
//                   </div>
//                 </div>
//                 <FiArrowRight
//                   className={`ml-2 transition-transform duration-300 ${activeReason === index
//                       ? "rotate-90 text-blue-600"
//                       : "text-gray-400"
//                     }`}
//                 />
//               </button>

//               <AnimatePresence>
//                 {activeReason === index && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="px-6 pb-6"
//                   >
//                     <h4 className="text-md font-semibold mb-4 text-gray-900">
//                       How This Benefits You:
//                     </h4>
//                     <div className="space-y-3 mb-6">
//                       {reason.highlights.map((item, i) => (
//                         <div
//                           key={i}
//                           className="flex items-start bg-gray-50 p-3 rounded-lg"
//                         >
//                           <div className="bg-blue-100 rounded-full p-1.5 mr-3 flex-shrink-0">
//                             <FiCheck className="h-4 w-4 text-blue-600" />
//                           </div>
//                           <span className="font-medium text-gray-700">
//                             {item}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                     {/* <div className="flex flex-col sm:flex-row gap-3">
//                       <button className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 w-full justify-center">
//                         Get Started <FiArrowRight />
//                       </button>
                  
//                     </div> */}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiAward,
  FiUsers,
  FiClock,
  FiTrendingUp,
  FiCheck,
} from "react-icons/fi";

const WhyChooseUs = () => {
  const [activeReason, setActiveReason] = useState(null);

  const reasons = [
    {
      icon: <FiAward className="h-8 w-8" />,
      title: "Innovation Solution",
      description:
        "We craft state-of-the-art technology that shapes the future of business innovation.",
      highlights: [
        "Future-Ready Technology",
        "Enhanced Efficiency",
        "Competitive Edge",
        "Scalable & Flexible",
        "Impactful Results",
      ],
      gradient: "from-blue-500 via-indigo-500 to-blue-700",
    },
    {
      icon: <FiUsers className="h-8 w-8" />,
      title: "Expert Team",
      description:
        "A passionate team of professionals dedicated to delivering excellence and innovation.",
      highlights: [
        "Proven Expertise",
        "10+ Years Experience",
        "Collaborative Approach",
        "Innovative Mindset",
        "Continuous Learning",
      ],
      gradient: "from-indigo-500 via-blue-500 to-indigo-700",
    },
    {
      icon: <FiClock className="h-8 w-8" />,
      title: "Future-Ready Tech",
      description:
        "We implement scalable, efficient, and forward-thinking solutions for long-term growth.",
      highlights: [
        "Cutting-Edge Tools",
        "Sustainability",
        "Scalable Systems",
        "Enhanced Performance",
        "Innovation-Driven",
      ],
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    },
    {
      icon: <FiTrendingUp className="h-8 w-8" />,
      title: "Client-Centric",
      description:
        "We value relationships and deliver measurable results with seamless collaboration.",
      highlights: [
        "Seamless Workflow",
        "Timely Delivery",
        "Proven Results",
        "Trust & Reliability",
        "Customer Satisfaction",
      ],
      gradient: "from-blue-600 via-indigo-500 to-cyan-600",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Why <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering your business with smart, innovative, and scalable digital solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 lg:gap-15  sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              onClick={() =>
                setActiveReason(activeReason === index ? null : index)
              }
              className={`relative w-[90%] sm:w-64 md:w-72 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                activeReason === index ? "ring-2 ring-blue-500/40" : ""
              }`}
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 mb-5 rounded-full bg-gradient-to-r ${reason.gradient} flex items-center justify-center text-white shadow-lg`}
                >
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 text-justify">
                  {reason.description}
                </p>

                {/* Expand on active */}
                <AnimatePresence>
                  {activeReason === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 w-full text-left space-y-2"
                    >
                      {reason.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start bg-blue-50/70 p-2 rounded-lg text-gray-700"
                        >
                          <div className="bg-blue-100 rounded-full p-1.5 mr-2">
                            <FiCheck className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

