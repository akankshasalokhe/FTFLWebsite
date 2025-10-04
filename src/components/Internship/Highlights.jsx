"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaLaptopCode, FaUserTie, FaBuilding, FaArrowRight } from "react-icons/fa";

const InternshipHighlights = () => {
  const highlights = [
    {
      id: 1,
      icon: <FaCertificate className="text-white text-3xl" />,
      title: "Internship Letter",
      description: "Receive an official internship certificate to showcase your achievement.",
    },
    {
      id: 2,
      icon: <FaLaptopCode className="text-white text-3xl" />,
      title: "Hands-on Projects",
      description: "Work on live projects and gain practical skills to boost your career.",
    },
    {
      id: 3,
      icon: <FaUserTie className="text-white text-3xl" />,
      title: "Placement Support",
      description: "Get placement opportunities directly in our company after completion.",
    },
    {
      id: 4,
      icon: <FaBuilding className="text-white text-3xl" />,
      title: "Real Work Experience",
      description: "Build a strong resume with industry-recognized internship experience.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-lavender-50 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Section Heading with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Internship & Career Opportunities
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
        >
          Our program goes beyond just learning. With internship letters,
          hands-on projects, and guaranteed placement opportunities in our
          company, we help you launch your career with confidence.
        </motion.p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 } 
              }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-lavender-300 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-5 rounded-xl bg-gradient-to-br from-blue-400 to-lavender-400 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-500 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <motion.a
            href="#contactform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            Start Your Internship Journey
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default InternshipHighlights;