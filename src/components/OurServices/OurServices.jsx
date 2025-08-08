"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaChalkboardTeacher,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./OurServices.module.css"; 

export default function OurServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "Custom websites & web apps built with modern, scalable technologies.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description:
        "Native & cross-platform mobile apps with smooth performance.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaPencilRuler />,
      title: "UI/UX Design",
      description:
        "Modern, user-friendly, and aesthetic design solutions.",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Software Consulting",
      description:
        "Get expert guidance to optimize & scale your IT systems.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-50" id="services">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-blue-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We deliver innovative, high-quality, and scalable IT solutions tailored to your business needs.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group rounded-2xl overflow-hidden p-8 border border-white/20 bg-white/30 backdrop-blur-lg shadow-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              data-aos="fade-up"
              whileHover={{ rotateX: 5, rotateY: -5 }}
            >
              {/* Icon Floating Animation */}
              <motion.div
                className={`mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-4xl shadow-lg`}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Glow Border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:${styles.borderGlow}`}></div>

              {/* Shine Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 group-hover:${styles.shine}`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="/services"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
          >
            View All Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
