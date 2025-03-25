import { Users, Lightbulb, BarChart3, Target, LucideProps } from "lucide-react";

// Background image import
import bgImage from "../../assets/bg-process.jpg";
import React from "react";

// Type definitions
interface ProcessStep {
  id: number;
  icon: React.ReactElement<LucideProps>;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

/**
 * A responsive process section component that displays steps with icons.
 *
 * @param title - The main title of the process section
 * @param subtitle - The subtitle displayed below the main title
 * @param steps - Array of process steps to display
 */
const ProcessSection: React.FC<ProcessSectionProps> = ({
  title,
  subtitle,
  steps,
}) => {
  return (
    <section
      className="w-full bg-no-repeat bg-cover py-16 md:py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="mb-12 md:mb-16">
          <p className="text-gray-700 italic text-base sm:text-lg mb-2">
            Comprehensive Process
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 leading-tight">
            {title}
            <span className="block text-[#C11A2F]">{subtitle}</span>
          </h2>

          <div className="w-12 md:w-16 h-[2px] bg-[#C11A2F] mt-4"></div>
        </header>

        {/* Process steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center p-4"
            >
              {/* Icon circle */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 border-gray-200 flex items-center justify-center mb-5 md:mb-6 transition-all duration-300 hover:border-[#C11A2F]">
                {React.cloneElement(step.icon, {
                  size: 48,
                  strokeWidth: 1.5,
                  color: "#4B5563", // text-gray-600 equivalent
                })}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Example implementation of the ProcessSection component.
 */
export const ProcessSectionExample: React.FC = () => {
  const processSteps = [
    {
      id: 1,
      icon: <Users />,
      title: "Submit Career Brief",
      description:
        "Sign up with us and submit your detailed career brief or previous resume.",
    },
    {
      id: 2,
      icon: <Lightbulb />,
      title: "Get Your First Draft",
      description:
        "Our PARWCC experts will write your resume's first draft for you to make tweaks or finalize.",
    },
    {
      id: 3,
      icon: <BarChart3 />,
      title: "Finalize Your Resume",
      description:
        "Review your draft and request for revision, if any. Finalize it to get the final files.",
    },
    {
      id: 4,
      icon: <Target />,
      title: "Download Your Files",
      description:
        "Download your file. Now you are ready to apply for your dream job with a proficient resume.",
    },
  ];

  return (
    <ProcessSection
      title="How our experts create"
      subtitle="Career Ace Resumes"
      steps={processSteps}
    />
  );
};

export default ProcessSection;
