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


// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useRef, useEffect } from "react";
// import OurProcess from "@/components/Services/OurProcess";
// import { useRouter } from "next/router";
// import { useParams } from "next/navigation";
// import axios from "axios";


// export default function ServiceDetail() {

//   // const slug = "web-development";

//   // const service = serviceData[slug] || serviceData["web-development"];
//   const [faqOpen, setFaqOpen] = useState(null);
//   const [activeProcess, setActiveProcess] = useState(0);
//   const processRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(false); 

// // Animation variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" }
//   }
// };

// const staggerChildren = {
//   visible: {
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const techLogos = [
//   { name: "React.js", logo: "/tech/react.png" },
//   { name: "Next.js", logo: "/tech/nextjs.png" },
//   { name: "Node.js", logo: "/tech/node.png" },
//   { name: "MongoDB", logo: "/tech/mongodb.png" },
//   { name: "TailwindCSS", logo: "/tech/tailwind.png" },
//   { name: "AWS", logo: "/tech/aws.png" },
// ];


//    const [serviceData, setServiceData] = useState([]);
//     const router = useRouter();
//     const { id } = router.query;

//     // useEffect(() => {
//     //   if (!id) return;

//     //   const fetchServiceData = async () => {
//     //     try {
//     //       setIsLoading(true);
//     //       const res = await axios.get(`https://landing-page-yclw.vercel.app/api/service/${id}`);
//     //       if (res.data.success) {
//     //         setServiceData(res.data.data);
//     //       }
//     //       console.log("Fetched Service Data:", res.data.data);
//     //     } catch (err) {
//     //       console.error("Error fetching service data:", err);
//     //     } finally {
//     //       setIsLoading(false);
//     //     }
//     //   };

//     //   fetchServiceData();
//     // }, [id]);

//      useEffect(() => {
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



"use client";

import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import OurProcess from "@/components/Services/OurProcess";
import axios from "axios";

export default function ServiceDetail() {
  const params = useParams();
  const id = params?.id; // safe
  const [faqData, setFaqData] = useState([]);
  const [faqOpen, setFaqOpen] = useState(null);
  const [serviceData, setServiceData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const techLogos = [
    { name: "React.js", logo: "/tech/react.png" },
    { name: "Next.js", logo: "/tech/nextjs.png" },
    { name: "Node.js", logo: "/tech/node.png" },
    { name: "MongoDB", logo: "/tech/mongodb.png" },
    { name: "TailwindCSS", logo: "/tech/tailwind.png" },
    { name: "AWS", logo: "/tech/aws.png" },
  ];



  useEffect(() => {
    console.log('id:', id)
    if (!id) return;

    const fetchServiceData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://landing-page-yclw.vercel.app/api/service/${id}`
        );

        if (res.data.success) {
          setServiceData(res.data.data);
          console.log("✅ Fetched Service Data:", res.data.data);
        } else {
          console.log("❌ API did not return success:", res.data);
        }
      } catch (err) {
        console.error("Error fetching service data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServiceData();
  }, [id]);


  useEffect(() => {
    const fetchFaq = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`https://landing-page-yclw.vercel.app/api/faq`);
        if (res.data.success) {
          const filteredFaqs = res.data.data.filter(
            (faq) => faq.module === "Services"
          );
          setFaqData(filteredFaqs);
        }
        console.log("Fetched FAQ Data:", res.data.data);
      } catch (err) {
        console.error("Error fetching FAQ data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaq();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (!serviceData) return <p>No service found.</p>;
  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        {serviceData?.bannerImage && (
          <img
            src={serviceData.bannerImage} // must be string
            alt={serviceData.title || "Service Banner"}
            fill
            className="object-cover"
            priority
          />
        )}

        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center z-10 px-4">
          <h1 className="text-4xl font-bold">{serviceData.title}</h1>
          <p className="mt-2 text-lg">{serviceData.description}</p>
        </div>
        {/* Wave Shape */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.60,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* Service Details */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 py-20 px-6">
        <motion.div
          className="md:sticky md:top-24 self-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={serviceData.bannerImage}
              alt={serviceData.title}
              width={600}
              height={600}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <p className="text-white text-lg font-medium">Modern Web Solutions</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-10 relative inline-block">
            Our   {serviceData.title} Services
            <motion.div
              className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: "50%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </h2>

          <div className="space-y-10">
            {serviceData.service.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="flex group"
              >
                <div className="flex-shrink-0 mr-5">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 group-hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center text-2xl group-hover:text-white">

                    <img
                      src={item.icon}
                      alt={item.title}
                      width={600}
                      height={600}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional web development services that drive growth and ensure your digital success
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {serviceData?.whyChooseUs.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="text-3xl mb-4 group-hover:text-blue-600 transition-colors duration-300">

                  <img
                    src={reason.icon}
                    alt={reason.title}
                    width={40}
                    height={40}
                    className="relative z-10 object-contain"
                  />

                </div>
                <h3 className="font-semibold text-lg">{reason.description}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      {/* <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure your project's success from concept to launch
            </p>
          </motion.div>
          
          <OurProcess 
            activeProcess={activeProcess}
            setActiveProcess={setActiveProcess}
            processRef={processRef}
          />
        </div>
      </section> */}
      {/* <OurProcess
        steps={[
          { title: "Requirement Gathering", description: "Understanding your business goals, target audience, and feature requirements for the website.", },
          { title: "Planning & Architecture", description: "Define roadmap, architecture, and milestones." },
          { title: "UI/UX Design", description: "Create engaging UI/UX layouts and wireframes." },
          { title: "Frontend Development", description: "Developing responsive, fast, and accessible front-end interfaces using modern frameworks and best practices.", },
          { title: "Backend Development", description: "Building secure, scalable, and high-performance backend systems with proper integrations and APIs.", },

          { title: "Testing", description: "QA for performance, security, and functionality." },
          { title: "Deployment & Maintenance", description: "Launch & maintain your website reliably." },

        ]}
      /> */}

      {serviceData?.process?.length > 0 && (
        <OurProcess steps={serviceData.process} serviceImage2={serviceData.serviceImage2} />
      )}



      {/* Technologies We Use */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build fast, secure, and scalable web applications
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {serviceData.technology.map((tech, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={tech.icon}
                    alt={tech.title}
                    width={64}
                    height={64}
                    className="relative z-10 object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-center">{tech.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our web development process
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faqObj, idx1) =>
              faqObj.question.map((faq, idx2) => (
                <motion.div
                  key={`${idx1}-${idx2}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx2 * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    className="w-full p-6 text-left flex justify-between items-center font-medium text-lg"
                    onClick={() =>
                      setFaqOpen(faqOpen === `${idx1}-${idx2}` ? null : `${idx1}-${idx2}`)
                    }
                  >
                    <span>{faq.question}</span>
                    <motion.span
                      animate={{ rotate: faqOpen === `${idx1}-${idx2}` ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 text-blue-600 text-xl"
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
                        <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-300 to-blue-500 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 80 + 20,
                height: Math.random() * 80 + 20,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Ready to start your project?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let&apos;s build something amazing together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}