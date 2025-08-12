// pages/apply.js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

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
    title: "UX Designer",
    type: "Full-time",
    location: "Hybrid (NYC)",
    salary: "$85,000 - $110,000",
    department: "Design",
    description: "Create intuitive user experiences for our products",
    tags: ["Figma", "User Research", "Prototyping"],
    details: {
      responsibilities: [
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and high-fidelity designs",
        "Collaborate with product managers and engineers",
        "Maintain and evolve our design system"
      ],
      requirements: [
        "Portfolio demonstrating UX/UI design skills",
        "3+ years of experience in UX design",
        "Proficient in Figma or similar tools",
        "Understanding of user-centered design principles",
        "Excellent communication and collaboration skills"
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
    details: {
      responsibilities: [
        "Design, implement and maintain CI/CD pipelines",
        "Manage and optimize cloud infrastructure (AWS)",
        "Implement infrastructure as code using Terraform",
        "Monitor system performance and troubleshoot issues",
        "Ensure system security and compliance"
      ],
      requirements: [
        "Proven experience as a DevOps Engineer",
        "Strong knowledge of AWS services",
        "Experience with containerization (Docker, Kubernetes)",
        "Proficiency in infrastructure as code (Terraform)",
        "Knowledge of scripting languages (Bash, Python)"
      ]
    }
  }];


export default function ApplyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    workplaceType: '',
    employmentType: '',
    background: '',
    resume: null
  });

  useEffect(() => {
    if (id) {
      const foundJob = jobOpenings.find(job => job.id === Number(id));
      setJob(foundJob);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call, etc.)
    console.log({ ...formData, position: job?.title });
    alert('Application submitted successfully!');
    router.push('/careers');
  };

  if (!job && id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-gray-500">Loading application form...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Application for {job?.title}</h1>
          <p className="text-gray-600 mb-6">Join our {job?.department} team</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Position (disabled dropdown showing current job) */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Position</label>
              <select 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                disabled
              >
                <option>{job?.title}</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email *</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Phone Number *</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Current Location *</label>
              <input 
                type="text" 
                name="location" 
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>

            {/* Workplace Type */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Preferred Workplace Type *</label>
              <select 
                name="workplaceType" 
                value={formData.workplaceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select an option</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
            </div>

            {/* Employment Type */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Preferred Employment Type *</label>
              <select 
                name="employmentType" 
                value={formData.employmentType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select an option</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            {/* Background */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Professional Background *</label>
              <textarea 
                name="background" 
                value={formData.background}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your experience and skills..."
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Upload Resume *</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4">
                    <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      {formData.resume ? (
                        <span className="font-semibold">{formData.resume.name}</span>
                      ) : (
                        <>
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </>
                      )}
                    </p>
                    <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
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
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}