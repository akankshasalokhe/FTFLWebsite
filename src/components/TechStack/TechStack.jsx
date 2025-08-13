"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaAws, FaNodeJs, FaPython, FaDocker, FaFigma, FaAdobe } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiGraphql, SiKubernetes, SiTensorflow, SiPostgresql, SiRedis, SiFlutter, SiAndroid, SiIos, SiPremierleague, SiAdobeaftereffects, SiBlender } from "react-icons/si";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";

const TechStack = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // All technologies in a single array (no grouping)
  const technologies = [
    // Web Development
    { icon: <FaReact className="w-8 h-8" />, name: "React", color: "text-[#61DAFB]" },
    { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js", color: "text-black dark:text-white" },
    { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript", color: "text-[#3178C6]" },
    { icon: <FaNodeJs className="w-8 h-8" />, name: "Node.js", color: "text-[#68A063]" },
    { icon: <SiGraphql className="w-8 h-8" />, name: "GraphQL", color: "text-[#E535AB]" },
    
    // Mobile
    { icon: <SiFlutter className="w-8 h-8" />, name: "Flutter", color: "text-[#02569B]" },
    { icon: <SiAndroid className="w-8 h-8" />, name: "Android", color: "text-[#3DDC84]" },
    { icon: <SiIos className="w-8 h-8" />, name: "iOS", color: "text-[#000000]" },
    
    // UI/UX & Graphics
    { icon: <FaFigma className="w-8 h-8" />, name: "Figma", color: "text-[#F24E1E]" },
    { icon: <DiPhotoshop className="w-8 h-8" />, name: "Photoshop", color: "text-[#31A8FF]" },
    { icon: <DiIllustrator className="w-8 h-8" />, name: "Illustrator", color: "text-[#FF9A00]" },
    
    // Video & 3D
    { icon: <SiPremierleague className="w-8 h-8" />, name: "Premiere Pro", color: "text-[#EA77FF]" },
    { icon: <SiAdobeaftereffects className="w-8 h-8" />, name: "After Effects", color: "text-[#D291FF]" },
    { icon: <SiBlender className="w-8 h-8" />, name: "Blender", color: "text-[#F5792A]" },
    
    // Cloud & DevOps
    { icon: <FaAws className="w-8 h-8" />, name: "AWS", color: "text-[#FF9900]" },
    { icon: <FaDocker className="w-8 h-8" />, name: "Docker", color: "text-[#2496ED]" },
    { icon: <SiKubernetes className="w-8 h-8" />, name: "Kubernetes", color: "text-[#326CE5]" },
    
    // Data & AI
    { icon: <SiTensorflow className="w-8 h-8" />, name: "TensorFlow", color: "text-[#FF6F00]" },
    { icon: <SiPostgresql className="w-8 h-8" />, name: "PostgreSQL", color: "text-[#336791]" },
    { icon: <SiRedis className="w-8 h-8" />, name: "Redis", color: "text-[#DC382D]" }
  ];

  // Duplicate array for seamless looping
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden">
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
            Cutting-edge tools powering our digital solutions
          </p>
        </motion.div>

        {/* First Row */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "-100%"],
              transition: {
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="flex w-max gap-8"
          >
            {duplicatedTechs.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center min-w-[100px]"
              >
                <div className={`${tech.color} mb-3 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg`}>
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row (Reverse) */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            animate={{
              x: ["-100%", "0%"],
              transition: {
                duration: 35,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="flex w-max gap-8"
          >
            {[...duplicatedTechs].reverse().map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center min-w-[100px]"
              >
                <div className={`${tech.color} mb-3 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg`}>
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Third Row */}
        <div className="overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "-100%"],
              transition: {
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="flex w-max gap-8"
          >
            {duplicatedTechs.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center min-w-[100px]"
              >
                <div className={`${tech.color} mb-3 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg`}>
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;