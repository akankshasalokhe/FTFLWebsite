"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function DesignUi({ steps }) {
  const [activeStep, setActiveStep] = useState(0);
  const refs = useRef([]);

  const designSteps = steps;

  // ⭐ Smooth Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      const offsetTrigger = window.innerHeight * 0.35;

      let current = 0;

      refs.current.forEach((ref, i) => {
        if (!ref) return;
        const top = ref.getBoundingClientRect().top;
        if (top - offsetTrigger < 0) current = i;
      });

      setActiveStep(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 bg-[#f3f6ff]">

      {/* TOP TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Our <span className="text-blue-600">Design Process</span>
        </h2>

        <p className="text-gray-600 text-lg md:text-xl mt-3 max-w-2xl mx-auto leading-relaxed">
          A structured & thoughtful approach to transform ideas into visually stunning experiences.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 ">

        {/* LEFT SIDEBAR — HIDE ON MOBILE */}
        <div className="relative hidden md:block">
          <div className="sticky top-24 space-y-6">
            {designSteps.map((step, index) => (
              <motion.div
                key={index}
                onClick={() =>
                  refs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                animate={{
                  scale: activeStep === index ? 1.15 : 1,
                  opacity: activeStep === index ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
                className={`flex items-center gap-4 p-2 rounded-xl cursor-pointer border 
                  ${activeStep === index
                    ? "bg-white shadow-lg border-blue-400"
                    : "border-gray-200 bg-[#f7faff]"
                  }
                `}
              >
                <div className="w-14 h-14 text-3xl flex items-center justify-center bg-blue-100 rounded-full">
                  {step.icon}
                </div>

                <span className={`text-lg font-semibold ${
                  activeStep === index ? "text-blue-600" : "text-gray-700"
                }`}>
                  {step.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — SCROLL SECTIONS */}
        <div className="md:col-span-2 space-y-12">

          {designSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              className="p-7 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              {/* Mobile icon */}
              <div className="md:hidden mb-4 flex items-center gap-3">
                <div className="w-12 h-12 text-2xl flex items-center justify-center bg-blue-100 rounded-full">
                  {step.icon}
                </div>
                <h2 className="text-2xl font-bold text-blue-600">
                  {step.title}
                </h2>
              </div>

              {/* Desktop title */}
              <h2 className="hidden md:block text-2xl font-bold  text-gray-900 mb-3 tracking-tight">
                {step.title}
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
