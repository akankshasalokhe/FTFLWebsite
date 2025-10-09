'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // Default for larger screens

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

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch testimonials from backend
  // useEffect(() => {
  //   const fetchTestimonials = async () => {
  //     try {
  //       const res = await fetch("https://landing-page-yclw.vercel.app/api/testimonial"); 
  //       const data = await res.json();
  //       if (data.success && Array.isArray(data.data)) {
  //         // Map backend fields into frontend shape
  // const mapped = data.data.map((item, i) => ({
  //   quote: item.description,
  //   name: item.fullName,
  //   role: item.title,
  //   stars: item.rating,
  //   avatar: `/avatars/avatar${(i % 5) + 1}.jpg` // Fallback avatar
  // }));
  //         setTestimonials(mapped);
  //       }
  //     } catch (err) {
  //       console.error("Failed to load testimonials:", err);

  //     }
  //   };

  //   fetchTestimonials();
  // }, []);



  useEffect(() => {
    const fetchTestimonials = async () => {
      try {

        const res = await axios.get(`https://landing-page-yclw.vercel.app/api/testimonial`);
        if (res.data.success) {
          // Filter to only include items where sectionTitle is "Home"
          const filtered = res.data.data.filter((item) => item.sectionTitle === "Home");
          console.log("Filtered Testimonials:", filtered);
          const mapped = filtered.map((item, i) => ({
            quote: item.description,
            name: item.fullName,
            role: item.title,
            stars: item.rating,
            // avatar: `/avatars/avatar${(i % 5) + 1}.jpg` // Fallback avatar
             avatar: "/logos/testimonialskeleton.png"
          }));
          setTestimonials(mapped);
        }
        console.log("Fetched Testimonials:", res.data.data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  const nextSlide = () => {
    setDirection(1);
    if (currentIndex >= testimonials.length - itemsToShow) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    setDirection(-1);
    if (currentIndex <= 0) {
      setCurrentIndex(testimonials.length - itemsToShow);
    } else {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Auto-advance slides
  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [testimonials, currentIndex, itemsToShow]);

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    })
  };

  // Get the testimonials to display
  const getVisibleTestimonials = () => {
    if (testimonials.length === 0) return [];

    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-3 md:mb-4">
            Client Testimonials
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            What our clients say about our services
          </p>
        </div>

        {testimonials.length > 0 ? (
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
                <AnimatePresence custom={direction} mode="wait" initial={false}>
                  {getVisibleTestimonials().map((testimonial, index) => (
                    <motion.div
                      key={`${currentIndex}-${index}`}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full"
                    >
                      <div className="flex items-start mb-3 md:mb-4">
                        <FaQuoteLeft className="text-blue-600 text-lg md:text-xl mr-2 md:mr-3 mt-1 flex-shrink-0" />
                        <p className="text-sm md:text-base text-gray-700">{testimonial.quote}</p>
                      </div>
                      <div className="flex items-center mt-4 md:mt-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold mr-3 md:mr-4 flex-shrink-0">
                          {testimonial.avatar ? (
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            testimonial.name.charAt(0)
                          )}
                        </div>

                       
                     
                        <div className="min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm md:text-base truncate">{testimonial.name}</h4>
                          <p className="text-gray-500 text-xs md:text-sm truncate">{testimonial.role}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={`${i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'} w-3 h-3 md:w-4 md:h-4`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 md:mt-8">
              {testimonials.length > 0 && Array.from(
                { length: Math.ceil(testimonials.length / itemsToShow) },
                (_, i) => i
              ).map((index) => (
                <button
                  key={index}
                  onClick={() => {
                    const newIndex = index * itemsToShow;
                    setDirection(newIndex > currentIndex ? 1 : -1);
                    setCurrentIndex(newIndex);
                  }}
                  className={`mx-1 w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${currentIndex >= index * itemsToShow &&
                      currentIndex < (index + 1) * itemsToShow
                      ? 'bg-blue-600 w-4 md:w-6'
                      : 'bg-gray-300'
                    }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Loading state
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {[...Array(itemsToShow)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full animate-pulse">
                <div className="flex items-start mb-4">
                  <div className="w-6 h-6 bg-gray-200 rounded-full mr-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
                <div className="flex items-center mt-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}