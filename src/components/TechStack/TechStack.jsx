"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Mock data for demonstration
const mockTechData = [
  {
    fieldName: "Frontend",
    technologyName: [
      { _id: "1", title: "React", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { _id: "2", title: "Vue.js", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { _id: "3", title: "Angular", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { _id: "4", title: "Svelte", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
      { _id: "5", title: "TypeScript", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { _id: "6", title: "JavaScript", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { _id: "7", title: "HTML5", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { _id: "8", title: "CSS3", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { _id: "9", title: "Tailwind", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { _id: "10", title: "Bootstrap", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
    ]
  },
  {
    fieldName: "Backend",
    technologyName: [
      { _id: "11", title: "Node.js", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { _id: "12", title: "Python", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { _id: "13", title: "Django", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { _id: "14", title: "Ruby", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
      { _id: "15", title: "Java", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { _id: "16", title: "Spring", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { _id: "17", title: "PHP", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { _id: "18", title: "Laravel", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
      { _id: "19", title: "Express", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { _id: "20", title: "MySQL", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ]
  },
  {
    fieldName: "Mobile",
    technologyName: [
      { _id: "21", title: "React Native", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { _id: "22", title: "Flutter", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { _id: "23", title: "Swift", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { _id: "24", title: "Kotlin", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { _id: "25", title: "Android", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { _id: "26", title: "iOS", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
      { _id: "27", title: "Ionic", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
      { _id: "28", title: "Xamarin", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg" }
    ]
  },
  {
    fieldName: "DevOps",
    technologyName: [
      { _id: "29", title: "Docker", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { _id: "30", title: "Kubernetes", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { _id: "31", title: "AWS", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { _id: "32", title: "Azure", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { _id: "33", title: "GCP", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { _id: "34", title: "Git", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { _id: "35", title: "Jenkins", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { _id: "36", title: "Linux", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { _id: "37", title: "Nginx", iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" }
    ]
  }
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const sliderRef = useRef();

  useEffect(() => {
    // Simulating API fetch with mock data
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setTechnologies(mockTechData);
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
    if (e.target.nextSibling) {
      e.target.nextSibling.style.display = "flex";
    }
  };

  // Enhanced slider settings for better responsiveness
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
      { breakpoint: 380, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false, centerMode: true, centerPadding: '20px' } },
    ],
  };

  return (
    <section
      ref={ref}
      id="tech-stack"
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
              Technology Stack
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technologies powering our digital solutions
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12 px-2">
          {availableCategories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs sm:text-sm md:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-300 ${
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
          <div className="flex justify-center gap-4 sm:gap-5 overflow-x-auto px-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-white border border-blue-100 animate-pulse w-16 sm:w-20"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-blue-100 mb-2"></div>
                <div className="h-2 w-10 sm:w-12 bg-blue-100 rounded"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && <p className="text-center text-red-500 py-8 md:py-10 text-sm md:text-base">{error}</p>}

        {/* Tech Carousel */}
        {!isLoading &&
          !error &&
          currentCategory &&
          currentCategory.technologyName.length > 0 && (
            <div className="relative px-2 sm:px-4 md:px-6">
              <Slider ref={sliderRef} {...sliderSettings} className="pb-4 md:pb-6">
                {currentCategory.technologyName.map((tech, index) => (
                  <div
                    key={tech._id || index}
                    className="px-1 sm:px-2 focus:outline-none"
                  >
                    <div className="flex flex-col items-center p-2 sm:p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-50 tech-card">
                      <div className="p-2 sm:p-3 bg-blue-50 rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 hover:bg-blue-100 transition-colors duration-300">
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
                      <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800 text-center truncate max-w-full">
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
            <div className="text-center py-10 md:py-14">
              <p className="text-base md:text-lg font-medium text-blue-600">
                No technologies found for {activeTab}
              </p>
              <p className="text-blue-500 mt-1 text-sm md:text-base">Please check back later</p>
            </div>
          )}
      </div>
      
      <style jsx>{`
        .tech-card {
          transition: all 0.3s ease;
        }
        .tech-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .tab-button {
          transition: all 0.3s ease;
        }
        :global(.slick-prev:before), :global(.slick-next:before) {
          color: #3b82f6;
        }
      `}</style>
    </section>
  );
};

export default TechStack;