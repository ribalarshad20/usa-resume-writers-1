import React, { useRef, useState } from "react";
import bgImage from "../../assets/bg-cta.jpg";
import ResumeForm, { FormData } from "./ResumeForm";
import TawkChat, { TawkChatRef } from "./TawkChat";

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
}) => {
  const [showResumeForm, setShowResumeForm] = useState(false);
  const tawkChatRef = useRef<TawkChatRef>(null);
  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    setShowResumeForm(false);
  };
  return (
    <>
      <div
        className="relative w-full text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          minHeight: "60vh",
        }}
      >
        <div className="relative z-10 container mx-auto px-4 py-6 md:py-6 lg:py-10 flex flex-col items-center justify-center text-center">
          <p className="text-lg md:text-xl mb-4 italic">Contact Our Experts</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-full sm:max-w-5xl">
            <span className="whitespace-normal sm:whitespace-nowrap">
              {title} <span className="text-[#67D794]">{highlightedText}</span>
            </span>
            <br />
            <span>{subtitle}</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                // On click, call the maximize method on TawkChat
                tawkChatRef.current?.maximize();
              }}
              className="w-52 px-6 py-3 font-semibold bg-white text-black border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-colors duration-200"
            >
              Consult Our Experts
            </button>
            <button
              className="w-52 px-6 py-3 font-semibold bg-[#67D794] border border-transparent hover:text-white hover:bg-transparent hover:border-[#67D794] text-white transition-colors duration-200"
              onClick={() => setShowResumeForm(true)}
            >
              Get Started Now!
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
      <div className="fixed bottom-4 right-4 z-50">
        <TawkChat ref={tawkChatRef} />
      </div>
    </>
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
