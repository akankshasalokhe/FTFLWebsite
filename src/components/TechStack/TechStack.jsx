"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiFirebase, SiFlutter, SiAndroid, SiIos, SiReactrouter, SiJest, SiWebpack, SiGraphql, SiPostgresql, SiDocker, SiKubernetes } from "react-icons/si";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Frontend Technologies (Web & Mobile)
  const frontendTech = [
    { icon: <FaReact className="w-8 h-8" />, name: "React", color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10" },
    { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js", color: "text-white", bg: "bg-black/80 dark:bg-white/10" },
    { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript", color: "text-[#3178C6]", bg: "bg-[#3178C6]/10" },
    { icon: <SiJavascript className="w-8 h-8" />, name: "JavaScript", color: "text-[#F7DF1E]", bg: "bg-[#F7DF1E]/10" },
    { icon: <FaHtml5 className="w-8 h-8" />, name: "HTML5", color: "text-[#E34F26]", bg: "bg-[#E34F26]/10" },
    { icon: <FaCss3Alt className="w-8 h-8" />, name: "CSS3", color: "text-[#1572B6]", bg: "bg-[#1572B6]/10" },
    { icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind", color: "text-[#06B6D4]", bg: "bg-[#06B6D4]/10" },
    { icon: <FaSass className="w-8 h-8" />, name: "SASS", color: "text-[#CC6699]", bg: "bg-[#CC6699]/10" },
    { icon: <SiRedux className="w-8 h-8" />, name: "Redux", color: "text-[#764ABC]", bg: "bg-[#764ABC]/10" },
    { icon: <SiFlutter className="w-8 h-8" />, name: "Flutter", color: "text-[#02569B]", bg: "bg-[#02569B]/10" },
  ];

  // Backend Technologies
  const backendTech = [
    { icon: <FaNodeJs className="w-8 h-8" />, name: "Node.js", color: "text-[#68A063]", bg: "bg-[#68A063]/10" },
    { icon: <SiExpress className="w-8 h-8" />, name: "Express", color: "text-white", bg: "bg-black/80 dark:bg-white/10" },
    { icon: <SiGraphql className="w-8 h-8" />, name: "GraphQL", color: "text-[#E535AB]", bg: "bg-[#E535AB]/10" },
  ];

  // Database Technologies
  const databaseTech = [
    { icon: <SiMongodb className="w-8 h-8" />, name: "MongoDB", color: "text-[#47A248]", bg: "bg-[#47A248]/10" },
    { icon: <SiFirebase className="w-8 h-8" />, name: "Firebase", color: "text-[#FFCA28]", bg: "bg-[#FFCA28]/10" },
    { icon: <SiPostgresql className="w-8 h-8" />, name: "PostgreSQL", color: "text-[#336791]", bg: "bg-[#336791]/10" },
  ];

  // DevOps Tools
  const devopsTech = [
    { icon: <FaGitAlt className="w-8 h-8" />, name: "Git", color: "text-[#F05032]", bg: "bg-[#F05032]/10" },
    { icon: <FaAws className="w-8 h-8" />, name: "AWS", color: "text-[#FF9900]", bg: "bg-[#FF9900]/10" },
    { icon: <SiDocker className="w-8 h-8" />, name: "Docker", color: "text-[#2496ED]", bg: "bg-[#2496ED]/10" },
    { icon: <SiKubernetes className="w-8 h-8" />, name: "Kubernetes", color: "text-[#326CE5]", bg: "bg-[#326CE5]/10" },
  ];

  const getCurrentTech = () => {
    switch (activeTab) {
      case "frontend": return frontendTech;
      case "backend": return backendTech;
      case "database": return databaseTech;
      case "devops": return devopsTech;
      default: return frontendTech;
    }
  };

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#0051ff]">Technology Stack</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies powering our digital solutions
          </p>
        </motion.div>

        {/* Glowing Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {[
            { id: "frontend", label: "Frontend" },
            { id: "backend", label: "Backend" },
            { id: "database", label: "Database" },
            { id: "devops", label: "DevOps" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#edeef7] text-gray-900 shadow-lg shadow-[#00FFA3]/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tech Grid with Glow Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {getCurrentTech().map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center p-6 rounded-2xl ${tech.bg} backdrop-blur-sm border border-white hover:border-[#00FFA3]/30 hover:shadow-lg hover:shadow-[#00FFA3]/10 transition-all`}
            >
              <div className={`${tech.color} mb-4 p-3 rounded-xl bg-gray-900/50`}>
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-white">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Gradient Border */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FFA3] via-[#00B4FF] to-[#00FFA3] opacity-20 blur-lg rounded-full animate-gradient-xy"></div>
          <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Full Tech Ecosystem
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[...frontendTech, ...backendTech, ...databaseTech, ...devopsTech].slice(0, 8).map((tech, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-700/50">
                  <div className={`${tech.color}`}>{tech.icon}</div>
                  <span className="text-xs text-white">{tech.name}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-700/50">
                <span className="text-xs text-white">+12 more</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-xy {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 8s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;