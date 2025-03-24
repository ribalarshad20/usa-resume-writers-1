import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import bgSample from "../../assets/bg-sample.jpeg";

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

// Define types for our data structure
type ResumeSample = {
  id: string;
  image: string;
  title: string;
};

type CategoryData = {
  [key: string]: ResumeSample[];
};

const AdvancedResumeGallery: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("art-design");
  // Fixed: Removed unused animationOrigin state
  const modalRef = useRef<HTMLDivElement>(null);

  // Sample resume categories data with proper typing
  const categories: CategoryData = {
    "art-design": [
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
    corporate: [
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
    education: [
      {
        id: "edu-1",
        image: educationResumeSample01,
        title: "Teacher Resume",
      },
      { id: "edu-2", image: educationResumeSample02, title: "Professor CV" },
      {
        id: "edu-3",
        image: educationResumeSample03,
        title: "School Administrator",
      },
    ],
    "real-estate": [
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
    "it-management": [
      { id: "it-1", image: iTRresumeSample01, title: "IT Director" },
      { id: "it-2", image: iTRresumeSample02, title: "CTO Resume" },
      {
        id: "it-3",
        image: iTRresumeSample03,
        title: "DevOps Manager",
      },
    ],
  };

  // Fixed: Added type safety for accessing categories with string index
  const currentImages: ResumeSample[] = categories[selectedCategory] || [];

  const openModal = (index: number): void => {
    // Removed unused animationOrigin
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  const nextImage = (): void => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (): void => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!showModal) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-green-400 italic text-lg font-medium block mb-2">
            Work Samples
          </span>
          <h2 className="text-gray-800 text-4xl font-bold mb-4">
            Custom Written Resume
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our certified resume writers effortlessly build a job-worthy resume
            that gets you hired faster and fits all the HR standards.
          </p>
        </div>

        {/* Category Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            {Object.entries(categories).map(([categoryId]) => (
              <div
                key={categoryId}
                className={`flex items-start cursor-pointer transition-all duration-300 ${
                  selectedCategory === categoryId
                    ? "hover:translate-x-2"
                    : "hover:translate-x-1 opacity-70"
                }`}
                onClick={() => setSelectedCategory(categoryId)}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 mt-1 ${
                    selectedCategory === categoryId
                      ? "text-green-400"
                      : "text-gray-400"
                  }`}
                >
                  {/* Simple icon placeholder */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      strokeWidth="1.5"
                    />
                    <line x1="8" y1="21" x2="16" y2="21" strokeWidth="1.5" />
                    <line x1="12" y1="17" x2="12" y2="21" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      selectedCategory === categoryId
                        ? "text-green-400"
                        : "text-gray-600"
                    }`}
                  >
                    {categoryId
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </h3>
                  {selectedCategory === categoryId && (
                    <p className="text-gray-600 animate-fadeIn">
                      Professional {categoryId.replace("-", " ")} resumes
                      tailored to showcase your unique skills and experience.
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div className="mt-10">
              <button className="w-64 px-6 py-3 font-semibold bg-green-400 border border-transparent hover:text-black white hover:bg-transparent hover:border-green-400 text-black transition-colors duration-200">
                Request For More Samples
              </button>
            </div>
          </div>

          {/* Samples Display Section */}
          <div className="lg:col-span-7 mt-6 lg:mt-0 relative">
            <div className="relative h-96 lg:h-full">
              {/* Background */}
              <div className="absolute right-0 top-0 w-3/4 h-full rounded-md overflow-hidden shadow-lg">
                <img
                  src={bgSample}
                  alt="Resume background"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Resume Samples */}
              <div className="absolute inset-0 p-6 flex items-center justify-center">
                <div className="animate-fadeIn w-full">
                  <div className="grid grid-cols-3 gap-4 relative">
                    {currentImages.map((sample, index) => (
                      <div
                        key={sample.id}
                        className="col-span-1 bg-white rounded-md shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl opacity-0 animate-staggeredFadeIn cursor-pointer"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animationFillMode: "forwards",
                        }}
                        onClick={() => openModal(index)}
                      >
                        <div className="aspect-w-3 aspect-h-4 w-full">
                          <img
                            src={sample.image}
                            alt={`${sample.title} resume sample`}
                            className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-105"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 backdrop-blur-xs bg-black/50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            ref={modalRef}
            className="relative w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              transformOrigin: "center",
              animation:
                "expandImage 0.3s cubic-bezier(0.17, 0.84, 0.44, 1) forwards",
            }}
          >
            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded z-20">
              {selectedImageIndex + 1}/{currentImages.length}
            </div>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 z-20 hover:bg-opacity-70 transition-all"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="relative flex justify-center items-center">
              <img
                src={currentImages[selectedImageIndex]?.image}
                alt={currentImages[selectedImageIndex]?.title}
                className="max-w-full max-h-screen object-contain"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Fixed: Correctly implement custom styles */}
      <style>
        {`
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

          @keyframes expandImage {
            from {
              transform: scale(0.5);
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
        `}
      </style>
    </div>
  );
};

export default AdvancedResumeGallery;
