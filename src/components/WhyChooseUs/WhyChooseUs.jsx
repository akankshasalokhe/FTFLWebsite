import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
      description: "Our optimized solutions deliver blazing fast performance with minimal load times.",
      color: "from-blue-50 to-[#298cf3]",
      highlightColor: "bg-blue-50",
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
      description: "Built with security first approach to protect your data and privacy.",
      color: "from-blue-100 to-[#298cf3]",
      highlightColor: "bg-blue-100",
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
      description: "Leveraging cloud technology for scalability and reliability.",
      color: "from-blue-200 to-[#298cf3]",
      highlightColor: "bg-blue-200",
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
      description: "Designed for the modern world with mobile-first approaches.",
      color: "from-blue-300 to-[#298cf3]",
      highlightColor: "bg-blue-300",
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref} id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm font-semibold tracking-wider uppercase text-[#298cf3]">
            Why we stand out
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Designed for <span className="text-[#298cf3]">modern needs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine innovation, expertise, and passion to deliver exceptional results.
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
              whileHover={{ y: -5 }}
              className={`bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer border border-gray-200 ${
                activeFeature === index ? 'ring-1 ring-[#298cf3]' : ''
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className={`p-5 bg-gradient-to-r ${feature.color} flex justify-center`}>
                <div className="bg-white/30 rounded-lg p-3 backdrop-blur-sm">
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
            className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200"
          >
            <div className="flex flex-col lg:flex-row">
              <div className={`lg:w-2/5 p-8 md:p-10 bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center`}>
                <div className="text-white text-center">
                  <div className="mb-6 mx-auto w-24 h-24 flex items-center justify-center bg-white/20 rounded-2xl backdrop-blur-sm">
                    <div className="text-4xl">
                      {features[activeFeature].icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{features[activeFeature].title}</h3>
                  <p className="text-white/90">{features[activeFeature].description}</p>
                </div>
              </div>
              <div className="lg:w-3/5 p-8 md:p-10">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features[activeFeature].highlights.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`flex items-start ${features[activeFeature].highlightColor} p-4 rounded-lg`}
                    >
                      <div className={`bg-[#298cf3] rounded-full p-1.5 mr-3`}>
                        <FiCheck className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <button className="px-6 py-2.5 bg-[#298cf3] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
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