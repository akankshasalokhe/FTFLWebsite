



// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import axios from "axios";

// const ProductShowcase = () => {
//   const [activeTab, setActiveTab] = useState("web");
//   const [productsData, setProductsData] = useState([]);

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     // Set initial value
//     checkScreenSize();

//     // Add event listener
//     window.addEventListener('resize', checkScreenSize);

//     // Cleanup
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);


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

//   const filteredProducts = productsData.filter(
//     (p) => p.category.toLowerCase() === activeTab
//   );

//   return (
//     <div className="py-16 px-6 md:px-16 bg-gray-50">
//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
//         Our Products
//       </h2>

//       {/* Tabs */}
//       <div className="flex justify-center space-x-4 mb-12">
//         {["web", "mobile"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-5 py-2 rounded-lg font-medium transition ${activeTab === tab
//               ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white"
//               : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div
//         className={`grid gap-10 ${activeTab === "mobile"
//           ? "grid-cols-1 sm:grid-cols-2" // 2 per row for mobile
//           : "grid-cols-1"
//           }`}
//       >
//         {filteredProducts.map((product, index) => (
//           <motion.div
//             key={product.id}
//             initial={{
//               opacity: 0,
//               x: index % 2 === 0 ? -60 : 60,
//             }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row`}
//           >
//             {/* Device Mockup */}
//             <div className="relative flex items-center justify-center bg-gray-100 p-6 md:w-1/2">
//               {product.category.toLowerCase() === "mobile" ? (
//                 // 📱 iPhone-style Phone Mockup
//                 <div className="relative w-[220px] h-[440px] bg-black rounded-[3rem] shadow-2xl border-[10px] border-black overflow-hidden">
//                   {/* Notch */}
//                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-20"></div>
//                   {/* Screen */}
//                   <img
//                     src={product.mainImage}
//                     alt={product.title}
//                     className="w-full h-full object-cover rounded-[2.4rem]"
//                   />
//                 </div>
//               ) : (
//                 // 💻 Laptop Mockup
//                 <div className="relative w-full max-w-3xl bg-black rounded-t-lg shadow-xl overflow-hidden">
//                   {/* Top bar */}
//                   <div className="h-6 bg-gray-800 flex items-center justify-center rounded-t-lg">
//                     <span className="w-3 h-3 bg-gray-600 rounded-full mx-1"></span>
//                     <span className="w-3 h-3 bg-gray-600 rounded-full mx-1"></span>
//                     <span className="w-3 h-3 bg-gray-600 rounded-full mx-1"></span>
//                   </div>
//                   {/* Screen */}
//                   <div className="h-[280px] md:h-[360px] bg-black flex items-center justify-center">
//                     <img
//                       src={product.mainImage}
//                       alt={product.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   {/* Bottom base */}
//                   <div className="h-3 bg-gray-700 w-full"></div>
//                   <div className="h-2 w-24 bg-gray-800 mx-auto rounded-b-md"></div>
//                 </div>
//               )}

//               {/* Badge */}
//               <div className="absolute top-4 left-4">
//                 <span
//                   className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${product.category.toLowerCase() === "mobile"
//                     ? "bg-blue-100 text-blue-800"
//                     : "bg-green-100 text-green-800"
//                     }`}
//                 >
//                   {product.category.toLowerCase() === "mobile" ? "Mobile App" : "Web App"}
//                 </span>
//               </div>
//             </div>


//             {/* Content */}
//             <div className="p-6 flex flex-col flex-grow md:w-1/2 mt-4 md:mt-0">
//               <h3 className="text-xl font-bold mb-2 text-gray-900">
//                 {product.title}
//               </h3>
//               <p className="text-sm text-gray-500 mb-4">{product.subTitle}</p>
//               {/* <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
//                 {product.description}
//               </p> */}
//               <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
//                 {isMobile
//                   ? `${product.description.slice(0, 50)}${product.description.length > 50 ? '...' : ''}`
//                   : product.description
//                 }
//               </p>
//               <div className="mb-6">
//                 <h4 className="font-semibold text-gray-800 mb-3">
//                   Key Features:
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {product.homeFeatureTags?.map((feature, i) => (
//                     <span
//                       key={i}
//                       className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
//                     >
//                       {feature}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex space-x-4 mt-auto">
//                 <Link href={`/products/${product._id}`} className="flex-1">
//                   <button className="w-full bg-gradient-to-r from-[#298cf3] to-blue-600 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition">
//                     Learn More
//                   </button>
//                 </Link>
//                 <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition">
//                   Demo
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductShowcase;




// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import axios from "axios";

// const ProductShowcase = () => {
//   const [activeTab, setActiveTab] = useState("web");
//   const [productsData, setProductsData] = useState([]);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

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

//   const filteredProducts = productsData.filter(
//     (p) => p.category.toLowerCase() === activeTab
//   );

//   return (
//     <div className="py-8 px-4 sm:py-16 sm:px-6 md:px-16 bg-gray-50">
//       {/* Heading */}
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 text-gray-900">
//         Our Products
//       </h2>

//       {/* Tabs (scrollable on mobile) */}
//       <div className="flex justify-center overflow-x-auto space-x-2 sm:space-x-4 mb-6 sm:mb-12 no-scrollbar">
//         {["web", "mobile"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-3 sm:px-5 py-2 rounded-lg font-medium transition text-sm sm:text-base whitespace-nowrap ${
//               activeTab === tab
//                 ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid - responsive */}
//       <div className="grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredProducts.map((product, index) => (
//           <motion.div
//             key={product._id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full flex flex-col"
//           >
//             {/* Device Mockup */}
//             <div className="relative flex items-center justify-center bg-gray-100 p-4 sm:p-6">
//               {product.category.toLowerCase() === "mobile" ? (
//                 // 📱 Mobile Phone Mockup - fluid
//                 <div className="relative w-32 sm:w-44 md:w-52 aspect-[9/16] bg-black rounded-2xl shadow-xl border-8 border-black overflow-hidden">
//                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3 sm:h-4 bg-black rounded-b-lg z-20"></div>
//                   <img
//                     src={product.mainImage}
//                     alt={product.title}
//                     className="w-full h-full object-cover rounded-xl"
//                   />
//                 </div>
//               ) : (
//                 // 💻 Laptop Mockup - fluid
//                 <div className="relative w-full max-w-md bg-black rounded-t-lg shadow-xl overflow-hidden">
//                   <div className="h-4 sm:h-5 bg-gray-800 flex items-center justify-center rounded-t-lg">
//                     <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-600 rounded-full mx-1"></span>
//                     <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-600 rounded-full mx-1"></span>
//                     <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-600 rounded-full mx-1"></span>
//                   </div>
//                   <div className="h-40 sm:h-56 md:h-72 bg-black">
//                     <img
//                       src={product.mainImage}
//                       alt={product.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="h-2 bg-gray-700 w-full"></div>
//                   <div className="h-1 w-12 sm:w-20 bg-gray-800 mx-auto rounded-b-md"></div>
//                 </div>
//               )}
//             </div>

//             {/* Content */}
//             <div className="p-4 sm:p-6 flex flex-col flex-grow">
//               <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 line-clamp-2">
//                 {product.title}
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2">
//                 {product.subTitle}
//               </p>
//               <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
//                 {product.description}
//               </p>

//               <div className="mb-4 sm:mb-6">
//                 <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
//                   Key Features:
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {product.homeFeatureTags
//                     ?.slice(0, isMobile ? 3 : 6)
//                     .map((feature, i) => (
//                       <span
//                         key={i}
//                         className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap"
//                       >
//                         {feature}
//                       </span>
//                     ))}
//                 </div>
//               </div>

//               <div className="mt-auto flex flex-col sm:flex-row gap-2">
//                 <Link href={`/products/${product._id}`} className="flex-1">
//                   <button className="w-full bg-gradient-to-r from-[#298cf3] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg transition text-sm sm:text-base">
//                     Learn More
//                   </button>
//                 </Link>
//                 <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition text-sm sm:text-base">
//                   Demo
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductShowcase;





"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import axios from "axios";

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [productsData, setProductsData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Fetch products
  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/product")
      .then((res) => {
        if (res.data?.data?.length > 0) {
          setProductsData(res.data.data);
        }
      })
      .catch((err) => {
        console.error("API fetch error:", err);
      });
  }, []);

  const filteredProducts = productsData.filter(
    (p) => p.category.toLowerCase() === activeTab
  );

  return (
    <div className="py-8 sm:py-16 px-4 sm:px-6 md:px-16 bg-gray-50">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 text-gray-900">
        Our Products
      </h2>

      {/* Tabs */}
      <div
        className={`flex ${isMobile ? "justify-center space-x-2" : "justify-center space-x-4"
          } mb-6 sm:mb-12`}
      >
        {["web", "mobile"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 sm:px-5 py-2 rounded-lg font-medium transition text-sm sm:text-base whitespace-nowrap ${activeTab === tab
                ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div
        className={`grid gap-6 sm:gap-10 ${isMobile
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : activeTab === "mobile"
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1"
          }`}
      >
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{
              opacity: 0,
              y: isMobile ? 40 : 0,
              x: !isMobile && index % 2 === 0 ? -60 : !isMobile ? 60 : 0,
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${isMobile ? "flex flex-col" : "flex flex-col md:flex-row"
              }`}
          >
            {/* Device Mockup */}
            <div
              className={`relative flex items-center justify-center bg-gray-100 ${isMobile ? "p-4 sm:p-6" : "p-6 md:w-1/2"
                }`}
            >
              {product.category.toLowerCase() === "mobile" ? (
                <div
                  className={`relative ${isMobile ? "w-32 sm:w-44 md:w-52 aspect-[9/16]" : "w-[220px] h-[440px]"
                    } bg-black rounded-2xl shadow-xl border-8 border-black overflow-hidden`}
                >
                  {/* Notch for desktop style */}
                  {!isMobile && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-20"></div>
                  )}
                  <img
                    src={product.mainImage}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ) : (
                <div
                  className={`relative ${isMobile
                      ? "w-full max-w-md"
                      : "w-full max-w-3xl"
                    } bg-black rounded-t-lg shadow-xl overflow-hidden`}
                >
                  {/* Top bar */}
                  <div
                    className={`${isMobile ? "h-4 sm:h-5" : "h-6"
                      } bg-gray-800 flex items-center justify-center rounded-t-lg`}
                  >
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-600 rounded-full mx-1"></span>
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-600 rounded-full mx-1"></span>
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-600 rounded-full mx-1"></span>
                  </div>
                  <div
                    className={`${isMobile ? "h-40 sm:h-56 md:h-72" : "h-[280px] md:h-[360px]"
                      } bg-black`}
                  >
                    <img
                      src={product.mainImage}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-2 bg-gray-700 w-full"></div>
                  <div className="h-1 sm:h-2 w-12 sm:w-20 md:w-24 bg-gray-800 mx-auto rounded-b-md"></div>
                </div>
              )}

              {/* Badge (only desktop) */}
              {!isMobile && (
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${product.category.toLowerCase() === "mobile"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                      }`}
                  >
                    {product.category.toLowerCase() === "mobile"
                      ? "Mobile App"
                      : "Web App"}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className={`p-4 sm:p-6 flex flex-col flex-grow ${!isMobile ? "md:w-1/2" : ""}`}>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2">
                {product.subTitle}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                {isMobile
                  ? `${product.description.slice(0, 80)}${product.description.length > 80 ? "..." : ""
                  }`
                  : product.description}
              </p>

              <div className="mb-4 sm:mb-6">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                  Key Features:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.homeFeatureTags
                    ?.slice(0, isMobile ? 3 : product.homeFeatureTags.length)
                    .map((feature, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap"
                      >
                        {feature}
                      </span>
                    ))}
                </div>
              </div>

              {/* <div className="mt-auto flex flex-col sm:flex-row gap-2">
                <Link href={`/products/${product._id}`} className="flex-1">
                  <button className="w-full bg-gradient-to-r from-[#298cf3] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg transition text-sm sm:text-base">
                    Learn More
                  </button>
                </Link>
              
               
                {product.livedemoLink && (
                  <a
                    href={product.livedemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                
                
              </div> */}

              <div className="mt-auto flex flex-col sm:flex-row gap-2">
                {/* Learn More button */}
                <Link href={`/products/${product._id}`} className="flex-1">
                  <button className="w-full bg-gradient-to-r from-[#298cf3] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg transition text-sm sm:text-base">
                    Learn More
                  </button>
                </Link>

                {/* Live Demo button */}
                {product.livedemoLink ? (
                  <a
                    href={product.livedemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition text-sm sm:text-base flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                ) : (
                  <button
                    className="flex-1 w-full bg-gray-200 text-gray-400 py-2 px-4 rounded-lg transition text-sm sm:text-base cursor-not-allowed"
                    disabled
                  >
                    Live Demo
                  </button>
                )}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
