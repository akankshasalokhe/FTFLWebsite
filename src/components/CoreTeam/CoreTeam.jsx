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







import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function TeamMembers() {
  const [departmentboardData, setDepartmentBoardData] = useState([]);
  const [roles, setRoles] = useState([]);
  const [activeRole, setActiveRole] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // ✅ Enhanced responsive items count with more breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setItemsPerPage(1); // Mobile small
      } else if (window.innerWidth < 640) {
        setItemsPerPage(1.5); // Partial items for smooth scrolling
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2); // Mobile large
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3); // Tablet
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(4); // Desktop small
      } else if (window.innerWidth < 1536) {
        setItemsPerPage(5); // Desktop medium
      } else {
        setItemsPerPage(6); // Desktop large
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Fetch data
  useEffect(() => {
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
  }, []);

  // ✅ Filtered data

  const filteredMembers =
    activeRole === "All"
      ? departmentboardData
      : departmentboardData.filter(
        (m) =>
          m.role?.toLowerCase().trim() === activeRole.toLowerCase().trim()
      );


  const totalPages = Math.max(1, Math.ceil(filteredMembers.length / itemsPerPage));

  // ✅ Auto-advance carousel
  useEffect(() => {
    if (filteredMembers.length > Math.ceil(itemsPerPage)) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [filteredMembers, currentIndex, itemsPerPage]);

  const nextSlide = () => {
    if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;

    setDirection(1);
    setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (filteredMembers.length <= Math.ceil(itemsPerPage)) return;

    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
  };

  // ✅ Get current page members with partial item support
  const getCurrentPageMembers = () => {
    if (filteredMembers.length <= Math.ceil(itemsPerPage)) {
      return filteredMembers;
    }

    const startIndex = Math.floor(currentIndex * itemsPerPage);
    return filteredMembers.slice(startIndex, startIndex + Math.ceil(itemsPerPage));
  };

  // ✅ Calculate visible count for display
  const getVisibleCount = () => {
    if (filteredMembers.length <= Math.ceil(itemsPerPage)) {
      return filteredMembers.length;
    }
    const startIndex = Math.floor(currentIndex * itemsPerPage);
    return Math.min(filteredMembers.length - startIndex, Math.ceil(itemsPerPage));
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Heading */}
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
            Passionate experts dedicated to innovation, collaboration, and delivering exceptional results that drive success.
          </motion.p>
        </div>

        {/* Enhanced Role Tabs with Scrollable Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              {/* Scrollable container for mobile */}
              <div className="overflow-x-auto pb-2 -mx-4 px-4">
                <div className="bg-gray-100 rounded-xl p-1.5 inline-flex min-w-max">
                 
                  {roles.map((role, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveRole(role);
                        setCurrentIndex(0);
                      }}
                      className={`px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${activeRole === role
                          ? "bg-white text-blue-600 shadow-lg shadow-blue-100"
                          : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                        }`}
                    >
                      {role}
                    </button>
                  ))}

                </div>
              </div>

              {/* <div className="overflow-x-auto no-scrollbar pb-2">
                <div className="bg-gray-100 rounded-xl p-1.5 flex space-x-2 w-max">
                  {roles.map((role, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveRole(role);
                        setCurrentIndex(0);
                      }}
                      className={`px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${activeRole === role
                          ? "bg-white text-blue-600 shadow-lg shadow-blue-100"
                          : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                        }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div> */}


            </div>
          </div>
        </motion.div>

        {/* Enhanced Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Enhanced for mobile */}
          {filteredMembers.length > Math.ceil(itemsPerPage) && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-2 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 border border-gray-100"
                aria-label="Previous slide"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-2 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 border border-gray-100"
                aria-label="Next slide"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Team Members Container */}
          <div className="relative overflow-hidden px-2 sm:px-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activeRole}-${currentIndex}`}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex gap-4 sm:gap-6 lg:gap-8"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / (filteredMembers.length > Math.ceil(itemsPerPage) ? totalPages : 1)}%)`
                }}
              >
                {getCurrentPageMembers().map((member, index) => (
                  <motion.div
                    key={`${member._id || index}-${currentIndex}`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                    style={{
                      width: `${100 / Math.min(itemsPerPage, filteredMembers.length)}%`,
                      minWidth: `${100 / Math.min(itemsPerPage, filteredMembers.length)}%`
                    }}
                  >
                    <div className="text-center group cursor-pointer bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                      {/* Enhanced Image Container */}
                      <div className="mb-4 sm:mb-6 flex justify-center">
                        <div className="relative">
                          <div className="relative overflow-hidden rounded-2xl w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500">
                            <img
                              src={member.mainImage}
                              alt={member.fullName}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='12' fill='%239ca3af'%3EPhoto%3C/text%3E%3C/svg%3E";
                              }}
                            />
                          </div>

                          {/* Hover gradient overlay */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>

                      {/* Enhanced Text Content */}
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                          {member.fullName}
                        </h3>
                        <div className="bg-blue-50 rounded-full py-1 px-3 inline-block">
                          <p className="text-blue-600 font-semibold text-sm sm:text-base">{member.role}</p>
                        </div>

                        {/* Optional description with fade effect */}
                        {member.description && (
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {member.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Pagination Dots */}
          {filteredMembers.length > Math.ceil(itemsPerPage) && (
            <div className="flex justify-center mt-8 space-x-2 sm:space-x-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`rounded-full transition-all duration-300 ${currentIndex === index
                    ? "bg-blue-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  style={{
                    width: currentIndex === index ? '24px' : '8px',
                    height: '8px'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Enhanced Member Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-6 text-sm text-gray-500"
          >
            <span className="bg-gray-100 rounded-full px-3 py-1.5 inline-block">
              Showing <span className="font-semibold text-gray-700">{getVisibleCount()}</span> of{" "}
              <span className="font-semibold text-gray-700">{filteredMembers.length}</span> members
              {activeRole !== "All" && (
                <span className="text-blue-600 ml-1">in {activeRole}</span>
              )}
            </span>
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
   
    .no-scrollbar::-webkit-scrollbar {
      display: none; /* Chrome, Safari */
    }
    .no-scrollbar {
      -ms-overflow-style: none;  /* IE/Edge */
      scrollbar-width: none;     /* Firefox */
    }
  `}</style>
    </section>

    
  );
}