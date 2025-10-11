



// // components/JobCategories/JobCategories.jsx
// 'use client';

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const roleIcons = {
//   'Marketing & Communication': '📢',
//   'UI/UX Design': '🎨',
//   'Finance Management': '💰',
//   'Web Development': '💻',
//   'Project Management': '📊',
//   'Business & Consulting': '🤝',
//   'Graphic Designer': '✏️',
//   'Video Editor': '🎬',
//   // Fallback mappings based on your API data
//   'Google Developer': '💻',
//   'TypeScript Developer': '💻',
//   'Senior Video Editor': '🎬',
//   'Senior MERN Stack Developer': '💻',
//   'Graphic Designer': '✏️',
//   'Finance Executive (Fresher)': '💰',
//   'Senior Content Writer': '📝',
//   'Senior Digital Marketing Specialist': '📢',
// };

// // Real API integration
// const fetchRoles = async () => {
//   try {
//     const response = await fetch("https://landing-page-yclw.vercel.app/api/job");
//     if (!response.ok) {
//       throw new Error('Failed to fetch roles');
//     }
//     const result = await response.json();
//     console.log('job data:', result);

//     // Access the data array from the response
//     if (!result.success || !result.data) {
//       throw new Error('Invalid API response format');
//     }

//     // Since you don't have jobCount in schema, we'll use 1 or count duplicates
//     const jobCounts = {};
//     result.data.forEach((job) => {
//       jobCounts[job.title] = (jobCounts[job.title] || 0) + 1;
//     });

//     // Get unique roles
//     const uniqueTitles = [...new Set(result.data.map(job => job.title))];

//     return uniqueTitles.map((title, index) => ({
//       id: result.data.find(job => job.title === title)._id || index + 1,
//       title: title,
//       jobCount: jobCounts[title] || 1, // Default to 1 if no count
//       icon: roleIcons[title] || '📋' // Fallback icon
//     }));
//   } catch (error) {
//     console.error('Error in fetchRoles:', error);
//     throw new Error('Failed to fetch roles');
//   }
// };

// function CategoryCard({ role, onCategoryClick }) {
//   const handleClick = () => {
//     onCategoryClick(role.title);
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 
//                  hover:shadow-xl hover:text-white hover:bg-blue-500 
//                  active:bg-blue-500 active:text-white active:shadow-xl
//                  transition-all duration-300 cursor-pointer 
//                  hover:border-blue-300 active:border-blue-300 group
//                  h-40 flex flex-col justify-between"
//     >
//       {/* Icon and Title on same horizontal line */}
//       <div className="flex items-start justify-between mb-4">
//         {/* Title on left */}
//         <h3 className="text-lg font-bold text-gray-900 leading-tight 
//                        group-hover:text-white group-active:text-white
//                    mt-2 flex-1 pr-4">
//           {role.title}
//         </h3>

//         {/* Icon on right */}
//         <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center 
//                        group-hover:bg-blue-400 group-active:bg-blue-400 
//                        transition-colors duration-300 flex-shrink-0 ml-2">
//           <span className="text-xl">{role.icon}</span>
//         </div>
//       </div>

//       {/* Job count positioned at bottom */}
//       <div className="mt-auto">
//         <p className="text-blue-600 font-semibold text-lg 
//                       group-hover:text-white group-active:text-white">
//         {role.jobCount > 1 ? `${role.jobCount} Vacancies Available` : `${role.jobCount} Vacancy Available`}
//         </p>
//       </div>
     
//     </div>
//   );
// }

// // Loading Skeleton Component
// function LoadingSkeleton() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {[...Array(8)].map((_, index) => (
//         <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-pulse h-40 flex flex-col justify-between">
//           <div className="flex items-start justify-between mb-4">
//             <div className="h-6 bg-gray-200 rounded flex-1 pr-4"></div>
//             <div className="w-12 h-12 bg-gray-200 rounded-xl ml-2 flex-shrink-0"></div>
//           </div>
//           <div className="mt-auto">
//             <div className="h-5 bg-gray-200 rounded w-3/4"></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// // Main Page Component - FIXED VERSION
// export default function JobCategory({ onCategoryClick }) {
//   const [roles, setRoles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [vacancyCount, setVacancyCount] = useState([]);

//   useEffect(() => {
//     const loadRoles = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const rolesData = await fetchRoles();
//         setRoles(rolesData);
//       } catch (err) {
//         setError('Failed to load roles');
//         console.error('Error fetching roles:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadRoles();
//   }, []);


//  useEffect(() => {
//     const loadVacancyData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("https://landing-page-yclw.vercel.app/api/vacancycount");
        
//         if (response.data?.success) {
//           const vacancyData = response.data.data || [];
          
//           const formattedRoles = vacancyData.map(vacancy => ({
//             id: vacancy._id,
//             title: vacancy.vacancyRoles,
//             jobCount: parseInt(vacancy.countRoles) || 0,
//             icon: roleIcons[vacancy.vacancyRoles] || '📋'
//           }));
          
//           setRoles(formattedRoles);
//         }
//       } catch (err) {
//         console.error('Error loading vacancy data:', err);
//         setError('Failed to load job categories');
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadVacancyData();
//   }, []);


//   return (
//     <main className="bg-gray-50"> {/* Removed min-h-screen and py-8 */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {/* Removed extra py-12 */}
//         {/* Header - Single heading like in the image */}
//         <div className="text-center mb-12"> {/* Reduced mb-16 to mb-12 */}
//           <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
//             Choose Categories
//           </h1>
//         </div>

//         {/* Error State */}
//         {error && (
//           <div className="text-center text-red-600 mb-8">
//             {error}
//           </div>
//         )}

//         {/* Loading State */}
//         {loading ? (
//           <LoadingSkeleton />
//         ) : (
//           /* Categories Grid */
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {roles.map((role) => (
//               <CategoryCard
//                 key={role.id}
//                 role={role}
//                 onCategoryClick={onCategoryClick}
//               />
//             ))}
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && roles.length === 0 && !error && (
//           <div className="text-center text-gray-500 py-8">
//             No roles available at the moment.
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }









// components/JobCategories/JobCategories.jsx
'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

const roleIcons = {
  'Digital Marketing': '📢',
  'UI/UX Designer': '🎨',
  'Finance Management': '💰',
  'Full Stack Developer': '💻',
  'Flutter Developer': '💻',
  'Project Management': '📊',
  'Business Development Executive (IT Sales)': '🤝',
  'Graphic Designer': '✏️',
  'Video Editor': '🎬',
  'Content Writer': '📝',
  // Fallback mappings based on your API data
  'Senior Video Editor': '🎬',
  'Senior MERN Stack Developer': '💻',
  'Graphic Designer': '✏️',
  'Finance Executive (Fresher)': '💰',
  'Senior Content Writer': '📝',
  'Senior Digital Marketing Specialist': '📢',
};

function CategoryCard({ role, onCategoryClick }) {
  const handleClick = () => {
    onCategoryClick(role.title);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 
                 hover:shadow-xl hover:text-white hover:bg-blue-500 
                 active:bg-blue-500 active:text-white active:shadow-xl
                 transition-all duration-300 cursor-pointer 
                 hover:border-blue-300 active:border-blue-300 group
                 h-40 flex flex-col justify-between"
    >
      {/* Icon and Title on same horizontal line */}
      <div className="flex items-start justify-between mb-4">
        {/* Title on left */}
        <h3 className="text-lg font-bold text-gray-900 leading-tight 
                       group-hover:text-white group-active:text-white
                   mt-2 flex-1 pr-4">
          {role.title}
        </h3>

        {/* Icon on right */}
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center 
                       group-hover:bg-blue-400 group-active:bg-blue-400 
                       transition-colors duration-300 flex-shrink-0 ml-2">
          <span className="text-xl">{role.icon}</span>
        </div>
      </div>

      {/* Job count positioned at bottom */}
      <div className="mt-auto">
        <p className="text-blue-600 font-semibold text-lg 
                      group-hover:text-white group-active:text-white">
          {role.jobCount === 0 ? 'No Vacancies' :
           role.jobCount === 1 ? '1 Vacancy Available' :
           `${role.jobCount} Vacancies Available`}
        </p>
      </div>
    </div>
  );
}

// Loading Skeleton Component
function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-pulse h-40 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="h-6 bg-gray-200 rounded flex-1 pr-4"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-xl ml-2 flex-shrink-0"></div>
          </div>
          <div className="mt-auto">
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Main Page Component - COMBINED API VERSION
export default function JobCategory({ onCategoryClick }) {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch both APIs in parallel for better performance
        const [jobsResponse, vacancyResponse] = await Promise.all([
          axios.get("https://landing-page-yclw.vercel.app/api/job"),
          axios.get("https://landing-page-yclw.vercel.app/api/vacancycount")
        ]);

        console.log('Jobs API response:', jobsResponse.data);
        console.log('Vacancy API response:', vacancyResponse.data);

        // Validate API responses
        if (!jobsResponse.data?.success || !vacancyResponse.data?.success) {
          throw new Error('One or both APIs returned unsuccessful response');
        }

        const jobsData = jobsResponse.data.data || [];
        const vacancyData = vacancyResponse.data.data || [];

        // Create a map of vacancy counts by role name for quick lookup
        const vacancyCountMap = {};
        vacancyData.forEach(vacancy => {
          vacancyCountMap[vacancy.vacancyRoles] = parseInt(vacancy.countRoles) || 0;
        });

        console.log('Vacancy count map:', vacancyCountMap);

        // Get unique job titles from jobs API
        const uniqueJobTitles = [...new Set(jobsData.map(job => job.title))];
        
        console.log('Unique job titles:', uniqueJobTitles);

        // Combine job roles with vacancy counts
        const combinedRoles = uniqueJobTitles.map((title, index) => {
          // Find the corresponding vacancy count, fallback to 1 if not found
          const jobCount = vacancyCountMap[title] || 1;
          
          // Find the original job to get the ID
          const originalJob = jobsData.find(job => job.title === title);
          
          return {
            id: originalJob?._id || `job-${index + 1}`,
            title: title,
            jobCount: jobCount,
            icon: roleIcons[title] || '📋'
          };
        });

        console.log('Combined roles:', combinedRoles);
        setRoles(combinedRoles);

      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load job categories. Please try again later.');
        setRoles([]); // Clear roles on error
      } finally {
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  return (
    <main className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header - Single heading like in the image */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Choose Categories
          </h1>
        </div>

        {/* Error State */}
        {error && (
          <div className="text-center text-red-600 mb-8">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          /* Categories Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role) => (
              <CategoryCard
                key={role.id}
                role={role}
                onCategoryClick={onCategoryClick}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && roles.length === 0 && !error && (
          <div className="text-center text-gray-500 py-8">
            No job roles available at the moment.
          </div>
        )}
      </div>
    </main>
  );
}