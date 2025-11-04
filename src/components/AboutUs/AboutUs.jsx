// "use client";

// import { motion, useAnimation, useMotionValue } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect, useState } from "react";
// import CountUp from "react-countup";
// import { Parallax } from "react-scroll-parallax";
// import axios from "axios";

// const AboutUsSection = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: false,
//   });
//   const controls = useAnimation();
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const cursorX = useMotionValue(-100);
//   const cursorY = useMotionValue(-100);

//   // 🔹 Stats data from backend
//   const [stats, setStats] = useState([]);

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   useEffect(() => {
//     // Backend se data fetch
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/counter")
//       .then((res) => {
//         if (res.data.success) {
//           setStats(res.data.data);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching stats:", err);
//       });
//   }, []);

//   const handleMouseMove = (e) => {
//     cursorX.set(e.clientX - 16);
//     cursorY.set(e.clientY - 16);
//   };

//   const containerVariants = {
//     visible: {
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         // duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const brandColor = {
//     primary: "#298cf3",
//     light: "#e6f2fe",
//     dark: "#1a6bc4",
//     gradient: "from-[#298cf3] to-blue-500",
//   };

//   return (
//     <section
//       className=" py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
//       ref={ref}
//       onMouseMove={handleMouseMove}
//     >
//       {/* Animated background elements */}
//       <motion.div
//         className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-100 opacity-10"
//         animate={{
//           x: [0, 50, 0],
//           y: [0, -30, 0],
//           rotate: [0, 180, 360],
//         }}
//         transition={{
//           // duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       <motion.div
//         className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-blue-100 opacity-10"
//         animate={{
//           x: [0, -50, 0],
//           y: [0, 40, 0],
//           rotate: [0, -180, -360],
//         }}
//         transition={{
//           // duration: 25,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       {/* Custom cursor */}
//       <motion.div
//         className="fixed w-8 h-8 bg-blue-500/20 rounded-full pointer-events-none z-50 backdrop-blur-sm border border-blue-500"
//         style={{
//           x: cursorX,
//           y: cursorY,
//         }}
//         animate={{
//           scale: hoveredCard !== null ? 1.5 : 1,
//           backgroundColor: hoveredCard !== null ? "#298cf3" : "#298cf320",
//         }}
//         transition={{ type: "spring", damping: 10 }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Title */}
//         <motion.div
//           initial="hidden"
//           animate={controls}
//           variants={itemVariants}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               // transition={{ duration: 0.5 }}
//             >
//               Who{" "}
//             </motion.span>
//             <motion.span
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               // transition={{ delay: 0.3, duration: 0.5 }}
//               className="bg-clip-text text-transparent bg-gradient-to-r from-[#298cf3] to-blue-600"
//             >
//               We Are
//             </motion.span>
//           </h1>
//           <motion.div
//             className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#298cf3] to-blue-600 mx-auto rounded-full"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}

//           />
//         </motion.div>

//         {/* Main content */}
//         <motion.div
//           className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20"
//           initial="hidden"
//           animate={controls}
//           variants={containerVariants}
//         >
//           {/* Text */}
//           <motion.div
//             className="lg:w-1/2 order-2 lg:order-1"
//             variants={itemVariants}
//           >
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
//               About <span className="text-[#298cf3]">Our Company</span>
//             </h2>
//             <motion.p
//               className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               We are a passionate IT solutions company delivering modern web,
//               mobile, and cloud-based applications. Our goal is to help
//               businesses achieve digital transformation with innovative
//               solutions.
//             </motion.p>
//             <motion.p
//               className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               Founded in 2024, we've grown from a small team of developers to a
//               full-service digital agency serving clients worldwide.
//             </motion.p>
//             <motion.button
//               className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#298cf3] to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all  hover:from-[#1a6bc4] hover:to-blue-700 text-sm sm:text-base relative overflow-hidden group"
//               style={{ backgroundColor: brandColor.primary }}
//               whileHover={{ y: -3 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <span className="relative z-10">Our Story</span>
//             </motion.button>
//           </motion.div>

//           {/* Image */}
//           <motion.div
//             className="lg:w-1/2 relative order-1 lg:order-2 mb-8 lg:mb-0"
//             variants={itemVariants}
//           >
//             <Parallax speed={-5}>
//               <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-xl transition-shadow ">
//                 <motion.img
//                   src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1484&q=80"
//                   alt="Our Team"
//                   className="w-full h-auto rounded-xl sm:rounded-2xl transform hover:scale-105 transition-transform duration-500"
//                   loading="lazy"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}

//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 rounded-xl sm:rounded-2xl"></div>
//               </div>
//             </Parallax>
//           </motion.div>
//         </motion.div>

//         {/* 🔹 Redesigned Stats Section */}
// {/* 🔹 Modern Stat Section with New Icons & Animations */}
// <motion.div
//   className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mt-12"
//   initial="hidden"
//   animate={controls}
//   variants={containerVariants}
// >
//   {stats.map((stat, index) => {
//     const icons = [
//       "M13 16h-1v-4h-1m1-4h.01M12 6a9 9 0 110 18 9 9 0 010-18z", // Info / About
//       "M5 13l4 4L19 7", // Check / Success
//       "M3 7h18M3 12h18M3 17h18", // Growth / Progress
//       "M12 4v16m8-8H4", // Plus / Add
//       "M9 17v-6h6v6m2 2H7", // Chart / Data
//     ];

//     return (
//       <motion.div
//         key={stat._id}
//         variants={itemVariants}
//         // whileHover={{ y: 8, scale: 1.03 }}
//         // transition={{ type: "spring", stiffness: 200 }}
//         className="group relative"
//         onMouseEnter={() => setHoveredCard(`stat-${index}`)}
//         onMouseLeave={() => setHoveredCard(null)}
//       >
//         {/* Animated Gradient Border */}
//         <motion.div
//           className="p-[2px] rounded-2xl bg-gradient-to-r from-[#298cf3] via-blue-500 to-blue-700"
//           animate={{
//             backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//           }}
//           transition={{  repeat: Infinity, ease: "linear" }}
//           style={{ backgroundSize: "200% 200%" }}
//         >
//           {/* Inner Card */}
//           <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md px-6 py-8 flex flex-col items-center text-center">

//             {/* Icon with Glow Animation */}
//             <motion.div
//               className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#298cf3] to-blue-600 text-white shadow-lg mb-4"
//               animate={{
//                 y: [0, -5, 0],
//                 boxShadow: [
//                   "0 0 10px rgba(41,140,243,0.4)",
//                   "0 0 20px rgba(41,140,243,0.6)",
//                   "0 0 10px rgba(41,140,243,0.4)",
//                 ],
//               }}
//               transition={{

//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-7 w-7"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={icons[index % icons.length]}
//                 />
//               </svg>
//             </motion.div>

//             {/* Number Counter */}
//             <div className="flex items-end justify-center mb-2">
//               <h3 className="text-3xl font-extrabold text-gray-900">
//                 {/* <CountUp end={stat.count} duration={3} /> */}
//                 {stat.count}
//               </h3>
//               <span className="text-lg font-semibold text-blue-600 mb-1">+</span>
//             </div>

//             {/* Title */}
//             <p className="text-sm sm:text-base text-gray-600 font-medium group-hover:text-gray-800 transition-colors ">
//               {stat.title}
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>
//     );
//   })}
// </motion.div>


//       </div>
//     </section>
//   );
// };

// export default AboutUsSection;









// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from 'next/navigation';
// import Link from "next/link";
// import MissionSection from "../OurStory/OurStory";

// const AboutUsSection = () => {
//   const [stats, setStats] = useState([]);
//   const [content, setContent] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     // Backend se data fetch
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/counter")
//       .then((res) => {
//         if (res.data.success) {
//           setStats(res.data.data);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching stats:", err);
//       });
//   }, []);

//   useEffect(() => {
//     axios.get("https://landing-page-yclw.vercel.app/api/about")
//       .then((res) => {
//         if (res.data.success) {
//           const apiData = res.data.data;

//           // 🔹 Filter only items with typeData === "Story" and then map
//           const mappedData = apiData
//             .filter(item => item.typeData === "About") // 👈 Add this filter
//             .map((item) => {
//               let color = "from-blue-500 to-blue-600";
//               let reverse = false;

//               if (item.typeData === "About") {
//                 color = "from-purple-500 to-purple-600";
//                 reverse = true;
//               }

//               return {
//                 title: item.title,
//                 description: item.description,
//                 image: item.mainImage,
//                 color,
//                 reverse,
//                 typeData: item.typeData
//               };
//             });

//           setContent(mappedData);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching mission/vision/core values:", err);
//       });
//   }, []);

//   const brandColor = {
//     primary: "#298cf3",
//     light: "#e6f2fe",
//     dark: "#1a6bc4",
//   };

//   return (
//     <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-100 opacity-10" />
//       <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-blue-100 opacity-10" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Title */}
//         <div className="text-center mb-12 sm:mb-16">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
//             Who{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#298cf3] to-blue-600">
//               We Are
//             </span>
//           </h1>
//           <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#298cf3] to-blue-600 mx-auto rounded-full" />
//         </div>

//         {/* Main content */}
//         <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
//           {/* Text */}
//           <div className="lg:w-1/2 order-2 lg:order-1">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
//               About <span className="text-[#298cf3]">Our Company</span>
//             </h2>
            
          
//             <div className="text-lg text-gray-600 space-y-4">
//               {content.map((item, index) => (
//                 <div key={index}>
//                   {item.description.map((paragraph, pIndex) => (
//                     <p key={pIndex} className="mb-4">{paragraph}</p>
//                   ))}
//                 </div>
//               ))}
//             </div>
         
//             <button
//               onClick={() => {
//                 router.push('/about');
//                 setTimeout(() => {
//                   const storySection = document.getElementById('story');
//                   if (storySection) {
//                     storySection.scrollIntoView({
//                       behavior: 'smooth',
//                       block: 'start'
//                     });
//                   }
//                 }, 100);
//               }}
//               className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#298cf3] to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:from-[#1a6bc4] hover:to-blue-700 text-sm sm:text-base"
//               style={{ backgroundColor: brandColor.primary }}
//             >
//               Our Story
//             </button>
//           </div>

//           {/* Image */}
//           <div className="lg:w-1/2 relative order-1 lg:order-2 mb-8 lg:mb-0">
//             <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
//               <img
//                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1484&q=80"
//                 alt="Our Team"
//                 className="w-full h-auto rounded-xl sm:rounded-2xl"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 rounded-xl sm:rounded-2xl"></div>
//             </div>
//           </div>


//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mt-12">
//           {stats.map((stat, index) => {
//             const icons = [
//               "M13 16h-1v-4h-1m1-4h.01M12 6a9 9 0 110 18 9 9 0 010-18z",
//               "M5 13l4 4L19 7",
//               "M3 7h18M3 12h18M3 17h18",
//               "M12 4v16m8-8H4",
//               "M9 17v-6h6v6m2 2H7",
//             ];

//             return (
//               <div
//                 key={stat._id}
//                 className="group relative"
//               >
//                 <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#298cf3] via-blue-500 to-blue-700">
//                   {/* Inner Card */}
//                   <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md px-6 py-8 flex flex-col items-center text-center">
//                     {/* Icon */}
//                     <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#298cf3] to-blue-600 text-white shadow-lg mb-4">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-7 w-7"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d={icons[index % icons.length]}
//                         />
//                       </svg>
//                     </div>

//                     {/* Number */}
//                     <div className="flex items-end justify-center mb-2">
//                       <h3 className="text-3xl font-extrabold text-gray-900">
//                         {stat.count}
//                       </h3>
//                       <span className="text-lg font-semibold text-blue-600 mb-1">+</span>
//                     </div>

//                     {/* Title */}
//                     <p className="text-sm sm:text-base text-gray-600 font-medium">
//                       {stat.title}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsSection;




// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from 'next/navigation';
// import Link from "next/link";
// import MissionSection from "../OurStory/OurStory";

// const AboutUsSection = () => {
//   const [stats, setStats] = useState([]);
//   const [content, setContent] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state
//   const router = useRouter();

//   useEffect(() => {
//     // Backend se data fetch
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/counter")
//       .then((res) => {
//         if (res.data.success) {
//           setStats(res.data.data);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching stats:", err);
//       });
//   }, []);

//   useEffect(() => {
//     setLoading(true); // Start loading when fetch begins
//     axios.get("https://landing-page-yclw.vercel.app/api/about")
//       .then((res) => {
//         if (res.data.success) {
//           const apiData = res.data.data;

//           // 🔹 Filter only items with typeData === "Story" and then map
//           const mappedData = apiData
//             .filter(item => item.typeData === "About") // 👈 Add this filter
//             .map((item) => {
//               let color = "from-blue-500 to-blue-600";
//               let reverse = false;

//               if (item.typeData === "About") {
//                 color = "from-purple-500 to-purple-600";
//                 reverse = true;
//               }

//               return {
//                 title: item.title,
//                 description: item.description,
//                 image: item.mainImage,
//                 color,
//                 reverse,
//                 typeData: item.typeData
//               };
//             });

//           setContent(mappedData);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching mission/vision/core values:", err);
//       })
//       .finally(() => {
//         setLoading(false); // Stop loading when fetch completes (success or error)
//       });
//   }, []);

//   const brandColor = {
//     primary: "#298cf3",
//     light: "#e6f2fe",
//     dark: "#1a6bc4",
//   };

//   // Loading component
//   if (loading) {
//     return (
//       <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//         <div className="max-w-7xl mx-auto relative z-10">
//           {/* Title */}
//           <div className="text-center mb-12 sm:mb-16">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
//               Who{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#298cf3] to-blue-600">
//                 We Are
//               </span>
//             </h1>
//             <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#298cf3] to-blue-600 mx-auto rounded-full" />
//           </div>

//           {/* Loading skeleton */}
//           <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
//             {/* Text loading skeleton */}
//             <div className="lg:w-1/2 order-2 lg:order-1">
//               <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
//               <div className="space-y-4">
//                 <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
//                 <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
//                 <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
//                 <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
//                 <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
//               </div>
//               <div className="h-10 bg-gray-200 rounded w-32 mt-6 animate-pulse"></div>
//             </div>

//             {/* Image loading skeleton */}
//             <div className="lg:w-1/2 relative order-1 lg:order-2 mb-8 lg:mb-0">
//               <div className="w-full h-64 bg-gray-200 rounded-xl animate-pulse"></div>
//             </div>
//           </div>

//           {/* Stats loading skeleton */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mt-12">
//             {[1, 2, 3].map((item) => (
//               <div key={item} className="group relative">
//                 <div className="p-[2px] rounded-2xl bg-gray-200">
//                   <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md px-6 py-8 flex flex-col items-center text-center">
//                     <div className="w-16 h-16 rounded-2xl bg-gray-200 mb-4 animate-pulse"></div>
//                     <div className="h-8 bg-gray-200 rounded w-20 mb-2 animate-pulse"></div>
//                     <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-100 opacity-10" />
//       <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-blue-100 opacity-10" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Title */}
//         <div className="text-center mb-12 sm:mb-16">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
//             Who{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#298cf3] to-blue-600">
//               We Are
//             </span>
//           </h1>
//           <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#298cf3] to-blue-600 mx-auto rounded-full" />
//         </div>

//         {/* Main content */}
//         <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
//           {/* Text */}
//           <div className="lg:w-1/2 order-2 lg:order-1">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
//               About <span className="text-[#298cf3]">Our Company</span>
//             </h2>
            
//             <div className="text-lg text-gray-600 space-y-4">
//               {content.map((item, index) => (
//                 <div key={index}>
//                   {item.description.map((paragraph, pIndex) => (
//                     <p key={pIndex} className="mb-4">{paragraph}</p>
//                   ))}
//                 </div>
//               ))}
//             </div>
         
//             <button
//               onClick={() => {
//                 router.push('/about');
//                 setTimeout(() => {
//                   const storySection = document.getElementById('story');
//                   if (storySection) {
//                     storySection.scrollIntoView({
//                       behavior: 'smooth',
//                       block: 'start'
//                     });
//                   }
//                 }, 100);
//               }}
//               className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#298cf3] to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:from-[#1a6bc4] hover:to-blue-700 text-sm sm:text-base"
//               style={{ backgroundColor: brandColor.primary }}
//             >
//               Our Story
//             </button>
//           </div>

//           {/* Image */}
//           <div className="lg:w-1/2 relative order-1 lg:order-2 mb-8 lg:mb-0">
//             <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl lg:w-160 lg:h-110">
//               <img
//                 src="/aoc.png"
//                 alt="Our Team"
//                 className="w-full rounded-xl sm:rounded-2xl object-cover lg:object-contain"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 rounded-xl sm:rounded-2xl"></div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mt-12">
//           {stats.map((stat, index) => {
//             const icons = [
//               "M13 16h-1v-4h-1m1-4h.01M12 6a9 9 0 110 18 9 9 0 010-18z",
//               "M5 13l4 4L19 7",
//               "M3 7h18M3 12h18M3 17h18",
//               "M12 4v16m8-8H4",
//               "M9 17v-6h6v6m2 2H7",
//             ];

//             return (
//               <div
//                 key={stat._id}
//                 className="group relative"
//               >
//                 <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#298cf3] via-blue-500 to-blue-700">
//                   {/* Inner Card */}
//                   <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md px-6 py-8 flex flex-col items-center text-center">
//                     {/* Icon */}
//                     <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#298cf3] to-blue-600 text-white shadow-lg mb-4">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-7 w-7"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d={icons[index % icons.length]}
//                         />
//                       </svg>
//                     </div>

//                     {/* Number */}
//                     <div className="flex items-end justify-center mb-2">
//                       <h3 className="text-3xl font-extrabold text-gray-900">
//                         {stat.count}
//                       </h3>
//                       <span className="text-lg font-semibold text-blue-600 mb-1">+</span>
//                     </div>

//                     {/* Title */}
//                     <p className="text-sm sm:text-base text-gray-600 font-medium">
//                       {stat.title}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsSection;



"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AboutUsSection() {
  const [stats, setStats] = useState([]);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/counter")
      .then((res) => res.data.success && setStats(res.data.data))
      .catch((err) => console.error("Error fetching stats:", err));
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://landing-page-yclw.vercel.app/api/about")
      .then((res) => {
        if (res.data.success) {
          const filtered = res.data.data.filter(
            (item) => item.typeData === "About"
          );
          setContent(filtered);
        }
      })
      .catch((err) => console.error("Error fetching about content:", err))
      .finally(() => setLoading(false));
  }, []);

  const brandColor = {
    primary: "#298cf3",
    dark: "#1a6bc4",
  };

  if (loading) {
    return (
      <section className="h-[80vh] flex justify-center items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      </section>
    );
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#f9fbff] to-[#e9f2ff] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Who{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              We Are
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our journey, our passion, and the mission that drives us to
            transform ideas into digital experiences.
          </p>
        </motion.div>

        {/* Content Section */}
        {content.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-12 mb-24 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/aoc.png"
                  alt={item.title}
                  className="w-[650px] h-[400px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {item.title}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {item.description?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <button
                onClick={() => router.push("/about")}
                className="mt-8 px-8 py-3 rounded-lg bg-gradient-to-r from-[#298cf3] to-blue-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        ))}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative group bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#298cf3] to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#298cf3] to-blue-600 text-white text-2xl font-bold shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-4xl font-extrabold text-gray-900">
                  {stat.count}
                  <span className="text-blue-600">+</span>
                </h3>
                <p className="text-lg font-medium text-gray-700">
                  {stat.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
