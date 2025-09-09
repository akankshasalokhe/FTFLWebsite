import React from "react";
import Head from "next/head";
import Link from "next/link";

const InternshipCourses = () => {
  const coursesData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, and React through hands-on projects.",
      features: ["Frontend Fundamentals", "Responsive Design", "React Components", "API Integration", "Deployment"],
      duration: "4 weeks"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Data Science",
      description: "Master data analysis, visualization, and machine learning algorithms.",
      features: ["Python", "Data Cleaning", "Visualization", "Machine Learning", "Projects"],
      duration: "6 weeks"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "UI/UX Design",
      description: "Create stunning user interfaces and enhance user experience.",
      features: ["Wireframing", "Prototyping", "Figma & XD", "User Research", "Portfolio"],
      duration: "5 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <Head>
        <title>Internship Courses | CareerBoost</title>
        <meta name="description" content="Browse our internship courses to boost your career" />
      </Head>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Boost Your Career with Our Internships</h2>
          <p className="text-blue-700 mb-12 max-w-2xl mx-auto">Choose from curated courses to gain practical skills, internship certification, and placement opportunities.</p>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {coursesData.map(course => (
              <div key={course.id} className="relative bg-white/30 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
                
                <div className="relative h-64">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-3 py-1 rounded-full shadow-lg">
                    {course.duration}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{course.title}</h3>
                  <p className="text-blue-700 mb-4 text-sm">{course.description}</p>

                  {/* Horizontal Skills Carousel */}
                  <div className="overflow-x-auto no-scrollbar mb-4">
                    <div className="flex gap-3">
                      {course.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="flex-shrink-0 bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm hover:bg-blue-200 transition"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/courses/${course.id}`} className="w-full inline-block">
  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all">
    Learn More
  </button>
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default InternshipCourses;
