import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import bradLogo from "../../assets/brand_logo.png";

interface NavBarProps {
  logoUrl?: string;
}

const NavBar: React.FC<NavBarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownHover = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Dropdown content for Services with divider lines added
  const servicesDropdown = (
    <div
      className="absolute top-full left-0 w-64 bg-[#1F2937] text-white z-50 rounded-xl mt-2 divide-y divide-gray-700"
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

  // Dropdown content for Visume with divider lines added
  const visumeDropdown = (
    <div
      className="absolute top-full left-0 w-64 bg-[#1F2937] text-white z-50 rounded-xl mt-2 divide-y divide-gray-700"
      onMouseEnter={() => handleDropdownHover("visume")}
      onMouseLeave={handleDropdownLeave}
    >
      <a
        href="/visume-basic"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Basic Visume
      </a>
      <a
        href="/visume-premium"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Premium Visume
      </a>
      <a
        href="/visume-professional"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Professional Visume
      </a>
    </div>
  );

  // Dropdown content for Other Services with divider lines added
  const otherServicesDropdown = (
    <div
      className="absolute top-full left-0 w-64 bg-[#1F2937] text-white z-50 rounded-xl mt-2 divide-y divide-gray-700"
      onMouseEnter={() => handleDropdownHover("otherServices")}
      onMouseLeave={handleDropdownLeave}
    >
      <a
        href="/interview-coaching"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Interview Coaching
      </a>
      <a
        href="/career-counseling"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Career Counseling
      </a>
      <a
        href="/job-search-assistance"
        className="block px-8 py-3 hover:bg-[#2D3748] transition-colors duration-200"
      >
        Job Search Assistance
      </a>
    </div>
  );

  return (
    <nav className="w-full fixed top-0 left-0 z-50 transition-all duration-300 p-1 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src={bradLogo}
                alt="Resume Writers USA"
                className="h-8 md:h-12"
              />
            </a>
          </div>

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
              href="/web-based-resume"
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
                href="/visume"
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
                href="/other-services"
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
              href="/pricing"
              className="text-black font-semibold hover:text-green-500 transition-colors duration-200 py-6 px-2"
            >
              Pricing
            </a>
            <a
              href="/get-started"
              className="ml-4 px-6 py-3 font-semibold bg-[#67D794] border border-transparent hover:bg-white hover:border-[#67D794] text-black transition-colors duration-200"
            >
              Get Your Resume Today!
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#67D794]"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="block">
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "mobileServices"
                      ? null
                      : "mobileServices"
                  )
                }
                className={`flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md ${
                  activeDropdown === "mobileServices"
                    ? "bg-[#1F2937] text-white"
                    : ""
                }`}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === "mobileServices" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobileServices" && (
                <div className="bg-[#1F2937] text-white divide-y divide-gray-700">
                  <a
                    href="/resume-writing"
                    className="block px-6 py-3 hover:bg-[#2D3748]"
                  >
                    Resume Writing
                  </a>
                  <a
                    href="/services/cover-letters/"
                    className="block px-6 py-3 hover:bg-[#2D3748]"
                  >
                    Cover Letter Writing
                  </a>
                  <a
                    href="/services/linkedIn-profile/"
                    className="block px-6 py-3 hover:bg-[#2D3748]"
                  >
                    LinkedIn Profile Writing
                  </a>
                  <a
                    href="/services/career-switch/"
                    className="block px-6 py-3 hover:bg-[#2D3748]"
                  >
                    Career Switch Resume
                  </a>
                  <a
                    href="/services/entry-level/"
                    className="block px-6 py-3 hover:bg-[#2D3748]"
                  >
                    Entry Level Resume
                  </a>
                </div>
              )}
            </div>

            <a
              href="/web-based-resume"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Web-Based Resume
            </a>

            <div className="block">
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "mobileVisume" ? null : "mobileVisume"
                  )
                }
                className={`flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md ${
                  activeDropdown === "mobileVisume"
                    ? "bg-[#1F2937] text-white"
                    : ""
                }`}
              >
                Visume
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === "mobileVisume" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobileVisume" && (
                <div className="bg-[#1F2937] text-white divide-y divide-gray-700">
                  <a
                    href="/visume-basic"
                    className="block px-6 py-3 hover:bg-[#2D3748]"
                  >
                    Basic Visume
                  </a>
                  <a
                    href="/visume-premium"
                    className="block px-6 py-3 hover:bg-[#2D3748]"
                  >
                    Premium Visume
                  </a>
                  <a
                    href="/visume-professional"
                    className="block px-6 py-3 hover:bg-[#2D3748]"
                  >
                    Professional Visume
                  </a>
                </div>
              )}
            </div>

            <div className="block">
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "mobileOtherServices"
                      ? null
                      : "mobileOtherServices"
                  )
                }
                className={`flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md ${
                  activeDropdown === "mobileOtherServices"
                    ? "bg-[#1F2937] text-white"
                    : ""
                }`}
              >
                Other Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === "mobileOtherServices" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobileOtherServices" && (
                <div className="bg-[#1F2937] text-white divide-y divide-gray-700">
                  <a
                    href="/interview-coaching"
                    className="block px-6 py-3 hover:bg-[#2D3748]"
                  >
                    Interview Coaching
                  </a>
                  <a
                    href="/career-counseling"
                    className="block px-6 py-3 hover:bg-[#2D3748]"
                  >
                    Career Counseling
                  </a>
                  <a
                    href="/job-search-assistance"
                    className="block px-6 py-3 hover:bg-[#2D3748]"
                  >
                    Job Search Assistance
                  </a>
                </div>
              )}
            </div>

            <a
              href="/pricing"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Pricing
            </a>
            <a
              href="/get-started"
              className="block px-3 py-2 mt-4 bg-[#67D794] hover:bg-white hover:border hover:border-[#67D794] text-black font-semibold text-center"
            >
              Get Your Resume Today!
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
