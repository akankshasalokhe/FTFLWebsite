

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
    const fetchBanner = async () => {
      try {
        const res = await fetch("https://landing-page-yclw.vercel.app/api/banner");
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          const matchedBanner = data.data.find(
            (b) => b.title?.toLowerCase() === pageTitle.toLowerCase()
          );
          setBanner(matchedBanner || null);
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    };

    fetchBanner();
  }, [pageTitle]);

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
      <div
        className="relative mt-[80px] md:h-120 text-white overflow-hidden mb-4 flex items-center justify-center"
      >
        {/* Dynamic Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 hover:scale-125 transition-transform duration-[6000ms]"
          style={{
            backgroundImage: `url(${banner?.bannerImage || "/images/blog-banner.jpg"})`,
            objectFit: "contain",
          }}
        />
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/70 opacity-80" /> */}

        {/* Banner Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Blog
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Insights, ideas and stories from our team
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <button
                  onClick={() => {
                    const element = document.getElementById("blog");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  // className="bg-white text-blue-600 hover:bg-blue-50 cursor-pointer font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                   className="mt-8 px-8 py-3 cursor-pointer rounded-lg bg-gradient-to-r from-[#298cf3] to-blue-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Read Latest Post
                </button>
              </motion.div>
            </div>

            {/* Right Card */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-center px-4 sm:px-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-2 sm:-inset-4 bg-blue-500 rounded-2xl rotate-6 opacity-30"></div>
                <div className="absolute -inset-1 sm:-inset-2 bg-white rounded-xl rotate-3 opacity-20"></div>
                <div className="relative bg-white p-4 sm:p-6 rounded-xl shadow-2xl">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        Latest Post
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {latestPostDate
                          ? `${latestPostDate} • 5 min read`
                          : "Loading..."}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    Insights Across Technology, Design, Marketing & Finance
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base line-clamp-2">
                    Expert perspectives and innovative strategies driving
                    success in today's digital landscape.
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center text-xs sm:text-sm text-gray-500">
                    <span>Industry Insights</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <BlogPage />
    </>
  );
};

export default Blog;
