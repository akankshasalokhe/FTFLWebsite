import { useState } from 'react';
import Head from 'next/head';

export default function ProductDetail() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  // Sample product data
  const product = {
    title: "Dating App",
    type: "Mobile Application",
    color: "#FF6B6B",
    description: "A modern dating app that uses AI to match you with compatible partners based on interests, values, and lifestyle preferences.",
    overview: "Our Dating App revolutionizes how people connect in the digital age. Using advanced machine learning algorithms, we analyze user behavior, preferences, and interaction patterns to create meaningful matches that have a higher chance of developing into real relationships.",
    keyFeatures: [
      {
        title: "AI Matching",
        description: "Our advanced algorithm analyzes hundreds of data points to find your most compatible matches based on interests, values, and behavior patterns.",
        icon: "🤖"
      },
      {
        title: "Secure Chat",
        description: "End-to-end encrypted messaging ensures your conversations remain private and secure from unauthorized access.",
        icon: "🔒"
      },
      {
        title: "Video Profiles",
        description: "Showcase your personality with video profiles that help you make a stronger impression than photos alone.",
        icon: "🎥"
      },
      {
        title: "Interest-Based Groups",
        description: "Join communities of like-minded people who share your hobbies, passions, and interests.",
        icon: "👥"
      }
    ],
    technicalDetails: [
      "Built with React Native for cross-platform compatibility",
      "Firebase for real-time data synchronization",
      "Socket.IO for seamless messaging",
      "AWS Rekognition for photo verification and safety features",
      "256-bit encryption for all user data",
      "99.9% uptime guarantee"
    ],
    screenshots: [
      { id: 1, alt: "Home Screen" },
      { id: 2, alt: "Matching Interface" },
      { id: 3, alt: "Chat Screen" },
      { id: 4, alt: "Profile Editor" },
      { id: 5, alt: "Settings Screen" }
    ],
    stats: [
      { value: "1M+", label: "Active Users" },
      { value: "4.8", label: "App Store Rating" },
      { value: "95%", label: "Match Satisfaction" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>{product.title} | Product Details</title>
        <meta name="description" content={product.description} />
      </Head>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </a>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: `${product.color}20`, color: product.color }}>
            {product.type}
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-3xl blur-xl opacity-50"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 p-8">
                <div className="flex justify-center">
                  <div className="w-64 h-[500px] bg-gray-800 rounded-[2.5rem] p-3 shadow-2xl border-8 border-gray-900">
                    <div className="relative h-full overflow-hidden rounded-2xl bg-gray-900">
                      <img 
                        src={`https://picsum.photos/seed/${product.screenshots[activeScreenshot].id}/300/600`} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                        {product.screenshots.map((_, index) => (
                          <button 
                            key={index}
                            onClick={() => setActiveScreenshot(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === activeScreenshot ? 'bg-white scale-125' : 'bg-white/60'}`}
                          ></button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">{product.title}</h1>
              <p className="text-xl text-gray-600 mb-6 font-medium">{product.description}</p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {product.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-2xl bg-white shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-gray-900" style={{ color: product.color }}>{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#" className="flex items-center justify-center px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z"/>
                  </svg>
                  App Store
                </a>
                <a href="#" className="flex items-center justify-center px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.78 10.82l2.32 2.32c.283-.944.49-1.93.49-2.934 0-1.005-.207-1.99-.49-2.934l-2.32 2.32a6.6 6.6 0 0 1 0 2.128zm-2.94 2.128l-9.23 9.23a.998.998 0 0 1-1.09.22A10.87 10.87 0 0 1 0 12c0-2.734.97-5.24 2.59-7.17a.998.998 0 0 1 1.09-.22l9.23 9.23a6.6 6.6 0 0 1 0 2.128zm2.94-4.256l2.32-2.32c.283.944.49 1.93.49 2.934 0 1.005-.207 1.99-.49 2.934l-2.32-2.32a6.6 6.6 0 0 1 0-2.128z"/>
                  </svg>
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">App Overview</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">{product.overview}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Create Your Profile</h4>
                    <p className="text-gray-600">Share your interests, values, and what you're looking for in a partner.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Get AI-Powered Matches</h4>
                    <p className="text-gray-600">Our algorithm suggests compatible partners based on your preferences.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Start Meaningful Conversations</h4>
                    <p className="text-gray-600">Connect with your matches through our secure messaging platform.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Fast & Easy Setup</h3>
                    <p className="opacity-90">Get started in minutes and begin your journey to meaningful connections</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Discover what makes our app unique and powerful</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.keyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer ${activeFeature === index ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start mb-6">
                  <span className="text-3xl mr-4">{feature.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">App Screenshots</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Explore the beautiful and intuitive interface of our application</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.screenshots.map((screenshot, index) => (
              <div key={screenshot.id} className="rounded-2xl overflow-hidden shadow-lg border-4 border-white transition-transform hover:scale-105">
                <img 
                  src={`https://picsum.photos/seed/${screenshot.id}/400/800`} 
                  alt={screenshot.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Video Demo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Watch our app in action with this comprehensive demo</p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">App Demo Video</h3>
                <p className="text-gray-300">Click play to see how our app works</p>
                <button className="mt-6 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Play Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Details</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Built with cutting-edge technology for optimal performance</p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Architecture & Infrastructure</h3>
                <ul className="space-y-4">
                  {product.technicalDetails.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Uptime</span>
                      <span className="font-bold" style={{ color: product.color }}>99.9%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="h-2.5 rounded-full" style={{ width: "99.9%", backgroundColor: product.color }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Response Time</span>
                      <span className="font-bold" style={{ color: product.color }}>&lt;100ms</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="h-2.5 rounded-full" style={{ width: "95%", backgroundColor: product.color }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Data Encryption</span>
                      <span className="font-bold" style={{ color: product.color }}>256-bit</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="h-2.5 rounded-full" style={{ width: "100%", backgroundColor: product.color }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to get started?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
            Download our app today and join thousands of satisfied users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="flex items-center justify-center px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z"/>
              </svg>
              Download on App Store
            </a>
            <a href="#" className="flex items-center justify-center px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.78 10.82l2.32 2.32c.283-.944.49-1.93.49-2.934 0-1.005-.207-1.99-.49-2.934l-2.32 2.32a6.6 6.6 0 0 1 0 2.128zm-2.94 2.128l-9.23 9.23a.998.998 0 0 1-1.09.22A10.87 10.87 0 0 1 0 12c0-2.734.97-5.24 2.59-7.17a.998.998 0 0 1 1.09-.22l9.23 9.23a6.6 6.6 0 0 1 0 2.128zm2.94-4.256l2.32-2.32c.283.944.49 1.93.49 2.934 0 1.005-.207 1.99-.49 2.934l-2.32-2.32a6.6 6.6 0 0 1 0-2.128z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// import React from 'react'

// function ProductDetail() {
//   return (
//     <div>
//       <div className='min-h-screen bg-blue-300'>
//         <div className='flex flex-row h-screen'>
          
//           <div className='w-1/2'>
//             <div className='absolute h-130 z-50 w-200 mt-30 ms-5 bg-white p-6 items-center border border-2 border-gray-400 rounded-lg shadow-lg'>
//                 <h3>How It Works</h3>
//                 <ul>
//                   <li><strong>Step 1:</strong> Sign Up for an Account</li>
//                   <li><strong>Step 2:</strong> Verify Your Email Address</li>
//                   <li><strong>Step 3:</strong> Complete Your Profile Setup</li>
//                 </ul>
//                 <ul>
//                   <li>1. Create Your Profile</li>
//                   <li>2. Customize Your Preferences</li>
//                   <li>3. Start Exploring Content</li>
//                 </ul>
//             </div>
//           </div>
//           <div className='w-1/2 flex flex-col  rounded-lg shadow-lg overflow-hidden bg-white'>
//             <div className='h-1/3 bg-gray-300 p-6'>
//                 <h1 className='text-2xl font-bold text-center'>Product Name</h1>
//             </div>
//             <div className='h-full p-5 z-40 bg-white shadow-sky-300 border-2  hover:z-60  '>
//                 <h3>Overview</h3>
//                 <p>This product is designed to help you achieve your goals efficiently and effectively.</p>
//                 <p>With its user-friendly interface and powerful features, you'll be able to streamline your workflow and boost your productivity.</p>
//                 <p>Whether you're working on a personal project or collaborating with a team, this product has the tools you need to succeed.</p>
//                 <p></p>
//                 <h3>Key Features</h3>
//                 <li><strong>Feature 1:</strong> Description of feature 1</li>
//                 <li><strong>Feature 2:</strong> Description of feature 2</li>
//                 <li><strong>Feature 3:</strong> Description of feature 3</li>
//             </div>
//           </div>
          
//         </div>
//       </div>

//       <div className='p-10 bg-white'>
//         <h3>Technical Details</h3>
//         <div className='flex flex-row gap-10 items-center justify-around'>
//             <div>
//                <h4 className='font-bold'>Operating System</h4>
//               <p>Windows, macOS, Linux</p>
//             </div>
//             <div>
//                <h4 className='font-bold'>Version</h4>
//                <p>1.0.0</p>
//             </div>
//             <div>
//                <h4 className='font-bold'>Supported Languages</h4>
//                <p>English, Spanish, French</p>
//             </div>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default ProductDetail