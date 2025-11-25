// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import axios from "axios";

// const ProductShowcase = () => {
//   const [productsData, setProductsData] = useState([]);

//   // Fetch products
//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/product")
//       .then((res) => {
//         if (res.data?.data?.length > 0) {
//           setProductsData(res.data.data);
//         }
//       })
//       .catch((err) => {
//         console.error("API fetch error:", err);
//       });
//   }, []);

//   return (
//     <div className="py-8 sm:py-16 px-4 sm:px-8 md:px-16 bg-gray-50">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 text-gray-900">
//         What We Offer
//       </h2>

//       {/* Responsive flex layout - centered on all screens except mobile */}
//       <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-8 px-4 md:px-10 py-5">
//         {productsData.map((product, index) => (
//           <motion.div
//             key={product._id}
//             className="w-full max-w-[300px] sm:max-w-[320px] rounded-2xl shadow-lg overflow-hidden flex flex-col bg-white"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -5, transition: { duration: 0.3 } }}
//           >
//             {/* Title positioned close to the top */}
//             <h3 className="text-xl font-bold text-gray-900 mt-4 ml-4 mb-2">
//               {product.title}
//             </h3>

//             {/* Product Image - Full display */}
//             <div className="w-full h-110 overflow-hidden flex items-center justify-center px-4 pb-4">
//               <img
//                 src={product.mainImage}
//                 alt={product.title}
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             {/* Learn More Button */}
//             <div className="p-4 text-center flex flex-col items-center">
//               <Link href={`/products/${product._id}`}>
//                 <button className="bg-gradient-to-r from-[#298cf3] to-blue-600 cursor-pointer hover:from-blue-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg transition font-semibold text-sm shadow-md hover:shadow-lg">
//                   Learn More →
//                 </button>
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductShowcase;




// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import axios from "axios";
// import { motion } from 'framer-motion';


// export default function ProductDetails() {

//   const [productsData, setProductsData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/product")
//       .then((res) => {
//         if (res.data?.data?.length > 0) {
//           setProductsData(res.data.data);
//         }
//       })
//       .catch((err) => console.error("API fetch error:", err));
//   }, []);

//   return (
//     <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-100">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-3xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 text-transparent bg-clip-text"
//       >
//         What We Offer
//       </motion.h1>

//       <div className="space-y-20 max-w-full mx-auto">
//         {productsData.map((product, index) => {
//           const isReversed = index % 2 !== 0; // alternate layout

//           return (
//             <motion.div
//               key={product._id}
//               initial={{ opacity: 0, y: 60 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className={`flex flex-col-reverse lg:flex-row ${isReversed ? "lg:flex-row-reverse" : ""}`}

//             >
//               {/* Description Side */}
//               {/* <div className="flex-1  p-10 flex flex-col justify-center"> */}
//               <motion.div
//                 className="flex-1 p-10 flex flex-col justify-center"
//                initial={{ opacity: 0, y: 150 }}
//                 whileInView={{ opacity: 1, y: 0 }} 
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//               >

//                 <h2 className="text-3xl font-bold text-gray-900 mb-3">
//                   {product.title}
//                 </h2>
//                 <p className="text-lg text-blue-600 font-semibold mb-3">
//                   {product.subTitle}
//                 </p>
//                 <p className="text-gray-700 mb-6 leading-relaxed">
//                   <span className="block md:hidden">
//                     {product.description.substring(0, 200)}...
//                   </span>
//                   <span className="hidden md:block">
//                     {product.description.substring(0, 500)}...
//                   </span>
//                 </p>


//                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-6">
//                   {product.homeFeatureTags?.slice(0, 4).map((feature, i) => (
//                     <li key={i} className="flex items-center gap-2 text-gray-700 break-words">
//                       <svg
//                         className="w-5 h-5 text-green-500 flex-shrink-0"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                       <span className="text-sm sm:text-base">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>




//                 <div className="flex flex-col lg:flex-row gap-4">

//                   {/* Row 1 → Store icons */}
//                   <div className="flex gap-3">
//                     {product.googleStoreLink && (
//                       <a
//                         href={product.googleStoreLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-[#4285F4] hover:bg-[#3367D6] text-white p-3 rounded-lg shadow-lg flex items-center justify-center min-w-[50px]"
//                       >
//                         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                           <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
//                         </svg>
//                       </a>
//                     )}

//                     {product.appleStoreLink && (
//                       <a
//                         href={product.appleStoreLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-black hover:bg-gray-900 text-white p-3 rounded-lg shadow-lg flex items-center justify-center min-w-[50px]"
//                       >
//                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M16.365 1.43c0 1.14-.418 2.088-1.254 2.842-.837.754-1.754 1.19-2.75 1.304-.028-.125-.042-.272-.042-.44 0-1.094.394-2.02 1.18-2.78.787-.76 1.71-1.15 2.766-1.15.032 0 .064.004.1.01v.214zM20.745 17.71c-.3.695-.66 1.332-1.085 1.91-.56.77-1.015 1.305-1.36 1.605-.54.495-1.12.75-1.75.764-.445.015-.983-.127-1.62-.426-.637-.3-1.223-.448-1.75-.448-.556 0-1.158.148-1.807.448-.65.3-1.178.45-1.585.45-.61-.027-1.2-.298-1.77-.81-.38-.334-.86-.895-1.445-1.685-.62-.843-1.127-1.82-1.52-2.93-.424-1.2-.635-2.36-.635-3.48 0-1.286.278-2.395.835-3.33.436-.75 1.02-1.34 1.75-1.77.73-.43 1.523-.653 2.38-.67.467-.013 1.08.15 1.84.49.758.337 1.245.506 1.46.506.162 0 .71-.205 1.64-.615.88-.38 1.62-.54 2.22-.48 1.64.133 2.878.78 3.71 1.94-1.47.9-2.208 2.152-2.21 3.75.002 1.25.465 2.29 1.39 3.12.412.39.87.69 1.37.9-.11.32-.245.65-.405.99z" />
//                         </svg>
//                       </a>
//                     )}
//                   </div>


//                   <a
//                     href={product.livedemoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="
//                         bg-gradient-to-r from-[#298cf3] to-blue-600 hover:translate-y-[-2px] text-white p-3 rounded-lg shadow-lg 
//                         inline-flex items-center justify-center 
//                         min-w-[50px]         
//                         lg:min-w-fit        
//                       "
//                   >
//                     Go to Website
//                   </a>

//                 </div>

//               </motion.div>
//               {/* </div> */}

//               {/* Divider Line */}
//               {/* <div className="hidden lg:block w-[2px] bg-gray-300"></div> */}

//               {/* Image Side */}


//               {/* <div className="flex-1 bg-white flex items-center justify-center">
//                 <div className="relative w-60 h-[500px] overflow-hidden bg-transparent">
//                   <Image
//                     src={product.mainImage}
//                     alt={product.title}
//                     fill
//                     className="object-cover hover:scale-105 transition-transform duration-500 bg-transparent"
//                   />
//                 </div>
//               </div> */}
//               <motion.div
//                 className="flex-1 bg-white flex items-center justify-center"
//                 initial={{ opacity: 0, x: 100 }}           // comes from right
//                 whileInView={{ opacity: 1, x: 0 }}         // moves to center
//                 viewport={{ once: true, amount: 0.3 }}     // triggers when 30% visible
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//               >
//                 <div className="relative w-60 h-[500px] overflow-hidden bg-transparent">
//                   <Image
//                     src={product.mainImage}
//                     alt={product.title}
//                     fill
//                     className="object-cover hover:scale-105 transition-transform duration-500 bg-transparent"
//                   />
//                 </div>
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }




// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import axios from "axios";
// import { motion } from 'framer-motion';

// export default function ProductDetails() {
//   const [productsData, setProductsData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get("https://landing-page-yclw.vercel.app/api/product");

//         if (res.data?.data?.length > 0) {
//           setProductsData(res.data.data);
//         }
//       } catch (err) {
//         console.error("API fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <section className="relative py-24 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="animate-pulse text-center mb-16">
//             <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
//             <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
//           </div>
//           <div className="space-y-24">
//             {[1, 2].map((item) => (
//               <div key={item} className="flex flex-col lg:flex-row gap-12 items-center">
//                 <div className="flex-1 space-y-4">
//                   <div className="h-8 bg-gray-200 rounded w-3/4"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-full"></div>
//                   <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//                 </div>
//                 <div className="flex-1">
//                   <div className="w-72 h-[450px] bg-gray-200 rounded-lg"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="relative py-24 px-6 bg-white">
//       {/* Minimal Background Elements */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-0 left-0 w-1 h-full bg-gray-100"></div>
//         <div className="absolute top-0 right-0 w-1 h-full bg-gray-100"></div>
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-50 rounded-full opacity-50"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-50 rounded-full opacity-50"></div>
//       </div>

//       {/* Header */}
//       <div className="max-w-6xl mx-auto text-center mb-20">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight"
//         >
//           Our Products
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-lg text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
//         >
//           Thoughtfully designed solutions for modern challenges
//         </motion.p>
//       </div>

//       <div className="max-w-6xl mx-auto space-y-32">
//         {productsData.map((product, index) => {
//           const isReversed = index % 2 !== 0;

//           return (
//             <motion.div
//               key={product._id}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}
//             >

//               {/* Image Section */}
//               <motion.div
//                 className="flex-1"
//                 initial={{ opacity: 0, x: isReversed ? 80 : -80 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 <div className="relative w-full max-w-md mx-auto">
//                   <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50">
//                     <Image
//                       src={product.mainImage}
//                       alt={product.title}
//                       fill
//                       className="object-cover transition-all duration-700 hover:scale-105"
//                     />
//                   </div>
//                   {/* Subtle border effect */}
//                   <div className="absolute inset-0 rounded-2xl border border-gray-200 pointer-events-none"></div>
//                 </div>
//               </motion.div>

//               {/* Content Section */}
//               <motion.div
//                 className="flex-1 max-w-lg"
//                 initial={{ opacity: 0, x: isReversed ? -80 : 80 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//               >
//                 <div className="space-y-8">
//                   {/* Title and Subtitle */}
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-4 mb-2">
//                       <div className="w-1 h-8 bg-gray-900 rounded-full"></div>
//                       <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
//                         {product.title}
//                       </h2>
//                     </div>
//                     <p className="text-xl text-gray-700 font-normal leading-relaxed">
//                       {product.subTitle}
//                     </p>
//                   </div>

//                   {/* Description */}
//                   <p className="text-gray-600 leading-relaxed text-lg">
//                     {product.description?.substring(0, 400)}...
//                   </p>

//                   {/* Features */}
//                   <div className="space-y-4">
//                     <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
//                       Key Features
//                     </h3>
//                     <ul className="grid grid-cols-1 gap-3">
//                       {product.homeFeatureTags?.slice(0, 4).map((feature, i) => (
//                         <motion.li 
//                           key={i}
//                           className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-all duration-200"
//                           whileHover={{ x: 4 }}
//                         >
//                           <div className="flex-shrink-0 w-2 h-2 bg-gray-600 rounded-full"></div>
//                           <span className="text-gray-700 font-normal">{feature}</span>
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Action Buttons */}
//                   <motion.div 
//                     className="flex flex-wrap gap-4 pt-4"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.6 }}
//                   >
//                     {product.googleStoreLink && (
//                       <motion.a
//                         href={product.googleStoreLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium"
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
// >
//   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
//   </svg>
//                         Google Play
//                       </motion.a>
//                     )}

//                     {product.appleStoreLink && (
//                       <motion.a
//                         href={product.appleStoreLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium"
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
// >
//   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M16.365 1.43c0 1.14-.418 2.088-1.254 2.842-.837.754-1.754 1.19-2.75 1.304-.028-.125-.042-.272-.042-.44 0-1.094.394-2.02 1.18-2.78.787-.76 1.71-1.15 2.766-1.15.032 0 .064.004.1.01v.214zM20.745 17.71c-.3.695-.66 1.332-1.085 1.91-.56.77-1.015 1.305-1.36 1.605-.54.495-1.12.75-1.75.764-.445.015-.983-.127-1.62-.426-.637-.3-1.223-.448-1.75-.448-.556 0-1.158.148-1.807.448-.65.3-1.178.45-1.585.45-.61-.027-1.2-.298-1.77-.81-.38-.334-.86-.895-1.445-1.685-.62-.843-1.127-1.82-1.52-2.93-.424-1.2-.635-2.36-.635-3.48 0-1.286.278-2.395.835-3.33.436-.75 1.02-1.34 1.75-1.77.73-.43 1.523-.653 2.38-.67.467-.013 1.08.15 1.84.49.758.337 1.245.506 1.46.506.162 0 .71-.205 1.64-.615.88-.38 1.62-.54 2.22-.48 1.64.133 2.878.78 3.71 1.94-1.47.9-2.208 2.152-2.21 3.75.002 1.25.465 2.29 1.39 3.12.412.39.87.69 1.37.9-.11.32-.245.65-.405.99z" />
//   </svg>
//                         App Store
//                       </motion.a>
//                     )}

//                     <motion.a
//                       href={product.livedemoLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-3 px-8 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 font-medium"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       View Demo
// <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
// </svg>
//                     </motion.a>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>



//     </section>
//   );
// }




"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://landing-page-yclw.vercel.app/api/product"
        );

        if (res.data?.data?.length > 0) {
          setProductsData(res.data.data);
        }
      } catch (err) {
        console.error("API fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* ------------------ LOADING UI ------------------ */
  if (loading) {
    return (
      <section className="min-h-screen bg-white py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-20">
            <div className="h-12 bg-gray-300 rounded w-80 mx-auto mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>

          <div className="space-y-32">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="flex flex-col lg:flex-row gap-16 items-center"
              >
                <div className="flex-1 space-y-6 w-full">
                  <div className="h-10 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
                <div className="flex-1 w-full">
                  <div className="w-full h-[350px] bg-gray-300 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ------------------ ACTUAL UI ------------------ */

  return (
    <section className="min-h-screen bg-white py-20 px-4 sm:px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center mb-24"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          What We Offer
        </h1>
      </motion.div>

      {/* Products */}
      <div className="max-w-6xl mx-auto w-full overflow-hidden">
        {productsData.map((product, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32 last:mb-0"
            >
              {/* ----------- IMAGE ----------- */}
              <motion.div
                className={`flex-1 w-full ${isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative overflow-hidden">
                  <div
                    className="relative w-full mx-auto 
                    aspect-[3/4] md:aspect-[5/4] 
                    rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={product.mainImage}
                      alt={product.title}
                      fill
                      className="object-contain transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </motion.div>

              {/* ----------- CONTENT ----------- */}
              <motion.div
                className={`flex-1 w-full ${isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Number Badge */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.title}
                </h2>

                <p className="text-xl text-blue-600 font-semibold mb-6">
                  {product.subTitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {product.description?.substring(0, 350)}...
                </p>

                {/* Features */}
                <div className="space-y-4 mb-10">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Key Features
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.homeFeatureTags?.slice(0, 4).map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                        whileHover={{ x: 4, scale: 1.02 }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white border border-gray-300 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-4 md:items-center">
                  {/* Google Play */}
                  {product.googleStoreLink && (
                    <motion.a
                      href={product.googleStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 font-medium text-sm col-span-1"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >

                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      Google Play
                    </motion.a>
                  )}

                  {/* Apple Store */}
                  {product.appleStoreLink && (
                    <motion.a
                      href={product.appleStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 font-medium text-sm col-span-1"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >

                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.365 1.43c0 1.14-.418 2.088-1.254 2.842-.837.754-1.754 1.19-2.75 1.304-.028-.125-.042-.272-.042-.44 0-1.094.394-2.02 1.18-2.78.787-.76 1.71-1.15 2.766-1.15.032 0 .064.004.1.01v.214zM20.745 17.71c-.3.695-.66 1.332-1.085 1.91-.56.77-1.015 1.305-1.36 1.605-.54.495-1.12.75-1.75.764-.445.015-.983-.127-1.62-.426-.637-.3-1.223-.448-1.75-.448-.556 0-1.158.148-1.807.448-.65.3-1.178.45-1.585.45-.61-.027-1.2-.298-1.77-.81-.38-.334-.86-.895-1.445-1.685-.62-.843-1.127-1.82-1.52-2.93-.424-1.2-.635-2.36-.635-3.48 0-1.286.278-2.395.835-3.33.436-.75 1.02-1.34 1.75-1.77.73-.43 1.523-.653 2.38-.67.467-.013 1.08.15 1.84.49.758.337 1.245.506 1.46.506.162 0 .71-.205 1.64-.615.88-.38 1.62-.54 2.22-.48 1.64.133 2.878.78 3.71 1.94-1.47.9-2.208 2.152-2.21 3.75.002 1.25.465 2.29 1.39 3.12.412.39.87.69 1.37.9-.11.32-.245.65-.405.99z" />
                      </svg>
                      Apple Store
                    </motion.a>
                  )}

                  {/* Live Demo */}
                  {product.livedemoLink && (
                    <motion.a
                      href={product.livedemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium text-sm col-span-2 md:col-span-1"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
