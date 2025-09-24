// import { useState, useEffect } from "react";
// import Head from "next/head";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// // Sample blog posts data (removed author field)
// const BLOG_POSTS = [
//   {
//     id: 1,
//     title: "Getting Started with Next.js",
//     excerpt: "Learn how to set up and build your first Next.js application with this comprehensive guide.",
//     date: "May 15, 2023",
//     category: "Development",
//     readTime: "5 min read",
//     image: "/react.png",
//     featured: true,
//     slug: "getting-started-with-nextjs",
//     tags: ["Web Development", "React", "Next.js"]
//   },
//   {
//     id: 2,
//     title: "The Future of React in 2023",
//     excerpt: "Exploring the latest features and updates in React and how they will change frontend development.",
//     date: "April 28, 2023",
//     category: "Development",
//     readTime: "8 min read",
//     image: "/api/placeholder/400/250?text=React",
//     featured: true,
//     slug: "future-of-react-2023",
//     tags: ["React", "Frontend", "JavaScript"]
//   },
//   {
//     id: 3,
//     title: "UI/UX Design Principles for Developers",
//     excerpt: "Essential design principles that every developer should know to create better user experiences.",
//     date: "April 15, 2023",
//     category: "Design",
//     readTime: "6 min read",
//     image: "/api/placeholder/400/250?text=UI/UX",
//     slug: "ui-ux-design-principles",
//     tags: ["Design", "UI/UX", "Web Design"]
//   },
//   {
//     id: 4,
//     title: "Building Scalable APIs with GraphQL",
//     excerpt: "Learn how to design and implement scalable APIs using GraphQL and best practices.",
//     date: "March 22, 2023",
//     category: "Development",
//     readTime: "10 min read",
//     image: "/api/placeholder/400/250?text=GraphQL",
//     slug: "scalable-apis-with-graphql",
//     tags: ["GraphQL", "API", "Backend"]
//   },
//   {
//     id: 5,
//     title: "The Psychology of Color in Web Design",
//     excerpt: "How color choices impact user perception and behavior on your website.",
//     date: "March 10, 2023",
//     category: "Design",
//     readTime: "7 min read",
//     image: "/api/placeholder/400/250?text=Colors",
//     slug: "psychology-of-color-web-design",
//     tags: ["Design", "Colors", "Psychology"]
//   },
//   {
//     id: 6,
//     title: "Optimizing Website Performance",
//     excerpt: "Practical techniques to improve your website's loading speed and overall performance.",
//     date: "February 28, 2023",
//     category: "Performance",
//     readTime: "9 min read",
//     image: "/api/placeholder/400/250?text=Performance",
//     slug: "optimizing-website-performance",
//     tags: ["Performance", "Optimization", "Web"]
//   }
// ];



// const BlogPage = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [hoveredPost, setHoveredPost] = useState(null);
//   const [blogData, setBlogData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/blog")
//       .then((res) => setBlogData(res.data.data))
//          .catch((err) => console.error(err));
//      }, []);


//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const categories = ["All", "Development", "Design", "Performance"];

//   const filteredPosts = activeCategory === "All" 
//     ? BLOG_POSTS 
//     : BLOG_POSTS.filter(post => post.category === activeCategory);

//   // Apply search filter
//   const searchedPosts = searchQuery 
//     ? filteredPosts.filter(post => 
//         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
//       )
//     : filteredPosts;

//   const featuredPosts = BLOG_POSTS.filter(post => post.featured);

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     setSubscribed(true);
//     setEmail("");
//     // Reset subscription status after 5 seconds
//     setTimeout(() => setSubscribed(false), 5000);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   const cardHoverVariants = {
//     rest: { 
//       scale: 1,
//       y: 0,
//       transition: { duration: 0.3 }
//     },
//     hover: { 
//       scale: 1.03,
//       y: -5,
//       transition: { duration: 0.3 }
//     }
//   };

//   const imageHoverVariants = {
//     rest: { scale: 1 },
//     hover: { scale: 1.1 }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       <Head>
//         <title>Blog | Muze Creative Insights</title>
//         <meta name="description" content="Insights, ideas and stories from the Muze team" />
//       </Head>

//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//         <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
//       </div>

//       {/* Sticky Header */}
//       <motion.header 
//         className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <motion.div 
//               className="flex items-center"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
//                 </svg>
//               </div>
//               <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//                Blog
//               </h1>
//             </motion.div>

//             <motion.div 
//               className="relative w-full md:w-64"
//               whileFocus={{ scale: 1.05 }}
//             >
//               <input
//                 type="text"
//                 placeholder="Search posts..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm backdrop-blur-sm bg-white/80"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <svg
//                 className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </motion.div>
//           </div>
//         </div>
//       </motion.header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
//         {/* Hero Section */}
//         <section className="mb-16 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="inline-block mb-6"
//           >
//             <span className="px-4 py-1.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
//               Latest Insights
//             </span>
//           </motion.div>

//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
//           >
//             Explore Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Creative</span> Blog
//           </motion.h2>

//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-xl text-gray-600 max-w-3xl mx-auto"
//           >
//             Discover the latest trends, insights, and best practices from our team of experts.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="mt-8"
//           >
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
//           </motion.div>
//         </section>

//         {/* Category Filters */}
//         <motion.section 
//           className="mb-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <div className="flex flex-wrap justify-center gap-3">
//             {categories.map((category) => (
//               <motion.button
//                 key={category}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                   activeCategory === category
//                     ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
//                     : "bg-white/80 text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200 backdrop-blur-sm"
//                 }`}
//               >
//                 {category}
//               </motion.button>
//             ))}
//           </div>
//         </motion.section>

//         {/* Featured Posts Section */}
//         <motion.section 
//           className="mb-16"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           <motion.h2 
//             variants={itemVariants}
//             className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
//           >
//             <span className="bg-gradient-to-r from-blue-500 to-purple-600 h-0.5 w-8 mr-3"></span>
//             Featured Stories
//           </motion.h2>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {featuredPosts.map((post, index) => (
//               <motion.div 
//                 key={post.id}
//                 variants={itemVariants}
//                 className="relative group"
//                 whileHover="hover"
//                 initial="rest"
//                 animate="rest"
//                 onMouseEnter={() => setHoveredPost(post.id)}
//                 onMouseLeave={() => setHoveredPost(null)}
//               >
//                 <motion.div 
//                   variants={cardHoverVariants}
//                   className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
//                 >
//                   <div className="h-48 relative overflow-hidden">
//                     <motion.img 
//                       src={post.image} 
//                       alt={post.title}
//                       className="w-full h-full object-cover"
//                       variants={imageHoverVariants}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
//                     <div className="absolute bottom-4 left-4">
//                       <span className="px-3 py-1 bg-white text-blue-700 text-xs font-medium rounded-full backdrop-blur-sm">
//                         {post.category}
//                       </span>
//                     </div>
//                     <div className="absolute top-4 right-4">
//                       <motion.div
//                         animate={{ 
//                           rotate: hoveredPost === post.id ? 360 : 0,
//                           scale: hoveredPost === post.id ? 1.1 : 1
//                         }}
//                         transition={{ duration: 0.5 }}
//                         className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
//                       >
//                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                         </svg>
//                       </motion.div>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center text-sm text-gray-500 mb-3">
//                       <span>{post.date}</span>
//                       <span className="mx-2">•</span>
//                       <span>{post.readTime}</span>
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{post.title}</h3>
//                     <p className="text-gray-600 mb-4">{post.excerpt}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {post.tags.slice(0, 3).map((tag, index) => (
//                         <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
//                           #{tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* All Posts Section */}
//         <motion.section 
//           className="mb-16"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           <motion.h2 
//             variants={itemVariants}
//             className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
//           >
//             <span className="bg-gradient-to-r from-blue-500 to-purple-600 h-0.5 w-8 mr-3"></span>
//             Latest Articles
//             <span className="ml-3 text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
//               {searchedPosts.length} articles
//             </span>
//           </motion.h2>

//           <AnimatePresence mode="wait">
//             {searchedPosts.length === 0 ? (
//               <motion.div 
//                 key="no-results"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 className="text-center py-12"
//               >
//                 <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <p className="text-gray-600">No posts found. Try a different search or category.</p>
//               </motion.div>
//             ) : (
//               <motion.div 
//                 key="posts-grid"
//                 variants={containerVariants}
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//               >
//                 {searchedPosts.map((post, index) => (
//                   <motion.article 
//                     key={post.id}
//                     variants={itemVariants}
//                     layout
//                     className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
//                     whileHover={{ y: -5 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <div className="h-40 relative overflow-hidden">
//                       <img 
//                         src={post.image} 
//                         alt={post.title}
//                         className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
//                       <div className="absolute top-4 right-4">
//                         <span className="px-2 py-1 bg-white text-blue-700 text-xs font-medium rounded-full backdrop-blur-sm">
//                           {post.category}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="p-5">
//                       <div className="flex items-center text-xs text-gray-500 mb-2">
//                         <span>{post.date}</span>
//                         <span className="mx-1">•</span>
//                         <span>{post.readTime}</span>
//                       </div>
//                       <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-300">{post.title}</h3>
//                       <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {post.tags.slice(0, 2).map((tag, index) => (
//                           <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
//                             #{tag}
//                           </span>
//                         ))}
//                       </div>
//                       <div className="flex justify-end">
//                         <Link href={`/blog/${post.slug}`}>
//                           <motion.button 
//                             className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center"
//                             whileHover={{ x: 5 }}
//                             transition={{ type: "spring", stiffness: 500 }}
//                           >
//                             Read more
//                             <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                             </svg>
//                           </motion.button>
//                         </Link>
//                       </div>
//                     </div>
//                   </motion.article>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.section>

//         {/* Newsletter Section */}
//         <motion.section 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="bg-gradient-to-r from-blue-500 to-blue-300 rounded-2xl p-8 text-white mb-16 overflow-hidden relative"
//         >
//           <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
//           <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full"></div>

//           <div className="max-w-3xl mx-auto text-center relative z-10">
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"
//             >
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </motion.div>

//             <motion.h2 
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="text-2xl font-bold mb-4"
//             >
//               Stay in the loop
//             </motion.h2>

//             <motion.p 
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="text-blue-100 mb-6 max-w-md mx-auto"
//             >
//               Get the latest articles, news and updates delivered to your inbox. No spam.
//             </motion.p>

//             {subscribed ? (
//               <motion.div 
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="bg-white text-green-700 py-4 px-6 rounded-lg inline-flex items-center shadow-lg"
//               >
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 Thank you for subscribing!
//               </motion.div>
//             ) : (
//               <motion.form 
//                 onSubmit={handleSubscribe} 
//                 className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//               >
//                 <input
//                   type="email"
//                   placeholder="Your email address"
//                   className="flex-grow border border-white/30 bg-white/10 px-4 py-3 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 <motion.button
//                   type="submit"
//                   className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-md"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Subscribe
//                 </motion.button>
//               </motion.form>
//             )}
//           </div>
//         </motion.section>
//       </main>

//       {/* Add custom styles for animations */}
//       <style jsx global>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BlogPage;















import { useState, useEffect } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import axios from "axios";
// Sample blog posts data (removed author field)
const BLOG_POSTS = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to set up and build your first Next.js application with this comprehensive guide.",
    date: "May 15, 2023",
    category: "Development",
    readTime: "5 min read",
    image: "/react.png",
    featured: true,
    slug: "getting-started-with-nextjs",
    tags: ["Web Development", "React", "Next.js"]
  },
  {
    id: 2,
    title: "The Future of React in 2023",
    excerpt: "Exploring the latest features and updates in React and how they will change frontend development.",
    date: "April 28, 2023",
    category: "Development",
    readTime: "8 min read",
    image: "/api/placeholder/400/250?text=React",
    featured: true,
    slug: "future-of-react-2023",
    tags: ["React", "Frontend", "JavaScript"]
  },
  {
    id: 3,
    title: "UI/UX Design Principles for Developers",
    excerpt: "Essential design principles that every developer should know to create better user experiences.",
    date: "April 15, 2023",
    category: "Design",
    readTime: "6 min read",
    image: "/api/placeholder/400/250?text=UI/UX",
    slug: "ui-ux-design-principles",
    tags: ["Design", "UI/UX", "Web Design"]
  },
  {
    id: 4,
    title: "Building Scalable APIs with GraphQL",
    excerpt: "Learn how to design and implement scalable APIs using GraphQL and best practices.",
    date: "March 22, 2023",
    category: "Development",
    readTime: "10 min read",
    image: "/api/placeholder/400/250?text=GraphQL",
    slug: "scalable-apis-with-graphql",
    tags: ["GraphQL", "API", "Backend"]
  },
  {
    id: 5,
    title: "The Psychology of Color in Web Design",
    excerpt: "How color choices impact user perception and behavior on your website.",
    date: "March 10, 2023",
    category: "Design",
    readTime: "7 min read",
    image: "/api/placeholder/400/250?text=Colors",
    slug: "psychology-of-color-web-design",
    tags: ["Design", "Colors", "Psychology"]
  },
  {
    id: 6,
    title: "Optimizing Website Performance",
    excerpt: "Practical techniques to improve your website's loading speed and overall performance.",
    date: "February 28, 2023",
    category: "Performance",
    readTime: "9 min read",
    image: "/api/placeholder/400/250?text=Performance",
    slug: "optimizing-website-performance",
    tags: ["Performance", "Optimization", "Web"]
  }
];



const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPost, setHoveredPost] = useState(null);
  const [blogData, setBlogData] = useState([]);
  const [categories, setCategories] = useState(["All"]);

useEffect(() => {
  axios
    .get("https://landing-page-yclw.vercel.app/api/blog")
    .then((res) => {
      const blogs = res.data.data;
      setBlogData(blogs);

      // ✅ Extract unique categories
      const uniqueCategories = [
        "All",
        ...new Set(blogs.map((post) => post.category)),
      ];
      setCategories(uniqueCategories);
    })
    .catch((err) => console.error(err));
}, []);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const categories = ["All", "Development", "Design", "Performance"];

  const filteredPosts = activeCategory === "All"
    ? blogData.slice(0, 6)
    : blogData.filter(post => post.category === activeCategory);

  // Apply search filter
  const searchedPosts = searchQuery 
    ? filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : filteredPosts;

  const featuredPosts = blogData.filter(post => post.featured);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    // Reset subscription status after 5 seconds
    setTimeout(() => setSubscribed(false), 5000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardHoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const imageHoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Head>
        <title>Blog</title>
        <meta name="description" content="Insights, ideas and stories from the Muze team" />
      </Head>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Sticky Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
               Blog
              </h1>
            </motion.div>

            <motion.div
              className="relative w-full md:w-64"
              whileFocus={{ scale: 1.05 }}
            >
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm backdrop-blur-sm bg-white/80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-1.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
              Latest Insights
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Explore Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Creative</span> Blog
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover the latest trends, insights, and best practices from our team of experts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>
        </section>

        {/* Category Filters */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200 backdrop-blur-sm"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Featured Posts Section */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 h-0.5 w-8 mr-3"></span>
            Featured Stories
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="relative group"
                whileHover="hover"
                initial="rest"
                animate="rest"
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
                >
                  <div className="h-48 relative overflow-hidden">
                    <motion.img
                      src={post.headingImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      variants={imageHoverVariants}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white text-blue-700 text-xs font-medium rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <motion.div
                        animate={{
                          rotate: hoveredPost === post.id ? 360 : 0,
                          scale: hoveredPost === post.id ? 1.1 : 1
                        }}
                        transition={{ duration: 0.5 }}
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      
                      <span>
                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>

                      <span className="mx-2">•</span>
                      <span>{post.readtime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Posts Section */}
        <motion.section
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 h-0.5 w-8 mr-3"></span>
            Latest Articles
            <span className="ml-3 text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {searchedPosts.length} articles
            </span>
          </motion.h2>

          <AnimatePresence mode="wait">
            {searchedPosts.length === 0 ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-12"
              >
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">No posts found. Try a different search or category.</p>
              </motion.div>
            ) : (
              <motion.div
                key="posts-grid"
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {searchedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    variants={itemVariants}
                    layout
                    className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="h-40 relative overflow-hidden">
                      <img
                        src={post.headingImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-white text-blue-700 text-xs font-medium rounded-full backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <span>
                          {new Date(post.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>


                        <span className="mx-1">•</span>
                        <span>{post.readtime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-300">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-end">
                     
                           <Link href={`/blog/${post._id}`} className="flex-1">
                          <motion.button
                            className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          >
                            Read more
                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </motion.button>
                        </Link>
                      </div>
                    </div>  
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-blue-300 rounded-2xl p-8 text-white mb-16 overflow-hidden relative"
        >
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-bold mb-4"
            >
              Stay in the loop
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-blue-100 mb-6 max-w-md mx-auto"
            >
              Get the latest articles, news and updates delivered to your inbox. No spam.
            </motion.p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white text-green-700 py-4 px-6 rounded-lg inline-flex items-center shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Thank you for subscribing!
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow border border-white/30 bg-white/10 px-4 py-3 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <motion.button
                  type="submit"
                  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </motion.form>
            )}
          </div>
        </motion.section>
      </main>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;