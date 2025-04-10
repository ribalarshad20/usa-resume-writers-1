import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";

const ThankYouComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Redirects to the main homepage
  };

  useEffect(() => {
    // Inject Google tag script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-11546297911";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11546297911');
    `;
    document.head.appendChild(script2);

    // Event snippet for conversion tracking
    const script3 = document.createElement("script");
    script3.innerHTML = `
      gtag('event', 'conversion', {'send_to': 'AW-11546297911/3vXwCLvd97YaELeM2oEr'});
    `;
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You</h1>
        <h2 className="text-xl md:text-2xl mb-6">For Choosing Us!</h2>

        <div className="text-gray-600 mb-8">
          <p className="mb-2">
            Thanks! We Have Received Your Request. Expect A Quick Reply.
          </p>
          <p>
            Should You Have Any Questions Or Queries, Please Feel Free To
            Contact Our Experts
          </p>
        </div>

        <button
          onClick={handleBackToHome}
          className="px-6 py-3 font-semibold bg-[#C11A2F] border border-transparent hover:bg-transparent hover:border-red-600 hover:text-black text-white transition-colors duration-200"
        >
          Back to Home page
        </button>

        {/* Thumbs Up Icon */}
        <div className="flex justify-center text-[#2F4376] mt-10">
          <FaThumbsUp size={70} />
        </div>
      </div>
    </div>
  );
};

export default ThankYouComponent;
