import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import companyLogo from "../../assets/brand_logo.png";

interface FooterProps {
  companyName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  services: Array<{
    title: string;
    link: string;
  }>;
  companyLinks: Array<{
    title: string;
    link: string;
  }>;
  quickLinks: Array<{
    title: string;
    link: string;
  }>;
  socialMedia: {
    facebook: string;
    linkedin: string;
  };
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  address,
  contact,
  services,
  companyLinks,
  quickLinks,
  socialMedia,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#222F3E] relative z-10 w-full text-white mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl  container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <img
                src={companyLogo}
                alt={`${companyName} Logo`}
                className="h-10"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='50'%3E%3Crect fill='%23202a38' width='180' height='50'/%3E%3Ctext fill='white' font-family='Arial' font-weight='bold' font-size='16' x='10' y='30'%3E{companyName}%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <p className="text-sm text-gray-300 mb-2">
              {address.street}, {address.city}, {address.state} {address.zip},{" "}
              {address.country}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="text-green-400 text-sm mb-1"
            >
              {contact.email}
            </a>
            <a href={`tel:${contact.phone}`} className="text-green-400 text-sm">
              {contact.phone}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.link}
                    className="text-gray-300 hover:text-white transition duration-300 text-sm"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-gray-300 hover:text-white transition duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3 mb-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-gray-300 hover:text-white transition duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <h3 className="text-xl font-medium mb-4">Follow us</h3>
              <div className="flex space-x-2">
                <a
                  href={socialMedia.facebook}
                  className="bg-green-400 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href={socialMedia.linkedin}
                  className="bg-green-400 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 pb-4 text-center text-sm text-gray-400">
          <div className="mb-4">
            Copyright {currentYear} • {companyName} • All Rights Reserved •
            <a href="/privacy-policy" className="hover:text-white mx-1">
              Privacy Policy
            </a>{" "}
            •
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
          </div>
          <div className="uppercase text-xs tracking-wider mb-4">
            DISCLAIMER
          </div>
          <p className="text-xs max-w-4xl mx-auto">
            The website with all its applications and systems is an online
            service platform solely owned and operated by {companyName}. We
            provide content writing services to clients for their resume, cover
            letter, LinkedIn profile, entry level resumes and career switch
            resumes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
