import React from "react";

// Define type for feature items
interface PricingFeature {
  id: string;
  text: string;
}

interface PricingCardProps {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  features: PricingFeature[];
  popularLabel?: string; // Already marked as optional
  ctaText: string;
  phoneNumber: string;
  onCtaClick?: () => void;
}

// SVG icons as separate components for better organization
const ChatIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-1 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
    />
  </svg>
);

const PhoneIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-1 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

export const PricingCard: React.FC<PricingCardProps> = ({
  titleLine1,
  titleLine2,
  subtitle,
  price,
  originalPrice,
  features,
  popularLabel,
  ctaText,
  phoneNumber,
  onCtaClick,
}) => {
  return (
    <div className="font-avant relative w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      {/* Popular ribbon */}
      <div className="relative">
        {popularLabel && (
          <div
            className="
          absolute
          top-6
          left-0
          w-56
          h-10
          bg-red-600
          text-white
          text-xs
          font-bold
          flex
          items-center
          justify-center
          transform
          rotate-[-45deg]
          -translate-x-16
          translate-y-1
          z-20
        "
          >
            {popularLabel}
          </div>
        )}
      </div>

      {/* Card header */}
      <div className="px-4 sm:px-6 py-5 text-center pt-10 sm:pt-14">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#60D497] leading-tight">
          <span className="block">{titleLine1}</span>
          <span className="block">{titleLine2}</span>
        </h2>
        <p className="text-gray-700 text-sm mt-2 leading-tight">{subtitle}</p>
      </div>

      {/* Pricing section */}
      <div className="bg-[#166B3F] text-white py-3 sm:py-4 px-4 flex items-center justify-center">
        <span className="text-xl sm:text-2xl mr-1 sm:mr-2 mt-1">$</span>
        <span className="text-4xl sm:text-6xl font-light">{price}</span>
        <div className="flex flex-col ml-2 text-xs sm:text-sm items-start">
          <span className="line-through">${originalPrice}</span>
          <span>only</span>
        </div>
      </div>

      {/* Features section - fixed height with scrolling */}
      <div className="px-4 sm:px-6 py-4 sm:py-5 h-56 sm:h-64 overflow-y-auto custom-scrollbar">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li
              key={feature.id}
              className="text-gray-700 text-center text-sm sm:text-base"
            >
              {feature.text}
              {index < features.length - 1 && (
                <div className="border-b border-gray-200 mt-3"></div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
        <button
          onClick={onCtaClick}
          className="w-full bg-[#67D794] hover:bg-[#50c27d] text-white font-medium py-2 sm:py-3 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#50c27d] focus:ring-offset-2"
          aria-label={ctaText}
        >
          {ctaText}
        </button>
      </div>

      {/* Contact Info */}
      <div className="px-4 sm:px-6 pb-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        {/* Live Chat */}
        <div className="flex items-center">
          <ChatIcon />
          <span className="text-xs sm:text-sm">Live Chat</span>
        </div>

        {/* Phone Number */}
        <div className="flex items-center">
          <PhoneIcon />
          <span className="text-xs sm:text-sm">{phoneNumber}</span>
        </div>
      </div>
    </div>
  );
};

// Example usage component
const ResumePricingCardExample: React.FC = () => {
  // Features with unique ids for proper key usage
  const features: PricingFeature[] = [
    { id: "feature-1", text: "Money-back Guarantee" },
    { id: "feature-2", text: "ATS Compatibility: Over 90% Success Rate" },
    { id: "feature-3", text: "ATS Testing Included" },
    { id: "feature-4", text: "Multiple Template Design Options" },
    { id: "feature-5", text: "Unlimited Revisions" },
    { id: "feature-6", text: "Universal Formatting" },
    { id: "feature-7", text: "Final Files in PDF & Word Formats" },
  ];

  const handleOrderClick = () => {
    // Handle order click action
    console.log("Order button clicked");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <PricingCard
        titleLine1="Professional Level"
        titleLine2="Resume"
        subtitle="Beat the competition with a professional resume"
        price={130}
        originalPrice={200}
        features={features}
        popularLabel="MOST POPULAR"
        ctaText="Order Now"
        phoneNumber="+1 (855) 846-0134"
        onCtaClick={handleOrderClick}
      />
    </div>
  );
};

export default ResumePricingCardExample;
