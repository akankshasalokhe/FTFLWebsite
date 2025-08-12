"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const MissionSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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

  const content = [
    {
      title: "Our Mission",
      description: "At FTFL Technology, our mission is to empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth. We are committed to delivering high-quality digital products, seamless user experiences, and strategic IT consulting to help our clients succeed in the ever-evolving tech landscape. By leveraging the latest advancements in technology, we create scalable solutions tailored to unique business needs. Our dedication to excellence and continuous improvement ensures long-term success for our clients.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Our Vision",
      description: "We focus on their special needs and, therefore, carry out customized IT, branding, and marketing services to serve our clients. Our agile approach ensures flexibility, scalability, and continuous growth, further helping businesses thrive under these ever-changing digital circumstances. By staying ahead of industry trends, we empower businesses to achieve sustained success in a competitive landscape.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      color: "from-purple-500 to-purple-600",
      reverse: true
    },
    {
      title: "Core Values",
      description: "Innovation, Integrity, Collaboration, Excellence, and Customer-Centric approach guide everything we do.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

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
                {item.title === "Core Values" && (
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