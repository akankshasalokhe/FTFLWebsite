

// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";

// const MissionSection = () => {
//   const [content, setContent] = useState([]);

//   useEffect(() => {
//     // 🔹 Backend se data fetch
//     axios.get("https://landing-page-yclw.vercel.app/api/about")
//       .then((res) => {
//         if (res.data.success) {
//           const apiData = res.data.data;

//           // 🔹 Filter only items with typeData === "vision", "mission", or "corevalues"
//           const mappedData = apiData
//             .filter(item => ["vision", "mission", "corevalues"].includes(item.typeData))
//             .map((item) => {
//               let color = "from-blue-500 to-blue-600";
//               let reverse = false;

//               if (item.typeData === "mission") {
//                 color = "from-purple-500 to-purple-600";
//                 reverse = true;
//               }
//               if (item.typeData === "corevalues") {
//                 color = "from-emerald-500 to-emerald-600";
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

//   return (
//     <section id='values-section' className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">Guiding Principles</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             The foundation of everything we do at our company
//           </p>
//         </div>

//         {/* Zig-Zag Content */}
//         <div className="space-y-24 sm:space-y-32">
//           {content.map((item, index) => (
//             <div
//               key={index}
//               className={`flex flex-col ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-12`}
//             >
//               {/* Image */}
//               <div className="lg:w-1/2 relative">
//                 <div className="relative rounded-xl overflow-hidden shadow-xl">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-auto aspect-video object-cover rounded-xl"
//                     loading="lazy"
//                   />
//                   <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-20 rounded-xl`}></div>
//                 </div>
//                 <div className={`hidden sm:block absolute -z-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 ${item.reverse ? "-left-8 -bottom-8" : "-right-8 -bottom-8"}`}></div>
//               </div>

//               {/* Text Content */}
//               <div className="lg:w-1/2">
//                 <div className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${item.color} mb-6`} />
//                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
//                   {item.title}
//                 </h3>
//                 <p className="text-lg text-gray-600 mb-6">
//                   {item.description}
//                 </p>
//                 {item.typeData === "corevalues" && (
//                   <ul className="grid grid-cols-2 gap-3">
//                     {["Integrity", "Innovation", "Collaboration", "Excellence"].map((value, i) => (
//                       <li
//                         key={i}
//                         className="flex items-center gap-2 text-gray-700"
//                       >
//                         <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                         {value}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionSection;





// "use client";

// import { useState } from "react";

// const MissionSection = () => {
//   const [content] = useState([
//     {
//       title: "Our Vision",
//       description:
//         "To be a world leader in next-generation technology, utilizing cloud computing, IoT, AI, and other cutting-edge digital advancements to completely transform how people and organizations interact, function, and expand. In our ideal society, technology will foresee requirements, propel clever answers, and facilitate smooth, long-lasting, and revolutionary advancement. We want to build a future where digital possibilities are boundless, enabling every company and people to prosper in a constantly changing, linked world by pushing the limits of innovation and excellence.",
//       image: "logos/ourvision.jpg",
//       typeData: "vision",
//     },
//     {
//       title: "Our Mission",
//       description:
//         "Our mission is to provide our clients with scalable, dependable, and creative technological solutions that promote quantifiable efficiency and growth. To help people and organizations accomplish their objectives and create a smarter, more connected digital world, we work to harness cutting-edge technology, encourage innovation, and uphold the highest standards of quality and integrity.",
//       image: "logos/ourmission.jpg",
//       typeData: "mission",
//     },
//     {
//       title: "Core Values",
//       description:
//         "We are committed to developing technology that truly changes the world. Our work at FTFL Technology Private Limited is motivated by responsibility, curiosity, and a desire to advance. In today's interconnected world, we work to empower individuals, encourage teamwork, and provide solutions that are not just creative but also significant and long-lasting.",
//       image: "logos/corevalues.png",
//       typeData: "corevalues",
//     },
//   ]);

//   return (
  
//     <section
//   id="values-section"
//   className="pt-0 pb-12 sm:pt-4 sm:pb-16 lg:pt-0 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-white"
// >
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12 lg:mb-14">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
//               Guiding Principles
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             The foundation of everything we do at our company
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
//           {content.map((item, index) => (
//             <div
//               key={index}
//               className="group relative rounded-xl overflow-hidden transition-all duration-500 h-[26rem]"
//             >
//               {/* Image (moves left slightly on hover) */}
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover transition-transform duration-700 ease-out "
//                 loading="lazy"
//               />

//               {/* Black background only on hover */}
//               <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

//               {/* Title */}
//               <div className="absolute inset-x-0 top-6 flex justify-center text-black group-hover:text-white z-20">
//                 <h3
//                   style={{ fontFamily: '"Roboto Slab", serif' }}
//                   className="text-4xl font-bold drop-shadow-lg"
//                 >
//                   {item.title}
//                 </h3>
//               </div>

//               {/* Text reveal on hover (comes from right) */}
//               <div
//                 className="absolute inset-x-0 top-14 flex flex-col items-start justify-between text-left text-white font-medium
//                 opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0
//                 transition-all duration-700 ease-out p-6 z-20"
//               >
//                 <p
//                   style={{ fontFamily: '"Playfair Display", serif' }}
//                   className="text-md leading-relaxed"
//                 >
//                   {item.description}
//                 </p>

//                 {item.typeData === "corevalues" && (
//                   <ul className="mt-4 grid grid-cols-2 gap-2">
//                     {["Integrity", "Innovation", "Collaboration", "Excellence"].map(
//                       (value, i) => (
//                         <li
//                           key={i}
//                           className="flex items-center justify-center gap-2 text-white text-sm"
//                         >
//                           <svg
//                             className="w-4 h-4 text-emerald-400"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                           {value}
//                         </li>
//                       )
//                     )}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionSection;




"use client";

import { useState } from "react";

const MissionSection = () => {
  const [content] = useState([
    {
      title: "Our Vision",
      description:
        "To be a world leader in next-generation technology, utilizing cloud computing, IoT, AI, and other cutting-edge digital advancements to completely transform how people and organizations interact, function, and expand. In our ideal society, technology will foresee requirements, propel clever answers, and facilitate smooth, long-lasting, and revolutionary advancement. We want to build a future where digital possibilities are boundless, enabling every company and people to prosper in a constantly changing, linked world by pushing the limits of innovation and excellence.",
      image: "logos/ourvision.jpg",
      typeData: "vision",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to provide our clients with scalable, dependable, and creative technological solutions that promote quantifiable efficiency and growth. To help people and organizations accomplish their objectives and create a smarter, more connected digital world, we work to harness cutting-edge technology, encourage innovation, and uphold the highest standards of quality and integrity.",
      image: "logos/ourmission.jpg",
      typeData: "mission",
    },
    {
      title: "Core Values",
      description:
        "We are committed to developing technology that truly changes the world. Our work at FTFL Technology Private Limited is motivated by responsibility, curiosity, and a desire to advance. In today's interconnected world, we work to empower individuals, encourage teamwork, and provide solutions that are not just creative but also significant and long-lasting.",
      image: "logos/corevalues.png",
      typeData: "corevalues",
    },
  ]);

  return (
    <section
      id="values-section"
      className="pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-10 lg:pb-16 px-4 sm:px-6 lg:px-8  bg-gradient-to-b from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-14">
          <h2 className="text-4xl sm:text-8xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-clip-text  text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
              Guiding Principles
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The foundation of everything we do at our company
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {content.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden transition-all duration-500 h-auto lg:h-[26rem]"
            >
              {/* Image (mobile: natural height; desktop: fill card) */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto lg:h-full object-cover transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x450?text=Image+Not+Found";
                }}
              />

              {/* ---------- MOBILE: show title + description below image ---------- */}
              <div className="block lg:hidden mt-4 px-0">
                <h3
                  style={{ fontFamily: '"Roboto Slab", serif' }}
                  className="text-2xl font-bold text-gray-900 mb-2 px-0"
                >
                  {item.title}
                </h3>
                <p
                  style={{ fontFamily: '"Playfair Display", serif' }}
                  className="text-gray-700 leading-relaxed"
                >
                  {item.description}
                </p>

                {item.typeData === "corevalues" && (
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {["Integrity", "Innovation", "Collaboration", "Excellence"].map(
                      (value, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-800 text-sm"
                        >
                          <svg
                            className="w-4 h-4 text-emerald-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {value}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>

              {/* ---------- DESKTOP: exact original hover behavior (unchanged) ---------- */}
              <div className="hidden lg:block">
                {/* Black background only on hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Title */}
                <div className="absolute inset-x-0 top-6 flex justify-center text-black group-hover:text-white z-20">
                  <h3
                    style={{ fontFamily: '"Roboto Slab", serif' }}
                    className="text-4xl font-bold drop-shadow-lg"
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Text reveal on hover (comes from right) */}
                <div
                  className="absolute inset-x-0 top-14 flex flex-col items-start justify-between text-left text-white font-medium
                opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-700 ease-out p-6 z-20"
                >
                  <p
                    style={{ fontFamily: '"Playfair Display", serif' }}
                    className="text-md leading-relaxed"
                  >
                    {item.description}
                  </p>

                  {item.typeData === "corevalues" && (
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                      {["Integrity", "Innovation", "Collaboration", "Excellence"].map(
                        (value, i) => (
                          <li
                            key={i}
                            className="flex items-center justify-center gap-2 text-white text-sm"
                          >
                            <svg
                              className="w-4 h-4 text-emerald-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {value}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
