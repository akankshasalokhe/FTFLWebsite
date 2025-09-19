"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function OurProcess() {
  const steps = [
    "Ideation",
    "Analytics & Market Research",
    "App Platform Selection",
    "UI/UX Design",
    "App Development",
    "Testing",
    "Deployment to App Store",
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-blue-900"
        >
          Our Web Development Process
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-blue-700 mb-10 max-w-3xl mx-auto"
        >
          We follow a structured 7-step process to deliver exceptional web
          applications tailored to your needs
        </motion.p>

        {isMobile ? (
          <MobileView
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        ) : (
          <DesktopView
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        )}
      </div>
    </section>
  );
}

function MobileView({ steps, activeStep, setActiveStep }) {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-6"
      >
        <div className="w-56 h-80 rounded-2xl flex items-center justify-center overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              src="/web-app.png"
              alt="Web App Mockup"
              fill
              className="object-contain rounded-2xl"
              priority
            />
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
              <h3 className="font-semibold text-blue-900">{step}</h3>
              <AnimatePresence>
                {activeStep === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm text-blue-700 mt-2"
                  >
                    {getStepDescription(index)}
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

function DesktopView({ steps, activeStep, setActiveStep }) {
  const radius = 200;
  const centerX = 280;
  const centerY = 280;
  const startAngle = -160;
  const endAngle = 160;

  const angleStep = (endAngle - startAngle) / (steps.length - 1);

  return (
    <div className="relative flex items-center justify-center min-h-[600px]">
      {/* Center Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 w-64 h-52 rounded-2xl overflow-hidden"
      >
        <Image
          src="/web-app.png"
          alt="Web App Mockup"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg"
          >
            Step {activeStep + 1}
          </motion.div>
        </div>
      </motion.div>

      {/* Steps in Arc */}
      <svg
        viewBox="0 0 560 560"
        className="absolute inset-0 w-full h-full z-10"
        aria-label="Web development process steps"
      >
        <motion.path
          d={`M ${
            centerX + radius * Math.cos((startAngle * Math.PI) / 180)
          } ${centerY + radius * Math.sin((startAngle * Math.PI) / 180)} 
              A ${radius} ${radius} 0 0 1 ${
            centerX + radius * Math.cos((endAngle * Math.PI) / 180)
          } ${centerY + radius * Math.sin((endAngle * Math.PI) / 180)}`}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="6, 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />

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
              {/* Step line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="#93c5fd"
                strokeWidth="1"
                className="opacity-60"
              />

              {/* Step circle */}
              <motion.circle
                cx={x}
                cy={y}
                r="14"
                fill={activeStep === index ? "#2563eb" : "#3b82f6"}
                stroke="white"
                strokeWidth="3"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                className="shadow-sm"
              />

              {/* Number */}
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                className="fill-white font-bold text-xs pointer-events-none"
              >
                {index + 1}
              </text>

              {/* Label */}
              <motion.foreignObject
                x={x - 80}
                y={y - (activeStep === index ? 55 : 40)}
                width="160"
                height="40"
                className="text-center"
              >
                <div className="text-blue-900 font-semibold text-sm leading-tight">
                  {step}
                </div>
              </motion.foreignObject>

              {/* Description */}
              {activeStep === index && (
                <motion.foreignObject
                  x={x - 100}
                  y={y - 15}
                  width="200"
                  height="60"
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="text-blue-700 text-xs font-medium leading-tight">
                    {getStepDescription(index)}
                  </div>
                </motion.foreignObject>
              )}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

// Step Descriptions
function getStepDescription(stepIndex) {
  const descriptions = [
    "Brainstorming ideas and defining project goals",
    "Analyzing market trends and user needs",
    "Choosing the right technology stack",
    "Creating intuitive and engaging user interfaces",
    "Building robust and scalable web applications",
    "Ensuring quality through rigorous testing",
    "Launching your application to the world",
  ];
  return descriptions[stepIndex];
}