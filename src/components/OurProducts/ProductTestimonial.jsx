


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
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import axios from "axios";

const ProductTestimonial = () => {
//   const features = [
//     {
//       id: 1,
//       icon: <FaAward className="text-white text-3xl" />,
//       title: "Certified Programs",
//       description: "Gain industry-recognized certificates to enhance your resume.",
//     },
//     {
//       id: 2,
//       icon: <FaUsers className="text-white text-3xl" />,
//       title: "Expert Mentors",
//       description: "Learn from experienced professionals guiding you every step.",
//     },
//     {
//       id: 3,
//       icon: <FaLightbulb className="text-white text-3xl" />,
//       title: "Practical Learning",
//       description: "Hands-on projects and real-world problem solving.",
//     },
//     {
//       id: 4,
//       icon: <FaHandshake className="text-white text-3xl" />,
//       title: "Career Support",
//       description: "Get placement assistance and internship opportunities.",
//     },
//   ];

//   const stats = [
//     { value: 95, suffix: "%", label: "Completion Rate" },
//     { value: 1000, suffix: "+", label: "Students Enrolled" },
//     { value: 50, suffix: "+", label: "Expert Mentors" },
//     { value: 85, suffix: "%", label: "Placement Rate" },
//   ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [countUp, setCountUp] = useState(stats.map(() => 0));
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Determine how many items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialsData.length]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`https://landing-page-yclw.vercel.app/api/testimonial`);
        if (res.data.success) {
          const filtered = res.data.data.filter((item) => item.sectionTitle === "Product");
          console.log("Filtered Testimonials:", filtered);
          setTestimonialsData(filtered);
        }
        console.log("Fetched Testimonials:", res.data.data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

//   useEffect(() => {
//     const anim = stats.map((stat, index) => {
//       let start = 0;
//       const end = stat.value;
//       const step = Math.ceil(end / 50);
//       const interval = setInterval(() => {
//         start += step;
//         if (start >= end) {
//           start = end;
//           clearInterval(interval);
//         }
//         setCountUp((prev) => {
//           const updated = [...prev];
//           updated[index] = start;
//           return updated;
//         });
//       }, 20);
//       return interval;
//     });

//     return () => anim.forEach((i) => clearInterval(i));
//   }, []);

  const nextSlide = () => {
    if (currentTestimonial >= testimonialsData.length - itemsToShow) {
      setCurrentTestimonial(0);
    } else {
      setCurrentTestimonial(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentTestimonial <= 0) {
      setCurrentTestimonial(testimonialsData.length - itemsToShow);
    } else {
      setCurrentTestimonial(prev => prev - 1);
    }
  };

  // Get the testimonials to display
  const getVisibleTestimonials = () => {
    if (testimonialsData.length === 0) return [];
    
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentTestimonial + i) % testimonialsData.length;
      visible.push(testimonialsData[index]);
    }
    return visible;
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
     

   

        {/* Testimonial Section */}
        {testimonialsData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10 md:mb-12"
          >
           

            <div className="relative">
              {/* Navigation arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous testimonials"
              >
                <FaChevronLeft className="text-blue-600 w-4 h-4 md:w-5 md:h-5" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Next testimonials"
              >
                <FaChevronRight className="text-blue-600 w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* Testimonial cards container */}
              <div className="relative overflow-hidden">
                <div className={`grid grid-cols-1 ${itemsToShow >= 2 ? 'md:grid-cols-2' : ''} ${itemsToShow >= 3 ? 'lg:grid-cols-3' : ''} gap-4 md:gap-6 px-2 md:px-4`}>
                  {getVisibleTestimonials().map((testimonial, index) => (
                    <motion.div
                      key={`${currentTestimonial}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full"
                    >
                      <div className="flex items-start mb-3 md:mb-4">
                        <FaQuoteLeft className="text-blue-600 text-lg md:text-xl mr-2 md:mr-3 mt-1 flex-shrink-0" />
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                          "{testimonial.description}"
                        </p>
                      </div>
                      <div className="flex items-center mt-4 md:mt-6">
                       
                         <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold mr-3 md:mr-4 flex-shrink-0">
                         
                            <img 
                              src="/logos/testimonialskeleton.png"
                              alt={testimonial.fullName}
                              className="w-full h-full rounded-full object-cover"
                            />
                          
                        </div>

                        <div className="min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm md:text-base truncate">
                            {testimonial.fullName}
                          </h4>
                          <p className="text-gray-500 text-xs md:text-sm truncate">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center mt-4 md:mt-6">
                {testimonialsData.length > 0 && Array.from(
                  { length: Math.ceil(testimonialsData.length / itemsToShow) }, 
                  (_, i) => i
                ).map((index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const newIndex = index * itemsToShow;
                      setCurrentTestimonial(newIndex);
                    }}
                    className={`mx-1 w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial >= index * itemsToShow && 
                      currentTestimonial < (index + 1) * itemsToShow
                        ? 'bg-blue-600 w-4 md:w-6' 
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial group ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
 
       
       
      </div>
     


    </section>
  );
};

export default ProductTestimonial;