"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const currentCategory = technologies.find(
    (cat) => cat.fieldName === activeTab
  );
  const availableCategories = technologies.map((cat) => cat.fieldName);

  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.nextSibling.style.display = "flex";
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 7 } },
      { breakpoint: 1280, settings: { slidesToShow: 6 } },
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 640, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section
      ref={ref}
      id="tech-stack"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {availableCategories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-sm md:text-base font-medium rounded-xl shadow-sm transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg"
                  : "bg-white border border-blue-200 text-blue-700 hover:bg-blue-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Loading */}
        {isLoading && !error && (
          <div className="flex justify-center gap-5 overflow-x-auto">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-5 rounded-xl bg-white border border-blue-100 animate-pulse w-20"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 mb-2"></div>
                <div className="h-3 w-12 bg-blue-100 rounded"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && <p className="text-center text-red-500 py-10">{error}</p>}

        {/* Tech Carousel */}
        {!isLoading &&
          !error &&
          currentCategory &&
          currentCategory.technologyName.length > 0 && (
            <Slider {...sliderSettings} className="pb-6">
              {currentCategory.technologyName.map((tech, index) => (
                <div
                  key={tech._id || index}
                  className="flex flex-col items-center px-2"
                >
                  <div className="p-4 bg-blue-50 rounded-full flex items-center justify-center w-16 h-16 mb-2 hover:bg-blue-100 transition-colors">
                    <img
                      src={tech.iconImage}
                      alt={tech.title}
                      className="w-10 h-10 object-contain"
                      onError={handleImageError}
                    />
                    <div className="hidden w-10 h-10 bg-blue-200 rounded-full items-center justify-center">
                      <span className="text-sm font-bold text-blue-700">
                        {tech.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800 text-center truncate">
                    {tech.title}
                  </span>
                </div>
              ))}
            </Slider>
          )}

        {/* Empty */}
        {!isLoading &&
          !error &&
          (!currentCategory?.technologyName ||
            currentCategory.technologyName.length === 0) && (
            <div className="text-center py-14">
              <p className="text-lg font-medium text-blue-600">
                No technologies found for {activeTab}
              </p>
              <p className="text-blue-500 mt-1">Please check back later</p>
            </div>
          )}
      </div>
    </section>
  );
};

export default TechStack;
