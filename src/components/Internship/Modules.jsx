// import React, { useEffect, useState } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import axios from "axios";

// const InternshipCourses = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const coursesData = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//       title: "Web Development",
//       description: "Learn HTML, CSS, JavaScript, and React through hands-on projects.",
//       features: ["Frontend Fundamentals", "Responsive Design", "React Components", "API Integration", "Deployment"],
//       duration: "4 weeks",
//       category: "development",
//       level: "Beginner",
//       rating: 4.8,
//       students: 1245
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//       title: "Data Science",
//       description: "Master data analysis, visualization, and machine learning algorithms.",
//       features: ["Python", "Data Cleaning", "Visualization", "Machine Learning", "Projects"],
//       duration: "6 weeks",
//       category: "data",
//       level: "Intermediate",
//       rating: 4.7,
//       students: 892
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//       title: "UI/UX Design",
//       description: "Create stunning user interfaces and enhance user experience to your website.",
//       features: ["Wireframing", "Prototyping", "Figma & XD", "User Research", "Portfolio"],
//       duration: "5 weeks",
//       category: "design",
//       level: "Beginner",
//       rating: 4.9,
//       students: 1056
//     },
//     {
//       id: 4,
//       image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//       title: "Mobile App Development",
//       description: "Build cross-platform mobile applications with React Native.",
//       features: ["React Native", "State Management", "API Integration", "App Store Deployment"],
//       duration: "6 weeks",
//       category: "development",
//       level: "Intermediate",
//       rating: 4.6,
//       students: 756
//     },
//     {
//       id: 5,
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//       title: "Digital Marketing",
//       description: "Learn SEO, social media marketing, and analytics to boost online presence.",
//       features: ["SEO", "Content Marketing", "Social Media", "Google Analytics", "Campaigns"],
//       duration: "4 weeks",
//       category: "marketing",
//       level: "Beginner",
//       rating: 4.5,
//       students: 1123
//     },
//     {
//       id: 6,
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//       title: "Cloud Computing",
//       description: "Master AWS, Azure, and Google Cloud platforms for modern applications.",
//       features: ["AWS", "Azure", "Google Cloud", "DevOps", "Security"],
//       duration: "8 weeks",
//       category: "cloud",
//       level: "Advanced",
//       rating: 4.8,
//       students: 634
//     }
//   ];

//   const categories = ["all", "development", "design", "data", "marketing", "cloud"];
//   const levels = ["all", "Beginner", "Intermediate", "Advanced"];

//   const filteredCourses = coursesData.filter(course => {
//     if (activeFilter === "all") return true;
//     return course.category === activeFilter || course.level === activeFilter;
//   });


//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [internshipData, setInternshipData] = useState([]);
//   const [roles, setRoles] = useState([]);
//   const [activeRole, setActiveRole] = useState("All");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/internship")

//       .then((res) => {
//         const data = res.data.data || [];
//         setInternshipData(data);

//         const uniqueRoles = Array.from(new Set(data.map((m) => m.category)));
//         console.log("Unique Roles:", uniqueRoles);
//         setRoles(["All", ...uniqueRoles]); // Add "All" option

//         // Set initial active role
//         setActiveRole("All");
//       })
//       .catch((err) => {
//         console.error("API fetch error:", err);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen"
//       style={{
//         background: "linear-gradient(135deg, rgba(7,24,43,0.85) 0%, rgba(6, 20, 36, 0.7) 100%)",
//       }}
//     >
//       <Head>
//         <title>Internship Courses | CareerBoost</title>
//         <meta name="description" content="Browse our internship courses to boost your career" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Hero Section with same gradient */}
//       <section className="pt-20 pb-16 px-6 text-center"
//         style={{
//           background: "linear-gradient(135deg, rgba(7,24,43,0.85) 0%, rgba(23,64,110,0.7) 100%)",
//         }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Boost Your Career with Our Internships</h1>
//             <p className="text-lg text-gray-200 max-w-3xl mx-auto">
//               Choose from curated courses to gain practical skills, internship certification, and placement opportunities.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           {/* Filter Section */}
//           <div className="mb-12 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter Courses</h2>
//             <div className="flex flex-wrap gap-4">
//               <div>
//                 <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {roles.map(item => (
//                     <button
//                       key={item || Math.random()} // fallback key if undefined
//                       onClick={() => setActiveRole(item)}
//                       className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeRole === item
//                         ? 'bg-gradient-to-r from-[#298cf3] to-blue-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                     >
//                       {item ? item.charAt(0).toUpperCase() + item.slice(1) : ''}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Courses Grid */}
//           <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             {(
//               activeRole === "All"
//                 ? internshipData.slice(0, 6) // only 6 cards for All
//                 : internshipData.filter((course) => course.category === activeRole)
//             ).map((course) => (
//               <div
//                 key={course._id}
//                 className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-gray-200"
//                 onMouseEnter={() => setHoveredCard(course._id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div className="relative h-56 overflow-hidden">
//                   <img
//                     src={course.mainImage}
//                     alt={course.title}
//                     className="w-full h-full object-cover transition-transform duration-500"
//                     style={{
//                       transform: hoveredCard === course._id ? "scale(1.05)" : "scale(1)",
//                     }}
//                   />
//                   <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
//                     <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-3 py-1 rounded-full shadow-md">
//                       {course.duration}
//                     </span>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16"></div>
//                 </div>

//                 <div className="p-6 flex flex-col flex-1">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
//                     <div className="flex items-center text-amber-500">
//                       <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                       </svg>
//                       <span className="text-sm font-medium ml-1">{course.rating}</span>

//                     </div>
//                   </div>

//                   <p className="text-gray-600 mb-4 text-sm">{course.subtitle}</p>

//                   <div className="flex justify-between items-center mb-4 text-xs text-gray-500">
//                     <span>{course.enrolledStudents} students enrolled</span>
//                    <span className="bg-black text-white px-2 py-1 rounded-full">
//                       {course.category}
//                     </span>
//                   </div>

//                   {/* Tags */}
//                   <div className="mb-5">
//                     <div className="flex flex-wrap gap-2">
//                       {course.tags?.map((tag, idx) => (
//                         <span
//                           key={idx}
//                           className="flex-shrink-0 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mt-auto">
//                     <Link href={`/courses/${course._id}`} className="block w-full">
//                       <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:from-blue-700 hover:to-blue-900 transition-all flex items-center justify-center">
//                         Explore Course
//                         <svg
//                           className="w-4 h-4 ml-2"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M14 5l7 7m0 0l-7 7m7-7H3"
//                           ></path>
//                         </svg>
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredCourses.length === 0 && (
//             <div className="text-center py-12">
//               <div className="text-gray-400 mb-4">
//                 <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-medium text-gray-700 mb-2">No courses found</h3>
//               <p className="text-gray-500">Try adjusting your filters to see more results.</p>
//               <button
//                 onClick={() => setActiveFilter("all")}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Reset Filters
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       <style jsx>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default InternshipCourses;









// import React, { useEffect, useState } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import axios from "axios";

// const InternshipCourses = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const coursesData = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//       title: "Web Development",
//       description: "Learn HTML, CSS, JavaScript, and React through hands-on projects.",
//       features: ["Frontend Fundamentals", "Responsive Design", "React Components", "API Integration", "Deployment"],
//       duration: "4 weeks",
//       category: "development",
//       level: "Beginner",
//       rating: 4.8,
//       students: 1245
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//       title: "Data Science",
//       description: "Master data analysis, visualization, and machine learning algorithms.",
//       features: ["Python", "Data Cleaning", "Visualization", "Machine Learning", "Projects"],
//       duration: "6 weeks",
//       category: "data",
//       level: "Intermediate",
//       rating: 4.7,
//       students: 892
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//       title: "UI/UX Design",
//       description: "Create stunning user interfaces and enhance user experience to your website.",
//       features: ["Wireframing", "Prototyping", "Figma & XD", "User Research", "Portfolio"],
//       duration: "5 weeks",
//       category: "design",
//       level: "Beginner",
//       rating: 4.9,
//       students: 1056
//     },
//     {
//       id: 4,
//       image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//       title: "Mobile App Development",
//       description: "Build cross-platform mobile applications with React Native.",
//       features: ["React Native", "State Management", "API Integration", "App Store Deployment"],
//       duration: "6 weeks",
//       category: "development",
//       level: "Intermediate",
//       rating: 4.6,
//       students: 756
//     },
//     {
//       id: 5,
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//       title: "Digital Marketing",
//       description: "Learn SEO, social media marketing, and analytics to boost online presence.",
//       features: ["SEO", "Content Marketing", "Social Media", "Google Analytics", "Campaigns"],
//       duration: "4 weeks",
//       category: "marketing",
//       level: "Beginner",
//       rating: 4.5,
//       students: 1123
//     },
//     {
//       id: 6,
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//       title: "Cloud Computing",
//       description: "Master AWS, Azure, and Google Cloud platforms for modern applications.",
//       features: ["AWS", "Azure", "Google Cloud", "DevOps", "Security"],
//       duration: "8 weeks",
//       category: "cloud",
//       level: "Advanced",
//       rating: 4.8,
//       students: 634
//     }
//   ];

//   const categories = ["all", "development", "design", "data", "marketing", "cloud"];
//   const levels = ["all", "Beginner", "Intermediate", "Advanced"];

//   const filteredCourses = coursesData.filter(course => {
//     if (activeFilter === "all") return true;
//     return course.category === activeFilter || course.level === activeFilter;
//   });


//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [internshipData, setInternshipData] = useState([]);
//   const [roles, setRoles] = useState([]);
//    const [normalInternshipData, setNormalInternshipData] = useState([]);
//    const [normalRoles, setNormalRoles] = useState([]);
//   const [activeRole, setActiveRole] = useState("All");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/internship")

//       .then((res) => {
//         const data = res.data.data || [];
//         setInternshipData(data);

//         const uniqueRoles = Array.from(new Set(data.map((m) => m.category)));
//         console.log("Unique Roles:", uniqueRoles);
//         setRoles(["All", ...uniqueRoles]); // Add "All" option

//         // Set initial active role
//         setActiveRole("All");
//       })
//       .catch((err) => {
//         console.error("API fetch error:", err);
//       });
//   }, []);


//     useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/normalInternship")

//       .then((res) => {
//         const data = res.data.data || [];
//         setNormalInternshipData(data);

//         const uniqueRoles = Array.from(new Set(data.map((m) => m.category)));
//         console.log("Unique Roles:", uniqueRoles);
//         setRoles(["All", ...uniqueRoles]); // Add "All" option

//         // Set initial active role
//         setActiveRole("All");
//       })
//       .catch((err) => {
//         console.error("API fetch error:", err);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen"
//       style={{
//         background: "linear-gradient(135deg, rgba(7,24,43,0.85) 0%, rgba(6, 20, 36, 0.7) 100%)",
//       }}
//     >
//       <Head>
//         <title>Internship Courses | CareerBoost</title>
//         <meta name="description" content="Browse our internship courses to boost your career" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Hero Section with same gradient */}
//       <section className="pt-20 pb-16 px-6 text-center"
//         style={{
//           background: "linear-gradient(135deg, rgba(7,24,43,0.85) 0%, rgba(23,64,110,0.7) 100%)",
//         }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Boost Your Career with Our Internships</h1>
//             <p className="text-lg text-gray-200 max-w-3xl mx-auto">
//               Choose from curated courses to gain practical skills, internship certification, and placement opportunities.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           {/* Filter Section */}
//           <div className="mb-12 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter Courses</h2>
//             <div className="flex flex-wrap gap-4">
//               <div>
//                 <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {roles.map(item => (
//                     <button
//                       key={item || Math.random()} // fallback key if undefined
//                       onClick={() => setActiveRole(item)}
//                       className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeRole === item
//                         ? 'bg-gradient-to-r from-[#298cf3] to-blue-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                     >
//                       {item ? item.charAt(0).toUpperCase() + item.slice(1) : ''}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Courses Grid */}
//           <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             {(
//               activeRole === "All"
//                 ? internshipData.slice(0, 6) // only 6 cards for All
//                 : internshipData.filter((course) => course.category === activeRole)
//             ).map((course) => (
//               <div
//                 key={course._id}
//                 className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-gray-200"
//                 onMouseEnter={() => setHoveredCard(course._id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div className="relative h-56 overflow-hidden">
//                   <img
//                     src={course.mainImage}
//                     alt={course.title}
//                     className="w-full h-full object-cover transition-transform duration-500"
//                     style={{
//                       transform: hoveredCard === course._id ? "scale(1.05)" : "scale(1)",
//                     }}
//                   />
//                   <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
//                     <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-3 py-1 rounded-full shadow-md">
//                       {course.duration}
//                     </span>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16"></div>
//                 </div>

//                 <div className="p-6 flex flex-col flex-1">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
//                     <div className="flex items-center text-amber-500">
//                       <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                       </svg>
//                       <span className="text-sm font-medium ml-1">{course.rating}</span>

//                     </div>
//                   </div>

//                   <p className="text-gray-600 mb-4 text-sm">{course.subtitle}</p>

//                   <div className="flex justify-between items-center mb-4 text-xs text-gray-500">
//                     <span>{course.enrolledStudents} students enrolled</span>
//                    <span className="bg-black text-white px-2 py-1 rounded-full">
//                       {course.category}
//                     </span>
//                   </div>

//                   {/* Tags */}
//                   <div className="mb-5">
//                     <div className="flex flex-wrap gap-2">
//                       {course.tags?.map((tag, idx) => (
//                         <span
//                           key={idx}
//                           className="flex-shrink-0 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mt-auto">
//                     <Link href={`/courses/${course._id}`} className="block w-full">
//                       <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:from-blue-700 hover:to-blue-900 transition-all flex items-center justify-center">
//                         Explore Course
//                         <svg
//                           className="w-4 h-4 ml-2"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M14 5l7 7m0 0l-7 7m7-7H3"
//                           ></path>
//                         </svg>
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredCourses.length === 0 && (
//             <div className="text-center py-12">
//               <div className="text-gray-400 mb-4">
//                 <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-medium text-gray-700 mb-2">No courses found</h3>
//               <p className="text-gray-500">Try adjusting your filters to see more results.</p>
//               <button
//                 onClick={() => setActiveFilter("all")}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Reset Filters
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       <style jsx>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default InternshipCourses;









import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

const InternshipCourses = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [internshipData, setInternshipData] = useState([]);
  const [normalInternshipData, setNormalInternshipData] = useState([]);
  const [roles, setRoles] = useState([]);
  const [normalRoles, setNormalRoles] = useState([]);
  const [activeRole, setActiveRole] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeInternshipType, setActiveInternshipType] = useState("paid"); // "paid" or "normal"

  // Fetch Paid Internships
  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/internship")
      .then((res) => {
        const data = res.data.data || [];
        setInternshipData(data);

        const uniqueRoles = Array.from(new Set(data.map((m) => m.category)));
        console.log("Paid Internship Roles:", uniqueRoles);
        setRoles(["All", ...uniqueRoles]);
      })
      .catch((err) => {
        console.error("Paid Internship API fetch error:", err);
      });
  }, []);

  // Fetch Normal Internships
  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/normalInternship")
      .then((res) => {
        const data = res.data.data || [];
        setNormalInternshipData(data);

        const uniqueRoles = Array.from(new Set(data.map((m) => m.category)));
        console.log("Normal Internship Roles:", uniqueRoles);
        setNormalRoles(["All", ...uniqueRoles]);
      })
      .catch((err) => {
        console.error("Normal Internship API fetch error:", err);
      });
  }, []);

  // Get current data based on selected internship type
  const getCurrentData = () => {
    return activeInternshipType === "paid" ? internshipData : normalInternshipData;
  };

  // Get current roles based on selected internship type
  const getCurrentRoles = () => {
    return activeInternshipType === "paid" ? roles : normalRoles;
  };

  // Get filtered courses based on active role
  const getFilteredCourses = () => {
    const currentData = getCurrentData();
    if (activeRole === "All") return currentData.slice(0, 6);
    return currentData.filter((course) => course.category === activeRole);
  };

  return (
    <div className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, rgba(7,24,43,0.85) 0%, rgba(6, 20, 36, 0.7) 100%)",
      }}
    >
      <Head>
        <title>Internship Courses | CareerBoost</title>
        <meta name="description" content="Browse our internship courses to boost your career" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(7,24,43,0.85) 0%, rgba(23,64,110,0.7) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4"> Level Up Your Skills with Real Industry Experience</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Engage in practical internships that combine skill-building, certification, and placement support.
            </p>
          </div>

          {/* Internship Type Toggle Buttons */}
          {/* <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex gap-2">
              <button
                onClick={() => {
                  setActiveInternshipType("paid");
                  setActiveRole("All");
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeInternshipType === "paid"
                    ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white shadow-lg"
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
              >
                Paid Internship
              </button>
              <button
                onClick={() => {
                  setActiveInternshipType("normal");
                  setActiveRole("All");
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeInternshipType === "normal"
                    ? "bg-gradient-to-r from-[#298cf3] to-blue-600 text-white shadow-lg"
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
              >
                Normal Internship
              </button>
            </div>
          </div> */}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filter Section */}
          <div className="mb-12 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Filter Internships
              </h2>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {getFilteredCourses().length} internships found
              </span>
            </div>

            {/* <div className="flex flex-wrap gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {getCurrentRoles().map(item => (
                    <button
                      key={item || Math.random()}
                      onClick={() => setActiveRole(item)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeRole === item
                          ? 'bg-gradient-to-r from-[#298cf3] to-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {item ? item.charAt(0).toUpperCase() + item.slice(1) : ''}
                    </button>
                  ))}
                </div>
              </div>
            </div> */}

            <div className="flex flex-wrap gap-4">
              <div className="w-full">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
                <div className="overflow-x-auto pb-3 -mx-4 px-4">
                  <div className="flex gap-2 min-w-max">
                    {getCurrentRoles().map(item => (
                      <button
                        key={item || Math.random()}
                        onClick={() => setActiveRole(item)}
                        className={`px-4 py-2.5 cursor-pointer rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${activeRole === item
                          ? 'bg-gradient-to-r from-[#298cf3] to-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                      >
                        {item ? item.charAt(0).toUpperCase() + item.slice(1) : ''}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {getFilteredCourses().map((course) => (
              <div
                key={course._id}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-gray-200"
                onMouseEnter={() => setHoveredCard(course._id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-70 overflow-hidden">
                  <img
                    src={course.mainImage}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredCard === course._id ? "scale(1.05)" : "scale(1)",
                    }}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
                    }}
                  />
                  <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-3 py-1 rounded-full shadow-md">
                      {course.duration}
                    </span>

                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16"></div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                    {course.rating && (
                      <div className="flex items-center text-amber-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span className="text-sm font-medium ml-1">{course.rating}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">{course.subtitle || course.description}</p>

                  <div className="flex justify-between items-center mb-4 text-xs text-gray-500">
                    <span>{course.enrolledStudents || "Multiple"} students enrolled</span>
                    {/* <span className="bg-black text-white px-2 py-1 rounded-full">
                      {course.category}
                    </span> */}
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium max-w-[120px] truncate">
                      {course.category}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-2">
                      {course.tags?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="flex-shrink-0 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={
                        activeInternshipType === "paid"
                          ? `/courses/${course._id}`
                          : `/normalInternship/${course._id}`
                      }
                      className="block w-full"
                    >
                      {/* <Link href={`/courses/${course._id}`} className="block w-full"></Link> */}
                      <button className="w-full cursor-pointer bg-gradient-to-r from-[#298cf3] to-blue-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:from-blue-400 hover:to-blue-600 transition-all flex items-center justify-center">
                        Explore Internship
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {getFilteredCourses().length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">No internships found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results.</p>
              <button
                onClick={() => setActiveRole("All")}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default InternshipCourses;