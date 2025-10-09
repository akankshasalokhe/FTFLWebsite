import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaClock,
    FaCertificate,
    FaArrowLeft,
    FaCheckCircle,
    FaChevronDown,
    FaChevronUp,
    FaChalkboardTeacher,
    FaLaptopCode,
    FaChartLine,
    FaSpinner,
    FaUsers,
    FaProjectDiagram,
    FaStar,
    FaUserTie,
    FaGraduationCap,
    FaBriefcase,
    FaMoneyBillWave,
    FaRegCalendarAlt,
    FaMapMarkerAlt,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaShare,
    FaBook,
    FaTools,
    FaHandshake,
    FaCode,
    FaServer,
    FaMobile,
    FaDatabase,
    FaCloud,
    FaGlobe,
    FaAward,
    FaRocket,
    FaLightbulb,
    FaQuestionCircle,
    FaRupeeSign,
    FaUniversity,
} from "react-icons/fa";
import axios from "axios";

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Enhanced Accordion Component
const CurriculumAccordion = ({ curriculum }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="space-y-4">
            {curriculum.map((item, index) => (
                <motion.div
                    key={item.step}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h3>
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="flex justify-between items-center w-full px-6 py-5 text-left text-lg font-semibold text-gray-800 hover:bg-blue-50 transition-all duration-300"
                            aria-expanded={openIndex === index}
                        >
                            <span className="flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                    {item.icon}
                                </span>
                                {item.title}
                            </span>
                            {openIndex === index ? (
                                <FaChevronUp className="text-blue-600" />
                            ) : (
                                <FaChevronDown className="text-blue-600" />
                            )}
                        </button>
                    </h3>

                    <div
                        className={openIndex === index ? "block" : "hidden"}
                    >
                        <div className="px-6 pb-5">
                            {/* Check if item has sections (for responsibilities) or direct topics */}
                            {item.sections ? (
                                <div className="space-y-6">
                                    {item.sections.map((section, sectionIndex) => (
                                        <div
                                            key={sectionIndex}
                                        //   className={`rounded-lg border-l-4 p-4 ${
                                        //     section.type === 'must-have' 
                                        //       ? 'border-l-green-500 bg-green-50' 
                                        //       : 'border-l-yellow-500 bg-yellow-50'
                                        //   }`}
                                        >
                                            <div className="mb-3">
                                                <h4 className="font-semibold text-gray-800 text-lg">
                                                    {section.type === 'must-have' ? 'Must-Have ' : 'Nice-to-Have '}
                                                </h4>

                                            </div>
                                            <ul className="space-y-2 list-disc list-inside">
                                                {section.topics.map((topic, topicIndex) => (
                                                    <motion.li
                                                        key={topicIndex}
                                                        className="text-gray-700"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: topicIndex * 0.1 }}
                                                    >
                                                        <span>{topic}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                /* Regular topics list for work environment */
                                // <ul className="space-y-2  list-disc list-inside">
                                //     {item.topics.map((topic, j) => (
                                //         <motion.li
                                //             key={j}
                                //             className="flex items-start text-gray-700"
                                //             initial={{ opacity: 0, x: -10 }}
                                //             animate={{ opacity: 1, x: 0 }}
                                //             transition={{ delay: j * 0.1 }}
                                //         >
                                          
                                //             <span>{topic}</span>
                                //         </motion.li>
                                //     ))}
                                // </ul>
                                <ul className="space-y-2 list-disc list-inside">
                                                {item.topics.map((topic, topicIndex) => (
                                                    <motion.li
                                                        key={topicIndex}
                                                        className="text-gray-700"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: topicIndex * 0.1 }}
                                                    >
                                                        <span>{topic}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

// FAQ Accordion Component
const FAQAccordion = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(-1);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <motion.div
                    key={faq._id || index}
                    className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3>
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="flex justify-between items-center w-full px-6 py-5 text-left text-lg font-semibold text-gray-800 hover:bg-blue-50 transition-all duration-300"
                            aria-expanded={openIndex === index}
                        >
                            <span className="flex items-center gap-3">
                                {faq.icon && (
                                    <img
                                        src={faq.icon}
                                        alt="icon"
                                        className="w-6 h-6 object-contain"
                                    />
                                )}
                                {faq.question}
                            </span>
                            {openIndex === index ? (
                                <FaChevronUp className="text-blue-600" />
                            ) : (
                                <FaChevronDown className="text-blue-600" />
                            )}
                        </button>
                    </h3>

                    <div className={openIndex === index ? "block" : "hidden"}>
                        <div className="px-6 pb-5 text-gray-700">{faq.answer}</div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

// Loading Skeleton Component
const LoadingSkeleton = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="h-96 bg-gray-300 animate-pulse"></div>
            <div className="max-w-6xl mx-auto px-6 w-full -mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[1, 2, 3].map(item => (
                        <div key={item} className="bg-white rounded-xl shadow p-5 h-24 animate-pulse"></div>
                    ))}
                </div>

                <div className="mt-12">
                    <div className="h-8 w-64 bg-gray-300 rounded animate-pulse mb-6"></div>
                    <div className="flex flex-wrap gap-3">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                            <div key={item} className="h-8 w-24 bg-gray-300 rounded-full animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Rating Stars Component
const RatingStars = ({ rating }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <FaStar
                    key={i}
                    className={i < rating ? "text-yellow-400" : "text-gray-300"}
                />
            ))}
        </div>
    );
};

export default function CourseDetails() {
    const { query, back } = useRouter();
    const [internshipData, setInternshipData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [faqData, setFaqData] = useState([]);
    const [activeTab, setActiveTab] = useState('curriculum');
    const [reviewData, setReviewData] = useState([]);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (!id) return;

        const fetchInternshipData = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(`https://landing-page-yclw.vercel.app/api/normalInternship/${id}`);
                if (res.data.success) {
                    setInternshipData(res.data.data);
                }
                console.log("Fetched Internship Data:", res.data.data);
            } catch (err) {
                console.error("Error fetching internship data:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInternshipData();
    }, [id]);

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const res = await axios.get(`https://landing-page-yclw.vercel.app/api/review`);
                if (res.data.success) {
                    setReviewData(res.data.data);
                }
                console.log("Fetched Review Data:", res.data.data);
            } catch (err) {
                console.error("Error fetching review data:", err);
            }
        };

        fetchReview();
    }, []);

    useEffect(() => {
        const fetchFaq = async () => {
            try {
                const res = await axios.get(`https://landing-page-yclw.vercel.app/api/faq`);
                if (res.data.success) {
                    const filteredFaqs = res.data.data.filter(
                        (faq) => faq.module === "Internship"
                    );
                    setFaqData(filteredFaqs);
                }
                console.log("Fetched FAQ Data:", res.data.data);
            } catch (err) {
                console.error("Error fetching FAQ data:", err);
            }
        };

        fetchFaq();
    }, []);

    if (isLoading || !internshipData) {
        return <LoadingSkeleton />;
    }

    if (!isLoading && (!internshipData || Object.keys(internshipData).length === 0)) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
                <div className="max-w-md text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
                    <p className="text-gray-600 mb-6">
                        The course you're looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        href="/"
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
                    >
                        Browse All Courses
                    </Link>
                </div>
            </div>
        );
    }

    // Transform responsibilities into curriculum format
    const transformedCurriculum = [
        {
            step: 1,
            title: "Internship Responsibilities",
            icon: <FaBriefcase className="text-blue-500" />,
            sections: [
                {
                    type: "must-have",
                    title: "🎯 Must-Have Responsibilities",
                    // description: "Essential duties you'll be expected to perform",
                    topics: internshipData.responsibilities?.musthave || [],
                    color: "green"
                },
                {
                    type: "nice-to-have",
                    title: "⭐ Nice-to-Have Responsibilities",
                    description: "Additional skills that will enhance your experience",
                    topics: internshipData.responsibilities?.nicetohave || [],
                    color: "yellow"
                }
            ]
        },
        {
            step: 2,
            title: "Work Environment",
            icon: <FaUsers className="text-green-500" />,
            topics: internshipData.workEnvironment || []
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>{internshipData.title} | CareerBoost</title>
                <meta
                    name="description"
                    content={`${internshipData.title} - ${internshipData.description}`}
                />
            </Head>

            {/* Navigation */}
            <nav className="bg-white shadow-sm mt-18">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <button
                            onClick={() => back()}
                            className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition"
                        >
                            <FaArrowLeft className="mr-2" aria-hidden="true" />
                            Back to Courses
                        </button>
                        <div className="ml-4 text-sm text-gray-500">
                            Courses / <span className="text-blue-600">{internshipData.title}</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative h-80 md:h-96">
                <Image
                    src={internshipData.bannerImage || "/default-banner.jpg"}
                    alt={internshipData.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-70 z-0"></div>
                <div className="w-full h-full flex items-center z-10 relative">
                    <div className="max-w-6xl mx-auto px-6 text-white w-full">
                        <motion.div
                            className="flex items-center mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="bg-white p-3 rounded-xl mr-3 shadow-lg">
                                <Image
                                    src={internshipData.mainImage || "/default-icon.jpg"}
                                    alt={internshipData.title}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                                {internshipData.title}
                            </h1>
                        </motion.div>
                        <motion.p
                            className="max-w-2xl mb-6 opacity-90 text-sm md:text-base"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            {internshipData.description}
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            {/* <button className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition">
                                Download Syllabus
                            </button> */}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-10 relative z-10">
                <motion.div
                    className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-3 transition hover:shadow-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <div className="bg-blue-100 p-3 rounded-lg">
                        <FaClock className="text-blue-600 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-semibold text-gray-800">{internshipData.durationDetails || internshipData.duration}</p>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-3 transition hover:shadow-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: 0.1 }}
                >
                    <div className="bg-green-100 p-3 rounded-lg">
                        <FaMoneyBillWave className="text-green-600 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Stipend</p>
                        <p className="font-semibold text-gray-800">{internshipData.stipend || "Not specified"}</p>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-3 transition hover:shadow-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: 0.2 }}
                >
                    <div className="bg-purple-100 p-3 rounded-lg">
                        <FaGraduationCap className="text-purple-600 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Education</p>
                        <p className="font-semibold text-gray-800">
                            {internshipData.eligibility?.map((item, index) => (
                                <span key={index} className="block">{item}</span>
                            )) || "Not specified"}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-3 transition hover:shadow-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: 0.3 }}
                >
                    <div className="bg-yellow-100 p-3 rounded-lg">
                        <FaMapMarkerAlt className="text-yellow-600 text-xl" aria-hidden="true" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Mode</p>
                        <p className="font-semibold text-gray-800">{internshipData.mode || "Not specified"}</p>
                    </div>
                </motion.div>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    {/* Tab Navigation */}
                    <div className="border-b border-gray-200 mb-8">
                        <nav className="flex space-x-8">
                            {['curriculum'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === tab
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'curriculum' && (
                        <>
                            {/* Skills */}
                            {/* <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full" aria-hidden="true"></span>
                  Key Skills You'll Learn
                </h2>
                <div className="flex flex-wrap gap-3">
                  {internshipData.skills?.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={skill.skillIcon}
                        alt={skill.skillTitle}
                        className="w-5 h-5 object-contain"
                      />
                      {skill.skillTitle}
                    </motion.span>
                  ))}
                </div>
              </motion.section> */}

                            {/* Tools */}
                            {/* <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full" aria-hidden="true"></span>
                  Tools & Technologies
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {internshipData.tool?.map((tool, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-4 text-center shadow hover:shadow-md transition flex flex-col items-center"
                      whileHover={{ y: -5 }}
                    >
                      <img
                        src={tool.toolIcon}
                        alt={tool.toolTitle}
                        className="w-10 h-10 object-contain"
                      />
                      <p className="font-medium text-gray-800">{tool.toolTitle}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section> */}

                            {/* Curriculum */}
                            {/* <motion.section
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
              
                <CurriculumAccordion curriculum={transformedCurriculum} />
              </motion.section> */}

                            <motion.section
                                className="mb-12"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                            >
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full" aria-hidden="true"></span>
                                    Responsibilities
                                </h2>
                                <CurriculumAccordion curriculum={transformedCurriculum} />
                            </motion.section>

                            {/* Outcomes */}
                            <motion.section
                                className="mb-12"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                            >
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full" aria-hidden="true"></span>
                                    Benefits
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {internshipData.benefits?.map((outcome, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white rounded-xl shadow p-6 flex items-start gap-3 hover:shadow-md transition group"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeIn}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <FaCheckCircle className="text-green-500 text-xl mt-0.5 flex-shrink-0" aria-hidden="true" />
                                            <span className="text-gray-700">{outcome}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>
                        </>
                    )}

                    {activeTab === 'reviews' && (
                        <motion.section
                            className="mb-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Reviews</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {reviewData.map((review, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white rounded-xl shadow-lg p-6"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeIn}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden flex items-center justify-center">
                                                <FaUserTie className="text-xl text-gray-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-800">{review.title}</h4>
                                                <p className="text-gray-600 text-sm">{review.subtitle}</p>
                                            </div>
                                        </div>
                                        <RatingStars rating={review.rating} />
                                        <p className="text-gray-700 mt-4">{review.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {activeTab === 'faqs' && (
                        <motion.section
                            className="mb-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                            <FAQAccordion faqs={faqData} />
                        </motion.section>
                    )}
                </div>

                {/* Sidebar */}
                <div className="md:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        {/* <motion.div
                            className="bg-white rounded-2xl shadow-lg p-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleIn}
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Program Summary</h3>
                            <div className="space-y-4">
                                <div className="">
                                    <p className="text-gray-600">Duration:</p>
                                    <p className="font-semibold">{internshipData.durationDetails || internshipData.duration}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Stipend:</span>
                                    <span className="font-semibold text-green-600">{internshipData.stipend || "Not specified"}</span>
                                </div>
                                <div className="">
                                    <p className="text-gray-600">Education:</p>
                                    <p className="font-semibold text-gray-800">
                                        {internshipData.eligibility?.map((item, index) => (
                                            <span key={index} className="block">{item}</span>
                                        )) || "Not specified"}
                                    </p>
                                </div>
                                <div className="">
                                    <p className="text-gray-600">Mode:</p>
                                    <p className="font-semibold">{internshipData.mode || "Not specified"}</p>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-center text-sm text-gray-500">Limited seats available</p>
                                </div>
                            </div>
                        </motion.div> */}

                        <motion.div
                            className="bg-white rounded-2xl shadow-lg p-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleIn}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <FaClock className="text-blue-500" />
                                    <div>
                                        <p className="text-sm text-gray-600">Schedule</p>
                                        <p className="font-semibold text-gray-800">{internshipData.schedule || "Flexible"}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-blue-500" />
                                    <div>
                                        <p className="text-sm text-gray-600">Mode</p>
                                        <p className="font-semibold text-gray-800">{internshipData.mode || "Not specified"}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                     
                    </div>
                </div>
            </div>

        </div>
    );
}