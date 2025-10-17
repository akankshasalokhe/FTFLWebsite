import React from 'react';

function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mt-15 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>

      {/* Privacy Policy Content */}
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Privacy Policy for FTFL Technology
          </h2>
          <p className="text-lg font-medium text-gray-600 mb-6">
            Effective Date: 15-10-2025
          </p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong>FTFL Technology</strong> (“we,” “our,” or “us”) is committed to 
            safeguarding the privacy and security of all users interacting with our 
            website <a href="https://www.ftfltechnology.com" className="text-blue-600 hover:underline">https://www.ftfltechnology.com</a> 
            and associated digital services.
          </p>

          <p>
            This Privacy Policy has been developed in full compliance with Indian laws, 
            including the Information Technology Act, 2000, the Information Technology 
            (Reasonable Security Practices and Procedures and Sensitive Personal Data 
            or Information) Rules, 2011, and other applicable regulations governing 
            data protection, cybersecurity, and online privacy.
          </p>

          <p>
            By using our website or services, you explicitly consent to the practices 
            described in this Privacy Policy. This policy applies to all visitors, 
            users, and clients within India and explains in detail the information we 
            collect, how it is used, stored, shared, and protected, along with the 
            rights of users under Indian law.
          </p>

          <p className="font-medium text-gray-800">
            We encourage you to read this document thoroughly to understand our 
            approach to privacy, security, and compliance.
          </p>
        </div>

        {/* Additional Sections Placeholder */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Table of Contents
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Information We Collect
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              How We Use Your Information
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Data Security Measures
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Your Rights Under Indian Law
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Contact Us
        </h3>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="text-blue-600 font-medium mt-2">
          privacy@ftfltechnology.com
        </p>
      </div>
    </div>
  );
}

export default PrivacyPage;