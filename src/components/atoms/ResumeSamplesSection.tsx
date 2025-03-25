import { useState } from "react";
import bgSample from "../../assets/bg-sample.jpeg";
import ResumeForm, { FormData } from "./ResumeForm";

//Images resume samples
import artResumeSample01 from "../../assets/resume/Art & Design Resume/01.jpeg";
import artResumeSample02 from "../../assets/resume/Art & Design Resume/02.jpeg";
import artResumeSample03 from "../../assets/resume/Art & Design Resume/03.jpeg";

import corporateResumeSample01 from "../../assets/resume/Corporate & Business/01.jpeg";
import corporateResumeSample02 from "../../assets/resume/Corporate & Business/02.jpeg";
import corporateResumeSample03 from "../../assets/resume/Corporate & Business/03.jpeg";

import educationResumeSample01 from "../../assets/resume/Education Resume/01.jpeg";
import educationResumeSample02 from "../../assets/resume/Education Resume/02.jpeg";
import educationResumeSample03 from "../../assets/resume/Education Resume/03.jpeg";

import realStateResumeSample01 from "../../assets/resume/Real Estate Resume/01.jpeg";
import realStateResumeSample02 from "../../assets/resume/Real Estate Resume/02.jpeg";
import realStateResumeSample03 from "../../assets/resume/Real Estate Resume/03.jpeg";

import iTRresumeSample01 from "../../assets/resume/IT Management/01.jpeg";
import iTRresumeSample02 from "../../assets/resume/IT Management/02.jpeg";
import iTRresumeSample03 from "../../assets/resume/IT Management/03.jpeg";

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
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6 ${className}`}
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
              Custom Written Resume
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
              Our certified resume writers effortlessly build a job-worthy
              resume that gets you hired faster and fits all the HR standards.
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
                        <p className="text-gray-600 text-sm sm:text-base animate-fadeIn">
                          {category.description}
                        </p>
                      )}
                  </div>
                </div>
              ))}

              {/* CTA Button */}
              <div className="mt-8 sm:mt-10">
                <button
                  className="ml-4 px-6 py-3 font-semibold bg-[#2F4376] border border-transparent hover:bg-transparent hover:border-[#2F4376] hover:text-[#2F4376] text-white transition-colors duration-200"
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
                            className="col-span-1 bg-white rounded-md shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl opacity-0 animate-staggeredFadeIn"
                            style={{
                              animationDelay: `${
                                selectedCategoryData.samples.findIndex(
                                  (s) => s.id === sample.id
                                ) * 100
                              }ms`,
                            }}
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

// Sample data with unique image paths for each resume category
const getResumeCategories = (): ResumeCategory[] => {
  // In a real application, you would import all 15 unique images
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
        "Give latent employers a taste of your flair and show your eye for design with professionally written and crafted art & design resume.",
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
        "Showcase your business acumen with a professionally crafted corporate resume that highlights your leadership and management expertise.",
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
        "Highlight your teaching philosophy, education credentials, and instructional achievements with our specialized education resumes.",
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
        "Present your property expertise, sales achievements, and client relationship skills with a professionally crafted real estate resume.",
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
        "Demonstrate your technical leadership, project management skills, and IT expertise with our specialized technology management resumes.",
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

// Add a simple fade-in animation for Tailwind
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
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }

  .animate-staggeredFadeIn {
    animation: staggeredFadeIn 0.5s ease-out forwards;
    opacity: 0;
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
