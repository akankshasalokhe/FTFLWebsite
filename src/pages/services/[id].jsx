// "use client";

// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useRef } from "react";
// import OurProcess from "@/components/Services/OurProcess";

// const serviceData = {
//   "web-development": {
//     title: "Web Development",
//     slogan: "Fast, Secure & Scalable Websites for Modern Businesses",
//     banner: "/s5.jpeg",
//     description: [
//       {
//         title: "Custom Website Development",
//         text: "We design and develop tailor-made websites that perfectly match your brand identity and business goals. From landing pages to enterprise solutions, our websites are built to scale.",
//         icon: "💻"
//       },
//       {
//         title: "E-Commerce Solutions",
//         text: "Launch powerful online stores with secure payment gateways, smooth checkout processes, and inventory management that boost customer trust and sales.",
//         icon: "🛒"
//       },
//       {
//         title: "Performance & Security",
//         text: "Our solutions are optimized for speed, mobile-friendliness, and SEO. With enterprise-grade security, your data and users remain protected at all times.",
//         icon: "⚡"
//       },
//       {
//         title: "Modern Tech Stack",
//         text: "We work with cutting-edge technologies like React, Next.js, Node.js, and MongoDB to deliver lightning-fast, scalable, and future-proof solutions.",
//         icon: "🔧"
//       },
//     ],
//     whyChoose: [
//       { text: "Mobile-Friendly & Responsive", icon: "📱" },
//       { text: "SEO Optimized for Higher Rankings", icon: "🔍" },
//       { text: "Scalable & Secure Infrastructure", icon: "🏗️" },
//       { text: "24/7 Ongoing Support", icon: "🛠️" },
//       { text: "Unique UI/UX Design", icon: "🎨" },
//       { text: "Integration with APIs & Tools", icon: "🔌" },
//       { text: "Cloud & Hosting Deployment", icon: "☁️" },
//       { text: "Cost-Effective Packages", icon: "💰" },
//     ],

//     faqs: [
//       {
//         q: "How long does a project take?",
//         a: "Depending on the complexity, projects usually take 4–12 weeks from planning to launch.",
//       },
//       {
//         q: "Do you provide support?",
//         a: "Yes, we provide continuous support, updates, and maintenance even after project delivery.",
//       },
//       {
//         q: "Can you redesign my old website?",
//         a: "Absolutely! We modernize, optimize, and revamp outdated websites with fresh design and performance improvements.",
//       },
//       {
//         q: "What technologies do you use?",
//         a: "We primarily use React, Next.js, Node.js, and MongoDB but can adapt to your project's tech requirements.",
//       },
//       {
//         q: "Is SEO included?",
//         a: "Yes, all websites are built with SEO-friendly architecture and optimized for better search rankings.",
//       },
//     ],
//   },
// };

// export default function ServiceDetail() {
//   const params = useParams();
//   const slug = "web-development";

//   const service = serviceData[slug] || serviceData["web-development"];
//   const [faqOpen, setFaqOpen] = useState(null);
//   const [activeProcess, setActiveProcess] = useState(0);
//   const processRef = useRef(null);

//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   const staggerChildren = {
//     visible: {
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const techLogos = [
//     { name: "React.js", logo: "/tech/react.png" },
//     { name: "Next.js", logo: "/tech/nextjs.png" },
//     { name: "Node.js", logo: "/tech/node.png" },
//     { name: "MongoDB", logo: "/tech/mongodb.png" },
//     { name: "TailwindCSS", logo: "/tech/tailwind.png" },
//     { name: "AWS", logo: "/tech/aws.png" },
//   ];

//   return (
//     <div className="bg-gray-50 overflow-hidden">
//         {/* Hero Banner */}
//       <section className="relative h-[400px] flex items-center justify-center text-white">
//         <Image
//           src={service.banner}
//           alt={service.title}
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative text-center z-10 px-4">
//           <h1 className="text-4xl font-bold">{service.title}</h1>
//           <p className="mt-2 text-lg">{service.slogan}</p>
//         </div>
//         {/* Wave Shape */}
//         <div className="absolute bottom-0 w-full overflow-hidden leading-none">
//           <svg
//             viewBox="0 0 500 150"
//             preserveAspectRatio="none"
//             className="w-full h-16"
//           >
//             <path
//               d="M0.00,49.98 C150.00,150.00 349.60,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
//               className="fill-white"
//             />
//           </svg>
//         </div>
//       </section>

//       {/* Service Details */}
//       <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 py-20 px-6">
//         <motion.div 
//           className="md:sticky md:top-24 self-start"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//             <Image
//               src={service.banner}
//               alt={service.title}
//               width={600}
//               height={600}
//               className="w-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
//               <p className="text-white text-lg font-medium">Modern Web Solutions</p>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={staggerChildren}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <h2 className="text-3xl font-bold mb-10 relative inline-block">
//             Our Web Development Services
//             <motion.div 
//               className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500"
//               initial={{ width: 0 }}
//               whileInView={{ width: "50%" }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               viewport={{ once: true }}
//             />
//           </h2>

//           <div className="space-y-10">
//             {service.description.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeIn}
//                 className="flex group"
//               >
//                 <div className="flex-shrink-0 mr-5">
//                   <div className="w-14 h-14 rounded-xl bg-blue-100 group-hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center text-2xl group-hover:text-white">
//                     {item.icon}
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600">{item.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
//         {/* Decorative elements */}
//         <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//         <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We deliver exceptional web development services that drive growth and ensure your digital success
//             </p>
//           </motion.div>

//           <motion.div 
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {service.whyChoose.map((reason, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeIn}
//                 className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
//                 whileHover={{ y: -10, scale: 1.02 }}
//               >
//                 <div className="text-3xl mb-4 group-hover:text-blue-600 transition-colors duration-300">
//                   {reason.icon}
//                 </div>
//                 <h3 className="font-semibold text-lg">{reason.text}</h3>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Process */}
//       {/* <section className="py-20 bg-white relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               A structured approach to ensure your project's success from concept to launch
//             </p>
//           </motion.div>

//           <OurProcess 
//             activeProcess={activeProcess}
//             setActiveProcess={setActiveProcess}
//             processRef={processRef}
//           />
//         </div>
//       </section> */}
//       <OurProcess
//   steps={[
//     { title: "Requirement Gathering", description:     "Understanding your business goals, target audience, and feature requirements for the website.", },
//     { title:   "Planning & Architecture", description: "Define roadmap, architecture, and milestones." },
//     { title:   "UI/UX Design", description: "Create engaging UI/UX layouts and wireframes." },
//     { title: "Frontend Development", description:"Developing responsive, fast, and accessible front-end interfaces using modern frameworks and best practices.", },
//     { title: "Backend Development", description:"Building secure, scalable, and high-performance backend systems with proper integrations and APIs.", },

//     { title: "Testing", description: "QA for performance, security, and functionality." },
//     { title: "Deployment & Maintenance", description: "Launch & maintain your website reliably." },

//   ]}
// />

//       {/* Technologies We Use */}
//       <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We leverage cutting-edge technologies to build fast, secure, and scalable web applications
//             </p>
//           </motion.div>

//           <motion.div 
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {techLogos.map((tech, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeIn}
//                 whileHover={{ 
//                   scale: 1.1,
//                   transition: { duration: 0.3 }
//                 }}
//                 className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center group hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="relative w-16 h-16 mb-4">
//                   <div className="absolute inset-0 bg-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <Image
//                     src={tech.logo}
//                     alt={tech.name}
//                     width={64}
//                     height={64}
//                     className="relative z-10 object-contain"
//                   />
//                 </div>
//                 <p className="text-sm font-medium text-center">{tech.name}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-20 bg-gray-100 relative overflow-hidden">
//         <div className="max-w-4xl mx-auto px-6 relative z-10">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
//             <p className="text-gray-600">
//               Find answers to common questions about our web development process
//             </p>
//           </motion.div>

//           <div className="space-y-4">
//             {service.faqs.map((faq, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-xl shadow-md overflow-hidden"
//               >
//                 <button
//                   className="w-full p-6 text-left flex justify-between items-center font-medium text-lg"
//                   onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
//                 >
//                   <span>{faq.q}</span>
//                   <motion.span
//                     animate={{ rotate: faqOpen === idx ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="ml-4 text-blue-600 text-xl"
//                   >
//                     ▼
//                   </motion.span>
//                 </button>

//                 <AnimatePresence>
//                   {faqOpen === idx && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-6 pb-6 text-gray-600">{faq.a}</div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 text-center bg-gradient-to-r from-blue-300 to-blue-500 text-white relative overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(10)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute rounded-full bg-white/10"
//               style={{
//                 width: Math.random() * 80 + 20,
//                 height: Math.random() * 80 + 20,
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 scale: [0, 1, 0],
//                 opacity: [0, 0.3, 0],
//               }}
//               transition={{
//                 duration: Math.random() * 10 + 10,
//                 repeat: Infinity,
//                 delay: Math.random() * 5,
//               }}
//             />
//           ))}
//         </div>

//         <div className="max-w-3xl mx-auto px-6 relative z-10">
//           <motion.h2 
//             className="text-3xl md:text-4xl font-bold mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             Ready to start your project?
//           </motion.h2>
//           <motion.p 
//             className="text-xl mb-8 opacity-90"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 0.9, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//                Let&apos;s build something amazing together.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               Get in Touch
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
//             >
//               View Portfolio
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }















// "use client";

// import { useParams } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import OurProcess from "@/components/Services/OurProcess";
// import axios from "axios";

// export default function ServiceDetail() {
//   const params = useParams();
//   const id = params?.id; // safe
//   const [faqData, setFaqData] = useState([]);
//   const [faqOpen, setFaqOpen] = useState(null);
//   const [serviceData, setServiceData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);


//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   const staggerChildren = {
//     visible: {
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const techLogos = [
//     { name: "React.js", logo: "/tech/react.png" },
//     { name: "Next.js", logo: "/tech/nextjs.png" },
//     { name: "Node.js", logo: "/tech/node.png" },
//     { name: "MongoDB", logo: "/tech/mongodb.png" },
//     { name: "TailwindCSS", logo: "/tech/tailwind.png" },
//     { name: "AWS", logo: "/tech/aws.png" },
//   ];



//   useEffect(() => {
//     console.log('id:', id)
//     if (!id) return;

//     const fetchServiceData = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(
//           `https://landing-page-yclw.vercel.app/api/service/${id}`
//         );

//         if (res.data.success) {
//           setServiceData(res.data.data);
//           console.log("✅ Fetched Service Data:", res.data.data);
//         } else {
//           console.log("❌ API did not return success:", res.data);
//         }
//       } catch (err) {
//         console.error("Error fetching service data:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchServiceData();
//   }, [id]);


//   useEffect(() => {
//     const fetchFaq = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(`https://landing-page-yclw.vercel.app/api/faq`);
//         if (res.data.success) {
//           const filteredFaqs = res.data.data.filter(
//             (faq) => faq.module === "Services"
//           );
//           setFaqData(filteredFaqs);
//         }
//         console.log("Fetched FAQ Data:", res.data.data);
//       } catch (err) {
//         console.error("Error fetching FAQ data:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchFaq();
//   }, []);

//   if (isLoading) return <p>Loading...</p>;

//   if (!serviceData) return <p>No service found.</p>;
//   return (
//     <div className="bg-gray-50 overflow-hidden">
//       {/* Hero Banner */}
//       {/* <section className="relative h-[400px] flex items-center justify-center text-white">
//         {serviceData?.bannerImage && (
//           <img
//             src={serviceData.bannerImage} // must be string
//             alt={serviceData.title || "Service Banner"}
//             fill
//             className="object-cover"
//             priority
//           />
//         )}

//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative text-center z-10 px-4">
//           <h1 className="text-4xl font-bold">{serviceData.title}</h1>
//           <p className="mt-2 text-lg">{serviceData.description}</p>
//         </div>

//         <div className="absolute bottom-0 w-full overflow-hidden leading-none">
//           <svg
//             viewBox="0 0 500 150"
//             preserveAspectRatio="none"
//             className="w-full h-16"
//           >
//             <path
//               d="M0.00,49.98 C150.00,150.00 349.60,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
//               className="fill-white"
//             />
//           </svg>
//         </div>
//       </section> */}
//       <section className="relative mt-[64px] sm:mt-[80px] h-[220px] sm:h-[400px] flex items-center justify-center text-white">
//         {serviceData?.bannerImage && (
//           <img
//             src={serviceData.bannerImage}
//             alt={serviceData.title || "Service Banner"}
//             fill
//             className="object-cover object-center sm:object-[50%_30%]"
//             priority
//           />
//         )}

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40 sm:bg-black/50" />

//         {/* Centered Text */}
//         <div className="relative z-10 text-center px-3">
//           <h1 className="text-xl sm:text-4xl font-bold leading-snug">
//             {serviceData.title}
//           </h1>
//           <p className="mt-1 text-xs sm:text-lg max-w-md mx-auto">
//             {serviceData.description}
//           </p>
//         </div>

//         {/* Wave Shape */}
//         <div className="absolute bottom-0 w-full overflow-hidden leading-none">
//           <svg
//             viewBox="0 0 500 150"
//             preserveAspectRatio="none"
//             className="w-full h-10 sm:h-16"
//           >
//             <path
//               d="M0.00,49.98 C150.00,150.00 349.60,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
//               className="fill-white"
//             />
//           </svg>
//         </div>
//       </section>



//       {/* Service Details */}
//       <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 py-20 px-6">
//         <motion.div
//           className="md:sticky md:top-24 self-start"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//             <img
//               src={serviceData.serviceImage1}
//               alt={serviceData.title}
//               width={600}
//               height={600}
//               className="w-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
//               <p className="text-white text-lg font-medium">Modern Web Solutions</p>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={staggerChildren}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <h2 className="text-3xl font-bold mb-10 relative inline-block">
//             Our   {serviceData.title} Services
//             <motion.div
//               className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500"
//               initial={{ width: 0 }}
//               whileInView={{ width: "50%" }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               viewport={{ once: true }}
//             />
//           </h2>

//           <div className="space-y-10">
//             {serviceData.service.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeIn}
//                 className="flex group"
//               >
//                 <div className="flex-shrink-0 mr-5">
//                   <div className="w-14 h-14 rounded-xl bg-blue-100 group-hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center text-2xl group-hover:text-white">

//                     <img
//                       src={item.icon}
//                       alt={item.title}
//                       width={600}
//                       height={600}
//                       className="w-full object-cover"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
//         {/* Decorative elements */}
//         <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//         <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We deliver exceptional web development services that drive growth and ensure your digital success
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {serviceData?.whyChooseUs.map((reason, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeIn}
//                 className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
//                 whileHover={{ y: -10, scale: 1.02 }}
//               >
//                 <div className="text-3xl mb-4 group-hover:text-blue-600 transition-colors duration-300">

//                   <img
//                     src={reason.icon}
//                     alt={reason.title}
//                     width={40}
//                     height={40}
//                     className="relative z-10 object-contain"
//                   />

//                 </div>
//                 <h3 className="font-semibold text-lg">{reason.description}</h3>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Process */}
//       {/* <section className="py-20 bg-white relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               A structured approach to ensure your project's success from concept to launch
//             </p>
//           </motion.div>

//           <OurProcess 
//             activeProcess={activeProcess}
//             setActiveProcess={setActiveProcess}
//             processRef={processRef}
//           />
//         </div>
//       </section> */}
//       {/* <OurProcess
//         steps={[
//           { title: "Requirement Gathering", description: "Understanding your business goals, target audience, and feature requirements for the website.", },
//           { title: "Planning & Architecture", description: "Define roadmap, architecture, and milestones." },
//           { title: "UI/UX Design", description: "Create engaging UI/UX layouts and wireframes." },
//           { title: "Frontend Development", description: "Developing responsive, fast, and accessible front-end interfaces using modern frameworks and best practices.", },
//           { title: "Backend Development", description: "Building secure, scalable, and high-performance backend systems with proper integrations and APIs.", },

//           { title: "Testing", description: "QA for performance, security, and functionality." },
//           { title: "Deployment & Maintenance", description: "Launch & maintain your website reliably." },

//         ]}
//       /> */}

//       {serviceData?.process?.length > 0 && (
//         <OurProcess steps={serviceData.process} serviceImage2={serviceData.serviceImage2} />
//       )}



//       {/* Technologies We Use */}
//       <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We leverage cutting-edge technologies to build fast, secure, and scalable web applications
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {serviceData.technology.map((tech, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeIn}
//                 whileHover={{
//                   scale: 1.1,
//                   transition: { duration: 0.3 }
//                 }}
//                 className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center group hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="relative w-16 h-16 mb-4">
//                   <div className="absolute inset-0 bg-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <img
//                     src={tech.icon}
//                     alt={tech.title}
//                     width={64}
//                     height={64}
//                     className="relative z-10 object-contain"
//                   />
//                 </div>
//                 <p className="text-sm font-medium text-center">{tech.title}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-20 bg-gray-100 relative overflow-hidden">
//         <div className="max-w-4xl mx-auto px-6 relative z-10">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
//             <p className="text-gray-600">
//               Find answers to common questions about our web development process
//             </p>
//           </motion.div>

//           <div className="space-y-4">
//             {faqData.map((faqObj, idx1) =>
//               faqObj.question.map((faq, idx2) => (
//                 <motion.div
//                   key={`${idx1}-${idx2}`}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: idx2 * 0.1 }}
//                   viewport={{ once: true }}
//                   className="bg-white rounded-xl shadow-md overflow-hidden"
//                 >
//                   <button
//                     className="w-full p-6 text-left flex justify-between items-center font-medium text-lg"
//                     onClick={() =>
//                       setFaqOpen(faqOpen === `${idx1}-${idx2}` ? null : `${idx1}-${idx2}`)
//                     }
//                   >
//                     <span>{faq.question}</span>
//                     <motion.span
//                       animate={{ rotate: faqOpen === `${idx1}-${idx2}` ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="ml-4 text-blue-600 text-xl"
//                     >
//                       ▼
//                     </motion.span>
//                   </button>

//                   <AnimatePresence>
//                     {faqOpen === `${idx1}-${idx2}` && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))
//             )}
//           </div>

//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 text-center bg-gradient-to-r from-blue-300 to-blue-500 text-white relative overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(10)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute rounded-full bg-white/10"
//               style={{
//                 width: Math.random() * 80 + 20,
//                 height: Math.random() * 80 + 20,
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 scale: [0, 1, 0],
//                 opacity: [0, 0.3, 0],
//               }}
//               transition={{
//                 duration: Math.random() * 10 + 10,
//                 repeat: Infinity,
//                 delay: Math.random() * 5,
//               }}
//             />
//           ))}
//         </div>

//         <div className="max-w-3xl mx-auto px-6 relative z-10">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             Ready to start your project?
//           </motion.h2>
//           <motion.p
//             className="text-xl mb-8 opacity-90"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 0.9, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Let&apos;s build something amazing together.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               Get in Touch
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
//             >
//               View Portfolio
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


// "use client";

// import { useParams } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import OurProcess from "@/components/Services/OurProcess";
// import axios from "axios";
// import Link from "next/link";

// export default function ServiceDetail() {
//   const params = useParams();
//   const id = params?.id;
//   const [faqData, setFaqData] = useState([]);
//   const [faqOpen, setFaqOpen] = useState(null);
//   const [serviceData, setServiceData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isFaqLoading, setIsFaqLoading] = useState(false);

//   const fadeIn = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const staggerChildren = {
//     visible: { transition: { staggerChildren: 0.1 } },
//   };

//   useEffect(() => {
//     if (!id) return;
//     const fetchServiceData = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(`https://landing-page-yclw.vercel.app/api/service/${id}`);
//         if (res.data.success) setServiceData(res.data.data);
//       } catch (err) {
//         console.error("Error fetching service data:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchServiceData();
//   }, [id]);

//   useEffect(() => {
//     const fetchFaq = async () => {
//       try {
//         setIsFaqLoading(true);
//         const res = await axios.get(`https://landing-page-yclw.vercel.app/api/faq`);
//         if (res.data.success) {
//           const filteredFaqs = res.data.data.filter((faq) => faq.module === serviceData?.title);
//           setFaqData(filteredFaqs);
//         }
//       } catch (err) {
//         console.error("Error fetching FAQ data:", err);
//       } finally {
//         setIsFaqLoading(false);
//       }
//     };
//     if (serviceData?.title) fetchFaq();
//   }, [serviceData]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (!serviceData) return <p className="min-h-screen flex items-center justify-center">No service found.</p>;

//   return (
//     <div className="bg-gray-50 overflow-hidden">
//       {/* ✅ HERO SECTION */}
//       <section className="relative flex flex-col items-center justify-center text-white overflow-hidden min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh]">
//         {serviceData?.bannerImage && (
//           <motion.div
//             className="absolute inset-0"
//             initial={{ scale: 1.05 }}
//             animate={{ scale: 1 }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "easeInOut",
//             }}
//           >
//             <img
//               src={serviceData.bannerImage}
//               alt={serviceData.title || "Service Banner"}
//               className="w-full h-[70vh] md:h-[70vh] lg:h-[90vh] object-fill object-center"
//             />
//             {serviceData?.bannerImage?.match(/\.(mp4|webm|ogg)$/i) ? (
//               <video
//                 src={serviceData.bannerImage}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-[70vh] md:h-[70vh] lg:h-[90vh] object-fill object-center"
//               />
//             ) : (
//               <img
//                 src={serviceData.bannerImage}
//                 alt={serviceData.title || "Service Banner"}
//                 className="w-full h-[70vh] md:h-[70vh] lg:h-[90vh] object-fill object-center"
//               />
//             )}

//           </motion.div>
//         )}

//         {/* <div className="absolute inset-0 bg-black/40" /> */}

//         {/* Animated Blobs */}
//         <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
//         <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-pink-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-700" />

//         <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto py-20 md:py-28 lg:py-32">
//           <motion.h1
//             className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 via-blue-500 to-pink-300 bg-clip-text text-transparent leading-tight"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {serviceData?.title || "Transforming Ideas Into Impact"}
//           </motion.h1>

//           {/* <motion.p
//             className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             {serviceData?.description[0] ||
//               "We deliver innovative, scalable, and reliable solutions to accelerate your digital growth."}
//           </motion.p> */}
//         </div>

//         <div className="absolute bottom-0 w-full overflow-hidden leading-none">
//           <svg
//             className="w-full h-[100px] sm:h-[140px]"
//             viewBox="0 0 1440 320"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="url(#softGradient)"
//               d="M0,192L60,170.7C120,149,240,107,360,106.7C480,107,600,149,720,176C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96V320H0Z"
//             ></path>
//             <defs>
//               <linearGradient id="softGradient" gradientTransform="rotate(90)">
//                 <stop offset="0%" stopColor="#ffffff" />
//                 <stop offset="100%" stopColor="#f4f7ff" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       </section>

//       {/* ✅ SERVICE SECTION */}
//       {/* <section className="relative pb-24 pt-10 px-4 md:px-8 bg-transparent"> */}
//       <section className="relative pb-24 pt-10 px-4 md:px-8 bg-transparent">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
//           <motion.div
//             className="flex items-center justify-center"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             {/* <div className="relative w-[500px] lg:max-w-[450px] rounded-2xl overflow-hidden ">

//               {serviceData?.serviceImage1?.match(/\.(mp4|webm|ogg)$/i) ? (
//                 <video
//                   src={serviceData.serviceImage1}
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="w-full h-[230px] sm:h-[200px] md:h-[300px] lg:h-[360px] object-cover rounded-xl"
//                 />
//               ) : (
//                 <img
//                   src={serviceData.serviceImage1}
//                   alt={serviceData.title}
//                   className="w-full h-[280px] sm:h-[400px] md:h-[460px] lg:h-[520px] object-cover rounded-xl"
//                 />
//               )}

//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-700 flex items-end p-6">
//                 <p className="text-white text-lg font-medium tracking-wide">
//                   End-to-End Digital Excellence
//                 </p>
//               </div>
//             </div> */}
//             <div className="relative w-[500px] lg:max-w-[450px] rounded-2xl overflow-hidden">
//               {serviceData?.serviceImage1?.match(/\.(mp4|webm|ogg)$/i) ? (
//                 <video
//                   src={serviceData.serviceImage1}
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   controls={false}
//                   disablePictureInPicture
//                   disableRemotePlayback
//                   controlsList="nodownload nofullscreen noremoteplayback"
//                   className="w-full h-[230px] sm:h-[200px] md:h-[300px] lg:h-[480px] object-cover rounded-xl"
//                 />
//               ) : (
//                 <img
//                   src={serviceData.serviceImage1}
//                   alt={serviceData.title}
//                   className="w-full h-[280px] sm:h-[400px] md:h-[460px] lg:h-[520px] object-cover rounded-xl"
//                 />
//               )}

//               {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-700 flex items-end p-6">
//                 <p className="text-white text-lg font-medium tracking-wide">
//                   End-to-End Digital Excellence
//                 </p>
//               </div> */} 
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="flex flex-col justify-center"
//           >
//             <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 capitalize relative inline-block">
//               Our {serviceData.name?.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())} Services
//               <motion.div
//                 className="absolute -bottom-2 left-0 h-1 bg-blue-500 rounded-full"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "60%" }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 viewport={{ once: true }}
//               />
//             </h2>

//             <motion.p
//               className="text-gray-700 text-base sm:text-lg leading-relaxed bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-md"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               {serviceData?.description[1] ||
//                 `At ${serviceData.title}, we specialize in delivering comprehensive, high-impact digital solutions designed to elevate your brand. From innovative web and mobile development to seamless integrations, our team crafts scalable strategies that ensure long-term success.`}
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ✅ WHY CHOOSE US */}
//       <section className="relative py-24 bg-white overflow-hidden px-4 md:px-8">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <motion.div
//             className="text-center mb-14"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">
//               Why Choose Us
//             </h2>
//             <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
//               We deliver exceptional{" "}
//               <span className="font-semibold text-indigo-600">
//                 {serviceData.title?.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
//               </span>{" "}
//               services that drive growth and ensure your digital success.
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-50px" }}
//           >
//             {serviceData?.whyChooseUs.map((reason, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={fadeIn}
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 className="relative group rounded-2xl backdrop-blur-lg bg-white/60 border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 p-6 text-center"
//               >
//                 <div className="flex justify-center mb-5">
//                   <div className="relative">
//                     <div className="absolute inset-0 bg-blue-500/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
//                     <img
//                       src={reason.icon}
//                       alt={reason.title}
//                       width={50}
//                       height={50}
//                       className="w-12 h-12 sm:w-14 sm:h-14 relative z-10 object-contain transform group-hover:scale-110 transition duration-500"
//                     />
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
//                   {reason.title}
//                 </h3>
//                 <p className="mt-3 text-gray-600 text-sm leading-relaxed">{reason.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ✅ OUR PROCESS */}
//       {serviceData?.process?.length > 0 && (
//         <OurProcess
//           title={serviceData.title}
//           steps={serviceData.process}
//           serviceImage2={serviceData.serviceImage2}
//         />
//       )}

//       {/* ✅ TECHNOLOGIES */}
//       {serviceData?.technology && serviceData.technology.length > 0 && (
//         <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 relative overflow-hidden">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               className="text-center mb-12 sm:mb-16"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-2xl text-blue-500 sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
//                 Technologies We Use
//               </h2>
//               <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
//                 We leverage cutting-edge technologies to build fast, secure, and scalable applications.
//               </p>
//             </motion.div>

//             <motion.div
//               className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-center"
//               variants={staggerChildren}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               {serviceData.technology.map((tech, idx) => (
//                 <motion.div
//                   key={idx}
//                   variants={fadeIn}
//                   whileHover={{ scale: 1.1 }}
//                   className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center justify-center group hover:shadow-lg transition-all duration-300 w-24 sm:w-28 md:w-32 lg:w-36"
//                 >
//                   <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4">
//                     <div className="absolute inset-0 bg-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <img
//                       src={tech.icon}
//                       alt={tech.title}
//                       className="relative z-10 object-contain w-full h-full"
//                     />
//                   </div>
//                   <p className="text-xs sm:text-sm font-medium text-center">{tech.title}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>
//       )}


//       {/* ✅ FAQ */}
//       <section className="py-16 lg:py-20 bg-gray-100 px-4 sm:px-6 relative overflow-hidden">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             className="text-center mb-12 sm:mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-2xl text-blue-500 sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base">
//               Find answers to common questions about our{" "}
//               {serviceData.title?.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())} process
//             </p>
//           </motion.div>

//           {isFaqLoading ? (
//             <div className="flex justify-center py-8">
//               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {faqData.length > 0 ? (
//                 faqData.map((faqObj, idx1) =>
//                   faqObj.question.map((faq, idx2) => (
//                     <motion.div
//                       key={`${idx1}-${idx2}`}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                       viewport={{ once: true }}
//                       className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
//                     >
//                       <button
//                         className="w-full cursor-pointer p-4 sm:p-6 text-left flex justify-between items-start sm:items-center font-medium text-sm sm:text-base lg:text-lg leading-snug"
//                         onClick={() =>
//                           setFaqOpen(faqOpen === `${idx1}-${idx2}` ? null : `${idx1}-${idx2}`)
//                         }
//                       >
//                         <span className="text-gray-800 pr-4">{faq.question}</span>
//                         <motion.span
//                           animate={{ rotate: faqOpen === `${idx1}-${idx2}` ? 180 : 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="ml-2 text-blue-600 text-lg flex-shrink-0"
//                         >
//                           ▼
//                         </motion.span>
//                       </button>

//                       <AnimatePresence>
//                         {faqOpen === `${idx1}-${idx2}` && (
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: "auto", opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="overflow-hidden"
//                           >
//                             <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
//                               {faq.answer}
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </motion.div>
//                   ))
//                 )
//               ) : (
//                 <p className="text-center text-gray-500 text-sm sm:text-base">
//                   No FAQs found for this service.
//                 </p>
//               )}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import FtflProcess from "@/components/Services/OurProcess";
import { FiArrowRight } from "react-icons/fi";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CheckCircle } from "lucide-react";



export default function ServiceDetail() {
  const router = useRouter();
  const id = router.query?.id;


  const [serviceData, setServiceData] = useState({});
  const { question } = serviceData;

  const [loading, setLoading] = useState(true);
  const [faqData, setFaqData] = useState([]);
  const [isFaqLoading, setIsFaqLoading] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);


  // Fetch service
  useEffect(() => {
    if (!router.isReady) return;
    if (!id) return;

    const fetchService = async () => {
      try {
        const res = await axios.get(
          `https://landing-page-yclw.vercel.app/api/service/${id}`
        );

        // Fix: Access the nested data
        if (res.data.success) {
          setServiceData(res.data.data); // This is the actual service data
        } else {
          console.error("API returned unsuccessful response");
          setServiceData(null);
        }
      } catch (err) {
        console.error(err);
        setServiceData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [router.isReady, id]);

  // ==== Fetch FAQ only when service title loads ====
  useEffect(() => {
    if (!serviceData?.title) return;

    const fetchFaq = async () => {
      try {
        setIsFaqLoading(true);
        const res = await axios.get(
          `https://landing-page-yclw.vercel.app/api/faq`
        );

        if (res.data.success) {
          const filteredFaqs = res.data.data.filter(
            (faq) => faq.module === serviceData.title
          );
          console.log("Filtered FAQs:", filteredFaqs); // Debug log
          setFaqData(filteredFaqs);
        }
      } catch (err) {
        console.error("Error fetching FAQ:", err);
      } finally {
        setIsFaqLoading(false);
      }
    };

    fetchFaq();
  }, [serviceData?.title]); // Add serviceData.title as dependency

  if (loading) return <p>Loading...</p>;
  if (!serviceData) return <p>Service not found.</p>;

  return (
    <>
      {/* ==== Hero Banner Section ==== */}
      {/* ==== Hero Banner Section ==== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#021030] via-[#032781] to-[#01154b] py-24">
        {/* ==== Animated Background Waves ==== */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Wave Layer 1 */}
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full opacity-20">
              <path
                fill="url(#waveGradient)"
                fillOpacity="1"
                d="M0,128L60,160C120,192,240,256,360,261.3C480,267,600,213,720,186.7C840,160,960,160,1080,154.7C1200,149,1320,139,1380,133.3L1440,128V320H0Z"
              />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00d8ff" />
                  <stop offset="100%" stopColor="#7c4dff" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Wave Layer 2 */}
          <motion.div
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full opacity-15">
              <path
                fill="url(#waveGradient2)"
                fillOpacity="1"
                d="M0,256L80,213.3C160,171,320,85,480,64C640,43,800,85,960,128C1120,171,1280,213,1360,234.7L1440,256V320H0Z"
              />
              <defs>
                <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00d8ff" />
                  <stop offset="100%" stopColor="#7c4dff" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Floating Glows */}
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl"
          ></motion.div>

          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          ></motion.div>
        </div>

        {/* ==== Foreground Content ==== */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-14 relative z-10">

          {/* ==== Left Text Section ==== */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg justify-center">
              <span className="text-[#00eaff]">{serviceData?.descriptionTitle}</span> <br />
              {/* <span className="text-[#00eaff]">Into Digital Reality</span> */}
            </h1>

            {/* ===== Content from DB ===== */}
            <p className="text-blue-100/90 max-w-md">
              {serviceData?.description?.content ||
                "We build futuristic digital experiences using cutting-edge technology and creative innovation that set you apart."}
            </p>

            {/* ===== Optional Points (only show if present) ===== */}
            {serviceData?.description?.points?.length > 0 && (
              <ul className="text-blue-100/80 space-y-1 mt-3">
                {serviceData.description.points.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>
            )}

            <div className="pt-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#00eaff] text-[#021030] font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 hover:bg-white transition-all">
                Get Started <FiArrowRight />
              </button>
            </div>
          </motion.div>

          {/* ==== Right Image Section ==== */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative ">
              <img
                src={serviceData?.mainImage || "tappay-front-img.png"}
                alt={serviceData?.descriptionTitle || "Digital Innovation"}
                className="h-[450px]"
              />
              <div className="absolute -bottom-6 -left-6 h-24 bg-cyan-500/40 rounded-3xl blur-xl opacity-70"></div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* ==== Overview Section ==== */}
      {serviceData?.overview?.length > 0 && (
        <section className="pt-15 pb-10 lg:ps-10 px-4 sm:px-10 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* === Left Text === */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1d2c53]">
                Overview
              </h2>
              {serviceData?.overview?.map((para, idx) => (
                <p key={idx} className="text-lg text-gray-700 leading-relaxed text-justify">
                  {para}
                </p>
              ))}
            </motion.div>

            {/* === Right Image === */}
            {serviceData?.overviewImage && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative w-[500px] h-[400px] overflow-hidden">
                  <Image
                    src={serviceData.overviewImage}
                    alt="Overview"
                    fill
                    className="hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* ==== What is "{Service Name}" Section ==== */}

      <section className="pb-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto lg:ps-0 px-6 sm:px-20 text-center">

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d2c53] mb-6 text-left"
          >
            What is <span className="text-[#4379f7]">"{question?.title}"</span>?
          </motion.h2>

          {/* Optional answers list */}
          {question?.answer?.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mt-4  list-inside text-gray-700 text-justify space-y-3 list-none "
            >
              {question.answer.map((ans, idx) => (
                <li key={idx}>{ans}</li>
              ))}
            </motion.ul>
          )}
        </div>
      </section>



      {/* ==== Process Section ==== */}
      {serviceData?.process?.length > 0 && (
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16 sm:mb-20"
            >
              Our <span className="text-blue-600">{serviceData?.title} </span>Process
            </motion.h2>

            {/* Swiper */}
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              centeredSlides={true}
              centeredSlidesBounds={true}
              spaceBetween={35}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 1 },
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              style={{ paddingBottom: "60px" }}
            >
              {serviceData?.process?.map((step, index) => (
                <SwiperSlide key={index} className="flex justify-center">

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="w-full flex flex-col items-center transition-all duration-300"
                  >

                    {/* Card */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="
                        h-[560px] sm:h-[520px] md:h-[540px] lg:h-[600px] xl:h-[620px]
                        bg-white/80 backdrop-blur-md
                        border border-blue-100 
                        shadow-lg rounded-2xl p-6
                        hover:shadow-2xl hover:border-blue-300 
                        flex flex-col w-full max-w-[280px] md:max-w-[300px] lg:max-w-[310px]
                        transition-all duration-300
                      "
                    >

                      {/* Icon */}
                      {step.icon && (
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mx-auto mb-5 shadow-md overflow-hidden">
                          <img
                            src={step.icon}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}


                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 text-center">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <ul className="text-gray-600 text-sm  space-y-2 text-left flex-1 list-disc list-inside">
                        {step.description?.map((point, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                          >
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                  </motion.div>

                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

      {/* ==== Why Choose Us Section ==== */}
      {serviceData?.whyChooseUs?.description?.length > 0 && (
        <section className="relative py-24 px-6 md:px-16 bg-gradient-to-r from-[#7eaee9] via-[#eef3ff] to-[#bad6f8f8] overflow-hidden">
          {/* Decorative background shapes */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300/20 rounded-full blur-2xl"></div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 relative z-10">
            {/* === Left Image === */}
            {serviceData?.whyChooseUs?.icon && (
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <img
                    src={serviceData.whyChooseUs.icon}
                    alt="Why Choose Us"
                    className="w-full h-[420px] object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Subtle glowing ring accent */}
                <div className="absolute -bottom-10 -left-8 w-40 h-40 bg-blue-300/40 rounded-full blur-2xl"></div>
              </motion.div>
            )}

            {/* === Right Text Content === */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 h-full flex flex-col justify-between"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1d2c53] mb-4">
                  Why Choose Us
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We don’t just build digital products — we create lasting experiences.
                  Here’s what sets us apart from the rest:
                </p>

                {/* Two Column Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceData?.whyChooseUs?.description?.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="text-[#4379f7] w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <span className="text-lg font-medium text-gray-800 leading-relaxed">
                          {point}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ==== Benefits Section ==== */}
      {serviceData?.benefits?.length > 0 && (
        <section className="relative bg-gradient-to-b from-white to-blue-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* === Section Title === */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-gray-800 mb-12 sm:mb-16"
            >
              Benefits of <span className="text-blue-600">{serviceData?.title}</span>
            </motion.h2>

            <div className="flex flex-col relative space-y-10 sm:space-y-12 lg:space-y-0">
              {serviceData?.benefits?.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col lg:flex-row items-center ${isEven ? "lg:justify-start" : "lg:justify-end"
                      }`}
                  >
                    <div
                      className={`relative flex flex-col items-center w-full lg:w-1/2 ${isEven ? "lg:items-start lg:text-left" : "lg:items-start lg:text-left"
                        }`}
                    >
                      {/* === Capsule Container === */}
                      <motion.div
                        whileHover={{
                          rotateX: 5,
                          rotateY: isEven ? -5 : 5,
                          translateY: -6,
                          scale: 1.03,
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 120, damping: 10 }}
                        className={`relative bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-full border border-blue-200 px-4 sm:px-6 lg:px-10 py-5 flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-hidden transition-all duration-500
                          ${isEven ? "ml-0 lg:ml-20 lg:flex-row" : "mr-0 lg:mr-10 lg:flex-row-reverse"}`}
                      >
                        {/* Icon Section */}
                        {item.icon && (
                          <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full shrink-0 overflow-hidden">
                            <img
                              src={item.icon}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {/* Text Section */}
                        <motion.div
                          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="max-w-sm text-left"
                        >
                          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            {item.description}
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ==== Integration Tools Section ==== */}
      {serviceData?.integration?.length > 0 && (
        <section className="relative bg-gradient-to-b from-[#aedef4bd] via-[#f3f6ff] to-[#70b1eddd] py-24 overflow-hidden">
          {/* ==== Header ==== */}
          <div className="text-center mb-16 px-6">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-[#1d2c53] mb-6"
            >
              Integration Tools that Power <br />
              <span className="text-[#4568dc]">{serviceData?.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-10"
            >
              Build a connected ecosystem that streamlines your business operations —
              from payments and analytics to delivery and communication tools.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#4568dc] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#3855c9] transition-all"
            >
              Explore Integrations
            </motion.button>
          </div>

          {/* ==== Animated Cards Grid ==== */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6"
          >
            {serviceData?.integration?.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative flex flex-col items-center justify-center bg-white rounded-2xl p-8 text-[#1d2c53] shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(69,104,220,0.15)] transition-all duration-500 min-h-[220px]"
              >
                {/* Icon */}
                {item.icon && (
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#e3e8ff] to-[#f7f8ff] border border-[#d4d9ff] mb-4 overflow-hidden">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Title + Description */}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-snug text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* ==== Subtle Background Glow ==== */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(69,104,220,0.08),transparent_70%)] pointer-events-none"></div>
        </section>
      )}

      {/* ==== Key Features Section ==== */}
      {serviceData?.keyFeatures?.length > 0 && (
        <section className="relative overflow-hidden bg-gradient-to-r from-[#021030] via-[#032781] to-[#01154b] py-24">
          {/* ==== Animated Background ==== */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,232,255,0.08),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(124,77,255,0.08),transparent_60%)]"
            ></motion.div>
          </div>

          {/* ==== Header ==== */}
          <div className="relative z-10 text-center mb-16 px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Key Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-100/80 max-w-2xl mx-auto"
            >
              Empower your platform with next-generation capabilities designed for scalability,
              performance, and personalization.
            </motion.p>
          </div>

          {/* ==== Feature Cards ==== */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
            {serviceData?.keyFeatures?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white/5 border border-white/10 hover:border-cyan-400/40 text-white rounded-2xl p-8 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.3)] transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Icon */}
                  {item.icon && (
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center shadow-inner shadow-cyan-500/30 overflow-hidden">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-blue-100/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ==== AI Technologies Section ==== */}
      {serviceData?.aiTechnologies?.length > 0 && (
        <section className="relative bg-gradient-to-b from-[#f8faff] via-[#f3f6ff] to-[#eef2ff] py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 relative">
            {/* ==== Left Image ==== */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1 relative rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            >
              {serviceData?.aiTechnologyImage && (
                <img
                  src={serviceData.aiTechnologyImage}
                  alt="AI Technology"
                  className="w-full h-full object-cover min-h-[550px] rounded-3xl"
                />
              )}

              {/* Floating Circuit Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(77,116,255,0.25),transparent_60%)] animate-pulse"></div>
            </motion.div>

            {/* ==== Vertical Divider ==== */}
            <div className="hidden lg:block w-[2px] bg-gradient-to-b from-transparent via-[#4f63ff] to-transparent rounded-full"></div>

            {/* ==== Right Text Section ==== */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1 bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-10 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1d2c53] mb-4">
                  AI Technologies We Use
                </h2>
                <p className="text-gray-600 mb-10">
                  We use AI to create intelligent, predictive, and personalized digital experiences for every customer journey.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {serviceData?.aiTechnologies?.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-5"
                  >
                    {/* === AI Icon Design === */}
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      {/* Hexagon Glow Shape */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#dee4ff] to-[#eff2ff] rounded-2xl rotate-45 blur-[1px]"></div>
                      {/* Icon Container */}
                      {tech.icon && (
                        <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e7ebff] to-[#f3f5ff] flex items-center justify-center border border-[#c9d1ff]/60 shadow-[inset_0_0_10px_rgba(61,90,254,0.15)] overflow-hidden">
                          <img
                            src={tech.icon}
                            alt={`AI Tech ${index}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      {/* Outer Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-[#3d5afe]/20 blur-lg opacity-0 hover:opacity-70 transition duration-500"></div>
                    </div>

                    {/* === Text === */}
                    <div>
                      {(() => {
                        const parts = tech.description.split(":");
                        const title = parts[0];
                        const content = parts.slice(1).join(":").trim();

                        return (
                          <>
                            <h3 className="font-semibold text-[#1d2c53] text-base mb-1">
                              {title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {content}
                            </p>
                          </>
                        );
                      })()}
                    </div>

                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}


      <FtflProcess />


      {/* ==== Tools We Use Section ==== */}
      {serviceData?.technology?.length > 0 && (
        <section className="relative bg-white py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

            {/* === Left Side (Stylish Title Design) === */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h1 className="text-6xl md:text-7xl font-extrabold text-[#1d2c53] leading-tight relative animate-gradient-shimmer bg-clip-text bg-gradient-to-r from-[#3d5afe] via-[#00bcd4] to-[#6f8aff]">
                Innovation <span className="block text-gray-800 mt-2">Meets</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-[#3d5afe]">
                  Technology
                </span>

                {/* Subtle Glow Line */}
                <span className="absolute -bottom-4 left-0 w-32 h-[3px] bg-gradient-to-r from-[#3d5afe] to-[#00bcd4] rounded-full"></span>
              </h1>

              <p className="text-gray-500 mt-10 max-w-sm leading-relaxed text-base">
                Blending creativity with cutting-edge frameworks to deliver seamless digital experiences.
              </p>
            </motion.div>

            {/* === Right Side (Tools Grid) === */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {serviceData?.technology?.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -3 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl border border-gray-100 transition-shadow duration-300"
                  >
                    {tool.icon && (
                      <div className="text-[#3d5afe] text-4xl mb-2">
                        <img
                          src={tool.icon}
                          alt={tool.title}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    )}
                    <p className="text-sm font-medium text-[#1d2c53]">{tool.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* === Gradient Text Animation === */}
          <style jsx>{`
              @keyframes gradientShimmer {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
              .animate-gradient-shimmer {
                background-size: 200% 200%;
                animation: gradientShimmer 3s ease infinite;
              }
            `}</style>
        </section>
      )}


      {/* ✅ FAQ */}
      {/* {serviceData.faqs && serviceData.faqs.length > 0 &&( */}
      <section className="py-16 lg:py-20 bg-gray-100 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl text-blue-500 sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Find answers to common questions about our{" "}
              {serviceData.title?.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())} process
            </p>
          </motion.div>

          {isFaqLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {faqData.length > 0 ? (
                faqData.map((faqObj, idx1) =>
                  faqObj.question.map((faq, idx2) => (
                    <motion.div
                      key={`${idx1}-${idx2}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                    >
                      <button
                        className="w-full cursor-pointer p-4 sm:p-6 text-left flex justify-between items-start sm:items-center font-medium text-sm sm:text-base lg:text-lg leading-snug"
                        onClick={() =>
                          setFaqOpen(faqOpen === `${idx1}-${idx2}` ? null : `${idx1}-${idx2}`)
                        }
                      >
                        <span className="text-gray-800 pr-4">{faq.question}</span>
                        <motion.span
                          animate={{ rotate: faqOpen === `${idx1}-${idx2}` ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-2 text-blue-600 text-lg flex-shrink-0"
                        >
                          ▼
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {faqOpen === `${idx1}-${idx2}` && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                )
              ) : (
                <p className="text-center text-gray-500 text-sm sm:text-base">
                  No FAQs found for this service.
                </p>
              )}
            </div>
          )}
        </div>
      </section>
      {/* )} */}

    </>
  );
}

