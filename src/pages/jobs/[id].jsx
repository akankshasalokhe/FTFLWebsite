// components/SingleJobView.js
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { 
  FiMapPin, 
  FiClock, 
  FiDollarSign, 
  FiBriefcase, 
  FiArrowLeft,
  FiCalendar,
  FiShare2,
  FiBookmark
} from 'react-icons/fi';
import Link from 'next/link';

const jobOpenings = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$90,000 - $120,000",
    department: "Engineering",
    description: "Build beautiful, responsive interfaces with React and Next.js",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    postedDate: "2023-11-15",
    deadline: "2023-12-15",
    details: {
      about: "Join our engineering team to build cutting-edge web applications that serve millions of users worldwide. We value clean code, thoughtful architecture, and exceptional user experiences.",
      responsibilities: [
        "Develop and maintain user interfaces using React and Next.js",
        "Collaborate with designers to implement pixel-perfect designs",
        "Optimize applications for maximum performance",
        "Write clean, maintainable, and efficient code",
        "Participate in code reviews and architectural discussions"
      ],
      requirements: [
        "3+ years of experience with React",
        "Proficient in TypeScript",
        "Experience with modern CSS frameworks (Tailwind CSS preferred)",
        "Familiarity with RESTful APIs",
        "Strong problem-solving skills",
        "Experience with testing frameworks (Jest, Cypress)"
      ],
      benefits: [
        "Competitive salary and equity options",
        "Fully remote work environment",
        "Flexible working hours",
        "Health, dental, and vision insurance",
        "Professional development budget",
        "Quarterly team retreats"
      ]
    }
  },
  {
    id: 2,
    title: "UX Design Intern",
    type: "Internship",
    location: "Hybrid (NYC)",
    salary: "$25 - $35/hr",
    department: "Design",
    description: "Learn to create intuitive user experiences for our products",
    tags: ["Figma", "User Research", "Prototyping"],
    postedDate: "2023-11-20",
    deadline: "2023-12-10",
    category: "intern",
     details: {
      about: "Join our engineering team to build cutting-edge web applications that serve millions of users worldwide. We value clean code, thoughtful architecture, and exceptional user experiences.",
      responsibilities: [
        "Develop and maintain user interfaces using React and Next.js",
        "Collaborate with designers to implement pixel-perfect designs",
        "Optimize applications for maximum performance",
        "Write clean, maintainable, and efficient code",
        "Participate in code reviews and architectural discussions"
      ],
      requirements: [
        "3+ years of experience with React",
        "Proficient in TypeScript",
        "Experience with modern CSS frameworks (Tailwind CSS preferred)",
        "Familiarity with RESTful APIs",
        "Strong problem-solving skills",
        "Experience with testing frameworks (Jest, Cypress)"
      ],
      benefits: [
        "Competitive salary and equity options",
        "Fully remote work environment",
        "Flexible working hours",
        "Health, dental, and vision insurance",
        "Professional development budget",
        "Quarterly team retreats"
      ]
    }
  },
  {
    id: 3,
    title: "DevOps Engineer",
    type: "Contract",
    location: "Remote",
    salary: "$70 - $90/hr",
    department: "Engineering",
    description: "Build and maintain our cloud infrastructure",
    tags: ["AWS", "Terraform", "Docker"],
    postedDate: "2023-11-20",
    deadline: "2023-12-20",
    category: "job",
     details: {
      about: "Join our engineering team to build cutting-edge web applications that serve millions of users worldwide. We value clean code, thoughtful architecture, and exceptional user experiences.",
      responsibilities: [
        "Develop and maintain user interfaces using React and Next.js",
        "Collaborate with designers to implement pixel-perfect designs",
        "Optimize applications for maximum performance",
        "Write clean, maintainable, and efficient code",
        "Participate in code reviews and architectural discussions"
      ],
      requirements: [
        "3+ years of experience with React",
        "Proficient in TypeScript",
        "Experience with modern CSS frameworks (Tailwind CSS preferred)",
        "Familiarity with RESTful APIs",
        "Strong problem-solving skills",
        "Experience with testing frameworks (Jest, Cypress)"
      ],
      benefits: [
        "Competitive salary and equity options",
        "Fully remote work environment",
        "Flexible working hours",
        "Health, dental, and vision insurance",
        "Professional development budget",
        "Quarterly team retreats"
      ]
    }
  },
  {
    id: 4,
    title: "Software Engineering Intern",
    type: "Internship",
    location: "Remote",
    salary: "$30 - $40/hr",
    department: "Engineering",
    description: "Gain real-world experience building software",
    tags: ["JavaScript", "React", "Node.js"],
    postedDate: "2025-08-10",
    deadline: "2025-09-10",
    category: "intern",
    details: {
      about: "Join our engineering team to build cutting-edge web applications that serve millions of users worldwide. We value clean code, thoughtful architecture, and exceptional user experiences.",
      responsibilities: [
        "Develop and maintain user interfaces using React and Next.js",
        "Collaborate with designers to implement pixel-perfect designs",
        "Optimize applications for maximum performance",
        "Write clean, maintainable, and efficient code",
        "Participate in code reviews and architectural discussions"
      ],
      requirements: [
        "3+ years of experience with React",
        "Proficient in TypeScript",
        "Experience with modern CSS frameworks (Tailwind CSS preferred)",
        "Familiarity with RESTful APIs",
        "Strong problem-solving skills",
        "Experience with testing frameworks (Jest, Cypress)"
      ],
      benefits: [
        "Competitive salary and equity options",
        "Fully remote work environment",
        "Flexible working hours",
        "Health, dental, and vision insurance",
        "Professional development budget",
        "Quarterly team retreats"
      ]
    }
  }
];

export default function SingleJobView() {
  const router = useRouter();
  const { id } = router.query;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getDaysRemaining = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} days remaining` : 'Application closed';
  };

  if (!router.isReady) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="animate-pulse text-gray-500">Loading job details...</div>
    </div>
  );

  const jobId = Number(id);
  const job = jobOpenings.find(job => job.id === jobId);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="max-w-md text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-200/50">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Job Not Found</h2>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or may have been removed.</p>
          <button 
            onClick={() => router.push('/careers')}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors flex items-center gap-2 mx-auto"
          >
            <FiArrowLeft /> Back to Careers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.push('/careers')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <FiArrowLeft /> Back to Careers
            </button>
            <div className="flex gap-3">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FiBookmark />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FiShare2 />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200/50"
        >
          {/* Job Header */}
          <div className="p-6 md:p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold text-white ${
                    job.department === 'Engineering' ? 'bg-blue-600' : 
                    job.department === 'Design' ? 'bg-purple-600' : 'bg-gray-600'
                  } rounded-full`}>
                    {job.department}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <FiCalendar className="text-gray-400" />
                    Posted: {formatDate(job.postedDate)}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{job.title}</h1>
                <p className="text-lg text-gray-600 mt-2">{job.description}</p>
              </div>
              <div className="flex flex-col gap-3 min-w-[200px]">
                <div className={`px-4 py-2 rounded-lg text-center font-medium ${
                  getDaysRemaining(job.deadline).includes('closed') 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {getDaysRemaining(job.deadline)}
                </div>
                <Link href={`/apply?id=${job.id}`} passHref>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                  >
                    Apply Now <FiBriefcase />
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Meta Info */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200/50 shadow-xs">
                <FiMapPin className="text-blue-600" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200/50 shadow-xs">
                <FiClock className="text-blue-600" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200/50 shadow-xs">
                <FiDollarSign className="text-blue-600" />
                <span>{job.salary}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {job.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm rounded-full shadow-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Job Details */}
          <div className="p-6 md:p-8">
            {/* About the Role */}
            {job.details.about && (
              <div className="mb-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About the Role</h2>
                <p className="text-gray-700 leading-relaxed">{job.details.about}</p>
              </div>
            )}

            {/* Responsibilities */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.details.responsibilities.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                  >
                    <span className="inline-block mt-1 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.details.requirements.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                  >
                    <span className="inline-block mt-1 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            {job.details.benefits && (
              <div className="mb-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits & Perks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {job.details.benefits.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg"
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Apply CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8 rounded-xl border border-gray-200/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Ready to apply?</h3>
                  <p className="text-gray-600 max-w-2xl">We're excited to hear from you! Submit your application before {formatDate(job.deadline)} and our team will review it shortly.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={`/apply?id=${job.id}`} passHref>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                    >
                      Apply Now <FiBriefcase />
                    </motion.button>
                  </Link>
                  <button
                    onClick={() => router.push('/careers')}
                    className="px-6 py-3 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                  >
                    Browse Other Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}