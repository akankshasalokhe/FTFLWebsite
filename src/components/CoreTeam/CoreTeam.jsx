// // import axios from "axios";
// // import { motion } from "framer-motion";
// // import { useEffect, useState } from "react";

// // const TeamMembers = () => {
// //   const [departmentboardData, setDepartmentBoardData] = useState([]);
// //   const [roles, setRoles] = useState([]);
// //   const [activeRole, setActiveRole] = useState("All");

// //   // ✅ Fetch data
// //   useEffect(() => {
// //     axios
// //       .get("https://landing-page-yclw.vercel.app/api/departmentboard")
// //       .then((res) => {
// //         const data = res.data.data || [];
// //         setDepartmentBoardData(data);

// //         // extract unique roles for buttons
// //         //   const uniqueRoles = Array.from(new Set(data.map((m) => m.role)));
// //         //   setRoles(["All", ...uniqueRoles]);
// //         // })
// //         // ✅ Updated
// //         const uniqueRoles = Array.from(new Set(data.map((m) => m.role)));
// //         setRoles(uniqueRoles);

// //         // auto-select first role
// //         if (uniqueRoles.length > 0) {
// //           setActiveRole(uniqueRoles[0]);
// //         }

// //       })
// //       .catch((err) => console.error(err));
// //   }, []);

// //   // ✅ Filter by activeRole
// //   // const filteredMembers =
// //   //   activeRole === "All"
// //   //     ? departmentboardData
// //   //     : departmentboardData.filter((m) => m.role === activeRole);

// //   const filteredMembers = departmentboardData.filter(
// //     (m) => m.role === activeRole
// //   );

// //   return (
// //     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Heading */}
// //         <div className="text-center mb-10">
// //           <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
// //             Meet Our Core Team
// //           </h2>
// //           <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
// //             Our collective of passionate experts is dedicated to innovation,
// //             collaboration, and delivering exceptional results.
// //           </p>
// //         </div>

// //         {/* ✅ Role filter buttons */}
// //         {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
// //           {roles.map((role, i) => (
// //             <button
// //               key={i}
// //               onClick={() => setActiveRole(role)}
// //               className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
// //                 activeRole === role
// //                   ? "bg-blue-600 text-white shadow-md"
// //                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// //               }`}
// //             >
// //               {role}
// //             </button>
// //           ))}
// //         </div> */}


// //         <div className="flex flex-wrap justify-center gap-3 mb-12">
// //           {roles.map((role, i) => (
// //             <button
// //               key={i}
// //               onClick={() => setActiveRole(role)}
// //               className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeRole === role
// //                   ? "bg-blue-600 text-white shadow-md"
// //                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// //                 }`}
// //             >
// //               {role}
// //             </button>
// //           ))}
// //         </div>

// //         {/* ✅ Team member cards */}
      




// // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //   {filteredMembers.map((member, index) => (
// //     <motion.div
// //       key={member._id || index}
// //       initial={{ opacity: 0, y: 40 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.4, delay: index * 0.1 }}
// //       whileHover={{
// //         scale: 1.05,
// //         boxShadow:
// //           "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
// //       }}
// //       // Added a fixed height to the card here
// //       className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-row cursor-pointer overflow-hidden h-40"
// //     >
// //       {/* Left Panel: Full-size Image with White Background */}
// //       <div className="w-1/2 flex-shrink-0 relative">
// //         <img
// //           src={member.mainImage}
// //           alt={member.fullName}
// //           className="w-full h-full object-cover"
// //           onError={(e) => {
// //             e.currentTarget.onerror = null;
// //             e.currentTarget.src = "/images/placeholder-member.jpg";
// //           }}
// //         />
// //       </div>

// //       {/* Right Panel: Content with Blue Background */}
// //       <div className="w-1/2 flex-1 bg-blue-400 p-6 flex flex-col justify-center text-white">
// //         <h3 className="text-xl font-bold">
// //           {member.fullName}
// //         </h3>
// //         <p className="text-sm text-gray-900 mb-3">
// //           {member.role}
// //         </p>
// //         {/* <p className="text-sm mb-4 line-clamp-4">
// //           {member.description}
// //         </p> */}
        
// //         {/* Social Link */}
// //         <a
// //           href={member.socialLink}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="inline-flex items-center font-medium transition-colors text-white hover:text-blue-100"
// //         >
// //           <svg
// //             className="w-5 h-5 mr-2"
// //             fill="currentColor"
// //             viewBox="0 0 24 24"
// //           >
// //             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
// //           </svg>
// //           LinkedIn
// //         </a>
// //       </div>
// //     </motion.div>
// //   ))}
// // </div>



// //       </div>

// //     </section>
// //   );
// // };

// // export default TeamMembers;






// import axios from "axios";
// import { motion } from "framer-motion";
// import { useEffect, useState, useRef } from "react";

// const TeamMembers = () => {
//   const [departmentboardData, setDepartmentBoardData] = useState([]);
//   const [roles, setRoles] = useState([]);
//   const [activeRole, setActiveRole] = useState("All");
//   const scrollRef = useRef(null);

//   // ✅ Fetch data
//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/departmentboard")
//       .then((res) => {
//         const data = res.data.data || [];
//         setDepartmentBoardData(data);

//         const uniqueRoles = Array.from(new Set(data.map((m) => m.role)));
//         setRoles(uniqueRoles);

//         if (uniqueRoles.length > 0) {
//           setActiveRole(uniqueRoles[0]);
//         }
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // ✅ Filter by activeRole
//   const filteredMembers = departmentboardData.filter(
//     (m) => m.role === activeRole
//   );

//   // ✅ Auto scroll effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         scrollRef.current.scrollBy({
//           left: 300, // 👈 adjust based on card width
//           behavior: "smooth",
//         });

//         // Reset to start if reached end
//         if (
//           scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
//           scrollRef.current.scrollWidth
//         ) {
//           scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         }
//       }
//     }, 3000); // every 3 seconds

//     return () => clearInterval(interval);
//   }, [filteredMembers]);

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

//         {/* ✅ Role filter buttons */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {roles.map((role, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveRole(role)}
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

//         {/* ✅ Horizontal Auto-Scrolling Row */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
//         >
//           {filteredMembers.map((member, index) => (
//             <motion.div
//               key={member._id || index}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow:
//                   "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
//               }}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-row cursor-pointer overflow-hidden h-40 min-w-[320px]"
//             >
//               {/* Left Panel: Full-size Image */}
//               <div className="w-1/2 flex-shrink-0 relative">
//                 <img
//                   src={member.mainImage}
//                   alt={member.fullName}
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     e.currentTarget.onerror = null;
//                     e.currentTarget.src = "/images/placeholder-member.jpg";
//                   }}
//                 />
//               </div>

//               {/* Right Panel: Content */}
//               <div className="w-1/2 flex-1 bg-blue-400 p-6 flex flex-col justify-center text-white">
//                 <h3 className="text-xl font-bold">{member.fullName}</h3>
//                 <p className="text-sm text-gray-900 mb-3">{member.role}</p>

//                 <a
//                   href={member.socialLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center font-medium transition-colors text-white hover:text-blue-100"
//                 >
//                   <svg
//                     className="w-5 h-5 mr-2"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                   </svg>
//                   LinkedIn
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamMembers;





import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function TeamMembers() {
  const [departmentboardData, setDepartmentBoardData] = useState([]);
  const [roles, setRoles] = useState([]);
  const [activeRole, setActiveRole] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // default

  // ✅ Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
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
        setRoles(uniqueRoles);

        if (uniqueRoles.length > 0) setActiveRole(uniqueRoles[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  // ✅ Filtered data
  const filteredMembers = departmentboardData.filter(
    (m) => m.role === activeRole
  );

  // ✅ Auto-advance
  useEffect(() => {
    if (filteredMembers.length > 0) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [filteredMembers, currentIndex, itemsToShow]);

  const nextSlide = () => {
    setDirection(1);
    if (currentIndex >= filteredMembers.length - itemsToShow) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    setDirection(-1);
    if (currentIndex <= 0) {
      setCurrentIndex(filteredMembers.length - itemsToShow);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // ✅ Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

const getVisibleMembers = () => {
  if (filteredMembers.length === 0) return [];

  // ✅ If fewer members than slots, just return them all (no duplicates)
  if (filteredMembers.length <= itemsToShow) {
    return filteredMembers;
  }

  // ✅ Otherwise rotate through like a carousel
  const visible = [];
  for (let i = 0; i < itemsToShow; i++) {
    const index = (currentIndex + i) % filteredMembers.length;
    visible.push(filteredMembers[index]);
  }
  return visible;
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
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeRole === role
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Cards container */}
          <div
            className={`grid grid-cols-1 ${
              itemsToShow >= 2 ? "md:grid-cols-2" : ""
            } ${itemsToShow >= 3 ? "lg:grid-cols-3" : ""} gap-6`}
          >
            <AnimatePresence custom={direction} mode="wait" initial={false}>
              {getVisibleMembers().map((member, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
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
                  <div className="w-1/2 flex-1 bg-blue-400 p-6 flex flex-col justify-center text-white">
                    <h3 className="text-xl font-bold">{member.fullName}</h3>
                    <p className="text-sm text-gray-900 mb-3">{member.role}</p>
                    <a
                      href={member.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-medium transition-colors text-white hover:text-blue-100"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
