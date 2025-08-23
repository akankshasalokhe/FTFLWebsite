// pages/products/[slug].jsx
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { useState, useEffect } from "react";

const PRODUCTS = [
  {
    title: "Dating App",
    slug: "dating-app",
    type: "App",
    color: "#FF6B6B",
    accentColor: "#FF3B3B",
    subtitle: "Find meaningful connections",
    description:
      "A modern dating app that uses AI to match you with compatible partners based on interests, values, and lifestyle preferences.",
    tags: ["React Native", "Firebase", "Socket.IO"],
    images: [101, 102, 103, 104],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    keyFeatures: [
      {
        title: "AI Matching",
        description: "Advanced algorithm finds perfect matches based on your preferences",
        icon: "🤖"
      },
      {
        title: "Secure Chat",
        description: "End-to-end encrypted messaging for private conversations",
        icon: "🔒"
      },
      {
        title: "Video Profiles",
        description: "Showcase your personality with short video introductions",
        icon: "🎥"
      },
      {
        title: "Interest-Based Groups",
        description: "Join communities of people who share your hobbies and interests",
        icon: "👥"
      }
    ],
    overview: {
      usage: "Connect with like-minded individuals, build meaningful relationships, and find your perfect match through our intelligent matching system.",
      info: "Our dating app prioritizes authenticity and safety, with verified profiles and advanced moderation systems to ensure a positive experience for all users.",
      work: "Simply create a profile, set your preferences, and let our AI suggest compatible matches. You can chat, share interests, and plan dates all within the app."
    },
    technicalInfo: {
      frontend: "React Native",
      backend: "Node.js, Express",
      database: "Firebase",
    },
    downloadLinks: {
      playStore: "#",
      appStore: "#",
      web: "#"
    },
    salesContact: {
      email: "sales@datingapp.com",
      phone: "+1 (555) 123-4567"
    },
    faqs: [
      {
        question: "How does the AI matching work?",
        answer: "Our AI analyzes your profile, preferences, and behavior to suggest highly compatible matches with similar interests and values."
      },
      {
        question: "Is my data secure?",
        answer: "Yes, we use end-to-end encryption and never share your personal information with third parties without your consent."
      },
      {
        question: "Can I use the app for free?",
        answer: "We offer a free tier with basic features, and a premium subscription with advanced matching and communication features."
      },
      {
        question: "How do I delete my account?",
        answer: "You can delete your account anytime in the settings menu. All your data will be permanently removed from our systems."
      }
    ]
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    type: "Web",
    color: "#4ECDC4",
    accentColor: "#2BB8AF",
    subtitle: "Showcase your work elegantly",
    description:
      "A responsive portfolio website template designed to highlight your projects with beautiful galleries and smooth animations.",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    images: [201, 202, 203],
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
    keyFeatures: [
      {
        title: "Responsive Design",
        description: "Looks great on all devices from mobile to desktop",
        icon: "📱"
      },
      {
        title: "Project Galleries",
        description: "Showcase your work with beautiful image and video galleries",
        icon: "🖼️"
      },
      {
        title: "Contact Forms",
        description: "Integrated contact forms to receive messages from potential clients",
        icon: "📧"
      },
      {
        title: "SEO Optimized",
        description: "Built with search engine optimization best practices",
        icon: "🔍"
      }
    ],
    overview: {
      usage: "Perfect for designers, developers, artists, and professionals who want to showcase their work and attract new clients or employers.",
      info: "This portfolio template is built with modern web technologies and follows best practices for performance, accessibility, and user experience.",
      work: "Simply customize the template with your information, add your projects to the portfolio section, and deploy to your preferred hosting platform."
    },
    technicalInfo: {
      frontend: "Next.js",
      backend: "Node.js",
      database: "MongoDB",
    },
    downloadLinks: {
      web: "#"
    },
    salesContact: {
      email: "info@portfoliotemplate.com",
      phone: "+1 (555) 987-6543"
    },
    faqs: [
      {
        question: "Do I need coding knowledge to use this template?",
        answer: "Basic HTML/CSS knowledge is helpful but not required. We provide detailed documentation to help you customize the template."
      },
      {
        question: "Can I use this for commercial projects?",
        answer: "Yes, you can use this template for personal and commercial projects without any restrictions."
      },
      {
        question: "Is hosting included?",
        answer: "Hosting is not included, but we provide guides for popular hosting platforms like Vercel, Netlify, and AWS."
      },
      {
        question: "How often is the template updated?",
        answer: "We regularly update our templates to ensure compatibility with the latest web standards and technologies."
      }
    ]
  },
];

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const product = PRODUCTS.find((p) => p.slug === slug);
  
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        <div className="animate-pulse text-xl">Loading or Product not found...</div>
      </div>
    );
  }

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>{product.title} — Product Details</title>
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes shimmer {
            0% { background-position: -200px 0; }
            100% { background-position: calc(200px + 100%) 0; }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          
          .animate-slideInRight {
            animation: slideInRight 0.5s ease-out forwards;
          }
          
          .animate-scaleIn {
            animation: scaleIn 0.4s ease-out forwards;
          }
          
          .shimmer {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.6) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            background-size: 200px 100%;
            animation: shimmer 1.5s infinite;
          }
          
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          }
          
          .gradient-border {
            position: relative;
            border-radius: 1rem;
          }
          
          .gradient-border::before {
            content: "";
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, ${product.color}, ${product.accentColor});
            border-radius: 1.1rem;
            z-index: -1;
            opacity: 0.7;
          }
          
          .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          
          .faq-answer.open {
            max-height: 500px;
          }
        `}</style>
      </Head>

      {/* Header */}
      <header className="p-4 shadow bg-white flex items-center justify-between sticky top-0 z-50 animate-fadeIn">
        <Link href="/">
          <span className="text-lg font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Products
          </span>
        </Link>
        <h1 className="text-xl font-semibold text-transparent bg-clip-text" style={{backgroundImage: `linear-gradient(45deg, ${product.color}, ${product.accentColor})`}}>
          {product.title}
        </h1>
      </header>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading {product.title}...</p>
          </div>
        </div>
      )}

      {/* Hero Section: Slider */}
      <section className="max-w-6xl mx-auto p-6 animate-fadeIn" style={{animationDelay: "0.2s"}}>
        <div className="gradient-border">
          <Swiper
            modules={[Autoplay, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="rounded-2xl overflow-hidden shadow-lg border-2 border-white"
          >
            {product.images.map((id, index) => (
              <SwiperSlide key={id}>
                <div className={`w-full h-80 md:h-96 bg-gray-200 rounded-2xl overflow-hidden ${isLoading ? 'shimmer' : ''}`}>
                  {!isLoading && (
                    <img
                      src={`https://picsum.photos/seed/${id}/800/450`}
                      alt={`${product.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnails */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={Math.min(product.images.length, 5)}
          freeMode={true}
          watchSlidesProgress
          className="mt-4 animate-fadeIn"
          style={{animationDelay: "0.4s"}}
        >
          {product.images.map((id) => (
            <SwiperSlide key={id} className="cursor-pointer">
              <div className="rounded-lg overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-indigo-500 hover:scale-105">
                <img
                  src={`https://picsum.photos/seed/${id}/120/70`}
                  alt="Thumbnail"
                  className="w-full h-14 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Video Button */}
        <div className="flex justify-center mt-6 animate-fadeIn" style={{animationDelay: "0.6s"}}>
          <a
            href={product.video}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-white transition-all duration-300 hover-lift flex items-center gap-2"
            style={{background: `linear-gradient(45deg, ${product.color}, ${product.accentColor})`}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch Demo Video
          </a>
        </div>
      </section>

      {/* Key Features with Icons */}
      <section className="max-w-7xl mx-auto p-6 animate-fadeInUp" style={{animationDelay: "0.4s"}}>
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.keyFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover-lift transition-all duration-300 flex flex-col items-center text-center"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8 animate-fadeInUp" style={{animationDelay: "0.5s"}}>
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl" 
                 style={{background: `linear-gradient(45deg, ${product.color}, ${product.accentColor})`}}>
              💡
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Use of this App</h3>
            <p className="text-gray-600">{product.overview.usage}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl" 
                 style={{background: `linear-gradient(45deg, ${product.color}, ${product.accentColor})`}}>
              ℹ️
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">App Information</h3>
            <p className="text-gray-600">{product.overview.info}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl" 
                 style={{background: `linear-gradient(45deg, ${product.color}, ${product.accentColor})`}}>
              ⚙️
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How It Works</h3>
            <p className="text-gray-600">{product.overview.work}</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="max-w-7xl mx-auto p-6 mt-8 animate-fadeInUp" style={{animationDelay: "0.6s"}}>
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Download Now</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {product.downloadLinks.playStore && (
            <a
              href={product.downloadLinks.playStore}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-800 text-white rounded-xl hover-lift transition-all duration-300 w-full sm:w-auto"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm10.781 10.186l-2.522 2.521 7.874 7.875c.138.137.302.25.486.333l-5.838-10.729zM12 13.208l-9.186 9.187a.995.995 0 0 1-.92.61h18.734a1 1 0 0 1 .92-.61L12 13.208zM5.67 3.331L12 10.792l2.522-2.521-7.875-7.875a1.001 1.001 0 0 0-.486.333z"/>
              </svg>
              <div>
                <div className="text-xs">GET IT ON</div>
                <div className="text-xl font-bold">Google Play</div>
              </div>
            </a>
          )}
          
          {product.downloadLinks.appStore && (
            <a
              href={product.downloadLinks.appStore}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-800 text-white rounded-xl hover-lift transition-all duration-300 w-full sm:w-auto"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 12.04C17.03 9.53 19.18 8.05 19.25 8C17.95 6.06 15.87 5.85 15.1 5.83C13.55 5.66 12.06 6.84 11.24 6.84C10.4 6.84 9.14 5.86 7.81 5.88C6.06 5.9 4.48 6.83 3.62 8.4C1.8 11.45 3.06 16.13 4.79 18.58C5.62 19.75 6.62 21.05 7.87 20.98C9.08 20.91 9.57 20.14 11.04 20.14C12.49 20.14 12.96 20.98 14.22 20.95C15.52 20.91 16.39 19.75 17.2 18.58C18.16 17.25 18.56 15.96 18.58 15.9C18.53 15.88 15.95 14.75 15.99 11.74L17.05 12.04ZM15.3 4.1C15.95 3.3 16.41 2.16 16.25 1C15.25 1.05 14.07 1.66 13.38 2.46C12.78 3.16 12.21 4.33 12.4 5.45C13.5 5.55 14.6 4.95 15.3 4.1Z"/>
              </svg>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
            </a>
          )}
          
          {product.downloadLinks.web && (
            <a
              href={product.downloadLinks.web}
              className="flex items-center justify-center gap-3 px-6 py-4 text-white rounded-xl hover-lift transition-all duration-300 w-full sm:w-auto"
              style={{background: `linear-gradient(45deg, ${product.color}, ${product.accentColor})`}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              <div className="text-xl font-bold">Visit Website</div>
            </a>
          )}
        </div>
      </section>

      {/* Sales Contact Section */}
      <section className="max-w-7xl mx-auto p-6 mt-8 bg-white rounded-xl shadow-md animate-fadeInUp" style={{animationDelay: "0.7s"}}>
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Sales Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center p-6 rounded-xl bg-gray-50 hover-lift transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl" 
                 style={{background: `linear-gradient(45deg, ${product.color}, ${product.accentColor})`}}>
              ✉️
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Email Us</h3>
            <a href={`mailto:${product.salesContact.email}`} className="text-lg text-indigo-600 hover:text-indigo-800 transition-colors">
              {product.salesContact.email}
            </a>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gray-50 hover-lift transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl" 
                 style={{background: `linear-gradient(45deg, ${product.color}, ${product.accentColor})`}}>
              📞
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Call Us</h3>
            <a href={`tel:${product.salesContact.phone}`} className="text-lg text-indigo-600 hover:text-indigo-800 transition-colors">
              {product.salesContact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto p-6 mt-8 animate-fadeInUp" style={{animationDelay: "0.8s"}}>
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {product.faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover-lift"
            >
              <button 
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${activeFAQ === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div className={`faq-answer ${activeFAQ === index ? 'open' : ''}`}>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto p-6 mt-12 text-center text-gray-500 border-t pt-6 animate-fadeIn" style={{animationDelay: "0.9s"}}>
        <p>© {new Date().getFullYear()} {product.title}. All rights reserved.</p>
      </footer>
    </div>
  );
}