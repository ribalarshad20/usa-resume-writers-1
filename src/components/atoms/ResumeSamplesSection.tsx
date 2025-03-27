import { useState } from "react";
import bgSample from "../../assets/bg-sample.jpeg";
import ResumeForm, { FormData } from "./ResumeForm";

// Images resume samples
import artResumeSample01 from "../../assets/resumeSamples/1 Art & Design Resume.png";
import artResumeSample02 from "../../assets/resumeSamples/2 Art & Design Resume.png";
import artResumeSample03 from "../../assets/resumeSamples/3 Art & Design Resume.png";

import corporateResumeSample01 from "../../assets/resumeSamples/1 Corporate_Business.png";
import corporateResumeSample02 from "../../assets/resumeSamples/2 Corporate_Business.png";
import corporateResumeSample03 from "../../assets/resumeSamples/3 Corporate_Business.png";

import educationResumeSample01 from "../../assets/resumeSamples/1 Education Resume.png";
import educationResumeSample02 from "../../assets/resumeSamples/2 Education Resume.png";
import educationResumeSample03 from "../../assets/resumeSamples/3 Education Resume.png";

import realStateResumeSample01 from "../../assets/resumeSamples/1 Real Estate Resume.png";
import realStateResumeSample02 from "../../assets/resumeSamples/2 Real Estate Resume.png";
import realStateResumeSample03 from "../../assets/resumeSamples/3 Real Estate Resume.png";

import iTRresumeSample01 from "../../assets/resumeSamples/1 IT Management.png";
import iTRresumeSample02 from "../../assets/resumeSamples/2 IT Management.png";
import iTRresumeSample03 from "../../assets/resumeSamples/3 IT Management.png";
import ImagePopup from "./ImagePopup";

interface ResumeCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description?: string;
  samples: ResumeSample[];
}

interface ResumeSample {
  id: string;
  image: string;
  title: string;
}

interface ResumeSamplesSectionProps {
  categories: ResumeCategory[];
  className?: string;
}

/**
 * ResumeSamplesSection - A fully responsive component displaying resume categories
 * with interactive selection and dynamic sample display
 */
const ResumeSamplesSection: React.FC<ResumeSamplesSectionProps> = ({
  categories,
  className = "",
}) => {
  const [showResumeForm, setShowResumeForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories?.[0]?.id ?? ""
  );
  // New state to track the selected resume sample for the popup
  const [selectedSample, setSelectedSample] = useState<ResumeSample | null>(
    null
  );

  // Handler for form submission (example: log the form data and close the modal)
  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    setShowResumeForm(false);
  };

  if (!categories || categories.length === 0) {
    return null;
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const selectedCategoryData = categories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <>
      <section
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 ${className}`}
        aria-labelledby="resume-samples-title"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[#C11A2F] text-lg font-medium block mb-2 sm:mb-3">
              Work Samples
            </span>
            <h2
              id="resume-samples-title"
              className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            >
              Expert-Crafted Resume Samples
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
              Our resume writers create polished, custom resumes that meet
              hiring standards and help you land interviews faster than ever.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
            {/* Resume Categories Section - takes 5 columns on large screens */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`flex items-start cursor-pointer transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "hover:translate-x-2"
                      : "hover:translate-x-1 opacity-70"
                  }`}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 mt-1 ${
                      selectedCategory === category.id
                        ? "text-[#C11A2F]"
                        : "text-gray-400"
                    }`}
                  >
                    {category.icon}
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3
                      className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 ${
                        selectedCategory === category.id
                          ? "text-[#C11A2F]"
                          : "text-gray-600"
                      }`}
                    >
                      {category.title}
                    </h3>
                    {selectedCategory === category.id &&
                      category.description && (
                        <p className="text-gray-600 text-sm sm:text-base animate-fadeIn text-justify">
                          {category.description}
                        </p>
                      )}
                  </div>
                </div>
              ))}

              {/* CTA Button */}
              <div className="mt-8 sm:mt-10">
                <button
                  className="px-6 py-3 font-semibold bg-[#2F4376] border border-transparent hover:bg-transparent hover:border-[#2F4376] hover:text-[#2F4376] text-white transition-colors duration-200"
                  aria-label="Request for more resume samples"
                  onClick={() => setShowResumeForm(true)}
                >
                  Request For More Samples
                </button>
              </div>
            </div>

            {/* Samples Display Section - takes 7 columns on large screens */}
            <div className="lg:col-span-7 mt-6 lg:mt-0 relative">
              <div className="relative h-96 lg:h-full">
                {/* Background Image Container */}
                <div className="absolute right-0 top-0 w-3/4 h-full rounded-md overflow-hidden shadow-lg">
                  <img
                    src={bgSample}
                    alt="Resume background"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Resume Samples Overlay */}
                <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-center">
                  {selectedCategoryData && (
                    <div className="animate-fadeIn w-full">
                      {/* Resume samples grid with smooth transitions */}
                      <div
                        key={selectedCategory} // Key to trigger re-render and animation
                        className="grid grid-cols-3 gap-4 relative"
                      >
                        {selectedCategoryData.samples.map((sample) => (
                          <div
                            key={sample.id}
                            className="cursor-pointer col-span-1 bg-white rounded-md shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl opacity-0 animate-staggeredFadeIn"
                            style={{
                              animationDelay: `${
                                selectedCategoryData.samples.findIndex(
                                  (s) => s.id === sample.id
                                ) * 100
                              }ms`,
                            }}
                            onClick={() => setSelectedSample(sample)}
                          >
                            <div className="aspect-w-3 aspect-h-4 w-full">
                              <img
                                src={sample.image}
                                alt={`${sample.title} resume sample`}
                                className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-105"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Form Modal */}
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

      {/* Popup Modal for Selected Resume Sample */}
      {selectedSample && (
        <ImagePopup
          selectedSample={selectedSample}
          onClose={() => setSelectedSample(null)}
        />
      )}
    </>
  );
};

// Sample data with unique image paths for each resume category
const getResumeCategories = (): ResumeCategory[] => {
  return [
    {
      id: "art-design",
      title: "Art & Design Resume",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.5" />
          <line x1="8" y1="21" x2="16" y2="21" strokeWidth="1.5" />
          <line x1="12" y1="17" x2="12" y2="21" strokeWidth="1.5" />
          <path d="M6 7h4v4H6z" strokeWidth="1.5" />
          <path d="M14 7h4v4h-4z" strokeWidth="1.5" />
        </svg>
      ),
      description:
        "Showcase your artistic style and creative thinking with a custom resume designed to capture attention and reflect your unique talent in the design world.",
      samples: [
        {
          id: "art-1",
          image: artResumeSample01,
          title: "Graphic Design CV",
        },
        {
          id: "art-2",
          image: artResumeSample02,
          title: "UX/UI Designer",
        },
        {
          id: "art-3",
          image: artResumeSample03,
          title: "Creative Director",
        },
      ],
    },
    {
      id: "corporate",
      title: "Corporate/Business",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" strokeWidth="1.5" />
          <path
            d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v5M8 12v2M16 12v2"
            strokeWidth="1.5"
          />
        </svg>
      ),
      description:
        "A one-size-fits-all resume won’t cut it. We craft business resumes tailored to your goals, company culture, and the role you’re targeting.",
      samples: [
        {
          id: "corp-1",
          image: corporateResumeSample01,
          title: "Executive Resume",
        },
        {
          id: "corp-2",
          image: corporateResumeSample02,
          title: "Business Analyst",
        },
        {
          id: "corp-3",
          image: corporateResumeSample03,
          title: "Project Manager",
        },
      ],
    },
    {
      id: "education",
      title: "Education Resume",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth="1.5" />
          <path d="M12 14v6M4.5 9.5v5a2.5 2.5 0 005 0v-5" strokeWidth="1.5" />
        </svg>
      ),
      description:
        "Land your next role in academia with a resume that highlights your teaching experience, certifications, classroom impact, and passion for shaping future minds.",
      samples: [
        {
          id: "edu-1",
          image: educationResumeSample01,
          title: "Teacher Resume",
        },
        {
          id: "edu-2",
          image: educationResumeSample02,
          title: "Professor CV",
        },
        {
          id: "edu-3",
          image: educationResumeSample03,
          title: "School Administrator",
        },
      ],
    },
    {
      id: "real-estate",
      title: "Real Estate Resume",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      description:
        "Stand out in property sales with a real estate resume that focuses on client service, negotiation skills, and your ability to close deals.",
      samples: [
        {
          id: "real-1",
          image: realStateResumeSample01,
          title: "Realtor Resume",
        },
        {
          id: "real-2",
          image: realStateResumeSample02,
          title: "Property Manager",
        },
        {
          id: "real-3",
          image: realStateResumeSample03,
          title: "Commercial Agent",
        },
      ],
    },
    {
      id: "it-management",
      title: "IT Management",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      description:
        "Get noticed in tech leadership with a resume built to showcase your strategic mindset, technical know-how, and ability to drive innovation across teams.",
      samples: [
        {
          id: "it-1",
          image: iTRresumeSample01,
          title: "IT Director",
        },
        {
          id: "it-2",
          image: iTRresumeSample02,
          title: "CTO Resume",
        },
        {
          id: "it-3",
          image: iTRresumeSample03,
          title: "DevOps Manager",
        },
      ],
    },
  ];
};

// Add custom animations for Tailwind including the new scaleUp animation
const customStyles = `
  @keyframes fadeIn {
    from { 
      opacity: 0; 
      transform: translateY(20px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  @keyframes staggeredFadeIn {
    from { 
      opacity: 0; 
      transform: scale(0.9); 
    }
    to { 
      opacity: 1; 
      transform: scale(1); 
    }
  }
  
  @keyframes scaleUp {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }

  .animate-staggeredFadeIn {
    animation: staggeredFadeIn 0.5s ease-out forwards;
    opacity: 0;
  }
  
  .animate-scaleUp {
    animation: scaleUp 0.3s ease-out forwards;
  }
`;

// Main component with separated concerns
const ResumeSamplesPage: React.FC = () => {
  const resumeCategories = getResumeCategories();

  return (
    <>
      <style>{customStyles}</style>
      <ResumeSamplesSection categories={resumeCategories} />
    </>
  );
};

export default ResumeSamplesPage;
