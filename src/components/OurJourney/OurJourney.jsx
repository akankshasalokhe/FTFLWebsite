import React from "react";

function OurJourney() {
  const cards = [
    {
      title: "Our Vision",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      description: "To innovate and lead with purpose across industries.",
    },
    {
      title: "Our Mission",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      description: "Deliver impactful solutions that empower businesses.",
    },
    {
      title: "Our Values",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      description: "Integrity, collaboration, and excellence in everything we do.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero / Long Image (same width as cards) */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] overflow-hidden rounded-xl mb-16 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Our Journey Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center"
              style={{ fontFamily: '"Roboto Slab", serif' }}
            >
              Our Journey
            </h2>
          </div>
        </div>

        {/* 3 Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover group-hover:blur-sm transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

              {/* Title */}
              <div className="absolute inset-x-0 top-6 flex justify-center text-white z-10">
                <h3
                  style={{ fontFamily: '"Roboto Slab", serif' }}
                  className="text-2xl font-bold drop-shadow-lg"
                >
                  {card.title}
                </h3>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6">
                <p className="text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurJourney;
