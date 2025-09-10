"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBookOpen,
  FaProjectDiagram,
  FaCertificate,
  FaArrowRight,
  FaCheckCircle,
  FaRegClock,
  FaRocket,
} from "react-icons/fa";

const InternshipProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("internship-process");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const steps = [
    {
      id: 1,
      icon: <FaUserGraduate className="text-blue-400 text-2xl" />,
      title: "Enroll",
      description:
        "Register for your preferred internship program and secure your spot.",
      duration: "1-2 days",
      outcome: "You'll get onboarding material & access to student portal.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      icon: <FaBookOpen className="text-green-400 text-2xl" />,
      title: "Learn",
      description:
        "Attend training sessions and gain in-depth knowledge of industry tools.",
      duration: "2-3 weeks",
      outcome: "Hands-on practice with tools like GitHub, React, Node.js.",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      icon: <FaProjectDiagram className="text-purple-400 text-2xl" />,
      title: "Implement",
      description:
        "Apply your skills on live projects and solve real-world problems.",
      duration: "4-6 weeks",
      outcome: "You'll complete capstone projects & get mentor feedback.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 4,
      icon: <FaCertificate className="text-yellow-400 text-2xl" />,
      title: "Get Certified",
      description:
        "Receive your internship certificate and placement opportunities.",
      duration: "Ongoing",
      outcome: "Official certificate & career support from our team.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section
      id="internship-process"
      className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 px-6 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-700 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-700 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-cyan-600 rounded-full opacity-10 blur-2xl animate-pulse animation-delay-3000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Career Success</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Follow our structured pathway from learning to professional placement
          </p>
        </motion.div>

        {/* Progress indicator for mobile */}
        <div className="md:hidden flex justify-center mb-8">
          <div className="flex space-x-2 bg-white/10 backdrop-blur-md rounded-full p-2">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeStep === step.id
                    ? "bg-blue-400 scale-125"
                    : "bg-white/30"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated connecting line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-cyan-500 transform md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-cyan-400 to-blue-600"
              initial={{ scaleY: 0 }}
              animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ originY: 0 }}
            />
          </div>

          <div className="space-y-14 md:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.8, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } ${activeStep !== step.id ? "md:opacity-100 opacity-40" : "opacity-100"} transition-opacity duration-300 md:transition-none`}
              >
                {/* Number Badge with Glow */}
                <div className={`absolute left-2 md:left-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-white font-bold shadow-lg transform md:-translate-x-1/2 z-10`}>
                  {step.id}
                </div>

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="flex items-start mb-4">
                      <div className="p-3 rounded-xl bg-white/10 mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {step.title}
                        </h3>
                        <span className="text-blue-300 text-sm flex items-center mt-1">
                          <FaRegClock className="mr-1" /> {step.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-blue-100">{step.description}</p>
                    <div className="flex items-start mt-4">
                      <div className="text-blue-300 mr-2 mt-1">✨</div>
                      <p className="text-blue-200 text-sm italic">
                        {step.outcome}
                      </p>
                    </div>

                    {/* Checkmark */}
                    {index < steps.length - 1 && (
                      <div className="mt-4 flex items-center text-blue-300 text-sm">
                        <FaCheckCircle className="mr-2 text-green-400" />
                        Complete this step to continue
                      </div>
                    )}
                    
                    {index === steps.length - 1 && (
                      <div className="mt-4 flex items-center text-blue-300 text-sm">
                        <FaRocket className="mr-2 text-yellow-400" />
                        Ready for career launch!
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 p-8 rounded-2xl border border-white/20 backdrop-blur-md shadow-xl relative overflow-hidden">
            {/* Animated background elements for CTA */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl animate-pulse animation-delay-2000"></div>
            
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-200 mb-6 relative z-10">
              Join hundreds of students who have launched their careers through our program
            </p>

            <motion.a
              href="#enroll"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group relative z-10"
            >
              Begin Your Application
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default InternshipProcess;