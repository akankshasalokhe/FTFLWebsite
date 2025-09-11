import React, { useState } from "react";
import styles from "../../styles/ServiceDetail.module.css";

const servicesData = {
  "web-development": {
    title: "Web Development",
    tagline: "We build scalable, responsive, and modern websites.",
    overview:
      "Our web development service helps businesses create secure, fast, and user-friendly websites. We specialize in custom solutions tailored to your unique goals.",
    features: [
      "Responsive Design",
      "SEO-Friendly",
      "Secure & Scalable",
      "Custom CMS Development",
      "E-commerce Solutions",
      "Performance Optimization",
      "API Integration",
      "Web Accessibility",
    ],
    process: [
      "Requirement Gathering",
      "UI/UX Design",
      "Development",
      "Testing & QA",
      "Deployment & Support",
    ],
    faq: [
      {
        q: "How long does it take to build a website?",
        a: "Usually 4–8 weeks depending on complexity.",
      },
      {
        q: "Do you provide maintenance?",
        a: "Yes, we offer ongoing support and maintenance packages.",
      },
      {
        q: "Can you integrate third-party APIs?",
        a: "Absolutely! We handle API integration seamlessly.",
      },
    ],
  },

  "app-development": {
    title: "App Development",
    tagline: "Build powerful iOS & Android applications.",
    overview:
      "We create mobile apps that deliver seamless user experiences across iOS and Android. From design to deployment, we handle everything.",
    features: [
      "iOS & Android Apps",
      "Cross-Platform Development",
      "High Performance",
      "UI/UX Focused",
      "App Maintenance",
      "Push Notifications",
      "App Store Deployment",
      "Analytics Integration",
    ],
    process: ["Wireframing", "Development", "Testing", "Launch", "Support"],
    faq: [
      {
        q: "Do you build apps for both iOS and Android?",
        a: "Yes, we build cross-platform apps using modern frameworks.",
      },
      {
        q: "Do you provide post-launch support?",
        a: "Yes, we offer support and updates after launch.",
      },
    ],
  },
};

export default function ServiceDetailPage({ service }) {
  const [activeFaq, setActiveFaq] = useState(null);

  if (!service) {
    return (
      <h2 className="text-center mt-10 text-red-600">Service not found</h2>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-16 px-4 md:px-0">
      {/* Hero Banner */}
      <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/banner.jpg" // Replace with your image
          alt={service.title}
          className={styles.heroImage}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-16">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${styles.slideDown}`}>
            {service.title}
          </h1>
          <p className={`text-lg md:text-2xl ${styles.fadeIn}`}>
            {service.tagline}
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className={styles.fadeUp}>
        <h2 className="text-3xl font-semibold mb-4 border-l-4 border-blue-600 pl-3">
          Overview
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">{service.overview}</p>
      </section>

      {/* Features */}
      <section className={styles.fadeUp}>
        <h2 className="text-3xl font-semibold mb-6 border-l-4 border-blue-600 pl-3">
          Key Features
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((f, i) => (
            <li
              key={i}
              className={`p-6 bg-blue-50 rounded-xl border ${styles.card} flex items-center gap-3`}
            >
              <span className="text-blue-600 font-bold text-2xl">✔️</span>
              <span className="text-gray-800 font-medium">{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className={styles.fadeUp}>
        <h2 className="text-3xl font-semibold mb-6 border-l-4 border-blue-600 pl-3">
          Our Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.process.map((step, i) => (
            <div
              key={i}
              className={`p-6 bg-gray-50 border rounded-xl shadow ${styles.card}`}
            >
              <div className="text-2xl font-bold text-blue-600 mb-2">
                Step {i + 1}
              </div>
              <div className="text-gray-700">{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.fadeUp}>
        <h2 className="text-3xl font-semibold mb-6 border-l-4 border-blue-600 pl-3">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {service.faq.map((item, i) => (
            <div key={i} className="border rounded-xl shadow-sm bg-gray-50">
              <button
                onClick={() =>
                  setActiveFaq(activeFaq === i ? null : i)
                }
                className="w-full text-left p-4 flex justify-between items-center font-semibold text-gray-800"
              >
                <span>Q: {item.q}</span>
                <span>{activeFaq === i ? "−" : "+"}</span>
              </button>
              {activeFaq === i && (
                <div className="p-4 text-gray-600 border-t">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={`text-center py-12 ${styles.fadeUp}`}>
        <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
        <p className="text-gray-600 mb-6 text-lg">
          Get in touch with us today and let’s build something amazing together.
        </p>
        <button className={`px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow ${styles.ctaButton}`}>
          Contact Us
        </button>
      </section>
    </div>
  );
}

// Static paths
export async function getStaticPaths() {
  return {
    paths: Object.keys(servicesData).map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

// Static props
export async function getStaticProps({ params }) {
  const service = servicesData[params.slug] || null;
  return { props: { service } };
}
