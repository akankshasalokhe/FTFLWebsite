

// components/BoardMembers.js
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const TeamMembers = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeReason, setActiveReason] = useState(0);
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const boardMembers = [
        {
            name: "Dr. Robert Taylor",
            role: "Chairman",
            description: "30 years guiding tech startups with innovative strategies",
            image: "/images/robert-taylor.jpg",
            linkedin: "#"
        },
        {
            name: "Priya Patel",
            role: "Financial Strategist",
            description: "Specialized in scaling SaaS businesses to global markets",
            image: "/images/priya-patel.jpg",
            linkedin: "#"
        },
        {
            name: "James Wilson",
            role: "Industry Advisor",
            description: "Former CTO transforming enterprise technology",
            image: "/images/james-wilson.jpg",
            linkedin: "#"
        },
        {
            name: "Maria Garcia",
            role: "Governance Expert",
            description: "Ensuring compliance and ethical business practices",
            image: "/images/maria-garcia.jpg",
            linkedin: "#"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };


    const [departmentboardData, setDepartmentBoardData] = useState([]);



    useEffect(() => {
        axios
            .get("https://landing-page-yclw.vercel.app/api/departmentboard")
            .then((res) => setDepartmentBoardData(res.data.data))
            .catch((err) => console.error(err));
    }, []);


    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

         


                <div className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                      
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">Meet Our Core Team</h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
                                Our collective of passionate experts is dedicated to innovation, collaboration, and delivering exceptional results.
                            </p>
                        </div>

                       
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {departmentboardData.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                    className="bg-blue-100 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer p-8 flex flex-col items-center text-center relative overflow-hidden"
                                >
                                   
                                    <div className="w-28 h-28 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-white ring-4 ring-blue-200 z-10">
                                        <img
                                            src={member.mainImage}
                                            alt={member.fullName}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.onerror = null;
                                                e.currentTarget.src = "/images/placeholder-member.jpg";
                                            }}
                                        />
                                    </div>

                                   
                                    <h3 className="text-xl font-bold text-gray-900 z-10">{member.fullName}</h3>
                                    <p className="text-sm font-semibold text-blue-800 mb-4 z-10">{member.role}</p>

                                   
                                    <a
                                        href={member.socialLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors z-10"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                        <span className="text-sm">LinkedIn</span>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>


       //design-1         

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {departmentboardData.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
      className="bg-blue-100 rounded-3xl overflow-hidden shadow-lg transition-all duration-300 p-6 flex flex-col items-start"
    >
      <div className="w-24 h-24 mb-4 rounded-tl-2xl rounded-br-2xl overflow-hidden border-4 border-white ring-4 ring-blue-200">
        <img
          src={member.mainImage}
          alt={member.fullName}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/placeholder-member.jpg";
          }}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mt-2">{member.fullName}</h3>
      <p className="text-sm font-semibold text-blue-800 mb-4">{member.role}</p>
      <a
        href={member.socialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
        <span className="text-sm">LinkedIn</span>
      </a>
    </motion.div>
  ))}
</div>

//design-2
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {departmentboardData.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.05 }}
      className="relative rounded-3xl shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      <div className="w-full h-full overflow-hidden">
        <img
          src={member.mainImage}
          alt={member.fullName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/placeholder-member.jpg";
          }}
        />
      </div>
      <div className="absolute inset-0 bg-blue-200 bg-opacity-70 flex flex-col items-center justify-center text-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-xl font-bold text-black mb-1">{member.fullName}</h3>
        <p className="text-sm font-semibold text-black opacity-80 mb-4">{member.role}</p>
        <a
          href={member.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-black hover:text-opacity-80 font-medium transition-opacity"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </motion.div>
  ))}
</div>

//design-3
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {departmentboardData.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer p-6 flex flex-col items-center text-center backdrop-blur-md bg-blue-400 bg-opacity-20 border border-blue-500 border-opacity-30"
    >
      <div className="w-28 h-28 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-white">
        <img
          src={member.mainImage}
          alt={member.fullName}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/placeholder-member.jpg";
          }}
        />
      </div>
      <h3 className="text-xl font-bold text-white text-shadow-sm">{member.fullName}</h3>
      <p className="text-sm font-semibold text-white opacity-80 mb-4">{member.role}</p>
      <a
        href={member.socialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-white hover:text-opacity-80 font-medium transition-opacity"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
        <span className="text-sm">LinkedIn</span>
      </a>
    </motion.div>
  ))}
</div>
   
  //design-4
  
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {departmentboardData.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer p-6 flex items-center space-x-6"
    >
      <div className="w-24 h-24 rounded-lg overflow-hidden border-4 border-gray-100 flex-shrink-0">
        <img
          src={member.mainImage}
          alt={member.fullName}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/placeholder-member.jpg";
          }}
        />
      </div>
      <div className="flex flex-col text-left">
        <h3 className="text-xl font-bold text-gray-900">{member.fullName}</h3>
        <p className="text-sm font-semibold text-blue-800 mb-2">{member.role}</p>
        <a
          href={member.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </motion.div>
  ))}
</div> 

//design-5
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {departmentboardData.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col items-center text-center relative"
    >
      <div className="bg-blue-100 h-24 w-full"></div>
      <div className="w-28 h-28 mx-auto -mt-14 rounded-full overflow-hidden border-4 border-white ring-4 ring-blue-200 z-10">
        <img
          src={member.mainImage}
          alt={member.fullName}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/placeholder-member.jpg";
          }}
        />
      </div>
      <div className="p-6 w-full flex flex-col items-center">
        <h3 className="text-xl font-bold text-gray-900 mt-2">{member.fullName}</h3>
        <p className="text-sm font-semibold text-blue-800 mb-4">{member.role}</p>
        <a
          href={member.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </motion.div>
  ))}
</div>
//design-6
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {departmentboardData.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer p-8 flex flex-col items-center text-center"
    >
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-blue-50">
        <img
          src={member.mainImage}
          alt={member.fullName}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/placeholder-member.jpg";
          }}
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <h3 className="text-2xl font-bold text-gray-900">{member.fullName}</h3>
        <p className="text-md font-semibold text-blue-800 mb-2">{member.role}</p>
        <a
          href={member.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </motion.div>
  ))}
</div>
//design-7
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {departmentboardData.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer p-6 flex flex-col items-start relative overflow-hidden"
    >
      <div className="w-16 h-16 bg-blue-500 absolute bottom-0 right-0 transform rotate-45 -mr-8 -mb-8"></div>
      <div className="w-24 h-24 mb-4 rounded-lg overflow-hidden border-4 border-gray-100 ring-4 ring-blue-50">
        <img
          src={member.mainImage}
          alt={member.fullName}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/placeholder-member.jpg";
          }}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{member.fullName}</h3>
      <p className="text-sm font-semibold text-blue-800 mb-4">{member.role}</p>
      <a
        href={member.socialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
        <span className="text-sm">LinkedIn</span>
      </a>
    </motion.div>
  ))}
</div>
//design-8
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {departmentboardData.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg transition-all duration-300 cursor-pointer p-6 flex items-center space-x-6"
    >
      <div className="w-24 h-24 rounded-md overflow-hidden border-4 border-white ring-4 ring-gray-200">
        <img
          src={member.mainImage}
          alt={member.fullName}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/placeholder-member.jpg";
          }}
        />
      </div>
      <div className="flex-1 flex flex-col items-start">
        <h3 className="text-xl font-bold text-gray-900">{member.fullName}</h3>
        <p className="text-sm font-semibold text-blue-800 mb-4">{member.role}</p>
        <a
          href={member.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </motion.div>
  ))}
</div>
//design-9


            </div>

        </section>
    );
};

export default TeamMembers;