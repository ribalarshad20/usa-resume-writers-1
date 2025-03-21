import React, { useEffect, useState } from "react";
import ResumeForm, { FormData } from "./ResumeForm";
interface CTABannerProps {
  title: string;
  highlightText: string;
  subtitle: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

interface DotProps {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

/**
 * A responsive call-to-action banner component with a dark background, animated dots, and two action buttons.
 */
const CTABanner: React.FC<CTABannerProps> = ({
  title,
  highlightText,
  subtitle,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const [dots, setDots] = useState<DotProps[]>([]);
  const totalDots = 40; // Increased from 20 to 40 dots

  const [showResumeForm, setShowResumeForm] = useState(false);

  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    setShowResumeForm(false);
  };

  // Initialize dots
  useEffect(() => {
    const initialDots = Array(totalDots)
      .fill(0)
      .map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        // Increased size range from (0.5-2px) to (1.5-4px)
        size: Math.random() * 2.5 + 1.5,
        opacity: Math.random() * 0.5 + 0.2,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.1,
      }));
    setDots(initialDots);
  }, []);

  // Animate dots
  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setDots((prevDots) =>
        prevDots.map((dot) => {
          let newX = dot.x + dot.speedX;
          let newY = dot.y + dot.speedY;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            newX = Math.max(0, Math.min(100, newX));
            return { ...dot, x: newX, speedX: -dot.speedX };
          }
          if (newY <= 0 || newY >= 100) {
            newY = Math.max(0, Math.min(100, newY));
            return { ...dot, y: newY, speedY: -dot.speedY };
          }

          return { ...dot, x: newX, y: newY };
        })
      );
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [dots]);

  return (
    <>
      <div className="relative min-w-7xl overflow-hidden bg-gray-900 py-16 px-4 md:px-6 lg:px-8">
        {/* Animated dots/stars effect with increased size and count */}
        <div className="absolute inset-0 opacity-20">
          {dots.map((dot) => (
            <div
              key={dot.id}
              className="absolute rounded-full bg-white"
              style={{
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                top: `${dot.y}%`,
                left: `${dot.x}%`,
                opacity: dot.opacity,
                transition: "transform 0.05s linear",
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
              className="group w-full xs:w-auto sm:w-auto md:w-48 px-2 py-2 md:py-3 text-xs sm:text-sm font-semibold bg-white text-black border border-transparent transition-all duration-200"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span className="relative z-10 group-hover:text-black group-hover:bg-transparent transition-colors duration-200">
                Consult Our Experts
              </span>
              <span
                className="absolute inset-0 bg-white group-hover:bg-transparent transition-colors duration-200"
                style={{ zIndex: 0 }}
              ></span>
              <span
                className="absolute inset-0 border border-transparent group-hover:border-white transition-colors duration-200"
                style={{ zIndex: 0 }}
              ></span>
            </button>
            <button
              onClick={onPrimaryClick}
              className="group w-52 px-6 py-3 font-semibold text-white border border-transparent transition-all duration-200"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                className="relative z-10 group-hover:text-[#5FD797] transition-colors duration-200"
                onClick={() => setShowResumeForm(true)}
              >
                Get Started Now!
              </span>
              <span
                className="absolute inset-0 bg-[#5FD797] group-hover:bg-transparent transition-colors duration-200"
                style={{ zIndex: 0 }}
              ></span>
              <span
                className="absolute inset-0 border border-transparent group-hover:border-[#5FD797] transition-colors duration-200"
                style={{ zIndex: 0 }}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {showResumeForm && (
        <div className="fixed inset-0  bg-opacity-30 backdrop-brightness-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full mx-4">
            <ResumeForm
              onSubmit={handleFormSubmit}
              onClose={() => setShowResumeForm(false)}
            />
          </div>
        </div>
      )}
    </>
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
      onPrimaryClick={() => console.log("Primary button clicked")}
      onSecondaryClick={() => console.log("Secondary button clicked")}
    />
  );
};

export default CTABanner;
