// components/BlogBanner.js
import BlogPage from "@/components/Blog/Blog";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <>
    <div className="relative h-110 bg-gradient-to-r from-blue-500 to-blue-700 text-white overflow-hidden mb-4">
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
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Blog
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Insights, ideas and stories from our team
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                Read Latest Post
              </button>
              {/* <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                View All Categories
              </button> */}
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500 rounded-2xl rotate-6 opacity-30"></div>
              <div className="absolute -inset-2 bg-white rounded-xl rotate-3 opacity-20"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Latest Post</p>
                    <p className="text-sm text-gray-500">May 15, 2023 • 5 min read</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Getting Started with Next.js</h3>
                <p className="text-gray-600">Learn how to set up and build your first Next.js application with this comprehensive guide.</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span className="inline-flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                    Jane Smith
                  </span>
                  <span className="mx-2">•</span>
                  <span>Development</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      {/* <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white">
          <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" opacity=".25" fill="currentColor"></path>
          <path d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z" opacity=".5" fill="currentColor"></path>
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" fill="currentColor"></path>
        </svg>
      </div> */}
    </div>
    <BlogPage />
    </>
  );
};

export default Blog;