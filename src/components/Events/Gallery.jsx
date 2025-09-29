import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function CompanyEventsGallery() {
  const [eventsData, setEventsData] = useState([]);
  const [eventCategories, setEventCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [masonryColumns, setMasonryColumns] = useState(3);

  // Responsive items count and masonry columns
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(4);
        setMasonryColumns(2);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(6);
        setMasonryColumns(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(8);
        setMasonryColumns(3);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(10);
        setMasonryColumns(4);
      } else {
        setItemsPerPage(12);
        setMasonryColumns(5);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate random heights for masonry layout
  const getRandomHeight = () => {
    const heights = [200, 250, 300, 350, 400];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  // Generate random aspect ratios for images
  const getRandomAspectRatio = () => {
    const ratios = [
      "aspect-square",
      "aspect-video",
      "aspect-[4/3]",
      "aspect-[3/4]",
      "aspect-[5/4]",
      "aspect-[4/5]"
    ];
    return ratios[Math.floor(Math.random() * ratios.length)];
  };

  // Shuffle array function
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Fetch events data
  useEffect(() => {
    const mockEvents = [
      {
        id: 1,
        title: "Annual Conference 2023",
        date: "2023-11-15",
        category: "Conference",
        images: [
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Our annual conference brought together industry leaders and innovators for three days of inspiration and networking.",
        height: getRandomHeight(),
        aspectRatio: getRandomAspectRatio()
      },
      {
        id: 2,
        title: "Team Building Retreat",
        date: "2023-09-22",
        category: "Team Event",
        images: [
          "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "A weekend of team bonding activities that strengthened our collaboration and communication.",
        height: getRandomHeight(),
        aspectRatio: getRandomAspectRatio()
      },
      {
        id: 3,
        title: "Product Launch Event",
        date: "2023-07-10",
        category: "Product Launch",
        images: [
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Launching our latest innovation to partners and clients in an unforgettable evening event.",
        height: getRandomHeight(),
        aspectRatio: getRandomAspectRatio()
      },
      {
        id: 4,
        title: "Charity Fundraiser",
        date: "2023-05-18",
        category: "Charity",
        images: [
          "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Raising funds for local community initiatives through our annual charity gala.",
        height: getRandomHeight(),
        aspectRatio: getRandomAspectRatio()
      },
      {
        id: 5,
        title: "Hackathon 2023",
        date: "2023-03-25",
        category: "Innovation",
        images: [
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "48 hours of intense coding and innovation that resulted in groundbreaking prototypes.",
        height: getRandomHeight(),
        aspectRatio: getRandomAspectRatio()
      },
      {
        id: 6,
        title: "Leadership Summit",
        date: "2023-02-14",
        category: "Conference",
        images: [
          "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1431540015161-0bf868a2d40e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Bringing together our leadership team to strategize for the upcoming year.",
        height: getRandomHeight(),
        aspectRatio: getRandomAspectRatio()
      },
      {
        id: 7,
        title: "Winter Celebration",
        date: "2023-12-20",
        category: "Celebration",
        images: [
          "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Annual winter holiday party celebrating our team's achievements throughout the year.",
        height: getRandomHeight(),
        aspectRatio: getRandomAspectRatio()
      },
      {
        id: 8,
        title: "Tech Workshop Series",
        date: "2023-10-05",
        category: "Workshop",
        images: [
          "https://images.unsplash.com/photo-1495465798138-718f86d1a4f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Hands-on workshops focusing on emerging technologies and skill development.",
        height: getRandomHeight(),
        aspectRatio: getRandomAspectRatio()
      },
      {
        id: 9,
        title: "Summer Picnic",
        date: "2023-08-12",
        category: "Team Event",
        images: [
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Fun-filled summer picnic with games, food, and team activities.",
        height: getRandomHeight(),
        aspectRatio: getRandomAspectRatio()
      },
      {
        id: 10,
        title: "Industry Awards",
        date: "2023-04-30",
        category: "Awards",
        images: [
          "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Celebrating our industry recognition and awards ceremony.",
        height: getRandomHeight(),
        aspectRatio: getRandomAspectRatio()
      }
    ];

    // Shuffle the events and assign random properties
    const shuffledEvents = shuffleArray(mockEvents).map(event => ({
      ...event,
      height: getRandomHeight(),
      aspectRatio: getRandomAspectRatio()
    }));

    setEventsData(shuffledEvents);
    const uniqueCategories = Array.from(new Set(shuffledEvents.map(e => e.category)));
    setEventCategories(["All", ...uniqueCategories]);
  }, []);

  const filteredEvents = activeCategory === "All" 
    ? eventsData 
    : eventsData.filter(e => e.category === activeCategory);

  // Organize events into masonry columns
  const organizeMasonryColumns = (events, columnCount) => {
    const columns = Array.from({ length: columnCount }, () => []);
    
    events.forEach((event, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push(event);
    });
    
    return columns;
  };

  const masonryColumnsData = organizeMasonryColumns(filteredEvents, masonryColumns);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const nextSlide = () => {
    if (filteredEvents.length <= itemsPerPage) return;
    setDirection(1);
    setCurrentIndex(prev => (prev >= totalPages - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (filteredEvents.length <= itemsPerPage) return;
    setDirection(-1);
    setCurrentIndex(prev => (prev <= 0 ? totalPages - 1 : prev - 1));
  };

  const getCurrentPageEvents = () => {
    if (filteredEvents.length <= itemsPerPage) return filteredEvents;
    const startIndex = currentIndex * itemsPerPage;
    return filteredEvents.slice(startIndex, startIndex + itemsPerPage);
  };

  const openEventModal = (event, index) => {
    setSelectedEvent(event);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const navigateImage = (direction) => {
    if (!selectedEvent) return;
    
    const currentEventIndex = filteredEvents.findIndex(e => e.id === selectedEvent.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentEventIndex + 1) % filteredEvents.length;
    } else {
      newIndex = (currentEventIndex - 1 + filteredEvents.length) % filteredEvents.length;
    }
    
    setSelectedEvent(filteredEvents[newIndex]);
    setDirection(direction === 'next' ? 1 : -1);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10% left-5% w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10% right-5% w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blue-500"></div>
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Our Events</span>
            <div className="w-8 h-px bg-blue-500"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Relive the memorable moments from our company events, conferences, and celebrations that bring our team together.
          </p>
        </motion.div>

        {/* Event Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-2 border border-white/50 shadow-lg">
            <div className="flex flex-wrap justify-center gap-2">
              {eventCategories.map((category, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentIndex(0);
                  }}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="relative">
          {/* Navigation Arrows */}
          {filteredEvents.length > itemsPerPage && (
            <>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)" }}
                onClick={prevSlide}
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 backdrop-blur-lg rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
                aria-label="Previous events"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)" }}
                onClick={nextSlide}
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 backdrop-blur-lg rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
                aria-label="Next events"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </>
          )}

          {/* Masonry Layout */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${currentIndex}`}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
              >
                {getCurrentPageEvents().map((event, index) => (
                  <motion.div
                    key={event.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      layout: { type: "spring", damping: 20, stiffness: 100 }
                    }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      transition: { duration: 0.3 } 
                    }}
                    onClick={() => openEventModal(event, index)}
                    className={`relative group cursor-pointer rounded-2xl overflow-hidden bg-gray-200 ${event.aspectRatio}`}
                    style={{ minHeight: `${event.height}px` }}
                  >
                    {/* Event Image */}
                    <img
                      src={event.images[0]}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Event Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">{event.title}</h3>
                      <p className="text-blue-200 text-xs">{new Date(event.date).toLocaleDateString()}</p>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                        {event.category}
                      </span>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-500"></div>
                    
                    {/* Random Size Indicator */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {event.height}px
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicator */}
          {filteredEvents.length > itemsPerPage && (
            <div className="flex justify-center mt-12">
              <div className="bg-white/80 backdrop-blur-lg rounded-full p-2 border border-white/50 shadow-lg">
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 text-sm font-medium">
                    {currentIndex + 1} / {totalPages}
                  </span>
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentIndex ? 1 : -1);
                          setCurrentIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentIndex === index 
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-150" 
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Events Counter */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-4 text-gray-600 text-sm">
              <span className="bg-white/80 backdrop-blur-lg rounded-full px-4 py-2 border border-white/50">
                Showing {Math.min(filteredEvents.length, itemsPerPage)} of {filteredEvents.length} events
                {activeCategory !== "All" && ` in ${activeCategory}`}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Gallery */}
                <div className="md:w-1/2 bg-gray-100">
                  <img
                    src={selectedEvent.images[0]}
                    alt={selectedEvent.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>

                {/* Event Details */}
                <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {selectedEvent.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {selectedEvent.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{new Date(selectedEvent.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {selectedEvent.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {selectedEvent.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${selectedEvent.title} ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => {/* You can implement image switching here */}}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}