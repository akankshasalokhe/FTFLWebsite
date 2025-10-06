import React from 'react'
import Products from '@/components/OurProducts/Products'
import Image from 'next/image'

function products() {
  return (
    <div>  <div className="relative w-full mt-[81px] h-64 sm:h-80 md:h-[400px] lg:h-[450px]">
      {/* Background Banner Image */}
      <Image
        src="/download (4).jpeg" 
        alt="Our Products Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div  style={{
          background: "linear-gradient(135deg, rgba(7,24,43,0.85) 0%, rgba(23,64,110,0.7) 100%)",
        }}
         className="absolute inset-0  flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
          Our Products
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl">
          Discover our latest innovations – from powerful web solutions to
          engaging mobile apps – designed to transform your business.
        </p>
      </div>
    </div>
  

      <Products />
    </div>
  )
}

export default products