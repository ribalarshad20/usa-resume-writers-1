import React from "react";
import { Monitor } from "lucide-react";

interface ServiceItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesProps {
  mainTitle?: string;
  subtitle?: string;
  services?: ServiceItem[];
  buttonText?: string;
}

const ServicesSection: React.FC<ServicesProps> = ({
  mainTitle = "Customized Web-Based Resumes & Cover Letters",
  subtitle = "We create ATS-friendly, interactive web resumes that highlight your strengths and help you stand out.",
  services = [
    {
      title: "LinkedIn Profile Optimization",
      description:
        "We help optimize your LinkedIn profile to improve your job prospects and connect with employers.",
    },
    {
      title: "Industry-Specific Web Resumes",
      description:
        "Tailored web resumes that meet industry trends and employer expectations for your specific field.",
    },
    {
      title: "Job Search Strategy & Digital Support",
      description:
        "We guide your digital job search, focusing on the best opportunities and strategies.",
    },
  ],
  buttonText = "Start Your Project",
}) => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto">
      <section className="container mx-auto px-4 py-16 text-center">
        {/* Red Top Text */}
        <h3 className="text-[#C11A2F] text-lg font-medium mb-2">{mainTitle}</h3>

        {/* Main Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{subtitle}</h2>

        {/* Subtitle/Description */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg"
            >
              {/* Circular Icon Background */}
              <div className="w-24 h-24 bg-[#2F4376] rounded-full flex items-center justify-center mb-6">
                <Monitor className="text-white w-12 h-12" />
              </div>

              {/* Service Title */}
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h4>

              {/* Service Description */}
              <p className="text-gray-500 text-center">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="w-52 px-6 py-3 font-semibold bg-[#C11A2F] border border-transparent hover:bg-transparent hover:border-red-600 hover:text-black text-white transition-colors duration-200">
          {buttonText}
        </button>
      </section>
    </div>
  );
};

export default ServicesSection;
