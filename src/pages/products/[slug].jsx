import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const ProductDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImage, setActiveImage] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center p-8 max-w-md bg-white rounded-2xl shadow-xl">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">404</h1>
          <p className="text-xl text-gray-600 mb-8">Product not found</p>
          <button 
            onClick={() => window.location.href = '/products'}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>{product.name} - {product.tagline}</title>
        <meta name="description" content={product.description} />
      </Head>

      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm py-4 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={() => window.history.back()} className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <h1 className="text-xl font-bold text-gray-900">{product.name}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Product Image */}
            <div className="w-full md:w-2/5 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </motion.div>
            </div>

            {/* Product Info */}
            <div className="w-full md:w-3/5 text-gray-800">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium mb-4 shadow-sm">
                  {product.category}
                </span>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {product.name}
                </h1>
                
                <p className="text-xl text-gray-700 mb-5">{product.tagline}</p>
                
                <p className="text-gray-600 mb-7 max-w-lg">{product.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-7">
                  {product.highlights.map((highlight, index) => (
                    <span key={index} className="flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">
                      <span className="text-lg mr-2">{highlight.icon}</span>
                      {highlight.title}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Get Started
                  </motion.button>
                  
                  {product.demoVideo && (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setVideoPlaying(true)}
                      className="px-7 py-3.5 border-2 border-blue-500 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Watch Demo
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white/80 backdrop-blur-sm py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-8/12">
            {/* Tabs Navigation */}
            <div className="flex overflow-x-auto border-b border-gray-200 mb-8 bg-white rounded-t-xl p-2">
              {['overview', 'features', 'screenshots'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium whitespace-nowrap rounded-lg mx-1 ${activeTab === tab ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {product.name}</h2>
                  <div className="prose text-gray-600 mb-8">
                    <p>
                      {product.description} Our platform is designed to deliver exceptional value through innovative technology and user-centric design.
                    </p>
                    <p>
                      Whether you're a small business owner or part of a large enterprise, {product.name} provides the tools you need to succeed in today's competitive landscape.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-start p-5 bg-gray-50 rounded-xl border border-gray-100">
                        <span className="text-2xl mr-4">{feature.icon}</span>
                        <div>
                          <h3 className="font-bold text-gray-900">{feature.title}</h3>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {product.demoVideo && (
                    <div 
                      className="rounded-xl overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 aspect-w-16 aspect-h-9 cursor-pointer flex items-center justify-center"
                      onClick={() => setVideoPlaying(true)}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p className="text-white font-medium">Watch Product Demo</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Features Tab */}
              {activeTab === 'features' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 mr-4 flex-shrink-0">
                          <span className="text-xl text-white">{feature.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Screenshots Tab */}
              {activeTab === 'screenshots' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">App Screenshots</h2>
                  <p className="text-gray-600 mb-6">Explore the interface and features of {product.name} through these screenshots.</p>
                  
                  {/* Main Screenshot */}
                  <div className="mb-8 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                    <img
                      src={product.screenshots[activeImage]}
                      alt={`${product.name} screenshot ${activeImage + 1}`}
                      className="w-full h-auto cursor-pointer"
                      onClick={() => setLightboxOpen(true)}
                    />
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {product.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${activeImage === index ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'}`}
                      >
                        <img
                          src={screenshot}
                          alt={`Screenshot ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-4/12 space-y-6">
            {/* Download Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Get the App</h3>
              <p className="text-gray-600 mb-4">Download now and get started in minutes</p>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-3.5 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.924 17.315c-.057.174-.193.332-.348.367-.156.035-.343-.047-.483-.183-1.092-1.067-2.438-1.499-3.653-1.499-1.218 0-2.562.432-3.651 1.5-.14.136-.327.218-.483.183-.155-.035-.291-.193-.348-.367-.057-.174-.015-.361.113-.491 1.395-1.361 3.103-1.909 4.369-1.909s2.974.548 4.37 1.909c.127.13.17.317.113.491zm-2.489-5.307c-1.363 1.363-3.579 1.363-4.942 0-1.364-1.364-1.364-3.58 0-4.943 1.363-1.364 3.579-1.364 4.942 0 1.364 1.363 1.364 3.579 0 4.943zm-2.471-2.471c-.78.78-2.048.78-2.829 0-.78-.781-.78-2.048 0-2.829.781-.78 2.048-.78 2.829 0 .78.781.78 2.048 0 2.829z"/>
                  </svg>
                  Google Play
                </button>
                <button className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-3.5 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 12.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm-5-5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm-5 5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5z"/>
                  </svg>
                  App Store
                </button>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">Our support team is here to assist you</p>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Contact Support
              </button>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Product Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Version</span>
                  <span className="font-medium">2.4.1</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Size</span>
                  <span className="font-medium">28.5 MB</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-medium">4.9/5</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Downloads</span>
                  <span className="font-medium">50,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                onClick={() => setLightboxOpen(false)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={product.screenshots[activeImage]}
                  alt={`${product.name} screenshot ${activeImage + 1}`}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {videoPlaying && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoPlaying(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                onClick={() => setVideoPlaying(false)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xl font-medium">Product Demo Video</p>
                  <p className="text-gray-400 mt-2">Video would play here in a real implementation</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Sample product data for all three products
const sampleProducts = {
  'lifeline-card': {
    id: 'lifeline-card',
    name: 'Lifeline Card',
    tagline: 'Your Financial Safety Net for Emergencies',
    description: 'A revolutionary financial product that provides immediate access to funds during emergencies with flexible repayment options and zero hidden fees.',
    category: 'Financial Technology',
    image: '/api/placeholder/300/300?text=Lifeline+Card',
    gradient: 'bg-gradient-to-r from-blue-600 to-indigo-700',
    highlights: [
      { icon: '⚡', title: 'Instant Approval' },
      { icon: '🔒', title: 'No Hidden Fees' },
      { icon: '🌎', title: 'Global Access' },
      { icon: '📱', title: 'Mobile Management' }
    ],
    features: [
      {
        title: "Emergency Funding",
        description: "Access to funds within minutes of approval",
        icon: "💳"
      },
      {
        title: "Flexible Repayment",
        description: "Choose repayment terms that work for you",
        icon: "📅"
      },
      {
        title: "Credit Building",
        description: "Reported to major credit bureaus",
        icon: "📊"
      },
      {
        title: "Zero Interest",
        description: "No interest if repaid within 30 days",
        icon: "🎯"
      },
      {
        title: "Mobile App",
        description: "Manage your account on the go",
        icon: "📱"
      },
      {
        title: "24/7 Support",
        description: "Always available customer service",
        icon: "👥"
      }
    ],
    stats: [
      { value: '500K+', label: 'Users' },
      { value: '$0', label: 'Hidden Fees' },
      { value: '4.7★', label: 'Rating' },
      { value: '2min', label: 'Approval Time' }
    ],
    screenshots: [
      '/api/placeholder/600/1200?text=Lifeline+Dashboard',
      '/api/placeholder/600/1200?text=Lifeline+Card+View',
      '/api/placeholder/600/1200?text=Lifeline+Mobile+App',
      '/api/placeholder/600/1200?text=Lifeline+Support'
    ],
    demoVideo: '#'
  },
  'fetch-true': {
    id: 'fetch-true',
    name: 'Fetch True',
    tagline: 'The Complete Franchise Management Solution',
    description: 'An all-in-one platform revolutionizing franchise operations with AI-powered analytics, automated workflows, and real-time business intelligence.',
    category: 'Enterprise Software',
    image: '/api/placeholder/300/300?text=Fetch+True',
    gradient: 'bg-gradient-to-r from-green-600 to-teal-700',
    highlights: [
      { icon: '🚀', title: 'Rapid Deployment' },
      { icon: '📈', title: 'Smart Analytics' },
      { icon: '🤖', title: 'Process Automation' },
      { icon: '🔐', title: 'Bank-Grade Security' }
    ],
    features: [
      {
        title: "AI Dashboard",
        description: "Real-time performance metrics across all locations",
        icon: "📊"
      },
      {
        title: "Automated Scheduling",
        description: "Smart resource allocation based on demand forecasting",
        icon: "⏱️"
      },
      {
        title: "Unified Communications",
        description: "Seamless team collaboration across locations",
        icon: "💬"
      },
      {
        title: "Inventory Management",
        description: "Automated stock tracking with reorder alerts",
        icon: "📦"
      },
      {
        title: "Customer CRM",
        description: "360° view of customer interactions",
        icon: "👥"
      },
      {
        title: "Compliance Tracking",
        description: "Automated regulatory requirement monitoring",
        icon: "✅"
      }
    ],
    stats: [
      { value: '10K+', label: 'Franchises' },
      { value: '95%', label: 'Efficiency Gain' },
      { value: '4.9★', label: 'Rating' },
      { value: '24h', label: 'Deployment Time' }
    ],
    screenshots: [
      '/api/placeholder/600/1200?text=Fetch+Dashboard',
      '/api/placeholder/600/1200?text=Fetch+Analytics',
      '/api/placeholder/600/1200?text=Fetch+Mobile',
      '/api/placeholder/600/1200?text=Fetch+Reports'
    ],
    demoVideo: '#'
  },
  'spark': {
    id: 'spark',
    name: 'Spark',
    tagline: 'Authentic Connections Through Verified Dating',
    description: 'A next-generation dating platform that prioritizes real connections through multi-layer verification and AI-powered compatibility matching.',
    category: 'Social Networking',
    image: '/api/placeholder/300/300?text=Spark',
    gradient: 'bg-gradient-to-r from-pink-600 to-rose-700',
    highlights: [
      { icon: '✅', title: 'Verified Profiles' },
      { icon: '💞', title: 'Smart Matching' },
      { icon: '🎥', title: 'Video Dating' },
      { icon: '🔒', title: 'Privacy Control' }
    ],
    features: [
      {
        title: "Identity Verification",
        description: "Three-step authentication process",
        icon: "🆔"
      },
      {
        title: "AI Compatibility",
        description: "Matches based on personality and values",
        icon: "🧠"
      },
      {
        title: "Video Profiles",
        description: "30-second video introductions",
        icon: "🎬"
      },
      {
        title: "Interest Groups",
        description: "Connect over shared passions",
        icon: "🎯"
      },
      {
        title: "Safety Features",
        description: "Real-time content moderation",
        icon: "🛡️"
      },
      {
        title: "Premium Experience",
        description: "Ad-free with exclusive features",
        icon: "✨"
      }
    ],
    stats: [
      { value: '1M+', label: 'Users' },
      { value: '4.8★', label: 'Rating' },
      { value: '90%', label: 'Verified' },
      { value: '2.1M', label: 'Matches' }
    ],
    screenshots: [
      '/api/placeholder/600/1200?text=Spark+Matches',
      '/api/placeholder/600/1200?text=Spark+Profile',
      '/api/placeholder/600/1200?text=Spark+Chat',
      '/api/placeholder/600/1200?text=Spark+Discovery'
    ],
    demoVideo: '#'
  }
};

// This would normally come from getStaticProps or getServerSideProps
ProductDetails.getInitialProps = ({ query }) => {
  const productSlug = query.slug || 'lifeline-card';
  return { product: sampleProducts[productSlug] || sampleProducts['lifeline-card'] };
};

export default ProductDetails;