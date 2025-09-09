"use client";

import { motion } from "framer-motion";
import { FiSend, FiArrowRight } from "react-icons/fi";
import { FaDiscord, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";

const VibrantFooter = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await fetch("https://landing-page-yclw.vercel.app/api/footer"); // Replace with your endpoint
        const json = await res.json();
        if (json.success && json.data && json.data.length > 0) {
          setContactInfo(json.data[0]);
        } else {
          setError("No contact info available");
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

  const getSocialIcon = (url) => {
    if (!url) return <FiSend />;
    if (url.includes("twitter.com") || url.includes("x.com")) return <FaTwitter />;
    if (url.includes("linkedin.com")) return <FaLinkedin />;
    if (url.includes("github.com")) return <FaGithub />;
    if (url.includes("discord.com") || url.includes("discord.gg")) return <FaDiscord />;
    if (url.includes("youtube.com")) return <FaYoutube />;
    return <FiSend />;
  };

  const getSocialClass = (url) => {
    if (!url) return "hover:bg-gray-600";
    if (url.includes("twitter.com") || url.includes("x.com")) return "hover:bg-[#1DA1F2]";
    if (url.includes("linkedin.com")) return "hover:bg-[#0077B5]";
    if (url.includes("github.com")) return "hover:bg-black";
    if (url.includes("discord.com") || url.includes("discord.gg")) return "hover:bg-[#5865F2]";
    if (url.includes("youtube.com")) return "hover:bg-[#FF0000]";
    return "hover:bg-gray-600";
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
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-xl p-5 mb-8 shadow-lg text-left"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
            <div>
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
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FFD166] text-[#0D5DB7] font-bold rounded-md whitespace-nowrap text-xs sm:text-sm mt-2 lg:mt-0"
            >
              Get Started <FiArrowRight className="text-sm" />
            </motion.button>
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-left">
          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="text-base font-bold mb-3 text-[#FFD166] flex items-center gap-1.5">
              <RiCustomerService2Fill className="text-sm" /> Company
            </h4>
            <ul className="space-y-2">
              {["About Us", "Careers", "Case Studies", "Contact"].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ x: 3 }}
                    href="#"
                    className="flex items-center gap-1.5 hover:text-[#FFD166] transition-colors text-sm"
                  >
                    <FiArrowRight className="text-xs opacity-70" /> {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h4 className="text-base font-bold mb-3 text-[#FFD166]">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "AI Solutions", "Mobile Apps", "Cloud Consulting"].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ x: 3 }}
                    href="#"
                    className="flex items-center gap-1.5 hover:text-[#FFD166] transition-colors text-sm"
                  >
                    <FiArrowRight className="text-xs opacity-70" /> {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h4 className="text-base font-bold mb-3 text-[#FFD166]">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <div className="bg-[#FFD166] text-[#0D5DB7] p-1.5 rounded-full shrink-0 mt-0.5">
                  <MdPhone className="text-xs" />
                </div>
                <div className="flex-1">
                  {loading ? (
                    <div className="h-3.5 bg-white/20 rounded animate-pulse w-28 mb-1"></div>
                  ) : error ? (
                    <p className="text-xs text-red-200">Error loading phone</p>
                  ) : (
                    <>
                      <Link className="font-medium text-sm" href={`tel:+${contactInfo?.phone}`}>
                        +{contactInfo?.phone}
                      </Link>
                      <p className="text-xs text-white/70 mt-0.5">{contactInfo?.workinghours}</p>
                    </>
                  )}
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="bg-[#FFD166] text-[#0D5DB7] p-1.5 rounded-full shrink-0">
                  <MdEmail className="text-xs" />
                </div>
                <Link className="text-sm break-all" href={`mailto:info@ftfltechnology.com`}>
                  info@ftfltechnology.com
                </Link>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="bg-[#FFD166] text-[#0D5DB7] p-1.5 rounded-full shrink-0 mt-0.5">
                  <MdLocationOn className="text-xs" />
                </div>
                <div className="flex-1">
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

          {/* Social Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h4 className="text-base font-bold mb-3 text-[#FFD166]">Connect</h4>
            <div className="flex gap-3 flex-wrap mb-4">
              {loading
                ? [...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                  ))
                : error
                ? <p className="text-xs text-red-200">Error loading social links</p>
                : contactInfo?.socialMediaLinks?.map((url, i) => (
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
                  ))}
            </div>

            {/* Newsletter */}
            <div className="mt-4">
              <h5 className="text-xs font-medium mb-1.5">Stay updated</h5>
              <div className="flex max-w-xs w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/20 placeholder-white/50 text-xs px-3 py-1.5 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#FFD166] flex-grow"
                />
                <motion.button whileHover={{ scale: 1.05 }} className="bg-[#FFD166] text-[#0D5DB7] px-2 rounded-r-md">
                  <FiSend className="text-xs" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-left"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 bg-[#FFD166] rounded-full flex items-center justify-center">
              <span className="text-[#0D5DB7] font-bold text-xs">F</span>
            </div>
            <p className="font-medium text-sm">FTFL Technology Pvt.Ltd</p>
          </div>
          <div className="flex gap-3 text-xs flex-wrap">
            <a href="#" className="hover:text-[#FFD166] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FFD166] transition-colors">Terms</a>
          </div>
          <p className="text-xs text-white/70">© 2025 All rights reserved</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default VibrantFooter;
