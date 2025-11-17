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
//   FiSend,
// } from "react-icons/fi";
// import { FaRocket,FaBitcoin  } from "react-icons/fa";


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

//   return (
//     <div className="w-full">
//       {/* ==== Hero Banner Section ==== */}
//       <section className="relative w-full h-[70vh] lg:h-[600px] flex items-center justify-center overflow-hidden rounded-b-3xl">
//         {/* Background Image */}
//         <Image
//           src={imageUrl}
//           alt={title}
//           fill
//           className="object-fill object-center"
//           priority
//         />

//         {/* Glassmorphism Title Box */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className={`absolute ${positions[position]} backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-lg`}
//         >
//           <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-md">
//             {title}
//           </h1>
//           <div className="mt-2 w-20 h-[3px] bg-blue-500 rounded-full"></div>
//         </motion.div>
//       </section>

//       {/* ==== Overview Section ==== */}
//       <section className="pt-16 px-8 md:px-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* Left Text */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
//               Overview
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed mb-4">
//               Our E-Commerce services focus on creating scalable, intelligent,
//               and user-friendly online shopping experiences powered by AI. We
//               integrate modern design, secure payments, and business
//               intelligence tools to help your brand grow online.
//             </p>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               From intuitive UI/UX to high-performance backend systems, our
//               e-commerce solutions ensure smooth transactions and exceptional
//               customer engagement.
//             </p>
//           </motion.div>

//           {/* Right Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="flex justify-center"
//           >
//             <div className="relative w-full max-w-md h-[350px] overflow-hidden">
//               <Image
//                 src={overviewImage}
//                 alt="Overview"
//                 fill
//                 className="object-cover hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ==== What is "Service Name"? Section ==== */}
//       <section className="pt-5 px-8 md:px-30 pb-10 bg-white">
//         <div className="max-w-5xl text-center md:text-justify">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
//           >
//             What is <span className="text-blue-600">"{title}"</span>?
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="text-lg text-gray-700 leading-relaxed"
//           >
//             {title} is a complete digital solution designed to transform traditional
//             businesses into successful online platforms. It involves building
//             feature-rich websites, secure payment integrations, user analytics,
//             and personalized AI-driven shopping experiences that enhance
//             customer engagement and drive sales.
//           </motion.p>
//         </div>
//       </section>

//       {/* <OurProcess /> */}

//        {/* ==== ftfl Process Section ==== */}
//             <section className="relative bg-gradient-to-b from-blue-50 to-white py-24 overflow-hidden">
//       {/* Decorative background pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-center text-gray-800 mb-20"
//         >
//           Our <span className="text-blue-600">E-Commerce Development</span> Process
//         </motion.h2>

//         {/* Horizontal Flow */}
//         <div className="flex flex-col md:flex-row justify-between items-stretch gap-10 md:gap-6 relative -ms-25">
//           {processSteps.map((step, index) => {
//             const Icon = step.icon;
//             return (
//               <motion.div
//                 key={step.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 className="relative flex flex-col items-center text-center md:text-left w-full md:w-1/2 group"
//               >
//                 {/* Card */}
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                   className={`h-full lg:w-[270px] flex flex-col bg-white/80 backdrop-blur-md border border-blue-100 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:border-blue-300 transition-all duration-300`}
//                 >
//                   {/* Icon */}
//                   <div
//                     className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto md:mx-0 mb-5 shadow-md`}
//                   >
//                     <Icon className="w-8 h-8 text-white" />
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center md:text-left">
//                     {step.title}
//                   </h3>

//                   {/* Points */}
//                   <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 text-left flex-1">
//                     {step.points.map((point, i) => (
//                       <motion.li
//                         key={i}
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.4, delay: i * 0.1 }}
//                       >
//                         {point}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>

//                 {/* Connector Arrow */}
//                 {index !== processSteps.length - 1 && (
//                   <div className="hidden md:flex items-center justify-center absolute top-1/2 right-[-40px] transform -translate-y-1/2">
//                     <ArrowRight className="w-8 h-8 text-blue-400 transition-transform duration-500 group-hover:translate-x-2" />
//                   </div>
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>

//         {/* Why Choose Us */}
//         <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-blue-50 to-blue-100">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
//         {/* ==== Left Image ==== */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="w-full md:w-1/2"
//         >
//           <img
//             src="Ecommerce Photos - Download Free High-Quality Pictures _ Freepik.jpeg"
//             alt="Why Choose Us"
//             className="w-full h-[420px] object-cover  shadow-lg"
//           />
//         </motion.div>

//         {/* ==== Right Content ==== */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="w-full md:w-1/2"
//         >
//           <h2 className="text-4xl font-bold text-gray-800 mb-8">
//             Why Choose Us
//           </h2>

//           <div className="flex flex-col gap-5">
//             {points.map((point, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4"
//               >
//                 <CheckCircle className="text-blue-600 w-7 h-7" />
//                 <span className="text-lg font-medium text-gray-700">{point}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>

//     {/* Benefits Section */}
//       <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-16 overflow-hidden">
//   <div className="max-w-7xl mx-auto">
//     {/* === Section Title === */}
//     <motion.h2
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="text-4xl lg:text-6xl font-bold text-center text-gray-800 mb-16"
//     >
//       Benefits of{" "}
//       <span className="text-blue-600">Our E-Commerce Services</span>
//     </motion.h2>

//     {/* === Timeline Line === */}
//     <div className="relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:w-[2px] before:h-full before:bg-blue-200 hidden md:block" />

//     {/* === Capsule Items === */}
//     <div className="flex flex-col relative ">
//       {benefits.map((item, index) => {
//         const Icon = item.icon;
//         const isEven = index % 2 === 0;

//         return (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className={`flex flex-col md:flex-row items-center justify-around ${
//               isEven ? "md:justify-start" : "md:justify-end"
//             }`}
//           >
//             <div
//               className={`relative flex flex-col items-center w-full md:w-1/2 ${
//                 isEven ? "md:items-start md:text-left" : "md:items-start md:text-left"
//               }`}
//             >
//               {/* === Capsule Container === */}
//               <div
//                 className={`relative bg-white rounded-full border border-blue-200 shadow-[0_6px_25px_rgba(0,0,0,0.05)] px-10 py-6 flex items-center gap-8 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] hover:-translate-y-[4px] ${
//                   isEven ? "ml-0 md:ml-20" : "mr-0 md:mr-10 md:flex-row-reverse"
//                 }`}
//               >
//                 {/* === Glowing Icon Circle === */}
//                 {/* === Glowing Icon Circle === */}
// {/* === 3D Icon Circle === */}
// <div className="relative flex items-center justify-center w-24 h-24 rounded-full">
//   {/* Soft Ambient Glow */}
//   <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/60 via-blue-500/60 to-purple-500/60 blur-xl opacity-60" />

//   {/* Layer for realistic 3D shadow */}
//   <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-blue-100 shadow-[inset_-6px_-6px_15px_rgba(0,0,0,0.1),10px_10px_25px_rgba(37,99,235,0.35)]" />

//   {/* Outer Rim with Gradient Border */}
//   <div className="absolute inset-0 p-[3px] rounded-full bg-gradient-to-br from-blue-400 to-purple-500">
//     <div className="w-full h-full rounded-full bg-gradient-to-tr from-white to-blue-50" />
//   </div>

//   {/* Inner Circle (Main surface) */}
//   <div
//     className={`relative flex items-center justify-center w-[5.5rem] h-[5.5rem] rounded-full bg-gradient-to-br ${item.color} shadow-[inset_3px_3px_10px_rgba(255,255,255,0.5),inset_-4px_-4px_15px_rgba(0,0,0,0.2),8px_8px_20px_rgba(0,0,0,0.25)] border-[5px] border-white overflow-hidden`}
//   >
//     {/* Highlight shine */}
//     <div className="absolute top-1 left-1 w-[80%] h-[80%] rounded-full bg-white/25 blur-sm"></div>

//     <Icon className="w-10 h-10 text-white relative z-10 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.4)]" />
//   </div>
// </div>



//                 {/* === Text === */}
//                 <div className="max-w-xs">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-1">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed text-sm md:text-base">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   </div>
// </section>






//       {/* ftfl process */}
//      <section className="relative py-20 bg-[#1d2c53ec] text-white overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"
//           alt="Background"
//           className="w-full h-full object-cover opacity-20"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-[#3d5eab] to-[#446dab] mix-blend-multiply"></div>
//       </div>

//       {/* Header */}
//       <div className="relative text-center mb-16 z-10">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
//           How We Work
//         </h2>
//         <p className="text-blue-400 text-lg mb-2">
//           From idea to execution — every step designed to deliver excellence.
//         </p>
//       </div>

//       {/* Hexagon Steps */}
//       <div className="relative flex flex-wrap justify-center gap-10 px-8 z-10">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             className="relative group perspective"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.15 }}
//           >
//             <div className="flip-card relative w-48 h-52">
//               {/* Front Side */}
//               <div className="flip-card-inner group-hover:rotate-y-180 transition-transform duration-700">
//                 <div className="flip-card-front hexagon bg-gradient-to-br from-blue-600/90 to-blue-900/100 border border-blue-400/30 backdrop-blur-md text-center flex flex-col items-center justify-center p-4 shadow-lg">
//                   <div className="text-3xl text-blue-400 mb-3">
//                     {iconMap[step.icon]}
//                   </div>
//                   <h3 className="text-lg font-semibold">{step.title}</h3>
//                 </div>

//                 {/* Back Side */}
//                 <div className="flip-card-back hexagon absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/20 border border-blue-400/30 backdrop-blur-md text-center flex items-center justify-center p-4 shadow-lg rotate-y-180">
//                   <p className="text-sm text-gray-200">{step.description}</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Custom Styles */}
//       <style jsx>{`
//         .hexagon {
//           clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
//         }
//         .perspective {
//           perspective: 1000px;
//         }
//         .flip-card-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transform-style: preserve-3d;
//         }
//         .flip-card-front,
//         .flip-card-back {
//           backface-visibility: hidden;
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           border-radius: 12px;
//         }
//         .flip-card-back {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>

//       {/* Integration Tools Section */}
//        <section className="relative bg-[#f8faff] py-24 overflow-hidden">
//   {/* ==== Header ==== */}
//   <div className="text-center mb-16 px-6">
//     <h2 className="text-4xl md:text-5xl font-bold text-[#1d2c53] mb-4">
//       Integration Tools
//     </h2>
//     <p className="text-gray-600 max-w-2xl mx-auto">
//       A connected ecosystem that powers your business with seamless
//       integrations and smart automation.
//     </p>
//   </div>

//   {/* ==== Pentagon Grid ==== */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-8">
//     {integrations.map((item, index) => (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 60, scale: 0.9 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{
//           duration: 0.6,
//           delay: index * 0.1,
//           ease: "easeOut",
//         }}
//         viewport={{ once: true }}
//         whileHover={{ scale: 1.05, rotate: 1 }}
//         className="relative flex justify-center group"
//       >
//         {/* ==== Pentagon Shape ==== */}
//         <div className="pentagon relative w-64 h-64 bg-gradient-to-br from-[#2a3e75] to-[#1d2c53] text-white shadow-xl transition-all transform group-hover:shadow-2xl group-hover:from-[#324b8a] group-hover:to-[#4266c1]">
          
//           {/* ==== Circle Icon Center ==== */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100%] z-50">
//             <div className="w-20 h-20 rounded-full bg-white/10 border border-blue-300/40 flex items-center justify-center group-hover:bg-white/20 group-hover:border-blue-400/70 transition-all shadow-lg">
//               <span className="text-4xl text-blue-300 group-hover:text-white transition-all">
//                 {item.icon}
//               </span>
//             </div>
//           </div>

//           {/* ==== Text Section ==== */}
//           <div className="absolute bottom-8 w-full px-6 text-center">
//             <h3 className="text-lg font-semibold mb-2 text-white">
//               {item.title}
//             </h3>
//             <p className="text-gray-200 text-sm leading-snug">
//               {item.description}
//             </p>
//           </div>

//           {/* ==== Subtle Glow ==== */}
//           <div className="absolute inset-0 border border-blue-400/30 group-hover:border-blue-400/60 rounded-lg blur-[1px]"></div>
//         </div>
//       </motion.div>
//     ))}
//   </div>

//   {/* ==== Pentagon Shape CSS ==== */}
//   <style jsx>{`
//     .pentagon {
//       clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
//     }
//   `}</style>

//   {/* ==== Background Pattern ==== */}
//   <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,_#1d2c53_1px,_transparent_0)] bg-[size:20px_20px]"></div>
// </section>


//     </div>
//   );
// }




"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Lightbulb, Layout, Smartphone, PenTool, Code, CheckCircle2, Search,
  Layers, Rocket, ArrowRight, Smile, Shield, Cpu, Zap, Globe } from "lucide-react";
import {
  FiTarget,
  FiUsers,
  FiLayers,
  FiCode,
  FiCheckCircle, FiCreditCard,
  FiTruck,
  FiBarChart2,
  FiGlobe,
  FiShoppingCart,
  FiSend,
} from "react-icons/fi";
import { FaRocket, FaBitcoin } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ServiceDetailPage() {
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Default values as fallback
  const defaultImage = "/graphic design bannerr.png";
  const defaultOverviewImage = "/Ready to jump into content marketing.jpeg";
  const position = "bottom-right";

  // Position map for title placement
  const positions = {
    "top-left": "top-10 left-10",
    "top-right": "top-10 right-10",
    "bottom-left": "bottom-10 left-10",
    "bottom-right": "bottom-10 right-10",
  };

  // Icon mapping for dynamic icons
  const iconMap = {
    Search, Layers, Layout, Code, Rocket, CheckCircle,
    Smile, Shield, Cpu, Zap, Globe, 
    target: FiTarget,
    users: FiUsers,
    layers: FiLayers,
    code: FiCode,
    rocket: FaRocket,
    check: FiCheckCircle
  };

  // Fetch data from API
  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://landing-page-yclw.vercel.app/api/service');
        console.log("service data: ", response.data);
        
        // Set the service data - adjust this based on your API response structure
        setServiceData(response.data.data || response.data);
      } catch (err) {
        setError(err.message || 'An error occurred');
        console.error('Error fetching service data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  // Show error state
  if (error || !serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-500">Error: {error || 'Failed to load data'}</div>
      </div>
    );
  }

  // Use dynamic data with fallbacks
  const {
    name = "E-Commerce Development",
    title = "E-Commerce Development",
    description = { content: "Our E-Commerce services focus on creating scalable, intelligent, and user-friendly online shopping experiences powered by AI." },
    points = ["Experienced & Skilled Team", "Custom E-Commerce Solutions"],
    overview = ["From intuitive UI/UX to high-performance backend systems"],
    overviewImage = defaultOverviewImage,
    question = { title: "What is E-Commerce Development?" },
    answer = ["E-Commerce Development is a complete digital solution..."],
    process = [],
    whyChooseUs = { description: [] },
    benefits = [],
    integration = []
  } = serviceData;

  // Process steps with dynamic data
  const processSteps = process && process.length > 0 
    ? process.map((step, index) => ({
        id: step._id || index.toString(),
        title: step.title || `Step ${index + 1}`,
        icon: Layout, // Default icon
        color: "from-blue-500 to-blue-600",
        points: step.description || []
      }))
    : [
        {
          id: 1,
          title: "Research and Planning",
          icon: Search,
          color: "from-blue-500 to-blue-600",
          points: ["Establish your company's objectives..."]
        }
        // Add more default steps as needed
      ];

  // Benefits with dynamic data
  const dynamicBenefits = benefits && benefits.length > 0
    ? benefits.map((benefit, index) => ({
        id: benefit._id || index.toString(),
        icon: Smile, // Default icon
        title: benefit.title || `Benefit ${index + 1}`,
        description: benefit.description || "Description not available",
        color: "from-cyan-500 to-blue-500"
      }))
    : [
        {
          id: 1,
          icon: Smile,
          title: "Enhanced User Satisfaction",
          description: "We focus on intuitive designs...",
          color: "from-cyan-500 to-blue-500"
        }
        // Add more default benefits as needed
      ];

  // Integrations with dynamic data
  const dynamicIntegrations = integration && integration.length > 0
    ? integration.map((item, index) => ({
        icon: <FiCreditCard />, // Default icon
        title: item.title || `Integration ${index + 1}`,
        description: item.description || "Description not available"
      }))
    : [
        {
          icon: <FiCreditCard />,
          title: "Payment Systems",
          description: "Razorpay, Stripe, PayPal, Paytm, Crypto Wallets"
        }
        // Add more default integrations as needed
      ];

  // Why Choose Us points
  const whyChooseUsPoints = points && points.length > 0 
    ? points 
    : ["Experienced & Skilled Team", "Custom E-Commerce Solutions"];

  // Steps for process section
  const steps = [
    {
      icon: "target",
      title: "Understanding Your Goals",
      description: "We start by analyzing your business objectives and user needs to align our strategy with your vision.",
    },
    {
      icon: "users",
      title: "Collaborative Planning",
      description: "Our experts collaborate closely with your team to define project milestones, features, and timelines.",
    },
    {
      icon: "layers",
      title: "Creative Design",
      description: "We craft intuitive and engaging designs that ensure a seamless user experience across all platforms.",
    },
    {
      icon: "code",
      title: "Agile Development",
      description: "Our developers build robust, scalable solutions using the latest technologies and best coding practices.",
    },
    {
      icon: "rocket",
      title: "Launch & Optimization",
      description: "After testing and deployment, we monitor performance and optimize continuously for maximum results.",
    },
    {
      icon: "check",
      title: "Support & Growth",
      description: "We provide ongoing support, updates, and analytics to ensure sustained success and user satisfaction.",
    },
  ];

  return (
    <div className="w-full">
      {/* ==== Hero Banner Section ==== */}
      <section className="relative w-full h-[70vh] lg:h-[600px] flex items-center justify-center overflow-hidden rounded-b-3xl">
        {/* Background Image */}
        <Image
          src={defaultImage}
          alt={title}
          fill
          className="object-fill object-center"
          priority
        />

        {/* Glassmorphism Title Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute ${positions[position]} backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-lg`}
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-md">
            {title}
          </h1>
          <div className="mt-2 w-20 h-[3px] bg-blue-500 rounded-full"></div>
        </motion.div>
      </section>

      {/* ==== Overview Section ==== */}
      <section className="pt-16 px-8 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
              Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {description.content || "Our E-Commerce services focus on creating scalable, intelligent, and user-friendly online shopping experiences powered by AI. We integrate modern design, secure payments, and business intelligence tools to help your brand grow online."}
            </p>
            {overview && overview.map((item, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed mb-2">
                {item}
              </p>
            ))}
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md h-[350px] overflow-hidden">
              <Image
                src={overviewImage}
                alt="Overview"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==== What is "Service Name"? Section ==== */}
      <section className="pt-5 px-8 md:px-30 pb-10 bg-white">
        <div className="max-w-5xl text-center md:text-justify">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
          >
            {question.title || `What is "${title}"?`}
          </motion.h2>

          {answer && answer.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 leading-relaxed mb-4"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-gray-800 mb-20"
          >
            Our <span className="text-blue-600">{title}</span> Process
          </motion.h2>

          {/* Horizontal Flow */}
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-10 md:gap-6 relative -ms-25">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center md:text-left w-full md:w-1/2 group"
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`h-full lg:w-[270px] flex flex-col bg-white/80 backdrop-blur-md border border-blue-100 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:border-blue-300 transition-all duration-300`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto md:mx-0 mb-5 shadow-md`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center md:text-left">
                      {step.title}
                    </h3>

                    {/* Points */}
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 text-left flex-1">
                      {step.points.map((point, i) => (
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

                  {/* Connector Arrow */}
                  {index !== processSteps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center absolute top-1/2 right-[-40px] transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-blue-400 transition-transform duration-500 group-hover:translate-x-2" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img
              src="Ecommerce Photos - Download Free High-Quality Pictures _ Freepik.jpeg"
              alt="Why Choose Us"
              className="w-full h-[420px] object-cover shadow-lg"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Why Choose Us
            </h2>

            <div className="flex flex-col gap-5">
              {whyChooseUsPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle className="text-blue-600 w-7 h-7" />
                  <span className="text-lg font-medium text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rest of your sections remain the same... */}
      {/* Benefits Section */}
      <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-bold text-center text-gray-800 mb-16"
          >
            Benefits of{" "}
            <span className="text-blue-600">Our {title} Services</span>
          </motion.h2>

          {/* Timeline Line */}
          <div className="relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:w-[2px] before:h-full before:bg-blue-200 hidden md:block" />

          {/* Capsule Items */}
          <div className="flex flex-col relative">
            {dynamicBenefits.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center justify-around ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`relative flex flex-col items-center w-full md:w-1/2 ${
                      isEven ? "md:items-start md:text-left" : "md:items-start md:text-left"
                    }`}
                  >
                    {/* Capsule Container */}
                    <div
                      className={`relative bg-white rounded-full border border-blue-200 shadow-[0_6px_25px_rgba(0,0,0,0.05)] px-10 py-6 flex items-center gap-8 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] hover:-translate-y-[4px] ${
                        isEven ? "ml-0 md:ml-20" : "mr-0 md:mr-10 md:flex-row-reverse"
                      }`}
                    >
                      {/* 3D Icon Circle */}
                      <div className="relative flex items-center justify-center w-24 h-24 rounded-full">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/60 via-blue-500/60 to-purple-500/60 blur-xl opacity-60" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-blue-100 shadow-[inset_-6px_-6px_15px_rgba(0,0,0,0.1),10px_10px_25px_rgba(37,99,235,0.35)]" />
                        <div className="absolute inset-0 p-[3px] rounded-full bg-gradient-to-br from-blue-400 to-purple-500">
                          <div className="w-full h-full rounded-full bg-gradient-to-tr from-white to-blue-50" />
                        </div>
                        <div
                          className={`relative flex items-center justify-center w-[5.5rem] h-[5.5rem] rounded-full bg-gradient-to-br ${item.color} shadow-[inset_3px_3px_10px_rgba(255,255,255,0.5),inset_-4px_-4px_15px_rgba(0,0,0,0.2),8px_8px_20px_rgba(0,0,0,0.25)] border-[5px] border-white overflow-hidden`}
                        >
                          <div className="absolute top-1 left-1 w-[80%] h-[80%] rounded-full bg-white/25 blur-sm"></div>
                          <Icon className="w-10 h-10 text-white relative z-10 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.4)]" />
                        </div>
                      </div>

                      {/* Text */}
                      <div className="max-w-xs">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    {/* Process Section */}
      <section className="relative py-20 bg-[#1d2c53ec] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/15-11-47-bg-blog.jpg?auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d5eab] to-[#446dab] mix-blend-multiply"></div>
        </div>

        {/* Header */}
        <div className="relative text-center mb-16 z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            How We Work
          </h2>
          <p className="text-blue-400 text-lg mb-2">
            From idea to execution — every step designed to deliver excellence.
          </p>
        </div>

        {/* Hexagon Steps */}
        <div className="relative flex flex-wrap justify-center gap-10 px-8 z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group perspective"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="flip-card relative w-48 h-52">
                {/* Front Side */}
                <div className="flip-card-inner group-hover:rotate-y-180 transition-transform duration-700">
                  <div className="flip-card-front hexagon bg-gradient-to-br from-blue-600/90 to-blue-900/100 border border-blue-400/30 backdrop-blur-md text-center flex flex-col items-center justify-center p-4 shadow-lg">
                    <div className="text-3xl text-blue-400 mb-3">
                      {iconMap[step.icon]}
                    </div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back hexagon absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/20 border border-blue-400/30 backdrop-blur-md text-center flex items-center justify-center p-4 shadow-lg rotate-y-180">
                    <p className="text-sm text-gray-200">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .hexagon {
            clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
          }
          .perspective {
            perspective: 1000px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
          }
          .flip-card-front,
          .flip-card-back {
            backface-visibility: hidden;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 12px;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}</style>
      </section>

      {/* Integration Tools Section */}
      <section className="relative bg-[#f8faff] py-24 overflow-hidden">
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d2c53] mb-4">
            Integration Tools
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A connected ecosystem that powers your business with seamless
            integrations and smart automation.
          </p>
        </div>

        {/* Pentagon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-8">
          {dynamicIntegrations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative flex justify-center group"
            >
              {/* Pentagon Shape */}
              <div className="pentagon relative w-64 h-64 bg-gradient-to-br from-[#2a3e75] to-[#1d2c53] text-white shadow-xl transition-all transform group-hover:shadow-2xl group-hover:from-[#324b8a] group-hover:to-[#4266c1]">
                
                {/* Circle Icon Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100%] z-50">
                  <div className="w-20 h-20 rounded-full bg-white/10 border border-blue-300/40 flex items-center justify-center group-hover:bg-white/20 group-hover:border-blue-400/70 transition-all shadow-lg">
                    <span className="text-4xl text-blue-300 group-hover:text-white transition-all">
                      {item.icon}
                    </span>
                  </div>
                </div>

                {/* Text Section */}
                <div className="absolute bottom-8 w-full px-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-snug">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Glow */}
                <div className="absolute inset-0 border border-blue-400/30 group-hover:border-blue-400/60 rounded-lg blur-[1px]"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pentagon Shape CSS */}
        <style jsx>{`
          .pentagon {
            clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          }
        `}</style>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,_#1d2c53_1px,_transparent_0)] bg-[size:20px_20px]"></div>
      </section>
    </div>
  );
}