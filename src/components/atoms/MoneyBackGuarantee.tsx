import React, { useState } from "react";
import tick from "../../assets/money-back-tick.png";
import ResumeForm, { FormData } from "./ResumeForm";

interface MoneyBackGuaranteeProps {
  onGetStartedClick?: () => void;
}

const MoneyBackGuarantee: React.FC<MoneyBackGuaranteeProps> = () => {
  const [showResumeForm, setShowResumeForm] = useState(false);

  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    setShowResumeForm(false);
  };

  return (
    <>
      <div className="bg-gray-900 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8 sm:pb-12 rounded-2xl mb-12 mt-12 md:rounded-4xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-40 h-40 md:w-40 md:h-40 relative">
            <img
              src={tick}
              alt="Money Back Guarantee"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center pt-8 md:pt-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Money Back Guarantee
          </h2>
          <p className="text-gray-300 mb-6 md:mb-8 px-2 sm:px-4 md:px-0 text-base md:text-lg">
            We guarantee complete satisfaction with our resume writing services.
            If we are unable to deliver your ATS-optimized resume within the
            promised timeframe, let us know, and we will provide a full refund
            within 15 days.
          </p>

          {/* Get Started Button */}
          <button
            onClick={() => setShowResumeForm(true)}
            className="rounded-lg px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold bg-[#2F4376] border border-transparent hover:bg-transparent hover:border-white hover:text-white text-white transition-colors duration-200 cursor-pointer"
          >
            I am Ready, Let's Get Started
          </button>
        </div>
      </div>

      {showResumeForm && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-brightness-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl mx-auto max-h-[90vh] overflow-y-auto">
            <ResumeForm
              onSubmit={handleFormSubmit}
              onClose={() => setShowResumeForm(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MoneyBackGuarantee;
