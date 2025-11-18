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


     useEffect(() => {
    const canvas = document.getElementById("careerCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const points = [];
    const POINT_COUNT = 35;

    for (let i = 0; i < POINT_COUNT; i++) {
      points.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 2 + 1,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
      });
    }

    function drawLine(p1, p2, opacity) {
      ctx.strokeStyle = `rgba(110,190,255,${opacity})`;
      ctx.lineWidth = 1.2;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);

      ctx.quadraticCurveTo(
        (p1.x + p2.x) / 2,
        (p1.y + p2.y) / 2 + Math.sin(Date.now() * 0.001) * 20,
        p2.x,
        p2.y
      );

      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);

      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, "rgba(0,150,255,0.06)");
      gradient.addColorStop(1, "rgba(0,255,255,0.05)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < POINT_COUNT; i++) {
        const p = points[i];

        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3 * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140,220,255,${0.35 * p.z})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#3ab4ff";
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < POINT_COUNT; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < 240) drawLine(p, p2, 1 - dist / 240);
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

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


       <div
      className="relative h-[55vh] min-h-[420px] max-h-[550px] overflow-hidden 
      bg-gradient-to-r from-[#021030] via-[#032781] to-[#01154b]"
    >
      {/* Neon Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-70 z-5">
        <div className="neon-wave"></div>
      </div>

      {/* Network Canvas */}
      <canvas
        id="careerCanvas"
        className="absolute inset-0 w-full h-full z-5 pointer-events-none"
      ></canvas>

      {/* Other animated layers */}
      <div className="absolute inset-0 z-5">
        <div className="circuit-lines"></div>
      </div>
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="neon-dots"></div>
      </div>
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="floating-polygons"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 h-full">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        >
          Join Our <span className="text-blue-300">Team</span>
        </motion.h1>

        <motion.p
          key={currentRole}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-xl md:text-2xl text-white"
        >
          We're hiring <span className="text-blue-200">{ROLES[currentRole]}</span>
        </motion.p>

        <p className="mt-6 text-lg text-white/90">
          Build the future with us. Grow your career in an innovative environment.
        </p>

        <motion.div
          className="mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#openpositions">
            <button className="bg-gradient-to-r from-[#298cf3] to-blue-600 hover:from-blue-600 hover:to-[#2478d4] text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-all">
              View Open Positions →
            </button>
          </Link>
        </motion.div>

      </div>

      {/* White Curve Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-white clip-path-angle z-30"></div>
    </div>


      

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

      <JoinOurTeam />
    </div>
  )
}

export default Careers;