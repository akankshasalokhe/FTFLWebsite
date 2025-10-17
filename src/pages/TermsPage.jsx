import React from 'react';

function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mt-15 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Terms and Conditions
        </h1>
        <div className="w-20 h-1 bg-green-600 mx-auto"></div>
      </div>

      {/* Terms and Conditions Content */}
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Terms and Conditions for FTFL Technology
          </h2>
          <p className="text-lg font-medium text-gray-600 mb-6">
            Effective Date: 15-10-2025
          </p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to <strong>FTFL Technology</strong> (“we,” “our,” or “us”). 
            By accessing or using our website{' '}
            <a 
              href="https://www.ftfltechnology.com" 
              className="text-green-600 hover:underline font-medium"
            >
              https://www.ftfltechnology.com
            </a>{' '}
            (“Site”) and related services, you agree to comply with and be bound 
            by these Terms and Conditions (“T&C”).
          </p>

          <p>
            These T&C govern your access to and use of the Site and services 
            provided by FTFL Technology in India. If you do not agree to these 
            terms, please refrain from using our website or services.
          </p>

          <p>
            These T&C are designed to ensure legal compliance under Indian laws, 
            including:
          </p>

          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li>The Information Technology Act, 2000</li>
            <li>
              The IT (Reasonable Security Practices and Procedures and Sensitive 
              Personal Data or Information) Rules, 2011
            </li>
            <li>The Indian Contract Act, 1872</li>
            <li>
              Other applicable regulations concerning digital transactions, 
              intellectual property, and online conduct
            </li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Important:</strong> By using our website, you acknowledge 
                  that you have read, understood, and agree to be bound by these 
                  Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections Placeholder */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Key Sections
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>User Responsibilities and Conduct</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Intellectual Property Rights</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Service Modifications and Availability</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Limitation of Liability</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Governing Law and Dispute Resolution</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-8 bg-green-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Questions About These Terms?
        </h3>
        <p className="text-gray-600 mb-2">
          If you have any questions regarding these Terms and Conditions, please contact us:
        </p>
        <p className="text-green-600 font-medium">
          legal@ftfltechnology.com
        </p>
      </div>

      {/* Last Updated */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        Last updated: October 15, 2025
      </div>
    </div>
  );
}

export default TermsPage;