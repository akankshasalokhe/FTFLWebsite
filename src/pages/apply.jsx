// pages/apply.js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { FiArrowLeft, FiUpload, FiFileText, FiCheckCircle, FiBriefcase } from 'react-icons/fi';
import axios from 'axios';

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


export default function ApplyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [jobList, setJobList] = useState([]); 
  const [isGeneralApplication, setIsGeneralApplication] = useState(false);
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    department: '',
    workplaceType: '',
    employmentType: '',
    background: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const departments = [
    'Engineering',
    'Design',
    'Product Management',
    'Marketing',
    'Sales',
    'Customer Support',
    'Human Resources',
    'Operations'
  ];


  
  // useEffect(() => {
  //   axios
  //     .get("https://landing-page-yclw.vercel.app/api/job")
  //     .then((res) => {
  //       const blogs = res.data.data;
  //       setJob(blogs);
  
      
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
    
  //   if (id === 'general') {
  //     setIsGeneralApplication(true);
  //   } else if (id) {
  //     // const foundJob = jobOpenings.find(job => job.id === Number(id));
  //     const foundJob = jobOpenings.find(job => job._id === id);

  //     setJob(foundJob);
  //     setIsGeneralApplication(false);
  //   }
  // }, [id]);


  useEffect(() => {
  axios
    .get("https://landing-page-yclw.vercel.app/api/job")
    .then((res) => {
      const jobs = res.data.data;
      setJobList(jobs); // store all jobs
    })
    .catch((err) => console.error(err));
}, []);

useEffect(() => {
  if (!id) return;

  if (id === "general") {
    setIsGeneralApplication(true);
    setJob(null);
  } else {
    const foundJob = jobList.find((j) => String(j._id) === String(id)); 
    setJob(foundJob || null);
    setIsGeneralApplication(false);
  }
}, [id, jobList]);


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (isGeneralApplication) {
      console.log('General Application:', formData);
    } else {
      console.log('Job Application:', { ...formData, position: job?.title });
    }


    const formPayload = new FormData();
    formPayload.append('title', job?.title);
    formPayload.append('fullName', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('phone', formData.phone.toString());
    formPayload.append('location', formData.location);
    formPayload.append('workplacetype', formData.workplaceType);
    formPayload.append('employmenttype', formData.employmentType);
    formPayload.append('background', formData.background);

    if (formData.resume) {
      formPayload.append('resume', formData.resume);
    }
    try {

      const response = await axios.post('https://landing-page-yclw.vercel.app/api/appliedcandidates', formPayload);
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Network response was not ok');
      }

      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting application:', error);
    }

    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  if (!isGeneralApplication && !job && id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="animate-pulse text-gray-500">Loading application form...</div>
        
      </div>
    );
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-200/50 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-6">
              <FiCheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {isGeneralApplication ? 'Application Submitted!' : `Application for ${job?.title} Submitted!`}
            </h1>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              {isGeneralApplication ?
                "Thank you for your interest in our company. We've received your application and will review it for potential opportunities." :
                "We've received your application and will review it shortly."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => router.push('/careers')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
              >
                {isGeneralApplication ? 'View Current Openings' : 'Browse Other Positions'}
              </button>
              <button
                onClick={() => router.push('/')}
                className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-colors"
              >
                Return Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <button
          onClick={() => isGeneralApplication ? router.push('/careers') : router.back()}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          {isGeneralApplication ? 'Back to Careers' : 'Back to Job'}
        </button>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200/30">
          <div className="mb-8 text-center">
            {!isGeneralApplication && (
              <span className={`inline-block px-4 py-1.5 text-sm font-semibold text-white ${job?.department === 'Engineering' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  job?.department === 'Design' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                    'bg-gradient-to-r from-gray-500 to-gray-600'
                } rounded-full mb-4 shadow-sm`}>
                {job?.department}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
              {isGeneralApplication ? 'General Application' : `Apply for ${job?.title}`}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {isGeneralApplication ?
                "Don't see a perfect match? We'd still love to hear from you." :
                `Join our ${job?.department} team`}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-1">
                <label className="block text-sm font-semibold text-gray-700">Full Name *</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="block text-sm font-semibold text-gray-700">Email *</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="block text-sm font-semibold text-gray-700">Phone Number *</label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="(eg): 9879023451"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <label className="block text-sm font-semibold text-gray-700">Current Location *</label>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="City, Country"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Position (only for general application) */}
              {isGeneralApplication && (
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-700">Desired Position *</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g. Frontend Developer"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FiBriefcase className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              )}

              {/* Department (only for general application) */}
              {isGeneralApplication && (
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-700">Department of Interest *</label>
                  <div className="relative">
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all duration-200"
                    >
                      <option value="">Select department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Workplace Type */}
              <div className="space-y-1">
                <label className="block text-sm font-semibold text-gray-700">Workplace Preference *</label>
                <div className="relative">
                  <select
                    name="workplaceType"
                    value={formData.workplaceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all duration-200"
                  >
                    <option value="">Select preference</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On-site</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Employment Type */}
              <div className="space-y-1">
                <label className="block text-sm font-semibold text-gray-700">Employment Type *</label>
                <div className="relative">
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all duration-200"
                  >
                    <option value="">Select type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Background */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">Professional Background *</label>
              <textarea
                name="background"
                value={formData.background}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder={
                  isGeneralApplication ?
                    "Tell us about your skills, experience, and what you're looking for in your next role..." :
                    "Tell us about your relevant experience, skills, and why you're a good fit for this role..."
                }
              />
            </div>

            {/* Resume Upload */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700">Resume/CV *</label>
              <label className="flex flex-col items-center justify-center w-full p-6 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group">
                <div className="flex flex-col items-center justify-center text-center">
                  {formData.resume ? (
                    <>
                      <FiFileText className="w-10 h-10 mb-3 text-blue-500 group-hover:text-blue-600 transition-colors" />
                      <p className="font-medium text-gray-700 group-hover:text-gray-800 transition-colors">
                        {formData.resume.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-600 transition-colors">
                        Click to change file
                      </p>
                    </>
                  ) : (
                    <>
                      <FiUpload className="w-10 h-10 mb-3 text-gray-400 group-hover:text-gray-500 transition-colors" />
                      <p className="mb-1 text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                        <span className="font-medium">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                        PDF, DOC, DOCX (MAX. 5MB)
                      </p>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                />
              </label>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded transition-colors"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="consent" className="text-gray-700">
                  I consent to having my data collected and stored according to the{' '}
                  <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">privacy policy</a>.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-200 ${isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg'
                  } text-white flex items-center justify-center gap-2`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    {isGeneralApplication ? 'Submit General Application' : 'Submit Application'}
                    <FiBriefcase className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}