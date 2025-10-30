"use client";
import React, { useState, useEffect } from "react";
import Products from "@/components/OurProducts/Products";
import Image from "next/image";

function ProductsPage() {
  const pageTitle = "Products"; // 👈 change only this per page

  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await fetch(
          `https://landing-page-yclw.vercel.app/api/banner`
        );
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          // ✅ find banner with title = pageTitle (case-insensitive)
          const matchedBanner = data.data.find(
            (b) => b.title?.toLowerCase() === pageTitle.toLowerCase()
          );
          setBanner(matchedBanner || null);
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    };
    fetchBanner();
  }, [pageTitle]);

  return (
    <div>
      <div className="relative w-full mt-[81px] h-64 sm:h-80 md:h-[400px] lg:h-[450px]">
        {/* Background Banner Image */}
        <Image
          src={banner?.bannerImage ? banner.bannerImage : "/download (4).jpeg"}
          alt={banner?.title || `${pageTitle} Banner`}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(7,24,43,0.85) 0%, rgba(23,64,110,0.7) 100%)",
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            {pageTitle}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl">
            Discover our latest innovations – from powerful web solutions to
            engaging mobile apps – designed to transform your business.
          </p>
        </div>
      </div>

      <Products />
    </div>
  );
}

export default ProductsPage;
