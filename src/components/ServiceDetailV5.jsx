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
        };

        setTimeout(() => {
            setService(services[slug] || services["web-development"]);
            setLoading(false);
        }, 500);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{service.title} | Services</title>
                <meta name="description" content={service.description} />
            </Head>

            <div className="bg-white">
                {/* Hero Banner */}
                <section
                    className="relative h-[70vh] flex items-center justify-center text-center"
                    style={{ backgroundImage: `url(${service.bannerImage})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 max-w-3xl px-6"
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                            {service.title}
                        </h1>
                        <p className="mt-6 text-xl text-gray-200 leading-relaxed">
                            {service.description.substring(0, 160)}...
                        </p>
                    </motion.div>
                </section>
                {/* Main Image + About Section */}
                <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24">
                    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                        {/* Content - Now on Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }} // animate from left
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                About This Service
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>

                        {/* Main Service Image - Now on Right */}
                        {/* <motion.div
                            initial={{ opacity: 0, x: 50 }} // animate from right
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-2xl relative"
                        >
                            <img
                                src={service.serviceMainImage}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold shadow-md flex items-center gap-2">
                                <Clock className="w-5 h-5 text-indigo-600" />
                                {service.duration}
                            </div>
                        </motion.div> */}

                        <motion.div
                            // ... your existing motion props
                             initial={{ opacity: 0, x: 50 }} // animate from right
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-2xl relative transform-gpu" // Added transform-gpu
                            style={{
                                transform: 'perspective(1000px) rotateY(15deg) rotateX(5deg)',
                                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -30px',
                            }}
                        >
                             <img
                                src={service.serviceMainImage}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>


                    </div>
                </section>


                {/* Benefits Section */}
                <section className="bg-indigo-50 py-24 relative">
                    <div className="container mx-auto px-6 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-extrabold text-gray-900"
                        >
                            Why Choose Us?
                        </motion.h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Every service comes packed with features designed to help you
                            succeed.
                        </p>

                        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {service.benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl shadow-md p-6 text-left flex gap-4 items-start hover:shadow-xl transition"
                                >
                                    <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                                    <p className="text-lg font-medium text-gray-800">{benefit}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold mb-6"
                    >
                        Ready to Start Your Project?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10"
                    >
                        Let’s bring your vision to life with a professional, results-driven
                        approach.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 font-bold rounded-full bg-white text-indigo-700 shadow-lg hover:bg-gray-100 transition"
                    >
                        Get a Free Consultation
                    </motion.button>
                </section>
            </div>
        </>
    );
};

export default ServiceDetail;


