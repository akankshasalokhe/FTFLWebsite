// "use client";

// import { motion } from "framer-motion";
// import { FiSend, FiArrowRight } from "react-icons/fi";
// import { FaDiscord, FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
// import { RiCustomerService2Fill } from "react-icons/ri";
// import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import axios from "axios";
// import { useRouter } from 'next/navigation';


// const VibrantFooter = () => {
//   const [contactInfo, setContactInfo] = useState(null);
//   const [serviceInfo, setServiceInfo] = useState([])
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const router = useRouter();

// const handleServiceClick = (serviceId) => {
//   router.push(`/services/${serviceId}`, { scroll: false });
// };

//   useEffect(() => {
//     const fetchContactInfo = async () => {
//       try {
//         const res = await fetch("https://landing-page-yclw.vercel.app/api/footer");
//         const json = await res.json();
//         if (json.success && json.data && json.data.length > 0) {
//           setContactInfo(json.data[0]);
//         } else {
//           setError("No contact info available");
//         }
//       } catch (err) {
//         setError("Error connecting to server");
//         console.error("Error fetching contact info:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchContactInfo();
//   }, []);

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/service")
//       .then((res) => {
//         const blogs = res.data.data;
//         console.log("service footer:", blogs)
//         setServiceInfo(blogs);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   const getSocialIcon = (url) => {
//     if (!url) return <FiSend />;
//     if (url.includes("facebook.com")) return <FaFacebook />;
//     if (url.includes("instagram.com")) return <FaInstagram />;
//     if (url.includes("linkedin.com")) return <FaLinkedin />;
//     if (url.includes("youtube.com")) return <FaYoutube />;
//     return <FiSend />;
//   };

//   const getSocialClass = (url) => {
//     if (!url) return "hover:bg-gray-600";
//     if (url.includes("facebook.com")) return "hover:bg-[#1DA1F2]";
//     if (url.includes("instagram.com")) return "hover:bg-[#E1306C]";
//     if (url.includes("linkedin.com")) return "hover:bg-[#0077B5]";
//     if (url.includes("youtube.com")) return "hover:bg-[#FF0000]";
//     return "hover:bg-gray-600";
//   };


//   return (
//     <footer className="relative overflow-hidden bg-gradient-to-br from-[#298CF3] to-[#0D5DB7] text-white pt-10 pb-6 px-4 sm:px-6 lg:px-8">
//       {/* Floating bubbles with fixed positions to avoid hydration */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[
//           { top: '10%', left: '20%', width: '12px', height: '18px' },
//           { top: '30%', left: '80%', width: '15px', height: '10px' },
//           { top: '50%', left: '40%', width: '10px', height: '15px' },
//           { top: '70%', left: '10%', width: '18px', height: '12px' },
//           { top: '20%', left: '60%', width: '14px', height: '16px' },
//           { top: '80%', left: '90%', width: '16px', height: '14px' },
//         ].map((bubble, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -15, 0],
//               x: [0, i % 2 === 0 ? 10 : -10, 0],
//             }}
//             transition={{
//               duration: 8 + i * 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute rounded-full bg-white/10 backdrop-blur-sm"
//             style={{
//               width: bubble.width,
//               height: bubble.height,
//               top: bubble.top,
//               left: bubble.left,
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Main CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-xl p-5 mb-8 shadow-lg text-left"
//         >
//           <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
//             <div>
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
//                 Ready to <span className="text-[#FFD166]">transform</span> your business?
//               </h3>
//               <p className="text-white/90 max-w-md text-xs sm:text-sm">
//                 Let's create something extraordinary together. Our team is ready to bring your vision to life!
//               </p>
//             </div>
//             <Link href='/contact' passhref>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFD166] text-[#0D5DB7] font-bold rounded-md whitespace-nowrap text-xs sm:text-sm mt-2 lg:mt-0"
//               >
//                 Get Started <FiArrowRight className="text-sm" />
//               </motion.button>
//             </Link>
//           </div>
//         </motion.div>

//         {/* Links Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 text-left">
//           {/* Company Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.2 }}
//           >
//             <h4 className="text-base font-bold mb-3 text-[#FFD166] flex items-center gap-1.5">
//               <RiCustomerService2Fill className="text-sm" /> Company
//             </h4>
//             <ul className="space-y-2">
//               {[
//                 { label: "About Us", path: "/about" },
//                 { label: "Careers", path: "/careers" },
//                 { label: "Case Studies", path: "/case-studies" },
//                 { label: "Contact", path: "/contact" }
//               ].map((item) => (
//                 <li key={item.label}>
//                   <motion.div whileHover={{ x: 3 }}>
//                     <Link
//                       href={item.path}
//                       className="flex items-center gap-1.5 hover:text-[#FFD166] transition-colors text-sm"
//                     >
//                       <FiArrowRight className="text-xs opacity-70" /> {item.label}
//                     </Link>
//                   </motion.div>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.3 }}
//           >
//             <h4 className="text-base font-bold mb-3 text-[#FFD166]">Services</h4>
//             {/* <ul className="space-y-2">
//               {serviceInfo.map((service) => (
//                 <li key={service._id}>
//                   <motion.div whileHover={{ x: 3 }}>
//                     <Link
//                       href={`/services/${service._id}`}
//                         onClick={(e) => handleServiceClick(e, service._id)}
//                       className="flex items-center gap-1.5 hover:text-[#FFD166] transition-colors text-sm"
//                      scroll={false}
//                     >
//                       <FiArrowRight className="text-xs opacity-70" /> {service.title}
//                     </Link>
//                   </motion.div>
//                 </li>
//               ))}
//             </ul> */}
//             <ul className="space-y-2">
//   {serviceInfo.map((service) => (
//     <li key={service._id}>
//       <motion.div whileHover={{ x: 3 }}>
//         <button
//           onClick={() => handleServiceClick(service._id)}
//           className="flex items-center gap-1.5 hover:text-[#FFD166] transition-colors text-sm cursor-pointer w-full text-left"
//         >
//           <FiArrowRight className="text-xs opacity-70" /> {service.title}
//         </button>
//       </motion.div>
//     </li>
//   ))}
// </ul>
//           </motion.div>

//           {/* Contact Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.4 }}
//             className="col-span-2 md:col-span-1 lg:col-span-1 mt-4 md:mt-0"
//           >
//             <h4 className="text-base font-bold mb-3 text-[#FFD166]">Contact</h4>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-2.5">
//                 <div className="bg-[#FFD166] text-[#0D5DB7] p-1.5 rounded-full shrink-0 mt-0.5">
//                   <MdPhone className="text-xs" />
//                 </div>
//                 <div className="flex-1">
//                   {loading ? (
//                     <div className="h-3.5 bg-white/20 rounded animate-pulse w-28 mb-1"></div>
//                   ) : error ? (
//                     <p className="text-xs text-red-200">Error loading phone</p>
//                   ) : (
//                     <>
//                       <Link className="font-medium text-sm" href={`tel:+${contactInfo?.phone}`}>
//                         +91 {contactInfo?.phone}
//                       </Link>
//                       <p className="text-xs text-white/70 mt-0.5">{contactInfo?.workinghours}</p>
//                     </>
//                   )}
//                 </div>
//               </li>
//               <li className="flex items-center gap-2.5">
//                 <div className="bg-[#FFD166] text-[#0D5DB7] p-1.5 rounded-full shrink-0">
//                   <MdEmail className="text-xs" />
//                 </div>
//                 <Link className="text-sm break-all" href={`mailto:info@ftfltechnology.com`}>
//                   info@ftfltechnology.com
//                 </Link>
//               </li>
//               <li className="flex items-start gap-2.5">
//                 <div className="bg-[#FFD166] text-[#0D5DB7] p-1.5 rounded-full shrink-0 mt-0.5">
//                   <MdLocationOn className="text-xs" />
//                 </div>
//                 <div className="flex-1">
//                   {loading ? (
//                     <div className="h-3.5 bg-white/20 rounded animate-pulse w-32"></div>
//                   ) : error ? (
//                     <p className="text-xs text-red-200">Error loading address</p>
//                   ) : (
//                     <p className="text-xs text-white/90">{contactInfo?.address}</p>
//                   )}
//                 </div>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Social Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.5 }}
//             className="col-span-2 md:col-span-1 lg:col-span-1 mt-4 md:mt-0"
//           >
//             <h4 className="text-base font-bold mb-3 text-[#FFD166]">Connect</h4>
//             <div className="flex gap-3 flex-wrap mb-4">
//               {loading
//                 ? [...Array(4)].map((_, i) => (
//                   <div key={i} className="w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
//                 ))
//                 : error
//                   ? <p className="text-xs text-red-200">Error loading social links</p>
//                   : contactInfo?.socialMediaLinks?.map((url, i) => (
//                     <motion.a
//                       key={i}
//                       whileHover={{ y: -3, scale: 1.05 }}
//                       href={url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`bg-white/10 ${getSocialClass(url)} w-8 h-8 rounded-full flex items-center justify-center transition-colors`}
//                     >
//                       {getSocialIcon(url)}
//                     </motion.a>
//                   ))}
//             </div>

//             {/* Newsletter */}
//             <div className="mt-4">
//               <h5 className="text-xs font-medium mb-1.5">Stay updated</h5>
//               <div className="flex max-w-xs w-full">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="bg-white/20 placeholder-white/50 text-xs px-3 py-1.5 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#FFD166] flex-grow"
//                 />
//                 <motion.button whileHover={{ scale: 1.05 }} className="bg-[#FFD166] text-[#0D5DB7] px-2 rounded-r-md">
//                   <FiSend className="text-xs" />
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-left"
//         >
//           <div className="flex items-center gap-1.5">
//             <div className="w-6 h-6 bg-[#FFD166] rounded-full flex items-center justify-center">
//               <span className="text-[#0D5DB7] font-bold text-xs">F</span>
//             </div>
//             <p className="font-medium text-sm">FTFL Technology Pvt.Ltd</p>
//           </div>
//           <div className="flex gap-3 text-xs flex-wrap">
//             <a href="#" className="hover:text-[#FFD166] transition-colors">Privacy</a>
//             <a href="#" className="hover:text-[#FFD166] transition-colors">Terms</a>
//           </div>
//           <p className="text-xs text-white/70">© 2025 All rights reserved</p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default VibrantFooter;





// "use client";

// import { motion } from "framer-motion";
// import { FiSend, FiArrowRight } from "react-icons/fi";
// import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { RiCustomerService2Fill } from "react-icons/ri";
// import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// const VibrantFooter = () => {
//   const [contactInfo, setContactInfo] = useState(null);
//   const [serviceInfo, setServiceInfo] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const router = useRouter();
//   useEffect(() => {
//     const fetchContactInfo = async () => {
//       try {
//         const res = await fetch("https://landing-page-yclw.vercel.app/api/footer");
//         const json = await res.json();
//         if (json.success && json.data && json.data.length > 0) {
//           setContactInfo(json.data[0]);
//         } else {
//           setError("No contact info available");
//         }
//       } catch (err) {
//         setError("Error connecting to server");
//         console.error("Error fetching contact info:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchContactInfo();
//   }, []);

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/service")
//       .then((res) => {
//         setServiceInfo(res.data.data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   const getSocialIcon = (url) => {
//     if (url.includes("facebook.com")) return <FaFacebook />;
//     if (url.includes("instagram.com")) return <FaInstagram />;
//     if (url.includes("linkedin.com")) return <FaLinkedin />;
//     if (url.includes("youtube.com")) return <FaYoutube />;
//     return <FiSend />;
//   };

//   const getSocialClass = (url) => {
//     if (url.includes("facebook.com")) return "hover:bg-[#1877F2]";
//     if (url.includes("instagram.com")) return "hover:bg-[#E1306C]";
//     if (url.includes("linkedin.com")) return "hover:bg-[#0077B5]";
//     if (url.includes("youtube.com")) return "hover:bg-[#FF0000]";
//     return "hover:bg-gray-600";
//   };

//   return (
//     <footer className="relative overflow-hidden bg-gradient-to-br from-[#298CF3] to-[#0D5DB7] text-white pt-10 pb-6 px-4 sm:px-6 lg:px-8">
//       {/* Floating bubbles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[
//           { top: "10%", left: "20%", w: 12, h: 18 },
//           { top: "30%", left: "80%", w: 15, h: 10 },
//           { top: "50%", left: "40%", w: 10, h: 15 },
//           { top: "70%", left: "10%", w: 18, h: 12 },
//           { top: "20%", left: "60%", w: 14, h: 16 },
//           { top: "80%", left: "90%", w: 16, h: 14 },
//         ].map((b, i) => (
//           <motion.div
//             key={i}
//             animate={{ y: [0, -15, 0], x: [0, i % 2 === 0 ? 10 : -10, 0] }}
//             transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute rounded-full bg-white/10 backdrop-blur-sm"
//             style={{ width: b.w, height: b.h, top: b.top, left: b.left }}
//           />
//         ))}
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-xl p-5 mb-8 shadow-lg text-left"
//         >
//           <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
//             <div>
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
//                 Ready to <span className="text-[#FFD166]">transform</span> your business?
//               </h3>
//               <p className="text-white/90 max-w-md text-xs sm:text-sm">
//                 Let's create something extraordinary together. Our team is ready to bring your vision to life!
//               </p>
//             </div>
//             <Link href="/contact" passHref>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFD166] text-[#0D5DB7] font-bold rounded-md whitespace-nowrap text-xs sm:text-sm mt-2 lg:mt-0"
//               >
//                 Get Started <FiArrowRight className="text-sm" />
//               </motion.button>
//             </Link>
//           </div>
//         </motion.div>

//         {/* Links */}
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 text-left">
//           {/* Company */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
//             <h4 className="text-base font-bold mb-3 text-[#FFD166] flex items-center gap-1.5">
//               <RiCustomerService2Fill className="text-sm" /> Company
//             </h4>
//             <ul className="space-y-2">
//               {[
//                 { label: "About Us", path: "/about" },
//                 { label: "Careers", path: "/careers" },
//                 { label: "Case Studies", path: "/case-studies" },
//                 { label: "Contact", path: "/contact" },
//               ].map((item) => (
//                 <li key={item.label}>
//                   <motion.div whileHover={{ x: 3 }}>
//                     <Link href={item.path} className="flex items-center gap-1.5 hover:text-[#FFD166] text-sm">
//                       <FiArrowRight className="text-xs opacity-70" /> {item.label}
//                     </Link>
//                   </motion.div>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
//             <h4 className="text-base font-bold mb-3 text-[#FFD166]">Services</h4>

//             <ul className="space-y-2">
//               {serviceInfo.slice(0, 5).map((service) => (
//                 <li key={service._id}>
//                   <motion.div whileHover={{ x: 3 }}>
//                     <Link
//                       href={`/services/${service._id}`}

//                       scroll={false}
//                       className="flex items-center gap-1.5 hover:text-[#FFD166] text-sm"
//                     >
//                       <FiArrowRight className="text-xs opacity-70" /> {service.title}
//                     </Link>
//                   </motion.div>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>


//           {/* Contact */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
//             <h4 className="text-base font-bold mb-3 text-[#FFD166]">Contact</h4>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-2.5">
//                 <div className="bg-[#FFD166] text-[#0D5DB7] p-1.5 rounded-full shrink-0 mt-0.5">
//                   <MdPhone className="text-xs" />
//                 </div>
//                 <div>
//                   {loading ? (
//                     <p className="text-xs">Loading...</p>
//                   ) : (
//                     <>
//                       <Link href={`tel:+${contactInfo?.phone}`} className="font-medium text-sm">
//                         +91 {contactInfo?.phone}
//                       </Link>
//                       <p className="text-xs text-white/70">{contactInfo?.workinghours}</p>
//                     </>
//                   )}
//                 </div>
//               </li>
//               <li className="flex items-center gap-2.5">
//                 <div className="bg-[#FFD166] text-[#0D5DB7] p-1.5 rounded-full">
//                   <MdEmail className="text-xs" />
//                 </div>
//                 <Link href="mailto:info@ftfltechnology.com" className="text-sm">
//                   info@ftfltechnology.com
//                 </Link>
//               </li>
//               <li className="flex items-start gap-2.5">
//                 <div className="bg-[#FFD166] text-[#0D5DB7] p-1.5 rounded-full shrink-0 mt-0.5">
//                   <MdLocationOn className="text-xs" />
//                 </div>
//                 <p className="text-xs">{contactInfo?.address}</p>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Social */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 }}>
//             <h4 className="text-base font-bold mb-3 text-[#FFD166]">Connect</h4>
//             <div className="flex gap-3 flex-wrap mb-4">
//               {contactInfo?.socialMediaLinks?.map((url, i) => (
//                 <motion.a
//                   key={i}
//                   whileHover={{ y: -3, scale: 1.05 }}
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`bg-white/10 ${getSocialClass(url)} w-8 h-8 rounded-full flex items-center justify-center`}
//                 >
//                   {getSocialIcon(url)}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-3"
//         >
//           <div className="flex items-center gap-1.5">
//             <div className="w-6 h-6 bg-[#FFD166] rounded-full flex items-center justify-center">
//               <span className="text-[#0D5DB7] font-bold text-xs">F</span>
//             </div>
//             <p className="font-medium text-sm">FTFL Technology Pvt.Ltd</p>
//           </div>
//           <div className="flex gap-3 text-xs">
//             <Link href="#" className="hover:text-[#FFD166]">
//               Privacy
//             </Link>
//             <Link href="#" className="hover:text-[#FFD166]">
//               Terms
//             </Link>
//           </div>
//           <p className="text-xs text-white/70">© 2025 All rights reserved</p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default VibrantFooter;







"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Link from "next/link";
import axios from "axios";

const VibrantFooter = () => {
  const [mounted, setMounted] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);
  const [allModules, setAllModules] = useState({});
  const [loading, setLoading] = useState(true);

  // Only render on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch contact info
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await fetch("https://landing-page-yclw.vercel.app/api/footer");
        const json = await res.json();
        if (json.success && json.data && json.data.length > 0) {
          setContactInfo(json.data[0]);
        }
      } catch (err) {
        console.error("Error fetching contact info:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchContactInfo();
  }, []);

  // Fetch services/modules
  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/service")
      .then((res) => {
        if (res.data.data && res.data.data.length > 0) {
          const softwareDevDoc = res.data.data.find(
            (doc) => doc.module?.toLowerCase() === "software development"
          );
          const designingDoc = res.data.data.find(
            (doc) => doc.module?.toLowerCase() === "designing"
          );
          const videoEditingDoc = res.data.data.find(
            (doc) =>
              doc.module?.toLowerCase() === "videoproduction" ||
              doc.module?.toLowerCase() === "video production"
          );
          const marketingDoc = res.data.data.find(
            (doc) => doc.module?.toLowerCase() === "marketing"
          );

          setAllModules({
            softwareDevelopment: softwareDevDoc,
            designing: designingDoc,
            videoProduction: videoEditingDoc,
            marketing: marketingDoc,
          });
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const getSocialIcon = (url) => {
    if (url.includes("facebook.com")) return <FaFacebook className="text-[#1877F2]" />;
    if (url.includes("instagram.com")) return <FaInstagram className="text-[#E1306C]" />;
    if (url.includes("linkedin.com")) return <FaLinkedin className="text-[#0077B5]" />;
    if (url.includes("youtube.com")) return <FaYoutube className="text-[#FF0000]" />;
    return null;
  };

  if (!mounted) return null; // prevent SSR hydration errors

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#021030] via-[#032781] to-[#01154b] text-white pt-10 pb-6 px-4 sm:px-6 lg:px-8  ">
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { top: "10%", left: "20%", w: 12, h: 18 },
          { top: "30%", left: "80%", w: 15, h: 10 },
          { top: "50%", left: "40%", w: 10, h: 15 },
          { top: "70%", left: "10%", w: 18, h: 12 },
          { top: "20%", left: "60%", w: 14, h: 16 },
          { top: "80%", left: "90%", w: 16, h: 14 },
        ].map((b, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -15, 0], x: [0, i % 2 === 0 ? 10 : -10, 0] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{ width: b.w, height: b.h, top: b.top, left: b.left }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 text-left">
          {/* Company */}
          <div className="order-1">
            <h4 className="text-base font-bold mb-3 text-white flex items-center gap-1.5">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Careers", path: "/careers" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    className="flex items-center gap-1.5 hover:text-blue-400 text-md"
                  >
                    <FiArrowRight className="text-xs opacity-70" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="order-2">
            <h4 className="text-base font-bold mb-3 text-white">Services</h4>
            <ul className="space-y-2">
  {Object.values(allModules)?.map((module) => (
    module && (
      <li key={module._id}>
        <Link
          href={`/services/${module._id}`}
          className="flex items-center gap-1.5 hover:text-blue-400 text-md"
        >
          <FiArrowRight className="text-xs opacity-70" />
          {module.module}
        </Link>
      </li>
    )
  ))}
</ul>
 
          </div>

          {/* Contact */}
          <div className="order-3 col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-base font-bold mb-3 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <div className="bg-white text-[#01154b] p-1.5 rounded-full shrink-0 mt-0.5">
                  <MdPhone className="text-xs" />
                </div>
                <div>
                  {loading || !contactInfo ? (
                    <p className="text-xs text-white/70">Loading...</p>
                  ) : (
                    <>
                      <Link href={`tel:+${contactInfo?.phone}`} className="font-medium text-md">
                        +91 {contactInfo?.phone}
                      </Link>
                      <p className="text-sm text-white/70">{contactInfo?.workinghours}</p>
                    </>
                  )}
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="bg-white text-[#01154b] p-1.5 rounded-full">
                  <MdEmail className="text-xs" />
                </div>
                <Link href="mailto:info@ftfltechnology.com" className="text-md">
                  info@ftfltechnology.com
                </Link>
              </li>
              <li className="flex items-start gap-2.5 ">
                <div className="bg-white text-[#01154b] p-1.5 rounded-full shrink-0 mt-0.5">
                  <MdLocationOn className="text-xs" />
                </div>
                <p className="text-sm">{contactInfo?.address}</p>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="order-4 col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-base font-bold mb-3 text-white">Connect</h4>
            <div className="flex gap-3 flex-wrap mb-4">
              {!loading &&
                contactInfo?.socialMediaLinks?.map((url, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"
                  >
                    {getSocialIcon(url)}
                  </a>
                ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">
                <img
                  src="/FTFL.jpg"
                  alt="ftfl"
                  className="h-5 w-5 rounded-full"
                />
              </span>
            </div>
            <p className="font-medium text-sm">FTFL Technology Pvt.Ltd</p>
          </div>
          <div className="flex gap-3 text-xs">
            <Link href="/PrivacyPage" className="hover:text-blue-400">
              Privacy
            </Link>
            <Link href="/TermsPage" className="hover:text-blue-400">
              Terms & Condition
            </Link>
          </div>
          <p className="text-xs text-white/70">© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default VibrantFooter;

