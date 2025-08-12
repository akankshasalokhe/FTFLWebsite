import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const OurProducts = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const products = [
    {
      name: "Nexus Pro",
      category: "Software Suite",
      description: "All-in-one business solution with AI-powered analytics and automation tools.",
      price: "$299",
      features: ["AI Analytics", "Workflow Automation", "Real-time Collaboration", "API Integrations"],
      frontImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      backImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      color: "bg-gradient-to-br from-purple-600 to-blue-500"
    },
    {
      name: "Omni Mobile",
      category: "Mobile App",
      description: "Cross-platform mobile application with offline capabilities and seamless sync.",
      price: "$99",
      features: ["iOS & Android", "Offline Mode", "Biometric Auth", "Cloud Sync"],
      frontImage: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1567&q=80",
      backImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      name: "CloudVault",
      category: "Cloud Storage",
      description: "Secure enterprise-grade cloud storage with end-to-end encryption.",
      price: "$199/year",
      features: ["256-bit Encryption", "File Versioning", "Team Collaboration", "99.9% Uptime"],
      frontImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      backImage: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      color: "bg-gradient-to-br from-orange-500 to-pink-600"
    }
  ];

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hidden: {
      opacity: 0,
      y: 50
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions designed to solve real-world problems with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              index={index} 
              variants={itemVariants} 
              inView={inView} 
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-indigo-700 hover:to-purple-700">
            Explore All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, index, variants, inView }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative h-[400px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className={`relative w-full h-full rounded-2xl shadow-xl transition-all duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Front of Card */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl overflow-hidden">
          <div className={`h-40 ${product.color} flex items-center justify-center`}>
            <motion.img 
              src={product.frontImage} 
              alt={product.name}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: isFlipped ? 1 : 1.05 }}
              transition={{ duration: 0.7 }}
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                {product.category}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center mt-6">
              {/* <span className="text-xl font-bold text-gray-900">{product.price}</span> */}
              <button className="text-indigo-600 font-medium flex items-center">
                Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-2xl overflow-hidden rotate-y-180">
          <motion.img 
            src={product.backImage} 
            alt={product.name}
            className="w-full h-full object-cover opacity-70"
            initial={{ scale: 1 }}
            animate={{ scale: isFlipped ? 1.05 : 1 }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white mb-4">{product.name}</h3>
            <ul className="space-y-2 mb-6">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 ${product.color} text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}>
              Get Started
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OurProducts;