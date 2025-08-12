import React from 'react'
import ServiceCategories from '@/components/ServiceCategories/Categories';

function services() {
  return (
    <section>
<div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background pattern (optional) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full -ml-16 -mt-16"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 rounded-full -mr-32 -mb-32"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-200 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
          Our Services
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          We offer scalable IT solutions customized for your business needs.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a 
            href="#services" 
            className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
          >
            Explore Services
          </a>
          <a 
            href="/contact" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Animation elements (optional) */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white opacity-10"></div>

    </div> 
    <ServiceCategories/>
    </section>
    
   )
}

export default services