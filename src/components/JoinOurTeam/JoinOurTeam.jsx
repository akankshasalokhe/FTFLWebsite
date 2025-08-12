// components/JoinOurTeam.tsx
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers, FiAward, FiGlobe, FiZap, FiCode, FiLayers } from 'react-icons/fi';

const perks = [
  {
    icon: <FiZap className="w-6 h-6" />,
    title: "Innovative Projects",
    description: "Work on cutting-edge technology that makes an impact",
    bg: "bg-[#298CF3]/10"
  },
  {
    icon: <FiAward className="w-6 h-6" />,
    title: "Career Growth",
    description: "Regular training and promotion opportunities",
    bg: "bg-[#FFD700]/10"
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: "Great Team",
    description: "Collaborate with talented, passionate people",
    bg: "bg-[#FF6B6B]/10"
  },
  {
    icon: <FiGlobe className="w-6 h-6" />,
    title: "Flexible Work",
    description: "Remote options and flexible schedules",
    bg: "bg-[#6BCB77]/10"
  }
];

export default function JoinOurTeam() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#298CF3]/10 blur-3xl -z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#298CF3]/5 blur-3xl -z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with creative layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-[#298CF3]/10 blur-xl"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
            <span className="relative inline-block">
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#298CF3]/30"></span>
              Join Our <span className="text-[#298CF3]">Creative</span> Force
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just offer jobs - we offer <span className="font-medium text-[#298CF3]">journeys</span>. 
            Where your skills meet our vision to create something extraordinary.
          </p>
        </motion.div>

        {/* Creative Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Left column - Visual element */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center justify-center relative"
          >
            <div className="relative w-full h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#298CF3]/5 to-white rounded-2xl border border-gray-100 shadow-lg flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Animated floating elements */}
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-16 h-16 rounded-lg bg-[#298CF3] flex items-center justify-center text-white shadow-lg"
                  >
                    <FiCode className="w-8 h-8" />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-0 right-0 w-16 h-16 rounded-lg bg-white border border-[#298CF3] flex items-center justify-center text-[#298CF3] shadow-lg"
                  >
                    <FiLayers className="w-8 h-8" />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#298CF3]/10 border-2 border-[#298CF3]/30 flex items-center justify-center text-[#298CF3] shadow-lg"
                  >
                    <FiUsers className="w-10 h-10" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Perks */}
          <div className="space-y-8">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-2xl ${perk.bg} backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#298CF3] shadow-sm">
                    {perk.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{perk.title}</h3>
                    <p className="text-gray-700">{perk.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center relative"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-transparent via-[#298CF3] to-transparent opacity-30"></div>
          <div className="inline-block bg-gradient-to-r from-[#298CF3]/5 to-[#298CF3]/10 px-8 py-8 rounded-2xl border border-[#298CF3]/20 backdrop-blur-sm shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Begin Your Journey?</h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              We're not just looking for employees - we're looking for <span className="font-medium text-[#298CF3]">visionaries</span> to join our mission.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#298CF3] hover:bg-[#2478d4] text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-[#298CF3]/40 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Opportunities <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
              <motion.span
                initial={{ scale: 0 }}
                whileHover={{ scale: 10 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white/20 rounded-full z-0"
              ></motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}