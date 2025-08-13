// components/JoinOurTeam.tsx
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers, FiAward, FiGlobe, FiZap, FiCpu, FiPieChart } from 'react-icons/fi';

const perks = [
  {
    icon: <FiCpu className="w-5 h-5" />,
    title: "AI-Powered Workflow",
    description: "Leverage cutting-edge AI tools to enhance your productivity",
    highlight: "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
  },
  {
    icon: <FiAward className="w-5 h-5" />,
    title: "Rapid Career Growth",
    description: "2x faster promotion cycles than industry standards",
    highlight: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
  },
  {
    icon: <FiUsers className="w-5 h-5" />,
    title: "Global Network",
    description: "Collaborate with top 1% talent across 15+ countries",
    highlight: "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
  },
  {
    icon: <FiPieChart className="w-5 h-5" />,
    title: "Equity Options",
    description: "Own a piece of what you're building with stock grants",
    highlight: "bg-gradient-to-br from-amber-500/10 to-orange-500/10"
  }
];

export default function JoinOurTeam() {
  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-900/20 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-900/20 blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-5 max-w-7xl">
        {/* Animated header with gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-mono text-blue-400 mb-3 tracking-widest">
            WE'RE HIRING
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-5">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Build the Future
            </span> <br className="md:hidden" />With Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're assembling the next generation of digital architects to redefine what's possible in our industry.
          </p>
        </motion.div>

        {/* Glass-morphism perk cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-xl ${perk.highlight} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-gray-700 transition-all h-full overflow-hidden">
                <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full bg-blue-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-6 text-blue-400 group-hover:text-white transition-colors">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{perk.title}</h3>
                <p className="text-gray-400">{perk.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive CTA with particle effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block max-w-2xl relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            
            <h3 className="text-2xl font-medium text-white mb-5">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">accelerate</span> your career?
            </h3>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block relative overflow-hidden"
            >
              <button className="relative z-10 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium shadow-xl hover:shadow-blue-500/30 transition-all flex items-center gap-2 group">
                <span>View Open Roles</span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                {/* Particle effect on hover */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: 0, y: 0 }}
                      whileHover={{
                        opacity: [0, 1, 0],
                        x: Math.random() * 60 - 30,
                        y: Math.random() * 40 - 20
                      }}
                      transition={{ duration: 1 }}
                      className="absolute block w-1 h-1 rounded-full bg-white"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                    />
                  ))}
                </div>
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0, 0.5, 0] }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 border border-blue-400/50 rounded-xl pointer-events-none"
              />
            </motion.div>
            
            <p className="text-gray-500 mt-6 text-sm">
              Join 150+ innovators already shaping tomorrow
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}