import { useState } from "react";
import ResumeForm, { FormData } from "../ResumeForm";

interface ResumeServiceComponentProps {
  title1?: string;
  title2?: string;
  description?: string;
  imageSrc: string;
  onButtonClick?: () => void;
}

const ServiceFeatures: React.FC<ResumeServiceComponentProps> = ({
  title1 = "ATS Compliant",
  title2 = "Resume Writing Service",
  description = "Get picked by corporates and multinationals of the market even before going through the process of interview. Resume Writers USA has a self-motivated and energetic team of certified professional resume writers and HR professionals with ample knowledge in analyzing and crafting powerful resumes for niche industries. No matter what your experience is, Resume Writers USA is here to make you appear adroit by highlighting your core expertise.",
  imageSrc,
  onButtonClick,
}) => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    // Process the form data here
    setShowForm(false);
    // You might want to show a success message or redirect
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center pt-30 pb-16">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={imageSrc}
            alt="Resume Writing"
            className="w-full max-w-[580px] h-auto md:h-[600px] rounded shadow border-2 border-[#2F4376]"
          />
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 md:pl-4">
          <div className="flex items-center mb-4">
            {/* Vertical green line */}
            <div className="w-[3px] h-20 bg-[#C11A2F] mr-3"></div>
            <div>
              <h2 className="text-4xl font-bold text-[#C11A2F]">{title1}</h2>
              <h2 className="text-4xl font-bold text-[#C11A2F]">{title2}</h2>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            {description}
          </p>
          <button
            type="button"
            onClick={handleButtonClick}
            className="w-full sm:w-52 px-6 py-3 font-semibold bg-[#C11A2F] border border-transparent hover:text-black hover:bg-transparent hover:border-red-600 text-white transition-colors duration-200"
          >
            Start Your Project
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {showForm && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-brightness-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full mx-4">
            <ResumeForm onSubmit={handleFormSubmit} onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceFeatures;
