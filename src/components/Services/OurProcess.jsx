"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function OurProcess({ title, steps = [], serviceImage2 }) {
  const [isMobile, setIsMobile] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-blue-900"
        >
          Our {title} Process
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-blue-700 mb-12 max-w-3xl mx-auto"
        >
         Transforming ideas into engaging digital experiences across all platforms and media.
        </motion.p>

        {isMobile ? (
          <MobileView
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
             serviceImage2={serviceImage2}
          />
        ) : (
          <DesktopView
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
             serviceImage2={serviceImage2}
          />
        )}
      </div>
    </section>
  );
}

// 📱 Mobile View
function MobileView({ steps, activeStep, setActiveStep, serviceImage2 }) {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-6"
      >
        <div className="w-72 h-96 rounded-2xl flex items-center justify-center overflow-hidden bg-white shadow-lg">
          <div className="w-full h-full relative">
            {/* <Image
              src="/web-app.png"
              alt="Web App Mockup"
              fill
              className="object-contain rounded-2xl"
              priority
            /> */}
             <Image
              src={serviceImage2}
              alt="Web App Mockup"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            {/* <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold py-1 px-3 rounded-full shadow-lg">
              Step {activeStep + 1}
            </div> */}
          </div>
        </div>
      </motion.div>

      <div className="space-y-4 px-2">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveStep(index)}
            className={`flex items-start cursor-pointer ${
              activeStep === index ? "scale-[1.02]" : ""
            }`}
          >
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1 transition-all duration-300 ${
                activeStep === index
                  ? "bg-blue-600 shadow-lg scale-110"
                  : "bg-blue-400"
              }`}
            >
              {index + 1}
            </div>
            <div
              className={`border rounded-xl p-4 flex-1 text-left transition-all duration-300 ${
                activeStep === index
                  ? "bg-blue-50 border-blue-300 shadow-md"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3 className="font-semibold text-blue-900">{step.title}</h3>
              <AnimatePresence>
                {activeStep === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm text-blue-700 mt-2"
                  >
                    {step.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// 💻 Desktop View (Dynamic Arc with Auto and Click)
function DesktopView({ steps, activeStep, setActiveStep, serviceImage2 }) {
  const radius = steps.length > 7 ? 320 : 260;
  const centerX = 320;
  const centerY = 320;
  const startAngle = -160;
  const endAngle = 160;
  const angleStep = (endAngle - startAngle) / (steps.length - 1);

  // Auto-play step rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000); // 4 seconds per step
    return () => clearInterval(interval);
  }, [steps.length, setActiveStep]);

  return (
    <div className="relative flex items-center justify-center min-h-[750px]">
      {/* Description Box */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute mt-5 top-20 left-1/2 transform -translate-x-1/2 z-30 w-70 text-center"
      >
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-lg h-40">
          <div className="text-blue-900 font-semibold text-base mb-2">
            Step {activeStep + 1}: {steps[activeStep]?.title}
          </div>
          <div className="text-blue-700 text-sm leading-relaxed">
            {steps[activeStep]?.description}
          </div>
        </div>
      </motion.div>

      {/* Center Image */}
      <motion.div
        key={steps[activeStep]?.title}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 w-80 h-64 rounded-2xl overflow-hidden bg-white shadow-xl mt-16"
      >
        <Image
          src={serviceImage2}
          alt="Web App Mockup"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </motion.div>

      {/* Steps in Arc */}
      <svg
        viewBox="0 0 640 640"
        className="absolute inset-0 w-full h-full z-10"
        aria-label="Web development process steps"
      >
        {steps.map((step, index) => {
          const angle = startAngle + angleStep * index;
          const rad = (angle * Math.PI) / 180;
          const x = centerX + radius * Math.cos(rad);
          const y = centerY + radius * Math.sin(rad);

          return (
            <motion.g
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="cursor-pointer"
              onClick={() => setActiveStep(index)}
            >
              <line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="#93c5fd"
                strokeWidth="1"
                className="opacity-60"
              />
              <motion.circle
                cx={x}
                cy={y}
                r="16"
                fill={activeStep === index ? "#2563eb" : "#3b82f6"}
                stroke="white"
                strokeWidth="3"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                className="fill-white font-bold text-xs pointer-events-none"
              >
                {index + 1}
              </text>
              <motion.foreignObject
                x={x - 80}
                y={y - (y > centerY ? 60 : 50)}
                width="160"
                height="40"
                className="text-center"
              >
                <div
                  className={`text-blue-500 font-semibold text-sm leading-tight ${
                    activeStep === index ? "font-bold underline" : ""
                  }`}
                >
                  {step.title}
                </div>
              </motion.foreignObject>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}




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





