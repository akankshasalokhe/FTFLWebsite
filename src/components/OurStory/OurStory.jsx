"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const StorySection = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await axios.get("https://landing-page-yclw.vercel.app/api/about");

        if (res.data.success) {
          const apiData = res.data.data;

          // Filter only items with typeData === "Story"
          const mappedData = apiData
            .filter(item => item.typeData === "Story")
            .map((item) => ({
              title: item.title,
              description: item.description,
              image: item.mainImage,
              color: "from-purple-500 to-purple-600",
              reverse: true,
              typeData: item.typeData
            }));

          setContent(mappedData);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setContent([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    // <section id='story' className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
 <section
  id="story"
  className="pt-0 pb-8 sm:pt-0 sm:pb-12 lg:pt-8 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-white"
>
  <div className="max-w-7xl mx-auto">
    <div className="space-y-24 sm:space-y-32">
      {content.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-12`}
        >
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 lg:h-auto aspect-video object-cover rounded-xl"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x450?text=Image+Not+Found";
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-20 rounded-xl`}></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${item.color} mb-6`} />
            <h3
              style={{ fontFamily: '"Roboto Slab", serif' }}
              className="text-4xl sm:text-3xl font-extrabold text-gray-900 mb-4"
            >
              Our Story
            </h3>
            <div className="text-md lg:text-lg text-gray-600 space-y-3">
              <p >
                As the provider of IT infrastructure services, FTFL is dedicated to maintaining and enhancing the critical systems at the core of the digital economy. With our partners and thousands of customers nationwide, we co-create solutions to help enterprises reach their peak digital performance.
              </p>
              <p className="font-bold mt-2 mb-2 text-2xl">Who we are and what our believes</p>
              <p>
                At FTFL we build a strong bond with customers and with each other. Our people are at the heart of our business evoking new growth and connections. By working together, we are growing.
                <br />
                Two of the fundamental ideas that form our identity at FTFL are new growth and human relationships. These ideas have a direct connection to our goal to drive innovation, to transform the world, and to advance development on daily basis. These values are reflected in the work we conduct at FTFL.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default StorySection;