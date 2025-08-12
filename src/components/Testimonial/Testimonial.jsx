"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const testimonials = [
    {
      quote: "FTFL transformed our digital infrastructure with their cloud solutions. Our system performance improved by 200%!",
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      stars: 5,
      avatar: "/avatars/avatar1.jpg"
    },
    {
      quote: "The AI implementation was flawless. We've automated 80% of our customer service operations thanks to their team.",
      name: "Michael Chen",
      role: "Product Lead at InnovateX",
      stars: 5,
      avatar: "/avatars/avatar2.jpg"
    },
    {
      quote: "Their React developers built our platform in half the estimated time. Exceptional quality and communication.",
      name: "Emma Rodriguez",
      role: "CEO at StartupHub",
      stars: 4,
      avatar: "/avatars/avatar3.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref} 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#298CF3]">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by innovative companies worldwide
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8"
            >
              <div className="flex items-start mb-6">
                <FaQuoteLeft className="text-[#298CF3] text-xl mr-3 mt-1" />
                <p className="text-gray-700">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#298CF3]"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role}
                  </p>
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button className="px-6 py-3 bg-[#298CF3] hover:bg-[#2472C4] text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
            Read More Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;