import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import icons from react-icons library (recommended approach)
import { 
  FiZap, 
  FiShield, 
  FiCloud, 
  FiSmartphone,
  FiCheck 
} from 'react-icons/fi';

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const features = [
    {
      icon: <FiZap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Our optimized solutions deliver blazing fast performance with minimal load times, ensuring your users never wait.",
      color: "from-purple-500 to-pink-500",
      highlights: [
        "90% faster than industry standards",
        "Optimized for low-power devices",
        "CDN-powered global delivery",
        "Real-time performance monitoring"
      ]
    },
    {
      icon: <FiShield className="h-8 w-8" />,
      title: "Secure by Design",
      description: "Built with security first approach to protect your data and privacy at all levels with enterprise-grade protection.",
      color: "from-blue-500 to-cyan-500",
      highlights: [
        "End-to-end encryption",
        "Regular security audits",
        "GDPR & HIPAA compliant",
        "Zero-trust architecture"
      ]
    },
    {
      icon: <FiCloud className="h-8 w-8" />,
      title: "Cloud Powered",
      description: "Leveraging cloud technology for scalability and reliability you can count on with 99.99% uptime guarantee.",
      color: "from-green-500 to-teal-500",
      highlights: [
        "Auto-scaling infrastructure",
        "Multi-region deployment",
        "Disaster recovery ready",
        "Pay-as-you-grow pricing"
      ]
    },
    {
      icon: <FiSmartphone className="h-8 w-8" />,
      title: "Mobile First",
      description: "Designed for the modern world with mobile-first responsive approaches that work flawlessly on any device.",
      color: "from-yellow-500 to-orange-500",
      highlights: [
        "Progressive Web App ready",
        "Touch-optimized interfaces",
        "Offline-first capability",
        "Battery-efficient design"
      ]
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
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const featureCardVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100" ref={ref} id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm font-semibold tracking-wider uppercase text-indigo-600">
            Why we stand out
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Designed for <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">modern needs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine innovation, expertise, and passion to deliver exceptional results that drive your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className={`bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer border border-gray-100 ${
                activeFeature === index ? 'ring-2 ring-indigo-500 ring-opacity-70' : ''
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className={`p-5 bg-gradient-to-r ${feature.color} text-${feature.color} flex justify-center`}>
                <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                  {feature.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="flex flex-col lg:flex-row">
              <div className={`lg:w-2/5 p-8 md:p-10 bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center`}>
                <div className={`text-${features[activeFeature].color} text-center`}>
                  <div className="mb-6 mx-auto w-24 h-24 flex items-center justify-center bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
                    <div className="text-4xl">
                      {features[activeFeature].icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{features[activeFeature].title}</h3>
                  <p className="text-white text-opacity-90">{features[activeFeature].description}</p>
                </div>
              </div>
              <div className="lg:w-3/5 p-8 md:p-10">
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features[activeFeature].highlights.map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start bg-gray-50 p-4 rounded-lg"
                      >
                        <div className={`bg-gradient-to-r ${features[activeFeature].color} rounded-full p-2 mr-3`}>
                          <FiCheck className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 flex justify-center lg:justify-start">
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    Learn more about {features[activeFeature].title.toLowerCase()}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhyChooseUs;