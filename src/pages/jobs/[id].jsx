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
  FiBookmark,
  FiAlertTriangle,
  FiCheckCircle,
  FiAward,
  FiUsers,
  FiGlobe
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
  },
  {
    id: 5,
    title: "Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$90,000 - $120,000",
    department: "Engineering",
    description: "Build beautiful, responsive interfaces with React and Next.js",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    postedDate: "2025-11-15",
    deadline: "2025-12-15",
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
  
];

export default function SingleJobView() {
  const router = useRouter();
  const { id } = router.query;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getDeadlineStatus = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 0) {
      return {
        text: 'Closed',
        className: 'bg-red-100 text-red-800',
        icon: <FiAlertTriangle className="mr-1" />
      };
    } else if (diffDays <= 7) {
      return {
        text: `${diffDays} day${diffDays !== 1 ? 's' : ''} left`,
        className: 'bg-orange-100 text-orange-800',
        icon: <FiClock className="mr-1" />
      };
    } else {
      return {
        text: `${diffDays} days left`,
        className: 'bg-green-100 text-green-800',
        icon: <FiCalendar className="mr-1" />
      };
    }
  };

  if (!router.isReady) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-pulse text-gray-500">Loading job details...</div>
    </div>
  );

  const jobId = Number(id);
  const job = jobOpenings.find(job => job.id === jobId);

  const similarJobs = jobOpenings.filter(
    j => j.id !== jobId && 
         j.department === job?.department && 
         j.type === job?.type
  ).slice(0, 3);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md text-center bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Job Not Found</h2>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or may have been removed.</p>
          <button 
            onClick={() => router.push('/careers')}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto"
          >
            <FiArrowLeft /> Back to Careers
          </button>
        </div>
      </div>
    );
  }

  const deadlineStatus = getDeadlineStatus(job.deadline);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.push('/careers')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <FiArrowLeft /> Back to Jobs
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
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Job Overview Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 mb-8"
          >
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      job.department === 'Engineering' ? 'bg-blue-100 text-blue-800' : 
                      job.department === 'Design' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {job.department}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <FiCalendar className="text-gray-400" />
                      Posted: {formatDate(job.postedDate)}
                    </span>
                  </div>
                  
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <p className="text-lg text-gray-600 mb-6">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg">
                      <FiMapPin className="text-blue-600" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg">
                      <FiClock className="text-blue-600" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg">
                      <FiDollarSign className="text-blue-600" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-64 flex flex-col gap-4">
                  <div className={`px-4 py-2 rounded-lg text-center font-medium flex items-center justify-center ${deadlineStatus.className}`}>
                    {deadlineStatus.icon}
                    {deadlineStatus.text}
                  </div>
                  <Link href={`/apply?id=${job.id}`} passHref>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                    >
                      Apply Now <FiBriefcase />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Job Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* About the Role */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FiGlobe className="text-blue-600" />
                  About the Role
                </h2>
                <p className="text-gray-700 leading-relaxed">{job.details.about}</p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FiCheckCircle className="text-blue-600" />
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.details.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="inline-block mt-1 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FiAward className="text-blue-600" />
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.details.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="inline-block mt-1 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Benefits */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FiUsers className="text-blue-600" />
                  Benefits & Perks
                </h2>
                <div className="space-y-3">
                  {job.details.benefits.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <span className="inline-block mt-1 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Apply CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to apply?</h3>
                <p className="text-gray-600 mb-4">Submit your application before {formatDate(job.deadline)}.</p>
                <Link href={`/apply?id=${job.id}`} passHref>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                  >
                    Apply Now <FiBriefcase />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Similar Jobs */}
          {similarJobs.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Jobs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarJobs.map((similarJob) => {
                  const similarDeadlineStatus = getDeadlineStatus(similarJob.deadline);
                  
                  return (
                    <Link href={`/jobs/${similarJob.id}`} key={similarJob.id} passHref>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all cursor-pointer h-full"
                      >
                        <div className="p-6 h-full flex flex-col">
                          <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                                similarJob.department === 'Engineering' ? 'bg-blue-100 text-blue-800' : 
                                similarJob.department === 'Design' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {similarJob.department}
                              </span>
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                <FiClock className="text-gray-400" />
                                {similarJob.type}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{similarJob.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                              {similarJob.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {similarJob.tags.slice(0, 3).map((tag, i) => (
                                <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-auto pt-4 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500 flex items-center gap-1">
                                <FiMapPin className="text-gray-400" />
                                {similarJob.location}
                              </span>
                              <span className={`text-xs px-2 py-1 rounded-full ${similarDeadlineStatus.className}`}>
                                {similarDeadlineStatus.text}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}