import { Search, FileText, Upload } from "lucide-react";
import laptopImage from "../../../assets/element-3.png";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white pt-8 pb-8 pr-4 pl-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start text-left w-60">
      <div className="bg-[#C11A2F] pt-4 pb-4 pl-3 pr-3 rounded-lg mb-4 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

interface RecruitmentSectionProps {
  title: string;
  subtitle: string;
  tagline: string;
  services: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  laptopImageUrl: string;
}

const RecruitmentSection: React.FC<RecruitmentSectionProps> = ({
  title,
  subtitle,
  tagline,
  services,
  laptopImageUrl,
}) => {
  return (
    <section className="relative py-16 px-4 overflow-hidden w-full">
      {/* Laptop image container - positioned absolutely */}
      <div className="absolute left-0 bottom-0 w-1/2 max-w-2xl hidden md:block">
        <img
          src={laptopImageUrl}
          alt="Recruitment Dashboard on Laptop"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content container with z-index to appear above the laptop image */}
      <div className="relative z-10 w-full mx-auto pb-6">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 font-semibold mb-8">{tagline}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
            {title}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[#C11A2F]">
            {subtitle}
          </h3>
          <div className="w-24 h-[2px] bg-[#C11A2F] mx-auto mt-6"></div>
          <p className="mt-4 mb-24 text-[#22303F] font-semibold max-w-2xl mx-auto">
            {services.length > 0
              ? "Tired of Applying to Jobs? Sit back and relax while our professionals do the work for you."
              : ""}
          </p>
        </div>

        {/* Removed gap, used flex instead to minimize spacing */}
        <div className="flex justify-center md:ml-80 md:mr-30 pb-16 space-x-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sample usage with the data from the image
const RecruitmentSectionExample = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Database Search for Suitable Jobs for You",
      description:
        "Our professionals know that corresponding people to the precise roles to create that perfect 'fit' transforms people's lives.",
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Apply & Fill in All Job Applications for You",
      description:
        "No clue where to initiate? Don't worry, we know the art of filling in a stellar job application and land that opportunity for you.",
    },
    {
      icon: <Upload className="h-8 w-8 text-white" />,
      title: "Send Resume to Our Recruiter Database",
      description:
        "We direct your resume to recruiters through distinguished platforms and boost your chances at landing a dream job prospect.",
    },
  ];

  return (
    <RecruitmentSection
      tagline="Bringing Recruiters-Seekers Together"
      title="Bringing Recruiters-Seekers Together"
      subtitle="to Achieve Great Things"
      services={services}
      laptopImageUrl={laptopImage}
    />
  );
};

export default RecruitmentSectionExample;
