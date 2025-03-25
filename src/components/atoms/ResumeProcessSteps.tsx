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
      title: "Submit your detailed career brief or previous resume",
      description:
        "Sign up with Resume Writers USA to start your project and choose the package you want to go with. Submit your previous resume or you can also submit your detailed career brief to get started.",
    },
    {
      number: 2,
      title: "Get your first professionally written resume draft",
      description:
        "Our Certified professional Resume Writers and Career Coaches discuss your project in detail and start writing a fresh and up-to-date resume that can effortlessly pass through the ATS Scan.",
    },
    {
      number: 3,
      title: "Review your draft & finalize your optimized resume",
      description:
        "Get your first draft of resume and analyze it for any revision. Review the content and ask for revisions, if there are any. Finalize the file of your professionally written resume to move ahead.",
    },
    {
      number: 4,
      title: "Download your final files, You are ready to apply!",
      description:
        "We deliver your final files to you through your dashboard. You can download your final files via client area. Now you are all set to start applying for your dream job with an impressive resume.",
    },
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-8 sm:pb-12">
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
