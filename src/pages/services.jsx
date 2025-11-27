// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { CheckCircle,Lightbulb, Layout, Smartphone, PenTool, Code, CheckCircle2,Search,
//   Layers,Rocket,ArrowRight,Smile,  Shield, Cpu, Zap, Globe  } from "lucide-react";
//   import {
//   FiTarget,
//   FiUsers,
//   FiLayers,
//   FiCode,
//   FiCheckCircle,FiCreditCard,
//   FiTruck,
//   FiBarChart2,
//   FiGlobe,
//   FiShoppingCart,
//   FiSend,FiArrowRight ,FiCpu,FiTrendingUp,FiStar ,FiMessageSquare,FiSearch,FiShield
// } from "react-icons/fi";
// import {
//   SiMongodb,
//   SiExpress,
//   SiReact,
//   SiNodedotjs,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiDocker,
//   SiAmazoncloudwatch,
// } from "react-icons/si";
// import { FaRocket,FaBitcoin  } from "react-icons/fa";
// import { useState } from "react";

// export default function ServiceDetailPage() {
//   const title = "E-Commerce Development";
//   const imageUrl = "/graphic design bannerr.png"; 
//    const overviewImage = "/Ready to jump into content marketing.jpeg";
//   const position = "bottom-right"; // options: "top-left", "top-right", "bottom-left", "bottom-right"

//   // Position map for title placement
//   const positions = {
//     "top-left": "top-10 left-10",
//     "top-right": "top-10 right-10",
//     "bottom-left": "bottom-10 left-10",
//     "bottom-right": "bottom-10 right-10",
//   };

//  const processSteps = [
//   {
//     id: 1,
//     title: "Research and Planning",
//     icon: Search,
//     color: "from-blue-500 to-blue-600",
//     points: [
//       "Establish your company's objectives: Determine your target market, USP, and product category (e.g., fashion, electronics, or digital downloads).",
//       "Market analysis: Use tools like Google Analytics or SEMrush to study rivals, pricing tactics, and trends.",
//       "Select a business plan: Choose between B2C, B2B, C2C (like eBay), or dropshipping models.",
//     ],
//   },
//   {
//     id: 2,
//     title: "Selecting a Platform",
//     icon: Layers,
//     color: "from-blue-500 to-blue-600",
//     points: [
//       "Hosted solutions: Platforms like Shopify or BigCommerce are great for beginners.",
//       "Self-hosted options: WooCommerce or Magento offer flexibility but need technical expertise.",
//       "Custom development: Build from scratch using React.js (frontend) and Node.js or Laravel (backend).",
//     ],
//   },
//   {
//     id: 3,
//     title: "User Experience (UX) and Design",
//     icon: Layout,
//     color: "from-blue-500 to-blue-600",
//     points: [
//       "Wireframing: Design blueprints for homepage, product pages, and checkout.",
//       "Responsive design: Use Bootstrap or Tailwind to ensure device compatibility.",
//       "Visual components: Use high-quality media and intuitive navigation via Figma or Adobe XD.",
//       "Accessibility: Follow WCAG guidelines for inclusive design (alt text, keyboard navigation).",
//     ],
//   },
//   {
//     id: 4,
//     title: "Functionality and Development",
//     icon: Code,
//     color: "from-blue-500 to-blue-600",
//     points: [
//       "Configure the backend: Integrate databases like MySQL or MongoDB for product and order data.",
//       "Front-end execution: Add wishlists, filters, search, and AI-based product recommendations.",
//       "Security: Use SSL certificates, PCI DSS compliance, and DDoS protection.",
//       "Testing: Perform unit, UAT, and load testing to ensure stability during peak traffic.",
//     ],
//   },
//   {
//     id: 5,
//     title: "Optimization and Launch",
//     icon: Rocket,
//     color: "from-blue-500 to-blue-600",
//     points: [
//       "Launch: Migrate data and announce via social media and newsletters.",
//       "SEO optimization: Implement meta tags, sitemaps, and tools like Yoast SEO.",
//       "Analytics setup: Track conversion funnels and user behavior via Hotjar or Google Analytics.",
//       "Iterations: Run A/B tests and refine based on performance feedback.",
//     ],
//   },
// ];

//   const points = [
//     "Experienced & Skilled Team",
//     "Custom E-Commerce Solutions",
//     "24/7 Dedicated Support",
//     "AI-Powered Recommendations",
//     "Secure & Scalable Platforms",
//     "Seamless User Experience",
//   ];

//   const benefits = [
//       {
//         id: 1,
//         icon: Smile,
//         title: "Enhanced User Satisfaction",
//         description:
//           "We focus on intuitive designs that ensure your customers enjoy a seamless and pleasant shopping experience.",
//         color: "from-cyan-500 to-blue-500",
//       },
//       {
//         id: 2,
//         icon: Rocket,
//         title: "Faster Launch Time",
//         description:
//           "Our agile process and modern tech stack help you get your store live quickly without compromising quality.",
//         color: "from-cyan-500 to-blue-500",
//       },
//       {
//         id: 3,
//         icon: Shield,
//         title: "Robust Security",
//         description:
//           "We implement top-tier security measures — SSL, encryption, and firewalls — to keep your data safe.",
//         color: "from-cyan-500 to-blue-500",
//       },
//       {
//         id: 4,
//         icon: Cpu,
//         title: "AI-Driven Insights",
//         description:
//           "Leverage advanced analytics and AI-powered recommendations to boost sales and customer engagement.",
//         color: "from-cyan-500 to-blue-500",
//       },
//       {
//         id: 5,
//         icon: Zap,
//         title: "Optimized Performance",
//         description:
//           "We ensure your website loads fast and performs well even under heavy traffic conditions.",
//         color: "from-cyan-500 to-blue-500",
//       },
//       {
//         id: 6,
//         icon: Globe,
//         title: "Global Scalability",
//         description:
//           "Easily expand your e-commerce platform to handle international customers and currencies.",
//         color: "from-cyan-500 to-blue-500",
//       },
//     ];

//      const iconMap = {
//     target: <FiTarget />,
//     users: <FiUsers />,
//     layers: <FiLayers />,
//     code: <FiCode />,
//     rocket: <FaRocket />,
//     check: <FiCheckCircle />,
//   };

//   const integrations = [
//     {
//       icon: <FiCreditCard />,
//       title: "Payment Systems",
//       description: "Razorpay, Stripe, PayPal, Paytm, Crypto Wallets",
//     },
//     {
//       icon: <FiTruck />,
//       title: "Logistics & Delivery",
//       description: "Shiprocket, Delhivery, BlueDart APIs",
//     },
//     {
//       icon: <FiSend />,
//       title: "Marketing Automation",
//       description: "Mailchimp, HubSpot, Zoho Campaigns",
//     },
//     {
//       icon: <FiBarChart2 />,
//       title: "Analytics",
//       description: "Google Data Studio, Power BI, Tableau",
//     },
//     {
//       icon: <FiGlobe />,
//       title: "SaaS Software",
//       description:
//         "Helps run smoothly by connecting powerful online tools that manage ",
//     },
//     {
//       icon: <FiShoppingCart />,
//       title: "Social Commerce",
//       description: "Meta, WhatsApp, Instagram, TikTok integrations",
//     },
//   ];

//   // 🔹 Static Steps
//   const steps = [
//     {
//       icon: "target",
//       title: "Understanding Your Goals",
//       description:
//         "We start by analyzing your business objectives and user needs to align our strategy with your vision.",
//     },
//     {
//       icon: "users",
//       title: "Collaborative Planning",
//       description:
//         "Our experts collaborate closely with your team to define project milestones, features, and timelines.",
//     },
//     {
//       icon: "layers",
//       title: "Creative Design",
//       description:
//         "We craft intuitive and engaging designs that ensure a seamless user experience across all platforms.",
//     },
//     {
//       icon: "code",
//       title: "Agile Development",
//       description:
//         "Our developers build robust, scalable solutions using the latest technologies and best coding practices.",
//     },
//     {
//       icon: "rocket",
//       title: "Launch & Optimization",
//       description:
//         "After testing and deployment, we monitor performance and optimize continuously for maximum results.",
//     },
//     {
//       icon: "check",
//       title: "Support & Growth",
//       description:
//         "We provide ongoing support, updates, and analytics to ensure sustained success and user satisfaction.",
//     },
//   ];

//   // === Motion Variants for Wave Animation ===
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.3,
//     },
//   },
// };

// const cardVariants = (index) => ({
//   hidden: { opacity: 0, y: 60, scale: 0.95 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: 0.2 + Math.abs(index - 2.5) * 0.1, // wave effect based on distance from center
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// });

// const features = [
//   {
//     icon: <FiCpu />,
//     title: "AI-Powered Personalization",
//     description:
//       "Intelligent product suggestions and dynamic content distribution for each customer.",
//   },
//   {
//     icon: <FiLayers />,
//     title: "Architecture",
//     description:
//       "API-first approach enabling flexible, fast front-end experiences for any platform.",
//   },
//   {
//     icon: <FiGlobe />,
//     title: "Omnichannel Support",
//     description:
//       "Deliver a seamless, consistent experience across POS, mobile, and desktop.",
//   },
//   {
//     icon: <FiUsers />,
//     title: "Multi-Vendor Functionality",
//     description:
//       "Commissions, vendor dashboards, and logistics modules for marketplace scalability.",
//   },
//   {
//     icon: <FiCreditCard />,
//     title: "Integrated Payment Gateways",
//     description:
//       "Includes PayPal, Stripe, Razorpay, UPI, and crypto-ready alternatives.",
//   },
//   {
//     icon: <FiTrendingUp />,
//     title: "SEO & Marketing Suite",
//     description:
//       "Real-time analytics, schema setup, and Google Merchant integration for growth.",
//   },
// ];


//  const aiTech = [
//     {
//       icon: <FiStar />,
//       title: "Personalized Recommendations",
//       desc: `AI is at work behind the scenes when you purchase online and see "You may also like" or "People also bought."`,
//     },
//     {
//       icon: <FiMessageSquare />,
//       title: "AI Chatbots",
//       desc: "They assist clients 24/7 by tracking orders, responding to inquiries, and providing product information.",
//     },
//     {
//       icon: <FiSearch />,
//       title: "Intelligent Search",
//       desc: "AI interprets your search terms and shows accurate results even with typos or vague inputs.",
//     },
//     {
//       icon: <FiTrendingUp />,
//       title: "Forecasting Consumer Desires",
//       desc: "AI analyzes shopping trends to predict what customers will want next — helping businesses stay ahead.",
//     },
//     {
//       icon: <FiShield />,
//       title: "Fraud Identification",
//       desc: "AI identifies suspicious activity to protect your payments and personal data.",
//     },
//     {
//       icon: <FiCpu />,
//       title: "Product Reviews & Feedback Analysis",
//       desc: "AI reads thousands of customer reviews to understand what users love or dislike.",
//     },
//   ];

//  const tools = [
//   { icon: <SiReact />, name: "React.js" },
//   { icon: <SiNextdotjs />, name: "Next.js" },
//   { icon: <SiNodedotjs />, name: "Node.js" },
//   { icon: <SiExpress />, name: "Express.js" },
//   { icon: <SiMongodb />, name: "MongoDB" },
//   { icon: <SiTailwindcss />, name: "Tailwind CSS" },
//   { icon: <SiAmazoncloudwatch />, name: "AWS Cloud" },
//   { icon: <SiDocker />, name: "Docker" },
// ];

// const [flippedIndex, setFlippedIndex] = useState(null);

//   const handleFlip = (index) => {
//     // On mobile: toggle the clicked hexagon
//     if (window.innerWidth < 768) {
//       setFlippedIndex((prev) => (prev === index ? null : index));
//     }}
  

//   return (
//     <div className="w-full">
//       {/* ==== Hero Banner Section ==== */}
//            <section className="relative overflow-hidden bg-gradient-to-r from-[#021030] via-[#032781] to-[#01154b] py-24">
//       {/* ==== Animated Background Waves ==== */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Wave Layer 1 */}
//         <motion.div
//           animate={{ y: [0, -30, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-0 left-0 w-full"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1440 320"
//             className="w-full opacity-20"
//           >
//             <path
//               fill="url(#waveGradient)"
//               fillOpacity="1"
//               d="M0,128L60,160C120,192,240,256,360,261.3C480,267,600,213,720,186.7C840,160,960,160,1080,154.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
//             />
//             <defs>
//               <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#00d8ff" />
//                 <stop offset="100%" stopColor="#7c4dff" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </motion.div>

//         {/* Wave Layer 2 (slower, different phase) */}
//         <motion.div
//           animate={{ y: [0, 40, 0] }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-0 left-0 w-full"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1440 320"
//             className="w-full opacity-15"
//           >
//             <path
//               fill="url(#waveGradient2)"
//               fillOpacity="1"
//               d="M0,256L80,213.3C160,171,320,85,480,64C640,43,800,85,960,128C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
//             />
//             <defs>
//               <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#00d8ff" />
//                 <stop offset="100%" stopColor="#7c4dff" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </motion.div>

//         {/* Floating Glows */}
//         <motion.div
//           animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-20 left-10 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl"
//         ></motion.div>

//         <motion.div
//           animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
//           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
//         ></motion.div>
//       </div>

//       {/* ==== Foreground Content ==== */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-14 relative z-10">
//         {/* ==== Left Text Section ==== */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-6"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
//             Transform Your Ideas <br />
//             <span className="text-[#00eaff]">Into Digital Reality</span>
//           </h1>
//           <p className="text-blue-100/90 max-w-md">
//             We build futuristic digital experiences using cutting-edge
//             technology and creative innovation that set you apart.
//           </p>
//           <div className="pt-4">
//             <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#00eaff] text-[#021030] font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 hover:bg-white transition-all">
//               Get Started <FiArrowRight />
//             </button>
//           </div>
//         </motion.div>

//         {/* ==== Right Image Section ==== */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative"
//         >
//           <div className="relative ">
//             <img
//               src="tappay-front-img.png"
//               alt="Digital Innovation"
//               className="  h-[450px]"
//             />
//             <div className="absolute -bottom-6 -left-6  h-24 bg-cyan-500/40 rounded-3xl blur-xl opacity-70"></div>
//           </div>
//         </motion.div>
//       </div>
//     </section>

//      {/* ==== Overview Section ==== */}
// <section className="pt-15 pb-10 lg:ps-10 px-4 sm:px-10 bg-white">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    
//     {/* === Left Text === */}
//     <motion.div
//       initial={{ opacity: 0, x: -40 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="space-y-6"
//     >
//       <h2 className="text-4xl md:text-5xl font-bold text-[#1d2c53]">
//         Overview
//       </h2>
//       <p className="text-lg text-gray-700 leading-relaxed text-justify">
//         An online platform that allows companies to offer goods or services to customers directly online is known as an e-commerce website. E-commerce websites, in contrast to conventional brick-and-mortar retailers, are open around-the-clock and reach a worldwide audience without regard to geography. Mobile devices, customer convenience preferences, and technological improvements have all contributed to the growth of e-commerce.
//       </p>
//       <p className="text-lg text-gray-700 leading-relaxed text-justify">
//         E-commerce sites can be anything from straightforward single-product shops to intricate marketplaces with thousands of products. Product catalogs, shopping carts, safe payment processing, and client accounts are frequently included. Knowing the fundamentals of e-commerce is crucial, whether you're a giant corporation optimizing scalability or a small company owner starting your first online store.
//       </p>
//     </motion.div>

//     {/* === Right Image === */}
//     <motion.div
//       initial={{ opacity: 0, x: 40 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="flex justify-center"
//     >
//       <div className="relative w-[500px] h-[400px]  overflow-hidden">
//         <Image
//           src={overviewImage}
//           alt="Overview"
//           fill
//           className=" hover:scale-105 transition-transform duration-700"
//         />
//       </div>
//     </motion.div>
//   </div>
// </section>

// {/* ==== What is "Service Name" Section ==== */}
// <section className="pb-10 bg-gray-50 border-t border-gray-100">
//   <div className="max-w-7xl mx-auto lg:ps-0 px-6  sm:px-20  text-center">
//     <motion.h2
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d2c53] mb-6 text-left"
//     >
//       What is <span className="text-[#4379f7]">"{title}"</span>?
//     </motion.h2>

//     <motion.p
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       viewport={{ once: true }}
//       className="text-base sm:text-lg text-gray-700 text-justify"
//     >
//       E-commerce or electronic commerce is a digital marketplace where businesses and consumers can buy and sell goods and services through websites, mobile apps, or platforms like Amazon, eBay, and Flipkart.
//       E-commerce makes shopping online more convenient and accessible worldwide. Here’s a real-time example of e-commerce and how it makes online shopping accessible worldwide.
//       E-commerce or electronic commerce is a digital marketplace where businesses and consumers can buy and sell goods and services through websites, mobile apps, or platforms like Amazon, eBay, and Flipkart.
//       E-commerce makes shopping online more convenient and accessible worldwide. Here’s a real-time example of e-commerce and how it makes online shopping accessible worldwide.
//     </motion.p>
//   </div>
// </section>

//        {/* ==== ftfl service Process Section ==== */}
//           <section className="relative bg-gradient-to-b from-blue-50 to-white py-24 overflow-hidden">
//   {/* Decorative background pattern */}
//   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>

//   <div className="max-w-7xl mx-auto ms-15 md:ms-0 me-15 lg:me-0 relative z-10 ">
//     {/* Title */}
//     <motion.h2
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16 sm:mb-20"
//     >
//       Our <span className="text-blue-600">E-Commerce Development</span> Process
//     </motion.h2>

//     {/* Horizontal Flow */}
//     <div
//       className="
//         flex flex-wrap lg:flex-nowrap justify-center md:justify-between items-stretch 
//         gap-6 lg:gap-16 relative
//       "
//     >
//       {processSteps.map((step, index) => {
//         const Icon = step.icon;
//         return (
//           <motion.div
//             key={step.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: index * 0.15 }}
//             viewport={{ once: true }}
//             className="
//               relative flex flex-col items-center text-center md:text-left
//               w-full sm:w-[48%] md:w-[48%] lg:w-[18%]
//               group
//             "
//           >
//             {/* Card */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: 'spring', stiffness: 200 }}
//               className="
//                 h-full w-full sm:w-[100%] md:w-[95%] lg:w-[270px]
//                 flex flex-col bg-white/80 backdrop-blur-md 
//                 border border-blue-100 shadow-lg rounded-2xl p-6 
//                 hover:shadow-2xl hover:border-blue-300 
//                 transition-all duration-300
//               "
//             >
//               {/* Icon */}
//               <div
//                 className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto md:mx-0 mb-5 shadow-md`}
//               >
//                 <Icon className="w-8 h-8 text-white" />
//               </div>

//               {/* Title */}
//               <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 text-center md:text-left">
//                 {step.title}
//               </h3>

//               {/* Points */}
//               <ul className="list-disc list-inside text-gray-600 text-sm sm:text-sm space-y-2 text-left flex-1">
//                 {step.points.map((point, i) => (
//                   <motion.li
//                     key={i}
//                     initial={{ opacity: 0, x: 20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.4, delay: i * 0.1 }}
//                   >
//                     {point}
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Connector Arrow — visible only on large screens */}
//             <div className="hidden lg:block">{/* arrow here */}</div>
//           </motion.div>
//         );
//       })}
//     </div>
//   </div>
// </section>

//         {/* ==== Why Choose Us Section ==== */}
// <section className="relative py-24 px-6 md:px-16 bg-gradient-to-r from-[#7eaee9] via-[#eef3ff] to-[#bad6f8f8] overflow-hidden">
//   {/* Decorative background shapes */}
//   <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl"></div>
//   <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>

//   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 relative z-10">
//     {/* === Left Image === */}
//     <motion.div
//       initial={{ opacity: 0, x: -60 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="w-full md:w-1/2 relative"
//     >
//       <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
//         <img
//           src="Ecommerce Photos - Download Free High-Quality Pictures _ Freepik.jpeg"
//           alt="Why Choose Us"
//           className="w-full h-[420px] object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
//         />
//       </div>
//       {/* Subtle glowing ring accent */}
//       <div className="absolute -bottom-10 -left-8 w-40 h-40 bg-blue-300/40 rounded-full blur-2xl"></div>
//     </motion.div>

//     {/* === Right Text Content === */}
//     <motion.div
//       initial={{ opacity: 0, x: 60 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="w-full md:w-1/2 space-y-8"
//     >
//       <h2 className="text-4xl md:text-5xl font-bold text-[#1d2c53] mb-4">
//         Why Choose Us
//       </h2>
//       <p className="text-lg text-gray-700 leading-relaxed mb-6">
//         We don’t just build digital products — we create lasting experiences.
//         Here’s what sets us apart from the rest:
//       </p>

//       <div className="flex flex-col gap-5">
//         {points.map((point, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1, duration: 0.6 }}
//             viewport={{ once: true }}
//             className="flex items-start gap-3"
//           >
//             <CheckCircle className="text-[#4379f7] w-7 h-7 flex-shrink-0 mt-1" />
//             <span className="text-lg font-medium text-gray-800">{point}</span>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   </div>
// </section>

//     {/* Benefits Section */}
//       <section className="relative bg-gradient-to-b from-white to-blue-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* === Section Title === */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-gray-800 mb-12 sm:mb-16"
//         >
//           Benefits of{" "}
//           <span className="text-blue-600">Our E-Commerce Services</span>
//         </motion.h2>

//         {/* === Timeline Line (Desktop Only) === */}
//         <motion.div
//           initial={{ scaleY: 0 }}
//           whileInView={{ scaleY: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:w-[2px] before:h-full before:bg-blue-200 hidden md:block origin-top"
//         />

//         {/* === Capsule Items === */}
//         <div className="flex flex-col relative space-y-10 sm:space-y-12 lg:space-y-0">
//           {benefits.map((item, index) => {
//             const Icon = item.icon;
//             const isEven = index % 2 === 0;

//             return (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`flex flex-col lg:flex-row items-center ${
//                   isEven ? "lg:justify-start" : "lg:justify-end"
//                 }`}
//               >
//                 <div
//                   className={`relative flex flex-col items-center w-full lg:w-1/2 ${
//                     isEven
//                       ? "lg:items-start lg:text-left"
//                       : "lg:items-start lg:text-left"
//                   }`}
//                 >
//                   {/* === Capsule Container === */}
//                   <motion.div
//                     whileHover={{
//                       rotateX: 5,
//                       rotateY: isEven ? -5 : 5,
//                       translateY: -6,
//                       scale: 1.03,
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 120,
//                       damping: 10,
//                     }}
//                     className={`relative  bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-full border border-blue-200 
//                     shadow-[0_8px_20px_rgba(37,99,235,0.15),inset_2px_2px_8px_rgba(255,255,255,0.9)]
//                     px-4 sm:px-6 lg:px-10 py-5 flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-hidden transition-all duration-500
//                     hover:shadow-[0_10px_30px_rgba(37,99,235,0.25),inset_2px_2px_8px_rgba(255,255,255,0.9)]
//                     ${
//                       isEven
//                         ? "ml-0 lg:ml-20 lg:flex-row"
//                         : "mr-0 lg:mr-10 lg:flex-row-reverse"
//                     }`}
//                   >
//                     {/* === Top Light Reflection === */}
//                     <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/40 to-transparent rounded-t-full opacity-70" />

//                     {/* === Side Gradient Glow === */}
//                     <div className="absolute -left-5 top-0 w-10 h-full bg-gradient-to-r from-blue-400/10 to-transparent blur-md" />
//                     <div className="absolute -right-5 top-0 w-10 h-full bg-gradient-to-l from-blue-400/10 to-transparent blur-md" />

//                     {/* === Icon Section === */}
//                     <motion.div
//                       whileHover={{ rotate: 10, scale: 1.1 }}
//                       transition={{ type: "spring", stiffness: 200 }}
//                       className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full shrink-0"
//                     >
//                       <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/50 via-blue-400/50 to-blue-500/60 blur-xl opacity-60" />
//                       <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-blue-100 shadow-[inset_-6px_-6px_15px_rgba(0,0,0,0.1),10px_10px_25px_rgba(37,99,235,0.25)]" />
//                       <div className="absolute inset-0 p-[3px] rounded-full bg-gradient-to-br from-blue-400 to-blue-500">
//                         <div className="w-full h-full rounded-full bg-gradient-to-tr from-white to-blue-50" />
//                       </div>
//                       <div
//                         className={`relative flex items-center justify-center w-[4rem] h-[4rem] sm:w-[4.5rem] sm:h-[4.5rem] lg:w-[5.5rem] lg:h-[5.5rem] rounded-full bg-gradient-to-br ${item.color} 
//                         shadow-[inset_3px_3px_10px_rgba(255,255,255,0.5),inset_-4px_-4px_15px_rgba(0,0,0,0.2),8px_8px_20px_rgba(0,0,0,0.25)]
//                         border-[4px] sm:border-[5px] border-white overflow-hidden`}
//                       >
//                         <div className="absolute top-1 left-1 w-[80%] h-[80%] rounded-full bg-white/25 blur-sm"></div>
//                         <Icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white relative z-10 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.4)]" />
//                       </div>
//                     </motion.div>

//                     {/* === Text Section === */}
//                     <motion.div
//                       initial={{ opacity: 0, x: isEven ? -40 : 40 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.6, delay: 0.2 }}
//                       viewport={{ once: true }}
//                       className="max-w-sm text-left"
//                     >
//                       <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-1">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                         {item.description}
//                       </p>
//                     </motion.div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>

//       {/* Integration Tools Section */}
//      <section className="relative bg-gradient-to-b from-[#aedef4bd] via-[#f3f6ff] to-[#70b1eddd] py-24 overflow-hidden">
//   {/* ==== Header ==== */}
//   <div className="text-center mb-16 px-6">
//     <motion.h1
//       initial={{ opacity: 0, y: -40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       className="text-4xl md:text-5xl font-bold text-[#1d2c53] mb-6"
//     >
//       Integration Tools that Power <br />
//       <span className="text-[#4568dc]">Your Digital Growth</span>
//     </motion.h1>

//     <motion.p
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: 0.2 }}
//       className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-10"
//     >
//       Build a connected ecosystem that streamlines your business operations —  
//       from payments and analytics to delivery and communication tools.
//     </motion.p>

//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       className="bg-[#4568dc] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#3855c9] transition-all"
//     >
//       Explore Integrations
//     </motion.button>
//   </div>

//   {/* ==== Animated Cards Grid ==== */}
//   <motion.div
//     initial="hidden"
//     whileInView="show"
//     viewport={{ once: true }}
//     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6"
//   >
//     {integrations.map((item, index) => (
//       <motion.div
//         key={index}
//         whileHover={{ y: -6, scale: 1.02 }}
//         transition={{ duration: 0.3 }}
//         className="relative flex flex-col items-center justify-center bg-white rounded-2xl p-8 text-[#1d2c53] shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(69,104,220,0.15)] transition-all duration-500 min-h-[220px]"
//       >
//         {/* Icon */}
//         <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#e3e8ff] to-[#f7f8ff] border border-[#d4d9ff] mb-4">
//           <span className="text-3xl text-[#4568dc]">{item.icon}</span>
//         </div>

//         {/* Title + Description */}
//         <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//         <p className="text-gray-600 text-sm leading-snug text-center">
//           {item.description}
//         </p>
//       </motion.div>
//     ))}
//   </motion.div>

//   {/* ==== Subtle Background Glow ==== */}
//   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(69,104,220,0.08),transparent_70%)] pointer-events-none"></div>
// </section>

//     {/* ==== Key Features Section ==== */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-[#021030] via-[#032781] to-[#01154b] py-24">
//       {/* ==== Animated Background ==== */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{
//             backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,232,255,0.08),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(124,77,255,0.08),transparent_60%)]"
//         ></motion.div>
//       </div>

//       {/* ==== Header ==== */}
//       <div className="relative z-10 text-center mb-16 px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-bold text-white mb-4"
//         >
//           Key Features
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-blue-100/80 max-w-2xl mx-auto"
//         >
//           Empower your platform with next-generation capabilities designed for scalability,
//           performance, and personalization.
//         </motion.p>
//       </div>

//       {/* ==== Feature Cards ==== */}
//       <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
//         {features.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.1,
//             }}
//             whileHover={{ scale: 1.05 }}
//             className="relative bg-white/5 border border-white/10 hover:border-cyan-400/40 text-white rounded-2xl p-8 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.3)] transition-all duration-500"
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-2xl text-cyan-300 shadow-inner shadow-cyan-500/30">
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-semibold">{item.title}</h3>
//             </div>
//             <p className="text-blue-100/80 leading-relaxed">{item.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>

//     {/* ==== AI Technologies Section ==== */}
//          <section className="relative bg-gradient-to-b from-[#f8faff] via-[#f3f6ff] to-[#eef2ff] py-24 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 relative">
//         {/* ==== Left Image ==== */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="flex-1 relative rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80"
//             alt="AI Technology"
//             className="w-full h-full object-cover min-h-[550px] rounded-3xl"
//           />

//           {/* Floating Circuit Glow */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(77,116,255,0.25),transparent_60%)] animate-pulse"></div>
//         </motion.div>

//         {/* ==== Vertical Divider ==== */}
//         <div className="hidden lg:block w-[2px] bg-gradient-to-b from-transparent via-[#4f63ff] to-transparent rounded-full"></div>

//         {/* ==== Right Text Section ==== */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="flex-1 bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-10 flex flex-col justify-between"
//         >
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-[#1d2c53] mb-4">
//               AI Technologies We Use
//             </h2>
//             <p className="text-gray-600 mb-10">
//               We use AI to create intelligent, predictive, and personalized
//               digital experiences for every customer journey.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {aiTech.map((tech, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 className="flex items-start gap-5"
//               >
//                 {/* === AI Icon Design === */}
//                 <div className="relative w-14 h-14 flex items-center justify-center">
//                   {/* Hexagon Glow Shape */}
//                   <div className="absolute inset-0 bg-gradient-to-tr from-[#dee4ff] to-[#eff2ff] rounded-2xl rotate-45 blur-[1px]"></div>
//                   {/* Icon Container */}
//                   <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e7ebff] to-[#f3f5ff] flex items-center justify-center text-[#3d5afe] text-xl border border-[#c9d1ff]/60 shadow-[inset_0_0_10px_rgba(61,90,254,0.15)]">
//                     {tech.icon}
//                   </div>
//                   {/* Outer Glow */}
//                   <div className="absolute inset-0 rounded-2xl bg-[#3d5afe]/20 blur-lg opacity-0 hover:opacity-70 transition duration-500"></div>
//                 </div>

//                 {/* === Text === */}
//                 <div>
//                   <h3 className="font-semibold text-[#1d2c53] text-base mb-1">
//                     {tech.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {tech.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>

//     {/* ==== Tools We Use Section ==== */}
//     <section className="relative bg-white py-24 overflow-hidden">
//   <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

//     {/* === Left Side (Stylish Title Design) === */}
//     <motion.div
//       initial={{ opacity: 0, x: -50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6 }}
//       className="flex flex-col items-center lg:items-start text-center lg:text-left"
//     >
//       <h1 className="text-6xl md:text-7xl font-extrabold text-[#1d2c53] leading-tight relative animate-gradient-shimmer bg-clip-text text-transparent bg-gradient-to-r from-[#3d5afe] via-[#00bcd4] to-[#6f8aff]">
//         Innovation <span className="block text-gray-800 mt-2">Meets</span>
//         <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-[#3d5afe]">Technology</span>

//         {/* Subtle Glow Line */}
//         <span className="absolute -bottom-4 left-0 w-32 h-[3px] bg-gradient-to-r from-[#3d5afe] to-[#00bcd4] rounded-full"></span>
//       </h1>

//       <p className="text-gray-500 mt-10 max-w-sm leading-relaxed text-base">
//         Blending creativity with cutting-edge frameworks to deliver seamless digital experiences.
//       </p>
//     </motion.div>

//     {/* === Right Side (Tools Grid) === */}
//     <motion.div
//       initial={{ opacity: 0, x: 50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
//         {tools.map((tool, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05, y: -3 }}
//             transition={{ duration: 0.3 }}
//             className="flex flex-col items-center justify-center bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl border border-gray-100 transition-shadow duration-300"
//           >
//             <div className="text-[#3d5afe] text-4xl mb-2">{tool.icon}</div>
//             <p className="text-sm font-medium text-[#1d2c53]">{tool.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   </div>

//   {/* === Gradient Text Animation === */}
//   <style jsx>{`
//     @keyframes gradientShimmer {
//       0% { background-position: 0% 50%; }
//       50% { background-position: 100% 50%; }
//       100% { background-position: 0% 50%; }
//     }
//     .animate-gradient-shimmer {
//       background-size: 200% 200%;
//       animation: gradientShimmer 3s ease infinite;
//     }
//   `}</style>
// </section>

//     </div>
//   );
// }






"use client";
import { motion, AnimatePresence  } from "framer-motion";
import { FiSearch, FiPenTool, FiCode, FiLayers, FiCheckCircle } from "react-icons/fi";
import {FiArrowRight,FiChevronDown  } from "react-icons/fi";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaFigma } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import ProcessSection from "@/components/Services/OurProcess";


export default function ServiceDetailPage() {
    const [open, setOpen] = useState(null);
     const [activeStep, setActiveStep] = useState(0);
  const refs = useRef([]);

  const steps = [
  {
    title: "Discovery",
    icon: <FiSearch className="text-blue-600 text-3xl" />,
    desc: "Understanding your requirements, goals, and project direction.",
  },
  {
    title: "Planning",
    icon: <FiPenTool className="text-purple-600 text-3xl" />,
    desc: "Creating architecture, workflow, and timeline with strategic clarity.",
  },
  {
    title: "Design",
    icon: <FiLayers className="text-pink-600 text-3xl" />,
    desc: "Crafting beautiful, user-centric UI/UX aligned with your brand.",
  },
  {
    title: "Development",
    icon: <FiCode className="text-indigo-600 text-3xl" />,
    desc: "Building fast, scalable, and secure applications with precision.",
  },
  {
    title: "Launch",
    icon: <FiCheckCircle className="text-green-600 text-3xl" />,
    desc: "Deployment, optimization, and final quality assurance.",
  },
];

const designSteps = [
  {
    title :"Research",
    icon :<FiSearch className="text-blue-600 text-3xl" />,
    desc:" Identify the target market and brand, investigate rivals, and establish the visual direction. "
  },
  {
    title :"Concept Development",
    icon :<FiCode className="text-indigo-600 text-3xl" />,
    desc:" Generate ideas, produce preliminary Illustrator mockups, and show concepts to clients for their input.  "
  },
   {
    title :"Evaluation",
    icon :<FiLayers className="text-pink-600 text-3xl" />,
    desc:"Test designs on various platforms, get input, and improve graphics using A/B testing, alignment, and contrast. "
  },
   {
    title :"Delivery",
    icon :<FiCheckCircle className="text-green-600 text-3xl" />,
    desc:" Provide final assets in all necessary formats, make sure they are the right size, and offer post-support and brand guidelines. "
  },
]

const tools = [
  { icon: <SiNextdotjs />, title: "Next.js" },
  { icon: <FaReact />, title: "React.js" },
  { icon: <SiTailwindcss />, title: "TailwindCSS" },
  { icon: <FaNodeJs />, title: "Node.js" },
  { icon: <SiMongodb />, title: "MongoDB" },
  { icon: <FaAws />, title: "AWS" },
  { icon: <SiTypescript />, title: "TypeScript" },
  { icon: <FaGitAlt />, title: "Git" },
  { icon: <FaFigma />, title: "Figma" },
];

const faqs = [
  {
    q: "What services do you provide?",
    a: "We offer end-to-end digital solutions including app development, web development, UI/UX, branding, and full-stack engineering."
  },
  {
    q: "How long does a project take?",
    a: "Project timelines vary based on complexity, but most products are delivered in 4–12 weeks."
  },
  {
    q: "Do you offer support after project delivery?",
    a: "Yes, we provide full maintenance, updates, and dedicated support based on your plan."
  },
  {
    q: "What technologies do you use?",
    a: "We use modern stacks including React, Next.js, Node.js, MongoDB, AWS, and advanced UI frameworks."
  }
];


 useEffect(() => {
    const handleScroll = () => {
      let closestIndex = 0;
      let minDistance = Infinity;

      refs.current.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        
        // Section center distance from viewport top
        const distance = Math.abs(rect.top - window.innerHeight / 2);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      // Set step strictly in order
      setActiveStep(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ==== Hero Banner Section ==== */}
           <section className="relative overflow-hidden  py-24"
             style={{
    background:
      "linear-gradient(135deg, #0a1444 0%, #1b2f67 35%, #2d4c8f 70%, #3d66a6 100%)",
  }}
>
      {/* ==== Animated Background Waves ==== */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave Layer 1 */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full opacity-20"
          >
            <path
              fill="url(#waveGradient)"
              fillOpacity="1"
              d="M0,128L60,160C120,192,240,256,360,261.3C480,267,600,213,720,186.7C840,160,960,160,1080,154.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d8ff" />
                <stop offset="100%" stopColor="#7c4dff" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Wave Layer 2 (slower, different phase) */}
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full opacity-15"
          >
            <path
              fill="url(#waveGradient2)"
              fillOpacity="1"
              d="M0,256L80,213.3C160,171,320,85,480,64C640,43,800,85,960,128C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
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
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
            Transform Your Ideas <br />
            <span className="text-[#00eaff]">Into Digital Reality</span>
          </h1>
          <p className="text-blue-100/90 max-w-md">
            We build futuristic digital experiences using cutting-edge
            technology and creative innovation that set you apart.
          </p>
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
              src="tappay-front-img.png"
              alt="Digital Innovation"
              className="  h-[450px]"
            />
            <div className="absolute -bottom-6 -left-6  h-24 bg-cyan-500/40 rounded-3xl blur-xl opacity-70"></div>
          </div>
        </motion.div>
      </div>
    </section>

    <section>
{/* ===========================
     SECTION 2 — OVERVIEW (MATCHING WITH HERO)
============================== */}

<section className="w-full h-auto lg:h-[430px] relative overflow-hidden bg-[#f7f8fc] ">

  {/* ======================= CENTER IMAGE ======================= */}
  <motion.div
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="
    z-20 
    flex justify-center 
    lg:absolute 
    lg:left-[23%] lg:top-1/2 
    lg:-translate-x-1/4 lg:-translate-y-1/2 
    mt-8 lg:mt-0
  "
>
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
    className="
      w-56 h-56 sm:w-64 sm:h-64 lg:w-90 lg:h-80
      rounded-3xl overflow-hidden relative
      bg-white/20 backdrop-blur-xl border border-white/40

      /* === 3D SHADOWS === */
      shadow-[0_15px_40px_rgba(0,0,0,0.25)]
      hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]
      transition-all duration-500 ease-[cubic-bezier(.19,1,.22,1)]

      /* Glow outline */
      before:content-['']
      before:absolute before:inset-0
      before:rounded-3xl
      before:border-[2px] before:border-white/40
      before:shadow-[0_0_40px_10px_rgba(255,255,255,0.15)]
    "
  >
    <img
      src="/full stack web development overview.jpg"
      alt="center"
      className="w-full h-full object-cover relative z-10"
    />
  </motion.div>
</motion.div>


  {/* ======================= DESKTOP LAYOUT ======================= */}
  <div className="hidden lg:flex w-full h-[430px]">

    {/* LEFT SIDE – PREMIUM VERTICAL STRIPES */}
    <div className="w-1/2 h-full flex">
      <div className="w-1/2 h-full bg-[#e3e7f3]"></div>
      <div className="w-1/2 h-full bg-[#d6dbee]"></div>
      {/* <div className="w-1/3 h-full bg-[#c9d0e7]"></div> */}
    </div>

    {/* RIGHT CONTENT SIDE */}
    <div className="w-1/2 h-full bg-white ps-16 pe-12 py-10 flex flex-col justify-center shadow-inner">
      <h2 className="text-4xl font-bold text-[#0e1630] mb-5">
        Overview
      </h2>

      <p className="text-gray-600 leading-relaxed text-lg me-28">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id vitae itaque at repellendus saepe, molestias dolor impedit ipsa. Mollitia eaque molestias necessitatibus nostrum minima adipisci inventore nulla, tempore eligendi a ad rerum sequi porro placeat ut autem quam numquam deleniti!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam cum aut, molestias voluptates eum doloremque, impedit unde inventore nihil doloribus optio earum non beatae autem. Consequuntur quae amet architecto!
      </p>
    </div>

  </div>

  {/* ======================= MOBILE LAYOUT ======================= */}
  <div className="flex flex-col lg:hidden px-7 pt-10 pb-12 text-center mt-6">

    <h2 className="text-3xl font-bold text-[#0e1630] mb-4">
      Overview
    </h2>

    <p className="text-gray-600 leading-relaxed text-base">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deserunt
      optio! Similique ea a aut.
    </p>

  </div>

</section>



{/* =======================================
   NEW DESIGN 4 – SERVICE FEATURES (ZIG-ZAG)
========================================= */}
<section className="relative py-28 bg-[#f8f9ff] overflow-hidden">

  {/* Background Grid Pattern */}
  <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-50"></div>

  {/* Glow Orbs (Hero Match) */}
  <div className="absolute top-10 right-20 w-60 h-60 bg-cyan-400/25 blur-[90px] rounded-full"></div>
  <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/20 blur-[100px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-[#02122E]">
        Our Capabilities  
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
          Built for High Performance
        </span>
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mt-3 text-lg">
        These capabilities ensure your digital product becomes powerful, scalable, and future-driven.
      </p>
    </motion.div>

    {/* ZIG-ZAG FEATURE WRAPPER */}
    <div className="space-y-16">

      {/* FEATURE 1 */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative flex flex-col lg:flex-row items-center gap-10"
      >
        {/* ICON BUBBLE */}
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="w-24 h-24 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-300 shadow-[0_10px_40px_rgba(0,0,0,0.12)] flex items-center justify-center"
          >
            <img src="/icons/performance.svg" className="w-10" />
          </motion.div>

          {/* Pulse Animation */}
          <span className="absolute top-0 left-0 w-full h-full rounded-3xl border-2 border-cyan-300/40 animate-ping"></span>
        </div>

        {/* Content Box */}
        <div className="flex-1 bg-white rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200">
          <h3 className="text-2xl font-bold text-[#02122E] mb-3">
            High-Speed Performance
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Experience ultra-optimized load times, responsive workflows, and smooth user interactions.
          </p>
        </div>
      </motion.div>

      {/* FEATURE 2 */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative flex flex-col lg:flex-row-reverse items-center gap-10"
      >
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="w-24 h-24 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-300 shadow-[0_10px_40px_rgba(0,0,0,0.12)] flex items-center justify-center"
          >
            <img src="/icons/integration.svg" className="w-10" />
          </motion.div>
          <span className="absolute top-0 left-0 w-full h-full rounded-3xl border-2 border-purple-300/40 animate-ping"></span>
        </div>

        <div className="flex-1 bg-white rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200">
          <h3 className="text-2xl font-bold text-[#02122E] mb-3">
            Seamless Integrations
          </h3>
          <p className="text-gray-600">
            Connect your tools, apps, and third-party platforms without any barriers.
          </p>
        </div>
      </motion.div>

      {/* FEATURE 3 */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative flex flex-col lg:flex-row items-center gap-10"
      >
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="w-24 h-24 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-300 shadow-[0_10px_40px_rgba(0,0,0,0.12)] flex items-center justify-center"
          >
            <img src="/icons/customize.svg" className="w-10" />
          </motion.div>
          <span className="absolute top-0 left-0 w-full h-full rounded-3xl border-2 border-blue-300/40 animate-ping"></span>
        </div>

        <div className="flex-1 bg-white rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200">
          <h3 className="text-2xl font-bold text-[#02122E] mb-3">
            Full Customization
          </h3>
          <p className="text-gray-600">
            Every layout, module, and feature is crafted exactly to your business needs.
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</section>


{/* ======================================
     SECTION 5 – OUR PROCESS
     Alternating Timeline
====================================== */}


 <section className="relative py-24 bg-[#acd1edcd] overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 opacity-40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 opacity-40 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-gray-900 text-center mb-14"
        >
          Our Process
        </motion.h2>

        {/* Steps Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-20 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.07)] rounded-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Circular Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-full mx-auto mb-6 shadow-inner">
                {step.icon}
              </div>

              {/* Step Number (Floating Label) */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
                Step {index + 1}
              </span>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


  <section className="py-20 bg-[#f3f6ff]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">

        {/* LEFT — Sticky Icons */}
        <div className="relative">
          <div className="sticky top-24 space-y-6">

            {designSteps.map((step, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: activeStep === index ? 1.15 : 1,
                  opacity: activeStep === index ? 1 : 0.45,
                }}
                transition={{ duration: 0.3 }}
                className={`
                  flex items-center gap-3 p-3 rounded-xl cursor-pointer
                  ${activeStep === index ? "bg-white shadow-md" : ""}
                `}
              >
                <div className="w-12 h-12 text-2xl flex items-center justify-center bg-blue-100 rounded-full">
                  {step.icon}
                </div>
                <span
                  className={`font-semibold text-gray-700 ${
                    activeStep === index ? "text-blue-600" : ""
                  }`}
                >
                  {step.title}
                </span>
              </motion.div>
            ))}

          </div>
        </div>

        {/* RIGHT — Scroll Sections */}
        <div className="md:col-span-2 space-y-10">

          {designSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 h-[180px]"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {step.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>


    <ProcessSection />


{/* ======================================================
    TOOLS & TECHNOLOGIES – VERSION 1 (CIRCULAR CLUSTER)
====================================================== */}
  <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Tools & Technologies
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Modern, scalable and future-ready stack we love working with.
          </p>
        </div>

        {/* Chip Grid */}
        <div className="flex flex-wrap justify-center gap-5">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="
                relative px-6 py-3 bg-gray-50 text-gray-800 
                rounded-full flex items-center gap-3 
                shadow-sm border border-gray-200
                cursor-pointer group
                hover:bg-white hover:shadow-md hover:border-blue-400
                transition-all duration-300
              "
            >
              {/* Icon */}
              <div className="text-xl text-blue-600">
                {tool.icon}
              </div>

              {/* Title */}
              <span className="font-medium text-base">
                {tool.title}
              </span>

              {/* Neon Underline */}
              <span
                className="
                  absolute left-1/2 bottom-0 -translate-x-1/2 
                  w-0 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 
                  rounded-full opacity-0 
                  group-hover:w-3/4 group-hover:opacity-100
                  transition-all duration-300
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

{/* ===================================================
   WHY CHOOSE US – VERSION 3 (DIAGONAL RIBBON LAYOUT)
=================================================== */}
<section className="relative py-24 bg-[#F9FBFF] overflow-hidden">

  {/* Background Blur Lights */}
  <div className="absolute top-10 left-0 w-72 h-72 bg-blue-300/40 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-300/40 blur-[120px] rounded-full"></div>

  {/* Heading */}
  <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center relative z-10">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl font-bold text-gray-900 mb-6"
    >
      Why Choose <span className="text-blue-600">Us?</span>
    </motion.h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
      We deliver innovation, performance, and world-class experience across all our digital solutions.
    </p>
  </div>

  {/* Diagonal Ribbon Container */}
  <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

    {/* Diagonal Ribbon */}
    <div className="absolute inset-0 -skew-y-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-3xl"></div>

    {/* MAIN CONTENT */}
    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 py-12">

      {[
        {
          title: "Build for Business",
          icon: "🏢",
        },
        {
          title: "Optimized SEO & Speed",
          icon: "⚡",
        },
        {
          title: "Unique UI/UX Design",
          icon: "🎨",
        },
        {
          title: "Cloud & Hosting Deployment",
          icon: "☁️",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.15 }}
          className="relative p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] 
                     border border-white hover:-translate-y-3 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)] 
                     transition-all duration-300 text-center"
        >
          {/* Floating Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl mb-4"
          >
            {item.icon}
          </motion.div>

          <h3 className="text-xl font-semibold text-gray-900">
            {item.title}
          </h3>
        </motion.div>
      ))}
    </div>
  </div>
</section>



<section
  style={{
    padding: "90px 20px",
    background: "linear-gradient(135deg, #030712, #0a1426, #0f1c33)",
    position: "relative",
  }}
>
  <style>{`
    /* Border Animation */
    @keyframes borderMove {
      0% { stroke-dashoffset: 300; }
      100% { stroke-dashoffset: 0; }
    }

    .service-card {
      position: relative;
      background: #0d1528;
      padding: 32px 24px;
      border-radius: 18px;
      color: #e5e7eb;
      transition: 0.45s ease;
      overflow: hidden;
      cursor: pointer;
    }

    .service-card:hover {
      transform: translateY(-8px) scale(1.03);
      background: #13203b;
    }

    /* SVG border tracer */
    .border-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .border-svg rect {
      fill: none;
      stroke: url(#gradient);
      stroke-width: 2;
      stroke-dasharray: 300;
      animation: borderMove 3s linear infinite;
      opacity: 0.8;
    }

    .icon-box {
      width: 55px;
      height: 55px;
      border-radius: 12px;
      background: rgba(59,130,246,0.15);
      border: 1px solid rgba(59,130,246,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      color: #3b82f6;
      margin-bottom: 16px;
    }

    .grid-wrap {
      max-width: 1250px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 30px;
    }

    .title {
      margin: 0;
      font-size: 19px;
      font-weight: 600;
      color: #f1f5f9;
      letter-spacing: 0.3px;
    }
  `}</style>

  {/* Title */}
   <div className="text-center mb-12 relative z-10">
    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-lg">
      Our Advanced Capabilities
    </h2>
    <p className="text-blue-200 mt-2 text-lg">
      Explore the powerful solutions we offer under each service
    </p>
  </div>

  {/* Grid */}
  <div className="grid-wrap">
    
    {/* Card */}
    <div className="service-card">
      <svg className="border-svg">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="98%" height="98%" rx="16" />
      </svg>
      <div className="icon-box">⚙️</div>
      <h3 className="title">Custom Web App Development</h3>
    </div>

    <div className="service-card">
      <svg className="border-svg">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="98%" height="98%" rx="16" />
      </svg>
      <div className="icon-box">📊</div>
      <h3 className="title">Admin Dashboards & CMS</h3>
    </div>

    <div className="service-card">
      <svg className="border-svg">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="98%" height="98%" rx="16" />
      </svg>
      <div className="icon-box">🔐</div>
      <h3 className="title">Authentication & User Roles</h3>
    </div>

    <div className="service-card">
      <svg className="border-svg">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="98%" height="98%" rx="16" />
      </svg>
      <div className="icon-box">💬</div>
      <h3 className="title">Real-Time Chat & Notifications</h3>
    </div>

    <div className="service-card">
      <svg className="border-svg">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="98%" height="98%" rx="16" />
      </svg>
      <div className="icon-box">💳</div>
      <h3 className="title">Payment Gateway Integration</h3>
    </div>

    <div className="service-card">
      <svg className="border-svg">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="98%" height="98%" rx="16" />
      </svg>
      <div className="icon-box">🔗</div>
      <h3 className="title">API Development & Integration</h3>
    </div>

  </div>
</section>

 <section className="py-24 bg-[#f5f9ff] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 blur-3xl opacity-40"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-center text-gray-900 mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* Subtext */}
        <p className="text-center text-gray-600 mb-16">
          Find answers to the most common questions we receive.
        </p>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              {/* Glow Border */}
              <motion.div
                animate={{
                  background: open === index 
                    ? [
                        "linear-gradient(90deg, #00d8ff, #7c4dff)",
                        "linear-gradient(90deg, #7c4dff, #00d8ff)"
                      ]
                    : "transparent"
                }}
                transition={{ duration: 2, repeat: open === index ? Infinity : 0 }}
                className={`absolute inset-0 rounded-2xl p-[2px] transition-all
                ${open === index ? "" : "opacity-0"}`}
                style={{
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                }}
              />

              {/* Card */}
              <div
                className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer border border-gray-100"
                onClick={() => setOpen(open === index ? null : index)}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <h3
                    className={`text-lg font-semibold transition-all
                      ${open === index ? "text-blue-600" : "text-gray-800"}
                    `}
                  >
                    {item.q}
                  </h3>

                  <motion.div
                    animate={{ rotate: open === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 text-xl"
                  >
                    <FiChevronDown />
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {open === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 pt-4 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


     </section>
    </>
  )
}








