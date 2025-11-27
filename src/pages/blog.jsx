

"use client";

import BlogPage from "@/components/Blog/Blog";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Blog = () => {
  const pageTitle = "Blog";
  const [banner, setBanner] = useState(null);
  const [latestPostDate, setLatestPostDate] = useState("");

  // ✅ Fetch banner image
   useEffect(() => {
    const canvas = document.getElementById("blogCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = 400);

    const points = [];
    const POINT_COUNT = 32;

    for (let i = 0; i < POINT_COUNT; i++) {
      points.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 2 + 1,
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
        (p1.y + p2.y) / 2 + Math.sin(Date.now() * 0.001) * 18,
        p2.x,
        p2.y
      );
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);

      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, "rgba(0,160,255,0.07)");
      gradient.addColorStop(1, "rgba(0,255,255,0.06)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < POINT_COUNT; i++) {
        const p = points[i];

        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.8 * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140,220,255,${0.35 * p.z})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = "#3ab4ff";
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < POINT_COUNT; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < 210) drawLine(p, p2, 1 - dist / 210);
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

  // ✅ Fetch latest blog post
  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch("https://landing-page-yclw.vercel.app/api/blog");
        const result = await response.json();
        console.log("Fetched Blog Data:", result);

        if (result && result.success && result.data?.length > 0) {
          const sortedPosts = result.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          const latestPost = sortedPosts[0];

          const formattedDate = new Date(latestPost.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          setLatestPostDate(formattedDate);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchLatestPost();
  }, []);

  return (
    <>
      {/* ✅ Banner Section */}
      {/* <div className="relative w-full md:h-[420px] text-white overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#021030] via-[#032781] to-[#01154b]"> */}
      <div className="relative w-full min-h-[460px] md:h-[420px] text-white overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#021030] via-[#032781] to-[#01154b]">


  {/* Animated Canvas */}
  <canvas
    id="blogCanvas"
    className="absolute inset-0 w-full h-full pointer-events-none z-5"
  />

  {/* Background Effects */}
  <div className="absolute inset-0 z-5">
    <div className="circuit-lines"></div>
  </div>
  <div className="absolute inset-0 z-5 pointer-events-none">
    <div className="neon-dots"></div>
  </div>
  <div className="absolute inset-0 z-5 pointer-events-none">
    <div className="floating-polygons"></div>
  </div>

  {/* Neon Bottom Glow */}
  <div className="absolute bottom-0 left-0 w-full h-20 opacity-70 z-5">
    <div className="neon-wave"></div>
  </div>

  {/* ---- CENTER CONTENT ---- */}
  <div className="relative z-20 w-full max-w-4xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
    <motion.div
      className="text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
        Our Blog
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 md:mb-8">
        Insights, ideas and stories from our team
      </p>

      <button
        onClick={() => {
          document.getElementById("blog")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="mt-8 px-8 py-3 cursor-pointer rounded-lg 
        bg-gradient-to-r from-[#298cf3] to-blue-600 
        text-white font-semibold hover:shadow-lg hover:scale-105 
        transition-transform duration-300"
      >
        Read Latest Post
      </button>
    </motion.div>
  </div>
</div>


      <BlogPage />
    </>
  );
};

export default Blog;
