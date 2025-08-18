"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import axios from "axios";

const MissionSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const controls = useAnimation();

  const [content, setContent] = useState([]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    // 🔹 Backend se data fetch
    axios.get("https://landing-page-yclw.vercel.app/api/about") // 👉 apna backend endpoint yaha daalo
      .then((res) => {
        if (res.data.success) {
          const apiData = res.data.data;

          // 🔹 Mapping backend data to frontend structure
          const mappedData = apiData.map((item) => {
            let color = "from-blue-500 to-blue-600";
            let reverse = false;

            if (item.typeData === "vision") {
              color = "from-purple-500 to-purple-600";
              reverse = true;
            }
            if (item.typeData === "corevalues") {
              color = "from-emerald-500 to-emerald-600";
            }

            return {
              title: item.title,
              description: item.description,
              image: item.mainImage,
              color,
              reverse,
              typeData: item.typeData
            };
          });

          setContent(mappedData);
        }
      })
      .catch((err) => {
        console.log("Error fetching mission/vision/core values:", err);
        console.error("Error fetching mission/vision/core values:", err);
      });
  }, []);

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">Guiding Principles</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The foundation of everything we do at our company
          </p>
        </motion.div>

        {/* Zig-Zag Content */}
        <motion.div
          className="space-y-24 sm:space-y-32"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {content.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-12`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative">
                <motion.div 
                  className="relative rounded-xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto aspect-video object-cover rounded-xl transform transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-20 rounded-xl`}></div>
                </motion.div>
                <div className={`hidden sm:block absolute -z-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 ${item.reverse ? "-left-8 -bottom-8" : "-right-8 -bottom-8"}`}></div>
              </div>

              {/* Text Content */}
              <div className="lg:w-1/2">
                <motion.div 
                  className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${item.color} mb-6`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4 }}
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {item.description}
                </p>
                {item.typeData === "corevalues" && (
                  <ul className="grid grid-cols-2 gap-3">
                    {["Innovation", "Integrity", "Collaboration", "Excellence", "Customer Focus"].map((value, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                        whileHover={{ x: 5 }}
                      >
                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {value}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
