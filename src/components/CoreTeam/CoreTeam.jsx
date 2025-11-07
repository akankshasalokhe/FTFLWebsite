// import axios from "axios";
// import { motion } from "framer-motion";
// import { useEffect, useState, useRef } from "react";

// export default function TeamMembers() {
//   const [departmentboardData, setDepartmentBoardData] = useState([]);
//   const [roles, setRoles] = useState([]);
//   const [activeRole, setActiveRole] = useState("All");
//   const [activeCard, setActiveCard] = useState(null);
//   const [isClient, setIsClient] = useState(false);
//   const cardRefs = useRef([]);

//   // ✅ Set client-side flag
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // ✅ Close active card when clicking outside
//   useEffect(() => {
//     if (!isClient) return;

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

//   // ✅ Fetch data
//   useEffect(() => {
//     if (!isClient) return;

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

//   // ✅ Handle card touch with toggle behavior
//   const handleCardTouch = (index) => {
//     setActiveCard(activeCard === index ? null : index);
//   };

//   // Don't render content until client-side to avoid hydration mismatch
//   if (!isClient) {
//     return (
//       <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
//               <div className="flex justify-center">
//                 <div className="bg-gray-100 rounded-xl p-1.5 flex space-x-2 overflow-x-auto no-scrollbar">
//                   {roles.map((role, i) => (
//                     <button
//                       key={i}
//                       onClick={() => {
//                         setActiveRole(role);
//                         setActiveCard(null);
//                       }}
//                       className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeRole === role
//                         ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white shadow-md shadow-blue-100"
//                         : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
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

//         {/* Team Members Grid - No Carousel */}
//         <div className="relative">
//           {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6"> */}
//           <div className={`grid gap-4 sm:gap-6 ${
//     filteredMembers.length === 1 
//       ? 'grid-cols-1 justify-items-center' 
//       : filteredMembers.length === 2 
//       ? 'grid-cols-1 md:grid-cols-2 justify-items-center max-w-4xl mx-auto' 
//       : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
//   }`}>
//             {filteredMembers.map((member, index) => (
//               <motion.div
//                 key={member._id || index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 // className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
//                className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 ${
//           filteredMembers.length <= 2 ? 'w-full max-w-sm' : 'w-full'
//         }`}

//                 ref={el => cardRefs.current[index] = el}
//               >
//                 {/* Image Container */}
//                 <div
//                   className="relative w-full h-56 sm:h-64 overflow-hidden flex items-center justify-center bg-white"
//                   onTouchStart={() => handleCardTouch(index)}
//                 >
//                   <img
//                     src={member.mainImage}
//                     alt={member.fullName}
//                     className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                   />

//                   {/* Social Icons */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className={`flex space-x-2 sm:space-x-3 transition-all duration-500 delay-200
//                       ${activeCard === index
//                         ? 'translate-y-0 opacity-100'
//                         : 'translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
//                       }`}
//                     >
//                       {/* Instagram */}
//                       {/* {member.instagram && (
//                         <motion.a
//                           href={member.instagram}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="bg-white text-pink-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110"
//                           whileHover={{ scale: 1.1 }}
//                         >
//                           <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                           </svg>
//                         </motion.a>
//                       )} */}

//                       {/* Facebook */}
//                       {/* {member.facebook && (
//                         <motion.a
//                           href={member.facebook}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="bg-white text-blue-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
//                           whileHover={{ scale: 1.1 }}
//                         >
//                           <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                           </svg>
//                         </motion.a>
//                       )} */}

//                       {/* LinkedIn */}
//                       {member.linkedIn && (
//                         <motion.a
//                           href={member.linkedIn}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="bg-white text-blue-500 p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
//                           whileHover={{ scale: 1.1 }}
//                         >
//                           <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                           </svg>
//                         </motion.a>
//                       )}
//                     </div>
//                   </div>

//                   {/* Blue Overlay */}
//                   <div className={`absolute inset-0 bg-blue-400 origin-top transition-all duration-500 ease-out pointer-events-none
//                     ${activeCard === index
//                       ? 'opacity-10 scale-y-100'
//                       : 'opacity-0 scale-y-0 group-hover:opacity-10 group-hover:scale-y-100'
//                     }`}
//                   />
//                 </div>

//                 {/* Text Content */}

//                 <div className="p-4 sm:p-6 text-center">
//                   <h3 className={`text-base sm:text-lg font-semibold mb-1 transition-colors duration-300
//                ${activeCard === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}
//                   >
//                     {member.fullName.includes(' - ') ? member.fullName.split(' - ')[0] : member.fullName}
//                   </h3>
//                   {member.fullName.includes(' - ') && (
//                     <p className="text-xs sm:text-sm text-gray-500 font-medium">
//                       {member.fullName.split(' - ')[1]}
//                     </p>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>


//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { useEffect, useState, useRef } from "react";

// export default function TeamMembers() {
//   const [departmentboardData, setDepartmentBoardData] = useState([]);
//   const [roles, setRoles] = useState([]);
//   const [activeRole, setActiveRole] = useState("All");
//   const [activeCard, setActiveCard] = useState(null);
//   const [isClient, setIsClient] = useState(false);
//   const cardRefs = useRef([]);

//   // ✅ Set client-side flag
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // ✅ Close active card when clicking outside
//   useEffect(() => {
//     if (!isClient) return;

//     const handleClickOutside = (event) => {
//       if (activeCard !== null) {
//         const clickedOutside = cardRefs.current.every(
//           (ref, index) => index !== activeCard && !ref?.contains(event.target)
//         );
//         if (clickedOutside) setActiveCard(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("touchstart", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     };
//   }, [activeCard, isClient]);

//   // ✅ Fetch data
//   useEffect(() => {
//     if (!isClient) return;
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

//   // ✅ Filter members by role
//   const filteredMembers =
//     activeRole === "All"
//       ? departmentboardData
//       : departmentboardData.filter(
//           (m) =>
//             m.role?.toLowerCase().trim() === activeRole.toLowerCase().trim()
//         );

//   // ✅ Handle card touch toggle
//   const handleCardTouch = (index) => {
//     setActiveCard(activeCard === index ? null : index);
//   };

//   // Prevent SSR hydration issues
//   if (!isClient) {
//     return (
//       <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Meet Our <span className="text-blue-600">Dream Team</span>
//           </h2>
//           <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Passionate experts dedicated to innovation and collaboration.
//           </p>
//           <div className="flex justify-center gap-4 mt-10">
//             {[...Array(4)].map((_, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-200 rounded-lg w-1/4 h-64 animate-pulse"
//               ></div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-10 md:mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
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
//           className="mb-10 md:mb-14 flex justify-center"
//         >
//           <div className="bg-gray-100 rounded-xl p-1.5 flex space-x-2 overflow-x-auto no-scrollbar">
//             {roles.map((role, i) => (
//               <button
//                 key={i}
//                 onClick={() => {
//                   setActiveRole(role);
//                   setActiveCard(null);
//                 }}
//                 className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
//                   activeRole === role
//                     ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white shadow-md shadow-blue-100"
//                     : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
//                 }`}
//               >
//                 {role}
//               </button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Team Members Grid */}
//         <div
//           className={`grid gap-4 place-items-center mx-auto ${
//             filteredMembers.length === 1
//               ? "grid-cols-1 max-w-sm"
//               : filteredMembers.length === 2
//               ? "grid-cols-1 sm:grid-cols-2 max-w-3xl"
//               : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl"
//           }`}
//         >
//           {filteredMembers.map((member, index) => (
//             <motion.div
//               key={member._id || index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 ${
//                 filteredMembers.length <= 2
//                   ? "w-[240px] sm:w-[260px]"
//                   : "w-full max-w-[280px]"
//               }`}
//               ref={(el) => (cardRefs.current[index] = el)}
//             >
//               {/* Image */}
//               <div
//                 className="relative w-full h-48 sm:h-56 overflow-hidden flex items-center justify-center bg-white"
//                 onTouchStart={() => handleCardTouch(index)}
//               >
//                 <img
//                   src={member.mainImage}
//                   alt={member.fullName}
//                   className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                 />

//                 {/* LinkedIn Icon */}
//                 {member.linkedIn && (
//                   <motion.a
//                     href={member.linkedIn}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`absolute bg-white text-blue-500 p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 ${
//                       activeCard === index
//                         ? "opacity-100"
//                         : "opacity-0 group-hover:opacity-100"
//                     }`}
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <svg
//                       className="w-4 h-4 sm:w-5 sm:h-5"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </motion.a>
//                 )}
//               </div>

//               {/* Info */}
//               <div className="p-4 sm:p-6 text-center">
//                 <h3
//                   className={`text-base sm:text-lg font-semibold mb-1 transition-colors duration-300 ${
//                     activeCard === index
//                       ? "text-blue-600"
//                       : "text-gray-900 group-hover:text-blue-600"
//                   }`}
//                 >
//                   {member.fullName.includes(" - ")
//                     ? member.fullName.split(" - ")[0]
//                     : member.fullName}
//                 </h3>
//                 {member.fullName.includes(" - ") && (
//                   <p className="text-xs sm:text-sm text-gray-500 font-medium">
//                     {member.fullName.split(" - ")[1]}
//                   </p>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { useEffect, useState, useRef } from "react";

// export default function TeamMembers() {
//   const [departmentboardData, setDepartmentBoardData] = useState([]);
//   const [roles, setRoles] = useState([]);
//   const [activeRole, setActiveRole] = useState("All");
//   const [activeCard, setActiveCard] = useState(null);
//   const [isClient, setIsClient] = useState(false);
//   const cardRefs = useRef([]);

//   // ✅ Set client-side flag
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // ✅ Close active card when clicking outside
//   useEffect(() => {
//     if (!isClient) return;

//     const handleClickOutside = (event) => {
//       if (activeCard !== null) {
//         const clickedOutside = cardRefs.current.every(
//           (ref, index) => index !== activeCard && !ref?.contains(event.target)
//         );
//         if (clickedOutside) setActiveCard(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("touchstart", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     };
//   }, [activeCard, isClient]);

//   // ✅ Fetch data
//   useEffect(() => {
//     if (!isClient) return;
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

//   // ✅ Filter members by role
//   const filteredMembers =
//     activeRole === "All"
//       ? departmentboardData
//       : departmentboardData.filter(
//         (m) =>
//           m.role?.toLowerCase().trim() === activeRole.toLowerCase().trim()
//       );

//   // ✅ Handle card touch toggle
//   const handleCardTouch = (index) => {
//     setActiveCard(activeCard === index ? null : index);
//   };

//   // ✅ Simple grid container class
//   // const getContainerClass = () => {
//   //   const count = filteredMembers.length;

//   //   if (count <= 4) {
//   //     // 1-4 cards: flex centered with more gap
//   //     return "flex flex-wrap justify-center gap-x-12 gap-y-8 mx-auto max-w-7xl px-4";
//   //   } else {
//   //     // 5+ cards: grid layout
//   //     return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto max-w-7xl px-4";
//   //   }
//   // };


//   // ✅ Check if this card should be centered in the last row
//   const shouldCenterCard = (index) => {
//     const count = filteredMembers.length;
//     if (count <= 4) return false; // Already centered with flex

//     const itemsInLastRow = count % 4;
//     if (itemsInLastRow === 0) return false; // Perfect multiple of 4

//     const startOfLastRow = count - itemsInLastRow;
//     return index >= startOfLastRow;
//   };

//   // ✅ Get the exact grid column class for perfect centering
//   // --- helper: container class (grid always; flex only for 1-3 handled below) ---
//   const getContainerClass = () => {
//     // always grid; centering controlled per-card for last-row leftovers
//     return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 justify-items-center mx-auto max-w-[1400px] px-6";
//   };

//   // --- helper: compute grid offset classes for leftover items in last row ---
//   const getCenteredColumnClass = (index) => {
//     const count = filteredMembers.length;
//     const itemsInLastRow = count % 4;
//     if (itemsInLastRow === 0) return ""; // perfect rows, nothing to do

//     const startOfLastRow = count - itemsInLastRow;
//     if (index < startOfLastRow) return ""; // not in last row

//     // position within last row (0-based)
//     const pos = index - startOfLastRow;

//     // For lg breakpoint only:
//     // 1 leftover -> span 2 columns and start at column 2 (centers it)
//     // 2 leftover -> place them in col 2 and col 3
//     // 3 leftover -> place them in col 1,2,3 (we can optionally shift to center a bit by start 1)
//     if (itemsInLastRow === 1) {
//       // single item -> center by spanning middle two columns
//       return "lg:col-start-2 lg:col-span-2";
//     }
//     if (itemsInLastRow === 2) {
//       // first leftover -> start at col 2, second -> start at col 3
//       return pos === 0 ? "lg:col-start-2" : "lg:col-start-3";
//     }
//     if (itemsInLastRow === 3) {
//       // three items: they will occupy cols 1-3; to make them more centered you can
//       // shift them one column right by starting the first at col-start-1 (no change)
//       // usually no special classes needed; return "" to use default placement
//       return "";
//     }

//     return "";
//   };



//   // Prevent SSR hydration issues
//   if (!isClient) {
//     return (
//       <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Meet Our <span className="text-blue-600">Dream Team</span>
//           </h2>
//           <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Passionate experts dedicated to innovation and collaboration.
//           </p>
//           <div className="flex justify-center gap-4 mt-10">
//             {[...Array(4)].map((_, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-200 rounded-lg w-1/4 h-64 animate-pulse"
//               ></div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   const containerClass = getContainerClass();

//   return (
//     <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-10 md:mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
//           >
//             Meet Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">Dream Team</span>
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
//           className="mb-10 md:mb-14 flex justify-center"
//         >
//           <div className="bg-gray-100 rounded-xl p-1.5 flex space-x-2 overflow-x-auto no-scrollbar">
//             {roles.map((role, i) => (
//               <button
//                 key={i}
//                 onClick={() => {
//                   setActiveRole(role);
//                   setActiveCard(null);
//                 }}
//                 className={`px-3 py-2 sm:px-4 sm:py-2.5 cursor-pointer rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeRole === role
//                   ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white shadow-md shadow-blue-100"
//                   : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
//                   }`}
//               >
//                 {role}
//               </button>
//             ))}
//           </div>
//         </motion.div>


//         {/* Team Members Grid */}
//         <div className={getContainerClass()}>
//           {filteredMembers.map((member, index) => {
//             const offsetClass = getCenteredColumnClass(index);

//             return (
//               <motion.div
//                 key={member._id || index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.06 }}
//                 whileHover={{ y: -5 }}
//                 ref={(el) => (cardRefs.current[index] = el)}
//                 className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl
//           transition-all duration-300 border border-gray-200 w-[280px] sm:w-[300px] ${offsetClass}`}
//               >
//                 {/* Image */}
//                 <div
//                   className="relative w-full h-64 overflow-hidden flex items-center justify-center bg-gray-50"
//                   onTouchStart={() => handleCardTouch(index)}
//                 >
//                   <img
//                     src={member.mainImage}
//                     alt={member.fullName}
//                     className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 {/* Info Section */}
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-lg font-bold text-gray-900">
//                       {member.fullName.includes(" - ")
//                         ? member.fullName.split(" - ")[0]
//                         : member.fullName}
//                     </h3>

//                     {member.linkedIn && (
//                       <motion.a
//                         href={member.linkedIn}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
//                         whileHover={{ scale: 1.1 }}
//                       >
//                         {/* icon */}
//                         <svg
//                           className="w-4 h-4"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                         </svg>
//                       </motion.a>
//                     )}
//                   </div>

//                   {member.fullName.includes(" - ") && (
//                     <p className="text-sm text-gray-600 font-medium">
//                       {member.fullName.split(" - ")[1]}
//                     </p>
//                   )}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }




"use client";
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

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (!isClient) return;

    const handleClickOutside = (event) => {
      if (activeCard !== null) {
        const clickedOutside = cardRefs.current.every(
          (ref, index) => index !== activeCard && !ref?.contains(event.target)
        );
        if (clickedOutside) setActiveCard(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [activeCard, isClient]);

  useEffect(() => {
    if (!isClient) return;
    axios
      .get("https://landing-page-yclw.vercel.app/api/departmentboard")
      .then((res) => {
        const data = res.data.data || [];
        setDepartmentBoardData(data);
        const uniqueRoles = Array.from(new Set(data.map((m) => m.role)));
        setRoles(["All", ...uniqueRoles]);
      })
      .catch((err) => console.error(err));
  }, [isClient]);

  const filteredMembers =
    activeRole === "All"
      ? departmentboardData
      : departmentboardData.filter(
          (m) =>
            m.role?.toLowerCase().trim() === activeRole.toLowerCase().trim()
        );

  // ✅ FIXED: Proper grid configuration for 1440px
  const getContainerClass = () => {
    return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 justify-items-center mx-auto max-w-[1400px] px-6";
  };

  // ✅ FIXED: Centering logic for 4 columns at 1440px
  const getCenteredColumnClass = (index) => {
    const count = filteredMembers.length;
    
    // For all 4-column layouts (lg, xl, 2xl)
    const itemsInLastRow = count % 4;
    if (itemsInLastRow === 0) return "";

    const startOfLastRow = count - itemsInLastRow;
    if (index < startOfLastRow) return "";

    const pos = index - startOfLastRow;

    if (itemsInLastRow === 1) {
      return "lg:col-start-2 lg:col-span-2 xl:col-start-2 xl:col-span-2 2xl:col-start-2 2xl:col-span-2";
    }
    if (itemsInLastRow === 2) {
      return pos === 0 ? "lg:col-start-2 xl:col-start-2 2xl:col-start-2" : "lg:col-start-3 xl:col-start-3 2xl:col-start-3";
    }
    if (itemsInLastRow === 3) {
      return "";
    }

    return "";
  };

  if (!isClient) {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Dream Team</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate experts dedicated to innovation and collaboration.
          </p>
          <div className="flex justify-center gap-4 mt-10">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-lg w-1/4 h-64 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Dream Team
            </span>
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
          className="mb-10 md:mb-14 flex justify-center"
        >
          <div className="bg-gray-100 rounded-xl p-1.5 flex space-x-2 overflow-x-auto no-scrollbar">
            {roles.map((role, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveRole(role);
                  setActiveCard(null);
                }}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 cursor-pointer rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeRole === role
                    ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white shadow-md shadow-blue-100"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Team Members Grid - FIXED for 1440px */}
        <div className={getContainerClass()}>
          {filteredMembers.map((member, index) => {
            const offsetClass = getCenteredColumnClass(index);
            return (
              <motion.div
                key={member._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 w-full max-w-[300px] ${offsetClass}`}
              >
                {/* Image */}
                <div
                  className="relative w-full h-64 overflow-hidden flex items-center justify-center bg-gray-50"
                  onTouchStart={() =>
                    setActiveCard(activeCard === index ? null : index)
                  }
                >
                  <img
                    src={member.mainImage}
                    alt={member.fullName}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {member.fullName.includes(" - ")
                        ? member.fullName.split(" - ")[0]
                        : member.fullName}
                    </h3>
                    {member.linkedIn && (
                      <motion.a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </motion.a>
                    )}
                  </div>

                  {member.fullName.includes(" - ") && (
                    <p className="text-sm text-gray-600 font-medium">
                      {member.fullName.split(" - ")[1]}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}