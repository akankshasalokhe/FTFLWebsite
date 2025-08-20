// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import Head from 'next/head';

// const products = {
//   'fetch-true': {
//     id: 'fetch-true',
//     name: 'Fetch True',
//     tagline: 'The Complete Franchise Management Solution',
//     description: 'An all-in-one platform revolutionizing franchise operations with AI-powered analytics, automated workflows, and real-time business intelligence.',
//     category: 'Enterprise Software',
//     highlights: [
//       { icon: '🚀', title: 'Rapid Deployment', text: 'Get your franchise network operational in under 24 hours' },
//       { icon: '📈', title: 'Smart Analytics', text: 'Predictive insights with 95% accuracy' },
//       { icon: '🤖', title: 'Process Automation', text: 'Reduce manual work by 80%' },
//       { icon: '🔐', title: 'Bank-Grade Security', text: 'End-to-end encrypted data protection' }
//     ],
//     features: [
//       {
//         title: "AI Dashboard",
//         description: "Real-time performance metrics across all locations",
//         icon: "📊"
//       },
//       {
//         title: "Automated Scheduling",
//         description: "Smart resource allocation based on demand forecasting",
//         icon: "⏱️"
//       },
//       {
//         title: "Unified Communications",
//         description: "Seamless team collaboration across locations",
//         icon: "💬"
//       },
//       {
//         title: "Inventory Management",
//         description: "Automated stock tracking with reorder alerts",
//         icon: "📦"
//       },
//       {
//         title: "Customer CRM",
//         description: "360° view of customer interactions",
//         icon: "👥"
//       },
//       {
//         title: "Compliance Tracking",
//         description: "Automated regulatory requirement monitoring",
//         icon: "✅"
//       }
//     ],
//     screenshots: [
//       '/api/placeholder/400/800?text=Fetch+Dashboard',
//       '/api/placeholder/400/800?text=Fetch+Analytics',
//       '/api/placeholder/400/800?text=Fetch+Mobile'
//     ],
//     stats: [
//       { value: '10K+', label: 'Franchises' },
//       { value: '95%', label: 'Efficiency Gain' },
//       { value: '4.9★', label: 'Rating' }
//     ],
//     testimonials: [
//       {
//         quote: "Fetch True transformed our 50-location franchise operation. We've seen a 40% increase in profitability since implementation.",
//         author: "Sarah Chen",
//         role: "COO, FoodChain Inc.",
//         rating: 5
//       },
//       {
//         quote: "The automation features saved us over 200 admin hours per month. Game-changing technology for franchise businesses.",
//         author: "Michael Rodriguez",
//         role: "Franchise Owner",
//         rating: 5
//       }
//     ],
//     pricing: {
//       plans: [
//         {
//           name: "Starter",
//           price: "$99/month",
//           features: ["Up to 3 locations", "Basic analytics", "Email support"],
//           cta: "Start Free Trial"
//         },
//         {
//           name: "Professional",
//           price: "$299/month",
//           features: ["Up to 10 locations", "Advanced analytics", "Priority support"],
//           cta: "Most Popular",
//           highlighted: true
//         },
//         {
//           name: "Enterprise",
//           price: "Custom",
//           features: ["Unlimited locations", "AI forecasting", "Dedicated account manager"],
//           cta: "Contact Sales"
//         }
//       ]
//     },
//     appStoreLink: '#',
//     playStoreLink: '#',
//     demoVideo: '#',
//     color: '#4F46E5',
//     gradient: 'bg-gradient-to-r from-indigo-500 to-indigo-700'
//   },
//   'spark': {
//     id: 'spark',
//     name: 'Spark',
//     tagline: 'Authentic Connections Through Verified Dating',
//     description: 'A next-generation dating platform that prioritizes real connections through multi-layer verification and AI-powered compatibility matching.',
//     category: 'Social Networking',
//     highlights: [
//       { icon: '✅', title: 'Verified Profiles', text: 'Biometric and social verification' },
//       { icon: '💞', title: 'Smart Matching', text: 'Compatibility scoring based on 50+ factors' },
//       { icon: '🎥', title: 'Video Dating', text: 'Built-in HD video with virtual backgrounds' },
//       { icon: '🔒', title: 'Privacy Control', text: 'Granular privacy settings' }
//     ],
//     features: [
//       {
//         title: "Identity Verification",
//         description: "Three-step authentication process",
//         icon: "🆔"
//       },
//       {
//         title: "AI Compatibility",
//         description: "Matches based on personality and values",
//         icon: "🧠"
//       },
//       {
//         title: "Video Profiles",
//         description: "30-second video introductions",
//         icon: "🎬"
//       },
//       {
//         title: "Interest Groups",
//         description: "Connect over shared passions",
//         icon: "🎯"
//       },
//       {
//         title: "Safety Features",
//         description: "Real-time content moderation",
//         icon: "🛡️"
//       },
//       {
//         title: "Premium Experience",
//         description: "Ad-free with exclusive features",
//         icon: "✨"
//       }
//     ],
//     screenshots: [
//       '/api/placeholder/400/800?text=Spark+Matches',
//       '/api/placeholder/400/800?text=Spark+Profile',
//       '/api/placeholder/400/800?text=Spark+Chat'
//     ],
//     stats: [
//       { value: '1M+', label: 'Users' },
//       { value: '4.8★', label: 'Rating' },
//       { value: '90%', label: 'Verified' }
//     ],
//     testimonials: [
//       {
//         quote: "I met my partner on Spark after just two weeks. The verification system made me feel safe and the matching was spot-on.",
//         author: "Priya Patel",
//         role: "Spark User",
//         rating: 5
//       },
//       {
//         quote: "As a woman dating online, Spark's verification system gives me peace of mind I haven't found on other apps.",
//         author: "Jessica Lin",
//         role: "Spark User",
//         rating: 4
//       }
//     ],
//     pricing: {
//       plans: [
//         {
//           name: "Free",
//           price: "$0",
//           features: ["Basic matching", "Limited messages", "Ad-supported"],
//           cta: "Get Started"
//         },
//         {
//           name: "Premium",
//           price: "$19.99/month",
//           features: ["Unlimited likes", "Video calls", "Ad-free experience"],
//           cta: "Most Popular",
//           highlighted: true
//         },
//         {
//           name: "VIP",
//           price: "$49.99/month",
//           features: ["Priority matching", "Profile boost", "Exclusive events"],
//           cta: "Upgrade Now"
//         }
//       ]
//     },
//     appStoreLink: '#',
//     playStoreLink: '#',
//     demoVideo: '#',
//     color: '#EC4899',
//     gradient: 'bg-gradient-to-r from-pink-500 to-rose-500'
//   },
//   'lifeline-card': {
//     id: 'lifeline-card',
//     name: 'Lifeline Card',
//     tagline: 'Your Financial Safety Net for Emergencies',
//     description: 'A revolutionary financial product that provides immediate access to funds during emergencies with flexible repayment options and zero hidden fees.',
//     category: 'Financial Technology',
//     highlights: [
//       { icon: '⚡', title: 'Instant Approval', text: 'Get approved in minutes, not days' },
//       { icon: '🔒', title: 'No Hidden Fees', text: 'Transparent pricing with no surprises' },
//       { icon: '🌎', title: 'Global Access', text: 'Use anywhere in the world' },
//       { icon: '📱', title: 'Mobile Management', text: 'Complete control from your phone' }
//     ],
//     features: [
//       {
//         title: "Emergency Funding",
//         description: "Access to funds within minutes of approval",
//         icon: "💳"
//       },
//       {
//         title: "Flexible Repayment",
//         description: "Choose repayment terms that work for you",
//         icon: "📅"
//       },
//       {
//         title: "Credit Building",
//         description: "Reported to major credit bureaus",
//         icon: "📊"
//       },
//       {
//         title: "Zero Interest",
//         description: "No interest if repaid within 30 days",
//         icon: "🎯"
//       },
//       {
//         title: "Mobile App",
//         description: "Manage your account on the go",
//         icon: "📱"
//       },
//       {
//         title: "24/7 Support",
//         description: "Always available customer service",
//         icon: "👥"
//       }
//     ],
//     screenshots: [
//       '/api/placeholder/400/800?text=Lifeline+Dashboard',
//       '/api/placeholder/400/800?text=Lifeline+Card',
//       '/api/placeholder/400/800?text=Lifeline+Mobile'
//     ],
//     stats: [
//       { value: '500K+', label: 'Users' },
//       { value: '$0', label: 'Hidden Fees' },
//       { value: '4.7★', label: 'Rating' }
//     ],
//     testimonials: [
//       {
//         quote: "The Lifeline Card saved me during a medical emergency. I had funds in my account within 10 minutes of applying.",
//         author: "James Wilson",
//         role: "Lifeline User",
//         rating: 5
//       },
//       {
//         quote: "Finally a financial product that's transparent and actually helps in emergencies without burying you in debt.",
//         author: "Maria Garcia",
//         role: "Lifeline User",
//         rating: 5
//       }
//     ],
//     pricing: {
//       plans: [
//         {
//           name: "Basic",
//           price: "$0/month",
//           features: ["Up to $1,000 limit", "Standard processing", "Email support"],
//           cta: "Apply Now"
//         },
//         {
//           name: "Plus",
//           price: "$9.99/month",
//           features: ["Up to $5,000 limit", "Express funding", "Priority support"],
//           cta: "Most Popular",
//           highlighted: true
//         },
//         {
//           name: "Premium",
//           price: "$19.99/month",
//           features: ["Up to $15,000 limit", "Instant funding", "24/7 dedicated support"],
//           cta: "Apply Now"
//         }
//       ]
//     },
//     appStoreLink: '#',
//     playStoreLink: '#',
//     demoVideo: '#',
//     color: '#10B981',
//     gradient: 'bg-gradient-to-r from-emerald-500 to-green-600'
//   }
// };

// export default function ProductDetails() {
//   const router = useRouter();
//   const { slug } = router.query;
//   const [activeTab, setActiveTab] = useState('overview');
//   const [activeImage, setActiveImage] = useState(0);
//   const [videoPlaying, setVideoPlaying] = useState(false);

//   if (!slug || !products[slug]) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50">
//         <div className="text-center p-8 max-w-md">
//           <h1 className="text-5xl font-bold text-gray-800 mb-6">404</h1>
//           <p className="text-xl text-gray-600 mb-8">We couldn't find that product</p>
//           <button 
//             onClick={() => router.push('/products')}
//             className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md"
//           >
//             Browse Products
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const product = products[slug];

//   return (
//     <div className="bg-white">
//       <Head>
//         <title>{product.name} - {product.tagline}</title>
//         <meta name="description" content={product.description} />
//       </Head>

//       {/* Floating App Badges - Fixed at bottom right */}
//       <div className="fixed bottom-6 right-6 z-50 space-y-3 hidden md:block">
//         <motion.a 
//           href={product.playStoreLink}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="block shadow-xl rounded-lg overflow-hidden"
//         >
//           <div className="h-14 w-40 bg-black text-white flex items-center justify-center rounded">
//             <span className="text-sm font-medium">GET IT ON</span>
//             <span className="text-xl font-bold ml-1">Google Play</span>
//           </div>
//         </motion.a>
//         <motion.a 
//           href={product.appStoreLink}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="block shadow-xl rounded-lg overflow-hidden"
//         >
//           <div className="h-14 w-40 bg-black text-white flex items-center justify-center rounded">
//             <span className="text-xl font-bold">App Store</span>
//           </div>
//         </motion.a>
//       </div>

//       {/* Hero Section */}
//       <div className={`${product.gradient} pt-28 pb-16 md:pb-24 relative overflow-hidden`}>
//         {/* Floating background elements */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/30 blur-3xl"></div>
//           <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-white/20 blur-3xl"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             {/* Text Content */}
//             <div className="md:w-1/2">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="mb-8"
//               >
//                 <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-6">
//                   {product.category}
//                 </span>
                
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
//                   {product.name}
//                 </h1>
                
//                 <p className="text-xl md:text-2xl text-white/90 mb-6">
//                   {product.tagline}
//                 </p>
                
//                 <p className="text-white/80 mb-8 max-w-lg">
//                   {product.description}
//                 </p>
                
//                 <div className="flex flex-wrap gap-4">
//                   <motion.button
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                     className="px-8 py-3.5 bg-white text-gray-900 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
//                   >
//                     Get Started
//                   </motion.button>
//                   {product.demoVideo && (
//                     <motion.button
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.97 }}
//                       onClick={() => setVideoPlaying(true)}
//                       className="px-8 py-3.5 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2"
//                     >
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                       Watch Demo
//                     </motion.button>
//                   )}
//                 </div>
//               </motion.div>
              
//               {/* Stats */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="flex flex-wrap gap-6 mt-10"
//               >
//                 {product.stats.map((stat, index) => (
//                   <div key={index} className="text-center">
//                     <p className="text-3xl font-bold text-white">{stat.value}</p>
//                     <p className="text-sm text-white/80">{stat.label}</p>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
            
//             {/* App Preview */}
//             <motion.div 
//               className="md:w-1/2 relative"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <div className="relative w-full aspect-[9/16] max-w-md mx-auto">
//                 <div className="absolute inset-0 bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-900">
//                   <img
//                     src={product.screenshots[0]}
//                     alt={`${product.name} app interface`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Video Modal */}
//       <AnimatePresence>
//         {videoPlaying && (
//           <motion.div 
//             className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setVideoPlaying(false)}
//           >
//             <motion.div 
//               className="relative w-full max-w-4xl"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//               onClick={e => e.stopPropagation()}
//             >
//               <button 
//                 className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
//                 onClick={() => setVideoPlaying(false)}
//               >
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//               <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
//                 <div className="w-full h-full flex items-center justify-center bg-gray-800">
//                   <div className="text-white text-center">
//                     <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <p className="text-xl font-medium">Product Demo Video</p>
//                     <p className="text-gray-400 mt-2">Would play here in a real implementation</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Highlights Section */}
//       <div className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose {product.name}?</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">Key benefits that set us apart from the competition</p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {product.highlights.map((highlight, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
//               >
//                 <div className="text-4xl mb-4">{highlight.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
//                 <p className="text-gray-600">{highlight.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Left Column - Main Content */}
//           <div className="lg:w-2/3">
//             {/* Navigation Tabs */}
//             <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
//               {['overview', 'features', 'screenshots', 'testimonials', 'pricing'].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </div>

//             {/* Tab Content */}
//             <div className="space-y-12">
//               {/* Overview Tab */}
//               {activeTab === 'overview' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.4 }}
//                   className="space-y-8"
//                 >
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">About {product.name}</h3>
//                     <div className="prose max-w-none text-gray-600">
//                       <p>
//                         {product.description} Our platform is designed to deliver exceptional value through innovative technology and user-centric design.
//                       </p>
//                       <p>
//                         Whether you're a small business owner or part of a large enterprise, {product.name} provides the tools you need to succeed in today's competitive landscape.
//                       </p>
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {product.features.slice(0, 4).map((feature, index) => (
//                         <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
//                           <span className="text-2xl mr-4">{feature.icon}</span>
//                           <div>
//                             <h4 className="font-bold text-gray-900">{feature.title}</h4>
//                             <p className="text-gray-600">{feature.description}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {product.demoVideo && (
//                     <div className="rounded-xl overflow-hidden bg-gray-100 border border-gray-200 aspect-w-16 aspect-h-9 cursor-pointer" onClick={() => setVideoPlaying(true)}>
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
//                           <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M8 5v14l11-7z" />
//                           </svg>
//                         </div>
//                       </div>
//                       <div className="w-full h-full bg-gray-800 flex items-center justify-center">
//                         <p className="text-white font-medium">Click to play product demo</p>
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               )}

//               {/* Features Tab */}
//               {activeTab === 'features' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.4 }}
//                   className="space-y-8"
//                 >
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Feature Set</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {product.features.map((feature, index) => (
//                       <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
//                         <div className={`p-3 rounded-lg ${product.gradient} mr-4 flex-shrink-0`}>
//                           <span className="text-xl text-white">{feature.icon}</span>
//                         </div>
//                         <div>
//                           <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
//                           <p className="text-gray-600">{feature.description}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}

//               {/* Screenshots Tab */}
//               {activeTab === 'screenshots' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.4 }}
//                   className="space-y-8"
//                 >
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">App Screenshots</h3>
//                   <div className="relative h-96 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
//                     <img
//                       src={product.screenshots[activeImage]}
//                       alt={`${product.name} screenshot ${activeImage + 1}`}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                   <div className="grid grid-cols-3 gap-4">
//                     {product.screenshots.map((screenshot, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setActiveImage(index)}
//                         className={`relative h-32 rounded-lg overflow-hidden border-2 transition-all ${activeImage === index ? 'border-indigo-500' : 'border-gray-200 hover:border-gray-300'}`}
//                       >
//                         <img
//                           src={screenshot}
//                           alt={`Screenshot ${index + 1}`}
//                           className="w-full h-full object-cover"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}

//               {/* Testimonials Tab */}
//               {activeTab === 'testimonials' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.4 }}
//                   className="space-y-8"
//                 >
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">What Our Users Say</h3>
//                   <div className="space-y-6">
//                     {product.testimonials.map((testimonial, index) => (
//                       <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//                         <div className="flex items-center mb-4">
//                           {[...Array(5)].map((_, i) => (
//                             <svg 
//                               key={i} 
//                               className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
//                               fill="currentColor" 
//                               viewBox="0 0 20 20"
//                             >
//                               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                             </svg>
//                           ))}
//                         </div>
//                         <blockquote className="text-gray-700 mb-6">
//                           "{testimonial.quote}"
//                         </blockquote>
//                         <div className="flex items-center">
//                           <div className="h-10 w-10 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-gray-600 font-bold">
//                             {testimonial.author.charAt(0)}
//                           </div>
//                           <div>
//                             <p className="font-medium text-gray-900">{testimonial.author}</p>
//                             <p className="text-sm text-gray-500">{testimonial.role}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}

//               {/* Pricing Tab */}
//               {activeTab === 'pricing' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.4 }}
//                   className="space-y-8"
//                 >
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {product.pricing.plans.map((plan, index) => (
//                       <motion.div
//                         key={index}
//                         whileHover={{ y: -5 }}
//                         className={`p-6 rounded-xl border-2 ${plan.highlighted ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 bg-white'} relative`}
//                       >
//                         {plan.highlighted && (
//                           <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">
//                             POPULAR
//                           </div>
//                         )}
//                         <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
//                         <p className="text-3xl font-bold mb-4">{plan.price}</p>
//                         <ul className="space-y-3 mb-6">
//                           {plan.features.map((feature, i) => (
//                             <li key={i} className="flex items-start">
//                               <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                               </svg>
//                               <span className="text-gray-600">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                         <button
//                           className={`w-full py-3 rounded-lg font-bold ${plan.highlighted ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
//                         >
//                           {plan.cta}
//                         </button>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           </div>

//           {/* Right Column - Sidebar */}
//           <div className="lg:w-1/3 space-y-6">
//             {/* Quick Facts */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4 }}
//               className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
//             >
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
//               <div className="space-y-4">
//                 <div className="flex justify-between py-3 border-b border-gray-100">
//                   <span className="text-gray-500">Category</span>
//                   <span className="font-medium">{product.category}</span>
//                 </div>
//                 <div className="flex justify-between py-3 border-b border-gray-100">
//                   <span className="text-gray-500">Latest Version</span>
//                   <span className="font-medium">2.4.1</span>
//                 </div>
//                 <div className="flex justify-between py-3 border-b border-gray-100">
//                   <span className="text-gray-500">File Size</span>
//                   <span className="font-medium">28.5 MB</span>
//                 </div>
//                 <div className="flex justify-between py-3 border-b border-gray-100">
//                   <span className="text-gray-500">Downloads</span>
//                   <span className="font-medium">50,000+</span>
//                 </div>
//                 <div className="flex justify-between py-3">
//                   <span className="text-gray-500">Rating</span>
//                   <span className="font-medium">4.9/5</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Download CTA */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.1 }}
//               className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
//             >
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
//               <p className="text-gray-600 mb-6">Join thousands of happy users today</p>
//               <div className="space-y-4">
//                 <a 
//                   href={product.playStoreLink} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="block"
//                 >
//                   <div className="h-14 w-full bg-black text-white flex items-center justify-center rounded">
//                     <span className="text-sm font-medium">GET IT ON</span>
//                     <span className="text-xl font-bold ml-1">Google Play</span>
//                   </div>
//                 </a>
//                 <a 
//                   href={product.appStoreLink} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="block"
//                 >
//                   <div className="h-14 w-full bg-black text-white flex items-center justify-center rounded">
//                     <span className="text-xl font-bold">App Store</span>
//                   </div>
//                 </a>
//               </div>
//             </motion.div>

//             {/* Contact Card */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.2 }}
//               className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
//             >
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
//               <p className="text-gray-600 mb-6">Our support team is here to answer your questions</p>
//               <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 Contact Support
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Final CTA */}
//       <div className={`${product.gradient} py-16`}>
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl font-bold text-white mb-6"
//           >
//             Ready to experience {product.name}?
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
//           >
//             Join thousands of satisfied users and transform your experience today
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             <motion.a
//               href={product.playStoreLink}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-block"
//             >
//               <div className="h-14 w-40 bg-black text-white flex items-center justify-center rounded shadow-lg">
//                 <span className="text-sm font-medium">GET IT ON</span>
//                 <span className="text-xl font-bold ml-1">Google Play</span>
//               </div>
//             </motion.a>
//             <motion.a
//               href={product.appStoreLink}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-block"
//             >
//               <div className="h-14 w-40 bg-black text-white flex items-center justify-center rounded shadow-lg">
//                 <span className="text-xl font-bold">App Store</span>
//               </div>
//             </motion.a>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   const paths = Object.keys(products).map((slug) => ({
//     params: { slug }
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   return {
//     props: {
//       product: products[params.slug] || null
//     }
//   };
// }