import { MoveRight } from "lucide-react";
import React from "react";

interface FeaturesOfServicesProps {
  number: string;
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  onArrowClick: () => void;
}

const FeaturesOfServices: React.FC<FeaturesOfServicesProps> = ({
  number,
  image,
  imageAlt = "Service Image",
  title,
  description,
  onArrowClick,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-10">
      <div className="flex flex-col md:flex-row w-full pt-8 md:pt-16 mb-8 md:mb-16">
        <div className="hidden md:flex md:w-1/2 justify-center">
          <img
            src={image}
            alt={imageAlt}
            className="w-[460px] max-w-lg h-auto md:h-[590px] rounded object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center">
          <div className="mb-4 md:mb-6">
            <div className="text-gray-200 text-6xl md:text-8xl font-bold mb-2 md:mb-4">
              {number}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 md:mb-6">
              {title.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < title.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>

          <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center">
            <button
              onClick={onArrowClick}
              className="text-xl md:text-2xl hover:scale-110 transition-transform cursor-pointer"
              aria-label="Learn more"
            >
              <MoveRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfServices;
