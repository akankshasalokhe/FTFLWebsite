// import { useEffect, useMemo, useRef, useState } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import { AnimatePresence, motion } from "framer-motion";

// // -----------------------------------------------------------------------------
// // Demo Data
// // -----------------------------------------------------------------------------
// const PRODUCTS = [
//   {
//     title: "Dating App",
//     slug: "dating-app",
//     type: "App",
//     color: "#FF6B6B",
//     accentColor: "#FF3B3B",
//     subtitle: "Find meaningful connections",
//     description:
//       "A modern dating app that uses AI to match you with compatible partners based on interests, values, and lifestyle preferences.",
//     tags: ["React Native", "Firebase", "Socket.IO"],
//     imageId: 101,
//     keyFeatures: ["AI Matching", "Secure Chat", "Video Profiles", "Interest-Based Groups"],
//   },
//   {
//     title: "Portfolio Website",
//     slug: "portfolio-website",
//     type: "Web",
//     color: "#4ECDC4",
//     accentColor: "#2BB8AF",
//     subtitle: "Showcase your work elegantly",
//     description:
//       "A responsive portfolio website template designed to highlight your projects with beautiful galleries and smooth animations.",
//     tags: ["Next.js", "TailwindCSS", "Framer Motion"],
//     imageId: 202,
//     keyFeatures: ["Responsive Design", "Project Galleries", "Contact Forms", "SEO Optimized"],
//   },
//   {
//     title: "E-commerce Store",
//     slug: "ecommerce-store",
//     type: "Web",
//     color: "#FFD93D",
//     accentColor: "#FFC800",
//     subtitle: "Modern shopping experience",
//     description:
//       "A full-featured e-commerce platform with product management, secure payments, inventory tracking, and customer analytics.",
//     tags: ["Next.js", "Stripe", "MongoDB"],
//     imageId: 303,
//     keyFeatures: ["Product Catalog", "Secure Checkout", "Inventory Management", "Customer Dashboard"],
//   },
//   {
//     title: "Fitness Tracker",
//     slug: "fitness-tracker",
//     type: "App",
//     color: "#6C63FF",
//     accentColor: "#524BDB",
//     subtitle: "Achieve your health goals",
//     description:
//       "Comprehensive fitness app that tracks workouts, nutrition, and progress with personalized recommendations.",
//     tags: ["React Native", "GraphQL", "HealthKit"],
//     imageId: 404,
//     keyFeatures: ["Workout Plans", "Nutrition Tracking", "Progress Analytics", "Community Challenges"],
//   },
//   {
//     title: "Task Manager",
//     slug: "task-manager",
//     type: "Web",
//     color: "#FF9A8B",
//     accentColor: "#FF7A6B",
//     subtitle: "Boost your productivity",
//     description:
//       "An intuitive task management system with team collaboration, deadlines, progress tracking, and integrations.",
//     tags: ["Vue.js", "Node.js", "PostgreSQL"],
//     imageId: 505,
//     keyFeatures: ["Team Collaboration", "Progress Tracking", "Calendar View", "Third-party Integrations"],
//   },
//   {
//     title: "Travel Planner",
//     slug: "travel-planner",
//     type: "Web",
//     color: "#36D1DC",
//     accentColor: "#29B0BB",
//     subtitle: "Plan your perfect getaway",
//     description:
//       "All-in-one travel planning platform with destination research, itinerary building, booking, and expense tracking.",
//     tags: ["Next.js", "Mapbox", "Stripe"],
//     imageId: 606,
//     keyFeatures: ["Destination Research", "Itinerary Builder", "Booking System", "Expense Tracker"],
//   },
// ];

// const CATEGORIES = ["All", "App", "Web"];

// // -----------------------------------------------------------------------------
// // Helpers
// // -----------------------------------------------------------------------------
// const cn = (...classes) => classes.filter(Boolean).join(" ");

// // Animated pill underline for category chips
// function Chips({ active, onChange }) {
//   return (
//     <div className="relative w-full overflow-x-auto">
//       <motion.div layout className="flex items-center gap-2 min-w-max">
//         {CATEGORIES.map((c) => (
//           <motion.button
//             key={c}
//             onClick={() => onChange(c)}
//             whileTap={{ scale: 0.96 }}
//             className={cn(
//               "relative px-4 py-2 rounded-full text-sm font-medium border",
//               "transition-colors",
//               active === c
//                 ? "bg-indigo-600 text-white border-indigo-600"
//                 : "bg-white/60 dark:bg-white/10 dark:text-gray-200 text-gray-800 border-gray-200 dark:border-white/10 hover:bg-white"
//             )}
//           >
//             {c}
//           </motion.button>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// // Floating Navbar that turns solid on scroll
// function Navbar({ dark, toggleDark }) {
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -24, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       className={cn(
//         "fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-colors",
//         scrolled
//           ? "bg-white/80 dark:bg-gray-900/70 border-b border-black/5 dark:border-white/10"
//           : "bg-transparent"
//       )}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
//         <Link href="/">
//           <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
//             NovaProducts
//           </span>
//         </Link>

//         <div className="flex items-center gap-3">
//           <a
//             href="#products"
//             className="text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600"
//           >
//             Products
//           </a>
//           <a
//             href="#features"
//             className="text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600"
//           >
//             Features
//           </a>
//           <button
//             onClick={toggleDark}
//             aria-label="Toggle dark mode"
//             className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-700 dark:text-gray-100"
//           >
//             <span className="inline-block w-4 h-4">
//               {/* Sun / Moon icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 {dark ? (
//                   <path d="M21.64 13A9 9 0 0 1 11 2.36 9 9 0 1 0 21.64 13z" />
//                 ) : (
//                   <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm0-18a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm10 7h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zM3 12H2a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm15.66 6.66a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 1 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41zM7.46 6.46a1 1 0 0 1-1.41 0l-.71-.71A1 1 0 1 1 6.75 4.34l.71.71a1 1 0 0 1 0 1.41zM6.34 18.66a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71zM18.25 5.05a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 1.41l-.71.71z" />
//                 )}
//               </svg>
//             </span>
//             <span className="text-xs hidden sm:inline">{dark ? "Dark" : "Light"}</span>
//           </button>
//         </div>
//       </div>
//     </motion.nav>
//   );
// }

// // Simple video modal
// function VideoModal({ open, onClose }) {
//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//         >
//           <motion.div
//             onClick={(e) => e.stopPropagation()}
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 30, opacity: 0 }}
//             className="w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
//           >
//             {/* Demo video placeholder */}
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
//               title="Demo Video"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// // Auto slider (hero mockups)
// function HeroSlider({ items }) {
//   const [index, setIndex] = useState(0);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     intervalRef.current = setInterval(() => setIndex((i) => (i + 1) % items.length), 3500);
//     return () => clearInterval(intervalRef.current);
//   }, [items.length]);

//   return (
//     <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={items[index]}
//           src={`https://picsum.photos/seed/${items[index]}/1200/675`}
//           alt="Showcase"
//           className="absolute inset-0 w-full h-full object-cover"
//           initial={{ opacity: 0, scale: 1.03 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.98 }}
//           transition={{ duration: 0.6 }}
//         />
//       </AnimatePresence>
//       <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
//     </div>
//   );
// }

// // Feature card
// function Feature({ title, desc, Icon }) {
//   return (
//     <motion.div
//       whileHover={{ y: -4 }}
//       className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md p-5 shadow-sm hover:shadow-md transition-shadow"
//     >
//       <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-md mb-3">
//         <Icon />
//       </div>
//       <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{title}</h4>
//       <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
//     </motion.div>
//   );
// }

// // Minimal inline icons
// const CheckIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
// );
// const BoltIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/></svg>
// );
// const ShieldIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/></svg>
// );

// // -----------------------------------------------------------------------------
// // Page
// // -----------------------------------------------------------------------------
// export default function IndexPage() {
//   const [filter, setFilter] = useState("All");
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [dark, setDark] = useState(false);
//   const [videoOpen, setVideoOpen] = useState(false);


//    const [productData, setProductData] = useState([]);

//    useEffect(() => {
//      axios
//        .get("https://landing-page-yclw.vercel.app/api/product")
//        .then((res) => setProductData(res.data.data))
//         .catch((err) => console.error(err));
//     }, []);

//   // Persist dark mode & apply to <html>
//   useEffect(() => {
//     const saved = localStorage.getItem("theme-dark") === "true";
//     setDark(saved);
//     document.documentElement.classList.toggle("dark", saved);
//   }, []);
//   const toggleDark = () => {
//     const next = !dark;
//     setDark(next);
//     document.documentElement.classList.toggle("dark", next);
//     localStorage.setItem("theme-dark", String(next));
//   };

//   useEffect(() => {
//     const t = setTimeout(() => setLoading(false), 700);
//     return () => clearTimeout(t);
//   }, []);

//   const filtered = useMemo(
//     () =>
//       PRODUCTS.filter(
//         (p) =>
//           (filter === "All" || p.type === filter) &&
//           p.title.toLowerCase().includes(search.toLowerCase())
//       ),
//     [filter, search]
//   );

//   const heroSeeds = useMemo(() => PRODUCTS.map((p) => p.imageId), []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-[#0b1020] dark:via-[#0b0f1a] dark:to-[#0a0e19] text-gray-900 dark:text-gray-100">
//       <Head>
//         <title>NovaProducts — SaaS Showcase</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       <Navbar dark={dark} toggleDark={toggleDark} />

//       {/* Hero */}
//       <section className="relative pt-28 md:pt-32 pb-16 px-4">
//         {/* Decorative blobs */}
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           <div className="absolute -top-24 -left-16 w-64 h-64 rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-500/10" />
//           <div className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/10" />
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center max-w-3xl mx-auto">
//             <motion.h1
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-4xl md:text-6xl font-extrabold tracking-tight"
//             >
//               Explore stunning, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">ready-to-ship</span> products
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1, duration: 0.6 }}
//               className="mt-4 text-lg text-gray-600 dark:text-gray-300"
//             >
//               Premium apps & websites with smooth animations, great UX, and clean code.
//             </motion.p>

//             {/* Floating controls */}
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="mt-8 bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg max-w-3xl mx-auto p-4"
//             >
//               <div className="flex flex-col md:flex-row items-stretch gap-3">
//                 <div className="relative flex-1">
//                   <input
//                     type="text"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     placeholder="Search products..."
//                     className="w-full px-4 py-3 pl-11 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-400 outline-none"
//                   />
//                   <span className="absolute left-3 top-3.5 text-gray-400">
//                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
//                   </span>
//                 </div>
//                 <Chips active={filter} onChange={setFilter} />
//               </div>
//             </motion.div>
//           </div>

//           {/* Slider */}
//           <div className="mt-10">
//             <HeroSlider items={heroSeeds} />
//             <div className="flex items-center justify-center gap-3 mt-6">
//               <button
//                 onClick={() => setVideoOpen(true)}
//                 className="px-5 py-2 rounded-xl text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 shadow hover:opacity-95"
//               >
//                 Watch 60s Overview
//               </button>
//               <a href="#products" className="px-5 py-2 rounded-xl border border-gray-300 dark:border-white/15 bg-white/70 dark:bg-white/5">Browse Products</a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Feature highlights */}
//       <section id="features" className="px-4 pb-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             <Feature title="Blazing Performance" desc="Optimized Next.js builds and image loading for speed." Icon={BoltIcon} />
//             <Feature title="Enterprise Quality" desc="Type-safe patterns, clean components, and accessibility." Icon={ShieldIcon} />
//             <Feature title="Production Ready" desc="Auth, payments, analytics hooks & environment-ready." Icon={CheckIcon} />
//           </div>
//         </div>
//       </section>

//       {/* Products grid */}
//       <section id="products" className="px-4 py-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Products</h2>
//             <span className="text-sm text-gray-500 dark:text-gray-400">{filtered.length} shown</span>
//           </div>

//           <AnimatePresence mode="wait">
//             {loading ? (
//               <motion.div
//                 key="loading"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
//               >
//                 {[1, 2, 3, 4, 5, 6].map((i) => (
//                   <div key={i} className="h-72 rounded-2xl bg-white/60 dark:bg-white/5 animate-pulse border border-gray-200 dark:border-white/10" />
//                 ))}
//               </motion.div>
//             ) : filtered.length ? (
//               <motion.div
//                 key="grid"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
//                 className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
//               >
//                 {filtered.map((p, idx) => (
//                   <motion.article
//                     key={p.slug}
//                     variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//                     whileHover={{ y: -6 }}
//                     className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-sm hover:shadow-lg transition-shadow"
//                   >
//                     <div className="relative h-48 overflow-hidden">
//                       <img
//                         src={`https://picsum.photos/seed/${p.imageId}/800/500`}
//                         alt={p.title}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                       />
//                       <span
//                         className="absolute top-4 left-4 text-xs px-3 py-1.5 rounded-full"
//                         style={{ backgroundColor: `${p.color}20`, color: p.color }}
//                       >
//                         {p.type}
//                       </span>
//                     </div>
//                     <div className="p-5">
//                       <h3 className="text-lg font-semibold">{p.title}</h3>
//                       <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{p.subtitle}</p>
//                       <div className="flex flex-wrap gap-2 mt-4">
//                         {p.tags.map((t) => (
//                           <span key={t} className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10">
//                             {t}
//                           </span>
//                         ))}
//                       </div>
//                       <div className="mt-5">
//                         <Link href={`/products/${p.slug}`}>
//                           <button
//                             className="w-full text-white font-medium py-2.5 rounded-xl shadow hover:shadow-md transition"
//                             style={{ background: `linear-gradient(135deg, ${p.color}, ${p.accentColor})` }}
//                           >
//                             Learn More
//                           </button>
//                         </Link>
//                       </div>
//                     </div>
//                   </motion.article>
//                 ))}
//               </motion.div>
//             ) : (
//               <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
//                 <p className="text-gray-600 dark:text-gray-300">No products found. Try a different search or category.</p>
//                 <button onClick={() => { setSearch(""); setFilter("All"); }} className="mt-4 px-4 py-2 rounded-xl border border-gray-300 dark:border-white/15">Clear filters</button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-4 pb-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gradient-to-r from-indigo-600 to-purple-600 p-[1px]">
//             <div className="rounded-3xl bg-white dark:bg-[#0c1224] p-8 md:p-12 grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
//               <div>
//                 <h3 className="text-2xl md:text-3xl font-bold">Can’t find what you need?</h3>
//                 <p className="mt-2 text-gray-700 dark:text-gray-300">We build custom apps and sites tailored exactly to your workflow.</p>
//               </div>
//               <div className="flex md:justify-end gap-3">
//                 <a href="#" className="px-5 py-3 rounded-xl bg-white text-gray-900 border border-white shadow hover:shadow-md">Contact Sales</a>
//                 <a href="#" className="px-5 py-3 rounded-xl bg-black/80 text-white hover:bg-black">Get a Quote</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Sticky help button */}
//       <button
//         className="fixed bottom-5 right-5 z-40 px-4 py-2 rounded-full shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95"
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//       >
//         ↑ Back to top
//       </button>

//       <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
//     </div>
//   );
// }












import { useEffect, useMemo, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
// -----------------------------------------------------------------------------
// Demo Data
// -----------------------------------------------------------------------------
const PRODUCTS = [
  {
    title: "Dating App",
    slug: "dating-app",
    type: "App",
    color: "#FF6B6B",
    accentColor: "#FF3B3B",
    subtitle: "Find meaningful connections",
    description:
      "A modern dating app that uses AI to match you with compatible partners based on interests, values, and lifestyle preferences.",
    tags: ["React Native", "Firebase", "Socket.IO"],
    imageId: 101,
    keyFeatures: ["AI Matching", "Secure Chat", "Video Profiles", "Interest-Based Groups"],
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    type: "Web",
    color: "#4ECDC4",
    accentColor: "#2BB8AF",
    subtitle: "Showcase your work elegantly",
    description:
      "A responsive portfolio website template designed to highlight your projects with beautiful galleries and smooth animations.",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    imageId: 202,
    keyFeatures: ["Responsive Design", "Project Galleries", "Contact Forms", "SEO Optimized"],
  },
  {
    title: "E-commerce Store",
    slug: "ecommerce-store",
    type: "Web",
    color: "#FFD93D",
    accentColor: "#FFC800",
    subtitle: "Modern shopping experience",
    description:
      "A full-featured e-commerce platform with product management, secure payments, inventory tracking, and customer analytics.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    imageId: 303,
    keyFeatures: ["Product Catalog", "Secure Checkout", "Inventory Management", "Customer Dashboard"],
  },
  {
    title: "Fitness Tracker",
    slug: "fitness-tracker",
    type: "App",
    color: "#6C63FF",
    accentColor: "#524BDB",
    subtitle: "Achieve your health goals",
    description:
      "Comprehensive fitness app that tracks workouts, nutrition, and progress with personalized recommendations.",
    tags: ["React Native", "GraphQL", "HealthKit"],
    imageId: 404,
    keyFeatures: ["Workout Plans", "Nutrition Tracking", "Progress Analytics", "Community Challenges"],
  },
  {
    title: "Task Manager",
    slug: "task-manager",
    type: "Web",
    color: "#FF9A8B",
    accentColor: "#FF7A6B",
    subtitle: "Boost your productivity",
    description:
      "An intuitive task management system with team collaboration, deadlines, progress tracking, and integrations.",
    tags: ["Vue.js", "Node.js", "PostgreSQL"],
    imageId: 505,
    keyFeatures: ["Team Collaboration", "Progress Tracking", "Calendar View", "Third-party Integrations"],
  },
  {
    title: "Travel Planner",
    slug: "travel-planner",
    type: "Web",
    color: "#36D1DC",
    accentColor: "#29B0BB",
    subtitle: "Plan your perfect getaway",
    description:
      "All-in-one travel planning platform with destination research, itinerary building, booking, and expense tracking.",
    tags: ["Next.js", "Mapbox", "Stripe"],
    imageId: 606,
    keyFeatures: ["Destination Research", "Itinerary Builder", "Booking System", "Expense Tracker"],
  },
];

const CATEGORIES = ["All", "App", "Web"];

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Animated pill underline for category chips
function Chips({ active, onChange }) {
  return (
    <div className="relative w-full overflow-x-auto">
      <motion.div layout className="flex items-center gap-2 min-w-max">
        {CATEGORIES.map((c) => (
          <motion.button
            key={c}
            onClick={() => onChange(c)}
            whileTap={{ scale: 0.96 }}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium border",
              "transition-colors",
              active === c
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white/60 dark:bg-white/10 dark:text-gray-200 text-gray-800 border-gray-200 dark:border-white/10 hover:bg-white"
            )}
          >
            {c}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

// Floating Navbar that turns solid on scroll
function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-colors",
        scrolled
          ? "bg-white/80 dark:bg-gray-900/70 border-b border-black/5 dark:border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/">
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            NovaProducts
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="#products"
            className="text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600"
          >
            Products
          </a>
          <a
            href="#features"
            className="text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600"
          >
            Features
          </a>
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-700 dark:text-gray-100"
          >
            <span className="inline-block w-4 h-4">
              {/* Sun / Moon icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {dark ? (
                  <path d="M21.64 13A9 9 0 0 1 11 2.36 9 9 0 1 0 21.64 13z" />
                ) : (
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm0-18a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm10 7h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zM3 12H2a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm15.66 6.66a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 1 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41zM7.46 6.46a1 1 0 0 1-1.41 0l-.71-.71A1 1 0 1 1 6.75 4.34l.71.71a1 1 0 0 1 0 1.41zM6.34 18.66a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71zM18.25 5.05a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 1.41l-.71.71z" />
                )}
              </svg>
            </span>
            <span className="text-xs hidden sm:inline">{dark ? "Dark" : "Light"}</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

// Simple video modal
function VideoModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            className="w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Demo video placeholder */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
              title="Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Auto slider (hero mockups)
function HeroSlider({ items }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setIndex((i) => (i + 1) % items.length), 3500);
    return () => clearInterval(intervalRef.current);
  }, [items.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10">
      <AnimatePresence mode="wait">
        <motion.img
          key={items[index]}
          src={`https://picsum.photos/seed/${items[index]}/1200/675`}
          alt="Showcase"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

// Feature card
function Feature({ title, desc, Icon }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-md mb-3">
        <Icon />
      </div>
      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
    </motion.div>
  );
}

// Minimal inline icons
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

// -----------------------------------------------------------------------------
// Page
// -----------------------------------------------------------------------------
export default function IndexPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);


  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/product")
      .then((res) => {
        console.log("API response:", res.data.data); // ✅ log here
        setProductData(res.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Persist dark mode & apply to <html>
  useEffect(() => {
    const saved = localStorage.getItem("theme-dark") === "true";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);
  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme-dark", String(next));
  };

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

 
const filtered = useMemo(
  () =>
    productData.filter(
      (p) =>
        (filter === "All" || p.category === filter) &&
        (p.title?.toLowerCase().includes(search.toLowerCase()) ||
         p.heading?.toLowerCase().includes(search.toLowerCase()))
    ),
  [filter, search, productData]
);


  const heroSeeds = useMemo(() => PRODUCTS.map((p) => p.imageId), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-[#0b1020] dark:via-[#0b0f1a] dark:to-[#0a0e19] text-gray-900 dark:text-gray-100">
      <Head>
        <title>NovaProducts — SaaS Showcase</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar dark={dark} toggleDark={toggleDark} />

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 pb-16 px-4">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-16 w-64 h-64 rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-500/10" />
          <div className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              Explore stunning, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">ready-to-ship</span> products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            >
              Premium apps & websites with smooth animations, great UX, and clean code.
            </motion.p>

            {/* Floating controls */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg max-w-3xl mx-auto p-4"
            >
              <div className="flex flex-col md:flex-row items-stretch gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-3 pl-11 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                  <span className="absolute left-3 top-3.5 text-gray-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                  </span>
                </div>
                <Chips active={filter} onChange={setFilter} />
              </div>
            </motion.div>
          </div>

          {/* Slider */}
          <div className="mt-10">
            <HeroSlider items={heroSeeds} />
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={() => setVideoOpen(true)}
                className="px-5 py-2 rounded-xl text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 shadow hover:opacity-95"
              >
                Watch 60s Overview
              </button>
              <a href="#products" className="px-5 py-2 rounded-xl border border-gray-300 dark:border-white/15 bg-white/70 dark:bg-white/5">Browse Products</a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section id="features" className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Feature title="Blazing Performance" desc="Optimized Next.js builds and image loading for speed." Icon={BoltIcon} />
            <Feature title="Enterprise Quality" desc="Type-safe patterns, clean components, and accessibility." Icon={ShieldIcon} />
            <Feature title="Production Ready" desc="Auth, payments, analytics hooks & environment-ready." Icon={CheckIcon} />
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section id="products" className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Products</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">{filtered.length} shown</span>
          </div>

          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-72 rounded-2xl bg-white/60 dark:bg-white/5 animate-pulse border border-gray-200 dark:border-white/10" />
                ))}
              </motion.div>
            ) : filtered.length ? (
              <motion.div
                key="grid"
                initial="hidden"
                animate="visible"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
             

                {filtered.map((p) => (
                  <motion.article
                    key={p._id}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    whileHover={{ y: -6 }}
                    className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={p.screenshot?.[0]?.url || `https://picsum.photos/seed/${p._id}/800/500`}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 text-xs px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-600">
                        {/* {p.rating ? `${p.rating}★` : "New"} */}
                        {p.category ? ` ${p.category}` : "New"}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold">{p.heading}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{p.title}</p>
                      {p.subHeading && (
                        <p className="text-xs text-gray-500 mt-1">{p.subHeading}</p>
                      )}
                      <div className="mt-5">
                        <Link href={`/products/${p._id}`} passHref>
                          <button className="w-full text-white font-medium py-2.5 rounded-xl shadow hover:shadow-md transition bg-gradient-to-r from-indigo-600 to-purple-600">
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}


              </motion.div>
            ) : (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                <p className="text-gray-600 dark:text-gray-300">No products found. Try a different search or category.</p>
                <button onClick={() => { setSearch(""); setFilter("All"); }} className="mt-4 px-4 py-2 rounded-xl border border-gray-300 dark:border-white/15">Clear filters</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gradient-to-r from-indigo-600 to-purple-600 p-[1px]">
            <div className="rounded-3xl bg-white dark:bg-[#0c1224] p-8 md:p-12 grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Can’t find what you need?</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">We build custom apps and sites tailored exactly to your workflow.</p>
              </div>
              <div className="flex md:justify-end gap-3">
                <a href="#" className="px-5 py-3 rounded-xl bg-white text-gray-900 border border-white shadow hover:shadow-md">Contact Sales</a>
                <a href="#" className="px-5 py-3 rounded-xl bg-black/80 text-white hover:bg-black">Get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky help button */}
      <button
        className="fixed bottom-5 right-5 z-40 px-4 py-2 rounded-full shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑ Back to top
      </button>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
