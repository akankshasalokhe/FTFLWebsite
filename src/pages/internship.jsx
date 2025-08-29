import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-28 px-6 overflow-hidden">
      
      {/* Background decorative shapes */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-400 rounded-full opacity-20 blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-yellow-400 rounded-full opacity-20 blur-2xl animate-blob animation-delay-2000"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Kickstart Your Career with <span className="text-yellow-400">Paid Internship</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
          Enroll in our course-based internship program, complete the modules, receive an official internship letter, and secure a guaranteed placement in our company.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="#apply"
            className="bg-yellow-400 text-red-600 font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Enroll Now
          </a>
          <a
            href="#modules"
            className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View Modules
          </a>
        </div>

        {/* Illustration */}
        <div className="mt-12 flex justify-center">
          <Image
            src="/hero-illustration.png" // Replace with your image/SVG
            alt="Internship Illustration"
            width={400}
            height={400}
            className="animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
