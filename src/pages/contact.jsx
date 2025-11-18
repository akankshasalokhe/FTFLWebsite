// "use client";

// import { useEffect, useState } from "react";
// import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
// import { motion } from "framer-motion";
// import Typewriter from 'typewriter-effect';
// import axios from "axios";

// export default function ContactPage() {
//   const [dept, setDept] = useState("hr");
//   const [form, setForm] = useState({ firstName: "", email: "", phoneNumber: "", message: "" });
//   const [submitting, setSubmitting] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [footerData, setFooterData] = useState(null);
//   const [contactData, setContactData] = useState({});

//    const pageTitle = "Contact";
//   const [banner, setBanner] = useState(null);

//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const res = await fetch("https://landing-page-yclw.vercel.app/api/banner");
//         const data = await res.json();

//         if (data.success && Array.isArray(data.data)) {
//           // ✅ Match banner by title (case-insensitive)
//           const matchedBanner = data.data.find(
//             (b) => b.title?.toLowerCase() === pageTitle.toLowerCase()
//           );
//           setBanner(matchedBanner || null);
//         }
//       } catch (error) {
//         console.error("Error fetching banner:", error);
//       }
//     };

//     fetchBanner();
//   }, [pageTitle]);

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/displaycontact")
//       .then((res) => {
//         const contactsArray = res.data.data;
//         const mapped = {};
//         contactsArray.forEach((c) => {
//           mapped[c.title.toLowerCase()] = c;
//         });
//         setContactData(mapped);
//       })
//       .catch((err) => console.error(err));
//   }, []);


//   useEffect(() => {
//   axios
//     .get("https://landing-page-yclw.vercel.app/api/footer")
//     .then((res) => {
//       const footer = res.data.data;
//       console.log("footer data:", footer);
//       if (footer.length > 0) {
//         setFooterData(footer[0]); 
//       }
//     })
//     .catch((err) => console.error(err));
// }, []);




//   function handleChange(e) { setForm(prev => ({ ...prev, [e.target.name]: e.target.value })); }
//   // async function submitForm(e) { e.preventDefault(); setSubmitting(true); setSuccess(null); try { await new Promise(res => setTimeout(res, 900)); setSuccess(true); setForm({ name: "", email: "", phone: "", message: "" }); } catch (err) { setSuccess(false); } finally { setSubmitting(false); } }
//   async function submitForm(e) {
//   e.preventDefault();
//   setSubmitting(true);
//   setSuccess(null);

//   const endpoint =
//     dept === "hr"
//       ? "https://landing-page-yclw.vercel.app/api/contact"
//       : "https://landing-page-yclw.vercel.app/api/salescontact";

//   try {
//     const response = await axios.post(endpoint, form);
//     if (response.status === 201) {
//       setSuccess(true);
//       setForm({ firstName: "", email: "", phoneNumber: "", message: "" });
//     } else {
//       setSuccess(false);
//     }
//   } catch (err) {
//     console.error(err);
//     setSuccess(false);
//   } finally {
//     setSubmitting(false);
//   }
// }


//   return (
//     <div className="w-full min-h-screen mt-[80px]
//     font-sans text-gray-800 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">

//       {/* Banner */}
//         <motion.header
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       className="relative h-64 md:h-96 flex items-center justify-center text-white overflow-hidden rounded-b-3xl shadow-lg"
//     >
//       {/* ✅ Dynamic Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center scale-110 hover:scale-125 transition-transform duration-[6000ms]"
//         style={{
//           backgroundImage: `url(${banner?.bannerImage || "/images/contact-banner.jpg"})`,
//         }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-blue-900 opacity-80" />

//       {/* Text Content */}
//       <div className="relative z-10 text-center px-4">
//         <motion.h1
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.7 }}
//           className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg"
//         >
//           <Typewriter
//             options={{
//               strings: ["Get in Touch", "Connect with Us", "We'd Love to Hear from You"],
//               autoStart: true,
//               loop: true,
//               delay: 50,
//             }}
//           />
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="mt-3 md:mt-5 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
//         >
//           Choose a department and send us a message — we’ll respond within 24-48 hours.
//         </motion.p>
//       </div>

//       {/* Floating Shapes */}
//       <motion.div
//         animate={{ y: [0, -15, 0] }}
//         transition={{ repeat: Infinity, duration: 4 }}
//         className="absolute top-10 left-5 w-5 h-5 bg-blue-300 rounded-full opacity-70"
//       />
//       <motion.div
//         animate={{ y: [0, 20, 0] }}
//         transition={{ repeat: Infinity, duration: 6 }}
//         className="absolute bottom-10 right-10 w-8 h-8 bg-blue-400 rounded-full opacity-60"
//       />
//     </motion.header>


//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto -mt-16 relative z-20 px-4 pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//           {/* Left Cards */}
//           <motion.aside initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="space-y-6 lg:col-span-1">
//             {/* Department Card */}
//             <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 rounded-3xl shadow-2xl p-6 hover:shadow-3xl transform hover:-translate-y-1 transition-all">
//               <h3 className="text-xl font-semibold mb-2 text-blue-900">Contact</h3>
//               <p className="text-sm text-blue-800 mb-4">Select department to see contact details</p>
//               <div className="flex gap-3 mb-4">
//                 <button onClick={() => setDept("hr")} className={`flex-1 py-2 rounded-xl font-medium transition transform hover:scale-105 ${dept === "hr" ? "bg-blue-700 text-white shadow-lg" : "bg-white text-blue-700 border border-blue-300"}`}>HR</button>
//                 <button onClick={() => setDept("sales")} className={`flex-1 py-2 rounded-xl font-medium transition transform hover:scale-105 ${dept === "sales" ? "bg-blue-700 text-white shadow-lg" : "bg-white text-blue-700 border border-blue-300"}`}>Sales</button>
//               </div>
//               <div className="p-4 rounded-xl bg-gradient-to-br from-white via-blue-50 to-white shadow-inner">
//                 <h4 className="font-semibold text-blue-800">{contactData[dept]?.title}</h4>
//                 <p className="text-sm mt-1 text-blue-700">{contactData[dept]?.timings}</p>
//                 <div className="mt-3 space-y-1 text-blue-900">
//                   <div className="flex items-center gap-2 text-sm">
//                     <FiPhone className="w-5 h-5" />
//                     <a href={`tel:${contactData[dept]?.phoneNumber}`}>+91 {contactData[dept]?.phoneNumber}</a>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm">
//                     <FiMail className="w-5 h-5" />
//                     <a href={`mailto:${contactData[dept]?.email}`}>{contactData[dept]?.email}</a>
//                   </div>
//                 </div>
//               </div>

//             </div>

//             {/* Company Info (Height Increased) */}
//             <div className="bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 rounded-3xl shadow-2xl p-6 hover:shadow-3xl transform hover:-translate-y-1 transition-all h-72">
//               <h3 className="text-lg font-semibold text-black-900 mb-2">Company Information</h3>
//                 <p className="text-sm text-black-800 leading-relaxed">{footerData?.address}</p>
//               <div className="mt-4 space-y-2 text-sm text-black-900">
//                 <div className="flex items-center gap-2"><FiMapPin className="w-5 h-5" />Head Office: 3rd Floor, Block B</div>
//                 <div className="flex items-center gap-2"><FiClock className="w-5 h-5" />  {footerData?.workinghours} </div>
//                 <div className="flex items-center gap-2"><FiPhone className="w-5 h-5" /><a href={`tel:${footerData?.phone}`}>+91 {footerData?.phone}</a></div>
//                 <div className="flex items-center gap-2"><FiMail className="w-5 h-5" /><a href="mailto:info@example.com">info@example.com</a></div>
//               </div>
//             </div>
//           </motion.aside>

//           {/* Right Form */}
//           <motion.section initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="lg:col-span-2">
//             <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-3xl shadow-2xl p-6 hover:shadow-3xl transform hover:-translate-y-1 transition-all">
//               <h2 className="text-2xl font-semibold text-blue-900 mb-1">Send a message to {contactData[dept]?.title}</h2>
//               <p className="text-sm text-blue-800 mb-4">Fill the form and we will get back to you soon.</p>

//               <form onSubmit={submitForm} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Your name" required className="col-span-1 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 border border-blue-300 hover:border-blue-400 transition" />
//                 <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@domain.com" required className="col-span-1 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 border border-blue-300 hover:border-blue-400 transition" />
//                 <input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="+91 98765 43210" className="col-span-1 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 border border-blue-300 hover:border-blue-400 transition" />
//                 {/* <select value={dept} onChange={(e) => setDept(e.target.value)} className="col-span-1 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 border border-blue-300 hover:border-blue-400 transition">
//                   <option value="hr">Human Resources</option>
//                   <option value="sales">Sales & Partnerships</option>
//                 </select> */}
//                 <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Tell us about your query..." required className="col-span-1 md:col-span-2 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 border border-blue-300 hover:border-blue-400 transition" />
//                 <button type="submit" disabled={submitting} className="col-span-1 md:col-span-2 rounded-lg py-3 bg-blue-600 text-white font-medium shadow hover:bg-blue-700 hover:scale-105 transition transform">{submitting ? "Sending..." : "Send Message"}</button>
//               </form>
//             </div>

//             {/* Map */}
//             <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} id="map" className="mt-6 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all">
//               <iframe title="company-location" className="w-full h-80 md:h-96" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.609348702688!2d73.93276583846169!3d18.51901673896563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b807a73d1d%3A0x31f9db0d6530ee14!2sFTFL%20TECHNOLOGY%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1759215311291!5m2!1sen!2sin" referrerPolicy="no-referrer-when-downgrade"></iframe>
//             </motion.div>
//           </motion.section>
//         </div>
//       </main>
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiUsers, FiTrendingUp, FiMessageCircle } from "react-icons/fi";
// import { motion } from "framer-motion";
// import Typewriter from 'typewriter-effect';
// import axios from "axios";

// export default function ContactPage() {
//   const [dept, setDept] = useState("hr");
//   const [form, setForm] = useState({ firstName: "", email: "", phoneNumber: "", message: "" });
//   const [submitting, setSubmitting] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [footerData, setFooterData] = useState(null);
//   const [contactData, setContactData] = useState({});
//   const pageTitle = "Contact";
//   const [banner, setBanner] = useState(null);

//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const res = await fetch("https://landing-page-yclw.vercel.app/api/banner");
//         const data = await res.json();

//         if (data.success && Array.isArray(data.data)) {
//           const matchedBanner = data.data.find(
//             (b) => b.title?.toLowerCase() === pageTitle.toLowerCase()
//           );
//           setBanner(matchedBanner || null);
//         }
//       } catch (error) {
//         console.error("Error fetching banner:", error);
//       }
//     };

//     fetchBanner();
//   }, [pageTitle]);

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/displaycontact")
//       .then((res) => {
//         const contactsArray = res.data.data;
//         const mapped = {};
//         contactsArray.forEach((c) => {
//           mapped[c.title.toLowerCase()] = c;
//         });
//         setContactData(mapped);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/footer")
//       .then((res) => {
//         const footer = res.data.data;
//         console.log("footer data:", footer);
//         if (footer.length > 0) {
//           setFooterData(footer[0]); 
//         }
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   function handleChange(e) { 
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value })); 
//   }

//   async function submitForm(e) {
//     e.preventDefault();
//     setSubmitting(true);
//     setSuccess(null);

//     const endpoint =
//       dept === "hr"
//         ? "https://landing-page-yclw.vercel.app/api/contact"
//         : "https://landing-page-yclw.vercel.app/api/salescontact";

//     try {
//       const response = await axios.post(endpoint, form);
//       if (response.status === 201) {
//         setSuccess(true);
//         setForm({ firstName: "", email: "", phoneNumber: "", message: "" });
//       } else {
//         setSuccess(false);
//       }
//     } catch (err) {
//       console.error(err);
//       setSuccess(false);
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   return (
//     <div className="w-full min-h-screen font-sans text-gray-800 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

//       {/* Minimal Header Banner */}
//       <motion.header
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative py-20 bg-blue-600"
//       >
//         <div className="absolute inset-0 bg-black/20" />
//         <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
//           <motion.h1
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.7 }}
//             className="text-4xl md:text-6xl font-bold text-white mb-6"
//           >
//             <Typewriter
//               options={{
//                 strings: ["Get in Touch", "Let's Connect", "Contact Our Team"],
//                 autoStart: true,
//                 loop: true,
//                 delay: 70,
//               }}
//             />
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="text-blue-100 text-xl max-w-3xl mx-auto"
//           >
//             Have a project in mind? Let's discuss how we can help bring your vision to life.
//           </motion.p>
//         </div>
//       </motion.header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 py-12 -mt-10">

//         {/* Top Row - Three Cards in Horizontal Layout */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
//         >

//           {/* Department Contact Card */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100 h-full"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <div className={`p-3 rounded-xl ${dept === "hr" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"}`}>
//                 {dept === "hr" ? <FiUsers size={24} /> : <FiTrendingUp size={24} />}
//               </div>
//               <div>
//                 <h3 className="text-lg font-bold text-gray-800">Contact Department</h3>
//                 <p className="text-sm text-gray-600">Choose your department</p>
//               </div>
//             </div>

//             <div className="flex gap-2 mb-4">
//               <button 
//                 onClick={() => setDept("hr")} 
//                 className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
//                   dept === "hr" 
//                     ? "bg-blue-600 text-white shadow-md" 
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 <FiUsers className="inline mr-2" />
//                 HR
//               </button>
//               <button 
//                 onClick={() => setDept("sales")} 
//                 className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
//                   dept === "sales" 
//                     ? "bg-blue-600 text-white shadow-md" 
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 <FiTrendingUp className="inline mr-2" />
//                 Sales
//               </button>
//             </div>

//             <div className="space-y-3">
//               <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
//                 <FiPhone className="text-blue-600 flex-shrink-0" />
//                 <div>
//                   <p className="text-sm text-gray-600">Phone</p>
//                   <a href={`tel:${contactData[dept]?.phoneNumber}`} className="font-semibold text-gray-800 hover:text-blue-600">
//                     +91 {contactData[dept]?.phoneNumber}
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
//                 <FiMail className="text-blue-600 flex-shrink-0" />
//                 <div>
//                   <p className="text-sm text-gray-600">Email</p>
//                   <a href={`mailto:${contactData[dept]?.email}`} className="font-semibold text-gray-800 hover:text-blue-600 break-all">
//                     {contactData[dept]?.email}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Company Information Card */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-blue-500  rounded-2xl shadow-xl p-6 text-white h-full"
//           >
//             <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//               <FiMapPin className="text-blue-200" />
//               Company Information
//             </h3>

//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <FiMapPin className="mt-1 text-blue-200 flex-shrink-0" />
//                 <div>
//                   <p className="font-medium">Office Address</p>
//                   <p className="text-blue-100 text-sm leading-relaxed">{footerData?.address}</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <FiClock className="text-blue-200 flex-shrink-0" />
//                 <div>
//                   <p className="font-medium">Working Hours</p>
//                   <p className="text-blue-100 text-sm">{footerData?.workinghours}</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <FiPhone className="text-blue-200 flex-shrink-0" />
//                 <div>
//                   <p className="font-medium">Main Phone</p>
//                   <a href={`tel:${footerData?.phone}`} className="text-blue-100 text-sm hover:text-white">
//                     +91 {footerData?.phone}
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <FiMail className="text-blue-200 flex-shrink-0" />
//                 <div>
//                   <p className="font-medium">General Email</p>
//                   <a href="mailto:info@example.com" className="text-blue-100 text-sm hover:text-white">
//                     info@example.com
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Map Card */}
//           <motion.div 
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="bg-white rounded-2xl shadow-xl overflow-hidden h-full"
//           >
//             <div className="bg-blue-600  p-4 text-white">
//               <h3 className="font-bold text-lg flex items-center gap-2">
//                 <FiMapPin />
//                 Visit Our Office
//               </h3>
//             </div>
//             <div className="h-64">
//               <iframe 
//                 title="company-location" 
//                 className="w-full h-full"
//                 loading="lazy" 
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.609348702688!2d73.93276583846169!3d18.51901673896563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b807a73d1d%3A0x31f9db0d6530ee14!2sFTFL%20TECHNOLOGY%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1759215311291!5m2!1sen!2sin" 
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Bottom Row - Contact Form (Equal width to top row) */}
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
//         >
//           <div className="flex items-center gap-3 mb-8">
//             <div className="p-3 bg-blue-100 rounded-2xl">
//               <FiMessageCircle className="text-blue-600" size={24} />
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800">Send Message to {contactData[dept]?.title}</h2>
//               <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
//             </div>
//           </div>

//           <form onSubmit={submitForm} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="block text-sm font-semibold text-gray-700">
//                   Your Name *
//                 </label>
//                 <input 
//                   name="firstName" 
//                   value={form.firstName} 
//                   onChange={handleChange} 
//                   placeholder="Enter your full name" 
//                   required 
//                   className="w-full rounded-xl p-4 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none bg-gray-50"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="block text-sm font-semibold text-gray-700">
//                   Email Address *
//                 </label>
//                 <input 
//                   name="email" 
//                   value={form.email} 
//                   onChange={handleChange} 
//                   type="email" 
//                   placeholder="you@company.com" 
//                   required 
//                   className="w-full rounded-xl p-4 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none bg-gray-50"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-gray-700">
//                 Phone Number
//               </label>
//               <input 
//                 name="phoneNumber" 
//                 value={form.phoneNumber} 
//                 onChange={handleChange} 
//                 placeholder="+91 98765 43210" 
//                 className="w-full rounded-xl p-4 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none bg-gray-50"
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-gray-700">
//                 Your Message *
//               </label>
//               <textarea 
//                 name="message" 
//                 value={form.message} 
//                 onChange={handleChange} 
//                 rows={6} 
//                 placeholder="Tell us about your project, requirements, or how we can help you achieve your goals..." 
//                 required 
//                 className="w-full rounded-xl p-4 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none bg-gray-50 resize-none"
//               />
//             </div>

//             <button 
//               type="submit" 
//               disabled={submitting}
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:transform-none group"
//             >
//               {submitting ? (
//                 <span className="flex items-center justify-center">
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Sending Message...
//                 </span>
//               ) : (
//                 <span className="flex items-center justify-center group-hover:gap-3 transition-all">
//                   <FiSend className="transition-transform group-hover:translate-x-1" />
//                   Send Message to {contactData[dept]?.title}
//                 </span>
//               )}
//             </button>
//           </form>

//           {success !== null && (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`mt-6 p-4 rounded-xl ${
//                 success ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'
//               }`}
//             >
//               {success ? '✅ Message sent successfully! We will get back to you soon.' : '❌ Failed to send message. Please try again.'}
//             </motion.div>
//           )}
//         </motion.div>
//       </main>
//     </div>
//   );
// }





// "use client";

// import { useEffect, useState } from "react";
// import {
//   FiPhone,
//   FiMail,
//   FiMapPin,
//   FiClock,
//   FiUsers,
//   FiMessageCircle,
// } from "react-icons/fi";
// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";
// import axios from "axios";

// export default function ContactPage() {
//   const [dept, setDept] = useState("hr");
//   const [form, setForm] = useState({
//     firstName: "",
//     email: "",
//     phoneNumber: "",
//     message: "",
//   });
//   const [submitting, setSubmitting] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [footerData, setFooterData] = useState(null);
//   const [contactData, setContactData] = useState({});
//   const pageTitle = "Contact";
//   const [banner, setBanner] = useState(null);

//   // Fetch banner
//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const res = await fetch("https://landing-page-yclw.vercel.app/api/banner");
//         const data = await res.json();
//         if (data.success && Array.isArray(data.data)) {
//           const matchedBanner = data.data.find(
//             (b) => b.title?.toLowerCase() === pageTitle.toLowerCase()
//           );
//           setBanner(matchedBanner || null);
//         }
//       } catch (error) {
//         console.error("Error fetching banner:", error);
//       }
//     };
//     fetchBanner();
//   }, [pageTitle]);

//   // Fetch contact details
//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/displaycontact")
//       .then((res) => {
//         const mapped = {};
//         res.data.data.forEach((c) => {
//           mapped[c.title.toLowerCase()] = c;
//         });
//         setContactData(mapped);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // Fetch footer
//   useEffect(() => {
//     axios
//       .get("https://landing-page-yclw.vercel.app/api/footer")
//       .then((res) => {
//         if (res.data.data && res.data.data.length > 0)
//           setFooterData(res.data.data[0]);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // Form handlers
//   function handleChange(e) {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   }

//   async function submitForm(e) {
//     e.preventDefault();
//     setSubmitting(true);
//     setSuccess(null);

//     const endpoint =
//       dept === "hr"
//         ? "https://landing-page-yclw.vercel.app/api/contact"
//         : "https://landing-page-yclw.vercel.app/api/salescontact";

//     try {
//       const response = await axios.post(endpoint, form);
//       if (response.status === 201) {
//         setSuccess(true);
//         setForm({ firstName: "", email: "", phoneNumber: "", message: "" });
//       } else {
//         setSuccess(false);
//       }
//     } catch (err) {
//       console.error(err);
//       setSuccess(false);
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   return (
//     <div className="w-full min-h-screen font-sans text-gray-800 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
//       {/* === Banner === */}
//       <motion.header
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative h-64 md:h-96 flex items-center justify-center text-white overflow-hidden rounded-b-3xl shadow-lg"
//       >
//         {/* Background */}
//         <div
//           className="absolute inset-0 bg-cover bg-center scale-110 hover:scale-125 transition-transform duration-[6000ms]"
//           style={{
//             backgroundImage: `url(${banner?.bannerImage || "/images/contact-banner.jpg"})`,
//           }}
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-blue-900 opacity-80" />

//         {/* Text Content */}
//         <div className="relative z-10 text-center px-4">
//           <motion.h1
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.7 }}
//             className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg"
//           >
//             <Typewriter
//               options={{
//                 strings: ["Get in Touch", "Connect with Us", "We'd Love to Hear from You"],
//                 autoStart: true,
//                 loop: true,
//                 delay: 50,
//               }}
//             />
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="mt-3 md:mt-5 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
//           >
//             Choose a department and send us a message — we’ll respond within 24-48 hours.
//           </motion.p>
//         </div>
//       </motion.header>

//       {/* === Contact Section === */}
//       <main className="max-w-7xl mx-auto px-4 py-10">
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
//           {/* LEFT SIDE */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 auto-rows-[1fr]">
//             {/* Company Info */}
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white/95 rounded-2xl shadow-lg p-4 border border-white/30 text-gray-800 flex flex-col"
//             >
//               <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
//                 <FiMapPin className="text-blue-600" /> Company Information
//               </h3>
//               <p className="text-md text-gray-700 mb-2 leading-snug">
//                 {footerData?.address}
//               </p>

//               <div className="space-y-2 mt-auto text-md">
//                 <div className="flex items-center gap-2">
//                   <FiPhone className="text-blue-600" />
//                   <a href={`tel:${footerData?.phone}`} className="font-medium hover:text-blue-600">
//                     +91 {footerData?.phone}
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FiMail className="text-blue-600" />
//                   <a
//                     href={`mailto:${footerData?.email}`}
//                     className="font-medium hover:text-blue-600 break-all"
//                   >
//                     {footerData?.email}
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FiClock className="text-blue-600" />
//                   <span>{footerData?.workinghours}</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Departments */}
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.55 }}
//               className="bg-white/95 rounded-2xl shadow-lg p-4 border border-white/30 text-gray-800 flex flex-col"
//             >
//               <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
//                 <FiUsers className="text-blue-600" /> Departments
//               </h3>

//               {/* HR */}
//               <div className="mb-3">
//                 <h4 className="font-semibold text-white mb-1 bg-blue-500 rounded-md inline-block px-2 py-[2px] text-md">
//                   HR Department
//                 </h4>
//                 <div className="space-y-1 text-md">
//                   <div className="flex items-center gap-2">
//                     <FiPhone className="text-blue-600" />
//                     <span className="font-medium">+91 {contactData.hr?.phoneNumber}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FiMail className="text-blue-600" />
//                     <span className="font-medium break-all">{contactData.hr?.email}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Sales */}
//               <div>
//                 <h4 className="font-semibold text-white mb-1 bg-blue-500 rounded-md inline-block px-2 py-[2px] text-md">
//                   Sales Department
//                 </h4>
//                 <div className="space-y-1 text-md">
//                   <div className="flex items-center gap-2">
//                     <FiPhone className="text-blue-600" />
//                     <span className="font-medium">+91 {contactData.sales?.phoneNumber}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <FiMail className="text-blue-600" />
//                     <span className="font-medium break-all">{contactData.sales?.email}</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Map */}
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="bg-white/95 rounded-2xl shadow-lg overflow-hidden border border-white/30 lg:col-span-2 flex-1 flex flex-col"
//             >
//               <div className="bg-blue-600 px-3 py-2 text-white text-sm font-medium">Find Us</div>
//               <div className="flex-1">
//                 <iframe
//                   title="company-location"
//                   className="w-full h-full min-h-[200px] lg:min-h-[220px]"
//                   loading="lazy"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.609348702688!2d73.93276583846169!3d18.51901673896563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b807a73d1d%3A0x31f9db0d6530ee14!2sFTFL%20TECHNOLOGY%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1759215311291!5m2!1sen!2sin"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT SIDE FORM */}
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 text-gray-800 flex flex-col justify-between"
//           >
//             <div>
//               <div className="flex items-center gap-3 mb-5">
//                 <div className="p-2.5 bg-blue-50 rounded-xl">
//                   <FiMessageCircle className="text-blue-600" size={22} />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     Send us a message
//                   </h2>
//                   <p className="text-gray-600 text-sm">
//                     Fill in the form below — our team will get back to you soon.
//                   </p>
//                 </div>
//               </div>

//               <form onSubmit={submitForm} className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <input
//                     name="firstName"
//                     value={form.firstName}
//                     onChange={handleChange}
//                     placeholder="Name"
//                     required
//                     className="w-full rounded-lg p-2.5 border border-gray-200 bg-gray-50 text-sm focus:ring-2 focus:ring-blue-100"
//                   />
//                   <input
//                     name="email"
//                     type="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     placeholder="Email"
//                     required
//                     className="w-full rounded-lg p-2.5 border border-gray-200 bg-gray-50 text-sm focus:ring-2 focus:ring-blue-100"
//                   />
//                 </div>

//                 <input
//                   name="phoneNumber"
//                   value={form.phoneNumber}
//                   onChange={handleChange}
//                   placeholder="Phone"
//                   className="w-full rounded-lg p-2.5 border border-gray-200 bg-gray-50 text-sm focus:ring-2 focus:ring-blue-100"
//                 />

//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   rows={4}
//                   placeholder="Message"
//                   required
//                   className="w-full rounded-lg p-2.5 border border-gray-200 bg-gray-50 text-sm focus:ring-2 focus:ring-blue-100 resize-none"
//                 />

//                 <button
//                   type="submit"
//                   disabled={submitting}
//                   className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-[1.01]"
//                 >
//                   {submitting
//                     ? "Sending..."
//                     : `Send Message to ${contactData[dept]?.title || "Team"}`}
//                 </button>
//               </form>

//               {success !== null && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className={`mt-4 p-2.5 rounded-md text-xs ${
//                     success
//                       ? "bg-green-50 text-green-700 border border-green-200"
//                       : "bg-red-50 text-red-700 border border-red-200"
//                   }`}
//                 >
//                   {success
//                     ? "✅ Message sent successfully! We'll get back to you soon."
//                     : "❌ Failed to send message. Please try again."}
//                 </motion.div>
//               )}
//             </div>

//             <div className="mt-4 text-[10px] text-gray-500">
//               We respect your privacy. Your info will not be shared.
//             </div>
//           </motion.div>
//         </section>
//       </main>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiClock,
  FiUsers,
  FiMessageCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function ContactPage() {
  const [dept, setDept] = useState("hr");
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const [footerData, setFooterData] = useState(null);
  const [contactData, setContactData] = useState({});
  const [banner, setBanner] = useState(null);
  const pageTitle = "Contact";
    const ref = useRef(null);
  

  // === Fetch Banner ===
useEffect(() => {
    const canvas = document.getElementById("networkCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const points = [];
    const POINT_COUNT = 35;

    for (let i = 0; i < POINT_COUNT; i++) {
      points.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 2 + 1,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
      });
    }

    function drawLine(p1, p2, opacity) {
      ctx.strokeStyle = `rgba(110,190,255,${opacity})`;
      ctx.lineWidth = 1.2;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);

      ctx.quadraticCurveTo(
        (p1.x + p2.x) / 2,
        (p1.y + p2.y) / 2 + Math.sin(Date.now() * 0.001) * 20,
        p2.x,
        p2.y
      );

      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);

      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, "rgba(0,150,255,0.06)");
      gradient.addColorStop(1, "rgba(0,255,255,0.05)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < POINT_COUNT; i++) {
        const p = points[i];

        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3 * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140,220,255,${0.35 * p.z})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#3ab4ff";
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < POINT_COUNT; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < 240) drawLine(p, p2, 1 - dist / 240);
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  // === Fetch Contact Info ===
  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/displaycontact")
      .then((res) => {
        const mapped = {};
        res.data.data.forEach((c) => {
          mapped[c.title.toLowerCase()] = c;
        });
        setContactData(mapped);
      })
      .catch((err) => console.error(err));
  }, []);

  // === Fetch Footer Info ===
  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/footer")
      .then((res) => {
        if (res.data.data && res.data.data.length > 0)
          setFooterData(res.data.data[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  // === Form Handlers ===
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);

    const endpoint =
      dept === "hr"
        ? "https://landing-page-yclw.vercel.app/api/contact"
        : "https://landing-page-yclw.vercel.app/api/salescontact";

    try {
      const response = await axios.post(endpoint, form);
      if (response.status === 201) {
        setSuccess(true);
        setForm({ firstName: "", email: "", phoneNumber: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-gray-50">
      {/* ==== Hero Banner ==== */}
      <div
      ref={ref}
      className="relative h-[35vh] min-h-[420px] max-h-[480px] overflow-hidden 
      bg-gradient-to-r from-[#021030] via-[#032781] to-[#01154b]"
    >
      {/* Bottom Blue Glow */}
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-70 z-5">
        <div className="neon-wave"></div>
      </div>

      {/* Network Canvas */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <canvas id="networkCanvas" className="w-full h-full"></canvas>
      </div>

      {/* Other Background Effects */}
      <div className="absolute inset-0 z-5">
        <div className="circuit-lines"></div>
      </div>

      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="neon-dots"></div>
      </div>

      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="floating-polygons"></div>
      </div>

      {/* CONTENT */}
      <motion.div
        className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 py-6 relative z-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="max-w-4xl mx-auto w-full px-4">

          {/* TITLE */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <Typewriter
              options={{
                strings: ["Get in Touch", "Let's Talk", "We'd Love to Hear From You"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Have a project in mind? We’re here to help bring your ideas to life.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() =>
                document.getElementById("contact-form")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#298cf3] to-blue-600 
              text-white font-semibold cursor-pointer hover:shadow-lg hover:scale-[1.05]
              transition-transform duration-300"
            >
              Contact Now
            </button>

            <button
              onClick={() =>
                document.getElementById("office-section")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-8 py-3 rounded-lg bg-white/10 border border-white/20 
              text-white backdrop-blur-md cursor-pointer hover:bg-white/20 
              transition-all duration-300"
            >
              Our Office Locations
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom White Curve */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-white clip-path-angle z-30"></div>
    </div>


      {/* ==== Main Content ==== */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* ==== Contact Info ==== */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* HR Department */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <FiUsers className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">HR Department</h3>
                      <p className="text-gray-600">
                        📞 {contactData.hr?.phoneNumber || "N/A"}
                      </p>
                      <p className="text-gray-600">
                        ✉️ {contactData.hr?.email || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Sales Department */}
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <FiUsers className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Sales Department</h3>
                      <p className="text-gray-600">
                        📞 {contactData.sales?.phoneNumber || "N/A"}
                      </p>
                      <p className="text-gray-600">
                        ✉️ {contactData.sales?.email || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <FiMapPin className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Office</h3>
                      <p className="text-gray-600">{footerData?.address || "Address not available"}</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <FiClock className="text-orange-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Hours</h3>
                      <p className="text-gray-600">{footerData?.workinghours || "Mon-Fri: 9AM - 6PM"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ==== Contact Form ==== */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Choose a department and send us a message — we’ll respond soon.
                  </p>
                </div>

                {/* Department Select */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Department
                  </label>
                  <select
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="hr">HR Department</option>
                    <option value="sales">Sales Department</option>
                  </select>
                </div>

                <form onSubmit={submitForm} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows="6"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  {success !== null && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`text-center font-medium ${
                        success ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {success
                        ? "✅ Message sent successfully!"
                        : "❌ Failed to send message. Please try again."}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    {submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <FiSend className="text-lg" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==== Map Section ==== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Come say hello at our headquarters. We're located in the heart of the city with easy access and parking.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.609348702688!2d73.93276583846169!3d18.51901673896563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b807a73d1d%3A0x31f9db0d6530ee14!2sFTFL%20TECHNOLOGY%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1759215311291!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


