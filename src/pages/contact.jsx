"use client";

import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";

const ContactCard = ({ title, phone, email, address, hours, onSelect, isSelected }) => (
  <div 
    className={`border rounded-xl shadow-lg p-6 flex flex-col transition-all duration-300 ${
      isSelected ? "bg-blue-50 border-blue-300 ring-2 ring-blue-100" : "bg-white/90 backdrop-blur-sm hover:shadow-xl"
    }`}
  >
    <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
    <p className="mb-3 flex items-center gap-2 text-gray-700">
      <FiPhone className="text-blue-600" /> <a href={`tel:${phone}`} className="hover:text-blue-700 transition-colors">{phone}</a>
    </p>
    <p className="mb-3 flex items-center gap-2 text-gray-700">
      <FiMail className="text-blue-600" /> <a href={`mailto:${email}`} className="hover:text-blue-700 transition-colors">{email}</a>
    </p>
    <p className="mb-3 flex items-center gap-2 text-gray-700">
      <FiMapPin className="text-blue-600" /> {address}
    </p>
    <p className="text-sm text-gray-600 flex items-center gap-2 mb-4">
      <FiClock className="text-blue-600" /> {hours}
    </p>
    <button
      className={`mt-auto px-4 py-2 text-sm rounded-md transition-colors ${
        isSelected 
          ? "bg-blue-600 text-white hover:bg-blue-700" 
          : "border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white"
      }`}
      onClick={() => onSelect(title.toLowerCase())}
      aria-label={`Contact ${title}`}
    >
      Contact {title}
    </button>
  </div>
);

const ContactForm = ({ team, onSubmit, loading }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) return setError("Name is required.");
    if (!form.email.trim() && !form.phone.trim()) return setError("Email or Phone is required.");
    if (!form.message.trim()) return setError("Message is required.");
    
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      return setError("Please enter a valid email address.");
    }

    onSubmit({ ...form, team });
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-xl shadow-lg bg-white/90 backdrop-blur-sm p-6 border border-gray-200"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch with {team === "hr" ? "HR" : "Sales"}</h3>

      {error && <div className="text-red-600 bg-red-50 p-3 rounded-md text-sm mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        {error}
      </div>}

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          placeholder="Enter your full name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="+91 12345 67890"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          placeholder="How can we help you?"
        />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">We'll reply within 1–2 business days.</p>
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <FiSend className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default function ContactPage() {
  const [selectedTeam, setSelectedTeam] = useState("hr");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);

  const contacts = {
    hr: {
      title: "HR",
      phone: "+91 98765 43210",
      email: "hr@company.com",
      address: "Head Office, Pune",
      hours: "Mon–Fri, 10 AM – 6 PM",
    },
    sales: {
      title: "Sales",
      phone: "+91 91234 56789",
      email: "sales@company.com",
      address: "Sales Office, Mumbai",
      hours: "Mon–Sat, 9:30 AM – 7 PM",
    },
  };

  const handleSubmit = async (payload) => {
    setLoading(true);
    setStatus(null);

    try {
      // In a real application, you would send this data to your backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus({ 
        type: "success", 
        text: `Thank you! Your message has been sent to ${payload.team.toUpperCase()}. We'll contact you soon.` 
      });
      setSubmissionCount(prev => prev + 1);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ 
        type: "error", 
        text: "Sorry, something went wrong. Please try again later or contact us directly via phone/email." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
        {/* Banner Section */}
<div className="relative w-full h-[400px]">
  {/* Background Image */}
  <img
    src="/images/contact-banner.jpg" // replace with your banner image
    alt="Contact Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
  
  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
      Let’s Connect
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mb-6">
      Whether you’re looking for career opportunities with our HR team or business solutions with Sales, we’re just a message away.
    </p>
    <div className="flex gap-4">
      <a
        href="#hr"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
      >
        Contact HR
      </a>
      <a
        href="#sales"
        className="px-6 py-3 bg-white text-blue-700 hover:bg-gray-100 rounded-lg shadow-md transition"
      >
        Contact Sales
      </a>
    </div>
  </div>
</div>

      {/* Hero Section */}
      

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <ContactCard 
              {...contacts.hr} 
              onSelect={setSelectedTeam} 
              isSelected={selectedTeam === "hr"}
            />
            <ContactCard 
              {...contacts.sales} 
              onSelect={setSelectedTeam} 
              isSelected={selectedTeam === "sales"}
            />
          </div>
          
          <div className="lg:col-span-2">
            {status && (
              <div
                className={`mb-6 px-4 py-3 rounded-md text-sm ${
                  status.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {status.text}
              </div>
            )}
            
            <ContactForm 
              key={`${selectedTeam}-${submissionCount}`} 
              team={selectedTeam} 
              onSubmit={handleSubmit} 
              loading={loading} 
            />
          </div>
        </div>

        <div className="relative bg-blue-800 text-white py-16 mt-10">
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Contact our HR team for career opportunities or our Sales team for business inquiries. 
            We're here to help you!
          </p>
        </div>
      </div>

        {/* Google Maps Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Offices</h2>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.817574965936!2d73.85674331490235!3d18.52043008740792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06e3caaaaab%3A0x8b0e4f3c3f29e7d3!2sPune!5e0!3m2!1sen!2sin!4v1675859382731!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Office Locations"
              aria-label="Map showing company office locations"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}