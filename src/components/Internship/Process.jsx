"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBookOpen,
  FaProjectDiagram,
  FaCertificate,
  FaArrowRight,
  FaRegClock,
  FaPause,
  FaPlay,
  FaCheck
} from "react-icons/fa";

const InternshipProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  const steps = [
    {
      id: 1,
      icon: <FaUserGraduate className="text-xl" />,
      title: "Enroll",
      description: "Register for your preferred internship program and get access to our learning platform.",
      duration: "1-2 days",
      outcome: "Onboarding material & portal access",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      icon: <FaBookOpen className="text-xl" />,
      title: "Learn",
      description: "Gain in-depth knowledge of industry tools through structured modules and expert guidance.",
      duration: "2-3 weeks",
      outcome: "Hands-on practice with tools & technologies",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      id: 3,
      icon: <FaProjectDiagram className="text-xl" />,
      title: "Implement",
      description: "Apply your skills on real-world projects with mentorship from industry professionals.",
      duration: "4-6 weeks",
      outcome: "Complete capstone projects for your portfolio",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-500 to-indigo-500",
    },
    {
      id: 4,
      icon: <FaCertificate className="text-xl" />,
      title: "Get Certified",
      description: "Receive industry-recognized certificate and personalized placement assistance.",
      duration: "Ongoing",
      outcome: "Official certificate & career support",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-500 to-orange-500",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  // Scroll to active step
  useEffect(() => {
    if (containerRef.current) {
      const activeElement = containerRef.current.children[activeStep];
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  }, [activeStep]);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Career Journey</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            A streamlined pathway from learning to professional success with industry-aligned training
          </p>
        </motion.div>

        {/* Auto-play controls */}
        {/* <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center text-blue-200 bg-white/10 px-5 py-3 rounded-full hover:bg-white/20 transition-colors"
          >
            {isPaused ? (
              <>
                <FaPlay className="mr-2" /> Play Animation
              </>
            ) : (
              <>
                <FaPause className="mr-2" /> Pause Animation
              </>
            )}
          </button>
        </div> */}

        {/* Main Process Container for Desktop */}
        <div className="hidden lg:block">
          {/* Progress Line */}
          <div className="relative h-2 bg-white/10 rounded-full mb-16 mx-16">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Progress Indicators */}
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center -ml-4 ${
                  index <= activeStep ? step.bgColor + " text-white shadow-lg" : "bg-slate-700 text-slate-300"
                }`}
                style={{ left: `${(index / (steps.length - 1)) * 100}%` }}
              >
                {index < activeStep ? <FaCheck className="text-sm" /> : step.icon}
              </div>
            ))}
          </div>

          {/* Steps Navigation */}
          <div className="flex justify-between mb-12 px-4" ref={containerRef}>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`w-56 text-center cursor-pointer transition-all duration-300 ${
                  activeStep === index ? "scale-110" : "scale-100 opacity-70"
                }`}
                onClick={() => {
                  setActiveStep(index);
                  setIsPaused(true);
                }}
              >
                <h3 className={`text-lg font-semibold mb-2 ${
                  activeStep === index ? "text-white" : "text-blue-300"
                }`}>
                  {step.title}
                </h3>
                <p className="text-sm text-blue-200">{step.duration}</p>
              </motion.div>
            ))}
          </div>

          {/* Step Content */}
          <div className="relative">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto"
            >
              <div className="flex items-start">
                <div className={`w-20 h-20 flex items-center justify-center ${steps[activeStep].bgColor} text-white rounded-xl mr-6 flex-shrink-0`}>
                  {steps[activeStep].icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold text-white mr-4">
                      {steps[activeStep].title}
                    </h3>
                    <span className="text-blue-300 text-sm flex items-center bg-white/10 px-3 py-1 rounded-full">
                      <FaRegClock className="mr-1" /> {steps[activeStep].duration}
                    </span>
                  </div>
                  
                  <p className="text-blue-100 text-lg mb-6">
                    {steps[activeStep].description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-4 rounded-lg border border-white/10">
                    <div className="flex items-start">
                      <div className="text-blue-300 mr-3 mt-0.5 text-xl">✨</div>
                      <p className="text-blue-200">
                        <span className="font-semibold text-white">Outcome: </span>
                        {steps[activeStep].outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white disabled:opacity-30"
              onClick={() => {
                setActiveStep(activeStep > 0 ? activeStep - 1 : steps.length - 1);
                setIsPaused(true);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white disabled:opacity-30"
              onClick={() => {
                setActiveStep(activeStep < steps.length - 1 ? activeStep + 1 : 0);
                setIsPaused(true);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Vertical Timeline for Mobile */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              {/* Timeline line and dot */}
              <div className="flex flex-col items-center mr-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.bgColor} text-white z-10`}>
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-full bg-white/10 mt-2"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-5">
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <span className="text-blue-300 text-sm flex items-center mb-3">
                  <FaRegClock className="mr-1" /> {step.duration}
                </span>
                
                <p className="text-blue-100 text-sm mb-4">
                  {step.description}
                </p>
                
                <div className="flex items-start bg-white/5 p-3 rounded-lg">
                  <div className="text-blue-300 mr-2 mt-0.5 text-lg">✨</div>
                  <p className="text-blue-200 text-sm">
                    {step.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 p-8 rounded-2xl border border-white/20 backdrop-blur-md relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-blue-200 text-lg mb-6 relative z-10">
              Join hundreds of students who have launched successful careers through our program
            </p>

            <motion.a
              href="#enroll"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative z-10"
            >
              Start Your Application
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipProcess;