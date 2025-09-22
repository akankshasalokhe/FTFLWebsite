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
  const [itemsPerPage, setItemsPerPage] = useState(6); // 2 rows × 3 columns

  // ✅ Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2); // 2 rows × 1 column
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4); // 2 rows × 2 columns
      } else {
        setItemsPerPage(6); // 2 rows × 3 columns
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
        setRoles(["All", ...uniqueRoles]); // Add "All" option

        // Set initial active role
        setActiveRole("All");
      })
      .catch((err) => console.error(err));
  }, []);

  // ✅ Filtered data - show all if "All" is selected
  const filteredMembers = activeRole === "All" 
    ? departmentboardData 
    : departmentboardData.filter((m) => m.role === activeRole);

  // Calculate total pages
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  // ✅ Auto-advance carousel if more than 6 items
  useEffect(() => {
    if (filteredMembers.length > itemsPerPage) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [filteredMembers, currentIndex, itemsPerPage]);

  const nextSlide = () => {
    if (filteredMembers.length <= itemsPerPage) return;
    
    setDirection(1);
    if (currentIndex >= totalPages - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (filteredMembers.length <= itemsPerPage) return;
    
    setDirection(-1);
    if (currentIndex <= 0) {
      setCurrentIndex(totalPages - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Get current page members
  const getCurrentPageMembers = () => {
    if (filteredMembers.length <= itemsPerPage) {
      return filteredMembers;
    }
    
    const startIndex = currentIndex * itemsPerPage;
    return filteredMembers.slice(startIndex, startIndex + itemsPerPage);
  };

  // Calculate grid columns based on itemsPerPage
  const getGridColumns = () => {
    if (itemsPerPage === 2) return "grid-cols-1"; // 1 column
    if (itemsPerPage === 4) return "grid-cols-2"; // 2 columns
    return "grid-cols-3"; // 3 columns
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Meet Our Core Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our collective of passionate experts is dedicated to innovation,
            collaboration, and delivering exceptional results.
          </p>
        </div>

        {/* Role buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {roles.map((role, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveRole(role);
                setCurrentIndex(0);
              }}
              className={`px-5 py-2 rounded-full cursor-pointer text-sm font-medium transition-all ${
                activeRole === role
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Navigation Arrows - Only show if we have multiple pages */}
          {filteredMembers.length > itemsPerPage && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Cards Grid */}
          <div className={`grid ${getGridColumns()} gap-6 min-h-[400px]`}>
            <AnimatePresence mode="wait">
              {getCurrentPageMembers().map((member, index) => (
                <motion.div
                  key={`${member._id || index}-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-row cursor-pointer overflow-hidden h-60"
                >
                  {/* Left: Image */}
                  <div className="w-1/2 flex-shrink-0 relative">
                    <img
                      src={member.mainImage}
                      alt={member.fullName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/images/placeholder-member.jpg";
                      }}
                    />
                  </div>

                  {/* Right: Content */}
                  <div className="w-1/2 flex-1 bg-blue-400 p-4 flex flex-col justify-center text-white">
                    <h3 className="text-lg font-bold">{member.fullName}</h3>
                    <p className="text-sm text-black mb-2">{member.role}</p>
                    <p className="text-xs text-gray-800 mb-3 line-clamp-3">
                      {member.description}
                    </p>
                    {member.socialLink && (
                      <a
                        href={member.socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-medium transition-colors text-white hover:text-blue-100 text-xs"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Dots - Only show if we have multiple pages */}
          {filteredMembers.length > itemsPerPage && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Show count if filtered */}
          {/* {activeRole !== "All" && (
            <div className="text-center mt-4 text-sm text-gray-600">
              Showing {filteredMembers.length} {activeRole} team members
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}