import { useState, useEffect } from "react";
import bannerImage1 from "../../assets/NewUpdatedImages/banner2.jpg";
import bannerImage2 from "../../assets/NewUpdatedImages/banner5.jpg";
import bannerImage3 from "../../assets/NewUpdatedImages/banner1.jpg";
import trusted_logos from "../../assets/logos-trusted-partners.svg";
import { CircleCheckBig } from "lucide-react";
import ResumeForm, { FormData } from "./ResumeForm";
import ZenDeskChatComponent from "./ZenDeskChat";

interface HeroSectionProps {
  heading?: string;
  subheading?: string;
  features?: Array<string>;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  features = [
    "Expert Resume Writers",
    "Optimized for ATS",
    "Guaranteed Interview Success",
    "Showcases Your Value",
  ],
}) => {
  const images = [bannerImage1, bannerImage2, bannerImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const titles = [
    "Professional Resume",
    "Video Resume",
    "Interactive Resume",
    "Cover Letter",
    "Web-Based Resume",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const [showResumeForm, setShowResumeForm] = useState(false);
  const [showZendeskChat, setShowZendeskChat] = useState(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(imageInterval);
  }, [images.length]);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(titleInterval);
  }, [titles.length]);

  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    setShowResumeForm(false);
  };

  const handleConsultExperts = () => {
    setShowZendeskChat(true);
  };

  const handleZendeskChatClose = () => {
    setShowZendeskChat(false);
  };

  return (
    <>
      <div className="relative w-full overflow-hidden min-h-[80vh] md:min-h-[600px]">
        <style>{`
          @keyframes slideInOut {
            0% {
              opacity: 0;
              transform: translateY(-100%);
            }
            20% {
              opacity: 1;
              transform: translateY(0);
            }
            80% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(100%);
            }
          }
          .animate-slideInOut {
            animation: slideInOut 3s ease-in-out;
          }
        `}</style>

        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectPosition: "top" }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-24 pb-8 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-white">
              <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight mt-8">
                <span className="relative inline-block overflow-hidden">
                  <span
                    key={currentTitleIndex}
                    className="block animate-slideInOut"
                  >
                    {titles[currentTitleIndex]}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                  </span>
                </span>
                <br />
                <span className="inline-block">Writing Services</span>
              </h1>

              <div className="py-3 px-1 mb-10 -mx-1">
                <p className="text-xl sm:text-2xl text-white font-semibold">
                  Get noticed faster with a resume designed
                </p>
                <p className="text-xl sm:text-2xl text-white font-semibold">
                  to impress recruiters in six seconds.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-3 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CircleCheckBig size={18} color="white" />
                    <span className="text-white text-base font-normal">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="cursor-pointer w-full sm:w-52 px-6 py-3 font-semibold bg-[#C11A2F] border border-transparent hover:text-white hover:bg-transparent hover:border-white text-white transition-colors duration-200"
                  onClick={() => setShowResumeForm(true)}
                >
                  Get Started
                </button>
                <button
                  onClick={handleConsultExperts}
                  className="cursor-pointer w-full sm:w-52 px-6 py-3 font-semibold bg-white text-[#2F4376] border border-transparent hover:bg-transparent hover:text-white  hover:border-white transition-colors duration-200"
                >
                  Consult Our Experts
                </button>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <img
                  src={trusted_logos}
                  alt="Trust Badges"
                  className="h-auto w-full max-w-xs sm:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

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

      {/* Show Zendesk Chat Component */}
      {/* ZenDesk Chat Component */}
      {showZendeskChat && (
        <ZenDeskChatComponent onClose={handleZendeskChatClose} />
      )}
    </>
  );
};

export default HeroSection;
