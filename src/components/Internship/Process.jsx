"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBookOpen,
  FaProjectDiagram,
  FaCertificate,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const InternshipProcess = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserGraduate className="text-blue-600 text-2xl" />,
      title: "Enroll",
      description:
        "Register for your preferred internship program and secure your spot.",
      duration: "1-2 days",
      outcome: "You’ll get onboarding material & access to student portal.",
    },
    {
      id: 2,
      icon: <FaBookOpen className="text-blue-600 text-2xl" />,
      title: "Learn",
      description:
        "Attend training sessions and gain in-depth knowledge of industry tools.",
      duration: "2-3 weeks",
      outcome: "Hands-on practice with tools like GitHub, React, Node.js.",
    },
    {
      id: 3,
      icon: <FaProjectDiagram className="text-blue-600 text-2xl" />,
      title: "Implement",
      description:
        "Apply your skills on live projects and solve real-world problems.",
      duration: "4-6 weeks",
      outcome: "You’ll complete capstone projects & get mentor feedback.",
    },
    {
      id: 4,
      icon: <FaCertificate className="text-blue-600 text-2xl" />,
      title: "Get Certified",
      description:
        "Receive your internship certificate and placement opportunities.",
      duration: "Ongoing",
      outcome: "Official certificate & career support from our team.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 to-blue-900 px-6 overflow-hidden">
      {/* Floating glowing circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-700 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-700 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-2000"></div>

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
            Your Journey to <span className="text-blue-400">Career Success</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Follow our structured pathway from learning to professional placement
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line with pulse animation */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-600 animate-pulse transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-14 md:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.8, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex flex-col md:flex-row items-start"
              >
                {/* Number Badge with Glow */}
                <div className="absolute left-2 md:left-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold shadow-lg transform md:-translate-x-1/2 z-10 animate-bounce">
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
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300 group overflow-hidden">
                    {/* Animated Gradient Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 group-hover:animate-pulse"></div>

                    {/* Content */}
                    <div className="flex items-start mb-4">
                      <div className="p-3 rounded-xl bg-white/10 mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {step.title}
                        </h3>
                        <span className="text-blue-300 text-sm block mt-1">
                          ⏳ {step.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-blue-100">{step.description}</p>
                    <p className="text-blue-200 text-sm mt-3 italic">
                      ✨ {step.outcome}
                    </p>

                    {/* Checkmark */}
                    {index < steps.length - 1 && (
                      <div className="mt-4 flex items-center text-blue-300 text-sm">
                        <FaCheckCircle className="mr-2" />
                        Complete this step to continue
                      </div>
                    )}
                  </div>
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
          <div className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 p-8 rounded-2xl border border-white/20 backdrop-blur-md shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-200 mb-6">
              Join hundreds of students who have launched their careers through our program
            </p>

            <motion.a
              href="#enroll"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group"
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
      `}</style>
    </section>
  );
};

export default InternshipProcess;
