import { useState } from "react";
import bgImage from "../../assets/conquer-bg.jpeg";
import ResumeForm, { FormData } from "./ResumeForm";

interface CareerSolutionsSectionProps {
  title: string;
  subtitle: string;
  description: string;
  logos: { src: string; alt: string }[];
}

const CareerSolutionsSection: React.FC<CareerSolutionsSectionProps> = ({
  title,
  subtitle,
  description,
  logos,
}) => {
  const [showResumeForm, setShowResumeForm] = useState(false);

  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    setShowResumeForm(false);
  };
  return (
    <>
      <div
        className="w-full bg-cover bg-center bg-no-repeat pt-8 pb-8"
        style={{
          backgroundImage: `url(${bgImage})`,
          minHeight: "40vh",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 pr-0 lg:pr-8">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                {title}
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                {subtitle}
              </h2>
              <div className="w-16 h-1 bg-blue-700 mb-4"></div>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                {description}
              </p>
              <div className="flex flex-wrap items-center mb-6 gap-6">
                {logos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-6 md:h-8 filter grayscale hover:grayscale-0 transition duration-300"
                  />
                ))}
              </div>
              <button
                onClick={() => setShowResumeForm(true)}
                className="mt-3 px-6 py-3 font-semibold bg-[#2F4376] border border-transparent hover:bg-transparent hover:border-[#2F4376] hover:text-[#2F4376] text-white transition-colors duration-200"
              >
                Get Started Now!
              </button>
            </div>
          </div>
        </div>
      </div>

      {showResumeForm && (
        <div className="fixed inset-0  bg-opacity-30 backdrop-brightness-30 flex justify-center items-center z-50">
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

export default CareerSolutionsSection;
