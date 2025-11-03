// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useState } from "react";
// import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare, FiArrowRight } from "react-icons/fi";

// const ContactForm = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.2,
//     triggerOnce: true
//   });

//   const [formData, setFormData] = useState({
//     firstName: "",
//     email: "",
//     phoneNumber: "",
//     message: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
    
//     // Format phone number as user types
//     if (name === "phoneNumber") {
//       const formattedValue = formatPhoneNumber(value);
//       setFormData(prev => ({ ...prev, [name]: formattedValue }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
    
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };

//   // Helper function to format phone number
//   const formatPhoneNumber = (value) => {
//     // Remove all non-digit characters
//     const cleaned = value.replace(/\D/g, '');
    
//     // Apply formatting based on length
//     if (cleaned.length <= 3) {
//       return cleaned;
//     } else if (cleaned.length <= 7) {
//       return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
//     } else {
//       return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7, 11)}`;
//     }
//   };

//   const validate = () => {
//     const newErrors = {};
    
//     if (!formData.firstName.trim()) newErrors.firstName = "Name is required";
    
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }
    
//     if (!formData.phoneNumber.trim()) {
//       newErrors.phoneNumber = "Phone number is required";
//     } else if (formData.phoneNumber.replace(/\D/g, '').length !== 10) {
//       newErrors.phoneNumber = "Phone number must be 10 digits";
//     }
    
//     if (!formData.message.trim()) newErrors.message = "Message is required";
    
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
    
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setIsSubmitting(true);
    
//     try {
//       // Prepare data for API (remove dashes from phone number)
//       const submissionData = {
//         ...formData,
//         phoneNumber: formData.phoneNumber.replace(/-/g, '')
//       };

//       // Send data to backend API
//       const response = await fetch('https://landing-page-yclw.vercel.app/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(submissionData),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.message || 'Failed to submit form');
//       }

//       setIsSuccess(true);
//       setFormData({ firstName: "", email: "", phoneNumber: "", message: "" });
//     } catch (error) {
//       console.error("Submission error:", error);
//       setErrors({ submit: error.message || "Failed to send message. Please try again later." });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#298cf3] to-blue-600 px-4 py-2 rounded-lg mb-4">
//             <span className="text-white font-medium">Contact Us</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
//             Let's <span className="text-blue-600">Connect</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Have a project in mind? Our team is ready to bring your ideas to life.
//           </p>
//         </motion.div>

//         {/* Form Card */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={inView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.5 }}
//           className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
//         >
//           {isSuccess ? (
//             <div className="p-8 text-center">
//               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <svg
//                   className="w-10 h-10 text-green-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                 Message Sent!
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 We've received your message and will get back to you within 24 hours.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 onClick={() => setIsSuccess(false)}
//                 className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 inline-flex items-center gap-2"
//               >
//                 Send Another <FiArrowRight />
//               </motion.button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="p-6 sm:p-8">
//               <div className="mb-6">
//                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Name
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiUser className="text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className={`pl-10 w-full rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 {errors.firstName && (
//                   <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
//                 )}
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiMail className="text-gray-400" />
//                   </div>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`pl-10 w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
//                     placeholder="you@example.com"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                 )}
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone Number
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiPhone className="text-gray-400" />
//                   </div>
//                   <input
//                     type="tel"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     className={`pl-10 w-full rounded-lg border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
//                     placeholder="123-456-7890"
//                     maxLength="12"
//                   />
//                 </div>
//                 {errors.phoneNumber && (
//                   <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
//                 )}
//               </div>

//               <div className="mb-8">
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Message
//                 </label>
//                 <div className="relative">
//                   <div className="absolute top-3 left-3">
//                     <FiMessageSquare className="text-gray-400" />
//                   </div>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="5"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className={`pl-10 w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
//                     placeholder="Tell us about your project..."
//                   ></textarea>
//                 </div>
//                 {errors.message && (
//                   <p className="mt-1 text-sm text-red-600">{errors.message}</p>
//                 )}
//               </div>

//               {errors.submit && (
//                 <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
//                   {errors.submit}
//                 </div>
//               )}

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white ${isSubmitting ? 'bg-blue-500/80' : 'bg-blue-600 hover:bg-blue-700'} transition-all duration-300 shadow-md`}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     <FiSend className="mr-2" />
//                     Send Message
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;


"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";


const bgImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";

// Reusable typewriter overlay component for an input/textarea
function TypewriterOverlay({ phrases = [], active = false, bound = true }) {
  const [displayed, setDisplayed] = useState("");
  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const typingRef = useRef(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    // only run when not active (not focused) and when user didn't type
    if (active) {
      setDisplayed("");
      return;
    }

    const handleTick = () => {
      const current = phrases[phraseIndexRef.current] || "";
      if (typingRef.current) {
        // type forward
        if (charIndexRef.current < current.length) {
          charIndexRef.current += 1;
          setDisplayed(current.slice(0, charIndexRef.current));
        } else {
          // pause then delete
          typingRef.current = false;
          clearInterval(intervalRef.current);
          setTimeout(() => {
            intervalRef.current = setInterval(handleTick, 45);
          }, 700);
        }
      } else {
        // deleting
        if (charIndexRef.current > 0) {
          charIndexRef.current -= 1;
          setDisplayed(current.slice(0, charIndexRef.current));
        } else {
          // move to next
          clearInterval(intervalRef.current);
          phraseIndexRef.current = (phraseIndexRef.current + 1) % phrases.length;
          typingRef.current = true;
          setTimeout(() => {
            charIndexRef.current = 0;
            intervalRef.current = setInterval(handleTick, 45);
          }, 200);
        }
      }
    };

    // start
    intervalRef.current = setInterval(handleTick, 45);
    return () => clearInterval(intervalRef.current);
    // re-run only when active changes (focus/typing) or phrases change
  }, [active, phrases]);

  // optional ellipsis truncation if the overlay is long and bound to container
  const text = bound && displayed.length > 70 ? displayed.slice(0, 67) + "..." : displayed;

  if (active) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 select-none whitespace-nowrap overflow-hidden"
      style={{ display: text ? "block" : "block" }}
    >
      <span>{text}</span>
      <span className="inline-block w-[1.2px] h-5 bg-gray-400 ml-1 animate-blink" />
      <style jsx>{`
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default function ContactSectionAnimated() {
  // form state
  const [values, setValues] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [focused, setFocused] = useState({
    firstName: false,
    email: false,
    phoneNumber: false,
    message: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // placeholder phrases for each field
  const namePhrases = ["Your full name", "Who should we address?"];
  const emailPhrases = ["Your email address", "e.g., you@company.com"];
  const phonePhrases = ["Phone number", "+91 12345 67890"];
  const messagePhrases = [
    "Tell us about your message...",
    "How can we assist you?",
    "We're here to help!",
  ];

  // handle input change (phone formatting allows + and digits)
  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "phone") {
      // allow + and digits only
      const cleaned = value.replace(/[^\d+]/g, "");
      setValues((p) => ({ ...p, [name]: cleaned }));
    } else {
      setValues((p) => ({ ...p, [name]: value }));
    }
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  }

  function validate() {
    const e = {};
    if (!values.firstName.trim()) e.firstName = "Name is required";
    if (!values.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Invalid email";
    if (!values.phoneNumber.trim()) e.phoneNumber = "Phone is required";
    else {
      const digits = values.phoneNumber.replace(/\D/g, "");
      if (digits.length !== 10) e.phoneNumber = "Phone must be 10 digits";
    }
    if (!values.message.trim()) e.message = "Message is required";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      // focus first invalid field for UX
      const first = Object.keys(v)[0];
      document.querySelector(`[name="${first}"]`)?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      // prepare submission - remove non-digit from phone
      const payload = { ...values, phoneNumber: values.phoneNumber.replace(/\D/g, "") };

      const res = await fetch("https://landing-page-yclw.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Submission failed");

      setSuccess(true);
      setValues({ firstName: "", email: "", phoneNumber: "", message: "" });
      setErrors({});
    } catch (err) {
      setErrors({ submit: err.message || "Failed to send. Try again later." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* soft glowing circles behind left panel */}
      <div className="absolute left-12 top-24 -z-10 pointer-events-none">
        <div className="relative w-[420px] h-[420px]">
          <motion.div
            animate={{ y: [0, -18, 0], opacity: [0.85, 0.6, 0.85], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-400/40 via-cyan-300/30 to-emerald-300/20 blur-3xl"
            style={{ left: -60, top: -40 }}
          />
          <motion.div
            animate={{ x: [0, 22, 0], opacity: [0.7, 0.45, 0.7], scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
            className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-pink-400/30 via-violet-400/25 to-indigo-400/15 blur-2xl"
            style={{ left: 40, top: 40 }}
          />
        </div>
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* LEFT: Heading + paragraph (no phone/email/socials here per request) */}
          <div className="text-white px-6 md:px-0">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-blue-200 to-cyan-200">
                Contact Us
              </span>
            </h1>

            {/* animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "180px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-indigo-400 to-cyan-300 rounded-full mb-6"
            />

            <p className="text-slate-100/85 text-lg md:text-xl max-w-xl">
              We love turning ideas into digital reality — web, mobile & cloud.
              Tell us the challenge you’re solving and we’ll propose the best
              solution and next steps.
            </p>

            <div className="mt-8">
              <p className="text-sm text-slate-200/70">Available for new projects</p>
            </div>
          </div>

          {/* RIGHT: Form card */}
          <div className="bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl">
            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-4 relative">
                {/* NAME */}
                <div className="relative">
  <label className="text-sm text-white/80 mb-2 block">Name</label>
  <div className="relative">
    <FiUser className="absolute left-4 top-4 text-white/50" />
    <input
      name="firstName"
      value={values.firstName}
      onChange={handleChange}
      onFocus={() => setFocused((p) => ({ ...p, firstName: true }))}
      onBlur={() => setFocused((p) => ({ ...p, firstName: false }))}
      className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border ${
        errors.firstName ? "border-rose-400" : "border-white/10"
      } text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400`}
      placeholder=" "
    />
    {values.firstName.length === 0 && (
      <div className="absolute left-8 top-6 text-white/40 pointer-events-none">
        <TypewriterOverlay phrases={namePhrases} active={focused.firstName} />
      </div>
    )}
  </div>
  {errors.firstName && <p className="text-xs text-rose-400 mt-1">{errors.firstName}</p>}
</div>

                {/* EMAIL */}
                <div className="relative">
                  <label className="text-sm text-white/80 mb-2 block">Email</label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-4 text-white/50" />
                    <input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onFocus={() => setFocused((p) => ({ ...p, email: true }))}
                      onBlur={() => setFocused((p) => ({ ...p, email: false }))}
                      className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border ${
                        errors.email ? "border-rose-400" : "border-white/10"
                      } text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                      placeholder=" "
                      type="email"
                    />
                    <div className="absolute left-8 top-6 text-white/40 pointer-events-none">
                    {values.email.length === 0 && (
                      <TypewriterOverlay phrases={emailPhrases} active={focused.email} />
                    )}
                    </div>
                  </div>
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>

                {/* PHONE */}
                <div className="relative">
                  <label className="text-sm text-white/80 mb-2 block">Phone</label>
                  <div className="relative">
                    <FiPhone className="absolute left-4 top-4 text-white/50" />
                    <input
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onFocus={() => setFocused((p) => ({ ...p, phoneNumber: true }))}
                      onBlur={() => setFocused((p) => ({ ...p, phoneNumber: false }))}
                      className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border ${
                        errors.phoneNumber ? "border-rose-400" : "border-white/10"
                      } text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                      placeholder=" "
                    />
                    <div className="absolute left-8 top-6 text-white/40 pointer-events-none">
                      {values.phoneNumber.length === 0 && (
                        <TypewriterOverlay phrases={phonePhrases} active={focused.phoneNumber} />
                      )}
                    </div>
                  </div>
                  {errors.phoneNumber && <p className="text-xs text-rose-400 mt-1">{errors.phoneNumber}</p>}
                </div>

                {/* MESSAGE */}
                <div className="relative">
                  <label className="text-sm text-white/80 mb-2 block">Message</label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 text-white/50" />
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onFocus={() => setFocused((p) => ({ ...p, message: true }))}
                      onBlur={() => setFocused((p) => ({ ...p, message: false }))}
                      rows={5}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border ${
                        errors.message ? "border-rose-400" : "border-white/10"
                      } text-white placeholder-transparent resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                      placeholder=" "
                    />
                    <div className="absolute left-10 top-6 text-white/40 pointer-events-none">
                    {values.message.length === 0 && (
                      <TypewriterOverlay phrases={messagePhrases} active={focused.message} />
                    )}
                    </div>
                  </div>
                  {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                </div>

                {/* submit errors */}
                {errors.submit && <div className="text-sm text-rose-400">{errors.submit}</div>}

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center gap-3 py-3 rounded-lg font-medium ${
                      isSubmitting ? "bg-indigo-400" : "bg-gradient-to-r from-indigo-500 to-cyan-400 hover:from-indigo-600"
                    } text-white shadow-lg`}
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                    ) : (
                      <FiSend />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 120 }} className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-white/80 mb-4">Thanks — we will reply within 24 hours.</p>
                <motion.button whileHover={{ scale: 1.02 }} onClick={() => setSuccess(false)} className="px-6 py-3 rounded-lg bg-white/10 text-white">Send Another</motion.button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}







