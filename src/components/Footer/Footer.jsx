"use client";

import { motion } from "framer-motion";
import { FiSend, FiArrowRight } from "react-icons/fi";
import { FaDiscord, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdEmail, MdPhone } from "react-icons/md";

const VibrantFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#298CF3] to-[#0D5DB7] text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-2xl p-6 mb-12 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Ready to <span className="text-[#FFD166]">transform</span> your business?
              </h3>
              <p className="text-white/90 max-w-xl text-sm sm:text-base">
                Let's create something extraordinary together. Our team is ready to bring your vision to life!
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#FFD166] text-[#0D5DB7] font-bold rounded-lg whitespace-nowrap text-sm sm:text-base"
            >
              Get Started <FiArrowRight className="text-lg" />
            </motion.button>
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center xs:text-left"
          >
            <h4 className="text-lg font-bold mb-4 text-[#FFD166] flex items-center justify-center xs:justify-start gap-2">
              <RiCustomerService2Fill /> Company
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="flex items-center gap-2 hover:text-[#FFD166] transition-colors justify-center xs:justify-start"
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
            <h4 className="text-lg font-bold mb-4 text-[#FFD166]">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'AI Solutions', 'Mobile Apps', 'Cloud Consulting'].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="flex items-center gap-2 hover:text-[#FFD166] transition-colors justify-center xs:justify-start"
                  >
                    <FiArrowRight className="text-xs opacity-70" /> {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-center xs:text-left"
          >
            <h4 className="text-lg font-bold mb-4 text-[#FFD166]">Contact</h4>
            <ul className="space-y-3">
              <li className="flex flex-col xs:flex-row items-center xs:items-start gap-3">
                <div className="bg-[#FFD166] text-[#0D5DB7] p-1 rounded-full shrink-0">
                  <MdPhone className="text-sm" />
                </div>
                <div className="text-center xs:text-left">
                  <p className="font-medium">+91 93095 17500</p>
                  <p className="text-sm text-white/70">Mon-Sat: 9AM-7PM</p>
                </div>
              </li>
              <li className="flex flex-col xs:flex-row items-center xs:items-start gap-3">
                <div className="bg-[#FFD166] text-[#0D5DB7] p-1 rounded-full shrink-0">
                  <MdEmail className="text-sm" />
                </div>
                <p className="break-all">contact@ftfl.com</p>
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
            <h4 className="text-lg font-bold mb-4 text-[#FFD166]">Connect</h4>
            <div className="flex gap-4 justify-center xs:justify-start flex-wrap">
              {[
                { icon: <FaTwitter />, color: "hover:bg-[#1DA1F2]" },
                { icon: <FaLinkedin />, color: "hover:bg-[#0077B5]" },
                { icon: <FaGithub />, color: "hover:bg-black" },
                { icon: <FaDiscord />, color: "hover:bg-[#5865F2]" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="#"
                  className={`bg-white/10 ${social.color} w-10 h-10 rounded-full flex items-center justify-center transition-colors`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-2">Stay updated</h5>
              <div className="flex max-w-xs mx-auto xs:mx-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/20 placeholder-white/50 text-sm px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FFD166] flex-grow"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#FFD166] text-[#0D5DB7] px-3 rounded-r-lg"
                >
                  <FiSend />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
        >
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-8 h-8 bg-[#FFD166] rounded-full flex items-center justify-center">
              <span className="text-[#0D5DB7] font-bold">F</span>
            </div>
            <p className="font-medium">FTFL Technology Pvt.Ltd</p>
          </div>
          <div className="flex gap-4 text-sm flex-wrap justify-center">
            <a href="#" className="hover:text-[#FFD166] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FFD166] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#FFD166] transition-colors">Cookies</a>
          </div>
          <p className="text-sm text-white/70">© 2025 All rights reserved</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default VibrantFooter;