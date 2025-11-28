"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoUi = ({ steps }) => {
  const [openStep, setOpenStep] = useState(1);

  return (
    <section
      className="
        relative w-full py-28 overflow-hidden
        bg-fixed bg-cover bg-center m-0 p-0
      "
      style={{
        backgroundImage: "url('/bgTech.jpg')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#021a33]/70 backdrop-blur-[2px]"></div>

      {/* HEADER */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Our Video Production Process
        </h2>

        <p className="text-lg text-[#dce2ff]">
          From concept to final delivery, we follow a structured workflow to bring your vision to life.
        </p>
      </motion.div>

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff20 1px, transparent 1px), linear-gradient(90deg, #ffffff20 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* BLUE GLOW */}
      <motion.div
        className="absolute right-[20%] top-[25%] w-[550px] h-[550px] rounded-full blur-[180px] opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #4f9cff, transparent 60%)" }}
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === FULL-WIDTH CONTENT GRID === */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 m-0 p-0">

        {/* LEFT ACCORDION */}
        <div className="w-full px-4 lg:px-12">
          {steps.map((step) => (
            <div key={step.id} className="border-b border-white/20 py-6">
              <button
                onClick={() => setOpenStep(step.id)}
                className="w-full flex justify-between items-center text-white hover:text-blue-300 transition-colors"
              >
                <h2 className="text-3xl font-semibold">{step.title}</h2>
                <span className="text-3xl">{openStep === step.id ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {openStep === step.id && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4"
                  >
                    <p className="text-[#dce2ff] text-lg max-w-lg leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RIGHT – NODES + ZIG-ZAG */}
        <div className="relative h-[550px] hidden lg:block w-full">

          {/* Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {steps.map((_, idx) => {
              if (idx >= openStep - 1 || idx === steps.length - 1) return null;

              const y1 = idx * 120 + 30;
              const y2 = (idx + 1) * 120 + 30;
              const x1 = idx % 2 === 0 ? 80 : 350;
              const x2 = (idx + 1) % 2 === 0 ? 80 : 350;

              return (
                <motion.line
                  key={idx}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#4f9cff"
                  strokeWidth={2}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {steps.map((step, index) => {
            const isActive = openStep === step.id;

            return (
              <motion.div
                key={step.id}
                onClick={() => setOpenStep(step.id)}
                className={`
                  absolute flex items-center gap-4 px-6 py-4 rounded-full cursor-pointer
                  backdrop-blur-xl transition-all
                  ${isActive 
                    ? "bg-gradient-to-r from-blue-400 to-blue-700 border border-blue-500 shadow-[0_0_25px_#4f9cff] text-white"
                    : "bg-white/10 border border-white/30 text-[#dce2ff]"
                  }
                `}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  top: `${index * 120}px`,
                  left: index % 2 === 0 ? 0 : "55%",
                }}
              >
                <div
                  className={`
                    p-3 rounded-full
                    ${isActive ? "bg-blue-600 text-white" : "bg-white/20 text-white"}
                  `}
                >
                  {step.icon}
                </div>

                <span className="text-xl font-medium">{step.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoUi;
