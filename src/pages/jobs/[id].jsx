// // components/SingleJobView.js
// import { useRouter } from 'next/router';
// import { motion } from 'framer-motion';
// import { 
//   FiMapPin, 
//   FiClock, 
//   FiDollarSign, 
//   FiBriefcase, 
//   FiArrowLeft,
//   FiCalendar,
//   FiShare2,
//   FiBookmark,
//   FiAlertTriangle,
//   FiCheckCircle,
//   FiAward,
//   FiUsers,
//   FiGlobe,
//   FiLayers,
//   FiCode,
//   FiTool,
//   FiArrowRight,
//   FiZap,
//   FiCoffee,
//   FiGift,
//   FiHome,
//   FiGlobe as FiRemote,
//   FiHeart,
//   FiDollarSign as FiStock,
//   FiUmbrella,
//   FiMonitor,
//   FiPieChart
// } from 'react-icons/fi';
// import Link from 'next/link';

// const jobOpenings = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     type: "Full-time",
//     location: "Remote",
//     salary: "$90,000 - $120,000",
//     department: "Engineering",
//     description: "Build beautiful, responsive interfaces with React and Next.js",
//     tags: ["React", "TypeScript", "Tailwind CSS"],
//     postedDate: "2023-11-15",
//     deadline: "2023-12-15",
//     details: {
//       about: "Join our engineering team to build cutting-edge web applications that serve millions of users worldwide. We value clean code, thoughtful architecture, and exceptional user experiences.",
//       responsibilities: [
//         "Develop and maintain user interfaces using React and Next.js",
//         "Collaborate with designers to implement pixel-perfect designs",
//         "Optimize applications for maximum performance",
//         "Write clean, maintainable, and efficient code",
//         "Participate in code reviews and architectural discussions"
//       ],
//       requirements: [
//         "3+ years of experience with React",
//         "Proficient in TypeScript",
//         "Experience with modern CSS frameworks (Tailwind CSS preferred)",
//         "Familiarity with RESTful APIs",
//         "Strong problem-solving skills",
//         "Experience with testing frameworks (Jest, Cypress)"
//       ],
//       requiredSkills: [
//         { name: "React", level: "Expert" },
//         { name: "TypeScript", level: "Advanced" },
//         { name: "Next.js", level: "Intermediate" },
//         { name: "Tailwind CSS", level: "Intermediate" },
//         { name: "GraphQL", level: "Basic" }
//       ],
//       benefits: [
//         { name: "Competitive salary", icon: <FiDollarSign />, highlight: true },
//         { name: "Equity options", icon: <FiStock />, highlight: true },
//         { name: "Fully remote work", icon: <FiRemote /> },
//         { name: "Flexible hours", icon: <FiClock /> },
//         { name: "Health insurance", icon: <FiHeart />, highlight: true },
//         { name: "Dental & vision", icon: <FiUmbrella /> },
//         { name: "Learning budget", icon: <FiBookmark /> },
//         { name: "Team retreats", icon: <FiGlobe /> },
//         { name: "New equipment", icon: <FiMonitor /> },
//         { name: "Wellness stipend", icon: <FiHeart /> },
//         { name: "Unlimited PTO", icon: <FiCoffee />, highlight: true },
//         { name: "401(k) matching", icon: <FiPieChart />, highlight: true }
//       ]
//     }
//   },
//   // ... other job objects with similar structure
// ];

// export default function SingleJobView() {
//   const router = useRouter();
//   const { id } = router.query;

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'short', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   const getDeadlineStatus = (deadline) => {
//     const today = new Date();
//     const deadlineDate = new Date(deadline);
//     const diffTime = deadlineDate - today;
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//     if (diffDays <= 0) {
//       return {
//         text: 'Closed',
//         className: 'bg-red-100 text-red-800',
//         icon: <FiAlertTriangle className="mr-1" />
//       };
//     } else if (diffDays <= 7) {
//       return {
//         text: `${diffDays} day${diffDays !== 1 ? 's' : ''} left`,
//         className: 'bg-orange-100 text-orange-800',
//         icon: <FiClock className="mr-1" />
//       };
//     } else {
//       return {
//         text: `${diffDays} days left`,
//         className: 'bg-green-100 text-green-800',
//         icon: <FiCalendar className="mr-1" />
//       };
//     }
//   };

//   if (!router.isReady) return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="animate-pulse text-gray-500">Loading job details...</div>
//     </div>
//   );

//   const jobId = Number(id);
//   const job = jobOpenings.find(job => job.id === jobId);

//   const similarJobs = jobOpenings.filter(
//     j => j.id !== jobId && 
//          j.department === job?.department && 
//          j.type === job?.type
//   ).slice(0, 3);

//   if (!job) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
//         <div className="max-w-md text-center bg-white p-8 rounded-xl shadow-lg border border-gray-200">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <FiAlertTriangle className="text-red-500 text-2xl" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-3">Job Not Found</h2>
//           <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or may have been removed.</p>
//           <button 
//             onClick={() => router.push('/careers')}
//             className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all flex items-center gap-2 mx-auto shadow-sm hover:shadow-md"
//           >
//             <FiArrowLeft /> Back to Careers
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const deadlineStatus = getDeadlineStatus(job.deadline);

//   const getDepartmentIcon = (department) => {
//     switch(department) {
//       case 'Engineering':
//         return <FiCode className="text-blue-500" />;
//       case 'Design':
//         return <FiLayers className="text-purple-500" />;
//       default:
//         return <FiTool className="text-gray-500" />;
//     }
//   };

//   const getSkillLevelColor = (level) => {
//     switch(level.toLowerCase()) {
//       case 'expert': return 'bg-green-100 text-green-800';
//       case 'advanced': return 'bg-blue-100 text-blue-800';
//       case 'intermediate': return 'bg-yellow-100 text-yellow-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm sticky top-0 z-10">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <button 
//               onClick={() => router.push('/careers')}
//               className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group"
//             >
//               <div className="p-1 group-hover:bg-blue-50 rounded-full transition-colors">
//                 <FiArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
//               </div>
//               <span>Back to Jobs</span>
//             </button>
//             <div className="flex gap-3">
//               <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
//                 <FiBookmark />
//               </button>
//               <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
//                 <FiShare2 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         <div className="max-w-6xl mx-auto">
//           {/* Job Overview Card */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-8"
//           >
//             <div className="p-6 md:p-8">
//               <div className="flex flex-col md:flex-row md:items-start gap-6">
// <div className="flex-1">
//   <div className="flex flex-wrap items-center gap-3 mb-4">
//     <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${
//       job.department === 'Engineering' ? 'bg-blue-100 text-blue-800' : 
//       job.department === 'Design' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
//     }`}>
//       {getDepartmentIcon(job.department)}
//       <span className="ml-1">{job.department}</span>
//     </span>
//     <span className="text-sm text-gray-500 flex items-center gap-1">
//       <FiCalendar className="text-gray-400" />
//       Posted: {formatDate(job.postedDate)}
//     </span>
//   </div>

//                   <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{job.title}</h1>
//                   <p className="text-lg text-gray-600 mb-6">{job.description}</p>

//                   <div className="flex flex-wrap gap-3 mb-6">
//                     <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
//                       <FiMapPin className="text-blue-600" />
//                       <span>{job.location}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
//                       <FiClock className="text-blue-600" />
//                       <span>{job.type}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
//                       <FiDollarSign className="text-blue-600" />
//                       <span>{job.salary}</span>
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap gap-2">
//                     {job.tags.map((tag, i) => (
//                       <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="md:w-72 flex flex-col gap-4">
//                   <div className={`px-4 py-2 rounded-lg text-center font-medium flex items-center justify-center ${deadlineStatus.className} border ${
//                     deadlineStatus.text === 'Closed' ? 'border-red-200' : 
//                     deadlineStatus.className.includes('orange') ? 'border-orange-200' : 'border-green-200'
//                   }`}>
//                     {deadlineStatus.icon}
//                     {deadlineStatus.text}
//                   </div>
//                   <Link href={`/apply?id=${job.id}`} passHref>
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
//                     >
//                       Apply Now <FiBriefcase />
//                     </motion.button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Job Details */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2 space-y-6">
//               {/* About the Role */}
// <motion.div 
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.1 }}
//   className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
// >
//   <div className="flex items-center gap-3 mb-6">
//     <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
//       <FiGlobe className="text-blue-600 text-xl" />
//     </div>
//     <h2 className="text-xl font-semibold text-gray-900">About the Role</h2>
//   </div>
//   <p className="text-gray-700 leading-relaxed">{job.details.about}</p>
// </motion.div>

//               {/* Responsibilities */}
// <motion.div 
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.2 }}
//   className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
// >
//   <div className="flex items-center gap-3 mb-6">
//     <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
//       <FiCheckCircle className="text-blue-600 text-xl" />
//     </div>
//     <h2 className="text-xl font-semibold text-gray-900">Key Responsibilities</h2>
//   </div>
//   <ul className="space-y-4">
//     {job.details.responsibilities.map((item, i) => (
//       <li key={i} className="flex items-start gap-3">
//         <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//           <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//         </div>
//         <span className="text-gray-700">{item}</span>
//       </li>
//     ))}
//   </ul>
// </motion.div>

//               {/* Requirements */}
// <motion.div 
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.3 }}
//   className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
// >
//   <div className="flex items-center gap-3 mb-6">
//     <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
//       <FiAward className="text-blue-600 text-xl" />
//     </div>
//     <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
//   </div>
//   <ul className="space-y-4">
//     {job.details.requirements.map((item, i) => (
//       <li key={i} className="flex items-start gap-3">
//         <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//           <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//         </div>
//         <span className="text-gray-700">{item}</span>
//       </li>
//     ))}
//   </ul>
// </motion.div>

//               {/* Required Skills */}
//               {job.details.requiredSkills && (
//                 <motion.div 
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                   className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
//                 >
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
//                       <FiZap className="text-blue-600 text-xl" />
//                     </div>
//                     <h2 className="text-xl font-semibold text-gray-900">Required Skills</h2>
//                   </div>
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                     {job.details.requiredSkills.map((skill, i) => (
//                       <div key={i} className="flex flex-col p-3 bg-gray-50 rounded-lg border border-gray-200">
//                         <span className="font-medium text-gray-800">{skill.name}</span>
//                         <span className={`text-xs px-2 py-0.5 rounded-full mt-1 w-fit ${getSkillLevelColor(skill.level)}`}>
//                           {skill.level}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </div>

//             {/* Sidebar */}
//             <div className="space-y-6">
//               {/* Benefits */}
// <motion.div 
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.4 }}
//   className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
// >
//   <div className="flex items-center gap-3 mb-6">
//     <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
//       <FiGift className="text-blue-600 text-xl" />
//     </div>
//     <h2 className="text-xl font-semibold text-gray-900">Benefits & Perks</h2>
//   </div>
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//     {job.details.benefits.map((benefit, i) => (
//       <div 
//         key={i} 
//         className={`flex items-start gap-3 p-3 rounded-lg border ${
//           benefit.highlight 
//             ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200' 
//             : 'bg-gray-50 border-gray-200'
//         }`}
//       >
//         <div className={`p-1.5 rounded-lg ${
//           benefit.highlight 
//             ? 'bg-blue-100 text-blue-600' 
//             : 'bg-gray-100 text-gray-600'
//         }`}>
//           {benefit.icon}
//         </div>
//         <span className="text-gray-700">{benefit.name}</span>
//       </div>
//     ))}
//   </div>
// </motion.div>

//               {/* Apply CTA */}
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"
//               >
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <FiBriefcase className="text-blue-600 text-2xl" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to apply?</h3>
//                   <p className="text-gray-600 mb-5">Submit your application before <span className="font-medium">{formatDate(job.deadline)}</span>.</p>
//                   <Link href={`/apply?id=${job.id}`} passHref>
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
//                     >
//                       Apply Now <FiBriefcase />
//                     </motion.button>
//                   </Link>
//                 </div>
//               </motion.div>

//               {/* Quick Facts */}
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
//               >
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                     <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
//                       <FiBriefcase className="text-gray-600" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Job Type</p>
//                       <p className="text-gray-700 font-medium">{job.type}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                     <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
//                       <FiMapPin className="text-gray-600" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Location</p>
//                       <p className="text-gray-700 font-medium">{job.location}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                     <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
//                       <FiDollarSign className="text-gray-600" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Salary</p>
//                       <p className="text-gray-700 font-medium">{job.salary}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                     <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
//                       <FiClock className="text-gray-600" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Deadline</p>
//                       <p className="text-gray-700 font-medium">{formatDate(job.deadline)}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>

//           {/* Similar Jobs */}
//           {similarJobs.length > 0 && (
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="mt-16"
//             >
//               <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-2xl font-bold text-gray-900">Similar Jobs</h2>
//                 <Link href="/careers" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
//                   View all jobs <FiArrowRight className="text-sm" />
//                 </Link>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {similarJobs.map((similarJob) => {
//                   const similarDeadlineStatus = getDeadlineStatus(similarJob.deadline);

//                   return (
//                     <Link href={`/jobs/${similarJob.id}`} key={similarJob.id} passHref>
//                       <motion.div
//                         whileHover={{ y: -5 }}
//                         className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all cursor-pointer h-full flex flex-col group"
//                       >
//                         <div className="p-6 flex-grow">
//                           <div className="flex flex-wrap items-center gap-3 mb-4">
//                             <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
//                               similarJob.department === 'Engineering' ? 'bg-blue-100 text-blue-800' : 
//                               similarJob.department === 'Design' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
//                             }`}>
//                               {getDepartmentIcon(similarJob.department)}
//                               <span className="ml-1">{similarJob.department}</span>
//                             </span>
//                             <span className="text-xs text-gray-500 flex items-center gap-1">
//                               <FiClock className="text-gray-400" />
//                               {similarJob.type}
//                             </span>
//                           </div>

//                           <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{similarJob.title}</h3>
//                           <p className="text-gray-600 mb-4 line-clamp-2">
//                             {similarJob.description}
//                           </p>
//                           <div className="flex flex-wrap gap-2 mb-4">
//                             {similarJob.tags.slice(0, 3).map((tag, i) => (
//                               <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200">
//                                 {tag}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
//                           <div className="flex items-center justify-between">
//                             <span className="text-sm text-gray-500 flex items-center gap-1">
//                               <FiMapPin className="text-gray-400" />
//                               {similarJob.location}
//                             </span>
//                             <span className={`text-xs px-2 py-1 rounded-full ${similarDeadlineStatus.className} border ${
//                               similarDeadlineStatus.text === 'Closed' ? 'border-red-200' : 
//                               similarDeadlineStatus.className.includes('orange') ? 'border-orange-200' : 'border-green-200'
//                             }`}>
//                               {similarDeadlineStatus.text}
//                             </span>
//                           </div>
//                         </div>
//                       </motion.div>
//                     </Link>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }









// // components/SingleJobView.js
// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import {
//   FiMapPin, FiClock, FiDollarSign, FiBriefcase, FiArrowLeft,
//   FiCalendar, FiShare2, FiBookmark, FiAlertTriangle, FiCheckCircle,
//   FiAward, FiGlobe, FiLayers, FiCode, FiTool, FiArrowRight, FiZap,
//   FiGift
// } from 'react-icons/fi';
// import Link from 'next/link';

// export default function SingleJobView() {
//   const router = useRouter();
//   const { id } = router.query;

//   const [jobData, setJobData] = useState(null);
//   const [similarJobs, setSimilarJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch job by ID
//   useEffect(() => {
//     if (!id) return;
//     setLoading(true);

//     axios.get(`https://landing-page-yclw.vercel.app/api/job/${id}`)
//       .then(res => setJobData(res.data.data || null))
//       .catch(() => setJobData(null))
//       .finally(() => setLoading(false));
//   }, [id]);

//   // Fetch similar jobs
//   useEffect(() => {
//     if (!jobData) return;
//     axios.get(`https://landing-page-yclw.vercel.app/api/job`)
//       .then(res => {
//         const similar = res.data.data.filter(
//           j => j.department === jobData.department && j._id !== jobData._id
//         );
//         setSimilarJobs(similar);
//       })
//       .catch(() => setSimilarJobs([]));
//   }, [jobData]);

//   const formatDate = (date) => {
//     if (!date) return 'N/A';
//     try {
//       return new Date(date).toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//       });
//     } catch (e) {
//       console.error("Failed to parse date:", date, e);
//       return String(date); // ✅ fallback to raw value
//     }
//   };


//   const getDeadlineStatus = (deadline) => {
//     if (!deadline) return { text: "No deadline", className: "bg-gray-100 text-gray-800", icon: <FiCalendar /> };

//     const today = new Date();
//     const deadlineDate = new Date(deadline);
//     const diffTime = deadlineDate - today;
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//     if (diffDays <= 0) {
//       return { text: 'Closed', className: 'bg-red-100 text-red-800', icon: <FiAlertTriangle className="mr-1" /> };
//     } else if (diffDays <= 7) {
//       return { text: `${diffDays} day${diffDays !== 1 ? 's' : ''} left`, className: 'bg-orange-100 text-orange-800', icon: <FiClock className="mr-1" /> };
//     } else {
//       return { text: `${diffDays} days left`, className: 'bg-green-100 text-green-800', icon: <FiCalendar className="mr-1" /> };
//     }
//   };

//   const getDepartmentIcon = (department) => {
//     switch (department) {
//       case 'Engineering': return <FiCode className="text-blue-500" />;
//       case 'Design': return <FiLayers className="text-purple-500" />;
//       default: return <FiTool className="text-gray-500" />;
//     }
//   };

//   const getSkillLevelColor = (level) => {
//     switch (level?.toLowerCase()) {
//       case 'expert': return 'bg-green-100 text-green-800';
//       case 'advanced': return 'bg-blue-100 text-blue-800';
//       case 'intermediate': return 'bg-yellow-100 text-yellow-800';
//       default: return 'bg-orange-100 text-orange-800';
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
//         <div className="animate-pulse text-gray-500">Loading job details...</div>
//       </div>
//     );
//   }

//   if (!jobData) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
//         <div className="max-w-md text-center bg-white p-8 rounded-xl shadow-lg border border-gray-200">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <FiAlertTriangle className="text-red-500 text-2xl" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-3">Job Not Found</h2>
//           <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or may have been removed.</p>
//           <button
//             onClick={() => router.push('/careers')}
//             className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg transition-all flex items-center gap-2 mx-auto"
//           >
//             <FiArrowLeft /> Back to Careers
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const deadlineStatus = getDeadlineStatus(jobData.applicationDeadline);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm sticky top-0 z-10">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <button onClick={() => router.push('/careers')} className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
//             <FiArrowLeft /> <span>Back to Jobs</span>
//           </button>
//           <div className="flex gap-3">
//             <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg"><FiBookmark /></button>
//             <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg"><FiShare2 /></button>
//           </div>
//         </div>
//       </header>

//       {/* Main */}
//       <main className="container mx-auto px-4 py-8">
//         <div className="max-w-6xl mx-auto">
//           {/* Job Overview */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-8"
//           >
//             <div className="p-6 md:p-8">
//               <div className="flex flex-col md:flex-row md:items-start gap-6">
//                 <div className="flex-1">
//                   <div className="flex flex-wrap items-center gap-3 mb-4">
//                     <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${jobData.department === 'Engineering' ? 'bg-blue-100 text-blue-800' :
//                       jobData.department === 'Design' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
//                       }`}>
//                       {getDepartmentIcon(jobData.department)}
//                       <span className="ml-1">{jobData.department}</span>
//                     </span>
//                     <span className="text-sm text-gray-500 flex items-center gap-1">
//                       <FiCalendar className="text-gray-400" />
//                       Posted:
//                       <span className="date">{formatDate(jobData.createdAt)}</span>
//                     </span>
//                   </div>

//                   <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{jobData.title}</h1>
//                   <p className="text-lg text-gray-600 mb-6">{jobData.description}</p>

//                   <div className="flex flex-wrap gap-3 mb-6">
//                     <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
//                       <FiMapPin className="text-blue-600" />
//                       <span>{jobData.location}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
//                       <FiClock className="text-blue-600" />
//                       <span>{jobData.jobType}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
//                       <FiDollarSign className="text-blue-600" />
//                       <span>{jobData.salary}</span>
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap gap-2">
//                     {jobData.requiredSkills?.length > 0 && (
//                       <motion.div className="">
//                         {/* <h2 className="text-xl font-semibold mb-3 flex items-center gap-2"><FiZap /> Required Skills</h2> */}
//                         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                           {jobData.requiredSkills.map((skill) => (
//                             <div key={skill._id} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200">
//                               <p className="font-medium">{skill.title}</p>
//                               {/* <span className={`text-xs px-2 py-1 rounded-full ${getSkillLevelColor(skill.level)}`}>{skill.level}</span> */}
//                             </div>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="md:w-72 flex flex-col gap-4">
//                   <div className={`px-4 py-2 rounded-lg text-center font-medium flex items-center justify-center ${deadlineStatus.className} border ${deadlineStatus.text === 'Closed' ? 'border-red-200' :
//                     deadlineStatus.className.includes('orange') ? 'border-orange-200' : 'border-green-200'
//                     }`}>
//                     {deadlineStatus.icon}
//                     {deadlineStatus.text}
//                   </div>
//                   <Link href={`/apply?id=${jobData.id}`} passHref>
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
//                     >
//                       Apply Now <FiBriefcase />
//                     </motion.button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* About */}


//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
//                 <FiGlobe className="text-blue-600 text-xl" />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-900">About the Role</h2>
//             </div>
//             <p className="text-gray-700 leading-relaxed">{jobData.about}</p>
//           </motion.div>


//           {/* Responsibilities */}


//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
//                 <FiCheckCircle className="text-blue-600 text-xl" />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-900">Key Responsibilities</h2>
//             </div>
//             <ul className="space-y-4">
//               {jobData.keyResponsibilities?.map((res, i) => (
//                 <li key={i} className="flex items-start gap-3">
//                   <li key={i} className="flex items-start gap-3">
//                     <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                       <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//                     </div>
//                     <span className="text-gray-700">{res}</span>
//                   </li>

//                 </li>
//               ))}
//             </ul>
//           </motion.div>



//           {/* Required Skills */}
//           {jobData.requiredSkills && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
//                   <FiZap className="text-blue-600 text-xl" />
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-900">Required Skills</h2>
//               </div>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                 {jobData.requiredSkills.map((skill, i) => (
//                   <div key={i} className="flex flex-col p-3 bg-gray-50 rounded-lg border border-gray-200">
//                     <span className="font-medium text-gray-800">{skill.title}</span>
//                     <span className={`text-xs px-2 py-0.5 rounded-full mt-1 w-fit ${getSkillLevelColor(skill.level)}`}>
//                       {skill.level}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           )}






//           {/* Requirements */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
//                 <FiAward className="text-blue-600 text-xl" />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
//             </div>
//             <ul className="space-y-4">
//               {jobData.requirements.map((item, i) => (
//                 <li key={i} className="flex items-start gap-3">
//                   <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//                   </div>
//                   <span className="text-gray-700">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>



//         </div>


//          {/* Sidebar */}
//     <aside className="lg:w-80 flex-shrink-0 space-y-6 sticky top-24">
//       {/* Benefits & Perks */}
//       {jobData.benefits?.length > 0 && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
//         >
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
//               <FiGift className="text-blue-600 text-xl" />
//             </div>
//             <h2 className="text-xl font-semibold text-gray-900">Benefits & Perks</h2>
//           </div>
//           <div className="grid grid-cols-1 gap-3">
//             {jobData.benefits.map((benefit, i) => (
//               <div
//                 key={i}
//                 className={`flex flex-col gap-1 p-3 rounded-lg border ${
//                   benefit.highlight
//                     ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200'
//                     : 'bg-gray-50 border-gray-200'
//                 }`}
//               >
//                 <div
//                   className={`p-1.5 rounded-lg ${
//                     benefit.highlight
//                       ? 'bg-blue-100 text-blue-600'
//                       : 'bg-gray-100 text-gray-600'
//                   }`}
//                 >
//                   {benefit.icon}
//                 </div>
//                 <div className="text-gray-900 font-medium">{benefit.title}</div>
//                 {benefit.description && (
//                   <div className="text-gray-700 text-sm">{benefit.description}</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       )}

//       {/* Ready to Apply */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 }}
//         className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"
//       >
//         <div className="text-center">
//           <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <FiBriefcase className="text-blue-600 text-2xl" />
//           </div>
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to apply?</h3>
//           <p className="text-gray-600 mb-5">
//             Submit your application before{' '}
//             <span className="font-medium">
//               {formatDate(jobData.applicationDeadline || jobData.deadline)}
//             </span>.
//           </p>
//           <Link href={`/apply?id=${jobData.id}`} passHref>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
//             >
//               Apply Now <FiBriefcase />
//             </motion.button>
//           </Link>
//         </div>
//       </motion.div>

//       {/* Quick Facts */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6 }}
//         className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
//       >
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
//         <div className="space-y-3">
//           <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//             <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
//               <FiBriefcase className="text-gray-600" />
//             </div>
//             <div>
//               <p className="text-xs text-gray-500">Job Type</p>
//               <p className="text-gray-700 font-medium">{jobData.jobType}</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//             <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
//               <FiMapPin className="text-gray-600" />
//             </div>
//             <div>
//               <p className="text-xs text-gray-500">Location</p>
//               <p className="text-gray-700 font-medium">{jobData.location}</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//             <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
//               <FiDollarSign className="text-gray-600" />
//             </div>
//             <div>
//               <p className="text-xs text-gray-500">Salary</p>
//               <p className="text-gray-700 font-medium">{jobData.salary}</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//             <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
//               <FiClock className="text-gray-600" />
//             </div>
//             <div>
//               <p className="text-xs text-gray-500">Deadline</p>
//               <p className="text-gray-700 font-medium">
//                 {formatDate(jobData.applicationDeadline || jobData.deadline)}
//               </p>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </aside>

//         {/* Similar Jobs */}
//         {similarJobs.length > 0 && (
//           <motion.div className="mt-16">
//             <h2 className="text-2xl font-bold mb-6">Similar Jobs</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {similarJobs.map((job) => (
//                 <Link href={`/jobs/${job._id}`} key={job._id}>
//                   <motion.div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
//                     <h3 className="font-bold text-lg">{job.title}</h3>
//                     <p className="text-sm text-gray-500">{job.location} • {job.jobType}</p>
//                   </motion.div>
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </main>
//     </div>
//   );
// }






// components/SingleJobView.js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import {
  FiMapPin, FiClock, FiDollarSign, FiBriefcase, FiArrowLeft,
  FiCalendar, FiShare2, FiBookmark, FiAlertTriangle, FiCheckCircle,
  FiAward, FiGlobe, FiLayers, FiCode, FiTool, FiArrowRight, FiZap,
  FiGift
} from 'react-icons/fi';
import Link from 'next/link';

export default function SingleJobView() {
  const router = useRouter();
  const { id } = router.query;

  const [jobData, setJobData] = useState(null);
  const [similarJobs, setSimilarJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Fetch job by ID
  useEffect(() => {
    if (!id) return;
    setLoading(true);

    axios.get(`https://landing-page-yclw.vercel.app/api/job/${id}`)
      .then(res => setJobData(res.data.data || null))
      .catch(() => setJobData(null))
      .finally(() => setLoading(false));
  }, [id]);

  // Fetch similar jobs
  useEffect(() => {
    if (!jobData) return;
    axios.get(`https://landing-page-yclw.vercel.app/api/job`)
      .then(res => {
        const similar = res.data.data.filter(
          j => j.department === jobData.department && j._id !== jobData._id
        );
        setSimilarJobs(similar);
      })
      .catch(() => setSimilarJobs([]));
  }, [jobData]);

  const formatDate = (date) => {
    if (!date) return 'N/A';
    try {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      console.error("Failed to parse date:", date, e);
      return String(date);
    }
  };

  const getDeadlineStatus = (deadline) => {
    if (!deadline) return { text: "No deadline", className: "bg-gray-100 text-gray-800", icon: <FiCalendar /> };

    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
      return { text: 'Closed', className: 'bg-red-100 text-red-800', icon: <FiAlertTriangle className="mr-1" /> };
    } else if (diffDays <= 7) {
      return { text: `${diffDays} day${diffDays !== 1 ? 's' : ''} left`, className: 'bg-orange-100 text-orange-800', icon: <FiClock className="mr-1" /> };
    } else {
      return { text: `${diffDays} days left`, className: 'bg-green-100 text-green-800', icon: <FiCalendar className="mr-1" /> };
    }
  };

  const getDepartmentIcon = (department) => {
    switch (department) {
      case 'Engineering': return <FiCode className="text-blue-500" />;
      case 'Design': return <FiLayers className="text-purple-500" />;
      default: return <FiTool className="text-gray-500" />;
    }
  };

  const getSkillLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'expert': return 'bg-green-100 text-green-800';
      case 'advanced': return 'bg-blue-100 text-blue-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-orange-100 text-orange-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="animate-pulse text-gray-500">Loading job details...</div>
      </div>
    );
  }

  if (!jobData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="max-w-md text-center bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiAlertTriangle className="text-red-500 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Job Not Found</h2>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or may have been removed.</p>
          <button
            onClick={() => router.push('/careers')}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg transition-all flex items-center gap-2 mx-auto"
          >
            <FiArrowLeft /> Back to Careers
          </button>
        </div>
      </div>
    );
  }

  const deadlineStatus = getDeadlineStatus(jobData.applicationDeadline);

  return (
    <div className="min-h-screen mt-[80px]  bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => router.push('/careers')} className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <FiArrowLeft /> <span>Back to Jobs</span>
          </button>
          <div className="flex gap-3">
            <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg"><FiBookmark /></button>
            <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg"><FiShare2 /></button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Main Content - Left Side */}
          <div className="flex-1">
            {/* Job Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-8"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${jobData.department === 'Engineering' ? 'bg-blue-100 text-blue-800' :
                        jobData.department === 'Design' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                        {getDepartmentIcon(jobData.department)}
                        <span className="ml-1">{jobData.department}</span>
                      </span>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <FiCalendar className="text-gray-400" />
                        Posted:
                        <span className="date">{formatDate(jobData.createdAt)}</span>
                      </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{jobData.title}</h1>
                    <p className="text-lg text-gray-600 mb-6">{jobData.description}</p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                        <FiMapPin className="text-blue-600" />
                        <span>{jobData.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                        <FiClock className="text-blue-600" />
                        <span>{jobData.jobType}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                        <FiDollarSign className="text-blue-600" />
                        <span>{jobData.salary}</span>
                      </div>
                    </div>

                    {/* <div className="flex flex-wrap gap-2">
                      {jobData.requiredSkills?.length > 0 && (
                        <motion.div className="">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {jobData.requiredSkills.map((skill) => (
                              <div key={skill._id} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200">
                                <p className="font-medium">{skill.title}</p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div> */}

                    <div className="flex flex-wrap gap-2">
                      {jobData.requiredSkills?.length > 0 && (
                        <motion.div className="flex flex-wrap gap-2">
                          {jobData.requiredSkills.map((skill) => (
                            <div
                              key={skill._id}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200 whitespace-nowrap"
                            >
                              <p className="font-medium">{skill.title}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <div className="md:w-72 flex flex-col gap-4">
                    <div className={`px-4 py-2 rounded-lg text-center font-medium flex items-center justify-center ${deadlineStatus.className} border ${deadlineStatus.text === 'Closed' ? 'border-red-200' :
                      deadlineStatus.className.includes('orange') ? 'border-orange-200' : 'border-green-200'
                      }`}>
                      {deadlineStatus.icon}
                      {deadlineStatus.text}
                    </div>
                    <Link href={`/apply?id=${jobData._id}`} passHref>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                      >
                        Apply Now <FiBriefcase />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <FiGlobe className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">About the Role</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{jobData.about}</p>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Key Responsibilities</h2>
              </div>
              <ul className="space-y-4">
                {jobData.keyResponsibilities?.map((res, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700">{res}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Required Skills */}
            {/* {jobData.requiredSkills && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FiZap className="text-blue-600 text-xl" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Required Skills</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {jobData.requiredSkills.map((skill, i) => (
                    <div key={i} className="flex flex-col p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="font-medium text-gray-800">{skill.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full mt-1 w-fit ${getSkillLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )} */}


{jobData.requiredSkills && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
        <FiZap className="text-blue-600 text-xl" />
      </div>
      <h2 className="text-xl font-semibold text-gray-900">Required Skills</h2>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
      {jobData.requiredSkills
        .slice(0, showAllSkills ? jobData.requiredSkills.length : 4)
        .map((skill, i) => (
          <div key={i} className="flex flex-col p-3 bg-gray-50 rounded-lg border border-gray-200 min-w-0">
            <span className="font-medium text-gray-800 text-sm text-center truncate">{skill.title}</span>
            {/* <span className={`text-xs px-2 py-0.5 rounded-full mt-1 w-fit mx-auto ${getSkillLevelColor(skill.level)}`}>
              {skill.level}
            </span> */}
          </div>
        ))}
    </div>

    {/* Show More/Less Button */}
    {jobData.requiredSkills.length > 4 && (
      <div className="text-center mt-4">
        <button
          onClick={() => setShowAllSkills(!showAllSkills)}
          className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
        >
          {showAllSkills ? 'Show Less' : `+${jobData.requiredSkills.length - 4} More`}
        </button>
      </div>
    )}
  </motion.div>
)}

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <FiAward className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
              </div>
              <ul className="space-y-4">
                {jobData.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar - Right Side */}
          <aside className="lg:w-80 flex-shrink-0 space-y-6 sticky top-24 self-start">
            {/* Benefits & Perks */}
            {jobData.benefits?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FiGift className="text-blue-600 text-xl" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Benefits & Perks</h2>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {jobData.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className={`flex gap-1 p-3 rounded-lg border ${benefit.highlight
                          ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200'
                          : 'bg-gray-50 border-gray-200'
                        }`}
                    >
                      <div
                        className={`p-3 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${benefit.highlight
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-600'
                          }`}
                      >
                        <img src={benefit.icon} alt={benefit.title} className="w-5 h-5" />
                      </div>
                      <div>
                      <div className="text-gray-900 font-medium">{benefit.title}</div>
                      {benefit.description && (
                        <div className="text-gray-700 text-sm">{benefit.description}</div>
                      )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <FiBriefcase className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Job Type</p>
                    <p className="text-gray-700 font-medium">{jobData.jobType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-gray-700 font-medium">{jobData.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <FiDollarSign className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Salary</p>
                    <p className="text-gray-700 font-medium">{jobData.salary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <FiClock className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Deadline</p>
                    <p className="text-gray-700 font-medium">
                      {formatDate(jobData.applicationDeadline || jobData.deadline)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ready to Apply */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiBriefcase className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to apply?</h3>
                <p className="text-gray-600 mb-5">
                  Submit your application before{' '}
                  <span className="font-medium">
                    {formatDate(jobData.applicationDeadline || jobData.deadline)}
                  </span>.
                </p>
                <Link href={`/apply?id=${jobData._id}`} passHref>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    Apply Now <FiBriefcase />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </aside>
        </div>

        {/* Similar Jobs */}
        {/* {similarJobs.length > 0 && (
          <motion.div className="mt-16 ml-28">
            <h2 className="text-2xl font-bold mb-6">Similar Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarJobs.map((job) => (
                <Link href={`/jobs/${job._id}`} key={job._id}>
                  <motion.div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.location} • {job.jobType}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )} */}

        {similarJobs.length > 0 && (
          <motion.div className="mt-16 px-4 md:px-8 lg:ml-28 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-6">Similar Jobs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {similarJobs.map((job) => (
                <Link href={`/jobs/${job._id}`} key={job._id}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition text-left"
                  >
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <p className="text-sm text-gray-500">
                      {job.location} • {job.jobType}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

      </main>
    </div>
  );
}