// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import Slider from "react-slick";

// const products = [
//   {
//     id: 1,
//     name: "LifelineCart",
//     type: "E-commerce",
//     description:
//       "Lifeline Cart is a cutting-edge e-commerce solution with advanced inventory management, multiple payment gateways, and AI-powered recommendations. Our platform offers seamless checkout experiences and mobile-responsive design.",
//     images: [
//       "/",
//       "/images/staybea.jpg",
//       "/s1.jpeg"
//     ],
//     themeColor: "from-blue-400 to-blue-200",
//     features: ["AI Recommendations", "Secure Payments", "Inventory Management", "Sales Analytics"]
//   },
//   {
//     id: 2,
//     name: "Fetch True",
//     type: "B2B",
//     description:
//       "Fetch True simplifies your business workflows, offering powerful features for data management and team collaboration. Boost productivity with our intuitive platform and seamless integrations with other tools and services.",
//     images: ["/s1.jpeg", "/images/staybea.jpg"],
//     themeColor: "from-blue-400 to-blue-200",
//     features: ["Data Integration", "Collaboration Tools", "Custom Workflows", "Real-time Analytics"]
//   },
//   {
//     id: 3,
//     name: "StayBea",
//     type: "Dating App",
//     description:
//       "Find your perfect match with our engaging, secure, and modern dating application designed for meaningful connections. Enjoy features like AI matchmaking, video profiles, and secure messaging. Plan and join events to meet new people in a safe environment.",
//     images: ["/images/staybea.jpg", "/s1.jpeg"],
//     themeColor: "from-blue-400 to-blue-200",
//     features: ["AI Matchmaking", "Video Profiles", "Secure Messaging", "Event Integration"]
//   },
// ];

// export default function ProductDetails() {
//   const [selectedProduct, setSelectedProduct] = useState(products[0]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 300,
//     arrows: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-6 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
//           Explore Our Trending Products
//         </h1>

//         {/* Product Selector */}
//         <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
//           {products.map((product) => (
//             <button
//               key={product.id}
//               onClick={() => setSelectedProduct(product)}
//               className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:scale-105 ${
//                 selectedProduct.id === product.id
//                   ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
//                   : "bg-white text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               {product.type}
//             </button>
//           ))}
//         </div>

//         {/* Product Details */}
//         <motion.div
//           key={selectedProduct.id}
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden flex flex-col lg:grid lg:grid-cols-2 gap-6 bg-white p-4 sm:p-6  hover:shadow-2xl transition-shadow"
//         >
//           {/* Image Carousel */}
//           <div className="h-64 sm:h-80 md:h-96 w-full relative mx-auto max-w-md">
//             <Slider {...settings}>
//               {selectedProduct.images.map((img, i) => (
//                 <div key={i} className="h-64 sm:h-80 md:h-96 relative">
//                   <Image
//                     src={img}
//                     alt={`${selectedProduct.name} ${i}`}
//                     fill
//                     className="object-cover rounded-xl w-full h-full"

//                   />
//                 </div>
//               ))}
//             </Slider>
//           </div>

//           {/* Product Info */}
//           <div className="flex flex-col justify-center">
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-900">
//               {selectedProduct.name}
//             </h2>
//             <p className="text-base sm:text-lg font-semibold text-blue-500 mb-2">
//               {selectedProduct.type}
//             </p>
//             <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
//               {selectedProduct.description}
// </p>
// <p className="text-lg sm:text-xl mb-2 text-gray-900">Features</p>
// <ul className="mb-4 sm:mb-6 space-y-1 sm:space-y-2">
//   {selectedProduct.features.map((feature, index) => (
//     <li key={index} className="flex items-center">
//       <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//       </svg>
//       <span className="text-sm sm:text-base text-gray-700">{feature}</span>
//     </li>
//   ))}
// </ul>

//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//               <Link href={`/products/${selectedProduct.id}`}>
//                 <button className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform text-sm sm:text-base">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }






// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import Slider from "react-slick";
// import axios from "axios";

// export default function ProductDetails() {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [productsData, setProductsData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/product")
//       .then((res) => {
//         if (res.data?.data?.length > 0) {
//           setProductsData(res.data.data);
//           setSelectedProduct(res.data.data[0]); // default to first product
//         }
//       })
//       .catch((err) => {
//         console.error("API fetch error:", err);
//       });
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 300,
//     arrows: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-6 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
//           Explore Our Trending Products
//         </h1>

//         {/* Product Selector */}
//         <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
//           {productsData.slice(0, 3).map((p) => (
//             <button
//               key={p._id}
//               onClick={() => setSelectedProduct(p)}
//               className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:scale-105 ${selectedProduct?._id === p._id
//                 ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white"
//                 : "bg-white text-gray-700 hover:bg-gray-100"
//                 }`}
//             >
//               {p.title}
//             </button>
//           ))}
//         </div>

//         {/* Product Details */}
//         {selectedProduct && (
//           <motion.div
//             key={selectedProduct._id}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden flex flex-col lg:grid lg:grid-cols-2 gap-6 bg-white p-4 sm:p-6 hover:shadow-2xl transition-shadow"
//           >
//             {/* Image Carousel */}
//             <div className="h-64 sm:h-80 md:h-96 w-full relative mx-auto max-w-md">
//               <Slider {...settings}>
//                 {selectedProduct.mainImage && (
//                   <div className="h-64 sm:h-80 md:h-96 relative">
//                     <Image
//                       src={selectedProduct.mainImage}
//                       alt={selectedProduct.title}
//                       fill
//                        quality={90}
//                       className="object-cover rounded-xl w-full h-full"
//                     />
//                   </div>
//                 )}
//               </Slider>
//             </div>

//             {/* Product Info */}
//             <div className="flex flex-col justify-center">
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-900">
//                 {selectedProduct.title}
//               </h2>
//               <p className="text-base sm:text-lg font-semibold text-blue-500 mb-2">
//                 {selectedProduct.subTitle}
//               </p>
//               <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
//                 {selectedProduct.description.substring(0, 100)}...
//               </p>

//               <p className="text-lg sm:text-xl mb-2 text-gray-900">Features</p>
//              <ul className="mb-4 sm:mb-6 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3">
//                 {selectedProduct.homeFeatureTags.map((feature, index) => (
//                   <li key={index} className="flex items-center">
//                     <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                     <div className="text-sm sm:text-base text-gray-700">
//                       {feature}
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                 <Link href={`/products/${selectedProduct._id}`} className="flex-1">
//                   <button className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform text-sm sm:text-base">
//                     Learn More
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import axios from "axios";

export default function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/product")
      .then((res) => {
        if (res.data?.data?.length > 0) {
          setProductsData(res.data.data);
          setSelectedProduct(res.data.data[0]); // default to first product
        }
      })
      .catch((err) => {
        console.error("API fetch error:", err);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  // Function to render ALL images in mobile mockup shape
  const renderMobileMockup = (product) => {
    return (
      <div className="relative w-48 h-96 mx-auto shadow-2xl border-2 rounded-2xl border-black overflow-hidden">
        {/* Notch */}
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 z-20"></div> */}
        {/* Screen */}
        <div className="w-full h-full  overflow-hidden">
          <Image
            src={product.mainImage}
            alt={product.title}
            fill
            quality={90}
            className="object-cover"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
          Explore Our Trending Products
        </h1>

        {/* Product Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {productsData.slice(0, 2).map((p) => (
            <button
              key={p._id}
              onClick={() => setSelectedProduct(p)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:scale-105 ${selectedProduct?._id === p._id
                ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Product Details */}
        {selectedProduct && (
          <motion.div
            key={selectedProduct._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden flex flex-col lg:grid lg:grid-cols-2 gap-6 bg-white p-4 sm:p-6 hover:shadow-2xl transition-shadow"
          >
            {/* Mobile Device Mockup - For ALL products */}
            <div className="flex items-center justify-center p-4 sm:p-6">
              {renderMobileMockup(selectedProduct)}
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              {/* Category Badge - Optional, uncomment if needed */}
              {/* <div className="mb-4">
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${selectedProduct.category.toLowerCase() === "mobile"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-green-100 text-green-800"
                  }`}>
                  {selectedProduct.category.toLowerCase() === "mobile" ? "📱 Mobile App" : "💻 Web App"}
                </span>
              </div> */}

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                {selectedProduct.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-blue-500 mb-2">
                {selectedProduct.subTitle}
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                {selectedProduct.description.substring(0, 120)}...
              </p>

              <p className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">Key Features</p>
              <ul className="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {selectedProduct.homeFeatureTags?.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div className="text-sm sm:text-base text-gray-700">
                      {feature}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                <Link href={`/products/${selectedProduct._id}`} className="flex-1">
                  <button className="w-full px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform text-sm sm:text-base font-semibold">
                    Learn More
                  </button>
                </Link>
                
                {selectedProduct.livedemoLink && (
                  <a
                    href={selectedProduct.livedemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button className="w-full px-4 py-2 sm:px-5 sm:py-2.5 bg-gray-100 text-gray-700 rounded-lg shadow-md hover:scale-105 transition-transform text-sm sm:text-base font-semibold border border-gray-300 hover:bg-gray-200">
                      Live Demo
                    </button>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}