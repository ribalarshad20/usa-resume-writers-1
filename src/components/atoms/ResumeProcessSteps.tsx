import React from "react";

// Define a type for the step
type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

// Main Process Steps Component
const ResumeProcessSteps: React.FC = () => {
  // Define steps data
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: "Submit Your Career Details",
      description:
        "Sign up at USA Resume Writers and pick your preferred package. Share your existing resume or provide a detailed career summary so our team can begin crafting a resume that reflects your skills, strengths, and future goals.",
    },
    {
      number: 2,
      title: "Receive Your First Draft",
      description:
        "Our Certified Professional Resume Writers and career experts start building your resume from scratch—modern, keyword-optimized, and tailored to your industry. We ensure it’s aligned with ATS standards to stand out in today’s competitive hiring landscape.",
    },
    {
      number: 3,
      title: "Review and Request Revisions",
      description:
        "We’ll send your resume draft for review. You can check the content, suggest changes, and request revisions. Once you’re happy, we’ll finalize your professionally written, job-ready resume for download.",
    },
    {
      number: 4,
      title: "Download and Start Applying",
      description:
        "Access your polished resume files through your dashboard. Download and start applying confidently—equipped with a resume designed to impress recruiters and easily pass applicant tracking systems.",
    },
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 sm:pb-12">
      {steps.map((step) => (
        <div key={step.number} className="flex items-start mb-16 relative">
          {/* Circular Number */}
          <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-[#2F4376] text-white flex items-center justify-center font-bold z-10 text-2xl shadow-md">
            {step.number}
          </div>

          {/* Vertical Line (except for last step) */}
          {step.number < steps.length && (
            <div className="absolute left-8 top-16 bottom-[-4rem] w-1 bg-[#C11A2F] z-0 opacity-50"></div>
          )}

          {/* Content Container */}
          <div className="pl-24 w-full">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {step.title}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeProcessSteps;
