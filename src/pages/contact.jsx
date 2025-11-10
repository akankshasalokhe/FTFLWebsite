"use client";

import { useEffect, useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import axios from "axios";

export default function ContactPage() {
  const [dept, setDept] = useState("hr");
  const [form, setForm] = useState({ firstName: "", email: "", phoneNumber: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const [footerData, setFooterData] = useState(null);
  const [contactData, setContactData] = useState({});

   const pageTitle = "Contact";
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await fetch("https://landing-page-yclw.vercel.app/api/banner");
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          // ✅ Match banner by title (case-insensitive)
          const matchedBanner = data.data.find(
            (b) => b.title?.toLowerCase() === pageTitle.toLowerCase()
          );
          setBanner(matchedBanner || null);
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    };

    fetchBanner();
  }, [pageTitle]);

  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/displaycontact")
      .then((res) => {
        const contactsArray = res.data.data;
        const mapped = {};
        contactsArray.forEach((c) => {
          mapped[c.title.toLowerCase()] = c;
        });
        setContactData(mapped);
      })
      .catch((err) => console.error(err));
  }, []);


  useEffect(() => {
  axios
    .get("https://landing-page-yclw.vercel.app/api/footer")
    .then((res) => {
      const footer = res.data.data;
      console.log("footer data:", footer);
      if (footer.length > 0) {
        setFooterData(footer[0]); 
      }
    })
    .catch((err) => console.error(err));
}, []);




  function handleChange(e) { setForm(prev => ({ ...prev, [e.target.name]: e.target.value })); }
  // async function submitForm(e) { e.preventDefault(); setSubmitting(true); setSuccess(null); try { await new Promise(res => setTimeout(res, 900)); setSuccess(true); setForm({ name: "", email: "", phone: "", message: "" }); } catch (err) { setSuccess(false); } finally { setSubmitting(false); } }
  async function submitForm(e) {
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
}


  return (
    <div className="w-full min-h-screen
    font-sans text-gray-800 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">

      {/* Banner */}
        <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative h-64 md:h-96 flex items-center justify-center text-white overflow-hidden rounded-b-3xl shadow-lg"
    >
      {/* ✅ Dynamic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 hover:scale-125 transition-transform duration-[6000ms]"
        style={{
          backgroundImage: `url(${banner?.bannerImage || "/images/contact-banner.jpg"})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-80" />

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg"
        >
          <Typewriter
            options={{
              strings: ["Get in Touch", "Connect with Us", "We'd Love to Hear from You"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-3 md:mt-5 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Choose a department and send us a message — we’ll respond within 24-48 hours.
        </motion.p>
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-10 left-5 w-5 h-5 bg-blue-300 rounded-full opacity-70"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-10 right-10 w-8 h-8 bg-blue-400 rounded-full opacity-60"
      />
    </motion.header>
  

      {/* Main Content */}
      <main className="max-w-7xl mx-auto -mt-16 relative z-20 px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Cards */}
          <motion.aside initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="space-y-6 lg:col-span-1">
            {/* Department Card */}
            <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 rounded-3xl shadow-2xl p-6 hover:shadow-3xl transform hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Contact</h3>
              <p className="text-sm text-blue-800 mb-4">Select department to see contact details</p>
              <div className="flex gap-3 mb-4">
                <button onClick={() => setDept("hr")} className={`flex-1 py-2 rounded-xl font-medium transition transform hover:scale-105 ${dept === "hr" ? "bg-blue-700 text-white shadow-lg" : "bg-white text-blue-700 border border-blue-300"}`}>HR</button>
                <button onClick={() => setDept("sales")} className={`flex-1 py-2 rounded-xl font-medium transition transform hover:scale-105 ${dept === "sales" ? "bg-blue-700 text-white shadow-lg" : "bg-white text-blue-700 border border-blue-300"}`}>Sales</button>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-white via-blue-50 to-white shadow-inner">
                <h4 className="font-semibold text-blue-800">{contactData[dept]?.title}</h4>
                <p className="text-sm mt-1 text-blue-700">{contactData[dept]?.timings}</p>
                <div className="mt-3 space-y-1 text-blue-900">
                  <div className="flex items-center gap-2 text-sm">
                    <FiPhone className="w-5 h-5" />
                    <a href={`tel:${contactData[dept]?.phoneNumber}`}>+91 {contactData[dept]?.phoneNumber}</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FiMail className="w-5 h-5" />
                    <a href={`mailto:${contactData[dept]?.email}`}>{contactData[dept]?.email}</a>
                  </div>
                </div>
              </div>

            </div>

            {/* Company Info (Height Increased) */}
            <div className="bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 rounded-3xl shadow-2xl p-6 hover:shadow-3xl transform hover:-translate-y-1 transition-all h-72">
              <h3 className="text-lg font-semibold text-black-900 mb-2">Company Information</h3>
                <p className="text-sm text-black-800 leading-relaxed">{footerData?.address}</p>
              <div className="mt-4 space-y-2 text-sm text-black-900">
                <div className="flex items-center gap-2"><FiMapPin className="w-5 h-5" />Head Office: 3rd Floor, Block B</div>
                <div className="flex items-center gap-2"><FiClock className="w-5 h-5" />  {footerData?.workinghours} </div>
                <div className="flex items-center gap-2"><FiPhone className="w-5 h-5" /><a href={`tel:${footerData?.phone}`}>+91 {footerData?.phone}</a></div>
                <div className="flex items-center gap-2"><FiMail className="w-5 h-5" /><a href="mailto:info@example.com">info@example.com</a></div>
              </div>
            </div>
          </motion.aside>

          {/* Right Form */}
          <motion.section initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-3xl shadow-2xl p-6 hover:shadow-3xl transform hover:-translate-y-1 transition-all">
              <h2 className="text-2xl font-semibold text-blue-900 mb-1">Send a message to {contactData[dept]?.title}</h2>
              <p className="text-sm text-blue-800 mb-4">Fill the form and we will get back to you soon.</p>

              <form onSubmit={submitForm} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Your name" required className="col-span-1 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 border border-blue-300 hover:border-blue-400 transition" />
                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@domain.com" required className="col-span-1 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 border border-blue-300 hover:border-blue-400 transition" />
                <input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="+91 98765 43210" className="col-span-1 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 border border-blue-300 hover:border-blue-400 transition" />
                {/* <select value={dept} onChange={(e) => setDept(e.target.value)} className="col-span-1 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 border border-blue-300 hover:border-blue-400 transition">
                  <option value="hr">Human Resources</option>
                  <option value="sales">Sales & Partnerships</option>
                </select> */}
                <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Tell us about your query..." required className="col-span-1 md:col-span-2 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 border border-blue-300 hover:border-blue-400 transition" />
                <button type="submit" disabled={submitting} className="col-span-1 md:col-span-2 rounded-lg py-3 bg-blue-600 text-white font-medium shadow hover:bg-blue-700 hover:scale-105 transition transform">{submitting ? "Sending..." : "Send Message"}</button>
              </form>
            </div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} id="map" className="mt-6 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all">
              <iframe title="company-location" className="w-full h-80 md:h-96" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.609348702688!2d73.93276583846169!3d18.51901673896563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b807a73d1d%3A0x31f9db0d6530ee14!2sFTFL%20TECHNOLOGY%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1759215311291!5m2!1sen!2sin" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </motion.div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}



