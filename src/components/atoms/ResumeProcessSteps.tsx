import React from "react";

const steps = [
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

const ResumeStepsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="relative space-y-24">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-6 top-6 bottom-6 w-px bg-green-300"></div>

        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col md:flex-row gap-6 md:gap-10 items-start relative"
          >
            <div className="flex-shrink-0 relative z-10">
              <div className="w-12 h-12 rounded-full bg-green-400 text-white flex items-center justify-center text-lg font-semibold">
                {step.number}
              </div>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeStepsSection;
