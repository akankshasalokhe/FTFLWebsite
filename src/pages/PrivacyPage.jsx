import axios from "axios";
import React, { useEffect, useState } from "react";

function PrivacyPage() {
  const [policyData, setPolicyData] = useState(null);

  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/privacypolicy")
      .then((res) => {
        const data = res.data.data || [];
        if (data.length > 0) {
          setPolicyData(data[0]); // ✅ get the first policy object
        }
        console.log("Privacy Policy Data:", data);
      })
      .catch((err) => {
        console.error("Privacy Policy API fetch error:", err);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {policyData ? (
        <>
          {/* Header Section */}
          <header className="mb-8 mt-12">
            
            {/* <p className="text-gray-500 text-sm">
              Last updated:{" "}
              {new Date(policyData.updatedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p> */}
          </header>

          {/* Render HTML Content */}
          <div
            className="prose max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: policyData.content }}
          />
        </>
      ) : (
        <p className="text-center mt-15 text-gray-500">Loading Privacy Policy...</p>
      )}
    </div>
  );
}

export default PrivacyPage;
