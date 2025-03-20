import React, { useState } from "react";
import bgSample from "../../assets/bg-sample.jpeg";
import resume01 from "../../assets/resume/01.jpeg";
import resume02 from "../../assets/resume/02.jpeg";
import resume03 from "../../assets/resume/03.jpeg";

// Define types for our resume category
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
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories?.[0]?.id ?? ""
  );

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
    <section
      className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 ${className}`}
      aria-labelledby="resume-samples-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-green-400 text-lg font-medium block mb-2 sm:mb-3">
            Work Samples
          </span>
          <h2
            id="resume-samples-title"
            className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          >
            Custom Written Resume
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
            Our certified resume writers effortlessly build a job-worthy resume
            that gets you hired faster and fits all the HR standards.
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
                      ? "text-green-500"
                      : "text-gray-400"
                  }`}
                >
                  {category.icon}
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 ${
                      selectedCategory === category.id
                        ? "text-gray-800"
                        : "text-gray-600"
                    }`}
                  >
                    {category.title}
                  </h3>
                  {selectedCategory === category.id && category.description && (
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
                className="bg-green-400 hover:bg-green-500 text-gray-800 py-2 px-4 sm:py-3 sm:px-6 rounded transition-all duration-300 hover:shadow-md text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-green-300"
                aria-label="Request for more resume samples"
              >
                Request For More Samples
              </button>
            </div>
          </div>

          {/* Samples Display Section - takes 7 columns on large screens */}
          <div className="lg:col-span-7 mt-6 lg:mt-0 relative">
            {/* Outer container with positioning context */}
            <div className="relative h-96 lg:h-full">
              {/* Background Image Container - covers the right portion */}
              <div className="absolute right-0 top-0 w-3/4 h-full rounded-md overflow-hidden shadow-lg">
                <img
                  src={bgSample}
                  alt="Resume background"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                {/* Gradient overlay for better readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Resume Samples Overlay - positioned to span both areas */}
              <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-center">
                {selectedCategoryData && (
                  <div className="animate-fadeIn w-full">
                    {/* Category title overlay */}
                    <h4 className="text-gray-800 text-lg sm:text-xl font-bold mb-4 text-center">
                      {selectedCategoryData.title} Samples
                    </h4>

                    {/* Resume samples grid with custom positioning */}
                    <div className="grid grid-cols-3 gap-4 relative">
                      {selectedCategoryData.samples.map((sample) => {
                        // Remove the special case for the first sample
                        return (
                          <div
                            key={sample.id}
                            className="col-span-1 bg-white rounded-md shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                          >
                            <div className="aspect-w-3 aspect-h-4 w-full">
                              <img
                                src={sample.image}
                                alt={`${sample.title} resume sample`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-2 text-center bg-white">
                              <p className="text-xs sm:text-sm font-medium text-gray-800 truncate">
                                {sample.title}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
          image: resume01, // In real app, use specific art-design-1.jpeg
          title: "Graphic Design CV",
        },
        {
          id: "art-2",
          image: resume02, // In real app, use specific art-design-2.jpeg
          title: "UX/UI Designer",
        },
        {
          id: "art-3",
          image: resume03, // In real app, use specific art-design-3.jpeg
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
          image: resume01, // In real app, use specific corporate-1.jpeg
          title: "Executive Resume",
        },
        {
          id: "corp-2",
          image: resume02, // In real app, use specific corporate-2.jpeg
          title: "Business Analyst",
        },
        {
          id: "corp-3",
          image: resume03, // In real app, use specific corporate-3.jpeg
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
          image: resume01, // In real app, use specific education-1.jpeg
          title: "Teacher Resume",
        },
        {
          id: "edu-2",
          image: resume02, // In real app, use specific education-2.jpeg
          title: "Professor CV",
        },
        {
          id: "edu-3",
          image: resume03, // In real app, use specific education-3.jpeg
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
          image: resume01, // In real app, use specific real-estate-1.jpeg
          title: "Realtor Resume",
        },
        {
          id: "real-2",
          image: resume02, // In real app, use specific real-estate-2.jpeg
          title: "Property Manager",
        },
        {
          id: "real-3",
          image: resume03, // In real app, use specific real-estate-3.jpeg
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
          image: resume01, // In real app, use specific it-management-1.jpeg
          title: "IT Director",
        },
        {
          id: "it-2",
          image: resume02, // In real app, use specific it-management-2.jpeg
          title: "CTO Resume",
        },
        {
          id: "it-3",
          image: resume03, // In real app, use specific it-management-3.jpeg
          title: "DevOps Manager",
        },
      ],
    },
  ];
};

// Add a simple fade-in animation for Tailwind
const customStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
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
