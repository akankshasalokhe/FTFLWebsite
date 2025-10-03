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
    <section id='story' className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          // Simple loading text instead of skeleton
          <div className="text-center py-8">
            <p className="text-gray-600">Loading...</p>
          </div>
        ) : (
          // Content without animations
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
                      className="w-full h-auto aspect-video object-cover rounded-xl"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/800x450?text=Image+Not+Found";
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-20 rounded-xl`}></div>
                  </div>
                  <div className={`hidden sm:block absolute -z-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 ${item.reverse ? "-left-8 -bottom-8" : "-right-8 -bottom-8"}`}></div>
                </div>

                {/* Text Content */}
                <div className="lg:w-1/2">
                  <div className={`w-16 h-1.5 rounded-full bg-gradient-to-r ${item.color} mb-6`} />
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Our Story
                  </h3>
                  <p className="text-lg text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StorySection;