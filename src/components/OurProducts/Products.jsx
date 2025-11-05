// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import axios from "axios";

// const ProductShowcase = () => {
//   const [productsData, setProductsData] = useState([]);
//   const [isMobile, setIsMobile] = useState(false);
//   //  const [flipped, setFlipped] = useState(false);


//   // Detect screen size
//   useEffect(() => {
//     const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

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
//     <div className="py-8 sm:py-16 px-4 sm:px-6 md:px-16 bg-gray-50">
//       {/* Heading */}
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 text-gray-900">
//         What We Offer
//       </h2>

//       {/* Product Grid - Show all products directly */}
//       {/* <div
//         className={`grid gap-6 sm:gap-10 ${isMobile
//             ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
//             : "grid-cols-1 sm:grid-cols-2"
//           }`}
//       >
//         {productsData.map((product, index) => (
//           <motion.div
//             key={product._id}
//             initial={{
//               opacity: 0,
//               y: isMobile ? 40 : 0,
//               x: !isMobile && index % 2 === 0 ? -60 : !isMobile ? 60 : 0,
//             }}
//             whileInView={{ opacity: 1, y: 0, x: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${isMobile ? "flex flex-col" : "flex flex-col md:flex-row"
//               }`}
//           >

//             <div
//               className={`relative flex items-center justify-center  ${isMobile ? "p-4 sm:p-6" : "p-6 md:w-1/2"
//                 }`}
//             >
//               {product.category.toLowerCase() === "mobile" ? (
//                 <div
//                   className={`relative ${isMobile
//                       ? "w-32 sm:w-44 md:w-52 aspect-[9/16]"
//                       : "w-[220px] h-[550px]"
//                     }   overflow-hidden`}
//                 >

//                   {!isMobile && (
//                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-34 h-5  z-20"></div>
//                   )}
//                   <img
//                     src={product.mainImage}
//                     alt={product.title}
//                     className="w-full h-full object-cover rounded-xl"
//                   />
//                 </div>
//               ) : (
//                 <div
//                   className={`relative ${isMobile
//                       ? "w-full max-w-md"
//                       : "w-full max-w-3xl"
//                     } bg-black rounded-t-lg shadow-xl overflow-hidden`}
//                 >

//                   <div
//                     className={`${isMobile ? "h-4 sm:h-5" : "h-6"
//                       } bg-gray-800 flex items-center justify-center rounded-t-lg`}
//                   >
//                     <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-600 rounded-full mx-1"></span>
//                     <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-600 rounded-full mx-1"></span>
//                     <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-600 rounded-full mx-1"></span>
//                   </div>
//                   <div
//                     className={`${isMobile ? "h-40 sm:h-56 md:h-72" : "h-[280px] md:h-[360px]"
//                       } bg-black`}
//                   >
//                     <img
//                       src={product.mainImage}
//                       alt={product.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="h-2 bg-gray-700 w-full"></div>
//                   <div className="h-1 sm:h-2 w-12 sm:w-20 md:w-24 bg-gray-800 mx-auto rounded-b-md"></div>
//                 </div>
//               )}


//               {!isMobile && (
//                 <div className="absolute top-4 left-4">
//                   <span
//                     className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${product.category.toLowerCase() === "mobile"
//                         ? "bg-blue-100 text-blue-800"
//                         : "bg-green-100 text-green-800"
//                       }`}
//                   >
//                     {product.category.toLowerCase() === "mobile"
//                       ? "Mobile App"
//                       : "Web App"}
//                   </span>
//                 </div>
//               )}
//             </div>


//             <div
//               className={`p-4 sm:p-6 flex flex-col flex-grow ${!isMobile ? "md:w-1/2" : ""
//                 }`}
//             >
//               <h3
//                 className={`text-lg sm:text-xl font-bold mb-2 text-gray-900 line-clamp-2 ${!isMobile ? "lg:text-2xl lg:mb-3" : ""
//                   }`}
//               >
//                 {product.title}
//               </h3>
//               <p
//                 className={`text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2 ${!isMobile ? "lg:text-base lg:mb-4" : ""
//                   }`}
//               >
//                 {product.subTitle}
//               </p>

//               <p
//                 className={`text-gray-600 mb-4 leading-relaxed text-sm sm:text-base ${!isMobile ? "lg:text-lg lg:mb-6" : ""
//                   }`}
//               >
//                 {isMobile
//                   ? `${product.description.substring(
//                     0,
//                     80
//                   )}...`
//                   : `${product.description.substring(0, 180)}${product.description.length > 80
//                   }`}
//               </p>

//               <div
//                 className={`mb-4 sm:mb-6 ${!isMobile ? "lg:mb-8" : ""
//                   }`}
//               >
//                 <h4
//                   className={`font-semibold text-gray-800 mb-2 text-sm sm:text-base ${!isMobile ? "lg:text-lg lg:mb-3" : ""
//                     }`}
//                 >
//                   Key Features:
//                 </h4>
//                 <div
//                   className={`flex flex-wrap gap-2 ${!isMobile ? "lg:gap-3" : ""
//                     }`}
//                 >
//                   {product.homeFeatureTags
//                     ?.slice(0, isMobile ? 3 : product.homeFeatureTags.length)
//                     .map((feature, i) => (
//                       <span
//                         key={i}
//                         className={`bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap ${!isMobile ? "lg:px-3 lg:py-2 lg:text-base" : ""
//                           }`}
//                       >
//                         {feature}
//                       </span>
//                     ))}
//                 </div>
//               </div>

//               <div className="mt-auto flex flex-col sm:flex-row gap-2">

//                 <Link href={`/products/${product._id}`} className="flex-1">
//                   <button className="w-full bg-gradient-to-r from-[#298cf3] to-blue-600 cursor-pointer hover:from-blue-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg transition text-sm sm:text-base">
//                     Learn More
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div> */}

// <div className="flex flex-wrap justify-around gap-x-20 gap-y-12 px-6 sm:px-10 md:px-16 lg:px-20 py-10">
//   {productsData.map((product, index) => {
//     const [flipped, setFlipped] = useState(false); // 👈 individual flip state per card

//     return (
//       <motion.div
//         key={product._id}
//         className="relative w-[360px] sm:w-[400px] md:w-[420px] lg:w-[440px] h-[70vh] perspective"
//         onHoverStart={() => setFlipped(true)}
//         onHoverEnd={() => setFlipped(false)}
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: index * 0.1 }}
//         viewport={{ once: true }}
//         style={{ perspective: 1200 }}
//       >
//         {/* Inner Flip Container */}
//         <motion.div
//           className="relative w-full h-full transition-transform duration-700 preserve-3d"
//           animate={{ rotateY: flipped ? 180 : 0 }}
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           {/* FRONT SIDE */}
//           <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl backface-hidden bg-white flex justify-center items-center">
//             <img
//               src={product.mainImage}
//               alt={product.title}
//               className="object-contain w-full h-full"
//             />
//             <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-center">
//               <h3 className="text-white text-lg font-semibold truncate">
//                 {product.title}
//               </h3>
//             </div>
//           </div>

//           {/* BACK SIDE */}
//           <div
//             className="absolute inset-0 bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row justify-center items-center backface-hidden"
//             style={{ transform: "rotateY(180deg)" }}
//           >
//             {/* Text Section */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: flipped ? 1 : 0, x: flipped ? 0 : -20 }}
//               transition={{ duration: 0.5 }}
//               className="w-full md:w-[55%] p-6 flex flex-col justify-center text-center md:text-left"
//             >
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                 {product.title}
//               </h3>
//               <p className="text-gray-700 text-base mb-3 font-medium">
//                 {product.subTitle}
//               </p>

//               <p className="text-gray-500 text-sm leading-relaxed mb-4">
//                 {product.description.length > 150
//                   ? product.description.slice(0, 150) + "..."
//                   : product.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
//                 {product.homeFeatureTags?.slice(0, 3).map((tag, i) => (
//                   <span
//                     key={i}
//                     className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <Link href={`/products/${product._id}`}>
//                 <button className="bg-gradient-to-r from-[#298cf3] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-5 rounded-lg transition font-semibold text-sm shadow-md">
//                   Learn More →
//                 </button>
//               </Link>
//             </motion.div>

//             {/* Image Section (Right side on back) */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: flipped ? 1 : 0, x: flipped ? 0 : 20 }}
//               transition={{ duration: 0.5 }}
//               className="hidden md:flex md:w-[75%] h-full items-center justify-center relative"
//             >
//               <img
//                 src={product.mainImage}
//                 alt={product.title}
//                 className="w-[100%] h-[100%] object-contain"
//               />
//               <div className="absolute inset-0 bg-gradient-to-l from-white/60 to-transparent"></div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </motion.div>
//     );
//   })}
// </div>



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
  const [productsData, setProductsData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [flippedStates, setFlippedStates] = useState([]);

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
          setFlippedStates(new Array(res.data.data.length).fill(false));
        }
      })
      .catch((err) => {
        console.error("API fetch error:", err);
      });
  }, []);

  // Handle flip states
  const handleHoverStart = (index) => {
    setFlippedStates((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const handleHoverEnd = (index) => {
    setFlippedStates((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  // Tap-to-flip toggle for mobile
  const handleTapFlip = (index) => {
    setFlippedStates((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="py-8 sm:py-16 px-4 sm:px-8 md:px-16 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 text-gray-900">
        What We Offer
      </h2>

      <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 px-4 md:px-10 py-10">
        {productsData.map((product, index) =>
          isMobile ? (
            // 📱 Mobile view: show both image + content together
            <div
              key={product._id}
              className="w-[360px] sm:w-[400px]  rounded-2xl shadow-xl overflow-hidden flex flex-col"
            >
              <img
                src={product.mainImage}
                alt={product.title}
                className="w-full h-100 object-contain"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-700 text-sm mb-3">{product.subTitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed text-start mb-4">
                  {product.description.length > 220
                    ? product.description.slice(0, 220) + "..."
                    : product.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {product.homeFeatureTags?.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/products/${product._id}`}>
                  <button className="bg-gradient-to-r from-[#298cf3] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-5 rounded-lg transition font-semibold text-sm shadow-md">
                    Learn More →
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            // 💻 Desktop view: flip animation
            <motion.div
              key={product._id}
              className="relative w-[360px] sm:w-[400px] md:w-[420px] lg:w-[440px] h-[70vh] perspective cursor-pointer"
              onHoverStart={() => handleHoverStart(index)}
              onHoverEnd={() => handleHoverEnd(index)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ perspective: 1200 }}
            >
              {/* Inner Flip Container */}
              <motion.div
                className="relative w-full h-full transition-transform duration-700 preserve-3d"
                animate={{ rotateY: flippedStates[index] ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* FRONT SIDE */}
               
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl backface-hidden bg-white flex justify-center items-center">
                  <img
                    src={product.mainImage}
                    alt={product.title}
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-center">
                    <h3 className="text-white text-lg font-semibold truncate">
                      {product.title}
                    </h3>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div
                  className="absolute inset-0 bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row justify-center items-center backface-hidden"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: flippedStates[index] ? 1 : 0,
                      x: flippedStates[index] ? 0 : -20,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-[55%] p-6 flex flex-col justify-center text-center md:text-left"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-700 text-base mb-3 font-medium">
                      {product.subTitle}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {product.description.length > 200
                        ? product.description.slice(0, 200) + "..."
                        : product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                      {product.homeFeatureTags?.slice(0, 3).map((tag, i) => (
                         <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {tag}
                          </span>

                      ))}
                    </div>

                    <Link href={`/products/${product._id}`}>
                      <button className="bg-gradient-to-r from-[#298cf3] to-blue-600 hover:from-blue-600 hover:to-blue-700 cursor-pointer text-white py-2 px-5 rounded-lg transition font-semibold text-sm shadow-md">
                        Learn More →
                      </button>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: flippedStates[index] ? 1 : 0,
                      x: flippedStates[index] ? 0 : 20,
                    }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:flex md:w-[75%] h-full items-center justify-center relative"
                  >
                    <img
                      src={product.mainImage}
                      alt={product.title}
                      className="w-[100%] h-[100%] object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-white/60 to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )
        )}

      </div>
    </div>
  );
};

export default ProductShowcase;
