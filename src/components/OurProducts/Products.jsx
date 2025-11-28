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
    aspect-[3/4] md:aspect-[8/9] 
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
                <p className="text-gray-600 text-md leading-relaxed mb-8">
                  {product.description}
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




// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import axios from "axios";
// import { motion, AnimatePresence } from 'framer-motion';

// export default function ProductDetails() {
//   const [productsData, setProductsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentImageIndex, setCurrentImageIndex] = useState({});
//   const [expandedProducts, setExpandedProducts] = useState({}); // Changed to object

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get("https://landing-page-yclw.vercel.app/api/product");
//         console.log("Fetched products:", res.data);

//         if (res.data?.data?.length > 0) {
//           setProductsData(res.data.data);
//           // Initialize current image index for each product
//           const initialIndexes = {};
//           const initialExpanded = {};
//           res.data.data.forEach((product, index) => {
//             initialIndexes[product._id] = 0;
//             initialExpanded[product._id] = false; // Initialize each product as not expanded
//           });
//           setCurrentImageIndex(initialIndexes);
//           setExpandedProducts(initialExpanded);
//         }
//       } catch (err) {
//         console.error("API fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Auto-play carousel
// useEffect(() => {
//   if (productsData.length === 0) return;

//   const interval = setInterval(() => {
//     setCurrentImageIndex(prevIndexes => {
//       const newIndexes = { ...prevIndexes };

//       productsData.forEach(product => {
//         // Use the same image source as the carousel display
//         const images = Array.isArray(product.galleryImages) ? product.galleryImages : [product.galleryImages];
//         if (images.length > 1) {
//           newIndexes[product._id] = (prevIndexes[product._id] + 1) % images.length;
//         }
//       });

//       return newIndexes;
//     });
//   }, 4000); // Change image every 4 seconds

//   return () => clearInterval(interval);
// }, [productsData]);

//   const nextImage = (productId) => {
//   const product = productsData.find(p => p._id === productId);
//   if (!product) return;

//   const images = Array.isArray(product.galleryImages) ? product.galleryImages : [product.galleryImages];
//   setCurrentImageIndex(prev => ({
//     ...prev,
//     [productId]: (prev[productId] + 1) % images.length
//   }));
// };

//  const prevImage = (productId) => {
//   const product = productsData.find(p => p._id === productId);
//   if (!product) return;

//   const images = Array.isArray(product.galleryImages) ? product.galleryImages : [product.galleryImages];
//   setCurrentImageIndex(prev => ({
//     ...prev,
//     [productId]: (prev[productId] - 1 + images.length) % images.length
//   }));
// };

//   // Toggle expanded state for a specific product
//   const toggleExpanded = (productId) => {
//     setExpandedProducts(prev => ({
//       ...prev,
//       [productId]: !prev[productId]
//     }));
//   };

//   if (loading) {
//     return (
//       <section className="min-h-screen bg-white py-20 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="h-12 bg-gray-300 rounded w-80 mx-auto mb-6"></div>
//             <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
//           </div>
//           <div className="space-y-32">
//             {[1, 2].map((item) => (
//               <div key={item} className="flex flex-col lg:flex-row gap-16 items-center">
//                 <div className="flex-1 space-y-6">
//                   <div className="h-10 bg-gray-300 rounded w-3/4"></div>
//                   <div className="h-6 bg-gray-200 rounded w-1/2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-full"></div>
//                   <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//                 </div>
//                 <div className="flex-1">
//                   <div className="w-80 h-[500px] bg-gray-300 rounded-2xl"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-white py-20 px-4 sm:px-6">
//       {/* Background Elements */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-50 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-gray-50 rounded-full blur-3xl"></div>
//       </div>

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-6xl mx-auto text-center mb-16 sm:mb-24 relative"
//       >
//         <motion.span
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="inline-block px-6 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-8 border border-gray-200"
//         >
//         </motion.span>
//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//           What We Offer
//         </h1>
//       </motion.div>

//       {/* Products */}
//       <div className="max-w-6xl mx-auto relative">
//         {/* {productsData.map((product, index) => {
//           const isEven = index % 2 === 0;
//           const images = [product.bannerImages];
//           const currentIndex = currentImageIndex[product._id] || 0;
//           const isExpanded = expandedProducts[product._id] || false; // Get expanded state for this product */}
//         {productsData.map((product, index) => {
//           const isEven = index % 2 === 0;
//           // FIX: Properly handle bannerImages array
//           const images = Array.isArray(product.galleryImages) ? product.galleryImages : [product.galleryImages];
//           const currentIndex = currentImageIndex[product._id] || 0;
//           const isExpanded = expandedProducts[product._id] || false;


//           return (
//             <motion.div
//               key={product._id}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 items-center mb-20 lg:mb-32 last:mb-0"
//             >
//               {/* Image Carousel - Alternates between right and left */}
//               <motion.div
//                 className={`flex-1 w-full ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
//                 initial={{ opacity: 0, x: isEven ? 60 : -60 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//               >
//                 <div className="relative flex justify-center lg:justify-start">
//                   <div
//                     className="relative w-full mx-auto 
//                     aspect-[3/4] md:aspect-[8/9] 
//                     rounded-3xl overflow-hidden shadow-2xl"
//                   >
//                     {/* Carousel Container */}
//                     <div className="relative w-full h-full">
//                       <AnimatePresence mode="wait">
//                         <motion.div
//                           key={currentIndex}
//                           initial={{ opacity: 0, scale: 1.1 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           exit={{ opacity: 0, scale: 0.9 }}
//                           transition={{ duration: 0.5 }}
//                           className="absolute inset-0"
//                         >
//                           <Image
//                             src={images[currentIndex]}
//                             alt={`${product.title} - Image ${currentIndex + 1}`}
//                             fill
//                             className="object-contain"
//                             sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 500px"
//                             priority={index === 0 && currentIndex === 0}
//                           />
//                         </motion.div>
//                       </AnimatePresence>
//                     </div>

//                     {/* Navigation Arrows */}
//                     {images.length > 1 && (
//                       <>
//                         <button
//                           onClick={() => prevImage(product._id)}
//                           className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
//                           aria-label="Previous image"
//                         >
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                           </svg>
//                         </button>
//                         <button
//                           onClick={() => nextImage(product._id)}
//                           className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
//                           aria-label="Next image"
//                         >
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                           </svg>
//                         </button>
//                       </>
//                     )}

//                     {/* Dots Indicator */}
//                     {images.length > 1 && (
//                       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//                         {images.map((_, dotIndex) => (
//                           <button
//                             key={dotIndex}
//                             onClick={() => setCurrentImageIndex(prev => ({
//                               ...prev,
//                               [product._id]: dotIndex
//                             }))}
//                             className={`w-2 h-2 rounded-full transition-all duration-300 ${dotIndex === currentIndex
//                               ? 'bg-white scale-125'
//                               : 'bg-white/50 hover:bg-white/70'
//                               }`}
//                             aria-label={`Go to image ${dotIndex + 1}`}
//                           />
//                         ))}
//                       </div>
//                     )}

//                     {/* Bottom shadow overlay */}
//                     <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
//                   </div>

//                   {/* Decorative Elements - Hide on mobile */}
//                   <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-xl -z-10 hidden md:block"></div>
//                   <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gray-100 rounded-xl -z-10 hidden md:block"></div>
//                 </div>
//               </motion.div>

//               {/* Content - Alternates between left and right */}
//               <motion.div
//                 className={`flex-1 w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
//                 initial={{ opacity: 0, x: isEven ? -60 : 60 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//               >
//                 <div className="w-full max-w-full lg:max-w-lg mx-auto">
//                   {/* Number Badge */}
//                   <div className="flex items-center gap-4 mb-6 sm:mb-8">
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-base sm:text-lg">
//                       {index + 1}
//                     </div>
//                     <div className="h-px flex-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
//                   </div>

//                   {/* Title & Subtitle */}
//                   <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//                     {product.title}
//                   </h2>
//                   <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-4 sm:mb-6">
//                     {product.subTitle}
//                   </p>

//                   <div>
//                     {/* Description */}
//                     <p
//                       className={`
//           text-gray-600 mb-2 leading-relaxed text-justify
//           md:line-clamp-none 
//           ${isExpanded ? "line-clamp-none" : "line-clamp-3"} 
//           md:!line-clamp-none   /* desktop shows full always */
//         `}
//                     >
//                       {product.description}
//                     </p>

//                     {/* Show More Button — only mobile */}
//                     <button
//                       onClick={() => toggleExpanded(product._id)}
//                       className="text-black underline font-medium md:hidden"
//                     >
//                       {isExpanded ? "Show less" : "Show more"}
//                     </button>
//                   </div>

//                   {/* Features */}
//                   <div className="space-y-4 mb-8 sm:mb-10">
//                     <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
//                       Key Features
//                     </h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       {product.homeFeatureTags?.slice(0, 4).map((feature, i) => (
//                         <motion.div
//                           key={i}
//                           className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-gray-200"
//                           whileHover={{ x: 4, scale: 1.02 }}
//                         >
//                           <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-gray-300 flex items-center justify-center flex-shrink-0">
//                             <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                             </svg>
//                           </div>
//                           <span className="text-gray-700 font-medium text-sm">{feature}</span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Buttons */}
//                   <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-4 md:justify-start md:items-center">
//                     {/* Google Play Button */}
//                     {product.googleStoreLink && (
//                       <motion.a
//                         href={product.googleStoreLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center justify-center gap-2 px-3 py-2 sm:py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 font-medium text-xs sm:text-sm col-span-1"
//                         whileHover={{ scale: 1.05, y: -2 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
//                           <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
//                         </svg>
//                         <span className="hidden sm:inline">Google Play</span>
//                         <span className="sm:hidden">Google Play</span>
//                       </motion.a>
//                     )}

//                     {/* App Store Button */}
//                     {product.appleStoreLink && (
//                       <motion.a
//                         href={product.appleStoreLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center justify-center gap-2 px-3 py-2 sm:py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 font-medium text-xs sm:text-sm col-span-1"
//                         whileHover={{ scale: 1.05, y: -2 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M16.365 1.43c0 1.14-.418 2.088-1.254 2.842-.837.754-1.754 1.19-2.75 1.304-.028-.125-.042-.272-.042-.44 0-1.094.394-2.02 1.18-2.78.787-.76 1.71-1.15 2.766-1.15.032 0 .064.004.1.01v.214zM20.745 17.71c-.3.695-.66 1.332-1.085 1.91-.56.77-1.015 1.305-1.36 1.605-.54.495-1.12.75-1.75.764-.445.015-.983-.127-1.62-.426-.637-.3-1.223-.448-1.75-.448-.556 0-1.158.148-1.807.448-.65.3-1.178.45-1.585.45-.61-.027-1.2-.298-1.77-.81-.38-.334-.86-.895-1.445-1.685-.62-.843-1.127-1.82-1.52-2.93-.424-1.2-.635-2.36-.635-3.48 0-1.286.278-2.395.835-3.33.436-.75 1.02-1.34 1.75-1.77.73-.43 1.523-.653 2.38-.67.467-.013 1.08.15 1.84.49.758.337 1.245.506 1.46.506.162 0 .71-.205 1.64-.615.88-.38 1.62-.54 2.22-.48 1.64.133 2.878.78 3.71 1.94-1.47.9-2.208 2.152-2.21 3.75.002 1.25.465 2.29 1.39 3.12.412.39.87.69 1.37.9-.11.32-.245.65-.405.99z" />
//                         </svg>
//                         <span className="hidden sm:inline">Apple Store</span>
//                         <span className="sm:hidden">Apple Store</span>
//                       </motion.a>
//                     )}

//                     {/* Live Demo Button */}
//                     {product.livedemoLink && (
//                       <motion.a
//                         href={product.livedemoLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center justify-center gap-2 px-3 py-2 sm:py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium text-xs sm:text-sm col-span-2 md:col-span-1"
//                         whileHover={{ scale: 1.05, y: -2 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                         </svg>
//                         Live Demo
//                       </motion.a>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }