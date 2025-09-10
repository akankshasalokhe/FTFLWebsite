"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaAward className="text-white text-3xl" />,
      title: "Certified Programs",
      description: "Gain industry-recognized certificates to enhance your resume.",
    },
    {
      id: 2,
      icon: <FaUsers className="text-white text-3xl" />,
      title: "Expert Mentors",
      description: "Learn from experienced professionals guiding you every step.",
    },
    {
      id: 3,
      icon: <FaLightbulb className="text-white text-3xl" />,
      title: "Practical Learning",
      description: "Hands-on projects and real-world problem solving.",
    },
    {
      id: 4,
      icon: <FaHandshake className="text-white text-3xl" />,
      title: "Career Support",
      description: "Get placement assistance and internship opportunities.",
    },
  ];

  const stats = [
    { value: 95, suffix: "%", label: "Completion Rate" },
    { value: 1000, suffix: "+", label: "Students Enrolled" },
    { value: 50, suffix: "+", label: "Expert Mentors" },
    { value: 85, suffix: "%", label: "Placement Rate" },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "This program completely transformed my career path. The practical approach helped me land my dream job!",
      author: "Alex Johnson",
      role: "Software Developer",
    },
    {
      id: 2,
      quote:
        "The mentorship I received was invaluable. The instructors are truly experts in their fields.",
      author: "Maria Rodriguez",
      role: "Data Scientist",
    },
    {
      id: 3,
      quote:
        "The certification was recognized by all the companies I applied to. Worth every penny!",
      author: "James Wilson",
      role: "UX Designer",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [countUp, setCountUp] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // animate stats count-up
    const anim = stats.map((stat, index) => {
      let start = 0;
      const end = stat.value;
      const step = Math.ceil(end / 50);
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCountUp((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 20);
      return interval;
    });

    return () => anim.forEach((i) => clearInterval(i));
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 overflow-hidden">
      {/* Top Wave Separator */}
      <svg
        className="absolute top-0 left-0 w-full -mt-20"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f4f6"
          fillOpacity="1"
          d="M0,96L80,106.7C160,117,320,139,480,165.3C640,192,800,224,960,234.7C1120,245,1280,235,1360,229.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>

      {/* Animated background particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
            Us
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto"
        >
          Our program is designed to empower you with real skills, mentorship,
          and career opportunities. Here's why hundreds of students trust us.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-gradient-to-r hover:from-blue-300 hover:to-pink-400 transition-all duration-500 shadow-md hover:shadow-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {countUp[index]}
                {stat.suffix}
              </div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
              className="relative bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-md group overflow-hidden"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(to right, #9333EA, #EC4899) border-box",
                border: "2px solid transparent",
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-gradient-to-br from-blue-600 to-pink-500 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mb-12 relative"
        >
          <div className="overflow-hidden rounded-2xl bg-white shadow-md relative">
            <FaQuoteLeft className="text-purple-200 text-4xl absolute top-6 left-6" />
            <motion.div
              className="flex transition-transform duration-500"
              animate={{ x: `-${currentTestimonial * 100}%` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="min-w-full p-8 text-center flex-shrink-0"
                >
                  <p className="text-gray-700 text-lg italic mb-6">"{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{t.author}</p>
                    <p className="text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl transition-all duration-300 ease-out hover:ring-8 hover:ring-purple-300 hover:ring-opacity-50">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-700 to-pink-700 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            <span className="relative flex items-center">
              Start Learning Today{" "}
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          25% {
            transform: translate(30px, -50px) scale(1.05);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.95);
          }
          75% {
            transform: translate(-30px, 30px) scale(1.1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
