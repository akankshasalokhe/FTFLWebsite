// import React, { useState } from 'react';
// import Image from 'next/image';
// import styles from './OurServices.module.css';

// const OurServices = () => {
//   const [activeCard, setActiveCard] = useState(null);

//   const services = [
//     {
//       id: 1,
//       title: "Web Development",
//       description: "Custom websites and web applications built with modern technologies.",
//       image: "/s5.jpeg",
//       icon: "💻"
//     },
//     {
//       id: 2,
//       title: "Mobile Apps",
//       description: "Native and cross-platform mobile applications for iOS and Android devices.",
//       image: "/s4.jpeg",
//       icon: "📱"
//     },
//     {
//       id: 3,
//       title: "UI/UX Design",
//       description: "User-centered designs that enhance engagement & improve user experience.",
//       image: "/s2.jpeg",
//       icon: "🎨"
//     },
//     {
//       id: 4,
//       title: "Digital Marketing",
//       description: "Strategic online marketing campaigns to boost your brand's visibility and growth.",
//       image: "/s3.jpeg",
//       icon: "📈"
//     },
//     {
//       id: 5,
//       title: "Video Editing",
//       description: "Professional video editing services that tell your story compellingly.",
//       image: "/s1.jpeg",
//       icon: "🎬"
//     },
//     {
//       id: 6,
//       title: "Graphic Design",
//       description: "Creative visual solutions for branding, marketing materials, and digital media.",
//       image: "/s2.jpeg",
//       icon: "✏️"
//     }
//   ];


//   return (
//     <section className={styles.services} id="services">
//       <div className={styles.container}>
//         <div className={styles.header}>
//           <h2 className={styles.sectionTitle}>Our Services</h2>
//           <p className={styles.sectionSubtitle}>
//             Discover our comprehensive range of digital solutions designed to elevate your business
//           </p>
//         </div>

//         <div className={styles.cardsContainer}>
//           {services.map(service => (
//             <div 
//               key={service.id} 
//               className={`${styles.card} ${activeCard === service.id ? styles.active : ''}`}
//               onMouseEnter={() => setActiveCard(service.id)}
//               onMouseLeave={() => setActiveCard(null)}
//               onClick={() => setActiveCard(activeCard === service.id ? null : service.id)}
//             >
//               <div className={styles.cardInner}>
//                 <div className={styles.imageContainer}>
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     fill
//                     className={styles.image}
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   />
//                   <div className={styles.overlay}></div>
//                   <div className={styles.icon}>{service.icon}</div>
//                 </div>

//                 <div className={styles.content}>
//                   <h3 className={styles.title}>{service.title}</h3>
//                   <p className={styles.description}>{service.description}</p>

//                   <div className={styles.action}>
//                     <button className={styles.learnMoreBtn}>
//                       Learn More
//                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className={styles.cta}>
//           <p>Need a custom solution?</p>
//           {/* <button className={styles.ctaButton}>Get in Touch</button> */}
//            <button className="rounded-lg text-white bg-gradient-to-r from-[#298cf3] to-blue-600 p-2">Get in Touch</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;






// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import styles from './OurServices.module.css';
// import axios from 'axios';
// import Link from 'next/link'; 

// const OurServices = () => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [serviceData, setServiceData] = useState([]);

//   // Fallback static data
//   const services = [
//     {
//       id: 1,
//       title: "Web Development",
//       description: "Custom websites and web applications built with modern technologies.",
//       image: "/s5.jpeg",
//       icon: "💻"
//     },
//     {
//       id: 2,
//       title: "Mobile Apps",
//       description: "Native and cross-platform mobile applications for iOS and Android devices.",
//       image: "/s4.jpeg",
//       icon: "📱"
//     },
//     {
//       id: 3,
//       title: "UI/UX Design",
//       description: "User-centered designs that enhance engagement & improve user experience.",
//       image: "/s2.jpeg",
//       icon: "🎨"
//     },
//     {
//       id: 4,
//       title: "Digital Marketing",
//       description: "Strategic online marketing campaigns to boost your brand's visibility and growth.",
//       image: "/s3.jpeg",
//       icon: "📈"
//     },
//     {
//       id: 5,
//       title: "Video Editing",
//       description: "Professional video editing services that tell your story compellingly.",
//       image: "/s1.jpeg",
//       icon: "🎬"
//     },
//     {
//       id: 6,
//       title: "Graphic Design",
//       description: "Creative visual solutions for branding, marketing materials, and digital media.",
//       image: "/s2.jpeg",
//       icon: "✏️"
//     }
//   ];

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/service")
//       .then((res) => {
//         if (res.data?.data?.length > 0) {
//           setServiceData(res.data.data);
//           console.log("service data :", res.data.data)
//         }
//       })
//       .catch((err) => {
//         console.error("API fetch error:", err);
//       });
//   }, []);

//   // Use API data if available, otherwise use static data
//   const displayServices = serviceData.length > 0 ? serviceData.slice(0, 6) : services;

//   // Helper function to get description text
//   const getDescriptionText = (service) => {
//     if (Array.isArray(service.description)) {
//       // If it's an array, take the first item and truncate
//       return service.description[0]?.substring(0, 120) + '...' || 'No description available';
//     } else if (typeof service.description === 'string') {
//       // If it's a string, just truncate
//       return service.description.substring(0, 120) + '...';
//     }
//     return 'No description available';
//   };

//   // Helper function to get image source
//   const getImageSrc = (service) => {
//     if (service.mainImage) {
//       return service.mainImage;
//     } else if (service.image) {
//       return service.image;
//     }
//     return "/default-service.jpg"; // Add a default image
//   };

//   // Helper function to get service ID
//   const getServiceId = (service) => {
//     return service._id || service.id;
//   };

//   return (
//     <section className={styles.services} id="homeservices">
//       <div className={styles.container}>
//         <div className={styles.header}>
//           <h2 className={styles.sectionTitle}>Our Services</h2>
//           <p className={styles.sectionSubtitle}>
//             Discover our comprehensive range of digital solutions designed to elevate your business
//           </p>
//         </div>

//         <div className={styles.cardsContainer}>
//           {displayServices.map(service => (
//             <div
//               key={getServiceId(service)}
//               className={`${styles.card} ${activeCard === getServiceId(service) ? styles.active : ''}`}
//               onMouseEnter={() => setActiveCard(getServiceId(service))}
//               onMouseLeave={() => setActiveCard(null)}
//               onClick={() => setActiveCard(activeCard === getServiceId(service) ? null : getServiceId(service))}
//             >
//               <div className={styles.cardInner}>
//                 <div className={styles.imageContainer}>
//                   <Image
//                     src={getImageSrc(service)}
//                     alt={service.title}
//                     fill
//                     className={styles.image}
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 33vw"
//                     onError={(e) => {
//                       e.target.src = "/default-service.jpg";
//                     }}
//                   />
//                   <div className={styles.overlay}></div>
//                 </div>

//                 <div className={styles.content}>
//                   <h3 className={styles.title}>{service.title}</h3>
//                   <p className={styles.description}>{getDescriptionText(service)}</p>

//                   <div className={styles.action}>
//                     <Link href={`/services/${getServiceId(service)}`}>
//                       <button className={styles.learnMoreBtn}>
//                         Learn More
//                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <Link href='/contact'>
//       <div className={styles.cta}>
//         <p>Need a custom solution?</p>
//         <button className={styles.ctaButton}>Get in Touch</button>
//       </div>
//       </Link>
//     </section>
//   );
// };

// export default OurServices;



// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import axios from "axios";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import styles from "./OurServices.module.css";

// const OurServices = () => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [serviceData, setServiceData] = useState([]);

//   const services = [
//     {
//       id: 1,
//       title: "Web Development",
//       description: "Custom websites and web applications built with modern technologies.",
//       image: "/s5.jpeg",
//       icon: "💻",
//     },
//     {
//       id: 2,
//       title: "Mobile Apps",
//       description: "Native and cross-platform mobile applications for iOS and Android devices.",
//       image: "/s4.jpeg",
//       icon: "📱",
//     },
//     {
//       id: 3,
//       title: "UI/UX Design",
//       description: "User-centered designs that enhance engagement & improve user experience.",
//       image: "/s2.jpeg",
//       icon: "🎨",
//     },
//     {
//       id: 4,
//       title: "Digital Marketing",
//       description: "Strategic online marketing campaigns to boost your brand's visibility and growth.",
//       image: "/s3.jpeg",
//       icon: "📈",
//     },
//     {
//       id: 5,
//       title: "Video Editing",
//       description: "Professional video editing services that tell your story compellingly.",
//       image: "/s1.jpeg",
//       icon: "🎬",
//     },
//     {
//       id: 6,
//       title: "Graphic Design",
//       description: "Creative visual solutions for branding, marketing materials, and digital media.",
//       image: "/s2.jpeg",
//       icon: "✏️",
//     },
//   ];

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/service")
//       .then((res) => {
//         if (res.data?.data?.length > 0) {
//           setServiceData(res.data.data);
//         }
//       })
//       .catch((err) => console.error("API fetch error:", err));
//   }, []);

//   const displayServices = serviceData.length > 0 ? serviceData.slice(0, 6) : services;

//   const getDescriptionText = (service) => {
//     if (Array.isArray(service.description)) {
//       return service.description[0]?.substring(0, 120) + "..." || "No description available";
//     } else if (typeof service.description === "string") {
//       return service.description.substring(0, 120) + "...";
//     }
//     return "No description available";
//   };

//   const getImageSrc = (service) => {
//     if (service.mainImage) return service.mainImage;
//     else if (service.image) return service.image;
//     return "/default-service.jpg";
//   };

//   const getServiceId = (service) => service._id || service.id;

//   return (
//     <section className={styles.services} id="homeservices">
//       <div className={styles.bgImage}></div>

//       <div className={styles.container}>
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className={styles.header}
//         >
//           <h2 className={styles.sectionTitle}>Our Services</h2>
//           <p className={styles.sectionSubtitle}>
//             Discover our comprehensive range of digital solutions designed to elevate your business
//           </p>
//         </motion.div>

//         <div className={styles.cardsContainer}>
//           {displayServices.map((service, index) => (
//             <motion.div
//               key={getServiceId(service)}
//               className={`${styles.card} ${activeCard === getServiceId(service) ? styles.active : ""}`}
//               onMouseEnter={() => setActiveCard(getServiceId(service))}
//               onMouseLeave={() => setActiveCard(null)}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className={styles.imageContainer}>
//                 <Image
//                   src={getImageSrc(service)}
//                   alt={service.title}
//                   width={500}
//                   height={320}
//                   className={styles.image}
//                 />
//                 <div className={styles.overlay}></div>
//               </div>

//               <div className={styles.content}>
//                 <h3 className={styles.title}>{service.title}</h3>
//                 <p className={styles.description}>{getDescriptionText(service)}</p>
//                 <Link href={`/services/${getServiceId(service)}`} className={styles.learnMoreBtn}>
//                   Learn More →
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           className={styles.cta}
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <p>Need a custom solution?</p>
//           <Link href="/contact">
//             <button className={styles.ctaButton}>Get in Touch</button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;



"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./OurServices.module.css";

const OurServices = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      image: "/s5.jpeg",
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      image: "/s4.jpeg",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered designs that enhance engagement & improve user experience.",
      image: "/s2.jpeg",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Strategic online marketing campaigns to boost your brand's visibility and growth.",
      image: "/s3.jpeg",
    },
    {
      id: 5,
      title: "Video Editing",
      description: "Professional video editing services that tell your story compellingly.",
      image: "/s1.jpeg",
    },
    {
      id: 6,
      title: "Graphic Design",
      description: "Creative visual solutions for branding, marketing materials, and digital media.",
      image: "/s2.jpeg",
    },
  ];

  return (
    <section className={styles.services} id="homeservices">
      <div className={styles.bgImage}></div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>
            Discover our comprehensive range of digital solutions designed to elevate your business
          </p>
        </motion.div>

        <div className={styles.cardsContainer}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`${styles.card} ${
                activeCard === service.id ? styles.active : ""
              }`}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={320}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>
                  {service.description.substring(0, 120)}...
                </p>
                <Link href={`/services/${service.id}`} className={styles.learnMoreBtn}>
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA SECTION */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>Need a custom solution?</p>
          <Link href="/contact">
            <button className={styles.ctaButton}>Get in Touch</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;

