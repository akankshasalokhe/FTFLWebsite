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




"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import axios from "axios";

export default function ProductDetails() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/product")
      .then((res) => {
        if (res.data?.data?.length > 0) {
          setProductsData(res.data.data);
        }
      })
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 text-transparent bg-clip-text"
      >
        What We Offer
      </motion.h1>

      <div className="space-y-20 max-w-6xl mx-auto">
        {productsData.map((product, index) => {
          const isReversed = index % 2 !== 0; // alternate layout

          return (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col-reverse lg:flex-row ${isReversed ? "lg:flex-row-reverse" : ""}`}

            >
              {/* Description Side */}
              <div className="flex-1 bg-gray-100 p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h2>
                <p className="text-lg text-blue-600 font-semibold mb-3">
                  {product.subTitle}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  <span className="block md:hidden">
                    {product.description.substring(0, 200)}...
                  </span>
                  <span className="hidden md:block">
                    {product.description.substring(0, 500)}...
                  </span>
                </p>


                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-6">
                  {product.homeFeatureTags?.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 break-words">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>



                {/* <a
                  href={`/products/${product._id}`}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#298cf3] to-blue-600 text-white rounded-lg shadow-md font-semibold text-sm w-fit"
                >
                  Learn More
                </a> */}

                <div className="flex flex-wrap gap-4 justify-start lg:justify-start">

                  {/* App Store Buttons - Compact Version */}
                  <div className="flex justify-start gap-3">
                    {/* Google Play Store Button */}
                    {/* {product.googleStoreLink && (
                      <a

                        href={product.googleStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#4285F4] hover:bg-[#3367D6] text-white p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-start"
                        title="Download on Google Play"
                      >

                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>

                      </a>
                    )} */}


                    <a
                      href={product.livedemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#4285F4] hover:bg-[#3367D6] text-white p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-start"
                    >
                      Go to Website
                    </a>


                  </div>


                </div>
              </div>

              {/* Divider Line */}
              <div className="hidden lg:block w-[2px] bg-gray-300"></div>

              {/* Image Side */}


              <div className="flex-1 bg-white flex items-center justify-center">
                <div className="relative w-60 h-[500px] overflow-hidden bg-transparent">
                  <Image
                    src={product.mainImage}
                    alt={product.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500 bg-transparent"
                  />
                </div>
              </div>


            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
