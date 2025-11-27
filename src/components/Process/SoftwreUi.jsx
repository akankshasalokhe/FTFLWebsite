// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function SoftwareUi({ steps }) {
//   return (
//     <section className="w-full m-0 p-0 relative py-24 bg-[#acd1edcd] overflow-hidden">
      
//       {/* Background Gradient Blobs */}
//       <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 opacity-40 blur-3xl rounded-full"></div>
//       <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 opacity-40 blur-3xl rounded-full"></div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl font-bold text-gray-900 text-center mb-14"
//         >
//           Our Process
//         </motion.h2>

//         {/* Steps Container */}
//         <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10">

//           {/* Connector Line */}
//           <div className="hidden md:block absolute top-20 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

//           {steps?.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               className="relative bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.07)] rounded-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300"
//             >
//               {/* Circular Icon */}
//               <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-full mx-auto mb-6 shadow-inner">
//                 {/* Backend Icon (React Element) */}
//                 {step.icon}
//               </div>

//               {/* Step Number */}
//               <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
//                 Step {index + 1}
//               </span>

//               {/* Title */}
//               <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
//                 {step.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 text-center leading-relaxed text-sm">
//                 {step.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SoftwareUi({ steps }) {
  return (
    <>
       <section className="relative py-20 bg-[#acd1edcd] overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 opacity-40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 opacity-40 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-gray-900 text-center mb-14"
        >
          Our Process
        </motion.h2>

        {/* Steps Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-20 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.07)] rounded-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Circular Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-full mx-auto mb-6 shadow-inner">
                {step.icon}
              </div>

              {/* Step Number (Floating Label) */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
                Step {index + 1}
              </span>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
    
  );
}
