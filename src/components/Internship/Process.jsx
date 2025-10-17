"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserGraduate,
  FaBookOpen,
  FaProjectDiagram,
  FaCertificate,
  FaArrowRight,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaStar,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

// Custom Hook for Step Navigation
const useStepNavigation = (stepsLength, isMobile) => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % stepsLength);
  }, [stepsLength]);

  const prevStep = useCallback(() => {
    setActiveStep((prev) => (prev - 1 + stepsLength) % stepsLength);
  }, [stepsLength]);

  const goToStep = useCallback((index) => {
    setActiveStep(index);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (isMobile) return;
    
    const interval = setInterval(nextStep, 5000);
    return () => clearInterval(interval);
  }, [isMobile, nextStep]);

  return { activeStep, setActiveStep, nextStep, prevStep, goToStep };
};

// Loading Skeleton Component
const LoadingSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading Career Path...</p>
    </div>
  </div>
);

// Main Component
const InternshipProcess = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(null);

  const steps = useMemo(() => [
    {
      id: 1,
      icon: <FaUserGraduate className="text-2xl md:text-3xl" />,
      title: "Enrollment",
      description: "Quick registration and immediate platform access with comprehensive onboarding materials to get you started.",
      duration: "1-2 days",
      outcome: "Full platform access & welcome kit",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
      features: ["Instant Access", "Welcome Kit", "Setup Guide"],
      stat: "24h Setup"
    },
    {
      id: 2,
      icon: <FaBookOpen className="text-2xl md:text-3xl" />,
      title: "Learning Phase",
      description: "Hands-on learning with industry tools through structured modules and expert-led sessions.",
      duration: "2-3 weeks",
      outcome: "Technical skills & tool mastery",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-500",
      features: ["Expert Modules", "Live Sessions", "Practice Labs"],
      stat: "95% Success Rate"
    },
    {
      id: 3,
      icon: <FaProjectDiagram className="text-2xl md:text-3xl" />,
      title: "Project Build",
      description: "Real-world project implementation with 1:1 mentorship and portfolio development.",
      duration: "4-6 weeks",
      outcome: "Portfolio-ready projects",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-500 to-indigo-500",
      features: ["Real Projects", "1:1 Mentorship", "Code Reviews"],
      stat: "15+ Projects"
    },
    {
      id: 4,
      icon: <FaCertificate className="text-2xl md:text-3xl" />,
      title: "Career Launch",
      description: "Industry certification and comprehensive career support including interview preparation and job placement.",
      duration: "Lifetime Support",
      outcome: "Job ready with certification",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-500 to-orange-500",
      features: ["Certification", "Interview Prep", "Job Support"],
      stat: "87% Placement"
    },
  ], []);

  const { activeStep, nextStep, prevStep, goToStep } = useStepNavigation(steps.length, isMobile);

  // Animation variants
  const stepVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) { // minimum swipe distance
      if (diff > 0) {
        nextStep();
      } else {
        prevStep();
      }
    }
    
    setTouchStart(null);
  };

  // Memoized step positions for orbital system
  const stepPositions = useMemo(() => {
    return steps.map((_, index) => {
      const angle = (index * 360) / steps.length;
      const radius = 140;
      return {
        x: radius * Math.cos((angle * Math.PI) / 180),
        y: radius * Math.sin((angle * Math.PI) / 180),
        angle
      };
    });
  }, [steps.length]);

  // Stats data
  const stats = useMemo(() => [
    { icon: FaUsers, value: "2,000+", label: "Students Trained" },
    { icon: FaCertificate, value: "95%", label: "Completion Rate" },
    { icon: FaRocket, value: "87%", label: "Placement Rate" },
    { icon: FaLightbulb, value: "4.9/5", label: "Student Rating" }
  ], []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <section 
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden"
      aria-label="Internship Process Steps"
    >
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": "Career Acceleration Program",
            "description": "Transform from beginner to industry-ready professional through structured 4-step pathway",
            "numberOfCredits": "4",
            "occupationalCategory": "Technology",
            "timeToComplete": "P3M",
            "hasCourse": steps.map(step => ({
              "@type": "Course",
              "name": step.title,
              "description": step.description,
              "timeRequired": step.duration
            }))
          })
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 md:w-64 md:h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20 px-2"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8"
          >
            <FaRocket className="text-cyan-400 text-sm md:text-lg" />
            <span className="text-cyan-300 font-semibold text-sm md:text-base">Career Acceleration Program</span>
          </motion.div>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
            Start Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-4xl md:text-6xl lg:text-7xl">
              Tech Career
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Transform from beginner to industry-ready professional through our structured 
            <span className="text-cyan-300"> 4-step proven pathway </span>
            with hands-on projects and career support
          </p>
        </motion.div>

        {/* Mobile Stepper */}
        <div className="lg:hidden">
          {/* Step Progress Bar */}
          <div className="flex justify-center mb-8 px-4">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  aria-label={`View ${steps[index].title} step`}
                  aria-current={activeStep === index ? "step" : undefined}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeStep === index 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Step Cards */}
          <div 
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 mx-4 relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 ${steps[activeStep].color} rounded-full blur-3xl opacity-20`}></div>
                
                {/* Step Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${steps[activeStep].bgColor} flex items-center justify-center text-white shadow-lg`}>
                    {steps[activeStep].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{steps[activeStep].title}</h3>
                    <div className="flex items-center gap-2 text-cyan-300 text-sm">
                      <span>⏱</span>
                      <span className="font-semibold">{steps[activeStep].duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {steps[activeStep].description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {steps[activeStep].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * idx }}
                      className="text-center p-3 bg-white/5 rounded-xl border border-white/5"
                    >
                      <div className="text-cyan-300 text-sm font-semibold">{feature}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Stat Card */}
                <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-base">Achievement</div>
                      <div className="text-cyan-200 text-sm">{steps[activeStep].outcome}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{steps[activeStep].stat}</div>
                      <div className="text-green-400 text-xs flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        Guaranteed
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Navigation Buttons */}
            <div className="flex justify-between items-center mt-6 px-4">
              <button
                onClick={prevStep}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Previous step"
              >
                <FaChevronLeft className="text-sm" />
                <span className="text-sm">Previous</span>
              </button>
              
              <div className="text-white text-sm font-medium">
                {activeStep + 1} / {steps.length}
              </div>

              <button
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 bg-cyan-500 rounded-2xl text-white hover:bg-cyan-600 transition-all duration-300"
                aria-label="Next step"
              >
                <span className="text-sm">Next</span>
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-5 items-center">
          {/* Left Column - Interactive Steps */}
          <div className="relative">
            {/* Central Orbital System */}
            <div className="relative h-85 w-85 mx-auto ms-40">
              {/* Central Circle */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-md flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-white font-bold text-sm">Your Journey</div>
                  <div className="text-cyan-300 text-xs">Starts Here</div>
                </div>
              </motion.div>

              {/* Orbiting Steps */}
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`absolute w-20 h-20 rounded-2xl ${step.bgColor} flex items-center justify-center text-white cursor-pointer transform -translate-x-1/2 -translate-y-1/2 shadow-2xl ${
                    activeStep === index ? 'scale-110 ring-4 ring-white/30' : 'scale-90'
                  } transition-all duration-500`}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    x: stepPositions[index].x,
                    y: stepPositions[index].y,
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.2 
                  }}
                  whileHover={{ scale: 1.15 }}
                  onClick={() => goToStep(index)}
                  aria-label={`View ${step.title} step`}
                  aria-current={activeStep === index ? "step" : undefined}
                >
                  <div className="text-center">
                    {step.icon}
                    <div className="text-xs font-semibold mt-1">{step.title.split(' ')[0]}</div>
                  </div>
                  
                  <div 
                    className="absolute w-24 h-0.5 bg-white/30 origin-left rotate-90"
                    style={{ 
                      transform: `rotate(${stepPositions[index].angle}deg)`,
                      width: `140px`,
                      left: '50%',
                      top: '50%'
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  aria-label={`Go to step ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Step Details */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 ${steps[activeStep].color} rounded-full blur-3xl opacity-20`}></div>
                
                {/* Step Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${steps[activeStep].bgColor} flex items-center justify-center text-white shadow-lg`}>
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{steps[activeStep].title}</h3>
                    <div className="flex items-center gap-2 text-cyan-300">
                      <span>⏱</span>
                      <span className="font-semibold">{steps[activeStep].duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {steps[activeStep].description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {steps[activeStep].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * idx }}
                      className="text-center p-3 bg-white/5 rounded-xl border border-white/5"
                    >
                      <div className="text-cyan-300 text-sm font-semibold">{feature}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Stat Card */}
                <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-lg">Achievement</div>
                      <div className="text-cyan-200">{steps[activeStep].outcome}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">{steps[activeStep].stat}</div>
                      <div className="text-green-400 text-sm flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        Guaranteed
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <stat.icon className="text-2xl md:text-3xl text-cyan-400 mx-auto mb-3 md:mb-4" />
              <div className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
              <div className="text-gray-400 text-xs md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-6 md:p-12 border border-white/10 backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 relative z-10">
              Ready to Start Your Career?
            </h3>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 relative z-10 max-w-2xl mx-auto px-4">
              Join our next cohort and transform your future with hands-on experience and industry connections
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center relative z-10 px-4">
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-6 py-4 md:px-8 md:py-4 rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-3 text-base md:text-lg"
                aria-label="Start your journey"
              >
                <FaRocket />
                Start Your Journey
                <FaArrowRight />
              </motion.button> */}
              
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white font-bold px-6 py-4 md:px-8 md:py-4 rounded-2xl border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all duration-300 text-base md:text-lg"
                aria-label="View success stories"
              >
                View Success Stories
              </motion.button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipProcess;