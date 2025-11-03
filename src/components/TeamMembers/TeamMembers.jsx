


// // components/BoardMembers.js
// import axios from 'axios';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { FiArrowRight } from 'react-icons/fi';


// const BoardMembers = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeReason, setActiveReason] = useState(0);
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

//   const [boardData, setBoardData] = useState([]);
//   const [departmentboardData, setDepartmentBoardData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/board")
//       .then((res) => setBoardData(res.data.data))
//       .catch((err) => console.error(err));
//   }, []);

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/departmentboard")
//       .then((res) => setDepartmentBoardData(res.data.data))
//       .catch((err) => console.error(err));
//   }, []);

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
//           {boardData.map((member, index) => (
//             <motion.div
//               key={index}
//               variants={item}
//               whileHover={{ y: -10 }}
//               className="group relative"
//             >
//               <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">


//                 <div className="relative group rounded-lg overflow-hidden">
//                   {/* <img src={member.mainImage} alt={member.fullName}  className="w-full h-72 object-cover transition-all duration-300 hover:brightness-75"/> */}
//                   {/* <div className="relative w-full h-72 overflow-hidden">
//                     <img
//                       src={member.mainImage}
//                       alt={member.fullName}
//                       className="w-full h-full object-cover transition-all duration-300"
//                     />
//                     <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
//                   </div> */}

//                   <div className="relative w-full h-72 overflow-hidden group">
//                     {/* Image */}
//                     <img
//                       src={member.mainImage}
//                       alt={member.fullName}
//                       className="w-full h-full object-cover transition-all duration-300"
//                     />

//                     {/* Animated light blue overlay */}
//                    <div className="absolute inset-0 bg-blue-400 opacity-20 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out pointer-events-none"></div>
// </div>





//                   {/* Social Icons */}
//                   {["linkedIn", "facebook", "instagram"].map((platform, index) => {
//                     const colors = {
//                       linkedIn: "#298cf3",
//                       facebook: "#1877f2",
//                       instagram: "#e1306c",
//                     };
//                     const urls = {
//                       linkedIn: member.linkedIn,
//                       facebook: member.facebook,
//                       instagram: member.instagram,
//                     };

//                     const topPosition = 4 + index * 12; // top-4, top-16, top-28

//                     return (
//                       urls[platform] && (
//                         <motion.a
//                           key={platform}
//                           href={urls[platform]}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className={`absolute right-4 top-${topPosition} bg-white p-2 rounded-full shadow-lg opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 hover:opacity-100 hover:bg-black hover:text-white hover:scale-110`}
//                           whileHover={{ scale: 1.1 }}
//                         >
//                           {platform === "linkedIn" && (
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                             </svg>
//                           )}
//                           {platform === "facebook" && (
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                               <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.764v2.313h3.588l-.467 3.622h-3.121v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
//                             </svg>
//                           )}
//                           {platform === "instagram" && (
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.246 2.428.415a4.92 4.92 0 011.717 1.1 4.918 4.918 0 011.1 1.717c.169.458.359 1.258.415 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.97-.415 2.428a4.92 4.92 0 01-1.1 1.717 4.918 4.918 0 01-1.717 1.1c-.458.169-1.258.359-2.428.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.246-2.428-.415a4.902 4.902 0 01-2.817-2.817c-.169-.458-.359-1.258-.415-2.428-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.246-1.97.415-2.428a4.902 4.902 0 012.817-2.817c.458-.169 1.258-.359 2.428-.415 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.071-1.281.059-2.16.27-2.917.57a6.986 6.986 0 00-2.55 1.636 6.987 6.987 0 00-1.636 2.55c-.3.757-.511 1.636-.57 2.917-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.059 1.281.27 2.16.57 2.917a6.986 6.986 0 001.636 2.55 6.986 6.986 0 002.55 1.636c.757.3 1.636.511 2.917.57 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.281-.059 2.16-.27 2.917-.57a6.986 6.986 0 002.55-1.636 6.986 6.986 0 001.636-2.55c.3-.757.511-1.636.57-2.917.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.059-1.281-.27-2.16-.57-2.917a6.986 6.986 0 00-1.636-2.55 6.986 6.986 0 00-2.55-1.636c-.757-.3-1.636-.511-2.917-.57-1.28-.059-1.688-.071-4.947-.071zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
//                             </svg>
//                           )}
//                         </motion.a>
//                       )
//                     );
//                   })}
//                 </div>


//                 {/* Name and Role with Light Blue Background on Hover */}

//                 <div className="p-6 flex-grow relative group overflow-hidden">
//                   {/* Animated background */}
//                   <div className="absolute inset-0 bg-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-lg"></div>

//                   {/* Content on top */}
//                   <div className="relative z-10">
//                     <h3 className="text-xl font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-white">
//                       {member.fullName}
//                     </h3>
//                     <p className="text-[#298cf3] font-medium transition-colors duration-300 group-hover:text-gray-900">
//                       {member.role}
//                     </p>
//                   </div>
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
import { useEffect, useState, useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const BoardMembers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeReason, setActiveReason] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ✅ Close active card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeCard !== null) {
        const clickedOutside = cardRefs.current.every(
          (ref, index) => index !== activeCard && !ref?.contains(event.target)
        );

        if (clickedOutside) {
          setActiveCard(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [activeCard]);

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

  // ✅ Handle card touch with toggle behavior
  const handleCardTouch = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    // <section id="team-section" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
    //   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    // <section id="team-section" className="pt-0 pb-16 sm:pt-8 sm:pb-20 lg:pt-0 lg:pb-24 bg-gradient-to-b from-white to-gray-50">
    <section
      id="team-section"
      className="pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-10 lg:pb-24 bg-gradient-to-b from-white to-gray-50"
    >

      <div className="container mx-auto px-2 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Board of Directors</h2>
          <div className="w-20 h-1 bg-[#298cf3] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Guiding our vision with unparalleled expertise and strategic leadership
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {boardData.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative"
              ref={el => cardRefs.current[index] = el}
            >
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl h-full flex flex-col"
                onTouchStart={() => handleCardTouch(index)}
              >
                {/* Image Container */}
                {/* <div className="relative w-full lg:h-80 sm:h-52 overflow-hidden">
                 
                  <img
                    src={member.mainImage}
                    alt={member.fullName}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder-member.jpg";
                    }}
                  /> */}

                {/* <div className="relative w-full h-80 sm:h-72 lg:h-90 overflow-hidden"> */}
                <div className="relative w-full h-78 sm:h-60 md:h-72 lg:h-80 xl:h-90 overflow-hidden">
                  {/* Image */}
                  <img
                    src={member.mainImage}
                    alt={member.fullName}
                    // className="w-full h-full  transition-all duration-300 group-hover:scale-105"
                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/placeholder-member.jpg";
                    }}
                  />



                  {/* Animated light blue overlay - Works on both hover and touch */}
                  <div className={`absolute inset-0 bg-blue-400 opacity-20 origin-top scale-y-0 transition-transform duration-500 ease-out pointer-events-none
                    ${activeCard === index ? 'scale-y-100' : 'group-hover:scale-y-100'}`}
                  />

                  {/* Social Icons - Vertical at Top Right */}
                  <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-all duration-300
                    ${activeCard === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}
                  >
                    {["linkedIn"].map((platform, iconIndex) => {
                      const urls = {
                        linkedIn: member.linkedIn,
                        // facebook: member.facebook,
                        // instagram: member.instagram,
                      };

                      return (
                        urls[platform] && (
                          <motion.a
                            key={platform}
                            href={urls[platform]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:bg-black hover:text-white"
                            whileHover={{ scale: 1.1 }}
                            style={{
                              transitionDelay: `${iconIndex * 100}ms`
                            }}
                          >
                            {platform === "linkedIn" && (
                              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            )}
                            {/* {platform === "facebook" && (
                              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.764v2.313h3.588l-.467 3.622h-3.121v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
                              </svg>
                            )}
                            {platform === "instagram" && (
                              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.246 2.428.415a4.92 4.92 0 011.717 1.1 4.918 4.918 0 011.1 1.717c.169.458.359 1.258.415 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.97-.415 2.428a4.92 4.92 0 01-1.1 1.717 4.918 4.918 0 01-1.717 1.1c-.458.169-1.258.359-2.428.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.246-2.428-.415a4.902 4.902 0 01-2.817-2.817c-.169-.458-.359-1.258-.415-2.428-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.246-1.97.415-2.428a4.902 4.902 0 012.817-2.817c.458-.169 1.258-.359 2.428-.415 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.071-1.281.059-2.16.27-2.917.57a6.986 6.986 0 00-2.55 1.636 6.987 6.987 0 00-1.636 2.55c-.3.757-.511 1.636-.57 2.917-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.059 1.281.27 2.16.57 2.917a6.986 6.986 0 001.636 2.55 6.986 6.986 0 002.55 1.636c.757.3 1.636.511 2.917.57 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.281-.059 2.16-.27 2.917-.57a6.986 6.986 0 002.55-1.636 6.986 6.986 0 001.636-2.55c.3-.757.511-1.636.57-2.917.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.059-1.281-.27-2.16-.57-2.917a6.986 6.986 0 00-1.636-2.55 6.986 6.986 0 00-2.55-1.636c-.757-.3-1.636-.511-2.917-.57-1.28-.059-1.688-.071-4.947-.071zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                              </svg>
                            )} */}
                          </motion.a>
                        )
                      );
                    })}
                  </div>
                </div>

                {/* Name and Role with Light Blue Background on Hover */}
                <div className="p-4 sm:p-6 flex-grow relative group overflow-hidden">
                  {/* Animated background - Works on both hover and touch */}
                  <div className={`absolute inset-0 bg-blue-500 transform transition-transform duration-500 ease-in-out rounded-xs
                    ${activeCard === index ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}
                  />

                  {/* Content on top */}
                  <div className="relative z-10  ">
                    <h3 className={`text-lg sm:text-xl font-bold mb-1 transition-colors duration-300 flex justify-center items-center
                      ${activeCard === index ? 'text-white' : 'text-gray-900 group-hover:text-white'}`}
                    >
                      {member.fullName}
                    </h3>
                    <p className={`font-medium transition-colors duration-300 text-sm sm:text-base flex justify-center items-center
                      ${activeCard === index ? 'text-gray-100' : 'text-[#298cf3] group-hover:text-gray-100'}`}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BoardMembers;