import { MoveRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

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

    // Initial check
    checkIsMobile();

    // Add resize listener
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
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

  // Check if we need to reset scroll position to create infinite loop effect
  const checkScroll = () => {
    if (!sliderRef.current || isTransitioning) return;

    const singleSetWidth = sliderRef.current.scrollWidth / 3;
    const currentPosition = sliderRef.current.scrollLeft;

    // If scrolled too far right
    if (currentPosition >= singleSetWidth * 2) {
      setIsTransitioning(true);
      // Disable smooth scrolling temporarily
      sliderRef.current.style.scrollBehavior = "auto";
      // Reset to middle set
      sliderRef.current.scrollLeft = currentPosition - singleSetWidth;
      setScrollLeft(currentPosition - singleSetWidth);
      // Re-enable smooth scrolling
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.scrollBehavior = "smooth";
          setIsTransitioning(false);
        }
      }, 50);
    }
    // If scrolled too far left
    else if (currentPosition < singleSetWidth / 2) {
      setIsTransitioning(true);
      // Disable smooth scrolling temporarily
      sliderRef.current.style.scrollBehavior = "auto";
      // Reset to middle set
      sliderRef.current.scrollLeft = currentPosition + singleSetWidth;
      setScrollLeft(currentPosition + singleSetWidth);
      // Re-enable smooth scrolling
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

  // Handle scroll events to check for infinite loop conditions
  const handleScroll = () => {
    if (!isDragging) {
      checkScroll();
    }
  };

  // Clean up event listeners on unmount
  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="relative z-10 w-full max-w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="mb-8 md:mb-12">
        <p className="text-gray-800 italic font-medium mb-2 text-sm sm:text-base">
          Our Professional Services
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-0 md:w-2/3 lg:w-3/5">
            <span className="text-gray-800">One Window </span>
            <span className="text-[#5FD797]">Career</span>
            <br />
            <span className="text-gray-800">Solutions To Get Dream Job</span>
          </h1>

          <div className="flex flex-col xs:flex-row sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
            <button className="w-full xs:w-auto sm:w-auto md:w-48 px-2 py-2 md:py-3 text-xs sm:text-sm font-semibold bg-[#22303F] border border-transparent hover:text-black hover:bg-transparent hover:border-[#22303F] text-white transition-colors duration-200">
              Consult our Experts
            </button>
            <button className="w-full xs:w-auto sm:w-auto md:w-48 px-2 py-2 md:py-3 text-xs sm:text-sm font-semibold bg-[#67D794] border border-transparent hover:text-black hover:bg-transparent hover:border-[#67D794] text-black transition-colors duration-200">
              Get Started Now!
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto pb-6 scrollbar-hide cursor-grab"
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
                <div className="w-10 sm:w-12 h-[2px] bg-[#67D794] mb-4 sm:mb-6"></div>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 group-hover:text-white transition-colors duration-300 line-clamp-3 sm:line-clamp-4">
                  {service.description}
                </p>
              </div>
              <a href={service.link} className="inline-flex items-center">
                <MoveRight
                  size={32}
                  className="text-black group-hover:text-white transition-colors duration-300"
                />
              </a>
            </div>
          ))}
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
  );
};

const CareerServicesSection: React.FC = () => {
  const servicesData: ServiceItem[] = [
    {
      title: "Follow Up Letter Writing Service",
      description:
        "Sending a Follow-Up letter after a point of contact is an opportunity for you to mention anything you forgot to say during the meeting.",
      link: "/follow-up-letter",
    },
    {
      title: "Recommendation Letter Writing Service",
      description:
        "We put in great effort to strike a balance when writing letter as they need to be professional as well as genuine to create the credibility.",
      link: "/recommendation-letter",
    },
    {
      title: "Thank You Letter Writing Service",
      description:
        "Congratulations on getting selected for your dream job! Want to thank your employers through a thank you letter for choosing you as the best fit?",
      link: "/thank-you-letter",
    },
    {
      title: "ATS Compliant Resume Writing Service",
      description:
        "Let our professional resume writers help you earn the attention of your prospective employer and optimize your reach within no time.",
      link: "/ats-resume",
    },
  ];

  return <CareerServices services={servicesData} />;
};

export default CareerServicesSection;
