"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get(
          "https://landing-page-yclw.vercel.app/api/technology"
        );
        setTechnologies(response.data.data);
      } catch (err) {
        console.error("Error fetching technologies:", err);
        setError("⚠️ Failed to load technologies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Active category
  const currentCategory = technologies.find(
    (cat) => cat.fieldName === activeTab
  );

  const availableCategories = technologies.map((cat) => cat.fieldName);

  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.nextSibling.style.display = "flex";
  };

  return (
    <section
      ref={ref}
      id="tech-stack"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 0.3, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 0.25, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="absolute bottom-10 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
              Technology Stack
            </span>
          </h2>
          <p className="mt-3 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technologies powering our digital solutions
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {availableCategories.map((tab, i) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`${tab.toLowerCase()}-tabpanel`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className={`px-5 py-2.5 text-sm md:text-base font-medium rounded-xl shadow-sm transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg"
                  : "bg-white border border-blue-200 text-blue-700 hover:bg-blue-50"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* States */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-red-500 py-10"
          >
            {error}
          </motion.div>
        )}

        {isLoading && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5"
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-5 rounded-xl bg-white border border-blue-100 animate-pulse"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-100 mb-4"></div>
                <div className="h-3 w-16 bg-blue-100 rounded"></div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tech Grid */}
        <AnimatePresence mode="wait">
          {!isLoading && !error && currentCategory && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5"
              role="tabpanel"
              id={`${activeTab.toLowerCase()}-tabpanel`}
              aria-labelledby={`${activeTab.toLowerCase()}-tab`}
            >
              {currentCategory?.technologyName?.map((tech, index) => (
                <motion.div
                  key={tech._id || index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    boxShadow:
                      "0 15px 35px -5px rgba(37, 99, 235, 0.25), 0 8px 15px -5px rgba(0,0,0,0.05)",
                  }}
                  className="flex flex-col items-center p-5 rounded-xl bg-white border border-blue-100 shadow-sm group transition-all duration-300"
                >
                  <div className="mb-4 p-3 bg-blue-50 rounded-xl flex items-center justify-center w-14 h-14 group-hover:bg-blue-100 transition-colors">
                    <img
                      src={tech.iconImage}
                      alt={tech.title}
                      className="w-8 h-8 object-contain"
                      onError={handleImageError}
                      loading="lazy"
                    />
                    <div className="hidden w-8 h-8 bg-blue-200 rounded-full items-center justify-center">
                      <span className="text-sm font-bold text-blue-700">
                        {tech.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-800 text-center">
                    {tech.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!isLoading &&
          !error &&
          (!currentCategory?.technologyName ||
            currentCategory.technologyName.length === 0) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-14"
            >
              <p className="text-lg font-medium text-blue-600">
                No technologies found for {activeTab}
              </p>
              <p className="text-blue-500 mt-1">
                Please check back later for updates
              </p>
            </motion.div>
          )}
      </div>
    </section>
  );
};

export default TechStack;
