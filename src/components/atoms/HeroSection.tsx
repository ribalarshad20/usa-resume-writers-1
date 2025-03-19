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
  primaryButtonText = "Get Started",
  secondaryButtonText = "Consult Our Experts",
}) => {
  const images = [bannerImage1, bannerImage2, bannerImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden min-h-[700px]">
      {/* Render each image as an absolutely positioned <img> */}
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

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              <span className="inline-block">Web-Based</span>{" "}
              <span className="inline-block relative">
                Resume
                <span className="absolute bottom-1 left-0 w-full h-0.5 bg-white"></span>
              </span>
              <br />
              <span className="inline-block">Writing Services</span>
            </h1>
            <p className="text-xl mb-10">{subheading}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 mr-2">
                    <CircleCheckBig size={16} />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-400 hover:bg-green-500 text-black font-medium py-3 px-8 transition duration-300">
                {primaryButtonText}
              </button>
              <button className="bg-white hover:bg-gray-100 text-green-500 font-medium py-3 px-8 transition duration-300">
                {secondaryButtonText}
              </button>
            </div>
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
