// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import Head from "next/head";

// // Sample product data
// const products = [
//   {
//     id: 1,
//     name: "LifelineCart",
//     type: "E-commerce Platform",
//     category: "web",
//     description: "Lifeline Cart is a cutting-edge e-commerce solution with advanced inventory management, multiple payment gateways, and AI-powered recommendations.",
//     image: "/placeholder.jpg",
//     themeColor: "from-blue-500 to-blue-600",
//     features: ["AI Recommendations", "Secure Payments", "Inventory Management", "Sales Analytics"],
//     detailedDescription: "LifelineCart revolutionizes online shopping with its intuitive interface and powerful backend. Our platform handles everything from inventory tracking to customer relationship management, all while providing actionable insights through advanced analytics.",
//     technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
//     additionalImages: [
//       "/placeholder.jpg",
//       "/placeholder.jpg",
//       "/placeholder.jpg"
//     ],
//     overviewImage: "/placeholder.jpg",
//     featuresImage: "/placeholder.jpg",
//     technologiesImage: "/placeholder.jpg",
//     challenges: "Creating a seamless user experience across all devices while maintaining high performance with large product catalogs.",
//     solutions: "Implemented lazy loading, optimized image delivery, and used a CDN to ensure fast loading times regardless of device or location.",
//     results: "35% increase in conversion rate and 50% reduction in cart abandonment for our clients.",
//     mockups: [
//       { type: "Desktop", image: "/placeholder.jpg" },
//       { type: "Mobile", image: "/placeholder.jpg" },
//       { type: "Tablet", image: "/placeholder.jpg" }
//     ],
//     futureEnhancements: [
//       "Voice search integration for hands-free shopping",
//       "AR-based product previews",
//       "Blockchain for supply chain transparency",
//       "AI-powered personal shopping assistant",
//       "Social commerce integration"
//     ],
//     testimonials: [
//       {
//         quote: "LifelineCart transformed our online business. The AI recommendations alone increased our sales by 27% in the first quarter.",
//         author: "Sarah Johnson",
//         position: "CEO, FashionHub"
//       },
//       {
//         quote: "Implementation was seamless and the support team was exceptional. Our customers love the new shopping experience.",
//         author: "Michael Chen",
//         position: "CTO, TechGadgets"
//       }
//     ],
//     stats: [
//       { value: "35%", label: "Increase in Conversion" },
//       { value: "50%", label: "Reduction in Cart Abandonment" },
//       { value: "99.9%", label: "Uptime" },
//       { value: "2.1s", label: "Avg. Load Time" }
//     ],
//     timeline: [
//       { phase: "Discovery & Planning", duration: "2 weeks" },
//       { phase: "UI/UX Design", duration: "3 weeks" },
//       { phase: "Development", duration: "10 weeks" },
//       { phase: "Testing & QA", duration: "2 weeks" },
//       { phase: "Launch", duration: "1 week" }
//     ],
//     team: [
//       { name: "Project Manager", count: 1 },
//       { name: "UI/UX Designers", count: 2 },
//       { name: "Frontend Developers", count: 3 },
//       { name: "Backend Developers", count: 2 },
//       { name: "QA Specialists", count: 2 }
//     ]
//   },
//   {
//     id: 4,
//     name: "FitTrack",
//     type: "Healthcare App",
//     category: "mobile",
//     description: "A comprehensive health monitoring application with real-time vitals tracking and doctor consultation features.",
//     image: "/placeholder.jpg",
//     themeColor: "from-blue-500 to-blue-600",
//     features: ["Vitals Monitoring", "Appointment Booking", "Health Reports", "Medication Reminders"],
//     detailedDescription: "HealthTrack Pro empowers users to take control of their health with intuitive tracking and professional medical insights.",
//     technologies: ["React Native", "Firebase", "Node.js", "WebRTC"],
//     additionalImages: [
//       "/placeholder.jpg",
//       "/placeholder.jpg"
//     ],
//     overviewImage: "/placeholder.jpg",
//     featuresImage: "/placeholder.jpg",
//     technologiesImage: "/placeholder.jpg",
//     challenges: "Ensuring HIPAA compliance while maintaining a seamless user experience.",
//     solutions: "Implemented end-to-end encryption and strict access controls while optimizing the UI for ease of use.",
//     results: "40% improvement in patient engagement and 30% reduction in missed appointments.",
//     mockups: [
//       { type: "Mobile", image: "/placeholder.jpg" },
//       { type: "Tablet", image: "/placeholder.jpg" }
//     ],
//     futureEnhancements: [
//       "Integration with wearable devices",
//       "AI-based health predictions",
//       "Telemedicine enhancements",
//       "Personalized health plans"
//     ],
//     testimonials: [
//       {
//         quote: "Our patients love the convenience of HealthTrack Pro. It's revolutionized how we deliver care.",
//         author: "Dr. Emily Rodriguez",
//         position: "Medical Director, City Hospital"
//       }
//     ],
//     stats: [
//       { value: "40%", label: "Patient Engagement" },
//       { value: "30%", label: "Fewer Missed Appointments" },
//       { value: "4.8/5", label: "User Rating" },
//       { value: "50k+", label: "Active Users" }
//     ],
//     timeline: [
//       { phase: "Research & Planning", duration: "3 weeks" },
//       { phase: "UI/UX Design", duration: "4 weeks" },
//       { phase: "Development", duration: "12 weeks" },
//       { phase: "Testing & Compliance", duration: "3 weeks" },
//       { phase: "Launch", duration: "2 weeks" }
//     ],
//     team: [
//       { name: "Project Manager", count: 1 },
//       { name: "UI/UX Designers", count: 2 },
//       { name: "Mobile Developers", count: 3 },
//       { name: "Backend Developers", count: 2 },
//       { name: "QA Specialists", count: 2 },
//       { name: "Compliance Experts", count: 1 }
//     ]
//   }
// ];

// // Animation variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// };

// const staggerChildren = {
//   visible: { transition: { staggerChildren: 0.1 } }
// };

// const scaleUp = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
// };

// export default function ProductDetail() {
//   const router = useRouter();
//   const { id } = router.query;
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState("overview");

//   // Find the product with the matching ID
//   const product = products.find(p => p.id === parseInt(id));

//   // If product not found or page is loading
//   if (!product) {
//     return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
//   }

//   // Handle next/previous image in slider
//   const nextImage = () => {
//     setCurrentImageIndex(prev => 
//       prev === product.additionalImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex(prev => 
//       prev === 0 ? product.additionalImages.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Head>
//         <title>{product.name} - Product Details</title>
//         <meta name="description" content={product.description} />
//       </Head>

//       {/* Header with back button */}
//       <motion.header 
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className=" shadow-sm sticky top-0 z-50"
//       >
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between mt-20">
//           <button 
//             onClick={() => router.back()}
//             className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
//           >
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//             </svg>
//             Back to Products
//           </button>

//           {/* Navigation Tabs */}
//           {/* <div className="hidden md:flex space-x-1 bg-gray-100 p-1 rounded-lg">
//             {["overview", "features", "technology", "results", "gallery"].map(tab => (
//               <button
//                 key={tab}
//                 onClick={() => {
//                   setActiveTab(tab);
//                   document.getElementById(tab)?.scrollIntoView({ behavior: "smooth" });
//                 }}
//                 className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
//                   activeTab === tab 
//                     ? `bg-white text-gray-800 shadow-sm ${product.category === "mobile" ? "text-green-800" : "text-blue-800"}` 
//                     : "text-gray-600 hover:text-gray-800"
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div> */}
//         </div>
//       </motion.header>

//       {/* Hero Section */}
//       <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
//         <div className="absolute inset-0 z-0 opacity-20">
//           <div className="absolute inset-0 bg-black"></div>
//           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div 
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//               className="text-center lg:text-left"
//             >
//               <span className={`inline-block px-4 py-1 mb-4 text-xs font-semibold rounded-full ${
//                 product.category === "mobile" 
//                   ? "bg-green-100 text-green-800" 
//                   : "bg-blue-100 text-blue-800"
//               }`}>
//                 {product.category === "mobile" ? "Mobile App" : "Web App"}
//               </span>
//               <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
//               <p className="text-xl opacity-90 mb-8">{product.type}</p>
//               <p className="text-gray-300 mb-8 leading-relaxed">{product.description}</p>

//               <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
//                 <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center">
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                   Live Demo
//                 </button>
//                 <button className="bg-transparent hover:bg-white hover:bg-opacity-10 border border-white text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1">
//                   View Case Study
//                 </button>
//               </div>
//             </motion.div>

//             <motion.div 
//               initial="hidden"
//               animate="visible"
//               variants={scaleUp}
//               className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
//             >
//               <Image
//                 src={product.image || "/placeholder.jpg"}
//                 alt={product.name}
//                 layout="fill"
//                 objectFit="cover"
//                 onError={(e) => {
//                   e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjM1ZW0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
//                 }}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

// {/* Stats Section */}
// {product.stats && (
//   <section className="py-12 bg-white">
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//         {product.stats.map((stat, index) => (
//           <motion.div 
//             key={index}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             className="text-center p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300"
//           >
//             <div className={`text-3xl font-bold mb-2 ${product.category === "mobile" ? "text-green-600" : "text-blue-600"}`}>
//               {stat.value}
//             </div>
//             <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// )}

//       {/* Overview Section */}
//       <section id="overview" className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
//             <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeIn}
//             >
//               <h3 className="text-2xl font-semibold mb-6">The Challenge</h3>
//               <p className="text-gray-700 leading-relaxed mb-8">{product.challenges}</p>

//               <h3 className="text-2xl font-semibold mb-6">Our Solution</h3>
//               <p className="text-gray-700 leading-relaxed">{product.solutions}</p>
//             </motion.div>

//             <motion.div 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleUp}
//               className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
//             >
//               <Image
//                 src={product.overviewImage || "/placeholder.jpg"}
//                 alt={`${product.name} Overview`}
//                 layout="fill"
//                 objectFit="cover"
//                 onError={(e) => {
//                   e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjM1ZW0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
//                 }}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Key Features Section */}
//       <section id="features" className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold mb-4">Key Features</h2>
//             <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//             <p className="text-gray-600 mt-4 max-w-3xl mx-auto">Discover the powerful features that make {product.name} stand out from the competition</p>
//           </motion.div>

//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8"
//           >
//             {product.features.map((feature, index) => (
//               <motion.div 
//                 key={index}
//                 variants={fadeIn}
//                 className="flex items-start p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
//               >
//                 <div className={`bg-gradient-to-r ${product.themeColor} rounded-full p-3 mr-4 flex-shrink-0`}>
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">{feature}</h3>
//                   <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Technology Stack Section */}
//       <section id="technology" className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
//             <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//             <p className="text-gray-600 mt-4 max-w-3xl mx-auto">We leverage cutting-edge technologies to deliver high-performance, scalable solutions</p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeIn}
//             >
//               <div className="flex flex-wrap gap-4 mb-8">
//                 {product.technologies.map((tech, index) => (
//                   <span key={index} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-6">Our technology stack was carefully selected to ensure optimal performance, security, and scalability for {product.name}.</p>

//               {/* Development Timeline */}
//               {product.timeline && (
//                 <div className="mt-10">
//                   <h3 className="text-xl font-semibold mb-6">Development Timeline</h3>
//                   <div className="space-y-4">
//                     {product.timeline.map((phase, index) => (
//                       <div key={index} className="flex items-center">
//                         <div className={`w-3 h-3 rounded-full ${product.category === "mobile" ? "bg-green-500" : "bg-blue-500"} mr-4`}></div>
//                         <div className="flex-1">
//                           <div className="flex justify-between items-center">
//                             <span className="font-medium">{phase.phase}</span>
//                             <span className="text-sm text-gray-500">{phase.duration}</span>
//                           </div>
//                           <div className="h-1 bg-gray-200 rounded-full mt-2">
//                             <div 
//                               className={`h-full rounded-full ${product.category === "mobile" ? "bg-green-500" : "bg-blue-500"}`} 
//                               style={{ width: `${(index + 1) * 20}%` }}
//                             ></div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </motion.div>

//             <motion.div 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleUp}
//               className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
//             >
//               <Image
//                 src={product.technologiesImage || "/placeholder.jpg"}
//                 alt={`${product.name} Technologies`}
//                 layout="fill"
//                 objectFit="cover"
//                 onError={(e) => {
//                   e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjM1ZW0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
//                 }}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

// {/* Results Section */}
// <section id="results" className="py-16 bg-white">
//   <div className="max-w-7xl mx-auto px-4">
//     <motion.div 
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={fadeIn}
//       className="text-center mb-12"
//     >
//       <h2 className="text-3xl font-bold mb-4">Measurable Results</h2>
//       <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//     </motion.div>

//     <motion.div 
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={fadeIn}
//       className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm mb-12"
//     >
//       <h3 className="text-2xl font-semibold mb-6">Impact Delivered</h3>
//       <p className="text-gray-700 text-lg leading-relaxed">{product.results}</p>
//     </motion.div>

//           {/* Team Section */}
//           {product.team && (
//             <motion.div 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeIn}
//               className="mt-16"
//             >
//               <h3 className="text-2xl font-semibold mb-6 text-center">Project Team</h3>
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//                 {product.team.map((role, index) => (
//                   <div key={index} className="text-center p-4 bg-gray-50 rounded-xl shadow-sm">
//                     <div className={`text-2xl font-bold mb-2 ${product.category === "mobile" ? "text-green-600" : "text-blue-600"}`}>
//                       {role.count}
//                     </div>
//                     <div className="text-gray-600 text-sm">{role.name}</div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </section>

// {/* Testimonials Section */}
// {product.testimonials && product.testimonials.length > 0 && (
//   <section className="py-16 bg-gray-50">
//     <div className="max-w-7xl mx-auto px-4">
//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//         className="text-center mb-12"
//       >
//         <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
//         <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//       </motion.div>

//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerChildren}
//         className="grid grid-cols-1 md:grid-cols-2 gap-8"
//       >
//         {product.testimonials.map((testimonial, index) => (
//           <motion.div 
//             key={index}
//             variants={fadeIn}
//             className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
//           >
//             <svg className="w-12 h-12 text-blue-500 opacity-30 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//             </svg>
//             <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
//             <div>
//               <div className="font-semibold">{testimonial.author}</div>
//               <div className="text-gray-600 text-sm">{testimonial.position}</div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   </section>
// )}

//       {/* Gallery Section */}
//       <section id="gallery" className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold mb-4">Project Gallery</h2>
//             <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//             <p className="text-gray-600 mt-4 max-w-3xl mx-auto">Explore screenshots and mockups of {product.name} across different devices</p>
//           </motion.div>

//           {/* Image Slider */}
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             className="relative h-96 md:h-[500px] bg-gray-200 rounded-2xl overflow-hidden mb-8"
//           >
//             <div className="relative h-full w-full overflow-hidden">
//               <Image
//                 src={product.additionalImages[currentImageIndex] || "/placeholder.jpg"}
//                 alt={`${product.name} - Image ${currentImageIndex + 1}`}
//                 layout="fill"
//                 objectFit="cover"
//                 className="transition-opacity duration-300"
//                 onError={(e) => {
//                   e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjM1ZW0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
//                 }}
//               />
//             </div>

//             {/* Only show navigation if there are multiple images */}
//             {product.additionalImages.length > 1 && (
//               <>
//                 <button 
//                   onClick={prevImage}
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 <button 
//                   onClick={nextImage}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>

//                 {/* Image indicators */}
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                   {product.additionalImages.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentImageIndex(index)}
//                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                         index === currentImageIndex ? 'bg-white scale-125' : 'bg-gray-400'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </>
//             )}
//           </motion.div>

//           {/* Mockups */}
//           {/* {product.mockups && product.mockups.length > 0 && (
//             <motion.div 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeIn}
//             >
//               <h3 className="text-2xl font-semibold mb-6 text-center">Device Mockups</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {product.mockups.map((mockup, index) => (
//                   <div key={index} className="text-center">
//                     <div className="relative h-64 mb-4">
//                       <Image
//                         src={mockup.image || "/placeholder.jpg"}
//                         alt={`${product.name} ${mockup.type} Mockup`}
//                         layout="fill"
//                         objectFit="contain"
//                         onError={(e) => {
//                           e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjM1ZW0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
//                         }}
//                       />
//                     </div>
//                     <div className="font-medium text-gray-700">{mockup.type} View</div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           )} */}
//         </div>
//       </section>

//       {/* Future Enhancements Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold mb-4">Future Enhancements</h2>
//             <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//             <p className="text-gray-600 mt-4 max-w-3xl mx-auto">We're constantly innovating and planning new features for {product.name}</p>
//           </motion.div>

//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {product.futureEnhancements.map((enhancement, index) => (
//               <motion.div 
//                 key={index}
//                 variants={fadeIn}
//                 className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
//               >
//                 <div className={`bg-gradient-to-r ${product.themeColor} rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2">{enhancement}</h3>
//                 <p className="text-gray-600 text-sm">Planned for future release based on user feedback and market trends.</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//           >
//             <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
//             <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">Let's discuss how {product.name} can help you achieve your goals</p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
//                 Contact Our Team
//               </button>
//               <button className="bg-transparent hover:bg-white hover:bg-opacity-10 border border-white text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1">
//                 Request a Demo
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 bg-gray-100 text-center text-gray-600">
//         <div className="max-w-7xl mx-auto px-4">
//           <p>© {new Date().getFullYear()} All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }





import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ProductTestimonial from "@/components/OurProducts/ProductTestimonial";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(1); // Start with 1 for mobile
  const [activeTab, setActiveTab] = useState("overview");
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);



  console.log("Product overview image", productsData?.overviewImage);
  // Fetch product data
  useEffect(() => {
    if (!id) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://landing-page-yclw.vercel.app/api/product/${id}`);
        if (res.data.success) {
          setProductsData(res.data.data);
        }
        console.log("Fetched Product:", res.data.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);


  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://landing-page-yclw.vercel.app/api/testimonial`);
        if (res.data.success) {
          const filtered = res.data.data.filter((item) => item.sectionTitle === "Product");
          console.log("Filtered Testimonials:", filtered);
          setTestimonialsData(filtered);
        }
        console.log("Fetched Testimonials:", res.data.data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Set visible images based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleImages(3); // lg screens
      } else if (window.innerWidth >= 640) {
        setVisibleImages(2); // sm screens
      } else {
        setVisibleImages(1); // mobile
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [banner, setBanner] = useState(null);
  const pageTitle = "Products";
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await fetch(
          `https://landing-page-yclw.vercel.app/api/banner`
        );
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          // ✅ find banner with title = pageTitle (case-insensitive)
          const matchedBanner = data.data.find(
            (b) => b.title?.toLowerCase() === pageTitle.toLowerCase()
          );
          setBanner(matchedBanner || null);
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    };
    fetchBanner();
  }, []);
  // If product not found or page is loading
  // if (loading) {
  //   return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  // }

  // if (!productsData) {
  //   return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  // }


  if (loading) {
    return (
      <div className="min-h-screen mt-30 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-200 rounded"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!productsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }





  const prevImage = () => {
    if (!productsData?.galleryImages?.length) return;

    setCurrentImageIndex((prev) => {
      if (prev === 0) {
        // Loop to the end
        return Math.ceil(productsData.galleryImages.length / visibleImages) - 1;
      }
      return prev - 1;
    });
  };

  const nextImage = () => {
    if (!productsData?.galleryImages?.length) return;

    setCurrentImageIndex((prev) => {
      const totalSlides = Math.ceil(productsData.galleryImages.length / visibleImages);
      if (prev >= totalSlides - 1) {
        // Loop to the beginning
        return 0;
      }
      return prev + 1;
    });
  };

  // Helper functions to get data from the API response
  const getHeadingData = () => {
    return productsData.heading?.map((item, index) => ({
      id: item._id || index,
      headingPercentage: item.headingPercentage,
      headingDesc: item.headingDesc
    })) || [];
  };

  const getMeasurableResults = () => {
    return productsData.measurableResults?.map((item, index) => ({
      id: item._id || index,
      title: item.title,
      description: item.description
    })) || [];
  };

  const getProjectTeam = () => {
    return productsData.projectTeam?.map((item, index) => ({
      id: item._id || index,
      members: item.members,
      role: item.role
    })) || [];
  };

  const getDevelopmentTimeline = () => {
    return productsData.developmentTimeline?.map((item, index) => ({
      id: item._id || index,
      title: item.title,
      time: item.time
    })) || [];
  };

  const getOverview = () => {
    return productsData.overview?.map((item, index) => ({
      id: item._id || index,
      title: item.title,
      desc: item.desc
    })) || [];
  };

  const getKeyFeatures = () => {
    return productsData.keyFeatures?.map((item, index) => ({
      id: item._id || index,
      title: item.title,
      description: item.description,
      image: item.image
    })) || [];
  };

  const getProjectDetails = () => {
    return productsData.projectDetails?.map((item, index) => ({
      id: item._id || index,
      title: item.title,
      description: item.description,
      image: item.image
    })) || [];
  };

  // Generate stats from measurable results
  const generateStats = () => {
    return getMeasurableResults().map((result, index) => ({
      value: result.title,
      label: result.description
    }));
  };

  // Generate features from key features
  const generateFeatures = () => {
    return getKeyFeatures().map(feature => feature.title);
  };

  // Generate technologies from technology points
  const generateTechnologies = () => {
    return productsData.technologyPoints || [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{productsData.title} - Product Details</title>
        <meta name="description" content={productsData.description} />
      </Head>

      {/* Header with back button */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className=" shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between mt-20">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </button>
        </div>
      </motion.header>
      <div className="relative  bg-blue-500  h-[40vh] sm:h-[50vh] md:h-[50vh] lg:h-[60vh]
    min-h-[300px] md:min-h-[400px] overflow-hidden">
        {/* Background Banner Image */}
        <Image
          src={banner?.bannerImage ? banner.bannerImage : "/download (4).jpeg"}
          alt={banner?.title || `${pageTitle} Banner`}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(7,24,43,0.85) 0%, rgba(23,64,110,0.7) 100%)",
          }}
          className="absolute inset-0 flex flex-col px-8 md:px-36 items-start py-8 md:py-0 justify-center "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className=" lg:text-left"
            >
              <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                {productsData.category}
              </span>
              <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">{productsData.title}</h1>
              <p className="text-xl opacity-90 text-blue-200 mb-8">{productsData.subTitle}</p>
              {/* <p className="text-gray-300 mb-8 leading-relaxed">{productsData.description}</p> */}

              <div className="flex flex-wrap gap-4 justify-start lg:justify-start">
                {/* {productsData.livedemoLink && (
                  <a
                    href={productsData.livedemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )} */}

                {/* App Store Buttons - Compact Version */}
                <div className="flex justify-start gap-3">
                  {/* Google Play Store Button */}
                  {productsData.googleStoreLink && (
                    <a

                      href={productsData.googleStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#4285F4] hover:bg-[#3367D6] text-white p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-start"
                      title="Download on Google Play"
                    >

                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>

                    </a>
                  )}

                  {/* Apple App Store Button */}
                  {/* {productsData.appleStoreLink && (
                    <a
                      href={productsData.appleStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center"
                      title="Download on App Store"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                    </a>
                  )} */}

                </div>


              </div>
            </motion.div>



          </div>
        </div>
      </div>



      {/* <section className="relative py-16 md:py-24 bg-blue-500 text-white overflow-hidden">
       
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.4
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 60 - 30],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div> */}

      {/* Existing background effects */}
      {/* <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div> */}


      {/* </section> */}


      {/* Stats Section */}

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {getHeadingData().map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`text-3xl font-bold mb-2 ${productsData.category === "mobile" ? "text-green-600" : "text-blue-600"}`}>
                  {stat.headingPercentage}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.headingDesc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Overview Section */}
      <section id="overview" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {getOverview().map((item, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>



            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={productsData?.overviewImage || "/placeholder.jpg"}
                alt={`${productsData?.title} Overview`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly83d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjM1ZW0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
                }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">Discover the powerful features that make {productsData.title} stand out</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {getKeyFeatures().map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-start p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-3 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      {/* <section id="technology" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{productsData.technologyTitle}</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">{productsData.technologyDesc}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >

              <div className="flex flex-wrap gap-4 mb-8">
                {generateTechnologies().map((tech, index) => (
                  <span key={index} className="bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Development Timeline */}
      {/* {getDevelopmentTimeline().length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-6">Development Timeline</h3>
                  <div className="space-y-4">
                    {getDevelopmentTimeline().map((phase, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-4"></div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{phase.title}</span>
                            <span className="text-sm text-gray-500">{phase.time}</span>
                          </div>
                          <div className="h-1 bg-gray-200 rounded-full mt-2">
                            <div
                              className="h-full rounded-full bg-blue-500"
                              style={{ width: `${(index + 1) * 20}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div> */}

      {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={productsData.technologyImage || "/placeholder.jpg"}
                alt={`${productsData.title} Technologies`}
                layout="fill"
                objectFit="cover"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjM1ZW0iIHRleHQtYW5jaG9y=";
                }}
              />
            </motion.div> */}
      {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={productsData.technologyImage || "/placeholder.jpg"}
                alt={`${productsData.title} Technologies`}
                className="w-full h-full object-fit"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly83d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjM1ZW0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
                }}
              />
            </motion.div>
          </div>
        </div>
      </section> */}



      {/* Measuarable Section */}
      {/* <section id="results" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Measurable Results</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          {/* Team Section */}
      {/* {getMeasurableResults().length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm mb-12"
            >

              {getMeasurableResults().map((result, index) => (
                <div key={index} >
                  <h3 className="text-2xl font-semibold mb-6">
                    {result.title}
                  </h3>

                  <p className="text-gray-700 text-lg leading-relaxed">{result.description}</p>
                </div>
              ))}

            </motion.div>
          )}
        </div> */}
      {/* </section> */}





      {/* Results Section */}
      {/* <section id="results" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Project Team</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          {/* Team Section */}
      {/* {getProjectTeam().length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getProjectTeam().map((member, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold mb-2 text-blue-600">
                      {member.members}
                    </div>
                    <div className="text-gray-600">{member.role}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div> */}
      {/* </section> */}







      {/* Gallery Section */}

      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Project Gallery</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          {/* Only show carousel if there are images */}
          {productsData?.galleryImages?.length > 0 ? (
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentImageIndex * (100 / visibleImages)}%)`,
                }}
              >
                {productsData.galleryImages.map((img, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
                  >
                    <div className="h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjM1ZW0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons - Only show if there are more images than visible */}
              {productsData.galleryImages.length > visibleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/80 text-gray-800 px-3 py-2 rounded-full shadow-md hover:bg-white disabled:opacity-50 backdrop-blur-sm"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/80 text-gray-800 px-3 py-2 rounded-full shadow-md hover:bg-white disabled:opacity-50 backdrop-blur-sm"
                  >
                    &#8594;
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {productsData.galleryImages.length > visibleImages && (
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({
                    length: Math.ceil(productsData.galleryImages.length / visibleImages)
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Show message when no images
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No gallery images available</p>
            </div>
          )}
        </div>
      </section>


      {/* Future Enhancements Section */}
      {productsData.futurePoints && productsData.futurePoints.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Future Enhancements</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">We're constantly innovating and planning new features for {productsData.title}</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {productsData.futurePoints.map((enhancement, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{enhancement}</h3>
                  <p className="text-gray-600 text-sm">Planned for future release based on user feedback and market trends.</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}


      {/* Testimonials Section */}
      <ProductTestimonial />

      {/* CTA Section */}
      {/* <section className="py-16 bg-gray-400 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">Let's discuss how {productsData.title} can help you achieve your goals</p>
            <div className="flex flex-wrap gap-4 justify-center">
            
                 <button
                onClick={() => router.push("/contact")}
                className="mt-8 px-8 py-3 cursor-pointer rounded-lg bg-gradient-to-r from-[#298cf3] to-blue-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
               Contact Our Team
              </button>
             
            </div>
          </motion.div>
        </div>
      </section> */}


      <section
            // className="relative py-20 text-white text-center overflow-hidden"
             className="
    relative py-20 text-white text-center overflow-hidden
    h-auto min-h-[60vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[40vh]
  "
            style={{
              backgroundImage: "url('/logos/ourmission.jpg')", // ✅ Make sure this path is correct
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "50vh",
            }}
          >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-blue-900/60" />

        {/* Text content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your business?
            </h2>

            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Let's discuss how{" "}
              <span className="font-semibold text-blue-200">
                {productsData.title}
              </span>{" "}
              can help you achieve your goals.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#298cf3] to-blue-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>



    </div>
  );
}