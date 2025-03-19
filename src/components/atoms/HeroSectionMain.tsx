import React from "react";
import bgImage from "../../assets/bg-cta.jpg";

interface HeroSectionProps {
  title: string;
  highlightedText: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  highlightedText,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div
      className="relative w-full text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        minHeight: "60vh", // Reduced height from 80vh to 60vh
      }}
    >
      <div className="relative z-10 container mx-auto py-6 md:py-6 lg:py-10 flex flex-col items-center justify-center text-center">
        <p className="text-lg md:text-xl mb-4 italic">Contact Our Experts</p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl">
          <span className="whitespace-nowrap">
            {title} <span className="text-green-400">{highlightedText}</span>
          </span>
          <br />
          <span>{subtitle}</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={onSecondaryClick}
            className="px-8 py-4 bg-white text-gray-800 font-medium text-lg hover:bg-gray-100 transition duration-300"
          >
            {secondaryButtonText}
          </button>
          <button
            onClick={onPrimaryClick}
            className="px-8 py-4 bg-green-400 text-white font-medium text-lg hover:bg-green-500 transition duration-300"
          >
            {primaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroSectionExample: React.FC = () => {
  const handleConsultClick = () => {
    console.log("Consult button clicked");
  };

  const handleGetStartedClick = () => {
    console.log("Get Started button clicked");
  };

  return (
    <HeroSection
      title="Explore Vast Professional"
      highlightedText="Opportunities"
      subtitle="With Resume Writers USA"
      secondaryButtonText="Consult Our Experts"
      primaryButtonText="Get Started Now!"
      onSecondaryClick={handleConsultClick}
      onPrimaryClick={handleGetStartedClick}
    />
  );
};

export default HeroSectionExample;
