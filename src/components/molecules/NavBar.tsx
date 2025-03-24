import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import bradLogo from "../../assets/brand_logo.png";
import ResumeForm, { FormData } from "../atoms/ResumeForm";

interface NavBarProps {
  logoUrl?: string;
}

const NavBar: React.FC<NavBarProps> = () => {
  // Controls the desktop dropdowns
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showResumeForm, setShowResumeForm] = useState(false);
  // Controls the mobile side panel
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hover handlers for desktop dropdown
  const handleDropdownHover = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };
  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    setShowResumeForm(false);
  };

  // Desktop dropdown content: Services
  const servicesDropdown = (
    <div
      className="absolute text-sm font-semibold top-full left-0 w-56 bg-[#1F2937] text-white z-50 rounded-xl mt-2 divide-y divide-gray-700"
      onMouseEnter={() => handleDropdownHover("services")}
      onMouseLeave={handleDropdownLeave}
    >
      <a
        href="/services/resume-writing/"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Resume Writing
      </a>
      <a
        href="/services/cover-letters/"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Cover Letter Writing
      </a>
      <a
        href="/services/linkedIn-profile/"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        LinkedIn Profile Writing
      </a>
      <a
        href="/services/career-switch/"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Career Switch Resume
      </a>
      <a
        href="/services/entry-level/"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Entry Level Resume
      </a>
    </div>
  );

  // Desktop dropdown content: Visume
  const visumeDropdown = (
    <div
      className="absolute text-sm font-semibold top-full left-0 w-56 bg-[#1F2937] text-white z-50 rounded-xl mt-2 divide-y divide-gray-700"
      onMouseEnter={() => handleDropdownHover("visume")}
      onMouseLeave={handleDropdownLeave}
    >
      <a
        href="/services/video-resume/"
        className="block px-6 py-3 hover:bg-[#2D3748]"
      >
        Video Resume
      </a>
      <a
        href="/services/interactive-resume/"
        className="block px-6 py-3 hover:bg-[#2D3748]"
      >
        Interactive Resume
      </a>
    </div>
  );

  // Desktop dropdown content: Other Services
  const otherServicesDropdown = (
    <div
      className="absolute text-sm font-semibold top-full left-0 w-56 bg-[#1F2937] text-white z-50 rounded-xl mt-2 divide-y divide-gray-700"
      onMouseEnter={() => handleDropdownHover("otherServices")}
      onMouseLeave={handleDropdownLeave}
    >
      <a
        href="/services/thank-you-letter/"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Thank You Letter
      </a>
      <a
        href="/services/follow-up-letter/"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Follow Up Letter
      </a>
      <a
        href="/services/recommendation-letter/"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Recommendation Letter
      </a>
      <a
        href="/services/job-posting/"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Job Posting
      </a>
    </div>
  );

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 transition-all duration-300 p-1 bg-white text-[#222F3E]">
        {/* Top bar container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img
                  src={bradLogo}
                  alt="Resume Writers USA"
                  className="h-8 md:h-12"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-3">
              <div
                className="relative group"
                onMouseEnter={() => handleDropdownHover("services")}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  href="/services/"
                  className={`text-black font-semibold transition-colors duration-200 py-3 px-4 pb-12 rounded-xl ${
                    activeDropdown === "services"
                      ? "bg-[#1F2937] text-white"
                      : "bg-transparent"
                  }`}
                >
                  Services
                </a>
                {activeDropdown === "services" && servicesDropdown}
              </div>

              <a
                href="/services/web-based-resume/"
                className="text-black font-semibold hover:text-green-500 transition-colors duration-200 py-6 px-2"
              >
                Web-Based Resume
              </a>

              <div
                className="relative group"
                onMouseEnter={() => handleDropdownHover("visume")}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  href="/services/video-resume/"
                  className={`text-black font-semibold transition-colors duration-200 py-3 px-4 pb-12 rounded-xl ${
                    activeDropdown === "visume"
                      ? "bg-[#1F2937] text-white"
                      : "bg-transparent"
                  }`}
                >
                  Visume
                </a>
                {activeDropdown === "visume" && visumeDropdown}
              </div>

              <div
                className="relative group"
                onMouseEnter={() => handleDropdownHover("otherServices")}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  href="/services/thank-you-letter/"
                  className={`text-black font-semibold transition-colors duration-200 py-3 px-4 pb-12 rounded-xl ${
                    activeDropdown === "otherServices"
                      ? "bg-[#1F2937] text-white"
                      : "bg-transparent"
                  }`}
                >
                  Other Services
                </a>
                {activeDropdown === "otherServices" && otherServicesDropdown}
              </div>

              <a
                href="/pricing/"
                className="text-black font-semibold hover:text-green-500 transition-colors duration-200 py-6 px-2"
              >
                Pricing
              </a>
              <button
                onClick={() => setShowResumeForm(true)}
                className="ml-4 px-6 py-3 font-semibold bg-[#67D794] border border-transparent hover:bg-white hover:border-[#67D794] text-black transition-colors duration-200"
              >
                Get Your Resume Today!
              </button>
            </div>

            {/* Hamburger Button (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-[#67D794]"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Side Panel */}
        <div
          className={`
          fixed top-0 left-0 w-full h-full bg-black text-white 
          transform transition-transform duration-300 
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          md:hidden
        `}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <X size={24} />
          </button>

          {/* Side Panel Content */}
          <div className="mt-16 px-4">
            <ul className="space-y-3 text-base">
              {/* Services */}
              <li className="border-b border-gray-600 pb-3">
                <a href="/services/" className="font-semibold">
                  Services
                </a>
                <ul className="pl-4 mt-2 space-y-1 text-gray-300 text-sm">
                  <li>
                    <a
                      href="/services/resume-writing/"
                      className="hover:text-gray-100"
                    >
                      - Resume Writing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/cover-letters/"
                      className="hover:text-gray-100"
                    >
                      - Cover Letter Writing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/linkedIn-profile/"
                      className="hover:text-gray-100"
                    >
                      - LinkedIn Profile Writing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/career-switch/"
                      className="hover:text-gray-100"
                    >
                      - Career Switch Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/entry-level/"
                      className="hover:text-gray-100"
                    >
                      - Entry Level Resume
                    </a>
                  </li>
                </ul>
              </li>

              {/* Web-Based Resume */}
              <li className="border-b border-gray-600 pb-3">
                <a
                  href="/services/web-based-resume/"
                  className="font-semibold hover:text-gray-100"
                >
                  Web-Based Resume
                </a>
              </li>

              {/* Visume */}
              <li className="border-b border-gray-600 pb-3">
                <a
                  href="/services/video-resume/"
                  className="font-semibold hover:text-gray-100"
                >
                  Visume
                </a>
                <ul className="pl-4 mt-2 space-y-1 text-gray-300 text-sm">
                  <li>
                    <a
                      href="/services/video-resume/"
                      className="hover:text-gray-100"
                    >
                      - Video Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/interactive-resume/"
                      className="hover:text-gray-100"
                    >
                      - Interactive Resume
                    </a>
                  </li>
                </ul>
              </li>

              {/* Other Services */}
              <li className="border-b border-gray-600 pb-3">
                <a
                  href="/services/thank-you-letter/"
                  className="font-semibold hover:text-gray-100"
                >
                  Other Services
                </a>
                <ul className="pl-4 mt-2 space-y-1 text-gray-300 text-sm">
                  <li>
                    <a
                      href="/services/thank-you-letter/"
                      className="hover:text-gray-100"
                    >
                      - Thank You Letter
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/follow-up-letter/"
                      className="hover:text-gray-100"
                    >
                      - Follow Up Letter
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/recommendation-letter/"
                      className="hover:text-gray-100"
                    >
                      - Recommendation Letter
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/job-posting/"
                      className="hover:text-gray-100"
                    >
                      - Job Posting
                    </a>
                  </li>
                </ul>
              </li>

              {/* Pricing */}
              <li className="border-b border-gray-600 pb-3">
                <a
                  href="/pricing/"
                  className="font-semibold hover:text-gray-100"
                >
                  Pricing
                </a>
              </li>

              {/* CTA Button */}
              <li className="mt-4">
                <button
                  onClick={() => {
                    setShowResumeForm(true);
                    setIsMenuOpen(false);
                  }}
                  className="inline-block w-full px-3 py-2 bg-[#67D794] text-black text-center font-semibold rounded-md hover:bg-white hover:border hover:border-[#67D794]"
                >
                  Get Your Resume Today!
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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

export default NavBar;
