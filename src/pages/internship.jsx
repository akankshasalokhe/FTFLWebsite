import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModulesSection from "@/components/Internship/Modules";
import InternshipHighlights from "@/components/Internship/Highlights";
import InternshipProcess from "@/components/Internship/Process";
import WhyChooseUs from "@/components/Internship/WhyChooseUs";
import CTASection from "@/components/Internship/CTASection";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  const carouselImages = [
    { 
      src: "/Team.jpeg", 
      alt: "Students collaborating in a professional environment" 
    },
    { 
      src: "/Hero.jpeg", 
      alt: "Our team of experienced mentors and professionals" 
    },
    { 
      src: "/Team.jpeg", 
      alt: "Mobile web development project showcase" 
    },
  ];

  return (
    <>
    <section className="relative mt-[80px] w-full h-screen flex items-center justify-center text-center overflow-hidden" role="region" aria-label="Internship Program Introduction">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Slider {...sliderSettings}>
          {carouselImages.map((img, idx) => (
            <div key={idx} className="relative w-full h-screen">
              <div className="relative w-full h-screen">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ 
                    // objectFit: isMobile ? "cover" : "cover",
                    objectPosition: isMobile ? "center cente" : "center center"
                  }}
                  className="brightness-50"
                  priority={idx === 0}
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </Slider>
        {/* Blue overlay for consistent theme */}
        <div className="absolute inset-0 bg-blue-500/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 max-w-4xl text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          <span className="text-blue-300">Boost Your Career</span> with Our Paid Internship
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
          Gain real-world experience, complete projects, earn an internship letter, and secure a placement opportunity in our company.
        </p>

        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#298cf3] to-blue-600 hover:bg-blue-600 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75"
            aria-label="Enroll in the internship program"
          >
            Enroll Now
          </a>
           <a
            href="#modules"
            className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
            aria-label="View internship program modules"
          >
            View Modules
          </a> 
        </div> */}
      </div>
    </section>
    <InternshipHighlights />
    <InternshipProcess />
    <ModulesSection />
    <WhyChooseUs />
    {/* <CTASection /> */}
    </>
  );
};

export default HeroSection;