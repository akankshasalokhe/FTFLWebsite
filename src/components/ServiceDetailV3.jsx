"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { motion } from "framer-motion";
import { Clock } from "lucide-react"; // Using Clock icon for duration

const ServiceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // UPDATED: Data structure uses ONLY your specified fields
  useEffect(() => {
    if (!slug) return;

    const services = {
      "web-development": {
        id: "1",
        slug: "web-development",
        title: "Premium Web Development",
        bannerImage:
          "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
        serviceMainImage:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        description:
          "Our premium web development service creates stunning, responsive websites tailored to your business needs. We focus on modern design principles and robust backend development to ensure your site is not only beautiful but also fast, secure, and scalable. Let us build the digital presence your brand deserves.",
        duration: "2-4 weeks",
      },
    };

    setTimeout(() => {
      setService(services[slug] || services["web-development"]);
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  // Auto-generating a short description from the main one to fit the design
  const shortDescription = service.description.substring(0, 100) + "...";

  return (
    <>
      <Head>
        <title>{service.title} | Premium Services</title>
        <meta name="description" content={shortDescription} />
      </Head>

      {/* HERO SECTION - UNCHANGED */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center text-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${service.bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            {service.title}
          </h1>
          {/* UPDATED: Using the auto-generated short description */}
          <p className="text-xl text-gray-200 mb-8">{shortDescription}</p>
          <motion.button
            className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-bold shadow-lg hover:scale-110 transition"
            whileHover={{ scale: 1.1 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* ZIG-ZAG DETAILS SECTION - ADAPTED */}
      <section className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            src={service.serviceMainImage}
            alt={service.title}
            className="rounded-3xl shadow-2xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold mb-6">
              Why Choose {service.title}?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {service.description}
            </p>
            {/* UPDATED: Replaced the two stat cards with a single duration display */}
            <div className="mt-8">
              <div className="inline-flex items-center gap-4 rounded-xl bg-gray-100 p-4 border border-gray-200">
                <Clock className="w-8 h-8 text-purple-600" />
                <div>
                  <h4 className="text-sm uppercase text-gray-500">
                    Project Duration
                  </h4>
                  <p className="text-xl font-bold text-gray-800">
                    {service.duration}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REMOVED "FEATURES" SECTION */}
      {/* REMOVED "CLIENTS" SECTION */}
      {/* REMOVED "TESTIMONIALS" SECTION */}

      {/* FINAL CTA - UNCHANGED */}
      <section className="relative py-28 bg-gray-900 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/20 to-blue-500/30 blur-3xl"></div>
        <motion.h2
          className="relative text-4xl font-extrabold mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Let’s Build Something Great Together
        </motion.h2>
        <motion.button
          className="relative px-12 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-bold rounded-full shadow-lg hover:scale-110 transition"
          whileHover={{ scale: 1.1 }}
        >
          Contact Us Now
        </motion.button>
      </section>
    </>
  );
};

export default ServiceDetail;
