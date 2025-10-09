// // components/JobListings.js
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import {
//   FiMapPin,
//   FiClock,
//   FiDollarSign,
//   FiBriefcase,
//   FiEye,
//   FiSearch,
//   FiCalendar,
//   FiFilter,
//   FiChevronDown,
//   FiAlertTriangle
// } from 'react-icons/fi';

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
//     postedDate: "2025-11-15",
//     deadline: "2023-12-15",
//     category: "job",
//     details: {
//       responsibilities: [
//         "Develop and maintain user interfaces using React and Next.js",
//         "Collaborate with designers to implement pixel-perfect designs",
//         "Optimize applications for maximum performance",
//         "Write clean, maintainable, and efficient code"
//       ],
//       requirements: [
//         "3+ years of experience with React",
//         "Proficient in TypeScript",
//         "Experience with modern CSS frameworks (Tailwind CSS preferred)",
//         "Familiarity with RESTful APIs",
//         "Strong problem-solving skills"
//       ]
//     }
//   },
//   {
//     id: 2,
//     title: "UX Design Intern",
//     type: "Internship",
//     location: "Hybrid (NYC)",
//     salary: "$25 - $35/hr",
//     department: "Design",
//     description: "Learn to create intuitive user experiences for our products",
//     tags: ["Figma", "User Research", "Prototyping"],
//     postedDate: "2023-11-10",
//     deadline: "2023-12-10",
//     category: "intern",
//     details: {
//       responsibilities: [
//         "Assist with user research and usability testing",
//         "Create wireframes and prototypes",
//         "Collaborate with product teams",
//         "Learn design system principles"
//       ],
//       requirements: [
//         "Portfolio showing design skills",
//         "Currently enrolled in design program",
//         "Basic Figma knowledge",
//         "Eagerness to learn"
//       ]
//     }
//   },
//   {
//     id: 3,
//     title: "DevOps Engineer",
//     type: "Contract",
//     location: "Remote",
//     salary: "$70 - $90/hr",
//     department: "Engineering",
//     description: "Build and maintain our cloud infrastructure",
//     tags: ["AWS", "Terraform", "Docker"],
//     postedDate: "2023-11-20",
//     deadline: "2023-12-20",
//     category: "job",
//     details: {
//       responsibilities: [
//         "Design, implement and maintain CI/CD pipelines",
//         "Manage cloud infrastructure (AWS)",
//         "Implement infrastructure as code",
//         "Monitor system performance"
//       ],
//       requirements: [
//         "Experience as DevOps Engineer",
//         "AWS knowledge",
//         "Containerization experience",
//         "Infrastructure as code skills"
//       ]
//     }
//   },
//   {
//     id: 4,
//     title: "Software Engineering Intern",
//     type: "Internship",
//     location: "Remote",
//     salary: "$30 - $40/hr",
//     department: "Engineering",
//     description: "Gain real-world experience building software",
//     tags: ["JavaScript", "React", "Node.js"],
//     postedDate: "2025-08-10",
//     deadline: "2025-09-10",
//     category: "intern",
//     details: {
//       responsibilities: [
//         "Assist with feature development",
//         "Write clean, maintainable code",
//         "Participate in code reviews",
//         "Learn agile methodologies"
//       ],
//       requirements: [
//         "Computer Science student",
//         "Basic programming knowledge",
//         "Eagerness to learn",
//         "Problem-solving skills"
//       ]
//     }
//   }
// ];


// // const [allData, setAllData] = useState([]);

// // const fetchDepartments = async () => {
// //   try {
// //     const response = await axios.get('https://landing-page-yclw.vercel.app/api/job');

// //     // Ensure we always get an array
// //     const jobs = Array.isArray(response.data)
// //       ? response.data
// //       : response.data.data || []; // in case API wraps it in { data: [...] }



// //     setAllData(jobs);
// //   } catch (error) {
// //     console.error('Error fetching departments:', error);
// //   }
// // };


// // useEffect(() => {
// //   fetchDepartments();
// // }, []);

// const Select = ({ options, icon, value, onChange, placeholder = "Select..." }) => (
//   <div className="relative">
//     <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//       {icon}
//     </div>
//     <select
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//     >
//       <option value="">{placeholder}</option>
//       {options.map(option => (
//         <option key={option} value={option}>{option}</option>
//       ))}
//     </select>
//     <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
//   </div>
// );

// export default function JobListings() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [departmentFilter, setDepartmentFilter] = useState('');
//   const [locationFilter, setLocationFilter] = useState('');
//   const [jobTypeFilter, setJobTypeFilter] = useState('');

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

//   const resetFilters = () => {
//     setSearchTerm('');
//     setDepartmentFilter('');
//     setLocationFilter('');
//     setJobTypeFilter('');
//   };

//   const filteredJobs = jobOpenings.filter(job => {
//     const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesDepartment = !departmentFilter || job.department === departmentFilter;
//     const matchesLocation = !locationFilter || job.location.includes(locationFilter);
//     const matchesJobType = !jobTypeFilter ||
//       (jobTypeFilter === 'Internship' && job.category === 'intern') ||
//       (jobTypeFilter === 'Jobs' && job.category !== 'intern');

//     return matchesSearch && matchesDepartment && matchesLocation && matchesJobType;
//   });

//   const departments = [...new Set(jobOpenings.map(job => job.department))];
//   const locations = [...new Set(jobOpenings.map(job => job.location.split(' ')[0]))];
//   const jobTypes = ['Jobs', 'Internship'];

//   const isNew = (postedDate) => {
//     const today = new Date();
//     const postDate = new Date(postedDate);
//     const diffTime = today - postDate;
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays <= 7;
//   };

//   return (
//     <section className="py-8 md:py-12 bg-gray-50">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Header */}
//         <div className="text-center mb-8 md:mb-12">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//             <span className="relative inline-block">
//               <span className="relative z-10">Join Our Team</span>
//               <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/20 -z-0"></span>
//             </span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover opportunities to grow your career with us
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="bg-white p-4 md:p-6 rounded-xl shadow-xs border border-gray-200 mb-8 md:mb-10">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
//             <div className="md:col-span-5 relative">
//               <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search job titles or keywords..."
//                 className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             <div className="md:col-span-2">
//               <Select
//                 options={departments}
//                 icon={<FiBriefcase />}
//                 value={departmentFilter}
//                 onChange={setDepartmentFilter}
//                 placeholder="All Departments"
//               />
//             </div>

//             <div className="md:col-span-2">
//               <Select
//                 options={locations}
//                 icon={<FiMapPin />}
//                 value={locationFilter}
//                 onChange={setLocationFilter}
//                 placeholder="All Locations"
//               />
//             </div>

//             <div className="md:col-span-2">
//               <Select
//                 options={jobTypes}
//                 icon={<FiClock />}
//                 value={jobTypeFilter}
//                 onChange={setJobTypeFilter}
//                 placeholder="All Types"
//               />
//             </div>

//             <div className="md:col-span-1 flex items-end">
//               <button
//                 onClick={resetFilters}
//                 className="w-full py-2 md:py-3 text-gray-500 hover:text-gray-700 transition-colors text-sm md:text-base"
//               >
//                 Clear all
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Job Listings */}
//         <div className="grid gap-4 md:gap-6">
//           {filteredJobs.length > 0 ? (
//             filteredJobs.map((job, index) => {
//               const deadlineStatus = getDeadlineStatus(job.deadline);
//               const isNewJob = isNew(job.postedDate);

//               return (
//                 <motion.div
//                   key={job.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
//                   className={`bg-white rounded-xl overflow-hidden border-l-[5px] md:border-l-[6px] ${job.category === 'intern' ? 'border-purple-500' : 'border-blue-500'
//                     } shadow-sm transition-all relative`}
//                 >
//                   {/* Deadline status badge - top right */}
//                   <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs md:text-sm font-medium flex items-center ${deadlineStatus.className}`}>
//                     {deadlineStatus.icon}
//                     {deadlineStatus.text}
//                   </div>

//                   {isNewJob && (
//                     <span className=" ms-3   bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
//                       New
//                     </span>
//                   )}

//                   <div className="p-5 md:p-6">
//                     <div className="flex  items-start pr-8 gap-2">
//                       <div>
//                         <h3 className="text-lg md:text-xl font-bold text-gray-900">{job.title}</h3>
//                         <p className="text-blue-600 font-medium text-sm md:text-base">{job.department}</p>
//                       </div>
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${job.category === 'intern'
//                           ? 'bg-purple-100 text-purple-800'
//                           : 'bg-blue-100 text-blue-800'
//                         }`}>
//                         {job.type}
//                       </span>
//                     </div>

//                     <div className="my-3 md:my-4 flex flex-wrap gap-1 md:gap-2">
//                       {job.tags.map((tag) => (
//                         <span key={tag} className="px-2 py-0.5 md:px-2.5 md:py-1 bg-gray-100 text-gray-700 text-xs md:text-sm rounded-full">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     <p className="text-gray-600 text-sm md:text-base mb-4">{job.description}</p>

//                     <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-5 text-xs md:text-sm">
//                       <div className="flex items-center gap-1 md:gap-2">
//                         <FiMapPin className="text-gray-400 flex-shrink-0" />
//                         <span className="truncate">{job.location}</span>
//                       </div>
//                       <div className="flex items-center gap-1 md:gap-2">
//                         <FiDollarSign className="text-gray-400 flex-shrink-0" />
//                         <span className="truncate">{job.salary}</span>
//                       </div>
//                       <div className="flex items-center gap-1 md:gap-2">
//                         <FiCalendar className="text-gray-400 flex-shrink-0" />
//                         <span>Posted: {formatDate(job.postedDate)}</span>
//                       </div>
//                       <div className="flex items-center gap-1 md:gap-2">
//                         <FiClock className="text-gray-400 flex-shrink-0" />
//                         <span>Closes: {formatDate(job.deadline)}</span>
//                       </div>
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
//                       <Link href={`/jobs/${job.id}`} className="flex-1">
//                         <motion.button
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="w-full px-4 py-2 md:px-5 md:py-2.5 border border-gray-300 rounded-lg font-medium flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
//                         >
//                           <FiEye className="flex-shrink-0" />
//                           <span>Details</span>
//                         </motion.button>
//                       </Link>
//                       <Link href={`/apply?id=${job.id}`} className="flex-1">
//                         <motion.button
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="w-full px-4 py-2 md:px-5 md:py-2.5 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
//                         >
//                           <FiBriefcase className="flex-shrink-0" />
//                           <span>Apply</span>
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })
//           ) : (
//             <div className="bg-white p-8 rounded-xl text-center border border-dashed border-gray-300">
//               <div className="mx-auto max-w-md">
//                 <FiSearch className="mx-auto text-3xl md:text-4xl text-gray-400 mb-3 md:mb-4" />
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
//                 <p className="text-gray-500 text-sm md:text-base mb-4 md:mb-6">
//                   Try adjusting your search filters or browse our general opportunities
//                 </p>
//                 <button
//                   onClick={resetFilters}
//                   className="px-4 py-2 md:px-5 md:py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm md:text-base"
//                 >
//                   Reset filters
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-12 md:mt-16 text-center">
//           <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 max-w-2xl">
//             <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Don't see your dream job?</h3>
//             <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
//               We're always interested in meeting talented people. Join our talent network and we'll contact you when matching positions open up.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
//               <Link href="/jobs/generalApplication">
//                 <button className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm md:text-base transition-colors">
//                   General Application
//                 </button>
//               </Link>
//               <button className="px-4 py-2 md:px-6 md:py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-lg font-medium text-sm md:text-base transition-colors">
//                 Talent Network
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }












// // components/JobListings.js
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import axios from 'axios';
// import {
//   FiMapPin,
//   FiClock,
//   FiDollarSign,
//   FiBriefcase,
//   FiEye,
//   FiSearch,
//   FiCalendar,
//   FiChevronDown,
//   FiAlertTriangle
// } from 'react-icons/fi';

// // ✅ Local dummy jobs (fallback if API fails/empty)
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
//     postedDate: "2025-11-15",
//     deadline: "2025-12-15",
//     category: "job",
//     details: {
//       responsibilities: [
//         "Develop and maintain user interfaces using React and Next.js",
//         "Collaborate with designers to implement pixel-perfect designs",
//         "Optimize applications for maximum performance",
//         "Write clean, maintainable, and efficient code"
//       ],
//       requirements: [
//         "3+ years of experience with React",
//         "Proficient in TypeScript",
//         "Experience with modern CSS frameworks (Tailwind CSS preferred)",
//         "Familiarity with RESTful APIs",
//         "Strong problem-solving skills"
//       ]
//     }
//   },
//   {
//     id: 2,
//     title: "UX Design Intern",
//     type: "Internship",
//     location: "Hybrid (NYC)",
//     salary: "$25 - $35/hr",
//     department: "Design",
//     description: "Learn to create intuitive user experiences for our products",
//     tags: ["Figma", "User Research", "Prototyping"],
//     postedDate: "2025-11-10",
//     deadline: "2025-12-10",
//     category: "intern",
//     details: {
//       responsibilities: [
//         "Assist with user research and usability testing",
//         "Create wireframes and prototypes",
//         "Collaborate with product teams",
//         "Learn design system principles"
//       ],
//       requirements: [
//         "Portfolio showing design skills",
//         "Currently enrolled in design program",
//         "Basic Figma knowledge",
//         "Eagerness to learn"
//       ]
//     }
//   },
//   {
//     id: 3,
//     title: "DevOps Engineer",
//     type: "Contract",
//     location: "Remote",
//     salary: "$70 - $90/hr",
//     department: "Engineering",
//     description: "Build and maintain our cloud infrastructure",
//     tags: ["AWS", "Terraform", "Docker"],
//     postedDate: "2025-11-20",
//     deadline: "2025-12-20",
//     category: "job",
//     details: {
//       responsibilities: [
//         "Design, implement and maintain CI/CD pipelines",
//         "Manage cloud infrastructure (AWS)",
//         "Implement infrastructure as code",
//         "Monitor system performance"
//       ],
//       requirements: [
//         "Experience as DevOps Engineer",
//         "AWS knowledge",
//         "Containerization experience",
//         "Infrastructure as code skills"
//       ]
//     }
//   },
//   {
//     id: 4,
//     title: "Software Engineering Intern",
//     type: "Internship",
//     location: "Remote",
//     salary: "$30 - $40/hr",
//     department: "Engineering",
//     description: "Gain real-world experience building software",
//     tags: ["JavaScript", "React", "Node.js"],
//     postedDate: "2025-08-10",
//     deadline: "2025-09-10",
//     category: "intern",
//     details: {
//       responsibilities: [
//         "Assist with feature development",
//         "Write clean, maintainable code",
//         "Participate in code reviews",
//         "Learn agile methodologies"
//       ],
//       requirements: [
//         "Computer Science student",
//         "Basic programming knowledge",
//         "Eagerness to learn",
//         "Problem-solving skills"
//       ]
//     }
//   }
// ];

// const Select = ({ options, icon, value, onChange, placeholder = "Select..." }) => (
//   <div className="relative">
//     <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//       {icon}
//     </div>
//     <select
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//     >
//       <option value="">{placeholder}</option>
//       {options.map(option => (
//         <option key={option} value={option}>{option}</option>
//       ))}
//     </select>
//     <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
//   </div>
// );

// export default function JobListings() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [departmentFilter, setDepartmentFilter] = useState('');
//   const [locationFilter, setLocationFilter] = useState('');
//   const [jobTypeFilter, setJobTypeFilter] = useState('');
//   const [allData, setAllData] = useState([]);

//   // ✅ Fetch jobs from API
//   const fetchJobs = async () => {
//     try {
//       const response = await axios.get('https://landing-page-yclw.vercel.app/api/job');
//       const jobs = Array.isArray(response.data)
//         ? response.data
//         : response.data.data || [];
//       setAllData(jobs);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//       setAllData([]); // fallback handled below
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   // ✅ Prefer API jobs, else fallback to dummy jobs
//   const jobsToUse = allData.length > 0 ? allData : jobOpenings;

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

//   const resetFilters = () => {
//     setSearchTerm('');
//     setDepartmentFilter('');
//     setLocationFilter('');
//     setJobTypeFilter('');
//   };

//   const filteredJobs = jobsToUse.filter(job => {
//     const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
//     // job.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesDepartment = !departmentFilter || job.department === departmentFilter;
//     const matchesLocation = !locationFilter || job.location.includes(locationFilter);
//     const matchesJobType = !jobTypeFilter ||
//       (jobTypeFilter === 'Internship' && job.category === 'intern') ||
//       (jobTypeFilter === 'Jobs' && job.category !== 'intern');

//     return matchesSearch && matchesDepartment && matchesLocation && matchesJobType;
//   });



//   const departments = [...new Set(jobsToUse.map(job => job.department))];
//   const locations = [...new Set(jobsToUse.map(job => job.location.split(' ')[0]))];
//   const jobTypes = ['Jobs', 'Internship'];

//   const isNew = (postedDate) => {
//     const today = new Date();
//     const postDate = new Date(postedDate);
//     const diffTime = today - postDate;
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays <= 7;
//   };
//   return (
//     <section className="py-8 md:py-12 bg-gray-50">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Header */}
//         <div className="text-center mb-8 md:mb-12">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//             <span className="relative inline-block">
//               <span className="relative z-10">Join Our Team</span>
//               <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/20 -z-0"></span>
//             </span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover opportunities to grow your career with us
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="bg-white p-4 md:p-6 rounded-xl shadow-xs border border-gray-200 mb-8 md:mb-10">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
//             <div className="md:col-span-5 relative">
//               <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search job titles or keywords..."
//                 className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             <div className="md:col-span-2">
//               <Select
//                 options={departments}
//                 icon={<FiBriefcase />}
//                 value={departmentFilter}
//                 onChange={setDepartmentFilter}
//                 placeholder="All Departments"
//               />
//             </div>

//             <div className="md:col-span-2">
//               <Select
//                 options={locations}
//                 icon={<FiMapPin />}
//                 value={locationFilter}
//                 onChange={setLocationFilter}
//                 placeholder="All Locations"
//               />
//             </div>

//             <div className="md:col-span-2">
//               <Select
//                 options={jobTypes}
//                 icon={<FiClock />}
//                 value={jobTypeFilter}
//                 onChange={setJobTypeFilter}
//                 placeholder="All Types"
//               />
//             </div>

//             <div className="md:col-span-1 flex items-end">
//               <button
//                 onClick={resetFilters}
//                 className="w-full py-2 md:py-3 text-gray-500 hover:text-gray-700 transition-colors text-sm md:text-base"
//               >
//                 Clear all
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Job Listings */}
//         <div className="grid gap-4 md:gap-6">
//           {filteredJobs.length > 0 ? (
//             filteredJobs.slice(0, 5).map((job, index) => {
//               // const deadlineStatus = getDeadlineStatus(job.deadline);
//               const deadlineStatus = getDeadlineStatus(job.applicationDeadline);
//               // const isNewJob = isNew(job.postedDate);
//               const isNewJob = isNew(job.createdAt);

//               return (
//                 <motion.div
//                   key={job.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
//                   className={`bg-white rounded-xl overflow-hidden border-l-[5px] md:border-l-[6px] ${job.category === 'intern' ? 'border-purple-500' : 'border-blue-500'
//                     } shadow-sm transition-all relative`}
//                 >
//                   {/* Deadline status badge - top right */}
//                   <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs md:text-sm font-medium flex items-center ${deadlineStatus.className}`}>
//                     {deadlineStatus.icon}
//                     {deadlineStatus.text}
//                   </div>

//                   {isNewJob && (
//                     <span className=" ms-3   bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
//                       New
//                     </span>
//                   )}

//                   <div className="p-5 md:p-6 pt-10 pr-10">
//                     <div className="flex flex-col sm:flex-row items-start sm:items-center pr-8 gap-2">

//                       <div>
//                         <h3 className="text-lg md:text-xl font-bold text-gray-900">{job.title}</h3>
//                         <p className="text-blue-600 font-medium text-sm md:text-base">{job.department}</p>
//                       </div>
//                       <span className={`mt-2 sm:mt-0 px-2 py-1 rounded-full text-xs font-medium ${job.category === 'intern'
//                         ? 'bg-purple-100 text-purple-800'
//                         : 'bg-blue-100 text-blue-800'
//                         }`}>
//                         {job.jobType}
//                       </span>

//                     </div>

//                     <div className="my-3 md:my-4 flex flex-wrap gap-1 md:gap-2">
//                       {(job.requiredSkills || []).map((skill) => (
//                         <span
//                           key={skill._id}
//                           className="px-2 py-0.5 md:px-2.5 md:py-1 bg-gray-100 text-gray-700 text-xs md:text-sm rounded-full"
//                         >
//                           {skill.title}
//                         </span>
//                       ))}
//                     </div>

//                     <p className="text-gray-600 text-sm md:text-base mb-4">{job.description}</p>

//                     <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-5 text-xs md:text-sm">
//                       <div className="flex items-center gap-1 md:gap-2">
//                         <FiMapPin className="text-gray-400 flex-shrink-0" />
//                         <span className="truncate">{job.location}</span>
//                       </div>
//                       <div className="flex items-center gap-1 md:gap-2">
//                         <FiDollarSign className="text-gray-400 flex-shrink-0" />
//                         <span className="truncate">{job.salary}</span>
//                       </div>
//                       <div className="flex items-center gap-1 md:gap-2">
//                         <FiCalendar className="text-gray-400 flex-shrink-0" />
//                         {/* <span>Posted: {formatDate(job.postedDate)}</span> */}
//                         <span>Posted: {formatDate(job.postedDate || job.createdAt)}</span>


//                       </div>
//                       <div className="flex items-center gap-1 md:gap-2">
//                         <FiClock className="text-gray-400 flex-shrink-0" />
//                         <span>Closes: {formatDate(job.deadline || job.applicationDeadline)}</span>
//                       </div>
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
//                       {/* <Link href={`/jobs/${job.id}`} className="flex-1"> */}
//                       <Link href={`/jobs/${job._id}`} className="flex-1">

//                         <motion.button
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="w-full px-4 py-2 md:px-5 md:py-2.5 border border-gray-300 rounded-lg font-medium flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
//                         >
//                           <FiEye className="flex-shrink-0" />
//                           <span>Details</span>
//                         </motion.button>
//                       </Link>
//                       <Link href={`/apply?id=${job._id}`} className="flex-1">
//                         <motion.button
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           className="w-full px-4 py-2 md:px-5 md:py-2.5 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
//                         >
//                           <FiBriefcase className="flex-shrink-0" />
//                           <span>Apply</span>
//                         </motion.button>
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })
//           ) : (
//             <div className="bg-white p-8 rounded-xl text-center border border-dashed border-gray-300">
//               <div className="mx-auto max-w-md">
//                 <FiSearch className="mx-auto text-3xl md:text-4xl text-gray-400 mb-3 md:mb-4" />
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
//                 <p className="text-gray-500 text-sm md:text-base mb-4 md:mb-6">
//                   Try adjusting your search filters or browse our general opportunities
//                 </p>
//                 <button
//                   onClick={resetFilters}
//                   className="px-4 py-2 md:px-5 md:py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm md:text-base"
//                 >
//                   Reset filters
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-12 md:mt-16 text-center">
//           <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 max-w-2xl">
//             <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Don't see your dream job?</h3>
//             <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
//               We're always interested in meeting talented people. Join our talent network and we'll contact you when matching positions open up.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
//               <Link href="/jobs/generalApplication">
//                 <button className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm md:text-base transition-colors">
//                   General Application
//                 </button>
//               </Link>
//               <button className="px-4 py-2 md:px-6 md:py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-lg font-medium text-sm md:text-base transition-colors">
//                 Talent Network
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








// components/OpenPositions/OpenPositions.jsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // ← Change this import
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FiMapPin,
  FiClock,
  FiDollarSign,
  FiBriefcase,
  FiEye,
  FiSearch,
  FiCalendar,
  FiChevronDown,
  FiAlertTriangle
} from 'react-icons/fi';

// Select component for filters
const Select = ({ options, icon, value, onChange, placeholder = "Select..." }) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      {icon}
    </div>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
    <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
  </div>
);

export default function JobListings({ initialCategory = '' }) { // ← Accept prop from parent
  const [searchTerm, setSearchTerm] = useState(initialCategory);
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');
  const [allData, setAllData] = useState([]);
  const router = useRouter();
  
  // Get category from URL params (Page Router way)
  const categoryFromUrl = router.query.category;

  // ✅ Fetch jobs from API
  const fetchJobs = async () => {
    try {
      const response = await fetch('https://landing-page-yclw.vercel.app/api/job');
      const result = await response.json();
      const jobs = Array.isArray(result) ? result : (result.data || []);
      setAllData(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setAllData([]);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // If category is provided in URL or prop, set it as search term automatically
  useEffect(() => {
    const category = categoryFromUrl || initialCategory;
    if (category) {
      setSearchTerm(category);
    }
  }, [categoryFromUrl, initialCategory]);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getDeadlineStatus = (deadline) => {
    if (!deadline) {
      return {
        text: 'No deadline',
        className: 'bg-gray-100 text-gray-800',
        icon: <FiAlertTriangle className="mr-1" />
      };
    }

    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
      return {
        text: 'Closed',
        className: 'bg-red-100 text-red-800',
        icon: <FiAlertTriangle className="mr-1" />
      };
    } else if (diffDays <= 7) {
      return {
        text: `${diffDays} day${diffDays !== 1 ? 's' : ''} left`,
        className: 'bg-orange-100 text-orange-800',
        icon: <FiClock className="mr-1" />
      };
    } else {
      return {
        text: `${diffDays} days left`,
        className: 'bg-green-100 text-green-800',
        icon: <FiCalendar className="mr-1" />
      };
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setDepartmentFilter('');
    setLocationFilter('');
    setJobTypeFilter('');
  };

  // Filter jobs based on search term and filters
  const filteredJobs = allData.filter(job => {
    // If there's a search term (including from category click), filter by title
    const matchesSearch = searchTerm 
      ? job.title?.toLowerCase().includes(searchTerm.toLowerCase())
      : true; // If no search term, show all
    
    const matchesDepartment = !departmentFilter || job.department === departmentFilter;
    const matchesLocation = !locationFilter || job.location?.includes(locationFilter);
    const matchesJobType = !jobTypeFilter || job.jobType === jobTypeFilter;

    return matchesSearch && matchesDepartment && matchesLocation && matchesJobType;
  });

  const departments = [...new Set(allData.map(job => job.department).filter(Boolean))];
  const locations = [...new Set(allData.map(job => job.location).filter(Boolean))];
  const jobTypes = [...new Set(allData.map(job => job.jobType).filter(Boolean))];

  const isNew = (postedDate) => {
    if (!postedDate) return false;
    const today = new Date();
    const postDate = new Date(postedDate);
    const diffTime = today - postDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  // Determine which category to display
  const displayCategory = categoryFromUrl || initialCategory;

  return (
    <section id='openpositions' className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            <span className="relative inline-block">
              <span className="relative z-10">Join Our Team</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/20 -z-0"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover opportunities to grow your career with us
          </p>
          {displayCategory && (
            <div className="mt-4">
              <p className="text-blue-600 font-medium">
                Showing jobs for: <span className="font-bold bg-blue-100 px-3 py-1 rounded-full">{displayCategory}</span>
              </p>
              <button
                onClick={resetFilters}
                className="text-sm text-gray-500 hover:text-gray-700 mt-2 underline"
              >
                Show all jobs
              </button>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-xs border border-gray-200 mb-8 md:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
            <div className="md:col-span-5 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search job titles or keywords..."
                className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <Select
                options={departments}
                icon={<FiBriefcase />}
                value={departmentFilter}
                onChange={setDepartmentFilter}
                placeholder="All Departments"
              />
            </div>

            <div className="md:col-span-2">
              <Select
                options={locations}
                icon={<FiMapPin />}
                value={locationFilter}
                onChange={setLocationFilter}
                placeholder="All Locations"
              />
            </div>

            <div className="md:col-span-2">
              <Select
                options={jobTypes}
                icon={<FiClock />}
                value={jobTypeFilter}
                onChange={setJobTypeFilter}
                placeholder="All Types"
              />
            </div>

            <div className="md:col-span-1 flex items-end">
              <button
                onClick={resetFilters}
                className="w-full py-2 md:py-3 text-gray-500 hover:text-gray-700 transition-colors text-sm md:text-base"
              >
                Clear all
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-4 md:gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => {
              const deadlineStatus = getDeadlineStatus(job.applicationDeadline);
              const isNewJob = isNew(job.createdAt);

              return (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-xl overflow-hidden border-l-[5px] md:border-l-[6px] border-blue-500 shadow-sm transition-all relative"
                >
                  {/* Deadline status badge - top right */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs md:text-sm font-medium flex items-center ${deadlineStatus.className}`}>
                    {deadlineStatus.icon}
                    {deadlineStatus.text}
                  </div>

                  {isNewJob && (
                    <span className="absolute top-1 left-4 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  )}

                  <div className="p-5 md:p-6 pt-10 pr-10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center pr-8 gap-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">{job.title}</h3>
                        <p className="text-blue-600 font-medium text-sm md:text-base">{job.department}</p>
                      </div>
                      <span className="mt-2 sm:mt-0 px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {job.jobType}
                      </span>
                    </div>

                    <div className="my-3 md:my-4 flex flex-wrap gap-1 md:gap-2">
                      {(job.requiredSkills || []).slice(0,5).map((skill, skillIndex) => (
                        <span
                          key={skill._id || skillIndex}
                          className="px-2 py-0.5 md:px-2.5 md:py-1 bg-gray-100 text-gray-700 text-xs md:text-sm rounded-full"
                        >
                          {skill.title || skill}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm md:text-base mb-4">{job.about || job.description}</p>

                    <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-5 text-xs md:text-sm">
                      <div className="flex items-center gap-1 md:gap-2">
                        <FiMapPin className="text-gray-400 flex-shrink-0" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <FiDollarSign className="text-gray-400 flex-shrink-0" />
                        <span className="truncate">{job.salary || 'Not specified'}</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <FiCalendar className="text-gray-400 flex-shrink-0" />
                        <span>Posted: {formatDate(job.createdAt)}</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <FiClock className="text-gray-400 flex-shrink-0" />
                        <span>Closes: {formatDate(job.applicationDeadline)}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                      <Link href={`/jobs/${job._id}`} className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-2 md:px-5 md:py-2.5 border border-gray-300 rounded-lg font-medium flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
                        >
                          <FiEye className="flex-shrink-0" />
                          <span>Details</span>
                        </motion.button>
                      </Link>
                      <Link href={`/apply?id=${job._id}`} className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-2 md:px-5 md:py-2.5 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
                        >
                          <FiBriefcase className="flex-shrink-0" />
                          <span>Apply</span>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="bg-white p-8 rounded-xl text-center border border-dashed border-gray-300">
              <div className="mx-auto max-w-md">
                <FiSearch className="mx-auto text-3xl md:text-4xl text-gray-400 mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {searchTerm ? `No jobs found for "${searchTerm}"` : 'No jobs found'}
                </h3>
                <p className="text-gray-500 text-sm md:text-base mb-4 md:mb-6">
                  Try adjusting your search filters or browse our general opportunities
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 md:px-5 md:py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm md:text-base"
                >
                  Reset filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 max-w-2xl">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Don't see your dream job?</h3>
            <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
              We're always interested in meeting talented people. Join our talent network and we'll contact you when matching positions open up.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
              <Link href="/jobs/generalApplication">
                <button className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm md:text-base transition-colors">
                  General Application
                </button>
              </Link>
              <button className="px-4 py-2 md:px-6 md:py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-lg font-medium text-sm md:text-base transition-colors">
                Talent Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}