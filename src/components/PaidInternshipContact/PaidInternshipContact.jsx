// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useState } from "react";
// import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare, FiArrowRight, FiBook, FiBriefcase } from "react-icons/fi";

// const ContactForm = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.2,
//     triggerOnce: true
//   });

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     eligibility: "",
//     department: "",
//     message: ""
//   });

//   const [resume, setResume] = useState(null);
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

//   const handleFileChange = (e) => {
//     const file = e.target.files ? e.target.files[0] : null;
//     setResume(file);
    
//     if (errors.resume) {
//       setErrors(prev => ({ ...prev, resume: "" }));
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
    
//     if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    
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
    
//     if (!formData.eligibility.trim()) newErrors.eligibility = "Eligibility is required";
//     if (!formData.department.trim()) newErrors.department = "Department is required";
//     if (!formData.message.trim()) newErrors.message = "Message is required";
//     if (!resume) newErrors.resume = "Resume is required";
    
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
//       // Create FormData object for file upload
//       const submissionData = new FormData();
//       submissionData.append('fullName', formData.fullName);
//       submissionData.append('email', formData.email);
//       submissionData.append('phoneNumber', formData.phoneNumber.replace(/-/g, ''));
//       submissionData.append('eligibility', formData.eligibility);
//       submissionData.append('department', formData.department);
//       submissionData.append('message', formData.message);
      
//       if (resume) {
//         submissionData.append('resume', resume);
//       }

//       // Send data to backend API
//       const response = await fetch('https://landing-page-yclw.vercel.app/api/paidinternshipcontact', {
//         method: 'POST',
//         body: submissionData,
//         // Don't set Content-Type header for FormData - browser will set it automatically with boundary
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.message || 'Failed to submit application');
//       }

//       setIsSuccess(true);
//       setFormData({ 
//         fullName: "", 
//         email: "", 
//         phoneNumber: "", 
//         eligibility: "", 
//         department: "", 
//         message: "" 
//       });
//       setResume(null);
//     } catch (error) {
//       console.error("Submission error:", error);
//       setErrors({ submit: error.message || "Failed to submit application. Please try again later." });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section ref={ref} id='contactform' className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#298cf3] to-blue-600 px-4 py-2 rounded-lg mb-4">
//             <span className="text-white font-medium">Apply for Paid Internship</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
//             Start Your <span className="text-blue-600">Career Journey</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Join our paid internship program and gain real-world experience with industry experts.
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
//                 Application Submitted!
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 We've received your application and will review it within 48 hours.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 onClick={() => setIsSuccess(false)}
//                 className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 inline-flex items-center gap-2"
//               >
//                 Apply Again <FiArrowRight />
//               </motion.button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="p-6 sm:p-8">
//               <div className="mb-6">
//                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiUser className="text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className={`pl-10 w-full rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 {errors.fullName && (
//                   <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
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

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label htmlFor="eligibility" className="block text-sm font-medium text-gray-700 mb-2">
//                     Eligibility
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FiBook className="text-gray-400" />
//                     </div>
//                     <select
//                       id="eligibility"
//                       name="eligibility"
//                       value={formData.eligibility}
//                       onChange={handleChange}
//                       className={`pl-10 w-full rounded-lg border ${errors.eligibility ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
//                     >
//                       <option value="">Select Eligibility</option>
//                       <option value="12th Pass">12th Pass</option>
//                       <option value="Graduation">Graduation</option>
//                       <option value="Post Graduation">Post Graduation</option>
//                       <option value="Diploma">Diploma</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                   {errors.eligibility && (
//                     <p className="mt-1 text-sm text-red-600">{errors.eligibility}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
//                     Department
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FiBriefcase className="text-gray-400" />
//                     </div>
//                     <select
//                       id="department"
//                       name="department"
//                       value={formData.department}
//                       onChange={handleChange}
//                       className={`pl-10 w-full rounded-lg border ${errors.department ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
//                     >
//                       <option value="">Select Department</option>
//                       <option value="Web Development">Web Development</option>
//                       <option value="Mobile Development">Mobile Development</option>
//                       <option value="Digital Marketing">Digital Marketing</option>
//                       <option value="Graphic Design">Graphic Design</option>
//                       <option value="Content Writing">Content Writing</option>
//                       <option value="Video Editing">Video Editing</option>
//                       <option value="Sales">Sales</option>
//                       <option value="Finance">Finance</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                   {errors.department && (
//                     <p className="mt-1 text-sm text-red-600">{errors.department}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="mb-6">
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
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className={`pl-10 w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
//                     placeholder="Tell us about your background and why you're interested in this internship..."
//                   ></textarea>
//                 </div>
//                 {errors.message && (
//                   <p className="mt-1 text-sm text-red-600">{errors.message}</p>
//                 )}
//               </div>

//               <div className="mb-8">
//                 <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
//                   Upload Resume
//                 </label>
//                 <input
//                   type="file"
//                   id="resume"
//                   name="resume"
//                   onChange={handleFileChange}
//                   accept=".pdf,.doc,.docx"
//                   className={`w-full rounded-lg border ${errors.resume ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100`}
//                 />
//                 {errors.resume && (
//                   <p className="mt-1 text-sm text-red-600">{errors.resume}</p>
//                 )}
//                 <p className="mt-1 text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX</p>
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
//                     Submitting...
//                   </>
//                 ) : (
//                   <>
//                     <FiSend className="mr-2" />
//                     Submit Application
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

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare, FiArrowRight, FiBook, FiBriefcase } from "react-icons/fi";

const ContactForm = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    eligibility: "",
    department: "",
    message: ""
  });

  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [isLoadingDepartments, setIsLoadingDepartments] = useState(false);

  // Fetch departments from API
  useEffect(() => {
    const fetchDepartments = async () => {
      setIsLoadingDepartments(true);
      try {
        const response = await fetch('https://landing-page-yclw.vercel.app/api/internship');
        const data = await response.json();

        if (data.success) {
          // Extract unique titles from the internships
          const uniqueDepartments = [...new Set(data.data.map((internship) =>
            internship.title
          ))].filter(Boolean); // Remove any null/undefined values

          setDepartments(uniqueDepartments);
        }
      } catch (error) {
        console.error('Error fetching departments:', error);
        // Fallback to static options if API fails
        setDepartments([
          'Web Development', 'Mobile Development', 'Digital Marketing',
          'Graphic Design', 'Content Writing', 'Video Editing',
          'Sales', 'Finance', 'Other'
        ]);
      } finally {
        setIsLoadingDepartments(false);
      }
    };

    fetchDepartments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Format phone number as user types
    if (name === "phoneNumber") {
      const formattedValue = formatPhoneNumber(value);
      setFormData(prev => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files ? e.target.files[0] : null;
    setResume(file);
    
    if (errors.resume) {
      setErrors(prev => ({ ...prev, resume: "" }));
    }
  };

  // Helper function to format phone number
  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, '');
    
    // Apply formatting based on length
    if (cleaned.length <= 3) {
      return cleaned;
    } else if (cleaned.length <= 7) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    } else {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7, 11)}`;
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (formData.phoneNumber.replace(/\D/g, '').length !== 10) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    
    if (!formData.eligibility.trim()) newErrors.eligibility = "Eligibility is required";
    if (!formData.department.trim()) newErrors.department = "Department is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!resume) newErrors.resume = "Resume is required";
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create FormData object for file upload
      const submissionData = new FormData();
      submissionData.append('fullName', formData.fullName);
      submissionData.append('email', formData.email);
      submissionData.append('phoneNumber', formData.phoneNumber.replace(/-/g, ''));
      submissionData.append('eligibility', formData.eligibility);
      submissionData.append('department', formData.department);
      submissionData.append('message', formData.message);
      
      if (resume) {
        submissionData.append('resume', resume);
      }

      // Send data to backend API
      const response = await fetch('https://landing-page-yclw.vercel.app/api/paidinternshipcontact', {
        method: 'POST',
        body: submissionData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit application');
      }

      setIsSuccess(true);
      setFormData({ 
        fullName: "", 
        email: "", 
        phoneNumber: "", 
        eligibility: "", 
        department: "", 
        message: "" 
      });
      setResume(null);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ submit: error.message || "Failed to submit application. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id='contactform' className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#298cf3] to-blue-600 px-4 py-2 rounded-lg mb-4">
            <span className="text-white font-medium">Apply for Paid Internship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Start Your <span className="text-blue-600">Career Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our paid internship program and gain real-world experience with industry experts.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
        >
          {isSuccess ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-600 mb-6">
                We've received your application and will review it within 48 hours.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsSuccess(false)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Apply Again <FiArrowRight />
              </motion.button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <div className="mb-6">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`pl-10 w-full rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`pl-10 w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`pl-10 w-full rounded-lg border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="123-456-7890"
                    maxLength="12"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="eligibility" className="block text-sm font-medium text-gray-700 mb-2">
                    Eligibility
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiBook className="text-gray-400" />
                    </div>
                    <select
                      id="eligibility"
                      name="eligibility"
                      value={formData.eligibility}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-lg border ${errors.eligibility ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    >
                      <option value="">Select Eligibility</option>
                      <option value="12th Pass">12th Pass</option>
                      <option value="Graduation">Graduation</option>
                      <option value="Post Graduation">Post Graduation</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {errors.eligibility && (
                    <p className="mt-1 text-sm text-red-600">{errors.eligibility}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiBriefcase className="text-gray-400" />
                    </div>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      disabled={isLoadingDepartments}
                      className={`pl-10 w-full rounded-lg border ${errors.department ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${isLoadingDepartments ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <option value="">
                        {isLoadingDepartments ? 'Loading departments...' : 'Select Department'}
                      </option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.department && (
                    <p className="mt-1 text-sm text-red-600">{errors.department}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <FiMessageSquare className="text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`pl-10 w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400`}
                    placeholder="Tell us about your background and why you're interested in this internship..."
                  ></textarea>
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <div className="mb-8">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className={`w-full rounded-lg border ${errors.resume ? 'border-red-500' : 'border-gray-300'} bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100`}
                />
                {errors.resume && (
                  <p className="mt-1 text-sm text-red-600">{errors.resume}</p>
                )}
                <p className="mt-1 text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX</p>
              </div>

              {errors.submit && (
                <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                  {errors.submit}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white ${isSubmitting ? 'bg-blue-500/80' : 'bg-blue-600 hover:bg-blue-700'} transition-all duration-300 shadow-md`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Submit Application
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;