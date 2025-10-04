"use client";

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [techData, setTechData] = useState({});
  const sliderRef = useRef(null);

  // Fetch data from backend
  useEffect(() => {
    const fetchTechData = async () => {
      try {
        const res = await axios.get("https://landing-page-yclw.vercel.app/api/technology"); // replace with your actual API endpoint
        if (res.data.success) {
          const formatted = {};
          res.data.data.forEach((field) => {
            formatted[field.fieldName] = field.technologyName.map((tech) => ({
              id: tech._id,
              name: tech.title,
              icon: tech.iconImage,
            }));
          });
          setTechData(formatted);
          setActiveTab(Object.keys(formatted)[0] || "");
        }
      } catch (err) {
        console.error("Error fetching tech data:", err);
      }
    };

    fetchTechData();
  }, []);

  // Detect mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // // Slider settings
  // const sliderSettings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   rows:2,
  //   arrows: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   pauseOnHover: true,
  //   cssEase: "ease-in-out",
  //   responsive: [
  //     {
  //       breakpoint: 640,
  //       settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: "40px",
  //       },
  //     },
  //   ],
  // };

  const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  rows: 2,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 640,
      settings: { 
        slidesToShow: 2, 
        slidesToScroll: 2,
        rows: 2,
        arrows: false 
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
        arrows: false,
      },
    },
  ],
};

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-blue-500">
              Technology Stack
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technologies powering our digital solutions
          </p>
        </div>

        {/* Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12 px-2">
          {Object.keys(techData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs sm:text-sm md:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white shadow-lg"
                  : "bg-white border border-blue-200 text-blue-700 hover:bg-blue-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div> */}

        <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 md:mb-12 px-2">
  {Object.keys(techData).map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`px-2 sm:px-4 py-2 text-xs sm:text-sm md:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-300 text-center ${
        activeTab === tab
          ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white shadow-lg"
          : "bg-white border border-blue-200 text-blue-700 hover:bg-blue-50"
      }`}
    >
      {tab}
    </button>
  ))}
</div>

      

        {/* Tech Grid (Desktop) */}
        {!isMobile && activeTab && (
          <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 md:gap-4 px-2">
            {techData[activeTab]?.map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col  items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-50 w-[100px] mx-auto"
              >
                <div className="p-2 bg-blue-50 rounded-full flex items-center justify-center w-14 h-14 mb-2 hover:bg-blue-100 transition-colors duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-800 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Slider (Mobile) */}
        {/* {isMobile && activeTab && (
          <div className="md:hidden px-2">
            <Slider ref={sliderRef} {...sliderSettings}>
              {techData[activeTab]?.map((tech) => (
                <div key={tech.id} className="px-2 focus:outline-none">
                  <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-50 w-[120px] mx-auto">
                    <div className="p-2 bg-blue-50 rounded-full flex items-center justify-center w-12 h-12 mb-2 hover:bg-blue-100 transition-colors duration-300">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-800 text-center">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )} */}

      {isMobile && activeTab && (
  <div className="md:hidden px-2">
    {techData[activeTab]?.length > 6 ? (
      // Slider for more than 6 items
      <Slider ref={sliderRef} {...sliderSettings}>
        {techData[activeTab]?.map((tech) => (
          <div key={tech.id} className="px-2 focus:outline-none">
            <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-50 w-[120px] mx-auto">
              <div className="p-2 bg-blue-50 rounded-full flex items-center justify-center w-12 h-12 mb-2 hover:bg-blue-100 transition-colors duration-300">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-800 text-center">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    ) : (
      // Static grid for 6 or fewer items
      <div className="grid grid-cols-3 gap-3">
        {techData[activeTab]?.map((tech) => (
          <div key={tech.id} className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-50">
            <div className="p-2 bg-blue-50 rounded-full flex items-center justify-center w-12 h-12 mb-2 hover:bg-blue-100 transition-colors duration-300">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-7 h-7 object-contain"
              />
            </div>
            <span className="text-xs font-medium text-gray-800 text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    )}
  </div>
)}
      </div>
    </section>
  );
};

export default TechStack;
