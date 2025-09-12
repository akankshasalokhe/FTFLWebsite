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
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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

  // Fixed responsive breakpoints - ordered correctly
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 8,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 7, slidesToScroll: 2 } },
      { breakpoint: 1280, settings: { slidesToShow: 6, slidesToScroll: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 2, arrows: false } },
      { breakpoint: 640, settings: { slidesToShow: 3, slidesToScroll: 1, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false } },
      { breakpoint: 360, settings: { 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        arrows: false, 
        centerMode: true, 
        centerPadding: "20px" 
      }},
    ],
  };

  return (
    <section
      ref={ref}
      id="tech-stack"
      className="py-10 sm:py-12 md:py-16 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10 md:mb-14"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
              Technology Stack
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technologies powering our digital solutions
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-12 px-2">
          {availableCategories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md"
                  : "bg-white border border-blue-200 text-blue-700 hover:bg-blue-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Loading */}
        {isLoading && !error && (
          <div className="flex justify-center gap-3 sm:gap-5 overflow-x-auto px-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-white border border-blue-100 animate-pulse w-14 sm:w-20"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 mb-2"></div>
                <div className="h-2 w-8 sm:w-12 bg-blue-100 rounded"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 py-6 sm:py-8 md:py-10 text-sm md:text-base">
            {error}
          </p>
        )}

        {/* Tech Carousel */}
        {!isLoading &&
          !error &&
          currentCategory &&
          currentCategory.technologyName.length > 0 && (
            <div className="relative px-1 sm:px-4 md:px-6">
              <Slider {...sliderSettings} className="pb-4 md:pb-6">
                {currentCategory.technologyName.map((tech, index) => (
                  <div
                    key={tech._id || index}
                    className="px-1 sm:px-2 focus:outline-none"
                  >
                    <div className="flex flex-col items-center p-2 sm:p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-blue-50">
                      <div className="p-2 sm:p-3 bg-blue-50 rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 hover:bg-blue-100 transition-colors">
                        <img
                          src={tech.iconImage}
                          alt={tech.title}
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                          onError={handleImageError}
                        />
                        <div className="hidden w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-blue-200 rounded-full items-center justify-center">
                          <span className="text-xs sm:text-sm font-bold text-blue-700">
                            {tech.title.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800 text-center truncate max-w-[90px] sm:max-w-[120px]">
                        {tech.title}
                      </span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}

        {/* Empty */}
        {!isLoading &&
          !error &&
          (!currentCategory?.technologyName ||
            currentCategory.technologyName.length === 0) && (
            <div className="text-center py-8 sm:py-10 md:py-14">
              <p className="text-sm sm:text-base md:text-lg font-medium text-blue-600">
                No technologies found for {activeTab}
              </p>
              <p className="text-blue-500 mt-1 text-xs sm:text-sm md:text-base">
                Please check back later
              </p>
            </div>
          )}
      </div>
    </section>
  );
};

export default TechStack;