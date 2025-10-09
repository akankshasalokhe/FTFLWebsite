"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const ServicesSection = () => {
  const [servicesData, setServicesData] = useState([]);
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/service")
      .then((res) => {
        const services = res.data?.data || [];

        if (services.length > 0) {
          // Get unique module names
          const uniqueModules = [
            ...new Set(services.map((item) => item.module)),
          ];
          setModules(uniqueModules);
          setServicesData(services);
          console.log("Fetched services:", services);
        }
      })
      .catch((err) => {
        console.error("API fetch error:", err);
      });
  }, []);

  // Filter titles for selected module
  const filteredTitles = selectedModule
    ? servicesData.filter((item) => item.module === selectedModule)
    : [];

  // Titles for all services
  const allTitles = showAll ? servicesData : [];

  return (
    <section className="w-full mt-[80px] mb-[50px] bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-10 lg:px-16">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            What do you want to do today?
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer transition">
              Scale AI you can trust
            </li>
            <li className="hover:text-gray-900 cursor-pointer transition">
              Transform applications to unlock value
            </li>
            <li className="hover:text-gray-900 cursor-pointer transition">
              Navigate cyber risk with confidence
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Services that drive business results
          </h3>

          {/* Toggle View All */}
          <p
            onClick={() => {
              setShowAll(!showAll);
              setSelectedModule(null);
            }}
            className="text-sm text-blue-600 font-medium mb-4 cursor-pointer hover:underline"
          >
            {showAll ? "Hide all services ↑" : "View all services →"}
          </p>

          <div className="grid grid-cols-2 gap-y-3 text-gray-600">
            {modules.length > 0 ? (
              modules.map((module, index) => (
                <span
                  key={index}
                  onClick={() => {
                    setSelectedModule(
                      selectedModule === module ? null : module
                    );
                    setShowAll(false);
                  }}
                  className={`hover:text-gray-900 cursor-pointer transition ${
                    selectedModule === module
                      ? "font-semibold text-blue-700"
                      : ""
                  }`}
                >
                  {module}
                </span>
              ))
            ) : (
              <p className="text-gray-400 text-sm col-span-2">
                Loading services...
              </p>
            )}
          </div>

          {/* Show titles for selected module */}
          {selectedModule && (
            <div className="mt-5 border-t border-gray-200 pt-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                {selectedModule} Services
              </h4>
              <ul className="space-y-2 text-gray-600">
                {filteredTitles.map((item) => (
                  <li key={item._id}>
                    <Link
                      href={`/services/${item._id}`}
                      className="hover:text-blue-600 transition"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Show all services when View All clicked */}
          {showAll && (
            <div className="mt-5 border-t border-gray-200 pt-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                All Services
              </h4>
              <ul className="space-y-2 text-gray-600">
                {allTitles.map((item) => (
                  <li key={item._id}>
                    <Link
                      href={`/services/${item._id}`}
                      className="hover:text-blue-600 transition"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
