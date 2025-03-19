import React, { useState, useEffect } from "react";
import bannerImage1 from "../../assets/banner1.jpeg";
import bannerImage2 from "../../assets/banner2.jpeg";
import bannerImage3 from "../../assets/banner3.png";
import trusted_logos from "../../assets/logos-trusted-partners.svg";
import { CircleCheckBig } from "lucide-react";

interface HeroSectionProps {
  heading?: string;
  subheading?: string;
  features?: Array<string>;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  subheading = "Earn more career prospects with a resume that wins the recruiter's 6-second review.",
  features = [
    "Certified Professional Writers",
    "ATS Friendly Resumes",
    "Interview Calls Guarantee",
    "Highlights Your Strengths",
  ],
}) => {
  const images = [bannerImage1, bannerImage2, bannerImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const titles = [
    "Professional Resume",
    "Video Resume",
    "Interactive Resume",
    "Cover Letter",
    "Web-Based Resume",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Cycle through banner images
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(imageInterval);
  }, [images.length]);

  // Cycle through titles for animated text
  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(titleInterval);
  }, [titles.length]);

  return (
    <div className="relative w-full overflow-hidden min-h-[700px]">
      {/* Custom style for slide in/out animation */}
      <style>{`
        @keyframes slideInOut {
          0% {
            opacity: 0;
            transform: translateY(-100%);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(100%);
          }
        }
        .animate-slideInOut {
          animation: slideInOut 3s ease-in-out;
        }
      `}</style>

      {/* Slideshow Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Banner ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: "top" }}
        />
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight mt-8">
              <span className="relative inline-block overflow-hidden">
                <span
                  key={currentTitleIndex}
                  className="block animate-slideInOut"
                >
                  {titles[currentTitleIndex]}
                  {/* Underline */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                </span>
              </span>
              <br />
              <span className="inline-block">Writing Services</span>
            </h1>

            <p className="text-xl mb-10">{subheading}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CircleCheckBig size={18} color="white" />

                  <span className="text-white text-base font-normal">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="
                  bg-[#72ecb1]
                  text-black
                  text-base
                  font-semibold
                  py-3
                  px-8
                  rounded-md
                  transition-colors
                  duration-300
                  hover:bg-[#63dba0]
                "
              >
                Get Started
              </button>

              <button
                className="
                  bg-white
                  text-[#72ecb1]
                  text-base
                  font-semibold
                  py-3
                  px-8
                  rounded-md
                  transition-colors
                  duration-300
                  hover:bg-gray-100
                "
              >
                Consult Our Experts
              </button>
            </div>

            {/* Trusted Logos */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <img
                src={trusted_logos}
                alt="Trust Badges"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
