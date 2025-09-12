
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";

const ServiceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Data for the service page
  useEffect(() => {
    if (!slug) return;

    const services = {
      "web-development": {
        id: "1",
        slug: "web-development",
        title: "Premium Web Development",
        bannerImage:
          "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2000&auto=format&fit=crop",
        serviceMainImage:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        description:
          "Our premium web development service creates stunning, responsive websites tailored to your business needs. We focus on modern design principles and robust backend development to ensure your site is not only beautiful but also fast, secure, and scalable. Let us build the digital presence your brand deserves.",
        duration: "2-4 weeks",
        benefits: [
          "Custom, responsive design",
          "Advanced SEO optimization",
          "Robust, scalable backend",
          "Secure and fast performance",
          "Dedicated post-launch support",
        ],
      },
      // You can add more services here
    };

    setTimeout(() => {
      setService(services[slug] || services["web-development"]);
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{service.title} | Our Services</title>
        <meta name="description" content={service.description} />
      </Head>

      <div className="bg-white">
        {/* Header with Back Button */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="text-gray-600 hover:text-indigo-600 transition flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">Back to Services</span>
            </button>
            {/* <a href="#contact" className="px-6 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Contact
            </a> */}
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${service.bannerImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-xl md:text-2xl font-light max-w-2xl mx-auto"
            >
              {service.description.substring(0, 150) + "..."}
            </motion.p>
          </div>
        </section>

        {/* About and Duration Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            {/* Image on one side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative aspect-square md:w-3/4 mx-auto"
            >
              <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-indigo-100">
                <img
                  src={service.serviceMainImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-full shadow-lg border border-gray-200 transform hover:scale-105 transition">
                <Clock className="w-6 h-6 text-indigo-500" />
              </div>
            </motion.div>

            {/* Content on the other side */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className="lg:pr-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                About This Service
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="inline-flex items-center gap-3 rounded-lg bg-gray-100 p-4 font-medium text-gray-700">
                <Clock className="w-6 h-6 text-indigo-600" />
                <span className="font-semibold">Project Duration:</span> {service.duration}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                What You Get
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Our comprehensive service includes everything you need to succeed.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                  <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="bg-gray-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            >
              Lets discuss how we can bring your vision to life with a professional and results-driven approach.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 font-bold rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition"
            >
              Get a Free Consultation
            </motion.button>
          </div>
        </section>

        {/* Footer could go here */}
      </div>
    </>
  );
};

export default ServiceDetail;

