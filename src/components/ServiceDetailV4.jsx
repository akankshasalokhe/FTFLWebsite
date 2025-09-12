
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Users } from "lucide-react";

const ServiceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const services = {
      "web-development": {
        id: "1",
        slug: "web-development",
        title: "Premium Web Development",
        bannerImage:
          "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
        mainImage:
          "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
        description:
          "Our premium web development service creates stunning, responsive websites tailored to your business needs...",
        shortDescription: "Professional website development services",
        features: [
          "Responsive design that works on all devices",
          "SEO optimization for better visibility",
          "Fast loading times",
          "Secure and reliable",
          "Ongoing support and maintenance",
        ],
        price: "$1,500+",
        duration: "2-4 weeks",
        clients: ["Google", "Microsoft", "Apple", "Amazon"],
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

  return (
    <>
      <Head>
        <title>{service.title} | Premium Services</title>
        <meta name="description" content={service.shortDescription} />
      </Head>

      {/* HERO */}
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
          <p className="text-xl text-gray-200 mb-8">{service.shortDescription}</p>
          <motion.button
            className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-bold shadow-lg hover:scale-110 transition"
            whileHover={{ scale: 1.1 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* ZIG-ZAG DETAILS */}
      <section className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            src={service.mainImage}
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
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg text-center">
                <h4 className="text-sm uppercase">Starting at</h4>
                <p className="text-2xl font-bold">{service.price}</p>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-xl shadow-lg text-center">
                <h4 className="text-sm uppercase">Duration</h4>
                <p className="text-2xl font-bold">{service.duration}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">
            What’s Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="relative p-6 rounded-2xl shadow-xl border border-gray-100 hover:border-blue-400 bg-white group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-t-2xl"></div>
                <CheckCircle2 className="text-blue-600 w-8 h-8 mb-4" />
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <h2 className="text-2xl font-bold text-center mb-12">
          Trusted by Leading Brands
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {service.clients.map((client, idx) => (
            <motion.div
              key={idx}
              className="px-6 py-4 bg-white rounded-2xl shadow hover:shadow-lg font-bold text-gray-700"
              whileHover={{ scale: 1.1 }}
            >
              {client}
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 py-20 text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-12">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-12 h-12 text-yellow-300 mb-4 mx-auto" />
              <h4 className="font-bold">John Doe</h4>
              <p className="text-sm opacity-80 mb-4">CEO, Tech Solutions</p>
              <p>
                “Our website performance improved dramatically and conversions
                skyrocketed thanks to this amazing team.”
              </p>
            </motion.div>
            <motion.div
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-12 h-12 text-pink-300 mb-4 mx-auto" />
              <h4 className="font-bold">Jane Smith</h4>
              <p className="text-sm opacity-80 mb-4">
                Marketing Director, Innovate Co.
              </p>
              <p>
                “The mobile app transformed our business. Engagement increased
                by 45% within months.”
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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
