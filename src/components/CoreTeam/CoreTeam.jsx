



// components/BoardMembers.js
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TeamMembers = () => {
  const [departmentboardData, setDepartmentBoardData] = useState([]);
  const [roles, setRoles] = useState([]);
  const [activeRole, setActiveRole] = useState("All");

  // ✅ Fetch data
  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/departmentboard")
      .then((res) => {
        const data = res.data.data || [];
        setDepartmentBoardData(data);

        // extract unique roles for buttons
        //   const uniqueRoles = Array.from(new Set(data.map((m) => m.role)));
        //   setRoles(["All", ...uniqueRoles]);
        // })
        // ✅ Updated
        const uniqueRoles = Array.from(new Set(data.map((m) => m.role)));
        setRoles(uniqueRoles);

        // auto-select first role
        if (uniqueRoles.length > 0) {
          setActiveRole(uniqueRoles[0]);
        }

      })
      .catch((err) => console.error(err));
  }, []);

  // ✅ Filter by activeRole
  // const filteredMembers =
  //   activeRole === "All"
  //     ? departmentboardData
  //     : departmentboardData.filter((m) => m.role === activeRole);

  const filteredMembers = departmentboardData.filter(
    (m) => m.role === activeRole
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Meet Our Core Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our collective of passionate experts is dedicated to innovation,
            collaboration, and delivering exceptional results.
          </p>
        </div>

        {/* ✅ Role filter buttons */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {roles.map((role, i) => (
            <button
              key={i}
              onClick={() => setActiveRole(role)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeRole === role
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {role}
            </button>
          ))}
        </div> */}


        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {roles.map((role, i) => (
            <button
              key={i}
              onClick={() => setActiveRole(role)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeRole === role
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* ✅ Team member cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member._id || index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
              }}
              className="bg-blue-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-28 h-28 mb-4 rounded-lg overflow-hidden border-4 border-blue-100 shadow-inner">
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

              {/* Info */}
              <h3 className="text-lg font-bold text-gray-900">
                {member.fullName}
              </h3>
              <p className="text-sm text-blue-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                {member.description?.slice(0, 80)}...
              </p>

              {/* Social Link */}
              <a
                href={member.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>


       //design-1

        <div className="grid grid-cols-1 sm :grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
//design-9

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {departmentboardData.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
      className="bg-blue-300 rounded-b-full rounded-t-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer p-6 flex flex-col items-center text-center"
    >
      <div className="w-28 h-28 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-white ring-4 ring-gray-200">
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
//design - 10
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {departmentboardData.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
      className="bg-blue-200 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer p-6 flex flex-col items-center text-center relative"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gray-200" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
      <div className="w-28 h-28 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-white ring-4 ring-gray-200 z-10">
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

//design - 11
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {departmentboardData.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
      className="bg-gray-600 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer p-6 flex flex-col items-center text-center"
    >
      <div className="w-full flex justify-center mb-6">
        <div className="w-32 h-32 rounded-lg overflow-hidden border-4 border-white ring-4 ring-blue-500">
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
      </div>
      <h3 className="text-2xl font-bold text-white">{member.fullName}</h3>
      <p className="text-md font-semibold text-blue-300 mb-4">{member.role}</p>
      <a
        href={member.socialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-400 hover:text-blue-200 font-medium transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
        <span className="text-sm">LinkedIn</span>
      </a>
    </motion.div>
  ))}
</div>
//design - 12
//design - 13
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {filteredMembers.map((member, index) => (
    <motion.div
      key={member._id || index}
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
      }}
      className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-start text-left cursor-pointer overflow-hidden group"
    >
      {/* Diagonal Background Accent */}
      <div className="absolute inset-0 bg-blue-500 transform -skew-y-12 origin-top-left -translate-y-8 group-hover:skew-y-0 transition-transform duration-500"></div>

      {/* Profile Image */}
      <div className="w-10 h-10 mb-4 rounded-lg overflow-hidden border-4 border-white ring-4 ring-blue-100 shadow-lg z-10">
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

      {/* Info */}
      <h3 className="text-xl font-bold text-gray-900 z-10">
        {member.fullName}
      </h3>
      <p className="text-sm text-blue-600 font-semibold mb-3 z-10">
        {member.role}
      </p>
      <p className="text-gray-500 text-sm mb-4 line-clamp-3 z-10">
        {member.description}
      </p>

      {/* Social Link */}
      <a
        href={member.socialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors z-10"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
        LinkedIn
      </a>
    </motion.div>
  ))}
</div>

//design - 14

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {filteredMembers.map((member, index) => (
    <motion.div
      key={member._id || index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
      }}
      className="bg-blue-400 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-row items-start text-left space-x-6 cursor-pointer"
    >
      {/* Left Panel: Image & Social Link */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 mb-4 rounded-lg overflow-hidden border-4 border-blue-100 shadow-inner flex-shrink-0">
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
        <a
          href={member.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </a>
      </div>

      {/* Right Panel: Info */}
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900">
          {member.fullName}
        </h3>
        <p className="text-sm text-blue-600 font-semibold mb-3">
          {member.role}
        </p>
        <p className="text-gray-800 text-sm line-clamp-4">
          {member.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>

//design -15
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {filteredMembers.map((member, index) => (
    <motion.div
      key={member._id || index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
      }}
      // Added a fixed height to the card here
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-row cursor-pointer overflow-hidden h-40"
    >
      {/* Left Panel: Full-size Image with White Background */}
      <div className="w-1/2 flex-shrink-0 relative">
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

      {/* Right Panel: Content with Blue Background */}
      <div className="w-1/2 flex-1 bg-blue-400 p-6 flex flex-col justify-center text-white">
        <h3 className="text-xl font-bold">
          {member.fullName}
        </h3>
        <p className="text-sm text-gray-900 mb-3">
          {member.role}
        </p>
        {/* <p className="text-sm mb-4 line-clamp-4">
          {member.description}
        </p> */}
        
        {/* Social Link */}
        <a
          href={member.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium transition-colors text-white hover:text-blue-100"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </motion.div>
  ))}
</div>

      </div>

    </section>
  );
};

export default TeamMembers;