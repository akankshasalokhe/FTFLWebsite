"use client";

import Link from "next/link";
import { FaRocket, FaHandshake, FaUsers, FaLightbulb, FaArrowRight } from "react-icons/fa";

const JoinOurTeam = () => {
  const perks = [
    {
      icon: <FaRocket className="w-5 h-5" />,
      title: "Innovative Projects",
      description: "Work with modern tech stacks on cutting-edge products"
    },
    {
      icon: <FaHandshake className="w-5 h-5" />,
      title: "Flexible Culture",
      description: "Hybrid/remote options with work-life balance"
    },
    {
      icon: <FaUsers className="w-5 h-5" />,
      title: "Expert Team",
      description: "Collaborate with top industry professionals"
    },
    {
      icon: <FaLightbulb className="w-5 h-5" />,
      title: "Growth Path",
      description: "Sponsored courses and conference opportunities"
    }
  ];

  return (
    <section className="py-16  px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">Environment</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're hiring creative minds to build the future together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {perks.map((perk, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-500 hover:shadow-md group"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                {perk.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{perk.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{perk.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          {/* <button className="px-6 py-3 bg-gradient-to-r from-[#298cf3] to-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors inline-flex items-center gap-2">
            View Open Roles <FaArrowRight className="w-4 h-4" />
          </button> */}
          <Link href="mailto:info@ftfltechnology.com">
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              Send your resume to <span className="font-medium text-blue-600 dark:text-blue-400">info@ftfltechnology.com</span>
            </p>
          </Link>
         
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;