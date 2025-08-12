"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaAws, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiGraphql, SiKubernetes, SiTensorflow, SiPostgresql, SiRedis } from "react-icons/si";

const TechStack = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Grouped technologies by category
  const techGroups = [
    {
      name: "Frontend",
      color: "from-[#298CF3] to-[#0D5DB7]",
      items: [
        { icon: <FaReact className="w-8 h-8" />, name: "React", color: "text-[#61DAFB]" },
        { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js", color: "text-black dark:text-white" },
        { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript", color: "text-[#3178C6]" }
      ]
    },
    {
      name: "Backend",
      color: "from-[#FF6B35] to-[#D45A2C]",
      items: [
        { icon: <FaNodeJs className="w-8 h-8" />, name: "Node.js", color: "text-[#68A063]" },
        { icon: <SiGraphql className="w-8 h-8" />, name: "GraphQL", color: "text-[#E535AB]" },
        { icon: <FaPython className="w-8 h-8" />, name: "Python", color: "text-[#3776AB]" }
      ]
    },
    {
      name: "Cloud & DevOps",
      color: "from-[#00C49A] to-[#00A884]",
      items: [
        { icon: <FaAws className="w-8 h-8" />, name: "AWS", color: "text-[#FF9900]" },
        { icon: <FaDocker className="w-8 h-8" />, name: "Docker", color: "text-[#2496ED]" },
        { icon: <SiKubernetes className="w-8 h-8" />, name: "Kubernetes", color: "text-[#326CE5]" }
      ]
    },
    {
      name: "Data & AI",
      color: "from-[#A855F7] to-[#9333EA]",
      items: [
        { icon: <SiTensorflow className="w-8 h-8" />, name: "TensorFlow", color: "text-[#FF6F00]" },
        { icon: <SiPostgresql className="w-8 h-8" />, name: "PostgreSQL", color: "text-[#336791]" },
        { icon: <SiRedis className="w-8 h-8" />, name: "Redis", color: "text-[#DC382D]" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const techVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-[#298CF3] dark:text-[#298CF3]">Technology Stack</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and high-performance applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {techGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`bg-gradient-to-br ${group.color} rounded-2xl p-0.5 shadow-xl hover:shadow-2xl transition-all`}
            >
              <div className="bg-white dark:bg-gray-900 rounded-[calc(1rem-2px)] h-full p-6">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  {group.name}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {group.items.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      variants={techVariants}
                      whileHover="hover"
                      className="flex flex-col items-center"
                    >
                      <div className={`${tech.color} mb-3 p-3 rounded-xl bg-white dark:bg-gray-800 shadow-md`}>
                        {tech.icon}
                      </div>
                      <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;