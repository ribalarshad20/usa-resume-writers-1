import { MoveRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import ResumeForm, { FormData } from "./ResumeForm";
import TawkChat, { TawkChatRef } from "./TawkChat";

// Define types for the service item
interface ServiceItem {
  title: string;
  description: string;
  link: string;
}

interface CareerServicesProps {
  services: ServiceItem[];
}

const CareerServices: React.FC<CareerServicesProps> = ({ services }) => {
  const [showResumeForm, setShowResumeForm] = useState(false);
  const tawkChatRef = useRef<TawkChatRef>(null);
  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    setShowResumeForm(false);
  };

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Clone services array to create the illusion of an infinite loop
  const extendedServices = [...services, ...services, ...services];

  // Check for mobile screen size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Initialize scroll position to the middle set of items
  useEffect(() => {
    if (sliderRef.current) {
      // Wait for DOM to fully render
      setTimeout(() => {
        const singleSetWidth = sliderRef.current?.scrollWidth
          ? sliderRef.current.scrollWidth / 3
          : 0;
        if (sliderRef.current) {
          sliderRef.current.scrollLeft = singleSetWidth;
          setScrollLeft(singleSetWidth);
        }
      }, 100);
    }
  }, []);

  // Check if we need to reset scroll position for infinite loop effect
  const checkScroll = () => {
    if (!sliderRef.current || isTransitioning) return;
    const singleSetWidth = sliderRef.current.scrollWidth / 3;
    const currentPosition = sliderRef.current.scrollLeft;

    if (currentPosition >= singleSetWidth * 2) {
      setIsTransitioning(true);
      sliderRef.current.style.scrollBehavior = "auto";
      sliderRef.current.scrollLeft = currentPosition - singleSetWidth;
      setScrollLeft(currentPosition - singleSetWidth);
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.scrollBehavior = "smooth";
          setIsTransitioning(false);
        }
      }, 50);
    } else if (currentPosition < singleSetWidth / 2) {
      setIsTransitioning(true);
      sliderRef.current.style.scrollBehavior = "auto";
      sliderRef.current.scrollLeft = currentPosition + singleSetWidth;
      setScrollLeft(currentPosition + singleSetWidth);
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.scrollBehavior = "smooth";
          setIsTransitioning(false);
        }
      }, 50);
    }
  };

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grab";
      checkScroll();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!isDragging) {
      checkScroll();
    }
  };

  // Arrow button handlers to scroll slider
  const handleArrowLeft = () => {
    if (!sliderRef.current || isTransitioning) return;
    const scrollAmount = sliderRef.current.clientWidth;
    sliderRef.current.scrollLeft -= scrollAmount;
    setScrollLeft(sliderRef.current.scrollLeft - scrollAmount);
    checkScroll();
  };

  const handleArrowRight = () => {
    if (!sliderRef.current || isTransitioning) return;
    const scrollAmount = sliderRef.current.clientWidth;
    sliderRef.current.scrollLeft += scrollAmount;
    setScrollLeft(sliderRef.current.scrollLeft + scrollAmount);
    checkScroll();
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <>
      <div className="relative z-10 w-full max-w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 md:pt-24 pb-2 md:pb-2">
        <div className="mb-8 md:mb-12">
          <p className="text-gray-800 font-medium mb-2 text-sm sm:text-base">
            Our Professional Services
          </p>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-0 md:w-2/3 lg:w-3/5">
              <span className="text-gray-800">One Window </span>
              <span className="text-[#C11A2F]">Career</span>
              <br />
              <span className="text-gray-800">Solutions To Get Dream Job</span>
            </h1>
            <div className="flex flex-col xs:flex-row sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
              <button
                onClick={() => tawkChatRef.current?.maximize()}
                className="w-full xs:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold bg-[#2F4376] border border-transparent hover:bg-transparent hover:border-[#2F4376] hover:text-[#2F4376] text-white transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
              >
                Consult our Experts
              </button>
              <button
                className="w-full xs:w-auto px-4 py-2 sm:px-6 sm:py-3 font-semibold bg-[#C11A2F] border border-transparent hover:text-black hover:bg-transparent hover:border-red-600 text-white transition-colors duration-200 text-sm sm:text-base"
                onClick={() => setShowResumeForm(true)}
              >
                Get Started Now!
              </button>
            </div>
          </div>
        </div>

        {/* Slider and Arrow Controls Container */}
        <div className="flex flex-col items-center">
          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide cursor-grab w-full"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            onScroll={handleScroll}
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {extendedServices.map((service, index) => (
              <div
                key={index}
                className="min-w-[260px] xs:min-w-[280px] sm:min-w-[320px] max-w-[260px] flex-shrink-0 bg-white p-4 sm:p-6 flex flex-col justify-between group transition-all duration-300 ease-in-out hover:bg-[#222F3E] mr-4 sm:mr-6 select-none"
                style={{
                  width: isMobile ? "calc(100vw - 60px)" : undefined,
                }}
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300 line-clamp-2">
                    {service.title}
                  </h3>
                  <div className="w-10 sm:w-12 h-[2px] bg-[#C11A2F] mb-4 sm:mb-6"></div>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 group-hover:text-white transition-colors duration-300 line-clamp-3 sm:line-clamp-4">
                    {service.description}
                  </p>
                </div>
                <a href={service.link} className="inline-flex items-center">
                  <MoveRight
                    size={48}
                    className="text-black group-hover:text-white transition-colors duration-300"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleArrowLeft}
              className="p-2 bg-[#2F4376] rounded-full shadow-md"
            >
              <MoveRight
                size={24}
                className="rotate-180 text-white cursor-pointer"
              />
            </button>
            <button
              onClick={handleArrowRight}
              className="p-2 bg-[#2F4376] rounded-full shadow-md"
            >
              <MoveRight size={24} className="text-white cursor-pointer" />
            </button>
          </div>
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          /* Support for very small screens */
          @media (max-width: 360px) {
            .xs\\:min-w-\\[280px\\] {
              min-width: 220px;
            }
            .xs\\:flex-row {
              flex-direction: column;
            }
            .xs\\:w-auto {
              width: 100%;
            }
          }

          /* Extra small screen breakpoint */
          @media (min-width: 361px) and (max-width: 639px) {
            .xs\\:flex-row {
              flex-direction: row;
            }
            .xs\\:w-auto {
              width: auto;
            }
          }
        `}</style>
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
      <div className="fixed bottom-4 right-4 z-50">
        <TawkChat ref={tawkChatRef} />
      </div>
    </>
  );
};

const CareerServicesSection: React.FC = () => {
  const servicesData: ServiceItem[] = [
    {
      title: "ATS Compliant Resume Writing Service",
      description:
        "Beat the bots! Our resume services are built to pass ATS scans and get your resume into human hands quickly.",
      link: "/services/resume-writing/",
    },
    {
      title: "Career Switch Resume Writing Service",
      description:
        "Switching industries? Our resume services reshape your experience to match new paths—spotlighting transferable skills that hiring managers value most.",
      link: "/services/career-switch/",
    },
    {
      title: "Entry Level Resume Writing Service",
      description:
        "Starting fresh? Our experts create impactful, first-time resumes that reflect your passion, potential, and readiness to enter the professional world.",
      link: "/services/entry-level/",
    },
    {
      title: "LinkedIn Profile Writing Service",
      description:
        "Let a professional resume writer polish your LinkedIn profile to reflect your skills and goals and make recruiters take notice fast.",
      link: "/services/linkedIn-profile/",
    },
    {
      title: "Cover Letter Writing Service",
      description:
        "Let a professional resume writer craft a compelling cover letter that complements your resume and captures employer interest from the start.",
      link: "/services/cover-letters/",
    },
    {
      title: "Follow Up Letter Writing Service",
      description:
        "A well-timed follow-up letter shows initiative. We help you express interest, clarify key points, and leave a lasting impression.",
      link: "/services/follow-up-letter/",
    },
    {
      title: "Recommendation Letter Writing Service",
      description:
        "Our writers craft thoughtful, personalized recommendations that feel authentic—enhancing your credibility while maintaining a polished, professional tone throughout.",
      link: "/services/recommendation-letter/",
    },
    {
      title: "Thank You Letter Writing Service",
      description:
        "Say thanks the right way! We write warm, sincere thank-you letters that reinforce your value and leave employers feeling appreciated.",
      link: "/services/thank-you-letter/",
    },
  ];

  return <CareerServices services={servicesData} />;
};

export default CareerServicesSection;
