// components/JobListings.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FiMapPin, 
  FiClock, 
  FiDollarSign, 
  FiBriefcase, 
  FiEye, 
  FiSearch, 
  FiCalendar,
  FiFilter
} from 'react-icons/fi';

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
    category: "job",
    details: {
      responsibilities: [
        "Develop and maintain user interfaces using React and Next.js",
        "Collaborate with designers to implement pixel-perfect designs",
        "Optimize applications for maximum performance",
        "Write clean, maintainable, and efficient code"
      ],
      requirements: [
        "3+ years of experience with React",
        "Proficient in TypeScript",
        "Experience with modern CSS frameworks (Tailwind CSS preferred)",
        "Familiarity with RESTful APIs",
        "Strong problem-solving skills"
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
    postedDate: "2023-11-10",
    deadline: "2023-12-10",
    category: "intern",
    details: {
      responsibilities: [
        "Assist with user research and usability testing",
        "Create wireframes and prototypes",
        "Collaborate with product teams",
        "Learn design system principles"
      ],
      requirements: [
        "Portfolio showing design skills",
        "Currently enrolled in design program",
        "Basic Figma knowledge",
        "Eagerness to learn"
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
      responsibilities: [
        "Design, implement and maintain CI/CD pipelines",
        "Manage cloud infrastructure (AWS)",
        "Implement infrastructure as code",
        "Monitor system performance"
      ],
      requirements: [
        "Experience as DevOps Engineer",
        "AWS knowledge",
        "Containerization experience",
        "Infrastructure as code skills"
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
      responsibilities: [
        "Assist with feature development",
        "Write clean, maintainable code",
        "Participate in code reviews",
        "Learn agile methodologies"
      ],
      requirements: [
        "Computer Science student",
        "Basic programming knowledge",
        "Eagerness to learn",
        "Problem-solving skills"
      ]
    }
  }
];

export default function JobListings() {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [jobTypeFilter, setJobTypeFilter] = useState('All');

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getDaysRemaining = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} days left` : 'Closed';
  };

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === 'All' || job.department === departmentFilter;
    const matchesLocation = locationFilter === 'All' || job.location.includes(locationFilter);
    const matchesJobType = jobTypeFilter === 'All' || 
                          (jobTypeFilter === 'intern' && job.category === 'intern') ||
                          (jobTypeFilter === 'job' && job.category !== 'intern');
    
    return matchesSearch && matchesDepartment && matchesLocation && matchesJobType;
  });

  const departments = [...new Set(jobOpenings.map(job => job.department))];
  const locations = [...new Set(jobOpenings.map(job => job.location.split(' ')[0]))];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl -z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-32 h-32 rounded-full bg-blue-500/5 blur-3xl -z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">Join Our Team</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-400/30 -z-0"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore opportunities to grow your career with us
          </p>
        </motion.div>

        {/* Job Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-200/50"
        >
          <div className="flex flex-col gap-6">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search positions..." 
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <div className="relative">
                  <select 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 appearance-none"
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                  >
                    <option value="All">All Departments</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  <FiFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <div className="relative">
                  <select 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 appearance-none"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  >
                    <option value="All">All Locations</option>
                    {locations.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                  <FiFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                <div className="relative">
                  <select 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 appearance-none"
                    value={jobTypeFilter}
                    onChange={(e) => setJobTypeFilter(e.target.value)}
                  >
                    <option value="All">All Types</option>
                    <option value="job">Jobs</option>
                    <option value="intern">Internships</option>
                  </select>
                  <FiFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              <div className="flex items-end">
                <button 
                  className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
                  onClick={() => {
                    setSearchTerm('');
                    setDepartmentFilter('All');
                    setLocationFilter('All');
                    setJobTypeFilter('All');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="grid gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border-l-4 ${job.category === 'intern' ? 'border-purple-500' : 'border-blue-500'} relative overflow-hidden`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-3/4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{job.title}</h3>
                      {job.category === 'intern' && (
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                          Internship
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <FiCalendar className="text-gray-400" />
                      <span>Posted: {formatDate(job.postedDate)}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{job.description}</p>

                    
                    
                    {/* View Details Button - Mobile */}
                    <div className="md:hidden mb-4">
                      <Link href={`/jobs/${job.id}`} passHref>
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className=" w-full md:w-auto px-6 py-2 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                        >
                          View Details <FiEye />
                        </motion.button>
                      </Link>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {job.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                     <Link href={`/apply?id=${job.id}`} passHref >
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          className="mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                        >
                          Apply Now <FiBriefcase />
                        </motion.button>
                      </Link>
                    
                    {/* Meta info - mobile view */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiMapPin className="text-blue-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiClock className="text-blue-500" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiDollarSign className="text-blue-500" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiCalendar className="text-blue-500" />
                        <span>{formatDate(job.deadline)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Job meta - desktop view */}
                  <div className="md:w-1/4">
                    <div className="hidden md:block space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiMapPin className="text-blue-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiClock className="text-blue-500" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiDollarSign className="text-blue-500" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiCalendar className="text-blue-500" />
                        <span>Apply by: {formatDate(job.deadline)}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <div className={`px-4 py-2 rounded-lg text-center font-medium ${
                        getDaysRemaining(job.deadline) === 'Closed' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {getDaysRemaining(job.deadline)}
                      </div>
                      
                      {/* View Details Button - Desktop */}
                      <div className="hidden md:block">
                        <Link href={`/jobs/${job.id}`} passHref>
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full  px-6 py-3 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                          >
                            View Details <FiEye />
                          </motion.button>
                        </Link>
                      </div>

                     
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No matching positions found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search filters or check back later for new opportunities.
              </p>
              <button 
                className="px-6 py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                onClick={() => {
                  setSearchTerm('');
                  setDepartmentFilter('All');
                  setLocationFilter('All');
                  setJobTypeFilter('All');
                }}
              >
                Reset all filters
              </button>
            </motion.div>
          )}
        </div>

        {/* CTA for no matching jobs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-sm border border-gray-200/50 max-w-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Don't see your dream job?</h3>
            <p className="text-gray-600 mb-6">
              We're always interested in meeting talented people. Join our talent network and we'll contact you when matching positions open up.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="jobs/generalApplication" passHref>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                  Submit General Application
                </button>
              </Link>
              <button className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-xl font-medium transition-colors">
                Join Talent Network
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}