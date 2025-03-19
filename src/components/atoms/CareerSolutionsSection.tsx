import React from "react";
import bgImage from "../../assets/conquer-bg.jpeg";

interface CareerSolutionsSectionProps {
  title: string;
  subtitle: string;
  description: string;
  logos: { src: string; alt: string }[];
  buttonText: string;
  onButtonClick?: () => void;
}

const CareerSolutionsSection: React.FC<CareerSolutionsSectionProps> = ({
  title,
  subtitle,
  description,
  logos,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        minHeight: "40vh", // Decreased height
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 pr-0 lg:pr-8">
            <h3 className="text-lg font-medium text-gray-700 mb-2">{title}</h3>

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
                  className="h-6 md:h-8 opacity-50"
                />
              ))}
            </div>

            <button
              onClick={onButtonClick}
              className="bg-green-400 hover:bg-green-500 text-gray-800 font-medium py-2 px-6 rounded transition duration-300"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSolutionsSection;
