import React from "react";

interface ServicesSectionProps {
  title?: string;
  backgroundImage?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = "SERVICES",
  backgroundImage = "/path/to/your/image.jpg",
}) => {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-90 overflow-hidden mt-20">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      ></div>

      <div className="absolute bottom-0 left-0">
        <div className="bg-[#2F2F2F] py-13 pl-40 pr-24 rounded-tr-[90px]">
          <h2 className="text-white text-3xl md:text-4xl lg:text-4xl font-bold uppercase">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
