import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import companyLogo from "../../assets/NewUpdatedImages/brand-logo-white.png";

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
    twitter?: string;
    instagram?: string;
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
    <footer className="bg-[#2F4376] relative z-10 w-full text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-24 pb-8 sm:pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img
                src={companyLogo}
                alt={`${companyName} Logo`}
                className="h-12 sm:h-14"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='50'%3E%3Crect fill='%23202a38' width='180' height='50'/%3E%3Ctext fill='white' font-family='Arial' font-weight='bold' font-size='16' x='10' y='30'%3E${companyName}%3C/text%3E%3C/svg%3E`;
                }}
              />
            </div>
            <div className="bg-[#2a3847] p-4 rounded-lg shadow-inner mb-4 transform transition-transform duration-300 hover:scale-105">
              <p className="text-sm text-gray-300 mb-3">
                {address.street}, <br />
                {address.city}, {address.state} {address.zip}, <br />
                {address.country}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="text-white  text-sm mb-2 flex items-center group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 group-hover:animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="text-white text-sm flex items-center group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 group-hover:animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {contact.phone}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-xl font-medium mb-4 pb-2 border-b border-[#C11A2F] inline-block">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="transform transition-transform duration-300 hover:translate-x-2"
                >
                  <a
                    href={service.link}
                    className="text-gray-300 hover:text-white transition duration-300 text-sm flex items-center"
                  >
                    <svg
                      className="h-3 w-3 mr-2 text--[#C11A2F]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="mt-4 lg:mt-0">
            <h3 className="text-xl font-medium mb-4 pb-2 border-b border-[#C11A2F] inline-block">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li
                  key={index}
                  className="transform transition-transform duration-300 hover:translate-x-2"
                >
                  <a
                    href={link.link}
                    className="text-gray-300 hover:text-white transition duration-300 text-sm flex items-center"
                  >
                    <svg
                      className="h-3 w-3 mr-2 text-[#C11A2F]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div className="mt-4 lg:mt-0">
            <h3 className="text-xl font-medium mb-4 pb-2 border-b border-[#C11A2F] inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="transform transition-transform duration-300 hover:translate-x-2"
                >
                  <a
                    href={link.link}
                    className="text-gray-300 hover:text-white transition duration-300 text-sm flex items-center"
                  >
                    <svg
                      className="h-3 w-3 mr-2 text-[#C11A2F]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <h3 className="text-xl font-medium mb-4 pb-2 border-b border-[#C11A2F] inline-block">
                Connect with us
              </h3>
              <div className="flex space-x-3">
                <a
                  href={socialMedia.facebook}
                  className="bg-[#C11A2F] text-white rounded-full w-10 h-10 flex items-center justify-center transition duration-300 transform hover:scale-110 hover:rotate-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href={socialMedia.linkedin}
                  className="bg-[#C11A2F] text-white rounded-full w-10 h-10 flex items-center justify-center transition duration-300 transform hover:scale-110 hover:rotate-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>
                {socialMedia.twitter && (
                  <a
                    href={socialMedia.twitter}
                    className="bg-[#C11A2F] text-white rounded-full w-10 h-10 flex items-center justify-center transition duration-300 transform hover:scale-110 hover:rotate-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={18} />
                  </a>
                )}
                {socialMedia.instagram && (
                  <a
                    href={socialMedia.instagram}
                    className="bg-[#C11A2F] text-white rounded-full w-10 h-10 flex items-center justify-center transition duration-300 transform hover:scale-110 hover:rotate-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <div className="mb-4">
            <span className="inline-block">
              Copyright &copy; {currentYear} • {companyName} • All Rights
              Reserved
            </span>
            <span className="mx-2 hidden sm:inline">|</span>
            <span className="inline-block">
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>{" "}
              •
              <a
                href="/terms"
                className="hover:text-white transition-colors duration-300 ml-1"
              >
                Terms of Service
              </a>
            </span>
          </div>
          <div className="uppercase text-xs tracking-wider mb-4 font-semibold">
            DISCLAIMER
          </div>
          <p className="text-xs max-w-4xl mx-auto bg-[#283542] p-4 rounded-lg">
            The website with all its applications and systems is an online
            service platform solely owned and operated by {companyName}. We
            provide content writing services to clients for their resume, cover
            letter, LinkedIn profile, entry level resumes and career switch
            resumes.
          </p>
        </div>
      </div>

      {/* Bottom Wave Decoration
      <div className="w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-8 sm:h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#1a2530"
          ></path>
        </svg>
      </div> */}
    </footer>
  );
};

export default Footer;
