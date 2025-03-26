import { Monitor, Clock, RefreshCw, ShieldCheck } from "lucide-react";

// Single Feature card component
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  showRightBorder?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  showRightBorder = false,
}) => {
  return (
    <div
      className={`
        group flex flex-col items-start 
        p-12 
        bg-white text-[slate-900 ]
        hover:bg-slate-800 hover:text-white 
        transition-colors duration-300
        ${showRightBorder ? "border-r border-gray-200" : ""}
        h-full
      `}
    >
      {/* Icon */}
      <div className="mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      {/* Horizontal line (divider) */}
      <div
        className="
          w-12 h-1 
          mb-6 
          bg-[#C11A2F]
          group-hover:bg-[#C11A2F]
        "
      ></div>

      {/* Description */}
      <p className="text-base leading-relaxed ">{description}</p>
    </div>
  );
};

// The main 4-column features section
interface ServiceFeaturesProps {
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ features }) => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#FBFCFD]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            showRightBorder={index !== features.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

const FeatureServices: React.FC = () => {
  const features = [
    {
      icon: <Monitor size={32} />,
      title: "Smart Keyword Targeting",
      description:
        "Boost your resume’s visibility with strategic keywords and SEO practices tailored to your dream role.",
    },
    {
      icon: <Clock size={32} />,
      title: "Around-the-Clock Support",
      description:
        "Connect with our experts anytime through 24/7 live chat for quick answers and personalized resume assistance.",
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Endless Custom Edits",
      description:
        "Enjoy unlimited revisions to match your industry goals—perfection is guaranteed until you’re completely satisfied.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Top-Tier Quality Promise",
      description:
        "We promise 100% satisfaction with resumes that exceed expectations and elevate your professional brand confidently.",
    },
  ];

  return (
    <div className="container mx-auto">
      <ServiceFeatures features={features} />
    </div>
  );
};

export default FeatureServices;
