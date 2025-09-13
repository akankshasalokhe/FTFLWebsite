// // components/BoardMembers.js
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// const BoardMembers = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const boardMembers = [
//     {
//       name: "Dr. Robert Taylor",
//       role: "Chairman",
//       description: "30 years guiding tech startups with innovative strategies",
//       image: "/images/robert-taylor.jpg",
//       linkedin: "#"
//     },
//     {
//       name: "Priya Patel",
//       role: "Financial Strategist",
//       description: "Specialized in scaling SaaS businesses to global markets",
//       image: "/images/priya-patel.jpg",
//       linkedin: "#"
//     },
//     {
//       name: "James Wilson",
//       role: "Industry Advisor",
//       description: "Former CTO transforming enterprise technology",
//       image: "/images/james-wilson.jpg",
//       linkedin: "#"
//     },
//     {
//       name: "Maria Garcia",
//       role: "Governance Expert",
//       description: "Ensuring compliance and ethical business practices",
//       image: "/images/maria-garcia.jpg",
//       linkedin: "#"
//     }
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Board of Directors</h2>
//           <div className="w-20 h-1 bg-[#298cf3] mx-auto mb-6"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Guiding our vision with unparalleled expertise and strategic leadership
//           </p>
//         </motion.div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate={isVisible ? "show" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {boardMembers.map((member, index) => (
//             <motion.div 
//               key={index}
//               variants={item}
//               whileHover={{ y: -10 }}
//               className="group"
//             >
//               <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
//                 <div className="relative h-72 overflow-hidden">
//                   <img 
//                     src={member.image} 
//                     alt={member.name}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     onError={(e) => {
//                       e.target.onerror = null; 
//                       e.target.src = "/images/placeholder-member.jpg";
//                     }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                     <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
//                       {member.description}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="p-6 flex-grow">
//                   <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
//                   <p className="text-[#298cf3] font-medium mb-4">{member.role}</p>
//                   <p className="text-gray-600 text-sm md:hidden">{member.description}</p>
//                 </div>
//                 <div className="px-6 pb-6">
//                   <a 
//                     href={member.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-[#298cf3] hover:text-[#1a6fc9] transition-colors"
//                   >
//                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                     </svg>
//                     Connect
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BoardMembers;





// components/BoardMembers.js
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import TeamMembers from '../CoreTeam/CoreTeam';

const BoardMembers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeReason, setActiveReason] = useState(0);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const boardMembers = [
    {
      name: "Dr. Robert Taylor",
      role: "Chairman",
      description: "30 years guiding tech startups with innovative strategies",
      image: "/images/robert-taylor.jpg",
      linkedin: "#"
    },
    {
      name: "Priya Patel",
      role: "Financial Strategist",
      description: "Specialized in scaling SaaS businesses to global markets",
      image: "/images/priya-patel.jpg",
      linkedin: "#"
    },
    {
      name: "James Wilson",
      role: "Industry Advisor",
      description: "Former CTO transforming enterprise technology",
      image: "/images/james-wilson.jpg",
      linkedin: "#"
    },
    {
      name: "Maria Garcia",
      role: "Governance Expert",
      description: "Ensuring compliance and ethical business practices",
      image: "/images/maria-garcia.jpg",
      linkedin: "#"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const [boardData, setBoardData] = useState([]);
  const [departmentboardData, setDepartmentBoardData] = useState([]);
  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/board")
      .then((res) => setBoardData(res.data.data))
      .catch((err) => console.error(err));
  }, []);


  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/departmentboard")
      .then((res) => setDepartmentBoardData(res.data.data))
      .catch((err) => console.error(err));
  }, []);


  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Board of Directors</h2>
          <div className="w-20 h-1 bg-[#298cf3] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guiding our vision with unparalleled expertise and strategic leadership
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {boardData.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.mainImage}
                    alt={member.mainImage}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder-member.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {member.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.fullName}</h3>
                  <p className="text-[#298cf3] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm md:hidden">{member.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href={member.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#298cf3] hover:text-[#1a6fc9] transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    Connect
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>



        <TeamMembers />



      </div>

    </section>
  );
};

export default BoardMembers;