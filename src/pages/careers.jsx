// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// import { motion } from 'framer-motion';
// import JoinOurTeam from '@/components/JoinOurTeam/JoinOurTeam';
// import OpenPositions from '@/components/OpenPositions/OpenPositions';
// import ApplyPage from './apply';
// import JobCategory from "@/components/JobCategories/JobCategories";

// const ROLES = ['Developers', 'Designers', 'Marketers', 'Engineers'];
// function careers() {
//   const router = useRouter();

//   const [currentRole, setCurrentRole] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % ROLES.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div>


//     <div className="relative mt-20 overflow-hidden bg-blue-500">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>

//       <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
//         <div className="flex flex-col lg:flex-row items-center ms-5 gap-8">
//           {/* Text content */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="lg:w-1/2 space-y-6"
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
//               Join Our <span className="text-white">Team</span>
//             </h1>

//             <div className="h-16 overflow-hidden">
//               <motion.p
//                 key={currentRole}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: -20, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="text-xl md:text-2xl text-black"
//               >
//                 We're hiring <span className="text-white">{ROLES[currentRole]}</span>
//               </motion.p>
//             </div>

//             <motion.p 
//               className="text-lg text-black"
//               whileHover={{ scale: 1.02 }}
//             >
//               Build the future with us. Grow your career in an innovative environment.
//             </motion.p>


//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onHoverStart={() => setIsHovered(true)}
//               onHoverEnd={() => setIsHovered(false)}
//             >
//               <button 
//               //  onClick={() => router.push('/OpenPositions')}
//               className="bg-gradient-to-r from-[#298cf3] to-blue-600 hover:bg-[#2478d4] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-[#298CF3]/30"
//               >
//                 <span className="flex items-center gap-2">
//                   View Open Positions
//                   <motion.span
//                     animate={{ x: isHovered ? 5 : 0 }}
//                     transition={{ type: 'spring', stiffness: 500 }}
//                   >
//                     →
//                   </motion.span>
//                 </span>
//               </button>
//             </motion.div>

//           </motion.div>

//           {/* Image/Illustration */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="lg:w-1/2"
//           >
//             <div className="relative">
//               <div className="absolute -inset-4 rounded-xl  animate-pulse"></div>
//               <img 
//                 src="/Hero.jpeg" 
//                 alt="Team working together"
//                 className="relative w-full h-auto max-w-lg mx-auto rounded-lg shadow-xl transition-transform duration-500 hover:scale-105 bg-contain"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//     <JoinOurTeam />
//     <JobCategory />
//     <OpenPositions />
//     {/* <ApplyPage /> */}
//     </div>
//   )
// }

// export default careers


// pages/careers.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import JoinOurTeam from '@/components/JoinOurTeam/JoinOurTeam';
import ApplyPage from './apply';
import JobCategory from "@/components/JobCategories/JobCategories";
import JobListings from "@/components/OpenPositions/OpenPositions";
import Link from 'next/link';
const ROLES = ['Developers', 'Designers', 'Marketers', 'Engineers'];

function Careers() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeView, setActiveView] = useState('categories'); // 'categories' or 'joblistings'
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleCategoryClick = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    setActiveView('joblistings');
  };

  const handleViewAllPositions = () => {
    setSelectedCategory(''); // Show all jobs
    setActiveView('joblistings');
  };

  const handleBackToCategories = () => {
    setActiveView('categories');
    setSelectedCategory('');
  };

  return (
    <div>
      {/* <div className="relative mt-20 overflow-hidden bg-blue-500">
       
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center ms-5 gap-8">
          
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
                  onClick={handleViewAllPositions}
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

            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl animate-pulse"></div>
                <img 
                  src="/Hero.jpeg" 
                  alt="Team working together"
                  className="relative w-full h-auto max-w-lg mx-auto rounded-lg shadow-xl transition-transform duration-500 hover:scale-105 bg-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div> */}


      <div className="relative  overflow-hidden bg-blue-500">
        {/* Animated Background Bubbles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.4
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 60 - 30],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>

        <section
          className="relative flex items-center justify-center text-white overflow-hidden 
        h-[60vh] sm:h-[50vh] md:h-[45vh] lg:h-[40vh] 
        min-h-[400px] sm:min-h-[480px] md:min-h-[550px] lg:min-h-[500px] 
        max-h-[650px]"
          style={{
            backgroundImage: "url('/logos/ourmission.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Optional overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Join Our <span className="text-blue-300">Team</span>
            </motion.h1>

            <motion.p
              key={currentRole}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-xl md:text-2xl"
            >
              We're hiring <span className="text-blue-200">{ROLES[currentRole]}</span>
            </motion.p>

            <p className="mt-6 text-lg opacity-90">
              Build the future with us. Grow your career in an innovative environment.
            </p>

            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#openpositions">
                <button className="bg-gradient-to-r from-[#298cf3] to-blue-600 hover:from-blue-600 hover:to-[#2478d4] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg">
                  <span className="flex items-center justify-center gap-2">
                    View Open Positions →
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </section>


      </div>

      <JoinOurTeam />

      {/* Show either categories or job listings based on activeView */}
      {activeView === 'categories' ? (
        <div id='openpositions'>
          <JobCategory onCategoryClick={handleCategoryClick} />
        </div>
      ) : (
        <div>
          {/* Back to categories button */}
          <div className="text-center mb-4 mt-10">
            <button
              onClick={handleBackToCategories}
              className="px-6 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
            >
              ← Back to Categories
            </button>
          </div>
          <JobListings initialCategory={selectedCategory} />
        </div>
      )}
    </div>
  )
}

export default Careers;