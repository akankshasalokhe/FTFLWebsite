// pages/products/[slug].js
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

// Demo products with extended details
const PRODUCTS = [
  {
    title: "Dating App",
    slug: "dating-app",
    type: "App",
    color: "#FF6B6B",
    accentColor: "#FF3B3B",
    subtitle: "Find meaningful connections",
    description: "A modern dating app that uses AI to match you with compatible partners based on interests, values, and lifestyle preferences.",
    tags: ["React Native", "Firebase", "Socket.IO"],
    imageId: 100,
    keyFeatures: ["AI Matching", "Secure Chat", "Video Profiles", "Interest-Based Groups"],
    fullDescription: "Our Dating App revolutionizes how people connect in the digital age. Using advanced machine learning algorithms, we analyze user behavior, preferences, and interaction patterns to create meaningful matches that have a higher chance of developing into real relationships.",
    overview: "Connect with like-minded individuals through our intelligent matching system. Our app goes beyond superficial swiping by focusing on compatibility metrics and shared values to foster deeper connections from the start.",
    technicalDetails: "Built with React Native for cross-platform compatibility, Firebase for real-time data synchronization, and Socket.IO for seamless messaging. Includes integration with AWS Rekognition for photo verification and safety features.",
    appStoreLink: "https://apps.apple.com/us/app/example-dating-app/id1234567890",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.example.datingapp",
    screenshots: [101, 102, 103, 104, 105],
    stats: [
      { value: "1M+", label: "Active Users" },
      { value: "4.8", label: "App Store Rating" },
      { value: "95%", label: "Match Satisfaction" }
    ]
  },
  {
    title: "Fitness Tracker",
    slug: "fitness-tracker",
    type: "App",
    color: "#6C63FF",
    accentColor: "#524BDB",
    subtitle: "Achieve your health goals",
    description: "Comprehensive fitness app that tracks workouts, nutrition, and progress with personalized recommendations.",
    tags: ["React Native", "GraphQL", "HealthKit"],
    imageId: 400,
    keyFeatures: ["Workout Plans", "Nutrition Tracking", "Progress Analytics", "Community Challenges"],
    fullDescription: "Our Fitness Tracker is your complete health companion, designed to help you achieve your fitness goals through personalized workout plans, nutrition tracking, and detailed progress analytics.",
    overview: "Transform your health journey with our all-in-one fitness solution. Whether you're a beginner or a fitness enthusiast, our app adapts to your level and provides guidance to help you stay motivated and see real results.",
    technicalDetails: "Built with React Native for a seamless cross-platform experience, integrated with HealthKit and Google Fit for accurate health data tracking, and powered by GraphQL for efficient data management.",
    appStoreLink: "https://apps.apple.com/us/app/example-fitness-tracker/id9876543210",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.example.fitnesstracker",
    screenshots: [401, 402, 403, 404, 405],
    stats: [
      { value: "500K+", label: "Downloads" },
      { value: "4.9", label: "App Store Rating" },
      { value: "98%", label: "User Satisfaction" }
    ]
  },
  // Add other products with similar structure...
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{product.title} | Our Products</title>
        <meta name="description" content={product.description} />
      </Head>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md py-4 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </Link>
          <div className="flex items-center">
            <span 
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ backgroundColor: `${product.color}20`, color: product.color }}
            >
              {product.type}
            </span>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 opacity-5"
            style={{ backgroundColor: product.color }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Product Image/Preview */}
            <motion.div variants={fadeInUp} className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-3xl blur-xl opacity-50"></div>
                <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${product.type === "App" ? "bg-gray-900" : "bg-gray-800"} p-8`}>
                  {product.type === "App" ? (
                    <div className="flex justify-center">
                      <div className="w-64 h-[500px] bg-gray-800 rounded-[2.5rem] p-3 shadow-2xl border-8 border-gray-900">
                        <div className="relative h-full overflow-hidden rounded-2xl bg-gray-900">
                          <img 
                            src={`https://picsum.photos/seed/${product.imageId}/300/600`} 
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                            <div className="w-8 h-2 bg-white rounded-full"></div>
                            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                          </div>
                          <div className="absolute top-4 left-0 right-0 px-4">
                            <div className="h-4 bg-white/20 rounded-full w-3/4 mx-auto"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
                      <div className="bg-gray-800 rounded-t-xl p-3 flex items-center">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex-1 mx-4 bg-gray-700 rounded-full h-6"></div>
                      </div>
                      <div className="bg-gray-900 h-80 rounded-b-xl overflow-hidden">
                        <img 
                          src={`https://picsum.photos/seed/${product.imageId}/800/600`} 
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div variants={fadeInUp} className="lg:w-1/2">
              <div className="mb-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl font-bold text-gray-900 mb-4 leading-tight"
                >
                  {product.title}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-gray-600 mb-6 font-medium"
                >
                  {product.subtitle}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-700 mb-8 text-lg leading-relaxed"
                >
                  {product.fullDescription}
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="grid grid-cols-3 gap-6 mb-10"
              >
                {product.stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    variants={scaleIn}
                    className="text-center p-4 rounded-2xl bg-white shadow-lg border border-gray-100"
                  >
                    <div className="text-2xl font-bold text-gray-900" style={{ color: product.color }}>{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Download Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-10"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={product.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z"/>
                    </svg>
                    App Store
                  </a>
                  <a
                    href={product.googlePlayLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.78 10.82l2.32 2.32c.283-.944.49-1.93.49-2.934 0-1.005-.207-1.99-.49-2.934l-2.32 2.32a6.6 6.6 0 0 1 0 2.128zm-2.94 2.128l-9.23 9.23a.998.998 0 0 1-1.09.22A10.87 10.87 0 0 1 0 12c0-2.734.97-5.24 2.59-7.17a.998.998 0 0 1 1.09-.22l9.23 9.23a6.6 6.6 0 0 1 0 2.128zm2.94-4.256l2.32-2.32c.283.944.49 1.93.49 2.934 0 1.005-.207 1.99-.49 2.934l-2.32-2.32a6.6 6.6 0 0 1 0-2.128z"/>
                    </svg>
                    Google Play
                  </a>
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {product.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 text-sm font-medium rounded-full border"
                      style={{ 
                        backgroundColor: `${product.color}08`, 
                        color: product.color,
                        borderColor: `${product.color}20`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* App Overview Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">App Overview</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">{product.overview}</p>
          </motion.div>

          {/* Screenshots Gallery */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {product.screenshots.map((screenshotId, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="relative group"
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="overflow-hidden rounded-3xl shadow-2xl border-8 border-white">
                  <img 
                    src={`https://picsum.photos/seed/${screenshotId}/400/800`} 
                    alt={`${product.title} screenshot ${index + 1}`}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="text-sm font-medium">Screenshot {index + 1}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Discover what makes our app unique and powerful</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {product.keyFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                  style={{ backgroundColor: `${product.color}15` }}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg" style={{ backgroundColor: product.color }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature === "AI Matching" && "Our advanced algorithm analyzes hundreds of data points to find your most compatible matches based on interests, values, and behavior patterns."}
                  {feature === "Secure Chat" && "End-to-end encrypted messaging ensures your conversations remain private and secure from unauthorized access."}
                  {feature === "Video Profiles" && "Showcase your personality with video profiles that help you make a stronger impression than photos alone."}
                  {feature === "Interest-Based Groups" && "Join communities of like-minded people who share your hobbies, passions, and interests."}
                  {feature === "Workout Plans" && "Personalized workout routines designed specifically for your fitness level, goals, and available equipment."}
                  {feature === "Nutrition Tracking" && "Log meals, track macros, and get nutritional insights to support your fitness journey and health goals."}
                  {feature === "Progress Analytics" && "Visualize your progress with detailed charts and metrics that show how you're improving over time."}
                  {feature === "Community Challenges" && "Participate in fun challenges with other users to stay motivated and push your limits."}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-white p-12 rounded-3xl shadow-lg border border-gray-100"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Technical Excellence</h2>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed max-w-4xl">{product.technicalDetails}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-gray-900 mb-2" style={{ color: product.color }}>99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </motion.div>
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-gray-900 mb-2" style={{ color: product.color }}>&lt;100ms</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </motion.div>
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-gray-900 mb-2" style={{ color: product.color }}>256-bit</div>
                <div className="text-sm text-gray-600">Encryption</div>
              </motion.div>
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-gray-900 mb-2" style={{ color: product.color }}>24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundColor: product.color }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/80"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to get started?</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
              Download our app today and join thousands of satisfied users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={product.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ y: -3 }}
                style={{ boxShadow: `0 10px 30px -10px ${product.color}40` }}
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z"/>
                </svg>
                Download on App Store
              </motion.a>
              <motion.a
                href={product.googlePlayLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ y: -3 }}
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.78 10.82l2.32 2.32c.283-.944.49-1.93.49-2.934 0-1.005-.207-1.99-.49-2.934l-2.32 2.32a6.6 6.6 0 0 1 0 2.128zm-2.94 2.128l-9.23 9.23a.998.998 0 0 1-1.09.22A10.87 10.87 0 0 1 0 12c0-2.734.97-5.24 2.59-7.17a.998.998 0 0 1 1.09-.22l9.23 9.23a6.6 6.6 0 0 1 0 2.128zm2.94-4.256l2.32-2.32c.283.944.49 1.93.49 2.934 0 1.005-.207 1.99-.49 2.934l-2.32-2.32a6.6 6.6 0 0 1 0-2.128z"/>
                </svg>
                Get it on Google Play
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}