import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';
import JoinOurTeam from '@/components/JoinOurTeam/JoinOurTeam';
import OpenPositions from '@/components/OpenPositions/OpenPositions';
import ApplyPage from './apply';

const ROLES = ['Developers', 'Designers', 'Marketers', 'Engineers'];
function careers() {
  const router = useRouter();

  const [currentRole, setCurrentRole] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      
  
    <div className="relative mt-20 overflow-hidden bg-blue-500">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center ms-5 gap-8">
          {/* Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Join Our <span className="text-white">Team</span>
            </h1>
            
            <div className="h-16 overflow-hidden">
              <motion.p
                key={currentRole}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl text-black"
              >
                We're hiring <span className="text-white">{ROLES[currentRole]}</span>
              </motion.p>
            </div>

            <motion.p 
              className="text-lg text-black"
              whileHover={{ scale: 1.02 }}
            >
              Build the future with us. Grow your career in an innovative environment.
            </motion.p>

              
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <button 
              //  onClick={() => router.push('/OpenPositions')}
              className="bg-gradient-to-r from-[#298cf3] to-blue-600 hover:bg-[#2478d4] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-[#298CF3]/30"
              >
                <span className="flex items-center gap-2">
                  View Open Positions
                  <motion.span
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    →
                  </motion.span>
                </span>
              </button>
            </motion.div>

          </motion.div>

          {/* Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl  animate-pulse"></div>
              <img 
                src="/Hero.jpeg" 
                alt="Team working together"
                className="relative w-full h-auto max-w-lg mx-auto rounded-lg shadow-xl transition-transform duration-500 hover:scale-105 bg-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    <JoinOurTeam />
    <OpenPositions />
    {/* <ApplyPage /> */}
    </div>
  )
}

export default careers