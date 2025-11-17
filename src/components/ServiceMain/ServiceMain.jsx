"use client";

import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiTrendingUp,
  FiSettings,
  FiCpu,
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

export default function EcommerceServicePage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-28 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl font-bold mb-4">E-Commerce Solutions</h1>
          <p className="text-lg text-gray-100">
            Transform your business with intelligent, scalable, and AI-powered online store solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-cover opacity-10"
        />
      </section>

      {/* ===== Overview ===== */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our E-Commerce solutions empower brands to build, manage, and scale digital stores with seamless
          integration, analytics, and automation. From design to deployment — we make digital selling smarter.
        </p>
      </motion.section>

      {/* ===== What is E-Commerce ===== */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white py-20"
      >
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img src="/ecommerce-illustration.svg" alt="Ecommerce" className="w-full" />
          <div>
            <h2 className="text-3xl font-semibold mb-4">What is E-Commerce?</h2>
            <p className="text-gray-600">
              E-Commerce refers to buying and selling products or services through digital platforms. It enables
              24/7 accessibility, personalized shopping, and global reach — empowering both customers and sellers.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ===== Benefits ===== */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FiTrendingUp />, title: "Increased Sales", desc: "Expand your reach and boost revenue globally." },
              { icon: <FiSettings />, title: "Automation", desc: "Reduce manual tasks with smart automation tools." },
              { icon: <FiUsers />, title: "Customer Insights", desc: "Understand your customers with advanced analytics." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-indigo-600 text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">Our Process</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Research", "Design", "Development", "Testing", "Launch"].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gray-50 p-6 rounded-2xl w-48 shadow-sm hover:shadow-lg"
              >
                <FiCheckCircle className="text-indigo-600 text-3xl mx-auto mb-3" />
                <p className="font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Key Features ===== */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
            {[
              "Responsive Storefront Design",
              "Secure Payment Gateway",
              "Inventory & Order Management",
              "AI-driven Recommendations",
              "Analytics Dashboard",
              "Multi-language & Multi-currency Support",
            ].map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
              >
                <FiArrowRight className="text-indigo-600" /> {f}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== FTFL Roadmap ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">FTFL Roadmap</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From foundation to future growth — our FTFL roadmap ensures a structured, scalable approach for your
            e-commerce success.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {["Foundation", "Technology", "Functionality", "Launch"].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 w-48 bg-indigo-50 rounded-2xl border border-indigo-100"
              >
                <h4 className="font-semibold text-indigo-700">{step}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Integration ===== */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Integration</h2>
          <p className="text-gray-600 mb-10">
            Seamlessly integrate with CRM, ERP, and marketing tools for unified business operations.
          </p>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src="/integration-diagram.svg"
            alt="Integration"
            className="mx-auto w-3/4"
          />
        </div>
      </section>

      {/* ===== AI Technology ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-4">AI Technology</h2>
            <p className="text-gray-600">
              Leverage Artificial Intelligence to enhance customer experience — with product recommendations,
              automated chatbots, and predictive analytics that drive conversions and engagement.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src="/ai-illustration.svg"
            alt="AI Technology"
            className="w-full"
          />
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does it take to build an e-commerce store?",
                a: "Depending on the complexity, it usually takes 4–8 weeks for a complete setup.",
              },
              {
                q: "Can I integrate third-party payment gateways?",
                a: "Yes, we support all major gateways like Stripe, PayPal, and Razorpay.",
              },
              {
                q: "Do you provide maintenance and support?",
                a: "Absolutely! We offer post-launch maintenance, updates, and optimization support.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl shadow"
              >
                <h4 className="font-semibold mb-2 text-indigo-700">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
