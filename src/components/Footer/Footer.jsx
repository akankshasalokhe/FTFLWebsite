"use client";

import { motion } from "framer-motion";
import { FiSend, FiArrowRight } from "react-icons/fi";
import { FaDiscord, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useEffect, useState } from "react";

const VibrantFooter = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('https://landing-page-yclw.vercel.app/api/footer');
        const data = await response.json();
        
        if (data.success) {
          setContactInfo(data.data[0]);
        } else {
          setError("Failed to fetch contact information");
        }
      } catch (err) {
        setError("Error connecting to server");
        console.error("Error fetching contact info:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  // Map social media URLs to icons
  const getSocialIcon = (url) => {
    if (url.includes('twitter.com') || url.includes('x.com')) return <FaTwitter />;
    if (url.includes('linkedin.com')) return <FaLinkedin />;
    if (url.includes('github.com')) return <FaGithub />;
    if (url.includes('discord.com') || url.includes('discord.gg')) return <FaDiscord />;
    if (url.includes('youtube.com')) return <FaYoutube />;
    return <FiSend />; // Default icon
  };

  // Get social media link class based on URL
  const getSocialClass = (url) => {
    if (url.includes('twitter.com') || url.includes('x.com')) return "hover:bg-[#1DA1F2]";
    if (url.includes('linkedin.com')) return "hover:bg-[#0077B5]";
    if (url.includes('github.com')) return "hover:bg-black";
    if (url.includes('discord.com') || url.includes('discord.gg')) return "hover:bg-[#5865F2]";
    if (url.includes('youtube.com')) return "hover:bg-[#FF0000]";
    return "hover:bg-gray-600"; // Default color
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#298CF3] to-[#0D5DB7] text-white pt-10 pb-6 px-4 sm:px-6 lg:px-8">
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -15, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: `${8 + Math.random() * 15}px`,
              height: `${8 + Math.random() * 15}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main CTA - Made more compact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-xl p-5 mb-8 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
                Ready to <span className="text-[#FFD166]">transform</span> your business?
              </h3>
              <p className="text-white/90 max-w-md text-xs sm:text-sm">
                Let's create something extraordinary together. Our team is ready to bring your vision to life!
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFD166] text-[#0D5DB7] font-bold rounded-md whitespace-nowrap text-xs sm:text-sm"
            >
              Get Started <FiArrowRight className="text-sm" />
            </motion.button>
          </div>
        </motion.div>

        {/* Links Grid - Made more compact */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center xs:text-left"
          >
            <h4 className="text-base font-bold mb-3 text-[#FFD166] flex items-center justify-center xs:justify-start gap-1.5">
              <RiCustomerService2Fill className="text-sm" /> Company
            </h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ x: 3 }}
                    href="#"
                    className="flex items-center gap-1.5 hover:text-[#FFD166] transition-colors text-sm justify-center xs:justify-start"
                  >
                    <FiArrowRight className="text-xs opacity-70" /> {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center xs:text-left"
          >
            <h4 className="text-base font-bold mb-3 text-[#FFD166]">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'AI Solutions', 'Mobile Apps', 'Cloud Consulting'].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ x: 3 }}
                    href="#"
                    className="flex items-center gap-1.5 hover:text-[#FFD166] transition-colors text-sm justify-center xs:justify-start"
                  >
                    <FiArrowRight className="text-xs opacity-70" /> {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact - Improved layout with better flex properties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-center xs:text-left"
          >
            <h4 className="text-base font-bold mb-3 text-[#FFD166]">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <div className="bg-[#FFD166] text-[#0D5DB7] p-1.5 rounded-full shrink-0 mt-0.5">
                  <MdPhone className="text-xs" />
                </div>
                <div className="text-left flex-1">
                  {loading ? (
                    <div className="h-3.5 bg-white/20 rounded animate-pulse w-28 mb-1"></div>
                  ) : error ? (
                    <p className="text-xs text-red-200">Error loading phone</p>
                  ) : (
                    <>
                      <p className="font-medium text-sm">+{contactInfo?.phone}</p>
                      <p className="text-xs text-white/70 mt-0.5">{contactInfo?.workinghours}</p>
                    </>
                  )}
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="bg-[#FFD166] text-[#0D5DB7] p-1.5 rounded-full shrink-0">
                  <MdEmail className="text-xs" />
                </div>
                <p className="text-sm break-all text-left">contact@ftfl.com</p>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="bg-[#FFD166] text-[#0D5DB7] p-1.5 rounded-full shrink-0 mt-0.5">
                  <MdLocationOn className="text-xs" />
                </div>
                <div className="text-left flex-1">
                  {loading ? (
                    <div className="h-3.5 bg-white/20 rounded animate-pulse w-32"></div>
                  ) : error ? (
                    <p className="text-xs text-red-200">Error loading address</p>
                  ) : (
                    <p className="text-xs text-white/90">{contactInfo?.address}</p>
                  )}
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-center xs:text-left"
          >
            <h4 className="text-base font-bold mb-3 text-[#FFD166]">Connect</h4>
            <div className="flex gap-3 justify-center xs:justify-start flex-wrap mb-4">
              {loading ? (
                // Loading skeleton for social icons
                [...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                ))
              ) : error ? (
                <p className="text-xs text-red-200">Error loading social links</p>
              ) : (
                contactInfo?.socialMediaLinks.map((url, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3, scale: 1.05 }}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white/10 ${getSocialClass(url)} w-8 h-8 rounded-full flex items-center justify-center transition-colors`}
                  >
                    {getSocialIcon(url)}
                  </motion.a>
                ))
              )}
            </div>

            {/* Newsletter */}
            <div className="mt-4">
              <h5 className="text-xs font-medium mb-1.5">Stay updated</h5>
              <div className="flex max-w-xs mx-auto xs:mx-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/20 placeholder-white/50 text-xs px-3 py-1.5 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#FFD166] flex-grow"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#FFD166] text-[#0D5DB7] px-2 rounded-r-md"
                >
                  <FiSend className="text-xs" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom - Made more compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left"
        >
          <div className="flex items-center gap-1.5 justify-center md:justify-start">
            <div className="w-6 h-6 bg-[#FFD166] rounded-full flex items-center justify-center">
              <span className="text-[#0D5DB7] font-bold text-xs">F</span>
            </div>
            <p className="font-medium text-sm">FTFL Technology Pvt.Ltd</p>
          </div>
          <div className="flex gap-3 text-xs flex-wrap justify-center">
            <a href="#" className="hover:text-[#FFD166] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FFD166] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#FFD166] transition-colors">Cookies</a>
          </div>
          <p className="text-xs text-white/70">© 2025 All rights reserved</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default VibrantFooter;