// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export default function OurProcess({ title, steps = [], serviceImage2 }) {
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeStep, setActiveStep] = useState(0);

//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkIsMobile();
//     window.addEventListener("resize", checkIsMobile);
//     return () => window.removeEventListener("resize", checkIsMobile);
//   }, []);

//   return (
//     <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
//       <div className="container mx-auto max-w-7xl px-4 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-6xl font-bold mb-4 text-blue-900"
//         >
        
//           Our{" "}
//           {title
//             ?.toLowerCase()
//             ?.replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
//           Process

//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-xl text-blue-700 mb-12 max-w-3xl mx-auto"
//         >
//           Transforming ideas into engaging digital experiences across all platforms and media.
//         </motion.p>

//         {isMobile ? (
//           <MobileView
//             steps={steps}
//             activeStep={activeStep}
//             setActiveStep={setActiveStep}
//             serviceImage2={serviceImage2}
//           />
//         ) : (
//           <DesktopView
//             steps={steps}
//             activeStep={activeStep}
//             setActiveStep={setActiveStep}
//             serviceImage2={serviceImage2}
//           />
//         )}
//       </div>
//     </section>
//   );
// }

// // 📱 Mobile View
// function MobileView({ steps, activeStep, setActiveStep, serviceImage2 }) {
//   return (
//     <div className="space-y-6">
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="flex justify-center mb-6"
//       >
//         <div className="w-72 h-96 rounded-2xl flex items-center justify-center overflow-hidden bg-white shadow-lg">
//           <div className="w-full h-full relative">
//             {/* <Image
//               src="/web-app.png"
//               alt="Web App Mockup"
//               fill
//               className="object-contain rounded-2xl"
//               priority
//             /> */}
//             <Image
//               src={serviceImage2}
//               alt="Web App Mockup"
//               fill
//               className="object-cover rounded-2xl"
//               priority
//             />
//             {/* <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold py-1 px-3 rounded-full shadow-lg">
//               Step {activeStep + 1}
//             </div> */}
//           </div>
//         </div>
//       </motion.div>

//       <div className="space-y-4 px-2">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.3 }}
//             onClick={() => setActiveStep(index)}
//             className={`flex items-start cursor-pointer ${activeStep === index ? "scale-[1.02]" : ""
//               }`}
//           >
//             <div
//               className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1 transition-all duration-300 ${activeStep === index
//                   ? "bg-blue-600 shadow-lg scale-110"
//                   : "bg-blue-400"
//                 }`}
//             >
//               {index + 1}
//             </div>
//             <div
//               className={`border rounded-xl p-4 flex-1 text-left transition-all duration-300 ${activeStep === index
//                   ? "bg-blue-50 border-blue-300 shadow-md"
//                   : "bg-white border-gray-200"
//                 }`}
//             >
//               <h3 className="font-semibold text-blue-900">{step.title}</h3>
//               <AnimatePresence>
//                 {activeStep === index && (
//                   <motion.p
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.4 }}
//                     className="text-sm text-blue-700 mt-2"
//                   >
//                     {step.description}
//                   </motion.p>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // 💻 Desktop View (Dynamic Arc with Auto and Click)
// function DesktopView({ steps, activeStep, setActiveStep, serviceImage2 }) {
//   const radius = steps.length > 7 ? 320 : 260;
//   const centerX = 320;
//   const centerY = 320;
//   const startAngle = -160;
//   const endAngle = 160;
//   const angleStep = (endAngle - startAngle) / (steps.length - 1);

//   // Auto-play step rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % steps.length);
//     }, 4000); // 4 seconds per step
//     return () => clearInterval(interval);
//   }, [steps.length, setActiveStep]);

//   return (
//     <div className="relative flex items-center justify-center min-h-[750px]">
//       {/* Description Box */}
//       <motion.div
//         key={activeStep}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.6 }}
//         className="absolute mt-5 top-20 left-1/2 transform -translate-x-1/2 z-30 w-70 text-center"
//       >
//         <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-lg h-40">
//           <div className="text-blue-900 font-semibold text-base mb-2">
//             Step {activeStep + 1}: {steps[activeStep]?.title}
//           </div>
//           <div className="text-blue-700 text-sm leading-relaxed">
//             {steps[activeStep]?.description}
//           </div>
//         </div>
//       </motion.div>

//       {/* Center Image */}
//       <motion.div
//         key={steps[activeStep]?.title}
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-20 w-80 h-64 rounded-2xl overflow-hidden bg-white shadow-2xs mt-16"
//       >
//         <Image
//           src={serviceImage2}
//           alt="Web App Mockup"
//           fill
//           className="object-cover rounded-2xl"
//           priority
//         />
//       </motion.div>

//       {/* Steps in Arc */}
//       <svg
//         viewBox="0 0 640 640"
//         className="absolute inset-0 w-full h-full z-10"
//         aria-label="Web development process steps"
//       >
//         {steps.map((step, index) => {
//           const angle = startAngle + angleStep * index;
//           const rad = (angle * Math.PI) / 180;
//           const x = centerX + radius * Math.cos(rad);
//           const y = centerY + radius * Math.sin(rad);

//           return (
//             <motion.g
//               key={index}
//               initial={{ opacity: 0, scale: 0.7 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.15 }}
//               className="cursor-pointer"
//               onClick={() => setActiveStep(index)}
//             >
//               <line
//                 x1={centerX}
//                 y1={centerY}
//                 x2={x}
//                 y2={y}
//                 stroke="#93c5fd"
//                 strokeWidth="1"
//                 className="opacity-60"
//               />
//               <motion.circle
//                 cx={x}
//                 cy={y}
//                 r="16"
//                 fill={activeStep === index ? "#2563eb" : "#3b82f6"}
//                 stroke="white"
//                 strokeWidth="3"
//                 whileHover={{ scale: 1.2 }}
//                 transition={{ duration: 0.2 }}
//               />
//               <text
//                 x={x}
//                 y={y + 5}
//                 textAnchor="middle"
//                 className="fill-white font-bold text-xs pointer-events-none"
//               >
//                 {index + 1}
//               </text>
//               <motion.foreignObject
//                 x={x - 80}
//                 y={y - (y > centerY ? 60 : 50)}
//                 width="160"
//                 height="40"
//                 className="text-center"
//               >
//                 <div
//                   className={`text-blue-500 font-semibold text-sm leading-tight ${activeStep === index ? "font-bold underline" : ""
//                     }`}
//                 >
//                   {step.title}
//                 </div>
//               </motion.foreignObject>
//             </motion.g>
//           );
//         })}
//       </svg>
//     </div>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import {
//   FiTarget,
//   FiUsers,
//   FiLayers,
//   FiCode,
//   FiCheckCircle,
// } from "react-icons/fi";
// import { FaRocket } from "react-icons/fa";

// const iconMap = {
//   target: <FiTarget />,
//   users: <FiUsers />,
//   layers: <FiLayers />,
//   code: <FiCode />,
//   rocket: <FaRocket />,
//   check: <FiCheckCircle />,
// };


// export default function HowWeWorkHex({ title, steps = [] }) {
//   return (
//     <section className="relative py-20 bg-[#1d2c53ec] text-white overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"
//           alt="Background"
//           className="w-full h-full object-cover opacity-20"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-[#3d5eab] to-[#446dab] mix-blend-multiply"></div>
//       </div>

//       {/* Header */}
//       <div className="relative text-center mb-16 z-10">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
//           How We Work
//         </h2>
//         {title && <p className="text-blue-400 text-lg mb-2">{title}</p>}
//         <p className="text-gray-300 max-w-2xl mx-auto">
//           From idea to execution — every step designed to deliver excellence.
//         </p>
//       </div>

//       {/* Hexagon Steps */}
//       {steps.length === 0 ? (
//         <p className="text-center text-gray-400">Loading process...</p>
//       ) : (
//         <div className="relative flex flex-wrap justify-center gap-10 px-8 z-10">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className="relative group perspective"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.15 }}
//             >
//               <div className="flip-card relative w-48 h-52">
//                 {/* Front Side */}
//                 <div className="flip-card-inner group-hover:rotate-y-180 transition-transform duration-700">
//                   <div className="flip-card-front hexagon bg-gradient-to-br from-blue-600/90 to-blue-900/100 border border-blue-400/30 backdrop-blur-md text-center flex flex-col items-center justify-center p-4 shadow-lg">
//                     <div className="text-3xl text-blue-400 mb-3">
//                       {iconMap[step.icon?.toLowerCase()] || <FiTarget />}
//                     </div>
//                     <h3 className="text-lg font-semibold">{step.title}</h3>
//                   </div>

//                   {/* Back Side */}
//                   <div className="flip-card-back hexagon absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/20 border border-blue-400/30 backdrop-blur-md text-center flex items-center justify-center p-4 shadow-lg rotate-y-180">
//                     <p className="text-sm text-gray-200">
//                       {step.description || step.desc || "No description"}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}

//       {/* Custom Styles */}
//       <style jsx>{`
//         .hexagon {
//           clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
//         }
//         .perspective {
//           perspective: 1000px;
//         }
//         .flip-card-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transform-style: preserve-3d;
//         }
//         .flip-card-front,
//         .flip-card-back {
//           backface-visibility: hidden;
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           border-radius: 12px;
//         }
//         .flip-card-back {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// }













// function DesktopView({ steps, activeStep, setActiveStep }) {
//   const radius = steps.length > 7 ? 320 : 260; // adjust radius based on step count
//   const centerX = 320;
//   const centerY = 320;
//   const startAngle = -160;
//   const endAngle = 160;
//   const angleStep = (endAngle - startAngle) / (steps.length - 1);

//   return (
//     <div className="relative flex items-center justify-center min-h-[700px]">
//       {/* Center Image */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-20 w-80 h-64 rounded-2xl overflow-hidden bg-white shadow-xl"
//       >
//         <Image
//           src="/web-app.png"
//           alt="Web App Mockup"
//           fill
//           className="object-contain"
//           priority
//         />
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg">
//           Step {activeStep + 1}: {steps[activeStep]?.title}
//         </div>
//       </motion.div>

//       {/* Steps in Arc */}
//       <svg
//         viewBox="0 0 640 640"
//         className="absolute inset-0 w-full h-full z-10"
//         aria-label="Web development process steps"
//       >
//         {steps.map((step, index) => {
//           const angle = startAngle + angleStep * index;
//           const rad = (angle * Math.PI) / 180;
//           const x = centerX + radius * Math.cos(rad);
//           const y = centerY + radius * Math.sin(rad);

//           return (
//             <motion.g
//               key={index}
//               initial={{ opacity: 0, scale: 0.7 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.15 }}
//               className="cursor-pointer"
//               onClick={() => setActiveStep(index)}
//             >
//               <line
//                 x1={centerX}
//                 y1={centerY}
//                 x2={x}
//                 y2={y}
//                 stroke="#93c5fd"
//                 strokeWidth="1"
//                 className="opacity-60"
//               />
//               <motion.circle
//                 cx={x}
//                 cy={y}
//                 r="16"
//                 fill={activeStep === index ? "#2563eb" : "#3b82f6"}
//                 stroke="white"
//                 strokeWidth="3"
//                 whileHover={{ scale: 1.2 }}
//                 transition={{ duration: 0.2 }}
//                 className="shadow-sm"
//               />
//               <text
//                 x={x}
//                 y={y + 5}
//                 textAnchor="middle"
//                 className="fill-white font-bold text-xs pointer-events-none"
//               >
//                 {index + 1}
//               </text>
//               <motion.foreignObject
//                 x={x - 80}
//                 y={y - (y > centerY ? 60 : 50)}
//                 width="160"
//                 height="40"
//                 className="text-center"
//               >
//                 <div
//                   className={`text-blue-900 font-semibold text-sm leading-tight ${
//                     activeStep === index ? "font-bold underline" : ""
//                   }`}
//                 >
//                   {step.title}
//                 </div>
//               </motion.foreignObject>
//               {activeStep === index && (
//                 <motion.foreignObject
//                   x={x - 100}
//                   y={y + (y > centerY ? -40 : 30)}
//                   width="200"
//                   height="80"
//                   className="text-center"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.4, delay: 0.1 }}
//                 >
//                   <div className="text-blue-700 text-xs font-medium bg-blue-50 p-2 rounded-lg shadow-sm leading-tight">
//                     {step.description}
//                   </div>
//                 </motion.foreignObject>
//               )}
//             </motion.g>
//           );
//         })}
//       </svg>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Lightbulb, Layers, PenTool, Code, Rocket } from "lucide-react";

// export default function FtflProcess() {
//   const [flippedIndex, setFlippedIndex] = useState(null);

//   const steps = [
//     {
//       icon: "Lightbulb",
//       title: "Research",
//       description:
//         "We analyze your goals, audience, and competitors to create a clear project vision.",
//     },
//     {
//       icon: "PenTool",
//       title: "Design",
//       description:
//         "Our creative team designs stunning, user-friendly experiences tailored to your brand.",
//     },
//     {
//       icon: "Code",
//       title: "Development",
//       description:
//         "We build clean, scalable, and high-performing code to bring your ideas to life.",
//     },
//     {
//       icon: "Layers",
//       title: "Testing",
//       description:
//         "Rigorous QA ensures your product is bug-free and performs flawlessly.",
//     },
//     {
//       icon: "Rocket",
//       title: "Launch",
//       description:
//         "We deploy and optimize for performance, ensuring a successful launch.",
//     },
//   ];

//   const iconMap = {
//     Lightbulb: <Lightbulb size={36} />,
//     PenTool: <PenTool size={36} />,
//     Code: <Code size={36} />,
//     Layers: <Layers size={36} />,
//     Rocket: <Rocket size={36} />,
//   };

//   const handleFlip = (index) => {
//     setFlippedIndex(flippedIndex === index ? null : index);
//   };

//   return (
//     <section className="relative py-20 bg-[#1d2c53ec] text-white overflow-hidden">
//       {/* === Background Image with Overlay === */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"
//           alt="Background"
//           className="w-full h-full object-cover opacity-20"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-[#3d5eab] to-[#446dab] mix-blend-multiply"></div>
//       </div>

//       {/* === Header === */}
//       <div className="relative text-center mb-16 z-10 px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
//         >
//           How We Work
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-blue-300 text-lg max-w-2xl mx-auto"
//         >
//           From idea to execution — every step designed to deliver excellence.
//         </motion.p>
//       </div>

//       {/* === Hexagon Steps === */}
//       <div className="relative flex flex-wrap justify-center gap-8 sm:gap-10 px-4 md:px-8 z-10">
//         {steps.map((step, index) => {
//           const isFlipped = flippedIndex === index;
//           return (
//             <motion.div
//               key={index}
//               className="relative group perspective cursor-pointer"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               viewport={{ once: true }}
//               onClick={() => handleFlip(index)}
//             >
//               <div className="flip-card relative w-40 h-44 sm:w-48 sm:h-52 md:w-56 md:h-60">
//                 <div
//                   className={`flip-card-inner ${
//                     isFlipped ? "flipped" : ""
//                   } transition-transform duration-700`}
//                 >
//                   {/* === Front === */}
//                   <div className="flip-card-front hexagon bg-gradient-to-br from-blue-600/90 to-blue-900/100 border border-blue-400/30 backdrop-blur-md text-center flex flex-col items-center justify-center p-4 shadow-lg">
//                     <div className="text-3xl text-blue-400 mb-3">
//                       {iconMap[step.icon]}
//                     </div>
//                     <h3 className="text-lg font-semibold">{step.title}</h3>
//                   </div>

//                   {/* === Back === */}
//                   <div className="flip-card-back hexagon absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/20 border border-blue-400/30 backdrop-blur-md text-center flex items-center justify-center p-4 shadow-lg">
//                     <p className="text-sm text-gray-200 leading-relaxed">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* === Custom CSS === */}
//       <style jsx>{`
//         .hexagon {
//           clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
//         }
//         .perspective {
//           perspective: 1000px;
//         }
//         .flip-card-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transform-style: preserve-3d;
//         }
//         .flip-card-front,
//         .flip-card-back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           border-radius: 12px;
//           backface-visibility: hidden;
//         }
//         .flip-card-back {
//           transform: rotateY(180deg);
//         }
//         .flipped {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaSearch, FaClipboardList, FaVideo, FaCheckCircle } from "react-icons/fa";

// const steps = [
//   {
//     id: 1,
//     title: "Discovery",
//     icon: <FaSearch size={20} />,
//     description:
//         "To determine the project's direction, we conduct user research, competitive analysis, and interviews to learn about the client's objectives, market, and audience."
//   },
//   {
//     id: 2,
//     title: "Pre-Production",
//     icon: <FaClipboardList size={20} />,
//     description: " In order to ensure a seamless execution, we plan by writing screenplays, making storyboards, choosing actors, and setting up sets, props, and locations.  "
//   },
//   {
//     id: 3,
//     title: "Production",
//     icon: <FaVideo size={20} />,
//     description: "In order to ensure continuity and incorporate visual effects as necessary, we set up cameras, lighting, and sound to record. ",
//   },
//   {
//     id: 4,
//     title: "Post-Production",
//     icon: <FaCheckCircle size={20} />,
//     description: " For the final result, we edit the video, mix the sound, apply color grading, add graphics, and complete the music and effects.",
//   },
// ];

// export default function ProcessSection() {
//   const [openStep, setOpenStep] = useState(1);

//   return (
//     <section
//       className="
//         relative w-full py-28 overflow-hidden
//         bg-fixed bg-cover bg-center
//       "
//       style={{
//         backgroundImage: "url('bgTech.jpg')",
//       }}
//     >
//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-[#021a33]/70 backdrop-blur-[2px]"></div>

//       {/* HEADER */}
//       <motion.div
//         className="text-center mb-16 relative z-10"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
//           Our Video Production Process
//         </h2>

//         <p className="text-lg text-[#dce2ff]">
//           From concept to final delivery, we follow a structured workflow to bring your vision to life.
//         </p>
//       </motion.div>

//       {/* GRID BACKGROUND */}
//       <div
//         className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
//         style={{
//           backgroundImage:
//             "linear-gradient(#ffffff20 1px, transparent 1px), linear-gradient(90deg, #ffffff20 1px, transparent 1px)",
//           backgroundSize: "80px 80px",
//         }}
//       />

//       {/* BLUE GLOW */}
//       <motion.div
//         className="absolute right-[20%] top-[25%] w-[550px] h-[550px] rounded-full blur-[180px] opacity-30 pointer-events-none"
//         style={{ background: "radial-gradient(circle, #4f9cff, transparent 60%)" }}
//         animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">
        
//         {/* LEFT ACCORDION */}
//         <div>
//           {steps.map((step) => (
//             <div key={step.id} className="border-b border-white/20 py-6">
//               <button
//                 onClick={() => setOpenStep(step.id)}
//                 className="w-full flex justify-between items-center text-white hover:text-blue-300 transition-colors"
//               >
//                 <h2 className="text-3xl font-semibold">{step.title}</h2>
//                 <span className="text-3xl">{openStep === step.id ? "−" : "+"}</span>
//               </button>

//               <AnimatePresence>
//                 {openStep === step.id && (
//                   <motion.div
//                     key="content"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.5 }}
//                     className="mt-4"
//                   >
//                     <p className="text-[#dce2ff] text-lg max-w-lg leading-relaxed">
//                       {step.description}
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT — NODES + ZIG ZAG */}
//         <div className="relative h-[550px] hidden lg:block">
//           <svg className="absolute inset-0 w-full h-full pointer-events-none">
//             {steps.map((_, idx) => {
//               if (idx >= openStep - 1 || idx === steps.length - 1) return null;
//               const y1 = idx * 120 + 30;
//               const y2 = (idx + 1) * 120 + 30;
//               const x1 = idx % 2 === 0 ? 60 : 300;
//               const x2 = (idx + 1) % 2 === 0 ? 60 : 300;
//               return (
//                 <motion.line
//                   key={idx}
//                   x1={x1}
//                   y1={y1}
//                   x2={x2}
//                   y2={y2}
//                   stroke="#4f9cff"
//                   strokeWidth={2}
//                   initial={{ pathLength: 0, opacity: 0 }}
//                   animate={{ pathLength: 1, opacity: 1 }}
//                   transition={{ duration: 0.8 }}
//                 />
//               );
//             })}
//           </svg>

//           {/* NODES */}
//           {steps.map((step, index) => {
//             const isActive = openStep === step.id;

//             return (
//               <motion.div
//                 key={step.id}
//                 onClick={() => setOpenStep(step.id)}
//                 className={`
//                   absolute flex items-center gap-4 px-6 py-4 rounded-full cursor-pointer
//                   backdrop-blur-xl transition-all
//                   ${isActive 
//                     ? "bg-gradient-to-r from-blue-400 to-blue-700 border border-blue-500 shadow-[0_0_25px_#4f9cff] text-white"
//                     : "bg-white/10 border border-white/30 text-[#dce2ff]"
//                   }
//                 `}
//                 initial={{ opacity: 0, x: 40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 whileHover={{ scale: 1.05 }}
//                 style={{
//                   top: `${index * 120}px`,
//                   left: index % 2 === 0 ? 0 : "50%",
//                 }}
//               >
//                 <div
//                   className={`
//                   p-3 rounded-full
//                   ${isActive ? "bg-blue-600 text-white" : "bg-white/20 text-white"}
//                 `}
//                 >
//                   {step.icon}
//                 </div>

//                 <span className="text-xl font-medium">{step.title}</span>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


// ==== Process Section ====
import React from "react";
import SoftwreUi from "@/components/Process/SoftwreUi";
import VideoUi from "@/components/Process/VideoUi";
import DesignUi from "@/components/Process/DesignUi";

// Mapping service type to UI component
const processComponents = {
  SoftwareDevelopment: SoftwreUi,
  VideoProduction: VideoUi,
  Designing: DesignUi,
};



export default function ServiceProcess({ serviceData, serviceProcess }) {
  if (!serviceData || !serviceProcess?.steps) return null;

  // Determine which UI component to render
  const UIComponent = processComponents[serviceProcess.ui];

  if (!UIComponent) return null;

  return (
    <section className=" relative">
      <div className=" mx-auto ">
        {/* Heading */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Process
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Step-by-step approach we follow for delivering top-notch solutions.
          </p>
        </div> */}

        {/* Render Service-specific Process UI */}
        <UIComponent steps={serviceProcess.steps} />
      </div>
    </section>
  );
}












