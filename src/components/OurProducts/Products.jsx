// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const products = [
//   {
//     id: 1,
//     name: "LifelineCart",
//     type: "E-commerce Platform",
//     category: "web",
//     description:
//       "Lifeline Cart is a cutting-edge e-commerce solution with advanced inventory management, multiple payment gateways, and AI-powered recommendations.",
//     image: "/Team.jpeg",
//     features: ["Inventory", "Payments", "AI Suggestions"],
//   },
//   {
//     id: 2,
//     name: "EduSphere",
//     type: "Learning Management System",
//     category: "web",
//     description:
//       "EduSphere is an online learning platform with virtual classrooms, interactive assignments, and progress tracking to make education smarter and more accessible.",
//     image: "/Team.jpeg",
//     features: ["Virtual Classes", "Assignments", "Progress Tracking"],
//   },
//   {
//     id: 3,
//     name: "HealthConnect",
//     type: "Mobile Health App",
//     category: "mobile",
//     description:
//       "HealthConnect helps patients track their vitals, connect with doctors in real-time, and manage appointments seamlessly with a user-friendly mobile interface.",
//     image: "/Fetch True Modules mockup (2).png",
//     features: ["Appointments", "Live Chat", "Reports"],
//   },
//   {
//     id: 4,
//     name: "FitTrack",
//     type: "Mobile Fitness App",
//     category: "mobile",
//     description:
//       "FitTrack helps users monitor workouts, track calories, and stay motivated with personalized plans right in their pocket.",
//     image: "/Team.jpeg",
//     features: ["Workout Plans", "Calorie Tracking", "Progress Charts"],
//   },
// ];

// const ProductShowcase = () => {
//   const [activeTab, setActiveTab] = useState("web");

//   const filteredProducts = products.filter((p) => p.category === activeTab);

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
//             className={`px-5 py-2 rounded-full font-medium transition ${
//               activeTab === tab
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div
//         className={`grid gap-10 ${
//           activeTab === "mobile"
//             ? "grid-cols-1 sm:grid-cols-2" // 2 per row for mobile
//             : "grid-cols-1"
//         }`}
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
//               {product.category === "mobile" ? (
//                 // Phone Mockup (unchanged)
//                 <div className="relative w-[220px] h-[420px] rounded-3xl bg-gray-100 overflow-hidden shadow-xl">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ) : (
//                 // Laptop Mockup (realistic frame)
//                 <div className="relative w-full max-w-3xl bg-black rounded-t-lg shadow-xl overflow-hidden">
//                   {/* Top bar (bezels) */}
//                   <div className="h-6 bg-gray-800 flex items-center justify-center rounded-t-lg">
//                     <span className="w-3 h-3 bg-gray-600 rounded-full mx-1"></span>
//                     <span className="w-3 h-3 bg-gray-600 rounded-full mx-1"></span>
//                     <span className="w-3 h-3 bg-gray-600 rounded-full mx-1"></span>
//                   </div>
//                   {/* Screen */}
//                   <div className="h-[280px] md:h-[360px] bg-black flex items-center justify-center">
//                     <img
//                       src={product.image}
//                       alt={product.name}
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
//                   className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
//                     product.category === "mobile"
//                       ? "bg-blue-100 text-blue-800"
//                       : "bg-green-100 text-green-800"
//                   }`}
//                 >
//                   {product.category === "mobile" ? "Mobile App" : "Web App"}
//                 </span>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="p-6 flex flex-col flex-grow md:w-1/2 mt-4 md:mt-0">
//               <h3 className="text-xl font-bold mb-2 text-gray-900">
//                 {product.name}
//               </h3>
//               <p className="text-sm text-gray-500 mb-4">{product.type}</p>
//               <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
//                 {product.description}
//               </p>

//               <div className="mb-6">
//                 <h4 className="font-semibold text-gray-800 mb-3">
//                   Key Features:
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {product.features.map((feature, i) => (
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
//                 <Link href={`/products/${product.id}`} className="flex-1">
//                   <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition">
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
//         {/* <div className="bg-blue-600 text-white py-16 mt-16 text-center rounded-2xl shadow-lg">
//   <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
//   <p className="mb-6 text-lg">
//     Let’s build something amazing together. Reach out to our team today.
//   </p>
//   <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
//     Contact Us
//   </button>
// </div> */}

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

// const fallbackProducts = [
//   {
//     _id: "1",
//     title: "LifelineCart",
//     subTitle: "E-commerce Platform",
//     category: "web",
//     description:
//       "Lifeline Cart is a cutting-edge e-commerce solution with advanced inventory management, multiple payment gateways, and AI-powered recommendations.",
//     mainImage: "/Team.jpeg",
//     homeFeatureTags: ["Inventory", "Payments", "AI Suggestions"],
//   },
//   {
//     _id: "2",
//     title: "EduSphere",
//     subTitle: "Learning Management System",
//     category: "web",
//     description:
//       "EduSphere is an online learning platform with virtual classrooms, interactive assignments, and progress tracking to make education smarter and more accessible.",
//     mainImage: "/Team.jpeg",
//     homeFeatureTags: ["Virtual Classes", "Assignments", "Progress Tracking"],
//   },
//   {
//     _id: "3",
//     title: "HealthConnect",
//     subTitle: "Mobile Health App",
//     category: "mobile",
//     description:
//       "HealthConnect helps patients track their vitals, connect with doctors in real-time, and manage appointments seamlessly with a user-friendly mobile interface.",
//     mainImage: "/Fetch True Modules mockup (2).png",
//     homeFeatureTags: ["Appointments", "Live Chat", "Reports"],
//   },
//   {
//     _id: "4",
//     title: "FitTrack",
//     subTitle: "Mobile Fitness App",
//     category: "mobile",
//     description:
//       "FitTrack helps users monitor workouts, track calories, and stay motivated with personalized plans right in their pocket.",
//     mainImage: "/Team.jpeg",
//     homeFeatureTags: ["Workout Plans", "Calorie Tracking", "Progress Charts"],
//   },
// ];

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [productsData, setProductsData] = useState([]);

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
    <div className="py-16 px-6 md:px-16 bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Our Products
      </h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-12">
        {["web", "mobile"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-medium transition ${activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div
        className={`grid gap-10 ${activeTab === "mobile"
            ? "grid-cols-1 sm:grid-cols-2" // 2 per row for mobile
            : "grid-cols-1"
          }`}
      >
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row`}
          >
            {/* Device Mockup */}
            <div className="relative flex items-center justify-center bg-gray-100 p-6 md:w-1/2">
              {product.category.toLowerCase() === "mobile" ? (
                // 📱 iPhone-style Phone Mockup
                <div className="relative w-[220px] h-[440px] bg-black rounded-[3rem] shadow-2xl border-[10px] border-black overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-20"></div>
                  {/* Screen */}
                  <img
                    src={product.mainImage}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-[2.4rem]"
                  />
                </div>
              ) : (
                // 💻 Laptop Mockup
                <div className="relative w-full max-w-3xl bg-black rounded-t-lg shadow-xl overflow-hidden">
                  {/* Top bar */}
                  <div className="h-6 bg-gray-800 flex items-center justify-center rounded-t-lg">
                    <span className="w-3 h-3 bg-gray-600 rounded-full mx-1"></span>
                    <span className="w-3 h-3 bg-gray-600 rounded-full mx-1"></span>
                    <span className="w-3 h-3 bg-gray-600 rounded-full mx-1"></span>
                  </div>
                  {/* Screen */}
                  <div className="h-[280px] md:h-[360px] bg-black flex items-center justify-center">
                    <img
                      src={product.mainImage}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Bottom base */}
                  <div className="h-3 bg-gray-700 w-full"></div>
                  <div className="h-2 w-24 bg-gray-800 mx-auto rounded-b-md"></div>
                </div>
              )}

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${product.category.toLowerCase() === "mobile"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                    }`}
                >
                  {product.category.toLowerCase() === "mobile" ? "Mobile App" : "Web App"}
                </span>
              </div>
            </div>


            {/* Content */}
            <div className="p-6 flex flex-col flex-grow md:w-1/2 mt-4 md:mt-0">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{product.subTitle}</p>
              <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                {product.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Key Features:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.homeFeatureTags?.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mt-auto">
                <Link href={`/products/${product._id}`} className="flex-1">
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition">
                    Learn More
                  </button>
                </Link>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition">
                  Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
