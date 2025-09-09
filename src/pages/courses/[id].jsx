import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
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
} from "react-icons/fa";

// MASTER DATA
const coursesData = [
  {
    id: 1,
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    fullDescription: `Our comprehensive Web Development course is designed to take you from beginner to job-ready in just 4 weeks. You'll master the fundamentals of modern web development including HTML5, CSS3, JavaScript, and React. Through hands-on projects and real-world applications, you'll learn to build responsive, interactive websites that stand out in today's competitive market.`,
    duration: "4 weeks",
    fee: "₹4,999",
    internship: "Internship Letter + Placement Opportunity (POP)",
    outcomes: [
      "Build responsive websites from scratch",
      "Create reusable React components",
      "Connect to APIs and handle application state",
      "Deploy applications to production environments",
      "Implement modern UI/UX principles",
      "Use Git for version control and collaboration",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind/Bootstrap",
      "JavaScript (ES6+)",
      "Git & GitHub",
      "React",
      "API/REST",
      "Netlify/Vercel",
    ],
    curriculum: [
      {
        step: 1,
        title: "Week 1: HTML & CSS Fundamentals",
        topics: [
          "Semantic HTML, forms & accessibility",
          "CSS selectors, box model, flexbox",
          "Responsive layouts, media queries",
          "CSS frameworks: Bootstrap and Tailwind",
          "Building a complete landing page",
        ],
      },
      {
        step: 2,
        title: "Week 2: JavaScript Essentials",
        topics: [
          "ES6 syntax, arrays/objects, functions",
          "DOM manipulation & events",
          "Fetch API & basic async patterns",
          "Modern JavaScript features",
          "Building interactive web applications",
        ],
      },
      {
        step: 3,
        title: "Week 3: React Basics",
        topics: [
          "Components, props, state, effects",
          "Routing & reusable UI patterns",
          "Calling APIs, loading/error states",
          "State management fundamentals",
          "Building a single page application",
        ],
      },
      {
        step: 4,
        title: "Week 4: Project & Deployment",
        topics: [
          "Capstone project (SPA with API)",
          "Git workflow & code reviews",
          "Deploy on Vercel/Netlify",
          "Performance optimization",
          "Adding custom domains and HTTPS",
        ],
      },
    ],
    icon: <FaLaptopCode className="text-2xl" />,
  },
  {
    id: 2,
    title: "Data Science",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    fullDescription: `Our Data Science course provides a comprehensive introduction to one of the most sought-after fields in tech. Over 6 weeks, you'll learn to analyze, visualize, and extract meaningful insights from data using Python and its powerful libraries. From data cleaning to machine learning model deployment, this course covers the entire data science pipeline.`,
    duration: "6 weeks",
    fee: "₹6,999",
    internship: "Internship Letter + Placement Opportunity (POP)",
    outcomes: [
      "Clean & analyze complex datasets",
      "Build and evaluate ML models",
      "Visualize insights for decision makers",
      "Ship a complete DS project from start to finish",
      "Communicate data findings effectively",
      "Work with real-world data challenges",
    ],
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "EDA",
      "Train/Test/Validate",
      "Model metrics",
    ],
    curriculum: [
      { step: 1, title: "Week 1: Python for DS", topics: ["Python basics", "NumPy arrays", "Pandas dataframes", "Data manipulation basics"] },
      { step: 2, title: "Week 2: Data Cleaning & EDA", topics: ["Handling missing values", "Feature engineering", "Exploratory data analysis", "Statistical analysis fundamentals"] },
      { step: 3, title: "Week 3: Visualization", topics: ["Matplotlib plotting", "Storytelling with charts", "Dashboards (intro)", "Seaborn for advanced visuals"] },
      { step: 4, title: "Week 4: ML Fundamentals", topics: ["Train/test split", "Regression & classification", "Model evaluation metrics", "Introduction to algorithms"] },
      { step: 5, title: "Week 5: Model Improvement", topics: ["Cross-validation", "Hyperparameter tuning", "Pipelines", "Feature selection techniques"] },
      { step: 6, title: "Week 6: Capstone", topics: ["End-to-end DS project", "Report + notebook", "Presentation", "Deployment basics"] },
    ],
    icon: <FaChartLine className="text-2xl" />,
  },
  {
    id: 3,
    title: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    fullDescription: `Our UI/UX Design course teaches you to create beautiful, functional, and user-centered digital experiences. Over 5 weeks, you'll learn the entire design process from research to prototyping and testing. Using industry-standard tools like Figma, you'll develop the skills to design interfaces that are not only visually appealing but also intuitive and accessible.`,
    duration: "5 weeks",
    fee: "₹5,999",
    internship: "Internship Letter + Placement Opportunity (POP)",
    outcomes: [
      "Design wireframes & prototypes",
      "Conduct user research and testing",
      "Build a portfolio case study",
      "Create handoffs to developers",
      "Apply design thinking methodologies",
      "Develop a design system",
    ],
    skills: [
      "Design Principles",
      "Color & Typography",
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Usability Testing",
      "Design Systems",
    ],
    curriculum: [
      { step: 1, title: "Week 1: Foundations", topics: ["UX process, heuristics", "Color, type, spacing systems", "Figma basics", "Design thinking principles"] },
      { step: 2, title: "Week 2: Wireframes", topics: ["User flows", "Low-fi wireframes", "Information architecture", "User persona development"] },
      { step: 3, title: "Week 3: Prototyping", topics: ["High-fi mockups", "Interactive prototypes", "Micro-interactions", "Design critique sessions"] },
      { step: 4, title: "Week 4: Research & Testing", topics: ["User interviews", "Usability tests", "Iteration cycles", "Analyzing feedback"] },
      { step: 5, title: "Week 5: Portfolio", topics: ["Case study writing", "Handoff & specs", "Presentation", "Building a design portfolio"] },
    ],
    icon: <FaChalkboardTeacher className="text-2xl" />,
  },
];

// Accordion Component
const CurriculumAccordion = ({ curriculum }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <div className="space-y-4">
      {curriculum.map((item, i) => (
        <div
          key={item.step}
          className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <button
            onClick={() => toggleAccordion(i)}
            className="flex justify-between items-center w-full px-6 py-5 text-left text-lg font-semibold text-blue-900 hover:bg-blue-50 transition-all duration-300"
            aria-expanded={openIndex === i}
            aria-controls={`content-${item.step}`}
          >
            <span className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {item.step}
              </span>
              {item.title}
            </span>
            {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {openIndex === i && (
            <div id={`content-${item.step}`} className="px-6 pb-5">
              <ul className="space-y-2">
                {item.topics.map((topic, j) => (
                  <li key={j} className="flex items-start text-blue-800">
                    <FaCheckCircle className="mt-1 mr-2 text-blue-600 flex-shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Enrollment Modal Component
const EnrollmentModal = ({ course, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-blue-900">Enroll in {course.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <p className="text-gray-600 mb-6">Complete the form below to enroll in this course.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="pt-4">
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Enroll Now for {course.fee}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Loading Skeleton Component
const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
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

export default function CourseDetails() {
  const { query, back } = useRouter();
  const [course, setCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      const foundCourse = coursesData.find((c) => String(c.id) === String(query.id));
      setCourse(foundCourse);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [query.id]);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">Course Not Found</h1>
          <p className="text-blue-700 mb-6">The course you're looking for doesn't exist or has been moved.</p>
          <Link href="/">
            <a className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition">
              Browse All Courses
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <Head>
        <title>{course.title} | CareerBoost</title>
        <meta
          name="description"
          content={`${course.title} detailed curriculum and modules`}
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center">
            <button 
              onClick={() => back()} 
              className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition"
            >
              <FaArrowLeft className="mr-2" />
              Back to Courses
            </button>
            <div className="ml-4 text-sm text-gray-500">
              Courses / <span className="text-blue-600">{course.title}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-80 md:h-96">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white w-full">
            <div className="flex items-center mb-4">
              <span className="bg-blue-500 p-3 rounded-xl mr-3">
                {course.icon}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                {course.title}
              </h1>
            </div>
            <p className="max-w-2xl mb-6 opacity-90 text-sm md:text-base">
              {course.fullDescription}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-50 transition"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 md:-mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-3 transition hover:shadow-xl">
          <div className="bg-blue-100 p-3 rounded-lg">
            <FaClock className="text-blue-600 text-xl" />
          </div>
          <div>
            <p className="text-sm text-blue-600">Duration</p>
            <p className="font-semibold text-blue-900">{course.duration}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-3 transition hover:shadow-xl">
          <div className="bg-blue-100 p-3 rounded-lg">
            <span className="text-blue-600 font-bold text-xl">₹</span>
          </div>
          <div>
            <p className="text-sm text-blue-600">Course Fee</p>
            <p className="font-semibold text-blue-900">{course.fee}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-5 flex items-center gap-3 transition hover:shadow-xl">
          <div className="bg-blue-100 p-3 rounded-lg">
            <FaCertificate className="text-blue-600 text-xl" />
          </div>
          <div>
            <p className="text-sm text-blue-600">Internship</p>
            <p className="font-semibold text-blue-900 text-sm">{course.internship}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full"></span>
              Key Skills You'll Learn
            </h2>
            <div className="flex flex-wrap gap-3">
              {course.skills.map((s, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white border border-blue-200 text-blue-800 rounded-full text-sm font-medium shadow hover:bg-blue-50 transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          {/* Curriculum */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full"></span>
              Step-wise Curriculum
            </h2>
            <CurriculumAccordion curriculum={course.curriculum} />
          </section>

          {/* Outcomes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-600 mr-3 rounded-full"></span>
              Learning Outcomes
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {course.outcomes.map((o, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow p-6 flex items-start gap-3 hover:shadow-md transition group"
                >
                  <FaCheckCircle className="text-blue-600 text-xl mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800">{o}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Course Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold">{course.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Fee:</span>
                <span className="font-semibold text-blue-600">{course.fee}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Internship:</span>
                <span className="font-semibold text-green-600">Included</span>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
                >
                  Enroll Now
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">Limited seats available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enroll CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="opacity-90 mb-6 max-w-2xl mx-auto">
            Enroll today, complete the modules, receive your internship certificate,
            and unlock placement opportunities with our partner companies.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-blue-50 transition"
          >
            Enroll Now for {course.fee}
          </button>
          <p className="mt-4 text-blue-100 text-sm">Limited seats available</p>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentModal 
        course={course} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}