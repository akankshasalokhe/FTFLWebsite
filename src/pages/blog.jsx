// components/BlogBanner.js
import BlogPage from "@/components/Blog/Blog";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <>
      <div className="relative h-auto md:h-110 bg-gradient-to-r from-blue-500 to-blue-700 text-white overflow-hidden mb-4">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="white" />
            </pattern>
            <rect x="0" y="0" width="100" height="100" fill="url(#pattern)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:px-8 lg:py-20">
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
                <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
                  Read Latest Post
                </button>
              </motion.div>
            </div>
            
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
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">Latest Post</p>
                      <p className="text-xs sm:text-sm text-gray-500">May 15, 2023 • 5 min read</p>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">Getting Started with Next.js</h3>
                  <p className="text-gray-600 text-sm sm:text-base line-clamp-2">Learn how to set up and build your first Next.js application with this comprehensive guide.</p>
                  <div className="mt-3 sm:mt-4 flex items-center text-xs sm:text-sm text-gray-500">
                    <span>Development</span>
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