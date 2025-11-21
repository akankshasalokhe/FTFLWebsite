// "use client";
// import React, { useState,useEffect, use } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import styles from "./OurServices.module.css";
// import axios from "axios";

// const OurServices = () => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [serviceData, setServiceData] = useState([]);
//   const [services, setServices] = useState([]);


//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/homeservices")
//       .then((res) => {
//         if (res.data?.data?.length > 0) {
//           setServiceData(res.data.data);
//         }
//       })
//       .catch((err) => console.error("API fetch error:", err));
//   }, []);


//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/service")
//       .then((res) => {
//         if (res.data.success && res.data.data) {
//           setServices(res.data.data);
//         }
//       })
//       .catch((err) => console.error("API fetch error:", err));
//   }, []);

//   const displayServices = serviceData.length > 0 ? serviceData.slice(0, 6) : [];

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
//           {serviceData.map((service, index) => (
//             <motion.div
//               key={service.id}
//               className={`${styles.card} ${
//                 activeCard === service.id ? styles.active : ""
//               }`}
//               onMouseEnter={() => setActiveCard(service.id)}
//               onMouseLeave={() => setActiveCard(null)}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className={styles.imageContainer}>
//                 <Image
//                   src={service.mainImage}
//                   alt={service.title}
//                   width={500}
//                   height={320}
//                   className={styles.image}
//                 />
//                 <div className={styles.overlay}></div>
//               </div>

//               <div className={styles.content}>
//                 <h3 className={styles.title}>{service.title}</h3>
//                 <p className={styles.description}>
//                   {service.description.substring(0, 120)}...
//                 </p>
//                 <Link href={`/services/${service.id}`} className={styles.learnMoreBtn}>
//                   Learn More →
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA SECTION */}
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
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./OurServices.module.css";
import axios from "axios";

const OurServices = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [serviceData, setServiceData] = useState([]);
  const [services, setServices] = useState([]);
  const [matchedServices, setMatchedServices] = useState({});

  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/homeservices")
      .then((res) => {
        if (res.data?.data?.length > 0) {
          console.log("Home Services API:", res.data.data);
          setServiceData(res.data.data);
        }
      })
      .catch((err) => console.error("Home Services API fetch error:", err));
  }, []);

  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/service")
      .then((res) => {
        if (res.data.success && res.data.data) {
          console.log("Services API:", res.data.data);
          setServices(res.data.data);
        }
      })
      .catch((err) => console.error("Services API fetch error:", err));
  }, []);

  // Match titles between both APIs when both are loaded
  useEffect(() => {
    if (serviceData.length > 0 && services.length > 0) {
      const matches = {};
      
      console.log("Starting title matching...");
      
      serviceData.forEach(homeService => {
        const homeServiceTitle = homeService.title?.toLowerCase().trim();
        console.log(`Looking for match for home service: "${homeServiceTitle}"`);
        
        // Find matching service by title (case insensitive)
        const matchedService = services.find(service => {
          const serviceTitle = service.title?.toLowerCase().trim();
          const isMatch = serviceTitle === homeServiceTitle;
          
          if (isMatch) {
            console.log(`✅ MATCH FOUND: Home "${homeServiceTitle}" -> Service "${serviceTitle}" with ID: ${service._id}`);
          }
          
          return isMatch;
        });
        
        if (matchedService) {
          // Use the home service title as the key to avoid ID conflicts
          matches[homeServiceTitle] = matchedService._id;
        } else {
          console.log(`❌ NO MATCH for: "${homeServiceTitle}"`);
        }
      });
      
      setMatchedServices(matches);
      console.log("Final matches object:", matches);
    }
  }, [serviceData, services]);

  const displayServices = serviceData.length > 0 ? serviceData.slice(0, 6) : [];

  const getDescriptionText = (service) => {
    if (Array.isArray(service.description)) {
      return service.description[0]?.substring(0, 120) + "..." || "No description available";
    } else if (typeof service.description === "string") {
      return service.description.substring(0, 120) + "...";
    }
    return "No description available";
  };

  const getImageSrc = (service) => {
    if (service.mainImage) return service.mainImage;
    else if (service.image) return service.image;
    return "/default-service.jpg";
  };

  // Get the service ID - use matched ID if available, otherwise fallback to original ID
  const getServiceId = (service) => {
    const serviceTitle = service.title?.toLowerCase().trim();
    const matchedId = matchedServices[serviceTitle];
    
    console.log(`Service ID lookup for "${service.title}":`, {
      title: serviceTitle,
      matchedId: matchedId,
      finalId: matchedId || service.id
    });
    
    return matchedId || service.id;
  };

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
          {displayServices.map((service, index) => (
            <motion.div
              key={service.id || index}
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
                  src={getImageSrc(service)}
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
                  {getDescriptionText(service)}
                </p>
                <Link 
                  href={`/services/${getServiceId(service)}`} 
                  className={styles.learnMoreBtn}
                >
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