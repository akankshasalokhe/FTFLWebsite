"use client";

import { useEffect, useRef, useState } from "react";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const cards = [
    {
      title: "Expert Mentorship",
      desc: "Learn directly from experienced professionals who guide you every step of the way.",
      img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800",
    },
    {
      title: "Real-World Projects",
      desc: "Work on practical, industry-level projects to gain hands-on experience.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    },
    {
      title: "Career Support",
      desc: "Get personalized career assistance — from resume building to interview prep.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    },
    {
      title: "Flexible Learning",
      desc: "Study at your own pace with our hybrid and self-paced modules.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
    },
    {
      title: "Certification",
      desc: "Earn a verified industry-recognized certificate upon successful completion.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      const scrollTop = el.scrollTop;
      const height = el.clientHeight;
      const index = Math.round(scrollTop / height);
      setActiveIndex(index);
    };
    const el = scrollRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-indigo-100 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 px-6">
        {/* Left Sticky Content */}
        <div className="lg:col-span-5 flex flex-col justify-center sticky top-30 self-start h-screen">
          <div className="relative">
            <span className="inline-block bg-blue-100 text-blue-800 font-medium px-4 py-1 rounded-full text-sm mb-4">
              Our Promise
            </span>
            <h2 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Why <span className="text-blue-600">Choose Us</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We help students and professionals gain real experience through
              mentorship, internships, and programs designed for success.
            </p>
            <ul className="space-y-3 text-gray-800">
              <li>✔ Personalized learning path</li>
              <li>✔ Hands-on practical exposure</li>
              <li>✔ Real industry connections</li>
            </ul>
          </div>
        </div>

        {/* Right Scrolling Stack */}
        <div className="lg:col-span-7 relative h-[90vh]">
          <div
            ref={scrollRef}
            className="h-full overflow-y-scroll snap-y snap-mandatory no-scrollbar relative rounded-3xl bg-white/50 backdrop-blur-md shadow-inner"
          >
            {cards.map((card, i) => {
              const isActive = i === activeIndex;
              const isPrev = i < activeIndex;

              return (
                <div
                  key={i}
                  className="snap-start h-[80vh] flex justify-center items-center relative"
                >
                  <div
                    className={`absolute w-[22rem] h-[20rem] aspect-square rounded-2xl overflow-hidden border border-gray-100 transition-all duration-700 ease-in-out backdrop-blur-sm`}
                    style={{
                      transform: `translateY(${
                        isPrev ? -40 * (activeIndex - i) : 0
                      }px) scale(${isActive ? 1.05 : isPrev ? 0.95 : 0.9})`,
                      opacity: isPrev ? 0.7 : 1,
                      zIndex: isPrev ? 5 : 10,
                      boxShadow: isActive
                        ? "0 20px 40px rgba(0,0,0,0.15)"
                        : "0 8px 20px rgba(0,0,0,0.08)",
                      background: "white",
                    }}
                  >
                    <div className="h-50 overflow-hidden pt-10 ps-10 pb-0">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-30 h-30 object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                    <div className=" text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify-center px-6">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
