import React from "react";

interface PromotionalBannerProps {
  discountPercentage: number;
  actionText: string;
  onClick: () => void;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  discountPercentage = 20,
  actionText = "SIGN UP HERE TO GET",
  onClick,
}) => {
  return (
    <div className="fixed right-0 top-1/3 z-50 flex flex-col items-center">
      <button
        onClick={onClick}
        className="flex flex-col items-center bg-black text-white rounded-4xl overflow-hidden w-16 md:w-15 transform transition-transform duration-300 hover:scale-105"
      >
        <div className="flex items-center justify-center w-12 h-12 md:w-15 md:h-15 bg-green-400 rounded-full -mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-8 md:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div className="py-8 px-4">
          <div className="vertical-text text-green-400 font-bold text-xl md:text-2xl mb-6">
            {discountPercentage}% OFF
          </div>

          <div className="vertical-text text-white text-sm md:text-base font-medium tracking-wide">
            {actionText}
          </div>
        </div>
      </button>
    </div>
  );
};

// Add custom CSS for vertical text and positioning
const style = document.createElement("style");
style.innerHTML = `
  .vertical-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    white-space: nowrap;
    letter-spacing: 1px;
  }
  
  /* CSS to ensure the banner is positioned exactly at the edge */
  @media (min-width: 768px) {
    .fixed.right-0 {
      right: 0 !important;
    }
  }
`;
document.head.appendChild(style);

export default PromotionalBanner;
