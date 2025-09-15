"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-blue-600 text-white">
      {/* Hero Content */}
      <div className="container mx-auto px-6 py-32 text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Web Development Services
          </h1>
          <p className="mb-6 text-lg md:text-xl">
            Build fast, secure, and scalable web applications tailored to your business needs.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Get a Quote
          </Link>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          {/* Optional Image */}
          <img
            src="/images/hero-web.svg"
            alt="Web Development Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* SVG Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,144C672,149,768,203,864,197.3C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none mt-8">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.5"
            d="M0,160L48,138.7C96,117,192,75,288,74.7C384,75,480,117,576,138.7C672,160,768,160,864,165.3C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
