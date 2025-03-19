import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import bradLogo from "../../assets/brand_logo.png";

interface NavBarProps {
  logoUrl?: string;
}

const NavBar: React.FC<NavBarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white" : "bg-white"
      }`}
    >
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
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="/services"
              className="text-black font-semibold hover:text-green-500 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="/web-based-resume"
              className="text-black font-semibold hover:text-green-500 transition-colors duration-200"
            >
              Web-Based Resume
            </a>
            <a
              href="/visume"
              className="text-black font-semibold hover:text-green-500 transition-colors duration-200"
            >
              Visume
            </a>
            <a
              href="/other-services"
              className="text-black font-semibold hover:text-green-500 hover:text-unde transition-colors duration-200"
            >
              Other Services
            </a>
            <a
              href="/pricing"
              className="text-black font-semibold hover:text-green-500 transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="/get-started"
              className="ml-4 px-6 py-3 font-semibold bg-[#67D794] hover:bg-green-500 text-black transition-colors duration-200"
            >
              Get Your Resume Today!
            </a>
          </div>

          {/* Mobile Navigation Button */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/services"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Services
            </a>
            <a
              href="/web-based-resume"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Web-Based Resume
            </a>
            <a
              href="/visume"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Visume
            </a>
            <a
              href="/other-services"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Other Services
            </a>
            <a
              href="/pricing"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Pricing
            </a>
            <a
              href="/get-started"
              className="block px-3 py-2 mt-4 bg-green-400 hover:bg-green-500 text-white rounded text-center"
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
