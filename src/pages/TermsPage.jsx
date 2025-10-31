import axios from "axios";
import React, { useEffect, useState } from "react";

function TermsPage() {
  const [termsData, setTermsData] = useState(null);

  useEffect(() => {
    axios
      .get("https://landing-page-yclw.vercel.app/api/termscondition")
      .then((res) => {
        const data = res.data.data || [];
        if (data.length > 0) {
          setTermsData(data[0]); // ✅ get the first terms object
        }
        console.log("Terms and Conditions Data:", data);
      })
      .catch((err) => {
        console.error("Terms and Conditions API fetch error:", err);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {termsData ? (
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
            dangerouslySetInnerHTML={{ __html: termsData.content }}
          />
        </>
      ) : (
        <p className="text-center mt-15 text-gray-500">Loading Terms and Conditions...</p>
      )}
    </div>
  );
}

export default TermsPage;
