// "use client";

// import { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const TechStack = () => {
//   const [activeTab, setActiveTab] = useState("");
//   const [isMobile, setIsMobile] = useState(false);
//   const [techData, setTechData] = useState({});
//   const sliderRef = useRef(null);

//   // Fetch data from backend
//   useEffect(() => {
//     const fetchTechData = async () => {
//       try {
//         const res = await axios.get("https://landing-page-yclw.vercel.app/api/technology"); // replace with your actual API endpoint
//         if (res.data.success) {
//           const formatted = {};
//           res.data.data.forEach((field) => {
//             formatted[field.fieldName] = field.technologyName.map((tech) => ({
//               id: tech._id,
//               name: tech.title,
//               icon: tech.iconImage,
//             }));
//           });
//           setTechData(formatted);
//           setActiveTab(Object.keys(formatted)[0] || "");
//         }
//       } catch (err) {
//         console.error("Error fetching tech data:", err);
//       }
//     };

//     fetchTechData();
//   }, []);

//   // Detect mobile
//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkIsMobile();
//     window.addEventListener("resize", checkIsMobile);

//     return () => window.removeEventListener("resize", checkIsMobile);
//   }, []);

//   // // Slider settings
//   // const sliderSettings = {
//   //   dots: false,
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 3,
//   //   slidesToScroll: 3,
//   //   rows:2,
//   //   arrows: true,
//   //   autoplay: true,
//   //   autoplaySpeed: 3000,
//   //   pauseOnHover: true,
//   //   cssEase: "ease-in-out",
//   //   responsive: [
//   //     {
//   //       breakpoint: 640,
//   //       settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false },
//   //     },
//   //     {
//   //       breakpoint: 480,
//   //       settings: {
//   //         slidesToShow: 1,
//   //         slidesToScroll: 1,
//   //         arrows: false,
//   //         centerMode: true,
//   //         centerPadding: "40px",
//   //       },
//   //     },
//   //   ],
//   // };

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     rows: 2,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     cssEase: "ease-in-out",
//     responsive: [
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           rows: 2,
//           arrows: false
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           rows: 2,
//           arrows: false,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-10 md:mb-14">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
//             Our{" "}
//             <span className="text-transparent bg-clip-text bg-blue-500">
//               Technology Stack
//             </span>
//           </h2>
//           <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//             Cutting-edge technologies powering our digital solutions
//           </p>
//         </div>

//         {/* Tabs */}
//         {/* <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12 px-2">
//           {Object.keys(techData).map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-2 text-xs sm:text-sm md:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-300 ${
//                 activeTab === tab
//                   ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white shadow-lg"
//                   : "bg-white border border-blue-200 text-blue-700 hover:bg-blue-50"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div> */}

//         <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 md:mb-12 px-2">
//           {Object.keys(techData).map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-2 sm:px-4 py-2 text-xs sm:text-sm md:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-300 text-center ${activeTab === tab
//                 ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white shadow-lg"
//                 : "bg-white border border-blue-200 text-blue-700 hover:bg-blue-50"
//                 }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>



//         {/* Tech Grid (Desktop) */}
//         {/* {!isMobile && activeTab && (
//           <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 md:gap-4 px-2">
//             {techData[activeTab]?.map((tech) => (
//               <div
//                 key={tech.id}
//                 className="flex flex-col  items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-50 w-[100px] mx-auto"
//               >
//                 <div className="p-2 bg-blue-50 rounded-full flex items-center justify-center w-14 h-14 mb-2 hover:bg-blue-100 transition-colors duration-300">
//                   <img
//                     src={tech.icon}
//                     alt={tech.name}
//                     className="w-8 h-8 object-contain"
//                   />
//                 </div>
//                 <span className="text-xs md:text-sm font-medium text-gray-800 text-center">
//                   {tech.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )} */}


//         {!isMobile && activeTab && (
//           <div className={`hidden md:flex flex-wrap gap-4 md:gap-4 px-2 ${techData[activeTab]?.length >= 8
//               ? 'justify-start'
//               : 'justify-center max-w-4xl mx-auto'
//             }`}>
//             {techData[activeTab]?.map((tech) => (
//               <div
//                 key={tech.id}
//                 className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-50 w-[100px]"
//               >
//                 <div className="p-2 bg-blue-50 rounded-full flex items-center justify-center w-14 h-14 mb-2 hover:bg-blue-100 transition-colors duration-300">
//                   <img
//                     src={tech.icon}
//                     alt={tech.name}
//                     className="w-8 h-8 object-contain"
//                   />
//                 </div>
//                 <span className="text-xs md:text-sm font-medium text-gray-800 text-center">
//                   {tech.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Tech Slider (Mobile) */}
//         {/* {isMobile && activeTab && (
//           <div className="md:hidden px-2">
//             <Slider ref={sliderRef} {...sliderSettings}>
//               {techData[activeTab]?.map((tech) => (
//                 <div key={tech.id} className="px-2 focus:outline-none">
//                   <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-50 w-[120px] mx-auto">
//                     <div className="p-2 bg-blue-50 rounded-full flex items-center justify-center w-12 h-12 mb-2 hover:bg-blue-100 transition-colors duration-300">
//                       <img
//                         src={tech.icon}
//                         alt={tech.name}
//                         className="w-7 h-7 object-contain"
//                       />
//                     </div>
//                     <span className="text-xs font-medium text-gray-800 text-center">
//                       {tech.name}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         )} */}

//         {isMobile && activeTab && (
//           <div className="md:hidden px-2">
//             {techData[activeTab]?.length > 6 ? (
//               <Slider
//                 ref={sliderRef}
//                 dots={true}
//                 arrows={false}
//                 infinite={true}
//                 speed={500}
//                 slidesToShow={1} // Each slide contains 6 items
//                 slidesToScroll={1}
//                 autoplay={true}
//                 autoplaySpeed={3000}
//                 pauseOnHover={true}
//                 className="tech-slider"
//               >
//                 {/* Group items into chunks of 6 */}
//                 {(() => {
//                   const chunks = [];
//                   const items = techData[activeTab] || [];

//                   for (let i = 0; i < items.length; i += 6) {
//                     chunks.push(items.slice(i, i + 6));
//                   }

//                   return chunks.map((chunk, chunkIndex) => (
//                     <div key={chunkIndex} className="px-1">
//                       <div className="grid grid-cols-3 gap-2">
//                         {chunk.map((tech) => (
//                           <div key={tech.id}>
//                             <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-50">
//                               <div className="p-1 bg-blue-50 rounded-full flex items-center justify-center w-10 h-10 mb-1 hover:bg-blue-100 transition-colors duration-300">
//                                 <img
//                                   src={tech.icon}
//                                   alt={tech.name}
//                                   className="w-6 h-6 object-contain"
//                                 />
//                               </div>
//                               <span className="text-xs font-medium text-gray-800 text-center leading-tight line-clamp-2">
//                                 {tech.name}
//                               </span>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ));
//                 })()}
//               </Slider>
//             )
//               :
//               (
//                 // Static grid for 6 or fewer items
//                 <div className="grid grid-cols-3 gap-3">
//                   {techData[activeTab]?.map((tech) => (
//                     <div key={tech.id} className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-50">
//                       <div className="p-2 bg-blue-50 rounded-full flex items-center justify-center w-12 h-12 mb-2 hover:bg-blue-100 transition-colors duration-300">
//                         <img
//                           src={tech.icon}
//                           alt={tech.name}
//                           className="w-7 h-7 object-contain"
//                         />
//                       </div>
//                       <span className="text-xs font-medium text-gray-800 text-center">
//                         {tech.name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TechStack;



"use client";

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [techData, setTechData] = useState({});
  const sliderRef = useRef(null);

  // Fetch Tech Data
  useEffect(() => {
    const fetchTechData = async () => {
      try {
        const res = await axios.get("https://landing-page-yclw.vercel.app/api/technology");
        if (res.data.success) {
          const formatted = {};
          res.data.data.forEach((field) => {
            formatted[field.fieldName] = field.technologyName.map((tech) => ({
              id: tech._id,
              name: tech.title,
              icon: tech.iconImage,
            }));
          });
          setTechData(formatted);
          setActiveTab(Object.keys(formatted)[0] || "");
        }
      } catch (err) {
        console.error("Error fetching tech data:", err);
      }
    };
    fetchTechData();
  }, []);

  // Detect Mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider for Mobile
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    cssEase: "ease-in-out",
  };

  return (
    // <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
    //   <div className="max-w-7xl mx-auto px-4">
    //     {/* Header */}
    //     <div className="text-center mb-12">
    //       <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
    //         Our{" "}
    //         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
    //           Technology Stack
    //         </span>
    //       </h2>
    //       <p className="text-gray-600 text-lg max-w-2xl mx-auto">
    //         Innovative tools and technologies we use to build next-gen products.
    //       </p>
    //     </div>

    //     {/* Tabs */}
    //     <div className="flex flex-wrap justify-center gap-3 mb-10">
    //       {Object.keys(techData).map((tab) => (
    //         <button
    //           key={tab}
    //           onClick={() => setActiveTab(tab)}
    //           className={`px-5 py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
    //             activeTab === tab
    //               ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md scale-105"
    //               : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
    //           }`}
    //         >
    //           {tab}
    //         </button>
    //       ))}
    //     </div>

    //     {/* Tech Icons Grid - Desktop */}
    //     {!isMobile && activeTab && (
    //       <div
    //         className={`flex flex-wrap justify-center gap-6 transition-all duration-500 ${
    //           techData[activeTab]?.length >= 8 ? "max-w-6xl mx-auto" : "max-w-4xl mx-auto"
    //         }`}
    //       >
    //         {techData[activeTab]?.map((tech) => (
    //           <div
    //             key={tech.id}
    //             className="flex flex-col items-center p-3 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-blue-50 w-[90px] sm:w-[100px] transition-all duration-300 hover:-translate-y-1"
    //           >
    //             <div className="p-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center w-14 h-14 mb-2 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
    //               <img
    //                 src={tech.icon}
    //                 alt={tech.name}
    //                 className="w-8 h-8 object-contain"
    //               />
    //             </div>
    //             <span className="text-xs sm:text-sm font-medium text-gray-800 text-center leading-tight">
    //               {tech.name}
    //             </span>
    //           </div>
    //         ))}
    //       </div>
    //     )}

    //     {/* Tech Slider - Mobile */}
    //     {isMobile && activeTab && (
    //       <div className="md:hidden px-4">
    //         <Slider ref={sliderRef} {...sliderSettings}>
    //           {/* Group into chunks of 6 */}
    //           {(() => {
    //             const chunks = [];
    //             const items = techData[activeTab] || [];
    //             for (let i = 0; i < items.length; i += 6) {
    //               chunks.push(items.slice(i, i + 6));
    //             }
    //             return chunks.map((chunk, index) => (
    //               <div key={index}>
    //                 <div className="grid grid-cols-3 gap-3 justify-items-center">
    //                   {chunk.map((tech) => (
    //                     <div
    //                       key={tech.id}
    //                       className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md border border-blue-50 w-[90px] transition-all duration-300"
    //                     >
    //                       <div className="p-2 bg-blue-50 rounded-full flex items-center justify-center w-12 h-12 mb-1 hover:bg-blue-100 transition-colors duration-300">
    //                         <img
    //                           src={tech.icon}
    //                           alt={tech.name}
    //                           className="w-7 h-7 object-contain"
    //                         />
    //                       </div>
    //                       <span className="text-xs font-medium text-gray-800 text-center leading-tight">
    //                         {tech.name}
    //                       </span>
    //                     </div>
    //                   ))}
    //                 </div>
    //               </div>
    //             ));
    //           })()}
    //         </Slider>
    //       </div>
    //     )}
    //   </div>
    // </section>

    <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
          Technology Stack
        </span>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Innovative tools and technologies we use to build next-gen products.
      </p>
    </div>

    {/* Tabs */}
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {Object.keys(techData).map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2.5 rounded-md font-medium text-sm md:text-base transition-all duration-300 ${
            activeTab === tab
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md scale-105"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Tech Icons Grid - Desktop */}
    {!isMobile && activeTab && (
      <div className="max-w-7xl mx-auto">
        {/* Check if less than 7 items - center them */}
        {techData[activeTab]?.length < 7 ? (
          <div className="flex flex-wrap justify-center gap-4 transition-all duration-500">
            {techData[activeTab]?.map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col items-center p-2 bg-white rounded-xl shadow-sm hover:shadow-lg border border-blue-50 w-[80px] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-1.5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center w-12 h-12 mb-1 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-gray-800 text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ) : (
          /* 7 or more items - use 10-column grid */
          <div className="grid grid-cols-5 xl:grid-cols-10 gap-4 justify-items-center transition-all duration-500">
            {techData[activeTab]?.map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col items-center p-2 bg-white rounded-xl shadow-sm hover:shadow-lg border border-blue-50 w-full max-w-[80px] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-1.5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center w-12 h-12 mb-1 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-gray-800 text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    )}

    {/* Tech Slider - Mobile */}
    {isMobile && activeTab && (
      <div className="md:hidden px-4">
        <Slider ref={sliderRef} {...sliderSettings}>
          {/* Group into chunks of 6 */}
          {(() => {
            const chunks = [];
            const items = techData[activeTab] || [];
            for (let i = 0; i < items.length; i += 6) {
              chunks.push(items.slice(i, i + 6));
            }
            return chunks.map((chunk, index) => (
              <div key={index}>
                <div className="grid grid-cols-3 gap-3 justify-items-center">
                  {chunk.map((tech) => (
                    <div
                      key={tech.id}
                      className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md border border-blue-50 w-[90px] transition-all duration-300"
                    >
                      <div className="p-2 bg-blue-50 rounded-full flex items-center justify-center w-12 h-12 mb-1 hover:bg-blue-100 transition-colors duration-300">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-7 h-7 object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-800 text-center leading-tight">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ));
          })()}
        </Slider>
      </div>
    )}
  </div>
</section>
  );
};

export default TechStack;
