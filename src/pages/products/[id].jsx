import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

// Sample product data
const products = [
  {
    id: 1,
    name: "LifelineCart",
    type: "E-commerce Platform",
    category: "web",
    description: "Lifeline Cart is a cutting-edge e-commerce solution with advanced inventory management, multiple payment gateways, and AI-powered recommendations.",
    image: "/images/ecommerce-platform.jpg",
    themeColor: "from-blue-500 to-blue-300",
    features: ["AI Recommendations", "Secure Payments", "Inventory Management", "Sales Analytics"],
    detailedDescription: "LifelineCart revolutionizes online shopping with its intuitive interface and powerful backend. Our platform handles everything from inventory tracking to customer relationship management, all while providing actionable insights through advanced analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
    additionalImages: [
      "/images/ecommerce-detail-1.jpg",
      "/images/ecommerce-detail-2.jpg",
      "/images/ecommerce-detail-3.jpg"
    ],
    overviewImage: "/images/ecommerce-overview.jpg",
    featuresImage: "/images/ecommerce-features.jpg",
    technologiesImage: "/images/ecommerce-tech.jpg",
    challenges: "Creating a seamless user experience across all devices while maintaining high performance with large product catalogs.",
    solutions: "Implemented lazy loading, optimized image delivery, and used a CDN to ensure fast loading times regardless of device or location.",
    results: "35% increase in conversion rate and 50% reduction in cart abandonment for our clients.",
    mockups: [
      { type: "Desktop", image: "/images/ecommerce-desktop.jpg" },
      { type: "Mobile", image: "/images/ecommerce-mobile.jpg" },
      { type: "Tablet", image: "/images/ecommerce-tablet.jpg" }
    ]
  },
  // Other products would follow the same structure
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the product with the matching ID
  const product = products.find(p => p.id === parseInt(id));

  // If product not found or page is loading
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // Handle next/previous image in slider
  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev === product.additionalImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? product.additionalImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{product.name} - Product Details</title>
        <meta name="description" content={product.description} />
      </Head>

      {/* Header with back button */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <button 
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </button>
        </div>
      </header>

      {/* Image Slider Section */}
      <section className="relative h-96 md:h-[500px] bg-gray-200">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={product.additionalImages[currentImageIndex]}
            alt={`${product.name} - Image ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300"
          />
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Image indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {product.additionalImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Product Info Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Product Header */}
          <div className={`p-8 mb-12 rounded-2xl bg-gradient-to-r ${product.themeColor} text-white`}>
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
                <p className="text-lg opacity-90">{product.type}</p>
              </div>
              <span className={`inline-block mt-4 sm:mt-0 px-4 py-2 text-sm font-semibold rounded-full ${
                product.category === "mobile" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-blue-100 text-blue-800"
              }`}>
                {product.category === "mobile" ? "Mobile App" : "Web App"}
              </span>
            </div>
          </div>
          
          {/* Overview Section with Image */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{product.detailedDescription}</p>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition">
                    Live Demo
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition">
                    View Case Study
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 relative h-80 md:h-auto">
                <Image
                  src={product.overviewImage}
                  alt={`${product.name} Overview`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          
          {/* Key Features Section with Image */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`bg-gradient-to-r ${product.themeColor} rounded-full p-2 mr-4`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 relative h-80 md:h-auto">
                <Image
                  src={product.featuresImage}
                  alt={`${product.name} Features`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          
          {/* Technologies Section with Image */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-3 mb-6">
                  {product.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">We leverage cutting-edge technologies to deliver high-performance, scalable solutions tailored to your business needs.</p>
              </div>
              <div className="md:w-1/2 relative h-80 md:h-auto">
                <Image
                  src={product.technologiesImage}
                  alt={`${product.name} Technologies`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          
          {/* Challenge & Solution Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Project Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-red-600">Challenge</h3>
                  </div>
                  <p className="text-gray-700 pl-14">{product.challenges}</p>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-green-600">Solution</h3>
                  </div>
                  <p className="text-gray-700 pl-14">{product.solutions}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mockups Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">App Mockups</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {product.mockups.map((mockup, index) => (
                  <div key={index} className="text-center">
                    <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={mockup.image}
                        alt={`${product.name} ${mockup.type} Mockup`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <p className="mt-4 font-medium text-gray-800">{mockup.type} View</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-gray-700 mb-6">{product.results}</p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">Interested in similar results?</h3>
                <p className="text-blue-700 mb-4">Contact us to discuss how we can help with your project</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}