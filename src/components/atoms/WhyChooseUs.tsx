import { useState } from "react";
import ResumeForm, { FormData } from "./ResumeForm";
import {
  Search,
  Briefcase,
  PenTool,
  Layout,
  FileText,
  Award,
} from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
}

interface ResumeWritersSectionProps {
  statistics?: {
    applicantsHelped: number;
    interviewMultiplier: number;
  };
}

const WhyChooseUs: React.FC<ResumeWritersSectionProps> = ({
  statistics = { applicantsHelped: 500000, interviewMultiplier: 3 },
}) => {
  const [showResumeForm, setShowResumeForm] = useState(false);

  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    setShowResumeForm(false);
  };

  const featureItems: FeatureItem[] = [
    {
      icon: <Search size={50} color="#000000" />,
      title: "Keyword Optimized to get through ATS",
    },
    {
      icon: <Briefcase size={50} color="#000000" />,
      title: "Job Placement & Career Transition Support",
    },
    {
      icon: <PenTool size={50} color="#000000" />,
      title: "Multi-Dimensional Certified Resume Writers",
    },
    {
      icon: <Layout size={50} color="#000000" />,
      title: "Market Focused Design Templates",
    },
    {
      icon: <FileText size={50} color="#000000" />,
      title: "Applicant Tracking System Compliant Resume",
    },
    {
      icon: <Award size={50} color="#000000" />,
      title: "Certified Professional Resume Writers (CPRW)",
    },
  ];

  return (
    <>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative z-10 max-w-7xl mx-auto py-12">
          {/* Why Choose Us */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-gray-700 italic">
              Why Choose Us
            </h3>
          </div>

          {/* Main heading */}
          <div className="mt-4 md:flex md:items-center md:justify-between">
            <div className="md:max-w-xl lg:max-w-2xl">
              <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800">
                <span>Broaden Your</span>
                <span className="block mt-4">
                  <span className="text-[#C1371A]">Career Horizons</span> With
                </span>
                <span className="block mt-4">
                  Resume Writers <span className="text-gray-800">USA.</span>
                </span>
              </h2>
            </div>

            <div className="mt-6 md:mt-0 md:max-w-lg lg:max-w-xl">
              <p className="text-sm md:text-base text-gray-700">
                No matter which career, industry, or position you seek, our
                career coaching experts and PARWCC certified writers know how to
                show your value and impact so employers see you as the top
                candidate. With professional resume writing services, we have
                helped more than {statistics.applicantsHelped.toLocaleString()}{" "}
                applicants secure {statistics.interviewMultiplier}x more job
                interviews.
              </p>
            </div>
          </div>

          {/* Green line (visible on md and larger screens) */}
          <div className="hidden md:block mt-6">
            <div className="h-[2px] w-24 bg-[#C1371A]"></div>
          </div>

          {/* Features grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {featureItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <button
              className="ml-4 px-6 py-3 font-semibold bg-[#2F4376] border border-transparent hover:bg-transparent hover:border-[#2F4376] hover:text-[#2F4376] text-white transition-colors duration-200"
              onClick={() => setShowResumeForm(true)}
            >
              Get Your Resume Today!
            </button>
          </div>
        </div>
      </div>
      {showResumeForm && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-brightness-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full mx-4">
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

export default WhyChooseUs;
