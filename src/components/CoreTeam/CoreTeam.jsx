// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function TeamMembers() {
//   const [departmentboardData, setDepartmentBoardData] = useState([]);
//   const [roles, setRoles] = useState([]);
//   const [activeRole, setActiveRole] = useState("All");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [itemsToShow, setItemsToShow] = useState(3); // default

//   // ✅ Responsive items count
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setItemsToShow(1);
//       else if (window.innerWidth < 1024) setItemsToShow(2);
//       else setItemsToShow(3);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // ✅ Fetch data
//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/departmentboard")
//       .then((res) => {
//         const data = res.data.data || [];
//         setDepartmentBoardData(data);

//         const uniqueRoles = Array.from(new Set(data.map((m) => m.role)));
//         setRoles(uniqueRoles);

//         if (uniqueRoles.length > 0) setActiveRole(uniqueRoles[0]);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // ✅ Filtered data
//   const filteredMembers = departmentboardData.filter(
//     (m) => m.role === activeRole
//   );

//   // ✅ Auto-advance
//   useEffect(() => {
//     if (filteredMembers.length > 0) {
//       const interval = setInterval(() => {
//         nextSlide();
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [filteredMembers, currentIndex, itemsToShow]);

//   const nextSlide = () => {
//     setDirection(1);
//     if (currentIndex >= filteredMembers.length - itemsToShow) {
//       setCurrentIndex(0);
//     } else {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     if (currentIndex <= 0) {
//       setCurrentIndex(filteredMembers.length - itemsToShow);
//     } else {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   // ✅ Animation variants
//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//       scale: 0.95,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? "-100%" : "100%",
//       opacity: 0,
//       scale: 0.95,
//       transition: { duration: 0.5, ease: "easeIn" },
//     }),
//   };

// const getVisibleMembers = () => {
//   if (filteredMembers.length === 0) return [];

//   // ✅ If fewer members than slots, just return them all (no duplicates)
//   if (filteredMembers.length <= itemsToShow) {
//     return filteredMembers;
//   }

//   // ✅ Otherwise rotate through like a carousel
//   const visible = [];
//   for (let i = 0; i < itemsToShow; i++) {
//     const index = (currentIndex + i) % filteredMembers.length;
//     visible.push(filteredMembers[index]);
//   }
//   return visible;
// };

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
//             Meet Our Core Team
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
//             Our collective of passionate experts is dedicated to innovation,
//             collaboration, and delivering exceptional results.
//           </p>
//         </div>

//         {/* Role buttons */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {roles.map((role, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 setActiveRole(role);
//                 setCurrentIndex(0);
//               }}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
//                 activeRole === role
//                   ? "bg-blue-600 text-white shadow-md"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               {role}
//             </button>
//           ))}
//         </div>

//         {/* Carousel */}
//         <div className="relative overflow-hidden">
//           {/* Cards container */}
//           <div
//             className={`grid grid-cols-1 ${
//               itemsToShow >= 2 ? "md:grid-cols-2" : ""
//             } ${itemsToShow >= 3 ? "lg:grid-cols-3" : ""} gap-6`}
//           >
//             <AnimatePresence custom={direction} mode="wait" initial={false}>
//               {getVisibleMembers().map((member, index) => (
//                 <motion.div
//                   key={`${currentIndex}-${index}`}
//                   custom={direction}
//                   variants={slideVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-row cursor-pointer overflow-hidden h-60"
//                 >
//                   {/* Left: Image */}
//                   <div className="w-1/2 flex-shrink-0 relative">
//                     <img
//                       src={member.mainImage}
//                       alt={member.fullName}
//                       className="w-full h-full object-cover"
//                       onError={(e) => {
//                         e.currentTarget.onerror = null;
//                         e.currentTarget.src = "/images/placeholder-member.jpg";
//                       }}
//                     />
//                   </div>

//                   {/* Right: Content */}
//                   <div className="w-1/2 flex-1 bg-blue-400 p-6 flex flex-col justify-center text-white">
//                     <h3 className="text-xl font-bold">{member.fullName}</h3>
//                     <p className="text-sm text-gray-900 mb-3">{member.role}</p>
//                     <a
//                       href={member.socialLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center font-medium transition-colors text-white hover:text-blue-100"
//                     >
//                       <svg
//                         className="w-5 h-5 mr-2"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                       </svg>
//                       LinkedIn
//                     </a>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function TeamMembers() {
//   const [departmentboardData, setDepartmentBoardData] = useState([]);
//   const [roles, setRoles] = useState([]);
//   const [activeRole, setActiveRole] = useState("All");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(4);

//   // ✅ Enhanced responsive items count with more breakpoints
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 480) {
//         setItemsPerPage(1); // Mobile small
//       } else if (window.innerWidth < 640) {
//         setItemsPerPage(1.5); // Partial items for smooth scrolling
//       } else if (window.innerWidth < 768) {
//         setItemsPerPage(2); // Mobile large
//       } else if (window.innerWidth < 1024) {
//         setItemsPerPage(3); // Tablet
//       } else if (window.innerWidth < 1280) {
//         setItemsPerPage(4); // Desktop small
//       } else if (window.innerWidth < 1536) {
//         setItemsPerPage(5); // Desktop medium
//       } else {
//         setItemsPerPage(6); // Desktop large
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // ✅ Fetch data
//   useEffect(() => {
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
//   }, []);

//   // ✅ Filtered data

//   const filteredMembers =
//     activeRole === "All"
//       ? departmentboardData
//       : departmentboardData.filter(
//         (m) =>
//           m.role?.toLowerCase().trim() === activeRole.toLowerCase().trim()
//       );


//   const totalPages = Math.max(1, Math.ceil(filteredMembers.length / itemsPerPage));

//   // ✅ Auto-advance carousel
//   useEffect(() => {
//     if (filteredMembers.length > Math.ceil(itemsPerPage)) {
//       const interval = setInterval(() => {
//         nextSlide();
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [filteredMembers, currentIndex, itemsPerPage]);

//   const nextSlide = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;

//     setDirection(1);
//     setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;

//     setDirection(-1);
//     setCurrentIndex((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
//   };

//   // ✅ Get current page members with partial item support
//   const getCurrentPageMembers = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) {
//       return filteredMembers;
//     }

//     const startIndex = Math.floor(currentIndex * itemsPerPage);
//     return filteredMembers.slice(startIndex, startIndex + Math.ceil(itemsPerPage));
//   };

//   // ✅ Calculate visible count for display
//   const getVisibleCount = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) {
//       return filteredMembers.length;
//     }
//     const startIndex = Math.floor(currentIndex * itemsPerPage);
//     return Math.min(filteredMembers.length - startIndex, Math.ceil(itemsPerPage));
//   };

//   return (
//     <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Enhanced Heading */}
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
//             Passionate experts dedicated to innovation, collaboration, and delivering exceptional results that drive success.
//           </motion.p>
//         </div>

//         {/* Enhanced Role Tabs with Scrollable Container */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-10 md:mb-14"
//         >
//           <div className="flex justify-center">
//             <div className="relative w-full max-w-4xl">
//               {/* Scrollable container for mobile */}
//               <div className="overflow-x-auto pb-2 -mx-4 px-4">
//                 <div className="bg-gray-100 rounded-xl p-1.5 inline-flex min-w-max">
                 
//                   {roles.map((role, i) => (
//                     <button
//                       key={i}
//                       onClick={() => {
//                         setActiveRole(role);
//                         setCurrentIndex(0);
//                       }}
//                       className={`px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${activeRole === role
//                           ? "bg-white text-blue-600 shadow-lg shadow-blue-100"
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

//         {/* Enhanced Carousel Container */}
//         <div className="relative">
//           {/* Navigation Arrows - Enhanced for mobile */}
//           {filteredMembers.length > Math.ceil(itemsPerPage) && (
//             <>
//               <button
//                 onClick={prevSlide}
//                 className="absolute -left-2 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 border border-gray-100"
//                 aria-label="Previous slide"
//               >
//                 <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="absolute -right-2 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 border border-gray-100"
//                 aria-label="Next slide"
//               >
//                 <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </>
//           )}

//           {/* Team Members Container */}
//           <div className="relative overflow-hidden px-2 sm:px-0">
//             <AnimatePresence mode="wait" initial={false}>
//               <motion.div
//                 key={`${activeRole}-${currentIndex}`}
//                 initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="flex gap-4 sm:gap-6 lg:gap-8"
//                 style={{
//                   transform: `translateX(-${(currentIndex * 100) / (filteredMembers.length > Math.ceil(itemsPerPage) ? totalPages : 1)}%)`
//                 }}
//               >
//                 {getCurrentPageMembers().map((member, index) => (
//                   <motion.div
//                     key={`${member._id || index}-${currentIndex}`}
//                     whileHover={{ y: -5 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex-shrink-0"
//                     style={{
//                       width: `${100 / Math.min(itemsPerPage, filteredMembers.length)}%`,
//                       minWidth: `${100 / Math.min(itemsPerPage, filteredMembers.length)}%`
//                     }}
//                   >
//                     <div className="text-center group cursor-pointer bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
//                       {/* Enhanced Image Container */}
//                       <div className="mb-4 sm:mb-6 flex justify-center">
//                         <div className="relative">
//                           <div className="relative overflow-hidden rounded-2xl w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500">
//                             <img
//                               src={member.mainImage}
//                               alt={member.fullName}
//                               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                               onError={(e) => {
//                                 e.currentTarget.onerror = null;
//                                 e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='12' fill='%239ca3af'%3EPhoto%3C/text%3E%3C/svg%3E";
//                               }}
//                             />
//                           </div>

//                           {/* Hover gradient overlay */}
//                           <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                         </div>
//                       </div>

//                       {/* Enhanced Text Content */}
//                       <div className="space-y-2 sm:space-y-3">
//                         <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
//                           {member.fullName}
//                         </h3>
//                         <div className="bg-blue-50 rounded-full py-1 px-3 inline-block">
//                           <p className="text-blue-600 font-semibold text-sm sm:text-base">{member.role}</p>
//                         </div>

//                         {/* Optional description with fade effect */}
//                         {member.description && (
//                           <div className="relative">
//                             <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
//                             <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                               {member.description}
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Enhanced Pagination Dots */}
//           {filteredMembers.length > Math.ceil(itemsPerPage) && (
//             <div className="flex justify-center mt-8 space-x-2 sm:space-x-3">
//               {Array.from({ length: totalPages }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setDirection(index > currentIndex ? 1 : -1);
//                     setCurrentIndex(index);
//                   }}
//                   className={`rounded-full transition-all duration-300 ${currentIndex === index
//                     ? "bg-blue-600 scale-110"
//                     : "bg-gray-300 hover:bg-gray-400"
//                     }`}
//                   style={{
//                     width: currentIndex === index ? '24px' : '8px',
//                     height: '8px'
//                   }}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Enhanced Member Count */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-center mt-6 text-sm text-gray-500"
//           >
//             <span className="bg-gray-100 rounded-full px-3 py-1.5 inline-block">
//               Showing <span className="font-semibold text-gray-700">{getVisibleCount()}</span> of{" "}
//               <span className="font-semibold text-gray-700">{filteredMembers.length}</span> members
//               {activeRole !== "All" && (
//                 <span className="text-blue-600 ml-1">in {activeRole}</span>
//               )}
//             </span>
//           </motion.div>
//         </div>
//       </div>
//       <style jsx global>{`
   
//     .no-scrollbar::-webkit-scrollbar {
//       display: none; /* Chrome, Safari */
//     }
//     .no-scrollbar {
//       -ms-overflow-style: none;  /* IE/Edge */
//       scrollbar-width: none;     /* Firefox */
//     }
//   `}</style>
//     </section>

    
//   );
// }






// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function TeamMembers() {
//   const [departmentboardData, setDepartmentBoardData] = useState([]);
//   const [roles, setRoles] = useState([]);
//   const [activeRole, setActiveRole] = useState("All");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(4);

//   // ✅ Responsive item count
//   useEffect(() => {
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
//   }, []);

//   // ✅ Fetch data
//   useEffect(() => {
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
//   }, []);

//   // ✅ Filter
//   const filteredMembers =
//     activeRole === "All"
//       ? departmentboardData
//       : departmentboardData.filter(
//           (m) =>
//             m.role?.toLowerCase().trim() === activeRole.toLowerCase().trim()
//         );

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredMembers.length / itemsPerPage)
//   );

//   // ✅ Auto-advance
//   useEffect(() => {
//     if (filteredMembers.length > Math.ceil(itemsPerPage)) {
//       const interval = setInterval(() => {
//         nextSlide();
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [filteredMembers, currentIndex, itemsPerPage]);

//   const nextSlide = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;
//     setDirection(1);
//     setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
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

//   return (
//     <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
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
//             <div className="relative w-full max-w-4xl">
//               <div className="overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
//                 <div className="bg-gray-100 rounded-xl p-1.5 inline-flex min-w-max">
//                   {roles.map((role, i) => (
//                     <button
//                       key={i}
//                       onClick={() => {
//                         setActiveRole(role);
//                         setCurrentIndex(0);
//                       }}
//                       className={`px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${
//                         activeRole === role
//                           ? "bg-white text-blue-600 shadow-lg shadow-blue-100"
//                           : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
//                       }`}
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
//                 className="flex gap-6"
//               >
//                 {getCurrentPageMembers().map((member, index) => (
//                   <motion.div
//                     key={`${member._id || index}-${currentIndex}`}
//                     whileHover={{ y: -5 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex-shrink-0"
//                     style={{
//                       width: `${
//                         100 / Math.min(itemsPerPage, filteredMembers.length)
//                       }%`,
//                       minWidth: `${
//                         100 / Math.min(itemsPerPage, filteredMembers.length)
//                       }%`,
//                     }}
//                   >
//                     <div className="relative group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
//                       {/* Image */}
//                       <img
//                         src={member.mainImage}
//                         alt={member.fullName}
//                         className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
//                       />
//                       {/* Overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-blue-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-4">
//                         <h3 className="text-white text-lg font-bold mb-1">
//                           {member.fullName}
//                         </h3>
//                         <p className="text-white/80 text-sm mb-3">
//                           {member.role}
//                         </p>
//                         <div className="flex space-x-3">
//                           {member.facebook && (
//                             <a
//                               href={member.facebook}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white rounded-full transition"
//                             >
//                               f
//                             </a>
//                           )}
//                           {member.socialLink && (
//                             <a
//                               href={member.socialLink}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white rounded-full transition"
//                             >
//                               in
//                             </a>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Pagination */}
//           {filteredMembers.length > Math.ceil(itemsPerPage) && (
//             <div className="flex justify-center mt-6 space-x-2">
//               {Array.from({ length: totalPages }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setDirection(index > currentIndex ? 1 : -1);
//                     setCurrentIndex(index);
//                   }}
//                   className={`rounded-full transition-all duration-300 ${
//                     currentIndex === index
//                       ? "bg-blue-600 scale-110"
//                       : "bg-gray-300 hover:bg-gray-400"
//                   }`}
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

//       {/* Hide Scrollbar */}
//       <style jsx global>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// }



// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function TeamMembers() {
//   const [departmentboardData, setDepartmentBoardData] = useState([]);
//   const [roles, setRoles] = useState([]);
//   const [activeRole, setActiveRole] = useState("All");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(4);

//   // ✅ Responsive item count
//   useEffect(() => {
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
//   }, []);

//   // ✅ Fetch data
//   useEffect(() => {
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
//   }, []);

//   // ✅ Filter
//   const filteredMembers =
//     activeRole === "All"
//       ? departmentboardData
//       : departmentboardData.filter(
//           (m) =>
//             m.role?.toLowerCase().trim() === activeRole.toLowerCase().trim()
//         );

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredMembers.length / itemsPerPage)
//   );

//   // ✅ Auto-advance
//   useEffect(() => {
//     if (filteredMembers.length > Math.ceil(itemsPerPage)) {
//       const interval = setInterval(() => {
//         nextSlide();
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [filteredMembers, currentIndex, itemsPerPage]);

//   const nextSlide = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;
//     setDirection(1);
//     setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
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

//   return (
//     <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
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
//             <div className="relative w-full max-w-4xl">
//               <div className="overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
//                 <div className="bg-gray-100 rounded-xl p-1.5 inline-flex min-w-max">
//                   {roles.map((role, i) => (
//                     <button
//                       key={i}
//                       onClick={() => {
//                         setActiveRole(role);
//                         setCurrentIndex(0);
//                       }}
//                       className={`px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${
//                         activeRole === role
//                           ? "bg-white text-blue-600 shadow-lg shadow-blue-100"
//                           : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
//                       }`}
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
//                 className="flex gap-6"
//               >
//                 {getCurrentPageMembers().map((member, index) => (
//                   <motion.div
//                     key={`${member._id || index}-${currentIndex}`}
//                     whileHover={{ y: -5 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex-shrink-0"
//                     style={{
//                       width: `${
//                         100 / Math.min(itemsPerPage, filteredMembers.length)
//                       }%`,
//                       minWidth: `${
//                         100 / Math.min(itemsPerPage, filteredMembers.length)
//                       }%`,
//                     }}
//                   >
//                     {/* Clean Minimal Card Design */}
//                     <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
//                       {/* Image Container */}
//                       <div className="relative w-full h-64 overflow-hidden">
//                         <img
//                           src={member.mainImage}
//                           alt={member.fullName}
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
                        
//                         {/* Social Icons - Bottom to Top Animation */}
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="flex space-x-3 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
//                             {/* Instagram */}
//                             {member.instagram && (
//                               <motion.a
//                                 href={member.instagram}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-white text-pink-600 p-3 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110"
//                                 whileHover={{ scale: 1.1 }}
//                               >
//                                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                                 </svg>
//                               </motion.a>
//                             )}

//                             {/* Facebook */}
//                             {member.facebook && (
//                               <motion.a
//                                 href={member.facebook}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
//                                 whileHover={{ scale: 1.1 }}
//                               >
//                                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                                 </svg>
//                               </motion.a>
//                             )}

//                             {/* LinkedIn */}
//                             {member.socialLink && (
//                               <motion.a
//                                 href={member.socialLink}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-white text-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
//                                 whileHover={{ scale: 1.1 }}
//                               >
//                                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                                 </svg>
//                               </motion.a>
//                             )}
//                           </div>
//                         </div>

//                         {/* Smooth Top-to-Bottom Blue Overlay */}
//                         <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 origin-top scale-y-0 group-hover:scale-y-100 transition-all duration-500 ease-out pointer-events-none"></div>
//                       </div>

//                       {/* Text Content - Clean & Minimal */}
//                       <div className="p-6 text-center">
//                         <h3 className="text-lg font-semibold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-blue-600">
//                           {member.fullName}
//                         </h3>
//                         <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
//                           {member.role}
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Pagination */}
//           {filteredMembers.length > Math.ceil(itemsPerPage) && (
//             <div className="flex justify-center mt-6 space-x-2">
//               {Array.from({ length: totalPages }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setDirection(index > currentIndex ? 1 : -1);
//                     setCurrentIndex(index);
//                   }}
//                   className={`rounded-full transition-all duration-300 ${
//                     currentIndex === index
//                       ? "bg-blue-600 scale-110"
//                       : "bg-gray-300 hover:bg-gray-400"
//                   }`}
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

//       {/* Hide Scrollbar */}
//       <style jsx global>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// }




// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function TeamMembers() {
//   const [departmentboardData, setDepartmentBoardData] = useState([]);
//   const [roles, setRoles] = useState([]);
//   const [activeRole, setActiveRole] = useState("All");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(4);
//   const [activeCard, setActiveCard] = useState(null);

//   // ✅ Responsive item count
//   useEffect(() => {
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
//   }, []);

//   // ✅ Fetch data
//   useEffect(() => {
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
//   }, []);

//   // ✅ Filter
//   const filteredMembers =
//     activeRole === "All"
//       ? departmentboardData
//       : departmentboardData.filter(
//           (m) =>
//             m.role?.toLowerCase().trim() === activeRole.toLowerCase().trim()
//         );

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filteredMembers.length / itemsPerPage)
//   );

//   // ✅ Auto-advance
//   useEffect(() => {
//     if (filteredMembers.length > Math.ceil(itemsPerPage)) {
//       const interval = setInterval(() => {
//         nextSlide();
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [filteredMembers, currentIndex, itemsPerPage]);

//   const nextSlide = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;
//     setDirection(1);
//     setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
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

//   return (
//     <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
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

//         {/* Role Tabs - Mobile Friendly */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-10 md:mb-14"
//         >
//           <div className="flex justify-center">
//             <div className="relative w-full max-w-6xl">
//               <div className="overflow-x-auto no-scrollbar pb-3 -mx-4 px-4">
//                 <div className="bg-gray-100 rounded-xl p-1.5 inline-flex min-w-max space-x-1">
//                   {roles.map((role, i) => (
//                     <button
//                       key={i}
//                       onClick={() => {
//                         setActiveRole(role);
//                         setCurrentIndex(0);
//                       }}
//                       className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap min-w-max ${
//                         activeRole === role
//                           ? "bg-white text-blue-600 shadow-md shadow-blue-100"
//                           : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
//                       }`}
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
//                       width: `${
//                         100 / Math.min(itemsPerPage, filteredMembers.length)
//                       }%`,
//                       minWidth: `${
//                         100 / Math.min(itemsPerPage, filteredMembers.length)
//                       }%`,
//                     }}
//                   >
//                     {/* Clean Minimal Card Design */}
//                     <div 
//                       className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
//                       onTouchStart={() => setActiveCard(activeCard === index ? null : index)}
//                     >
//                       {/* Image Container */}
//                       <div className="relative w-full h-56 sm:h-64 overflow-hidden">
//                         <img
//                           src={member.mainImage}
//                           alt={member.fullName}
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
                        
//                         {/* Social Icons - Bottom to Top Animation */}
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className={`flex space-x-2 sm:space-x-3 transition-all duration-500 delay-200
//                             ${activeCard === index 
//                               ? 'translate-y-0 opacity-100' 
//                               : 'translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
//                             }`}
//                           >
                            // {/* Instagram */}
                            // {member.instagram && (
                            //   <motion.a
                            //     href={member.instagram}
                            //     target="_blank"
                            //     rel="noopener noreferrer"
                            //     className="bg-white text-pink-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                            //     whileHover={{ scale: 1.1 }}
                            //   >
                            //     <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            //       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            //     </svg>
                            //   </motion.a>
                            // )}

                            // {/* Facebook */}
                            // {member.facebook && (
                            //   <motion.a
                            //     href={member.facebook}
                            //     target="_blank"
                            //     rel="noopener noreferrer"
                            //     className="bg-white text-blue-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                            //     whileHover={{ scale: 1.1 }}
                            //   >
                            //     <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            //       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            //     </svg>
                            //   </motion.a>
                            // )}

                            // {/* LinkedIn */}
                            // {member.socialLink && (
                            //   <motion.a
                            //     href={member.socialLink}
                            //     target="_blank"
                            //     rel="noopener noreferrer"
                            //     className="bg-white text-blue-500 p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                            //     whileHover={{ scale: 1.1 }}
                            //   >
                            //     <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            //       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            //     </svg>
                            //   </motion.a>
                            // )}
//                           </div>
//                         </div>

//                         {/* Smooth Top-to-Bottom Blue Overlay */}
//                         <div className={`absolute inset-0 bg-blue-400 origin-top transition-all duration-500 ease-out pointer-events-none
//                           ${activeCard === index 
//                             ? 'opacity-10 scale-y-100' 
//                             : 'opacity-0 scale-y-0 group-hover:opacity-10 group-hover:scale-y-100'
//                           }`}
//                         />
//                       </div>

//                       {/* Text Content - Clean & Minimal */}
//                       <div className="p-4 sm:p-6 text-center">
//                         <h3 className={`text-base sm:text-lg font-semibold mb-1 transition-colors duration-300
//                           ${activeCard === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}
//                         >
//                           {member.fullName}
//                         </h3>
//                         <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">
//                           {member.role}
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Pagination */}
//           {filteredMembers.length > Math.ceil(itemsPerPage) && (
//             <div className="flex justify-center mt-6 space-x-2">
//               {Array.from({ length: totalPages }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setDirection(index > currentIndex ? 1 : -1);
//                     setCurrentIndex(index);
//                   }}
//                   className={`rounded-full transition-all duration-300 ${
//                     currentIndex === index
//                       ? "bg-blue-600 scale-110"
//                       : "bg-gray-300 hover:bg-gray-400"
//                   }`}
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

//       {/* Hide Scrollbar */}
//       <style jsx global>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// }








  import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function TeamMembers() {
  const [departmentboardData, setDepartmentBoardData] = useState([]);
  const [roles, setRoles] = useState([]);
  const [activeRole, setActiveRole] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default value that matches server
  const [activeCard, setActiveCard] = useState(null);
  const [isClient, setIsClient] = useState(false); // Track client-side rendering
  const cardRefs = useRef([]);

  // ✅ Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ Close active card when clicking outside
  useEffect(() => {
    if (!isClient) return; // Only run on client

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

  // ✅ Responsive item count - Only run on client
  useEffect(() => {
    if (!isClient) return; // Only run on client

    const handleResize = () => {
      if (window.innerWidth < 480) setItemsPerPage(1);
      else if (window.innerWidth < 640) setItemsPerPage(1.5);
      else if (window.innerWidth < 768) setItemsPerPage(2);
      else if (window.innerWidth < 1024) setItemsPerPage(3);
      else if (window.innerWidth < 1280) setItemsPerPage(4);
      else if (window.innerWidth < 1536) setItemsPerPage(5);
      else setItemsPerPage(6);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  // ✅ Fetch data
  useEffect(() => {
    if (!isClient) return; // Only run on client

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

  const totalPages = Math.max(
    1,
    Math.ceil(filteredMembers.length / itemsPerPage)
  );

  // ✅ Auto-advance - Only run on client
  useEffect(() => {
    if (!isClient) return; // Only run on client
    if (filteredMembers.length > Math.ceil(itemsPerPage)) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [filteredMembers, currentIndex, itemsPerPage, isClient]);

  const nextSlide = () => {
    if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
    setActiveCard(null);
  };

  const prevSlide = () => {
    if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
    setActiveCard(null);
  };

  const getCurrentPageMembers = () => {
    if (filteredMembers.length <= Math.ceil(itemsPerPage)) {
      return filteredMembers;
    }
    const startIndex = Math.floor(currentIndex * itemsPerPage);
    return filteredMembers.slice(
      startIndex,
      startIndex + Math.ceil(itemsPerPage)
    );
  };

  const getVisibleCount = () => {
    if (filteredMembers.length <= Math.ceil(itemsPerPage)) {
      return filteredMembers.length;
    }
    const startIndex = Math.floor(currentIndex * itemsPerPage);
    return Math.min(
      filteredMembers.length - startIndex,
      Math.ceil(itemsPerPage)
    );
  };

  // ✅ Handle card touch with toggle behavior
  const handleCardTouch = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  // Don't render carousel content until client-side to avoid hydration mismatch
  if (!isClient) {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Static content that matches server render */}
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
        {/* Rest of your component remains the same */}
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
              <div className="overflow-x-auto no-scrollbar pb-3 -mx-4 px-4">
                <div className="bg-gray-100 rounded-xl p-1.5 inline-flex min-w-max space-x-1">
                  {roles.map((role, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveRole(role);
                        setCurrentIndex(0);
                        setActiveCard(null);
                      }}
                      className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap min-w-max ${
                        activeRole === role
                          ? "bg-white text-blue-600 shadow-md shadow-blue-100"
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

        {/* Carousel */}
        <div className="relative">
          {filteredMembers.length > Math.ceil(itemsPerPage) && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-2 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 sm:p-3 shadow-md hover:scale-110 transition"
              >
                ◀
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-2 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 sm:p-3 shadow-md hover:scale-110 transition"
              >
                ▶
              </button>
            </>
          )}

          <div className="relative overflow-hidden px-2 sm:px-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activeRole}-${currentIndex}`}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex gap-4 sm:gap-6"
              >
                {getCurrentPageMembers().map((member, index) => (
                  <motion.div
                    key={`${member._id || index}-${currentIndex}`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                    style={{
                      width: `${
                        100 / Math.min(itemsPerPage, filteredMembers.length)
                      }%`,
                      minWidth: `${
                        100 / Math.min(itemsPerPage, filteredMembers.length)
                      }%`,
                    }}
                    ref={el => cardRefs.current[index] = el}
                  >
                    {/* Your card content remains the same */}
                    <div 
                      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                      onTouchStart={() => handleCardTouch(index)}
                    >
                      {/* Image Container */}
                      <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                        <img
                          src={member.mainImage}
                          alt={member.fullName}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Social Icons */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`flex space-x-2 sm:space-x-3 transition-all duration-500 delay-200
                            ${activeCard === index 
                              ? 'translate-y-0 opacity-100' 
                              : 'translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                            }`}
                          >
                            {/* Icons remain the same */}
                            {member.instagram && (
                              <motion.a
                                href={member.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-pink-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                                whileHover={{ scale: 1.1 }}
                              >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                              </motion.a>
                            )}
                            {/* Other icons... */}
                            
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
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
                        <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination and count remain the same */}
          

  {/* Pagination */}
          {filteredMembers.length > Math.ceil(itemsPerPage) && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                    setActiveCard(null); // Reset active card when paginating
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-blue-600 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  style={{
                    width: currentIndex === index ? "24px" : "8px",
                    height: "8px",
                  }}
                />
              ))}
            </div>
          )}

          {/* Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6 text-sm text-gray-500"
          >
            <span className="bg-gray-100 rounded-full px-3 py-1.5 inline-block">
              Showing{" "}
              <span className="font-semibold">
                {getVisibleCount()}
              </span>{" "}
              of {filteredMembers.length} members
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