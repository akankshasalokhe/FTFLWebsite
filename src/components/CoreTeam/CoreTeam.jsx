// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState, useRef } from "react";

// export default function TeamMembers() {
//   const [departmentboardData, setDepartmentBoardData] = useState([]);
//   const [roles, setRoles] = useState([]);
//   const [activeRole, setActiveRole] = useState("All");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(4); // Default value that matches server
//   const [activeCard, setActiveCard] = useState(null);
//   const [isClient, setIsClient] = useState(false); // Track client-side rendering
//   const cardRefs = useRef([]);

//   // ✅ Set client-side flag
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // ✅ Close active card when clicking outside
//   useEffect(() => {
//     if (!isClient) return; // Only run on client

//     const handleClickOutside = (event) => {
//       if (activeCard !== null) {
//         const clickedOutside = cardRefs.current.every(
//           (ref, index) => index !== activeCard && !ref?.contains(event.target)
//         );

//         if (clickedOutside) {
//           setActiveCard(null);
//         }
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     document.addEventListener('touchstart', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('touchstart', handleClickOutside);
//     };
//   }, [activeCard, isClient]);

//   // ✅ Responsive item count - Only run on client
//   useEffect(() => {
//     if (!isClient) return; // Only run on client

//     const handleResize = () => {
//       if (window.innerWidth < 480) setItemsPerPage(1);
//       else if (window.innerWidth < 640) setItemsPerPage(1.5);
//       else if (window.innerWidth < 768) setItemsPerPage(2);
//       else if (window.innerWidth < 1024) setItemsPerPage(3);
//       else if (window.innerWidth < 1280) setItemsPerPage(4);
//       else if (window.innerWidth < 1536) setItemsPerPage(5);
//       else setItemsPerPage(6);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [isClient]);

//   // ✅ Fetch data
//   useEffect(() => {
//     if (!isClient) return; // Only run on client

//     axios
//       .get("https://landing-page-yclw.vercel.app/api/departmentboard")
//       .then((res) => {
//         const data = res.data.data || [];
//         setDepartmentBoardData(data);

//         const uniqueRoles = Array.from(new Set(data.map((m) => m.role)));
//         setRoles(["All", ...uniqueRoles]);
//         setActiveRole("All");
//       })
//       .catch((err) => console.error(err));
//   }, [isClient]);

//   // ✅ Filter
//   const filteredMembers =
//     activeRole === "All"
//       ? departmentboardData
//       : departmentboardData.filter(
//         (m) =>
//           m.role?.toLowerCase().trim() === activeRole.toLowerCase().trim()
//       );

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredMembers.length / itemsPerPage)
//   );

//   // ✅ Auto-advance - Only run on client
//   useEffect(() => {
//     if (!isClient) return; // Only run on client
//     if (filteredMembers.length > Math.ceil(itemsPerPage)) {
//       const interval = setInterval(() => {
//         nextSlide();
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [filteredMembers, currentIndex, itemsPerPage, isClient]);

//   const nextSlide = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;
//     setDirection(1);
//     setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
//     setActiveCard(null);
//   };

//   const prevSlide = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
//     setActiveCard(null);
//   };

//   const getCurrentPageMembers = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) {
//       return filteredMembers;
//     }
//     const startIndex = Math.floor(currentIndex * itemsPerPage);
//     return filteredMembers.slice(
//       startIndex,
//       startIndex + Math.ceil(itemsPerPage)
//     );
//   };

//   const getVisibleCount = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) {
//       return filteredMembers.length;
//     }
//     const startIndex = Math.floor(currentIndex * itemsPerPage);
//     return Math.min(
//       filteredMembers.length - startIndex,
//       Math.ceil(itemsPerPage)
//     );
//   };

//   // ✅ Handle card touch with toggle behavior
//   const handleCardTouch = (index) => {
//     setActiveCard(activeCard === index ? null : index);
//   };

//   // Don't render carousel content until client-side to avoid hydration mismatch
//   if (!isClient) {
//     return (
//       <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Static content that matches server render */}
//           <div className="text-center mb-10 md:mb-16">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
//               Meet Our <span className="text-blue-600">Dream Team</span>
//             </h2>
//             <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//               Passionate experts dedicated to innovation, collaboration, and
//               delivering exceptional results that drive success.
//             </p>
//           </div>

//           {/* Loading skeleton */}
//           <div className="flex justify-center gap-4">
//             {[...Array(4)].map((_, i) => (
//               <div key={i} className="bg-gray-200 rounded-lg w-1/4 h-64 animate-pulse"></div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Rest of your component remains the same */}
//         <div className="text-center mb-10 md:mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
//           >
//             Meet Our <span className="text-blue-600">Dream Team</span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
//           >
//             Passionate experts dedicated to innovation, collaboration, and
//             delivering exceptional results that drive success.
//           </motion.p>
//         </div>

//         {/* Role Tabs */}
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-10 md:mb-14"
//         >
//           <div className="flex justify-center">
//             <div className="relative w-full max-w-6xl">
//               {/* Scrollable row on mobile, centered on larger screens */}
//               <div className="flex justify-center">
//                 <div className="bg-gray-100 rounded-xl p-1.5 flex space-x-2 overflow-x-auto no-scrollbar">
//                   {roles.map((role, i) => (
//                     <button
//                       key={i}
//                       onClick={() => {
//                         setActiveRole(role);
//                         setCurrentIndex(0);
//                         setActiveCard(null);
//                       }}
//                       className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeRole === role
//                           ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white shadow-md shadow-blue-100"
//                           : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
//                         }`}
//                     >
//                       {role}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Carousel */}
//         <div className="relative">
//           {filteredMembers.length > Math.ceil(itemsPerPage) && (
//             <>
//               <button
//                 onClick={prevSlide}
//                 className="absolute -left-2 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 sm:p-3 shadow-md hover:scale-110 transition"
//               >
//                 ◀
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="absolute -right-2 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 sm:p-3 shadow-md hover:scale-110 transition"
//               >
//                 ▶
//               </button>
//             </>
//           )}

//           <div className="relative overflow-hidden px-2 sm:px-0">
//             <AnimatePresence mode="wait" initial={false}>
//               <motion.div
//                 key={`${activeRole}-${currentIndex}`}
//                 initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="flex gap-4 sm:gap-6"
//               >
//                 {getCurrentPageMembers().map((member, index) => (
//                   <motion.div
//                     key={`${member._id || index}-${currentIndex}`}
//                     whileHover={{ y: -5 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex-shrink-0"
//                     style={{
//                       width: `${100 / Math.min(itemsPerPage, filteredMembers.length)
//                         }%`,
//                       minWidth: `${100 / Math.min(itemsPerPage, filteredMembers.length)
//                         }%`,
//                     }}
//                     ref={el => cardRefs.current[index] = el}
//                   >
//                     {/* Your card content remains the same */}
//                     <div
//                       className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
//                       onTouchStart={() => handleCardTouch(index)}
//                     >
//                       {/* Image Container */}
//                       {/* <div className="relative w-full h-56 sm:h-64 overflow-hidden">
//                         <img
//                           src={member.mainImage}
//                           alt={member.fullName}
//                           // className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-105"
//                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                         /> */}
//                       <div className="relative w-full h-56 sm:h-64 overflow-hidden flex items-center justify-center bg-white">
//                         <img
//                           src={member.mainImage}
//                           alt={member.fullName}
//                           className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                         />



//                         {/* Social Icons */}
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className={`flex space-x-2 sm:space-x-3 transition-all duration-500 delay-200
//                             ${activeCard === index
//                               ? 'translate-y-0 opacity-100'
//                               : 'translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
//                             }`}
//                           >
//                             {/* Icons remain the same */}
//                             {member.instagram && (
//                               <motion.a
//                                 href={member.instagram}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-white text-pink-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110"
//                                 whileHover={{ scale: 1.1 }}
//                               >
//                                 <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
//                                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                                 </svg>
//                               </motion.a>
//                             )}


//                             {/* Facebook */}
//                             {member.facebook && (
//                               <motion.a
//                                 href={member.facebook}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-white text-blue-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
//                                 whileHover={{ scale: 1.1 }}
//                               >
//                                 <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
//                                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                                 </svg>
//                               </motion.a>
//                             )}


//                             {/* LinkedIn */}
//                             {member.linkedIn && (
//                               <motion.a
//                                 href={member.linkedIn}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-white text-blue-500 p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
//                                 whileHover={{ scale: 1.1 }}
//                               >
//                                 <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
//                                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                                 </svg>
//                               </motion.a>
//                             )}

//                           </div>
//                         </div>

//                         {/* Blue Overlay */}
//                         <div className={`absolute inset-0 bg-blue-400 origin-top transition-all duration-500 ease-out pointer-events-none
//                           ${activeCard === index
//                             ? 'opacity-10 scale-y-100'
//                             : 'opacity-0 scale-y-0 group-hover:opacity-10 group-hover:scale-y-100'
//                           }`}
//                         />
//                       </div>

//                       {/* Text Content */}
//                       <div className="p-4 sm:p-6 text-center">
//                         <h3 className={`text-base sm:text-lg font-semibold mb-1 transition-colors duration-300
//                           ${activeCard === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}
//                         >
//                           {member.fullName}
//                         </h3>
//                         {/* <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">
//                           {member.role}
//                         </p> */}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Pagination and count remain the same */}


//           {/* Pagination */}
//           {filteredMembers.length > Math.ceil(itemsPerPage) && (
//             <div className="flex justify-center mt-6 space-x-2">
//               {Array.from({ length: totalPages }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setDirection(index > currentIndex ? 1 : -1);
//                     setCurrentIndex(index);
//                     setActiveCard(null); // Reset active card when paginating
//                   }}
//                   className={`rounded-full transition-all duration-300 ${currentIndex === index
//                     ? "bg-blue-600 scale-110"
//                     : "bg-gray-300 hover:bg-gray-400"
//                     }`}
//                   style={{
//                     width: currentIndex === index ? "24px" : "8px",
//                     height: "8px",
//                   }}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Count */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center mt-6 text-sm text-gray-500"
//           >
//             <span className="bg-gray-100 rounded-full px-3 py-1.5 inline-block">
//               Showing{" "}
//               <span className="font-semibold">
//                 {getVisibleCount()}
//               </span>{" "}
//               of {filteredMembers.length} members
//               {activeRole !== "All" && (
//                 <span className="text-blue-600 ml-1">in {activeRole}</span>
//               )}
//             </span>
//           </motion.div>


//         </div>
//       </div>
//     </section>
//   );
// }




import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function TeamMembers() {
  const [departmentboardData, setDepartmentBoardData] = useState([]);
  const [roles, setRoles] = useState([]);
  const [activeRole, setActiveRole] = useState("All");
  const [activeCard, setActiveCard] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const cardRefs = useRef([]);

  // ✅ Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ Close active card when clicking outside
  useEffect(() => {
    if (!isClient) return;

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
  }, [activeCard, isClient]);

  // ✅ Fetch data
  useEffect(() => {
    if (!isClient) return;

    axios
      .get("https://landing-page-yclw.vercel.app/api/departmentboard")
      .then((res) => {
        const data = res.data.data || [];
        setDepartmentBoardData(data);

        const uniqueRoles = Array.from(new Set(data.map((m) => m.role)));
        setRoles(["All", ...uniqueRoles]);
        setActiveRole("All");
      })
      .catch((err) => console.error(err));
  }, [isClient]);

  // ✅ Filter
  const filteredMembers =
    activeRole === "All"
      ? departmentboardData
      : departmentboardData.filter(
        (m) =>
          m.role?.toLowerCase().trim() === activeRole.toLowerCase().trim()
      );

  // ✅ Handle card touch with toggle behavior
  const handleCardTouch = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  // Don't render content until client-side to avoid hydration mismatch
  if (!isClient) {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Meet Our <span className="text-blue-600">Dream Team</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate experts dedicated to innovation, collaboration, and
              delivering exceptional results that drive success.
            </p>
          </div>

          {/* Loading skeleton */}
          <div className="flex justify-center gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg w-1/4 h-64 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
          >
            Meet Our <span className="text-blue-600">Dream Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate experts dedicated to innovation, collaboration, and
            delivering exceptional results that drive success.
          </motion.p>
        </div>

        {/* Role Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <div className="flex justify-center">
            <div className="relative w-full max-w-6xl">
              <div className="flex justify-center">
                <div className="bg-gray-100 rounded-xl p-1.5 flex space-x-2 overflow-x-auto no-scrollbar">
                  {roles.map((role, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveRole(role);
                        setActiveCard(null);
                      }}
                      className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeRole === role
                          ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white shadow-md shadow-blue-100"
                          : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                        }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Members Grid - No Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                ref={el => cardRefs.current[index] = el}
              >
                {/* Image Container */}
                <div 
                  className="relative w-full h-56 sm:h-64 overflow-hidden flex items-center justify-center bg-white"
                  onTouchStart={() => handleCardTouch(index)}
                >
                  <img
                    src={member.mainImage}
                    alt={member.fullName}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Social Icons */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`flex space-x-2 sm:space-x-3 transition-all duration-500 delay-200
                      ${activeCard === index
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                      }`}
                    >
                      {/* Instagram */}
                      {member.instagram && (
                        <motion.a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-pink-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                          whileHover={{ scale: 1.1 }}
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </motion.a>
                      )}

                      {/* Facebook */}
                      {member.facebook && (
                        <motion.a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-blue-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                          whileHover={{ scale: 1.1 }}
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </motion.a>
                      )}

                      {/* LinkedIn */}
                      {member.linkedIn && (
                        <motion.a
                          href={member.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-blue-500 p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                          whileHover={{ scale: 1.1 }}
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Blue Overlay */}
                  <div className={`absolute inset-0 bg-blue-400 origin-top transition-all duration-500 ease-out pointer-events-none
                    ${activeCard === index
                      ? 'opacity-10 scale-y-100'
                      : 'opacity-0 scale-y-0 group-hover:opacity-10 group-hover:scale-y-100'
                    }`}
                  />
                </div>

                {/* Text Content */}
                <div className="p-4 sm:p-6 text-center">
                  <h3 className={`text-base sm:text-lg font-semibold mb-1 transition-colors duration-300
                    ${activeCard === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}
                  >
                    {member.fullName}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6 text-sm text-gray-500"
          >
            <span className="bg-gray-100 rounded-full px-3 py-1.5 inline-block">
              Showing{" "}
              <span className="font-semibold">
                {filteredMembers.length}
              </span>{" "}
              members
              {activeRole !== "All" && (
                <span className="text-blue-600 ml-1">in {activeRole}</span>
              )}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}