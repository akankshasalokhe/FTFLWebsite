import axios from "axios";
import { useEffect, useState } from "react";

export default function Gallery() {
    const [galleryData, setGalleryData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://landing-page-yclw.vercel.app/api/gallery")
            .then((res) => {
                if (res.data?.data?.length > 0) {
                    setGalleryData(res.data.data);
                }
            })
            .catch((err) => {
                console.error("API fetch error:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // Get unique categories from data
    const categories = ["All", ...new Set(galleryData.map((item) => item.category))];

    // Filtered data
    const filteredData =
        selectedCategory === "All"
            ? galleryData
            : galleryData.filter((item) => item.category === selectedCategory);

    // Loading skeleton
    if (loading) {
        return (
            <div className="px-6 py-12 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        Visual Gallery
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Where creativity meets innovation
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="animate-pulse">
                            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl h-80 mb-4"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="px-6 py-12 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
                    Visual Gallery
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Where creativity meets innovation. Explore stunning works that inspire.
                </p>
            </div>

            {/* Category Tabs */}
            {/* <div className="flex justify-center gap-3 mb-12 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 shadow-lg ${selectedCategory === cat
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-purple-500/30"
                            : "bg-white/80 backdrop-blur-sm text-gray-700 border border-white/20 shadow-white/20 hover:bg-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div> */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-12 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold 
      transition-all duration-300 transform hover:scale-105 shadow-md 
      ${selectedCategory === cat
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-purple-500/30"
                                : "bg-white/80 backdrop-blur-sm text-gray-700 border border-white/20 shadow-white/20 hover:bg-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredData.map((item, index) => (
                    <div
                        key={item._id}
                        className="group relative cursor-pointer"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Main Card */}
                        {/* <div className="relative h-80 rounded-3xl overflow-hidden transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"> */}
                        <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">

                            {/* Image with parallax effect */}
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src={item.mainImage}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                                />

                                {/* Animated Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                {/* Sparkle Effect */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            {/* Category Badge */}
                            <div
                                className="
    absolute top-4 left-4 
    transform translate-y-0 md:-translate-y-10 
    md:group-hover:translate-y-0 
    transition-transform duration-500
  "
                            >
                                <span className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                                    {item.category}
                                </span>
                            </div>


                            {/* Content Reveal */}
                            <div className="
  absolute bottom-0 left-0 right-0 p-6 
  transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 
  transition-transform duration-500
">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                                    <h3 className="text-white font-bold text-lg mb-2 drop-shadow-lg">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-white/80 text-sm font-medium drop-shadow">
                                            {new Date(item.createdAt).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </div>


                            {/* Floating Elements */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
                            </div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredData.length === 0 && (
                <div className="text-center py-20">
                    <div className="text-8xl mb-6">✨</div>
                    <h3 className="text-2xl font-semibold text-gray-600 mb-3">No creations yet</h3>
                    <p className="text-gray-500 text-lg">Something amazing is coming soon!</p>
                </div>
            )}
        </div>
    );
}



