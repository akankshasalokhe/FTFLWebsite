// components/ProductCards.js
import { motion } from "framer-motion";
import Link from "next/link";

const ProductCards = () => {
  const products = [
    {
      id: 1,
      name: "Lifeline Card",
      description: "Your essential financial safety net for emergencies",
      image: "/costEffective.png",
      category: "E-Commerce",
      features: [
        "Instant approval process",
        "No hidden fees",
        "24/7 customer support",
        "Worldwide acceptance"
      ],
      slug: "lifeline-card"
    },
    {
      id: 2,
      name: "Fetch True",
      description: "Smart business solutions for modern enterprises",
      image: "/fetch-true.jpg",
      category: "Business",
      features: [
        "Real-time analytics",
        "Seamless integration",
        "Customizable workflows",
        "Enterprise-grade security"
      ],
      slug: "fetch-true"
    },
    {
      id: 3,
      name: "Dating App",
      description: "Meaningful connections through intelligent matching",
      image: "/dating-app.jpg",
      category: "Social",
      features: [
        "AI-powered matching",
        "Verified profiles",
        "Icebreaker prompts",
        "Private messaging"
      ],
      slug: "spark"
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.3, duration: 0.5 }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover innovative solutions designed to enhance your lifestyle and business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative rounded-2xl overflow-hidden shadow-xl h-[500px] group"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={index}
            >
              {/* Background Image with Zoom Effect */}
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Dark Overlay for Better Text Contrast */}
              <div className="absolute inset-0 bg-black opacity-30"></div>
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

              {/* Content Container */}
              <div className="relative h-full flex flex-col justify-between p-8 z-10">
                {/* Top Section - Category Tag */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-white bg-opacity-30 text-blue-800 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
                
                {/* Middle Section - Product Info */}
                <motion.div
                  className="text-white mt-5"
                  initial="hidden"
                  whileInView="visible"
                  variants={contentVariants}
                  viewport={{ once: true }}
                >
                  <motion.h3 
                    className="text-2xl font-bold mb-3"
                    whileHover={{ x: 5 }}
                  >
                    {product.name}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-100 mb-6 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {product.description}
                  </motion.p>
                  
                  {/* Key Features with Staggered Animation */}
                  <ul className="mb-8 space-y-5 mt-5">
                    {product.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center"
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        variants={featureItemVariants}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-100">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Bottom Section - Button */}
                <Link href={`/products/${product.slug}`} passHref>
                  <motion.button 
                    className="bg-white text-blue-900 hover:bg-blue-50 px-5 py-3 rounded-lg text-sm font-semibold flex items-center justify-center mt-auto w-full"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(255, 255, 255, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </motion.button>
                </Link>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-800/40 via-blue-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/products" passHref>
            <motion.button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg inline-flex items-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(37, 99, 235, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explore All Products
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCards;