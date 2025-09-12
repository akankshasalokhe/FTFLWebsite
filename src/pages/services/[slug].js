// import React, { useState } from "react";
// import styles from "../../styles/ServiceDetail.module.css";

// const servicesData = {
//   "web-development": {
//     title: "Web Development",
//     tagline: "We build scalable, responsive, and modern websites.",
//     overview:
//       "Our web development service helps businesses create secure, fast, and user-friendly websites. We specialize in custom solutions tailored to your unique goals.",
//     features: [
//       "Responsive Design",
//       "SEO-Friendly",
//       "Secure & Scalable",
//       "Custom CMS Development",
//       "E-commerce Solutions",
//       "Performance Optimization",
//       "API Integration",
//       "Web Accessibility",
//     ],
//     process: [
//       "Requirement Gathering",
//       "UI/UX Design",
//       "Development",
//       "Testing & QA",
//       "Deployment & Support",
//     ],
//     faq: [
//       {
//         q: "How long does it take to build a website?",
//         a: "Usually 4–8 weeks depending on complexity.",
//       },
//       {
//         q: "Do you provide maintenance?",
//         a: "Yes, we offer ongoing support and maintenance packages.",
//       },
//       {
//         q: "Can you integrate third-party APIs?",
//         a: "Absolutely! We handle API integration seamlessly.",
//       },
//     ],
//   },

//   "app-development": {
//     title: "App Development",
//     tagline: "Build powerful iOS & Android applications.",
//     overview:
//       "We create mobile apps that deliver seamless user experiences across iOS and Android. From design to deployment, we handle everything.",
//     features: [
//       "iOS & Android Apps",
//       "Cross-Platform Development",
//       "High Performance",
//       "UI/UX Focused",
//       "App Maintenance",
//       "Push Notifications",
//       "App Store Deployment",
//       "Analytics Integration",
//     ],
//     process: ["Wireframing", "Development", "Testing", "Launch", "Support"],
//     faq: [
//       {
//         q: "Do you build apps for both iOS and Android?",
//         a: "Yes, we build cross-platform apps using modern frameworks.",
//       },
//       {
//         q: "Do you provide post-launch support?",
//         a: "Yes, we offer support and updates after launch.",
//       },
//     ],
//   },
// };

// export default function ServiceDetailPage({ service }) {
//   const [activeFaq, setActiveFaq] = useState(null);

//   if (!service) {
//     return (
//       <h2 className="text-center mt-10 text-red-600">Service not found</h2>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto space-y-16 px-4 md:px-0">
//       {/* Hero Banner */}
//       <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
//         <img
//           src="/images/banner.jpg" // Replace with your image
//           alt={service.title}
//           className={styles.heroImage}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-16">
//           <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${styles.slideDown}`}>
//             {service.title}
//           </h1>
//           <p className={`text-lg md:text-2xl ${styles.fadeIn}`}>
//             {service.tagline}
//           </p>
//         </div>
//       </div>

//       {/* Overview */}
//       <section className={styles.fadeUp}>
//         <h2 className="text-3xl font-semibold mb-4 border-l-4 border-blue-600 pl-3">
//           Overview
//         </h2>
//         <p className="text-gray-700 leading-relaxed text-lg">{service.overview}</p>
//       </section>

//       {/* Features */}
//       <section className={styles.fadeUp}>
//         <h2 className="text-3xl font-semibold mb-6 border-l-4 border-blue-600 pl-3">
//           Key Features
//         </h2>
//         <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {service.features.map((f, i) => (
//             <li
//               key={i}
//               className={`p-6 bg-blue-50 rounded-xl border ${styles.card} flex items-center gap-3`}
//             >
//               <span className="text-blue-600 font-bold text-2xl">✔️</span>
//               <span className="text-gray-800 font-medium">{f}</span>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Process */}
//       <section className={styles.fadeUp}>
//         <h2 className="text-3xl font-semibold mb-6 border-l-4 border-blue-600 pl-3">
//           Our Process
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {service.process.map((step, i) => (
//             <div
//               key={i}
//               className={`p-6 bg-gray-50 border rounded-xl shadow ${styles.card}`}
//             >
//               <div className="text-2xl font-bold text-blue-600 mb-2">
//                 Step {i + 1}
//               </div>
//               <div className="text-gray-700">{step}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className={styles.fadeUp}>
//         <h2 className="text-3xl font-semibold mb-6 border-l-4 border-blue-600 pl-3">
//           Frequently Asked Questions
//         </h2>
//         <div className="space-y-4">
//           {service.faq.map((item, i) => (
//             <div key={i} className="border rounded-xl shadow-sm bg-gray-50">
//               <button
//                 onClick={() =>
//                   setActiveFaq(activeFaq === i ? null : i)
//                 }
//                 className="w-full text-left p-4 flex justify-between items-center font-semibold text-gray-800"
//               >
//                 <span>Q: {item.q}</span>
//                 <span>{activeFaq === i ? "−" : "+"}</span>
//               </button>
//               {activeFaq === i && (
//                 <div className="p-4 text-gray-600 border-t">{item.a}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className={`text-center py-12 ${styles.fadeUp}`}>
//         <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
//         <p className="text-gray-600 mb-6 text-lg">
//           Get in touch with us today and let’s build something amazing together.
//         </p>
//         <button className={`px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow ${styles.ctaButton}`}>
//           Contact Us
//         </button>
//       </section>
//     </div>
//   );
// }

// // Static paths
// export async function getStaticPaths() {
//   return {
//     paths: Object.keys(servicesData).map((slug) => ({
//       params: { slug },
//     })),
//     fallback: false,
//   };
// }

// // Static props
// export async function getStaticProps({ params }) {
//   const service = servicesData[params.slug] || null;
//   return { props: { service } };
// }




//design-2




// // pages/services/[slug].js
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Head from "next/head";
// import { motion } from "framer-motion";
// import { CheckCircle2, Star, Users } from "lucide-react";

// const ServiceDetail = () => {
//   const router = useRouter();
//   const { slug } = router.query;
//   const [service, setService] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Mock data
//   useEffect(() => {
//     if (!slug) return;

//     const services = {
//       "web-development": {
//         id: "1",
//         slug: "web-development",
//         title: "Premium Web Development",
//         bannerImage:
//           "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
//         mainImage:
//           "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
//         description:
//           "Our premium web development service creates stunning, responsive websites tailored to your business needs...",
//         shortDescription: "Professional website development services",
//         features: [
//           "Responsive design that works on all devices",
//           "SEO optimization for better visibility",
//           "Fast loading times",
//           "Secure and reliable",
//           "Ongoing support and maintenance",
//         ],
//         price: "$1,500+",
//         duration: "2-4 weeks",
//         clients: ["Google", "Microsoft", "Apple", "Amazon"],
//       },
//     };


//     setTimeout(() => {
//       setService(services[slug] || services["web-development"]);
//       setLoading(false);
//     }, 500);
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Head>
//         <title>{service.title} | Premium Services</title>
//         <meta name="description" content={service.shortDescription} />
//       </Head>

//       {/* Hero Section */}
     
//       <section
//         className="relative text-white overflow-hidden bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${service.bannerImage})`,
//         }}
//       >
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="container mx-auto px-6 py-24 relative z-10 text-center">
//           <motion.h1
//             className="text-5xl md:text-6xl font-extrabold mb-6"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {service.title}
//           </motion.h1>
//           <motion.p
//             className="text-xl max-w-2xl mx-auto text-gray-200"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             {service.shortDescription}
//           </motion.p>
//           <motion.button
//             className="mt-8 px-8 py-4 rounded-xl bg-white text-blue-600 font-bold shadow-lg hover:scale-105 transition transform"
//             whileHover={{ scale: 1.05 }}
//           >
//             Get Started
//           </motion.button>
//         </div>
//       </section>


//       {/* Service Details */}
//        <section className="container mx-auto px-6 py-16 max-w-6xl">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           <motion.div
//             className="rounded-3xl overflow-hidden shadow-2xl"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src={service.mainImage}
//               alt={service.title}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

       
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl font-bold mb-6 text-gray-900">
//               Why Choose {service.title}?
//             </h2>
//             <p className="text-gray-600 text-lg mb-6">{service.description}</p>

//             <div className="grid grid-cols-2 gap-6">
//               <div className="bg-white p-6 rounded-xl shadow-md text-center">
//                 <h4 className="text-sm uppercase text-gray-500">Starting at</h4>
//                 <p className="text-2xl font-bold text-blue-600">
//                   {service.price}
//                 </p>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-md text-center">
//                 <h4 className="text-sm uppercase text-gray-500">Duration</h4>
//                 <p className="text-2xl font-bold text-green-600">
//                   {service.duration}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section> 
 





//       {/* Features */}
//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Included Features
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {service?.features?.map((feature, idx) => (
//               <motion.div
//                 key={idx}
//                 className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex items-start gap-4"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <CheckCircle2 className="text-blue-600 w-8 h-8" />
//                 <p className="text-gray-700">{feature}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Clients */}
//       <section className="container mx-auto px-6 py-16 max-w-5xl">
//         <h2 className="text-2xl font-bold text-center mb-12">
//           Trusted by Industry Leaders
//         </h2>
//         <div className="flex flex-wrap justify-center gap-8">
//           {service?.clients?.map((client, idx) => (
//             <motion.div
//               key={idx}
//               className="w-32 h-32 flex items-center justify-center bg-white rounded-full shadow-md grayscale hover:grayscale-0 transition"
//               whileHover={{ scale: 1.1 }}
//             >
//               <span className="font-bold text-gray-800">{client}</span>
//             </motion.div>
//           ))}
//         </div>
//       </section>


//       {/* Testimonials */}
//       <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 text-white">
//         <div className="container mx-auto px-6 max-w-5xl text-center">
//           <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <motion.div
//               className="bg-white/10 p-6 rounded-xl backdrop-blur-md"
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="flex items-center mb-4">
//                 <Users className="w-10 h-10 text-yellow-300 mr-4" />
//                 <div>
//                   <h4 className="font-bold">John Doe</h4>
//                   <p className="text-sm">CEO, Tech Solutions</p>
//                 </div>
//               </div>
//               <p>
//                 “The service exceeded our expectations. Our website
//                 performance improved dramatically and conversions skyrocketed.”
//               </p>
//             </motion.div>
//             <motion.div
//               className="bg-white/10 p-6 rounded-xl backdrop-blur-md"
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="flex items-center mb-4">
//                 <Star className="w-10 h-10 text-pink-300 mr-4" />
//                 <div>
//                   <h4 className="font-bold">Jane Smith</h4>
//                   <p className="text-sm">Marketing Director, Innovate Co.</p>
//                 </div>
//               </div>
//               <p>
//                 “The mobile app developed by this team has been instrumental in
//                 our growth strategy. User engagement has increased by 45%.”
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>






//       {/* Final CTA */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-center text-white">
//         <motion.h2
//           className="text-4xl font-extrabold mb-6"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//         >
//           Ready to Get Started?
//         </motion.h2>
//         <motion.button
//           className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:scale-110 transition"
//           whileHover={{ scale: 1.1 }}
//         >
//           Contact Us Today
//         </motion.button>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-400 py-12">
//         <div className="container mx-auto px-6 text-center">
//           <h3 className="text-xl font-bold text-white mb-4">
//             Premium<span className="text-blue-400">Services</span>
//           </h3>
//           <p>Providing exceptional digital solutions for businesses worldwide.</p>
//           <p className="mt-4 text-sm">
//             © {new Date().getFullYear()} Premium Services. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default ServiceDetail;



//design-3



//design - 4





//design-5



// components/ServiceDetail.js


//design-6











"use client";

import { useRouter } from "next/router";
import ServiceDetailV1 from "@/components/ServiceDetailV1";
import ServiceDetailV2 from "@/components/ServiceDetailV2";
import ServiceDetailV3 from "@/components/ServiceDetailV3";
import ServiceDetailV4 from "@/components/ServiceDetailV4";
import ServiceDetailV5 from "@/components/ServiceDetailV5";

export default function ServicePage() {
  const router = useRouter();
  const { slug, design } = router.query;

  const selectedDesign = design || "v1";

  return (
    <>
      {selectedDesign === "v1" && <ServiceDetailV1 slug={slug} />}
       {selectedDesign === "v2" && <ServiceDetailV2 slug={slug} />}
      {selectedDesign === "v3" && <ServiceDetailV3 slug={slug} />} 
      {selectedDesign === "v4" && <ServiceDetailV4 slug={slug} />} 
      {selectedDesign === "v5" && <ServiceDetailV5 slug={slug} />} 
    </>
  );
}
