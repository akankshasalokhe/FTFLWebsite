// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FaAward,
//   FaUsers,
//   FaLightbulb,
//   FaHandshake,
//   FaArrowRight,
//   FaQuoteLeft,
// } from "react-icons/fa";
// import axios from "axios";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       id: 1,
//       icon: <FaAward className="text-white text-3xl" />,
//       title: "Certified Programs",
//       description: "Gain industry-recognized certificates to enhance your resume.",
//     },
//     {
//       id: 2,
//       icon: <FaUsers className="text-white text-3xl" />,
//       title: "Expert Mentors",
//       description: "Learn from experienced professionals guiding you every step.",
//     },
//     {
//       id: 3,
//       icon: <FaLightbulb className="text-white text-3xl" />,
//       title: "Practical Learning",
//       description: "Hands-on projects and real-world problem solving.",
//     },
//     {
//       id: 4,
//       icon: <FaHandshake className="text-white text-3xl" />,
//       title: "Career Support",
//       description: "Get placement assistance and internship opportunities.",
//     },
//   ];

//   const stats = [
//     { value: 95, suffix: "%", label: "Completion Rate" },
//     { value: 1000, suffix: "+", label: "Students Enrolled" },
//     { value: 50, suffix: "+", label: "Expert Mentors" },
//     { value: 85, suffix: "%", label: "Placement Rate" },
//   ];

//   const testimonials = [
//     {
//       id: 1,
//       quote:
//         "This program completely transformed my career path. The practical approach helped me land my dream job!",
//       author: "Alex Johnson",
//       role: "Software Developer",
//     },
//     {
//       id: 2,
//       quote:
//         "The mentorship I received was invaluable. The instructors are truly experts in their fields.",
//       author: "Maria Rodriguez",
//       role: "Data Scientist",
//     },
//     {
//       id: 3,
//       quote:
//         "The certification was recognized by all the companies I applied to. Worth every penny!",
//       author: "James Wilson",
//       role: "UX Designer",
//     },
//   ];

//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [countUp, setCountUp] = useState(stats.map(() => 0));
//   const [testimonialsData, setTestimonialsData] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);


//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {

//         const res = await axios.get(`https://landing-page-yclw.vercel.app/api/testimonial`);
//         if (res.data.success) {
//           const filtered = res.data.data.filter((item) => item.sectionTitle === "Internship");
//           console.log("Filtered Testimonials:", filtered);
//           setTestimonialsData(filtered);
//         }
//         console.log("Fetched Testimonials:", res.data.data);
//       } catch (err) {
//         console.error("Error fetching testimonials:", err);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   useEffect(() => {
//     // animate stats count-up
//     const anim = stats.map((stat, index) => {
//       let start = 0;
//       const end = stat.value;
//       const step = Math.ceil(end / 50);
//       const interval = setInterval(() => {
//         start += step;
//         if (start >= end) {
//           start = end;
//           clearInterval(interval);
//         }
//         setCountUp((prev) => {
//           const updated = [...prev];
//           updated[index] = start;
//           return updated;
//         });
//       }, 20);
//       return interval;
//     });

//     return () => anim.forEach((i) => clearInterval(i));
//   }, []);

//   return (
//     <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 overflow-hidden">
//       {/* Top Wave Separator */}
//       <svg
//         className="absolute top-0 left-0 w-full -mt-20"
//         viewBox="0 0 1440 320"
//       >
//         <path
//           fill="#f3f4f6"
//           fillOpacity="1"
//           d="M0,96L80,106.7C160,117,320,139,480,165.3C640,192,800,224,960,234.7C1120,245,1280,235,1360,229.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
//         ></path>
//       </svg>

//       {/* Animated background particles */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-pulse"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto text-center relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
//         >
//           Why Choose{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
//             Us
//           </span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto"
//         >
//           Our program is designed to empower you with real skills, mentorship,
//           and career opportunities. Here's why hundreds of students trust us.
//         </motion.p>

//         {/* Stats Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
//         >
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-400 transition-all duration-500 shadow-md hover:shadow-xl"
//             >
//               <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
//                 {countUp[index]}
//                 {stat.suffix}
//               </div>
//               <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Features Grid */}
//         <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
//           {features.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 20, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true, margin: "-50px" }}
//               whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
//               className="relative bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-md group overflow-hidden"
//               style={{
//                 background:
//                   "linear-gradient(white, white) padding-box, linear-gradient(to right, #9333EA, #EC4899) border-box",
//                 border: "2px solid transparent",
//               }}
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-gradient-to-br from-blue-600 to-blue-500/50 shadow-lg">
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Testimonial Slider */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="max-w-4xl mx-auto mb-12 relative"
//         >
//           <div className="overflow-hidden rounded-2xl bg-white shadow-md relative">
//             <FaQuoteLeft className="text-purple-200 text-4xl absolute top-6 left-6" />
//             <motion.div
//               className="flex transition-transform duration-500"
//               animate={{ x: `-${currentTestimonial * 100}%` }}
//             >
//               {testimonialsData.map((t) => (
//                 <div
//                   key={t.id}
//                   className="min-w-full p-8 text-center flex-shrink-0"
//                 >
//                   <p className="text-gray-700 text-lg italic mb-6">"{t.description}"</p>
//                   <div>
//                     <p className="font-semibold text-gray-900">{t.fullName}</p>
//                     <p className="text-sm text-gray-600">{t.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//           <div className="flex justify-center mt-6 space-x-2">
//             {testimonials.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentTestimonial(idx)}
//                 className={`w-3 h-3 rounded-full ${
//                   idx === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </motion.div> */}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="w-full mx-auto mb-12 px-2 sm:px-4 lg:px-8"
//         >
//           {/* Testimonial Card */}
//           <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-white shadow-sm border border-gray-100 min-h-[200px]">
//             <FaQuoteLeft className="text-purple-200 text-lg sm:text-2xl md:text-3xl absolute top-3 left-3 sm:top-4 sm:left-4 z-10" />

//             <motion.div
//               className="flex transition-transform duration-500 ease-in-out"
//               animate={{ x: `-${currentTestimonial * 100}%` }}
//             >
//               {testimonialsData.map((t) => (
//                 <div
//                   key={t.id}
//                   className="min-w-full flex-shrink-0 p-4 sm:p-5 md:p-6 flex flex-col justify-center"
//                 >
//                   {/* Testimonial Text - Full width with proper constraints */}
//                   <div className="w-full">
//                     <p className="text-gray-700 text-xs sm:text-sm md:text-base italic mb-3 sm:mb-4 leading-relaxed text-center break-all word-break-break-all overflow-wrap-break-word">
//                       "{t.description}"
//                     </p>
//                   </div>

//                   {/* Author Info */}
//                   <div className="flex flex-col items-center justify-center text-center mt-3 sm:mt-4">
//                     <p className="font-medium text-gray-900 text-xs sm:text-sm md:text-base">{t.fullName}</p>
//                     <p className="text-gray-500 text-xs sm:text-sm mt-1">{t.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Navigation Dots */}
//           <div className="flex justify-center mt-4 sm:mt-5 space-x-2">
//             {testimonialsData.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentTestimonial(idx)}
//                 className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${idx === currentTestimonial
//                     ? "bg-blue-600 scale-125"
//                     : "bg-gray-300 hover:bg-gray-400"
//                   }`}
//                 aria-label={`Go to testimonial ${idx + 1}`}
//               />
//             ))}
//           </div>
//         </motion.div>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-blue-400 rounded-full shadow-2xl transition-all duration-300 ease-out hover:ring-8 hover:ring-purple-300 hover:ring-opacity-50">
//             <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-700 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
//             <span className="relative flex items-center">
//               Start Learning Today{" "}
//               <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
//             </span>
//           </button>
//         </motion.div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0%,
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           25% {
//             transform: translate(30px, -50px) scale(1.05);
//           }
//           50% {
//             transform: translate(-20px, 20px) scale(0.95);
//           }
//           75% {
//             transform: translate(-30px, 30px) scale(1.1);
//           }
//         }
//         .animate-blob {
//           animation: blob 10s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//         .animation-delay-6000 {
//           animation-delay: 6s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default WhyChooseUs;





"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaArrowRight,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import axios from "axios";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaAward className="text-white text-3xl" />,
      title: "Certified Programs",
      description: "Gain industry-recognized certificates to enhance your resume.",
    },
    {
      id: 2,
      icon: <FaUsers className="text-white text-3xl" />,
      title: "Expert Mentors",
      description: "Learn from experienced professionals guiding you every step.",
    },
    {
      id: 3,
      icon: <FaLightbulb className="text-white text-3xl" />,
      title: "Practical Learning",
      description: "Hands-on projects and real-world problem solving.",
    },
    {
      id: 4,
      icon: <FaHandshake className="text-white text-3xl" />,
      title: "Career Support",
      description: "Get placement assistance and internship opportunities.",
    },
  ];

  const stats = [
    { value: 95, suffix: "%", label: "Completion Rate" },
    { value: 1000, suffix: "+", label: "Students Enrolled" },
    { value: 50, suffix: "+", label: "Expert Mentors" },
    { value: 85, suffix: "%", label: "Placement Rate" },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [countUp, setCountUp] = useState(stats.map(() => 0));
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Determine how many items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialsData.length]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`https://landing-page-yclw.vercel.app/api/testimonial`);
        if (res.data.success) {
          const filtered = res.data.data.filter((item) => item.sectionTitle === "Internship");
          console.log("Filtered Testimonials:", filtered);
          setTestimonialsData(filtered);
        }
        console.log("Fetched Testimonials:", res.data.data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const anim = stats.map((stat, index) => {
      let start = 0;
      const end = stat.value;
      const step = Math.ceil(end / 50);
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCountUp((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 20);
      return interval;
    });

    return () => anim.forEach((i) => clearInterval(i));
  }, []);

  const nextSlide = () => {
    if (currentTestimonial >= testimonialsData.length - itemsToShow) {
      setCurrentTestimonial(0);
    } else {
      setCurrentTestimonial(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentTestimonial <= 0) {
      setCurrentTestimonial(testimonialsData.length - itemsToShow);
    } else {
      setCurrentTestimonial(prev => prev - 1);
    }
  };

  // Get the testimonials to display
  const getVisibleTestimonials = () => {
    if (testimonialsData.length === 0) return [];
    
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentTestimonial + i) % testimonialsData.length;
      visible.push(testimonialsData[index]);
    }
    return visible;
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top Wave Separator */}
      <svg
        className="absolute top-0 left-0 w-full -mt-20"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f4f6"
          fillOpacity="1"
          d="M0,96L80,106.7C160,117,320,139,480,165.3C640,192,800,224,960,234.7C1120,245,1280,235,1360,229.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>

      {/* Animated background particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
        >
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Us
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-gray-700 text-base sm:text-lg md:text-xl mb-10 md:mb-12 max-w-3xl mx-auto"
        >
          Our program is designed to empower you with real skills, mentorship,
          and career opportunities. Here's why hundreds of students trust us.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-14"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-400 transition-all duration-500 shadow-md hover:shadow-xl"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {countUp[index]}
                {stat.suffix}
              </div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-4 md:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10 md:mb-14">
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
              className="relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group overflow-hidden"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(to right, #9333EA, #EC4899) border-box",
                border: "2px solid transparent",
              }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-5 rounded-full bg-gradient-to-br from-blue-600 to-blue-500/50 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        {testimonialsData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10 md:mb-12"
          >
            <div className="text-center mb-8 md:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                Student Testimonials
              </h3>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                What our students say about our programs
              </p>
            </div>

            <div className="relative">
              {/* Navigation arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous testimonials"
              >
                <FaChevronLeft className="text-blue-600 w-4 h-4 md:w-5 md:h-5" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Next testimonials"
              >
                <FaChevronRight className="text-blue-600 w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* Testimonial cards container */}
              <div className="relative overflow-hidden">
                <div className={`grid grid-cols-1 ${itemsToShow >= 2 ? 'md:grid-cols-2' : ''} ${itemsToShow >= 3 ? 'lg:grid-cols-3' : ''} gap-4 md:gap-6 px-2 md:px-4`}>
                  {getVisibleTestimonials().map((testimonial, index) => (
                    <motion.div
                      key={`${currentTestimonial}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full"
                    >
                      <div className="flex items-start mb-3 md:mb-4">
                        <FaQuoteLeft className="text-blue-600 text-lg md:text-xl mr-2 md:mr-3 mt-1 flex-shrink-0" />
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                          "{testimonial.description}"
                        </p>
                      </div>
                      <div className="flex items-center mt-4 md:mt-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold mr-3 md:mr-4 flex-shrink-0">
                          {testimonial.fullName ? testimonial.fullName.charAt(0) : 'U'}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm md:text-base truncate">
                            {testimonial.fullName}
                          </h4>
                          <p className="text-gray-500 text-xs md:text-sm truncate">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center mt-4 md:mt-6">
                {testimonialsData.length > 0 && Array.from(
                  { length: Math.ceil(testimonialsData.length / itemsToShow) }, 
                  (_, i) => i
                ).map((index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const newIndex = index * itemsToShow;
                      setCurrentTestimonial(newIndex);
                    }}
                    className={`mx-1 w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial >= index * itemsToShow && 
                      currentTestimonial < (index + 1) * itemsToShow
                        ? 'bg-blue-600 w-4 md:w-6' 
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial group ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium text-white bg-blue-400 rounded-full shadow-2xl transition-all duration-300 ease-out hover:ring-8 hover:ring-purple-300 hover:ring-opacity-50">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-700 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            <span className="relative flex items-center text-sm sm:text-base">
              Start Learning Today{" "}
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;