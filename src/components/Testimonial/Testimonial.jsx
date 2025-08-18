'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export default function TestimonialCarousel() {
  const ITEMS_TO_SHOW = 3;
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Fetch testimonials from backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("https://landing-page-yclw.vercel.app/api/testimonial"); 
        // replace with your backend URL
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          // map backend fields into frontend shape
          const mapped = data.data.map((item, i) => ({
            quote: item.description,
            name: item.fullName,
            role: item.title,
            stars: item.rating,
            avatar: `/avatars/avatar${(i % 5) + 1}.jpg` // fallback avatar
          }));
          setTestimonials(mapped);
        }
      } catch (err) {
        console.error("Failed to load testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < ITEMS_TO_SHOW; i++) {
      if (testimonials.length === 0) break;
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '50%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-50%' : '100%',
      opacity: 0,
      transition: { duration: 0.5 }
    })
  };

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What our clients say about our services
          </p>
        </div>

        {testimonials.length > 0 && (
          <div className="relative overflow-hidden">
            <div className="relative h-[200px]">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10"
                >
                  {getVisibleTestimonials().map((testimonial, index) => (
                    <div key={`${currentIndex}-${index}`} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 h-full">
                      <div className="flex items-start mb-4">
                        <FaQuoteLeft className="text-blue-600 text-xl mr-3 mt-1" />
                        <p className="text-gray-700">{testimonial.quote}</p>
                      </div>
                      <div className="flex items-center mt-6">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-blue-600 mr-4"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar 
                                key={i} 
                                className={`${i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'} w-4 h-4`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`mx-1 w-3 h-3 rounded-full transition-colors ${
                    index >= currentIndex && index < currentIndex + ITEMS_TO_SHOW 
                      ? 'bg-blue-600 w-6' 
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
