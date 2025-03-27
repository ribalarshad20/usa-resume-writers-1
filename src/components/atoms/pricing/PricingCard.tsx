import React, { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import ZenDeskChatComponent from "../ZenDeskChat";

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
  popularLabel?: string;
  ctaText: string;
  phoneNumber: string;
  onCtaClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
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
  const [showZendeskChat, setShowZendeskChat] = useState(false);

  const handleConsultExperts = () => {
    setShowZendeskChat(true);
  };

  const handleZendeskChatClose = () => {
    setShowZendeskChat(false);
  };

  return (
    <>
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
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2F4376] uppercase ">
            <span className="block ">{titleLine1}</span>
            <span className="block">{titleLine2}</span>
          </h2>
          <p className="text-gray-700 text-sm mt-2 leading-tight">{subtitle}</p>
        </div>

        {/* Pricing section */}
        <div className="bg-[#2F4376] text-white py-3 sm:py-4 px-4 flex items-center justify-center">
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
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 ">
          <button
            onClick={onCtaClick}
            className="cursor-pointer w-full bg-[#2F4376] hover:bg-[#2F4376] text-white font-medium py-2 sm:py-3 px-4 rounded-md transition duration-300"
            aria-label={ctaText}
          >
            {ctaText}
          </button>
        </div>

        {/* Contact Info */}
        <div className="px-4 sm:px-6 pb-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          {/* Live Chat */}
          <div
            onClick={handleConsultExperts}
            className="flex items-center cursor-pointer"
          >
            <MessageCircle className="h-5 w-5 mr-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm">Live Chat</span>
          </div>

          {/* Phone Number */}
          <div className="flex items-center cursor-pointer">
            <Phone className="h-5 w-5 mr-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm">{phoneNumber}</span>
          </div>
        </div>
      </div>

      {showZendeskChat && (
        <ZenDeskChatComponent onClose={handleZendeskChatClose} />
      )}
    </>
  );
};

export default PricingCard;
