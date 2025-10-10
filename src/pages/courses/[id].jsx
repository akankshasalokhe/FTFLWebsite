// import Head from "next/head";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaClock,
//   FaCertificate,
//   FaArrowLeft,
//   FaCheckCircle,
//   FaChevronDown,
//   FaChevronUp,
//   FaChalkboardTeacher,
//   FaLaptopCode,
//   FaChartLine,
//   FaSpinner,
//   FaUsers,
//   FaProjectDiagram,
//   FaStar,
//   FaUserTie,
//   FaGraduationCap,
//   FaBriefcase,
//   FaMoneyBillWave,
//   FaRegCalendarAlt,
//   FaMapMarkerAlt,
//   FaLinkedin,
//   FaTwitter,
//   FaFacebook,
//   FaShare,
//   FaBook,
//   FaTools,
//   FaHandshake,
//   FaCode,
//   FaServer,
//   FaMobile,
//   FaDatabase,
//   FaCloud,
//   FaGlobe,
//   FaAward,
//   FaRocket,
//   FaLightbulb,
//   FaQuestionCircle,
//   FaRupeeSign,
//   FaUniversity,
// } from "react-icons/fa";

// // MASTER DATA
// const coursesData = [
//   {
//     id: 1,
//     title: "Web Development Internship Program",
//     image: "/Team.jpeg",
//     fullDescription: `Our comprehensive Web Development Internship Program is designed to take you from beginner to job-ready in just 4 weeks. This program combines intensive training with real-world project experience, followed by a guaranteed internship opportunity. You'll master the fundamentals of modern web development including HTML5, CSS3, JavaScript, and React while building a professional portfolio.`,
//     duration: "4 weeks training + 2 months internship",
//     fee: "9,999",
//     // Removed discount-related fields
//     internship: "Guaranteed Internship with Stipend",
//     education: "12th Pass or Graduation in any stream",
//     stipend: "₹5,000 - ₹8,000 per month",
//     outcomes: [
//       "Build responsive websites from scratch",
//       "Create reusable React components",
//       "Connect to APIs and handle application state",
//       "Deploy applications to production environments",
//       "Implement modern UI/UX principles",
//       "Gain real work experience through internship",
//       "Receive internship certificate and recommendation letter",
//     ],
//     skills: [
//       { name: "HTML5", icon: <FaCode className="text-orange-500" /> },
//       { name: "CSS3", icon: <FaCode className="text-blue-500" /> },
//       { name: "JavaScript", icon: <FaCode className="text-yellow-500" /> },
//       { name: "React", icon: <FaLaptopCode className="text-blue-400" /> },
//       { name: "Git & GitHub", icon: <FaCode className="text-gray-700" /> },
//       { name: "API/REST", icon: <FaServer className="text-green-500" /> },
//       { name: "Responsive Design", icon: <FaMobile className="text-purple-500" /> },
//       { name: "Deployment", icon: <FaCloud className="text-blue-300" /> },
//     ],
//     curriculum: [
//       {
//         step: 1,
//         title: "Week 1: HTML & CSS Fundamentals",
//         icon: <FaCode className="text-orange-500" />,
//         topics: [
//           "Semantic HTML, forms & accessibility",
//           "CSS selectors, box model, flexbox",
//           "Responsive layouts, media queries",
//           "CSS frameworks: Bootstrap and Tailwind",
//           "Building a complete landing page",
//         ],
//       },
//       {
//         step: 2,
//         title: "Week 2: JavaScript Essentials",
//         icon: <FaCode className="text-yellow-500" />,
//         topics: [
//           "ES6 syntax, arrays/objects, functions",
//           "DOM manipulation & events",
//           "Fetch API & basic async patterns",
//           "Modern JavaScript features",
//           "Building interactive web applications",
//         ],
//       },
//       {
//         step: 3,
//         title: "Week 3: React Basics",
//         icon: <FaLaptopCode className="text-blue-400" />,
//         topics: [
//           "Components, props, state, effects",
//           "Routing & reusable UI patterns",
//           "Calling APIs, loading/error states",
//           "State management fundamentals",
//           "Building a single page application",
//         ],
//       },
//       {
//         step: 4,
//         title: "Week 4: Project & Deployment + Internship Preparation",
//         icon: <FaCloud className="text-blue-300" />,
//         topics: [
//           "Capstone project (SPA with API)",
//           "Git workflow & code reviews",
//           "Deploy on Vercel/Netlify",
//           "Internship onboarding process",
//           "Professional communication training",
//         ],
//       },
//     ],
//     icon: <FaLaptopCode className="text-2xl text-blue-600" />,
//     projects: "4+ Real Projects + Live Internship Project",
//     mentorship: "1:1 Mentorship Sessions + Workplace Mentoring",
//     level: "Beginner to Advanced",
//     schedule: "Weekdays: 9:30 PM-6:30 PM | Weekend: closed",
//     // nextBatch: "15 January 2024",
//     mode: "Online & Offline (Hybrid Mode Available)",
//     placementRate: "92%",
//     averagePackage: "₹6-10 LPA",
//     reviews: [
//       {
//         name: "Rahul Sharma",
//         role: "Frontend Developer at TechCorp",
//         rating: 5,
//         comment: "The internship program gave me real work experience that helped me secure a job immediately after completion!",
//         avatar: "/avatar1.jpg",
//       },
//       {
//         name: "Priya Patel",
//         role: "Web Developer",
//         rating: 5,
//         comment: "Not only did I learn web development, but the stipend helped me support myself during the training period.",
//         avatar: "/avatar2.jpg",
//       },
//     ],
//     // instructors: [
//     //   {
//     //     name: "Amit Kumar",
//     //     role: "Senior Web Developer",
//     //     experience: "8+ years",
//     //     bio: "Former lead developer at Amazon with expertise in React and Node.js",
//     //     linkedin: "https://linkedin.com",
//     //     avatar: "/instructor1.jpg",
//     //   },
//     //   {
//     //     name: "Neha Singh",
//     //     role: "UI/UX Specialist",
//     //     experience: "6+ years",
//     //     bio: "Worked with multiple startups to build beautiful and functional web applications",
//     //     linkedin: "https://linkedin.com",
//     //     avatar: "/instructor2.jpg",
//     //   },
//     // ],
//     // placementPartners: [
//     //   { name: "TechMahindra", logo: "/company1.png" },
//     //   { name: "Infosys", logo: "/company2.png" },
//     //   { name: "Wipro", logo: "/company3.png" },
//     //   { name: "HCL", logo: "/company4.png" },
//     //   { name: "TCS", logo: "/company5.png" },
//     // ],
//     faqs: [
//       {
//         question: "What are the education requirements for this program?",
//         answer: "You need to have completed at least 12th standard or be pursuing any graduation stream. No technical background is required.",
//         icon: <FaUniversity className="text-blue-500" />
//       },
//       {
//         question: "Will I receive a stipend during the internship?",
//         answer: "Yes, based on your performance during the training period, you will receive a stipend ranging from ₹5,000 to ₹8,000 per month during the internship.",
//         icon: <FaMoneyBillWave className="text-green-500" />
//       },
//       {
//         question: "Can I choose between online and offline mode?",
//         answer: "Yes, we offer both online and offline options. You can choose the mode that works best for you.",
//         icon: <FaMapMarkerAlt className="text-purple-500" />
//       },
//       {
//         question: "Is the internship guaranteed after training?",
//         answer: "Yes, upon successful completion of the training program, you are guaranteed an internship placement with one of our partner companies.",
//         icon: <FaHandshake className="text-yellow-500" />
//       },
//     ],
//     tools: [
//       { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
//       { name: "Git", icon: <FaCode className="text-orange-500" /> },
//       { name: "Chrome DevTools", icon: <FaGlobe className="text-yellow-500" /> },
//       { name: "Figma", icon: <FaRocket className="text-purple-500" /> },
//       { name: "Netlify", icon: <FaCloud className="text-blue-300" /> },
//       { name: "Vercel", icon: <FaCloud className="text-black" /> },
//     ],
//   },
// ];

// // Animation variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// };

// const staggerChildren = {
//   visible: { transition: { staggerChildren: 0.1 } }
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
// };

// // Enhanced Accordion Component
// const CurriculumAccordion = ({ curriculum }) => {
//   const [openIndex, setOpenIndex] = useState(0);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   return (
//     <div className="space-y-4">
//       {curriculum.map((item, index) => (
//         <motion.div
//           key={item.step}
//           className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//         >
//           <h3>
//             <button
//               id={`accordion-${item.step}-heading`}
//               onClick={() => toggleAccordion(index)}
//               className="flex justify-between items-center w-full px-6 py-5 text-left text-lg font-semibold text-gray-800 hover:bg-blue-50 transition-all duration-300"
//               aria-expanded={openIndex === index}
//               aria-controls={`accordion-${item.step}-content`}
//             >
//               <span className="flex items-center gap-3">
//                 <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
//                   {item.icon}
//                 </span>
//                 {item.title}
//               </span>
//               {openIndex === index ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-blue-600" />}
//             </button>
//           </h3>

//           <div
//             id={`accordion-${item.step}-content`}
//             role="region"
//             aria-labelledby={`accordion-${item.step}-heading`}
//             className={openIndex === index ? "block" : "hidden"}
//           >
//             <div className="px-6 pb-5">
//               <ul className="space-y-2">
//                 {item.topics.map((topic, j) => (
//                   <motion.li 
//                     key={j} 
//                     className="flex items-start text-gray-700"
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: j * 0.1 }}
//                   >
//                     <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" aria-hidden="true" />
//                     <span>{topic}</span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// // FAQ Accordion Component
// const FAQAccordion = ({ faqs }) => {
//   const [openIndex, setOpenIndex] = useState(0);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   return (
//     <div className="space-y-4">
//       {faqs.map((faq, index) => (
//         <motion.div
//           key={index}
//           className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//         >
//           <h3>
//             <button
//               onClick={() => toggleAccordion(index)}
//               className="flex justify-between items-center w-full px-6 py-5 text-left text-lg font-semibold text-gray-800 hover:bg-blue-50 transition-all duration-300"
//               aria-expanded={openIndex === index}
//             >
//               <span className="flex items-center gap-3">
//                 <span className="text-xl">
//                   {faq.icon}
//                 </span>
//                 {faq.question}
//               </span>
//               {openIndex === index ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-blue-600" />}
//             </button>
//           </h3>

//           <div
//             className={openIndex === index ? "block" : "hidden"}
//           >
//             <div className="px-6 pb-5 text-gray-700">
//               {faq.answer}
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// // Enhanced Enrollment Modal
// const EnrollmentModal = ({ course, isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: course.title,
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   useEffect(() => {
//     if (isOpen) {
//       setFormData({ name: "", email: "", phone: "", course: course.title });
//       setErrors({});
//       setSubmitStatus(null);
//     }
//   }, [isOpen]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
//       newErrors.phone = "Please enter a valid 10-digit phone number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsSubmitting(true);

//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       console.log("Form submitted:", formData);
//       setSubmitStatus('success');
//     } catch (error) {
//       setSubmitStatus('error');
//       console.error("Submission error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <motion.div 
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="modal-title"
//     >
//       <motion.div 
//         className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h3 id="modal-title" className="text-xl font-bold text-gray-800">
//             {submitStatus === 'success' ? 'Enrollment Successful!' : `Enroll in ${course.title}`}
//           </h3>
//           <button 
//             onClick={onClose} 
//             className="text-gray-500 hover:text-gray-700 text-2xl"
//             aria-label="Close enrollment modal"
//           >
//             &times;
//           </button>
//         </div>

//         {submitStatus === 'success' ? (
//           <motion.div 
//             className="text-center py-6"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FaCheckCircle className="text-green-600 text-3xl" />
//             </div>
//             <p className="text-gray-700 mb-6">
//               Thank you for enrolling in {course.title}! We've sent a confirmation email with further instructions.
//             </p>
//             <button
//               onClick={onClose}
//               className="bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
//             >
//               Continue Browsing
//             </button>
//           </motion.div>
//         ) : (
//           <>
//             <div className="bg-blue-50 p-4 rounded-lg mb-4">
//               <h4 className="font-semibold text-blue-800">Course Details</h4>
//               <p className="text-blue-700">{course.duration} • {course.fee}</p>
//               <p className="text-sm text-blue-600 mt-1">Next batch starts on {course.nextBatch}</p>
//             </div>

//             <p className="text-gray-600 mb-6">Complete the form below to enroll in this course.</p>

//             {submitStatus === 'error' && (
//               <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4">
//                 There was an error processing your enrollment. Please try again.
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                     errors.name ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                   placeholder="Enter your full name"
//                   aria-invalid={errors.name ? "true" : "false"}
//                 />
//                 {errors.name && (
//                   <p className="mt-1 text-sm text-red-600">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                     errors.email ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                   placeholder="Enter your email"
//                   aria-invalid={errors.email ? "true" : "false"}
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                     errors.phone ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                   placeholder="Enter your phone number"
//                   aria-invalid={errors.phone ? "true" : "false"}
//                 />
//                 {errors.phone && (
//                   <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
//                 )}
//               </div>

//               <div className="pt-4">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 transition flex items-center justify-center"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <FaSpinner className="animate-spin mr-2" />
//                       Processing...
//                     </>
//                   ) : (
//                     `Enroll Now for ${course.fee}`
//                   )}
//                 </button>
//               </div>

//               <p className="text-center text-sm text-gray-500">
//                 Limited seats available. Your information is secure with us.
//               </p>
//             </form>
//           </>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// };

// // Loading Skeleton Component
// const LoadingSkeleton = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <div className="h-96 bg-gray-300 animate-pulse"></div>
//       <div className="max-w-6xl mx-auto px-6 w-full -mt-24">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//           {[1, 2, 3].map(item => (
//             <div key={item} className="bg-white rounded-xl shadow p-5 h-24 animate-pulse"></div>
//           ))}
//         </div>

//         <div className="mt-12">
//           <div className="h-8 w-64 bg-gray-300 rounded animate-pulse mb-6"></div>
//           <div className="flex flex-wrap gap-3">
//             {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
//               <div key={item} className="h-8 w-24 bg-gray-300 rounded-full animate-pulse"></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Rating Stars Component
// const RatingStars = ({ rating }) => {
//   return (
//     <div className="flex items-center">
//       {[...Array(5)].map((_, i) => (
//         <FaStar
//           key={i}
//           className={i < rating ? "text-yellow-400" : "text-gray-300"}
//         />
//       ))}
//     </div>
//   );
// };

// // Share Course Component
// // const ShareCourse = ({ course }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const courseUrl = typeof window !== 'undefined' ? `${window.location.origin}/courses/${course.id}` : '';

// //   const shareOnSocialMedia = (platform) => {
// //     const text = `Check out this ${course.title} course on CareerBoost!`;
// //     let url = '';

// //     switch(platform) {
// //       case 'twitter':
// //         url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(courseUrl)}`;
// //         break;
// //       case 'facebook':
// //         url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(courseUrl)}`;
// //         break;
// //       case 'linkedin':
// //         url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(courseUrl)}`;
// //         break;
// //       default:
// //         return;
// //     }

// //     window.open(url, '_blank', 'width=600,height=400');
// //   };

// //   const copyToClipboard = () => {
// //     navigator.clipboard.writeText(courseUrl);
// //     alert('Link copied to clipboard!');
// //   };

// //   return (
// //     <div className="relative">
// //       <button 
// //         onClick={() => setIsOpen(!isOpen)}
// //         className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
// //       >
// //         <FaShare className="text-sm" />
// //         Share this course
// //       </button>

// //       {isOpen && (
// //         <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 z-10 w-48">
// //           <p className="text-sm font-medium text-gray-700 mb-2">Share via</p>
// //           <div className="flex justify-between mb-3">
// //             <button onClick={() => shareOnSocialMedia('twitter')} className="text-blue-400 hover:text-blue-600">
// //               <FaTwitter className="text-xl" />
// //             </button>
// //             <button onClick={() => shareOnSocialMedia('facebook')} className="text-blue-600 hover:text-blue-800">
// //               <FaFacebook className="text-xl" />
// //             </button>
// //             <button onClick={() => shareOnSocialMedia('linkedin')} className="text-blue-700 hover:text-blue-900">
// //               <FaLinkedin className="text-xl" />
// //             </button>
// //           </div>
// //           <button 
// //             onClick={copyToClipboard}
// //             className="w-full text-left text-sm text-gray-600 hover:text-gray-800 py-1"
// //           >
// //             Copy link
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// export default function CourseDetails() {
//   const { query, back } = useRouter();
//   const [course, setCourse] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState('curriculum');

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const foundCourse = coursesData.find((c) => String(c.id) === String(query.id));
//       setCourse(foundCourse);
//       setIsLoading(false);
//     }, 800);

//     return () => clearTimeout(timer);
//   }, [query.id]);

//   if (isLoading) {
//     return <LoadingSkeleton />;
//   }

//   if (!course) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
//         <div className="max-w-md text-center">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
//           <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been moved.</p>
//           <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition">
//             Browse All Courses
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Head>
//         <title>{course.title} | CareerBoost</title>
//         <meta
//           name="description"
//           content={`${course.title} detailed curriculum and modules`}
//         />
//       </Head>

//       {/* Navigation */}
//       <nav className="bg-white shadow-sm mt-18">
//         <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <button 
//               onClick={() => back()} 
//               className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition"
//             >
//               <FaArrowLeft className="mr-2" aria-hidden="true" />
//               Back to Courses
//             </button>
//             <div className="ml-4 text-sm text-gray-500">
//               Courses / <span className="text-blue-600">{course.title}</span>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero */}
//       <section className="relative h-80 md:h-96">
//         <Image
//           src={course.image}
//           alt={course.title}
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0 z-0"
//         />
//         <div className="absolute inset-0 bg-blue-600 opacity-70 z-0"></div>
//         <div className="w-full h-full flex items-center z-10 relative">
//           <div className="max-w-6xl mx-auto px-6 text-white w-full">
//             <motion.div 
//               className="flex items-center mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <span className="bg-white p-3 rounded-xl mr-3 shadow-lg">
//                 {course.icon}
//               </span>
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
//                 {course.title}
//               </h1>
//             </motion.div>
//             <motion.p 
//               className="max-w-2xl mb-6 opacity-90 text-sm md:text-base"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               {course.fullDescription}
//             </motion.p>
//             <motion.div 
//               className="flex flex-wrap gap-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               {/* <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
//               >
//                 Enroll Now
//               </button> */}
//               <button className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition">
//                 Download Syllabus
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-10 relative z-10">
//         <motion.div 
//           className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-3 transition hover:shadow-xl"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//         >
//           <div className="bg-blue-100 p-3 rounded-lg">
//             <FaClock className="text-blue-600 text-xl" aria-hidden="true" />
//           </div>
//           <div>
//             <p className="text-sm text-gray-600">Duration</p>
//             <p className="font-semibold text-gray-800">{course.duration}</p>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-3 transition hover:shadow-xl"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           transition={{ delay: 0.1 }}
//         >
//           <div className="bg-green-100 p-3 rounded-lg">
//             <FaMoneyBillWave className="text-green-600 text-xl" aria-hidden="true" />
//           </div>
//           <div>
//             <p className="text-sm text-gray-600">Stipend</p>
//             <p className="font-semibold text-gray-800">{course.stipend}</p>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-3 transition hover:shadow-xl"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           transition={{ delay: 0.2 }}
//         >
//           <div className="bg-purple-100 p-3 rounded-lg">
//             <FaGraduationCap className="text-purple-600 text-xl" aria-hidden="true" />
//           </div>
//           <div>
//             <p className="text-sm text-gray-600">Education</p>
//             <p className="font-semibold text-gray-800">{course.education}</p>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-3 transition hover:shadow-xl"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           transition={{ delay: 0.3 }}
//         >
//           <div className="bg-yellow-100 p-3 rounded-lg">
//             <FaMapMarkerAlt className="text-yellow-600 text-xl" aria-hidden="true" />
//           </div>
//           <div>
//             <p className="text-sm text-gray-600">Mode</p>
//             <p className="font-semibold text-gray-800">{course.mode}</p>
//           </div>
//         </motion.div>
//       </section>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
//         <div className="md:col-span-2">
//           {/* Tab Navigation */}
//           <div className="border-b border-gray-200 mb-8">
//             <nav className="flex space-x-8">
//               {['curriculum', 'reviews', 'faqs'].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`py-4 px-1 font-medium text-sm border-b-2 ${
//                     activeTab === tab
//                       ? 'border-blue-500 text-blue-600'
//                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           {/* Tab Content */}
//           {activeTab === 'curriculum' && (
//             <>
//               {/* Skills */}
//               <motion.section 
//                 className="mb-12"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//               >
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//                   <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full" aria-hidden="true"></span>
//                   Key Skills You'll Learn
//                 </h2>
//                 <div className="flex flex-wrap gap-3">
//                   {course.skills.map((skill, index) => (
//                     <motion.span
//                       key={index}
//                       className="px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition flex items-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {skill.icon}
//                       {skill.name}
//                     </motion.span>
//                   ))}
//                 </div>
//               </motion.section>

//               {/* Tools */}
//               <motion.section 
//                 className="mb-12"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//               >
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//                   <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full" aria-hidden="true"></span>
//                   Tools & Technologies
//                 </h2>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                   {course.tools.map((tool, index) => (
//                     <motion.div 
//                       key={index} 
//                       className="bg-white rounded-xl p-4 text-center shadow hover:shadow-md transition flex flex-col items-center"
//                       whileHover={{ y: -5 }}
//                     >
//                       <span className="text-2xl mb-2">{tool.icon}</span>
//                       <p className="font-medium text-gray-800">{tool.name}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.section>

//               {/* Curriculum */}
//               <motion.section 
//                 className="mb-12"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//               >
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//                   <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full" aria-hidden="true"></span>
//                   Step-wise Curriculum
//                 </h2>
//                 <CurriculumAccordion curriculum={course.curriculum} />
//               </motion.section>

//               {/* Outcomes */}
//               <motion.section 
//                 className="mb-12"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//               >
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//                   <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full" aria-hidden="true"></span>
//                   Program Benefits
//                 </h2>
//                 <div className="grid sm:grid-cols-2 gap-6">
//                   {course.outcomes.map((outcome, index) => (
//                     <motion.div
//                       key={index}
//                       className="bg-white rounded-xl shadow p-6 flex items-start gap-3 hover:shadow-md transition group"
//                       initial="hidden"
//                       whileInView="visible"
//                       viewport={{ once: true }}
//                       variants={fadeIn}
//                       transition={{ delay: index * 0.1 }}
//                     >
//                       <FaCheckCircle className="text-green-500 text-xl mt-0.5 flex-shrink-0" aria-hidden="true" />
//                       <span className="text-gray-700">{outcome}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.section>
//             </>
//           )}

//           {activeTab === 'reviews' && (
//             <motion.section 
//               className="mb-12"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeIn}
//             >
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Reviews</h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 {course.reviews.map((review, index) => (
//                   <motion.div 
//                     key={index} 
//                     className="bg-white rounded-xl shadow-lg p-6"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={fadeIn}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <div className="flex items-center mb-4">
//                       <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden flex items-center justify-center">
//                         <FaUserTie className="text-xl text-gray-500" />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-gray-800">{review.name}</h4>
//                         <p className="text-gray-600 text-sm">{review.role}</p>
//                       </div>
//                     </div>
//                     <RatingStars rating={review.rating} />
//                     <p className="text-gray-700 mt-4">{review.comment}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.section>
//           )}

//           {activeTab === 'faqs' && (
//             <motion.section 
//               className="mb-12"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeIn}
//             >
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
//               <FAQAccordion faqs={course.faqs} />
//             </motion.section>
//           )}
//         </div>

//         {/* Sidebar */}
//         <div className="md:col-span-1">
//           <div className="sticky top-24 space-y-6">
//             <motion.div 
//               className="bg-white rounded-2xl shadow-lg p-6"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//             >
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Program Summary</h3>
//               <div className="space-y-4">
//                 <div className="">
//                   <p className="text-gray-600">Duration:</p>
//                   <p className="font-semibold">{course.duration}</p>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Program Fee:</span>
//                   <span className="font-semibold text-blue-600 flex items-center">
//                     <FaRupeeSign size={12} /> {course.fee}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Stipend:</span>
//                   <span className="font-semibold text-green-600">{course.stipend}</span>
//                 </div>
//                 <div className="">
//                   <p className="text-gray-600">Education:</p>
//                   <p className="font-semibold">{course.education}</p>
//                 </div>
//                 <div className="">
//                   <p className="text-gray-600">Mode:</p>
//                   <p className="font-semibold">{course.mode}</p>
//                 </div>
//                 <div className="pt-4 border-t border-gray-200">
//                   {/* <button 
//                     onClick={() => setIsModalOpen(true)}
//                     className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                   >
//                     Enroll Now
//                   </button> */}
//                   <p className="text-center text-sm text-gray-500 mt-3">Limited seats available</p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div 
//               className="bg-white rounded-2xl shadow-lg p-6"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               transition={{ delay: 0.1 }}
//             >
//               <div className="space-y-4">
//                 {/* <div className="flex items-center gap-3">
//                   <FaRegCalendarAlt className="text-blue-500" />
//                   <div>
//                     <p className="text-sm text-gray-600">Next Batch</p>
//                     <p className="font-semibold text-gray-800">{course.nextBatch}</p>
//                   </div>
//                 </div> */}
//                 <div className="flex items-center gap-3">
//                   <FaClock className="text-blue-500" />
//                   <div>
//                     <p className="text-sm text-gray-600">Schedule</p>
//                     <p className="font-semibold text-gray-800">{course.schedule}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <FaMapMarkerAlt className="text-blue-500" />
//                   <div>
//                     <p className="text-sm text-gray-600">Mode</p>
//                     <p className="font-semibold text-gray-800">{course.mode}</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div 
//               className="bg-blue-50 rounded-2xl p-6 text-center"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={scaleIn}
//               transition={{ delay: 0.2 }}
//             >
//               <h3 className="text-lg font-bold text-blue-800 mb-3">Need help deciding?</h3>
//               <p className="text-blue-700 mb-4">Talk to our program counsellor</p>
//               <button className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition w-full">
//                 Request a Callback
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Enroll CTA */}
//       <section className="bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="max-w-6xl mx-auto px-6 py-16 text-center text-white">
//           <motion.h3 
//             className="text-3xl font-bold mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             Ready to Start Your Career?
//           </motion.h3>
//           <motion.p 
//             className="opacity-90 mb-6 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//           >
//             Enroll today, complete the training, receive guaranteed internship with stipend,
//             and unlock placement opportunities with our partner companies.
//           </motion.p>
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             {/* <button
//               onClick={() => setIsModalOpen(true)}
//               className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
//             >
//               Enroll Now
//             </button> */}
//             <button className="border border-white text-white font-semibold px-8 py-3 rounded-xl shadow hover:bg-white hover:text-blue-700 transition">
//               Schedule a Mentor Call
//             </button>
//           </motion.div>
//           <p className="mt-4 text-blue-100 text-sm">Limited seats available</p>
//         </div>
//       </section>

//       {/* Enrollment Modal */}
//       {/* <AnimatePresence>
//         <EnrollmentModal 
//           course={course} 
//           isOpen={isModalOpen} 
//           onClose={() => setIsModalOpen(false)} 
//         />
//       </AnimatePresence> */}
//     </div>
//   );
// }











import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaClock,
  FaCertificate,
  FaArrowLeft,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaChartLine,
  FaSpinner,
  FaUsers,
  FaProjectDiagram,
  FaStar,
  FaUserTie,
  FaGraduationCap,
  FaBriefcase,
  FaMoneyBillWave,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaShare,
  FaBook,
  FaTools,
  FaHandshake,
  FaCode,
  FaServer,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaGlobe,
  FaAward,
  FaRocket,
  FaLightbulb,
  FaQuestionCircle,
  FaRupeeSign,
  FaUniversity,
} from "react-icons/fa";
import axios from "axios";


// MASTER DATA
const coursesData = [
  {
    id: 1,
    title: "Web Development Internship Program",
    image: "/Team.jpeg",
    fullDescription: `Our comprehensive Web Development Internship Program is designed to take you from beginner to job-ready in just 4 weeks. This program combines intensive training with real-world project experience, followed by a guaranteed internship opportunity. You'll master the fundamentals of modern web development including HTML5, CSS3, JavaScript, and React while building a professional portfolio.`,
    duration: "4 weeks training + 2 months internship",
    fee: "9,999",
    // Removed discount-related fields
    internship: "Guaranteed Internship with Stipend",
    education: "12th Pass or Graduation in any stream",
    stipend: "₹5,000 - ₹8,000 per month",
    outcomes: [
      "Build responsive websites from scratch",
      "Create reusable React components",
      "Connect to APIs and handle application state",
      "Deploy applications to production environments",
      "Implement modern UI/UX principles",
      "Gain real work experience through internship",
      "Receive internship certificate and recommendation letter",
    ],
    skills: [
      { name: "HTML5", icon: <FaCode className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCode className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaCode className="text-yellow-500" /> },
      { name: "React", icon: <FaLaptopCode className="text-blue-400" /> },
      { name: "Git & GitHub", icon: <FaCode className="text-gray-700" /> },
      { name: "API/REST", icon: <FaServer className="text-green-500" /> },
      { name: "Responsive Design", icon: <FaMobile className="text-purple-500" /> },
      { name: "Deployment", icon: <FaCloud className="text-blue-300" /> },
    ],
    curriculum: [
      {
        step: 1,
        title: "Week 1: HTML & CSS Fundamentals",
        icon: <FaCode className="text-orange-500" />,
        topics: [
          "Semantic HTML, forms & accessibility",
          "CSS selectors, box model, flexbox",
          "Responsive layouts, media queries",
          "CSS frameworks: Bootstrap and Tailwind",
          "Building a complete landing page",
        ],
      },
      {
        step: 2,
        title: "Week 2: JavaScript Essentials",
        icon: <FaCode className="text-yellow-500" />,
        topics: [
          "ES6 syntax, arrays/objects, functions",
          "DOM manipulation & events",
          "Fetch API & basic async patterns",
          "Modern JavaScript features",
          "Building interactive web applications",
        ],
      },
      {
        step: 3,
        title: "Week 3: React Basics",
        icon: <FaLaptopCode className="text-blue-400" />,
        topics: [
          "Components, props, state, effects",
          "Routing & reusable UI patterns",
          "Calling APIs, loading/error states",
          "State management fundamentals",
          "Building a single page application",
        ],
      },
      {
        step: 4,
        title: "Week 4: Project & Deployment + Internship Preparation",
        icon: <FaCloud className="text-blue-300" />,
        topics: [
          "Capstone project (SPA with API)",
          "Git workflow & code reviews",
          "Deploy on Vercel/Netlify",
          "Internship onboarding process",
          "Professional communication training",
        ],
      },
    ],
    icon: <FaLaptopCode className="text-2xl text-blue-600" />,
    projects: "4+ Real Projects + Live Internship Project",
    mentorship: "1:1 Mentorship Sessions + Workplace Mentoring",
    level: "Beginner to Advanced",
    schedule: "Weekdays: 9:30 PM-6:30 PM | Weekend: closed",
    // nextBatch: "15 January 2024",
    mode: "Online & Offline (Hybrid Mode Available)",
    placementRate: "92%",
    averagePackage: "₹6-10 LPA",
    reviews: [
      {
        name: "Rahul Sharma",
        role: "Frontend Developer at TechCorp",
        rating: 5,
        comment: "The internship program gave me real work experience that helped me secure a job immediately after completion!",
        avatar: "/avatar1.jpg",
      },
      {
        name: "Priya Patel",
        role: "Web Developer",
        rating: 5,
        comment: "Not only did I learn web development, but the stipend helped me support myself during the training period.",
        avatar: "/avatar2.jpg",
      },
    ],
    // instructors: [
    //   {
    //     name: "Amit Kumar",
    //     role: "Senior Web Developer",
    //     experience: "8+ years",
    //     bio: "Former lead developer at Amazon with expertise in React and Node.js",
    //     linkedin: "https://linkedin.com",
    //     avatar: "/instructor1.jpg",
    //   },
    //   {
    //     name: "Neha Singh",
    //     role: "UI/UX Specialist",
    //     experience: "6+ years",
    //     bio: "Worked with multiple startups to build beautiful and functional web applications",
    //     linkedin: "https://linkedin.com",
    //     avatar: "/instructor2.jpg",
    //   },
    // ],
    // placementPartners: [
    //   { name: "TechMahindra", logo: "/company1.png" },
    //   { name: "Infosys", logo: "/company2.png" },
    //   { name: "Wipro", logo: "/company3.png" },
    //   { name: "HCL", logo: "/company4.png" },
    //   { name: "TCS", logo: "/company5.png" },
    // ],
    faqs: [
      {
        question: "What are the education requirements for this program?",
        answer: "You need to have completed at least 12th standard or be pursuing any graduation stream. No technical background is required.",
        icon: <FaUniversity className="text-blue-500" />
      },
      {
        question: "Will I receive a stipend during the internship?",
        answer: "Yes, based on your performance during the training period, you will receive a stipend ranging from ₹5,000 to ₹8,000 per month during the internship.",
        icon: <FaMoneyBillWave className="text-green-500" />
      },
      {
        question: "Can I choose between online and offline mode?",
        answer: "Yes, we offer both online and offline options. You can choose the mode that works best for you.",
        icon: <FaMapMarkerAlt className="text-purple-500" />
      },
      {
        question: "Is the internship guaranteed after training?",
        answer: "Yes, upon successful completion of the training program, you are guaranteed an internship placement with one of our partner companies.",
        icon: <FaHandshake className="text-yellow-500" />
      },
    ],
    tools: [
      { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
      { name: "Git", icon: <FaCode className="text-orange-500" /> },
      { name: "Chrome DevTools", icon: <FaGlobe className="text-yellow-500" /> },
      { name: "Figma", icon: <FaRocket className="text-purple-500" /> },
      { name: "Netlify", icon: <FaCloud className="text-blue-300" /> },
      { name: "Vercel", icon: <FaCloud className="text-black" /> },
    ],
  },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Enhanced Accordion Component
const CurriculumAccordion = ({ curriculum }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4">
      {curriculum.map((item, index) => (
        <motion.div
          key={item.step}
          className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3>
            <button
              id={`accordion-${item.step}-heading`}
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full px-6 py-5 text-left text-lg font-semibold text-gray-800 hover:bg-blue-50 transition-all duration-300"
              aria-expanded={openIndex === index}
              aria-controls={`accordion-${item.step}-content`}
            >
              
              <span className="flex items-center gap-3">
                {/* <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  
                  {item.icon}
                </span> */}
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border-2 border-blue-200">
  {item.icon}
</span>
                {item.title}
              </span>
              {openIndex === index ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-blue-600" />}
            </button>
          </h3>

          <div
            id={`accordion-${item.step}-content`}
            role="region"
            aria-labelledby={`accordion-${item.step}-heading`}
            className={openIndex === index ? "block" : "hidden"}
          >
            <div className="px-6 pb-5">
              <ul className="space-y-2">
                {item.topics.map((topic, j) => (
                  <motion.li
                    key={j}
                    className="flex items-start text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.1 }}
                  >
                    <FaCheckCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" aria-hidden="true" />
                    <span>{topic}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// FAQ Accordion Component
const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Flatten all question objects from the nested `question` arrays
  const flattenedFAQs = faqs.flatMap((faq) => faq.question);

  return (
    <div className="space-y-4">
      {flattenedFAQs.map((q, index) => (
        <motion.div
          key={q._id || index}
          className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full px-6 py-5 text-left text-lg font-semibold text-gray-800 hover:bg-blue-50 transition-all duration-300"
              aria-expanded={openIndex === index}
            >
              <span className="flex items-center gap-3">
                {q.icon && (
                  <img
                    src={q.icon}
                    alt="icon"
                    className="w-6 h-6 object-contain"
                  />
                )}
                {q.question}
              </span>
              {openIndex === index ? (
                <FaChevronUp className="text-blue-600" />
              ) : (
                <FaChevronDown className="text-blue-600" />
              )}
            </button>
          </h3>

          <div className={openIndex === index ? "block" : "hidden"}>
            <div className="px-6 pb-5 text-gray-700">{q.answer}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Enrollment Modal
const EnrollmentModal = ({ course, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: course.title,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);



  useEffect(() => {
    if (isOpen) {
      setFormData({ name: "", email: "", phone: "", course: course.title });
      setErrors({});
      setSubmitStatus(null);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 id="modal-title" className="text-xl font-bold text-gray-800">
            {submitStatus === 'success' ? 'Enrollment Successful!' : `Enroll in ${course.title}`}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close enrollment modal"
          >
            &times;
          </button>
        </div>

        {submitStatus === 'success' ? (
          <motion.div
            className="text-center py-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-green-600 text-3xl" />
            </div>
            <p className="text-gray-700 mb-6">
              Thank you for enrolling in {course.title}! We've sent a confirmation email with further instructions.
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Continue Browsing
            </button>
          </motion.div>
        ) : (
          <>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-800">Course Details</h4>
              <p className="text-blue-700">{course.duration} • {course.fee}</p>
              <p className="text-sm text-blue-600 mt-1">Next batch starts on {course.nextBatch}</p>
            </div>

            <p className="text-gray-600 mb-6">Complete the form below to enroll in this course.</p>

            {submitStatus === 'error' && (
              <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4">
                There was an error processing your enrollment. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your full name"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your email"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your phone number"
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 transition flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    `Enroll Now for ${course.fee}`
                  )}
                </button>
              </div>

              <p className="text-center text-sm text-gray-500">
                Limited seats available. Your information is secure with us.
              </p>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

// Loading Skeleton Component
const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="h-96 bg-gray-300 animate-pulse"></div>
      <div className="max-w-6xl mx-auto px-6 w-full -mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map(item => (
            <div key={item} className="bg-white rounded-xl shadow p-5 h-24 animate-pulse"></div>
          ))}
        </div>

        <div className="mt-12">
          <div className="h-8 w-64 bg-gray-300 rounded animate-pulse mb-6"></div>
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
              <div key={item} className="h-8 w-24 bg-gray-300 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Rating Stars Component
const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

// Share Course Component
// const ShareCourse = ({ course }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const courseUrl = typeof window !== 'undefined' ? `${window.location.origin}/courses/${course.id}` : '';

//   const shareOnSocialMedia = (platform) => {
//     const text = `Check out this ${course.title} course on CareerBoost!`;
//     let url = '';

//     switch(platform) {
//       case 'twitter':
//         url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(courseUrl)}`;
//         break;
//       case 'facebook':
//         url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(courseUrl)}`;
//         break;
//       case 'linkedin':
//         url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(courseUrl)}`;
//         break;
//       default:
//         return;
//     }

//     window.open(url, '_blank', 'width=600,height=400');
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(courseUrl);
//     alert('Link copied to clipboard!');
//   };

//   return (
//     <div className="relative">
//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
//       >
//         <FaShare className="text-sm" />
//         Share this course
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 z-10 w-48">
//           <p className="text-sm font-medium text-gray-700 mb-2">Share via</p>
//           <div className="flex justify-between mb-3">
//             <button onClick={() => shareOnSocialMedia('twitter')} className="text-blue-400 hover:text-blue-600">
//               <FaTwitter className="text-xl" />
//             </button>
//             <button onClick={() => shareOnSocialMedia('facebook')} className="text-blue-600 hover:text-blue-800">
//               <FaFacebook className="text-xl" />
//             </button>
//             <button onClick={() => shareOnSocialMedia('linkedin')} className="text-blue-700 hover:text-blue-900">
//               <FaLinkedin className="text-xl" />
//             </button>
//           </div>
//           <button 
//             onClick={copyToClipboard}
//             className="w-full text-left text-sm text-gray-600 hover:text-gray-800 py-1"
//           >
//             Copy link
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// Transform curriculum data from API into accordion-friendly format

export default function CourseDetails() {
  const { query, back } = useRouter();
  const [course, setCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [faqData, setFaqData] = useState([]);
  const [activeTab, setActiveTab] = useState('curriculum');
  const [internshipData, setInternshipData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    const fetchInternshipData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`https://landing-page-yclw.vercel.app/api/internship/${id}`);
        if (res.data.success) {
          setInternshipData(res.data.data);
        }
        console.log("Fetched Internship Data:", res.data.data);
      } catch (err) {
        console.error("Error fetching internship data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInternshipData();
  }, [id]);


  useEffect(() => {
    const fetchReview = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`https://landing-page-yclw.vercel.app/api/review`);
        if (res.data.success) {
          setReviewData(res.data.data);
        }
        console.log("Fetched Review Data:", res.data.data);
      } catch (err) {
        console.error("Error fetching review data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReview();
  }, []);


  useEffect(() => {
    const fetchFaq = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`https://landing-page-yclw.vercel.app/api/faq`);
        if (res.data.success) {
          const filteredFaqs = res.data.data.filter(
            (faq) => faq.module === "Internship"
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





  //   if (isLoading) {
  //     return <LoadingSkeleton />;
  //   }

  // if (!isLoading && (!internshipData || internshipData.length === 0)) {
  //     return (
  //       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
  //         <div className="max-w-md text-center">
  //           <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
  //           <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been moved.</p>
  //           <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition">
  //             Browse All Courses
  //           </Link>
  //         </div>
  //       </div>
  //     );
  //   }



  if (isLoading || !internshipData) {
    return <LoadingSkeleton />;
  }

  if (!isLoading && Array.isArray(internshipData) && internshipData.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">
            The course you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }


  const transformedCurriculum =
    internshipData?.curriculum?.map((item, index) => ({
      step: index + 1,
      title: item.currTitle,
      icon: (
        <img
          src={item.currIcon}
          alt={item.currTitle}
         className="w-full h-full object-fit rounded-full"
        />
      ),
      topics: item.currDescription || [],
    })) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{internshipData.title} | CareerBoost</title>
        <meta
          name="description"
          content={`${internshipData.title} detailed curriculum and modules`}
        />
      </Head>


      {/* Navigation - Fixed for mobile */}
      <nav className="bg-white shadow-sm mt-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center  gap-2">
            <div className="flex items-center">
              <button
                onClick={() => back()}
                className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition text-sm sm:text-base"
              >
                <FaArrowLeft className="mr-2 w-4 h-4" aria-hidden="true" />
                Back to Courses
              </button>
            </div>
            <div className="text-xs sm:text-sm text-gray-500 ml-0 sm:ml-4 mt-1 sm:mt-0">
              Courses / <span className="text-blue-600">{internshipData.title}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Fixed layout for mobile */}
      <section className="relative h-80 sm:h-72 md:h-80 lg:h-96">
        <Image
          src={internshipData.bannerImage}
          alt={internshipData.title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-blue-600 opacity-70 z-0"></div>
        <div className="w-full h-full flex items-center z-10 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-white w-full pt-8 pb-8">
            {/* Icon and Title - Fixed overlapping */}
            <motion.div
              className="flex items-start gap-3 sm:gap-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg flex-shrink-0 mt-1">
                <Image
                  src={internshipData.mainImage}
                  alt={internshipData.title}
                  width={40}
                  height={40}
                  className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                />
              </span>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight break-words">
                  {internshipData.title}
                </h1>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="max-w-2xl mb-6 opacity-90 text-sm sm:text-base leading-relaxed line-clamp-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {internshipData.description}
            </motion.p>

            {/* Download Button - Fixed visibility */}
            {/* <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >

              <button className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition text-sm sm:text-base min-w-[140px]">
                Download Syllabus {internshipData.syllabusLink}
              </button>
            </motion.div> */}

           
            {/* Download Button - Opens in new tab */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={() => {
                  if (internshipData.syllabusLink) {
                    window.open(internshipData.syllabusLink, '_blank', 'noopener,noreferrer');
                  } else {
                    console.error('No syllabus link available');
                    alert('Syllabus link not available');
                  }
                }}
                className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition text-sm sm:text-base min-w-[140px]"
              >
                Download Syllabus
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats - Responsive grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 -mt-8 sm:-mt-10 relative z-10">
        <motion.div
          className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-3 sm:p-5 flex items-center gap-2 sm:gap-3 transition hover:shadow-lg sm:hover:shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="bg-blue-100 p-2 sm:p-3 rounded-md sm:rounded-lg">
            <FaClock className="text-blue-600 text-lg sm:text-xl" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-600">Duration</p>
            <p className="font-semibold text-gray-800 text-sm sm:text-base">{internshipData.durationDetails}</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-3 sm:p-5 flex items-center gap-2 sm:gap-3 transition hover:shadow-lg sm:hover:shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-purple-100 p-2 sm:p-3 rounded-md sm:rounded-lg">
            <FaGraduationCap className="text-purple-600 text-lg sm:text-xl" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-600">Education</p>
            <div className="font-semibold text-gray-800 text-sm sm:text-base">
              {internshipData?.eligibility?.map((item, index) => (
                <span key={index} className="block leading-tight">{item}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-3 sm:p-5 flex items-center gap-2 sm:gap-3 transition hover:shadow-lg sm:hover:shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-yellow-100 p-2 sm:p-3 rounded-md sm:rounded-lg">
            <FaMapMarkerAlt className="text-yellow-600 text-lg sm:text-xl" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-600">Mode</p>
            <p className="font-semibold text-gray-800 text-sm sm:text-base">{internshipData.mode}</p>
          </div>
        </motion.div>
      </section>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {['curriculum', 'reviews', 'faqs'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}



            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === 'curriculum' && (
            <>
              {/* Skills */}
              <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full" aria-hidden="true"></span>
                  Key Skills You'll Learn
                </h2>
                <div className="flex flex-wrap gap-3">
                  {internshipData.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Skill Icon */}
                      <img
                        src={skill.skillIcon}
                        alt={skill.skillTitle}
                        className="w-5 h-5 object-contain"
                      />
                      {/* Skill Title */}
                      {skill.skillTitle}
                    </motion.span>
                  ))}
                </div>

              </motion.section>

              {/* Tools */}
              <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full" aria-hidden="true"></span>
                  Tools & Technologies
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {internshipData.tool.map((tool, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-4 text-center shadow hover:shadow-md transition flex flex-col items-center"
                      whileHover={{ y: -5 }}
                    >
                      <img
                        src={tool.toolIcon}
                        alt={tool.toolTitle}
                        className="w-10 h-10 object-contain"
                      />
                      <p className="font-medium text-gray-800">{tool.toolTitle}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Curriculum */}
              <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full" aria-hidden="true"></span>
                  Step-wise Curriculum
                </h2>
                <CurriculumAccordion curriculum={transformedCurriculum} />

              </motion.section>

              {/* Outcomes */}
              <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full" aria-hidden="true"></span>
                  Program Benefits
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {internshipData.benefits.map((outcome, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow p-6 flex items-start gap-3 hover:shadow-md transition group"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                      transition={{ delay: index * 0.1 }}
                    >
                      <FaCheckCircle className="text-green-500 text-xl mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">{outcome}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </>
          )}

          {activeTab === 'reviews' && (
            <motion.section
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Reviews</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {reviewData.map((review, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden flex items-center justify-center">
                        <FaUserTie className="text-xl text-gray-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{review.title}</h4>
                        <p className="text-gray-600 text-sm">{review.subtitle}</p>
                      </div>
                    </div>
                    <RatingStars rating={review.rating} />
                    <p className="text-gray-700 mt-4">{review.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'faqs' && (
            <motion.section
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <FAQAccordion faqs={faqData} />
            </motion.section>
          )}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-6">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Program Summary</h3>
              <div className="space-y-4">
                <div className="">
                  <p className="text-gray-600">Duration:</p>
                  <p className="font-semibold">{internshipData.durationDetails}</p>
                </div>

                <div className="flex justify-start items-center w-full gap-2">
                  <span className="text-gray-600">Program Fee:</span>
                  <span className="font-semibold text-blue-600 flex items-center gap-1">
                    <FaRupeeSign size={12} /> {internshipData.fee}
                  </span>
                </div>
                {/* <div className="flex justify-between items-center">
                  <span className="text-gray-600">Stipend:</span>
                  <span className="font-semibold text-green-600">{internshipData.stipend}</span>
                </div> */}
                <div className="">
                  <p className="text-gray-600">Education:</p>
                  <p className="font-semibold text-gray-800">{internshipData?.eligibility.map((item, index) => (
                    <span key={index} className="block">{item}</span>
                  ))}</p>
                </div>
                <div className="">
                  <p className="text-gray-600">Mode:</p>
                  <p className="font-semibold">{internshipData.mode}</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  {/* <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Enroll Now
                  </button> */}
                  <p className="text-center text-sm text-gray-500 mt-3">Limited seats available</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ delay: 0.1 }}
            >
              <div className="space-y-4">
                {/* <div className="flex items-center gap-3">
                  <FaRegCalendarAlt className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">Next Batch</p>
                    <p className="font-semibold text-gray-800">{course.nextBatch}</p>
                  </div>
                </div> */}
                <div className="flex items-center gap-3">
                  <FaClock className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">Schedule</p>
                    <p className="font-semibold text-gray-800">{internshipData.schedule}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">Mode</p>
                    <p className="font-semibold text-gray-800">{internshipData.mode}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-blue-50 rounded-2xl p-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold text-blue-800 mb-3">Need help deciding?</h3>
              <p className="text-blue-700 mb-4">Talk to our program counsellor</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition w-full">
                Request a Callback
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enroll CTA */}
      <section className="bg-gray-600">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center text-white">
          <motion.h3
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Career?
          </motion.h3>
          <motion.p
            className="opacity-90 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Enroll today, complete the training, receive guaranteed internship with stipend,
            and unlock placement opportunities with our partner companies.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
            >
              Enroll Now
            </button> */}
            <button className="border border-white text-white font-semibold px-8 py-3 rounded-xl shadow hover:bg-white hover:text-blue-700 transition">
              Schedule a Mentor Call
            </button>
          </motion.div>
          <p className="mt-4 text-blue-100 text-sm">Limited seats available</p>
        </div>
      </section>

      {/* Enrollment Modal */}
      {/* <AnimatePresence>
        <EnrollmentModal 
          course={course} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </AnimatePresence> */}
    </div>
  );
}