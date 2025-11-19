import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModulesSection from "@/components/Internship/Modules";
import Highlights from "@/components/Internship/Highlights";
import Benifits from "@/components/Internship/Benifits";
import InternshipProcess from "@/components/Internship/Process";
import WhyChooseUs from "@/components/Internship/WhyChooseUs";
import CTASection from "@/components/Internship/CTASection";
import { motion } from "framer-motion";


const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
    const canvas = document.getElementById("smallCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = 350);

    const points = [];
    const POINT_COUNT = 30;

    for (let i = 0; i < POINT_COUNT; i++) {
      points.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 1.8 + 1,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
      });
    }

    function drawLine(p1, p2, opacity) {
      ctx.strokeStyle = `rgba(110,190,255,${opacity})`;
      ctx.lineWidth = 1.1;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.quadraticCurveTo(
        (p1.x + p2.x) / 2,
        (p1.y + p2.y) / 2 + Math.sin(Date.now() * 0.001) * 15,
        p2.x,
        p2.y
      );
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);

      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, "rgba(0,150,255,0.07)");
      gradient.addColorStop(1, "rgba(0,255,255,0.05)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < POINT_COUNT; i++) {
        const p = points[i];

        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5 * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140,220,255,${0.35 * p.z})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#3ab4ff";
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < POINT_COUNT; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < 180) drawLine(p, p2, 1 - dist / 180);
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      w = canvas.width = window.innerWidth;
    };
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

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

  // const sliderSettings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   fade: true,
  //   arrows: false,
  // };

  // const carouselImages = [
  //   { 
  //     src: "/Team.jpeg", 
  //     alt: "Students collaborating in a professional environment" 
  //   },
  //   { 
  //     src: "/Hero.jpeg", 
  //     alt: "Our team of experienced mentors and professionals" 
  //   },
  //   { 
  //     src: "/Team.jpeg", 
  //     alt: "Mobile web development project showcase" 
  //   },
  // ];

  return (
    <>
     <div
      className="relative w-full h-64 sm:h-80 md:h-[370px] lg:h-[400px] 
      overflow-hidden bg-gradient-to-r from-[#021030] via-[#032781] to-[#01154b]"
    >
      {/* Canvas Animated Background */}
      <canvas
        id="smallCanvas"
        className="absolute inset-0 w-full h-full pointer-events-none z-5"
      ></canvas>

      {/* Decorative Tech Layers */}
      <div className="absolute inset-0 z-5">
        <div className="circuit-lines"></div>
      </div>
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="neon-dots"></div>
      </div>
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="floating-polygons"></div>
      </div>

      {/* Neon Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-20 opacity-70 z-5">
        <div className="neon-wave"></div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
        >
          Your Journey{" "}
          <span className="text-blue-300 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            from Classroom to Corporate
          </span>{" "}
          Begins Here.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl"
        >
          Join FTFL to explore limitless opportunities, enhance your skills, and
          accelerate your journey toward success.
        </motion.p>
      </div>
    </div>
    <Highlights />
    {/* <Benifits /> */}
    <InternshipProcess />
    <ModulesSection />
    <WhyChooseUs />
    {/* <CTASection /> */}
    </>
  );
};

export default HeroSection;