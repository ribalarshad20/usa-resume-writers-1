import { useEffect, useState } from "react";
import ResumeForm, { FormData } from "./ResumeForm";

interface DotProps {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

const CTABanner: React.FC = () => {
  const [dots, setDots] = useState<DotProps[]>([]);
  const [showResumeForm, setShowResumeForm] = useState(false);

  // Configuration constants
  const CONFIG = {
    totalDots: 40,
    title: "Get A",
    highlightText: "Step Closer",
    subtitle: "To Your Dream Job!",
  };

  // Initialize dots with randomized properties
  const initializeDots = () => {
    return Array.from({ length: CONFIG.totalDots }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1.5,
      opacity: Math.random() * 0.5 + 0.2,
      speedX: (Math.random() - 0.5) * 0.1,
      speedY: (Math.random() - 0.5) * 0.1,
    }));
  };

  // Animate dots movement
  const animateDots = (prevDots: DotProps[]) =>
    prevDots.map((dot) => {
      const newX = dot.x + dot.speedX;
      const newY = dot.y + dot.speedY;

      // Bounce logic for x and y coordinates
      const bounceX =
        newX <= 0 || newX >= 100
          ? { x: Math.max(0, Math.min(100, newX)), speedX: -dot.speedX }
          : { x: newX, speedX: dot.speedX };

      const bounceY =
        newY <= 0 || newY >= 100
          ? { y: Math.max(0, Math.min(100, newY)), speedY: -dot.speedY }
          : { y: newY, speedY: dot.speedY };

      return { ...dot, ...bounceX, ...bounceY };
    });

  // Effects for dot initialization and animation
  useEffect(() => {
    setDots(initializeDots());
  }, []);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setDots(animateDots);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [dots]);

  const handleGetStarted = () => {
    setShowResumeForm(true);
  };

  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    setShowResumeForm(false);
  };

  return (
    <>
      <div className="relative w-full overflow-hidden bg-gray-900 py-16 px-4 md:px-6 lg:px-8">
        {/* Animated Dots Background */}
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

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Title Section */}
          <div className="mb-10 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {CONFIG.title}{" "}
              <span className="text-[#C11A2F]">{CONFIG.highlightText}</span>
              <br />
              {CONFIG.subtitle}
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button
              className="group relative w-full xs:w-auto sm:w-auto md:w-52 px-4 py-3 text-sm font-semibold 
                         bg-white text-[#2F4376] hover:bg-gray-100 
                         cursor-pointer transition-all duration-300 
                         border border-transparent hover:border-gray-300"
            >
              Consult Our Experts
            </button>

            <button
              onClick={handleGetStarted}
              className="group relative w-full xs:w-auto sm:w-auto md:w-52 px-4 py-3 text-sm font-semibold 
                         bg-[#C11A2F] text-white 
                         hover:bg-transparent hover:text-[white] hover:border-white 
                         cursor-pointer transition-all duration-300 
                         border border-transparen"
            >
              Get Started Now!
            </button>
          </div>
        </div>
      </div>

      {/* Resume Form Modal */}
      {showResumeForm && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-brightness-30 flex justify-center items-center z-50">
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

export default CTABanner;
