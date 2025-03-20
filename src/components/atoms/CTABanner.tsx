import React from "react";

interface CTABannerProps {
  title: string;
  highlightText: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

/**
 * A responsive call-to-action banner component with a dark background and two action buttons.
 */
const CTABanner: React.FC<CTABannerProps> = ({
  title,
  highlightText,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className="relative min-w-7xl overflow-hidden bg-gray-900 py-16 px-4 md:px-6 lg:px-8">
      {/* Background dots/stars effect */}
      <div className="absolute inset-0 opacity-20">
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Text content */}
        <div className="mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title} <span className="text-emerald-400">{highlightText}</span>
            <br />
            {subtitle}
          </h2>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <button
            onClick={onSecondaryClick}
            className="px-6 py-3 bg-white text-gray-800 font-semibold rounded hover:bg-gray-100 transition-colors duration-300 text-lg"
          >
            {secondaryButtonText}
          </button>
          <button
            onClick={onPrimaryClick}
            className="px-6 py-3 bg-emerald-400 text-white font-semibold rounded hover:bg-emerald-500 transition-colors duration-300 text-lg"
          >
            {primaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Example implementation of the CTABanner component.
 */
export const CTABannerExample: React.FC = () => {
  return (
    <CTABanner
      title="Get A"
      highlightText="Step Closer"
      subtitle="To Your Dream Job!"
      secondaryButtonText="Consult Our Experts"
      primaryButtonText="Get Started Now!"
      onPrimaryClick={() => console.log("Primary button clicked")}
      onSecondaryClick={() => console.log("Secondary button clicked")}
    />
  );
};

export default CTABanner;
