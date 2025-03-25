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
        bg-white text-slate-900 
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
          bg-gray-600 
          group-hover:bg-gray-500
        "
      ></div>

      {/* Description */}
      <p className="text-base leading-relaxed">{description}</p>
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
      title: "SEO Optimization",
      description:
        "Gain the edge on the job application competition by using proven SEO tools and proper keyword research.",
    },
    {
      icon: <Clock size={32} />,
      title: "24/7 Free Consultancy",
      description:
        "Our team of experts work directly with you via our 24/7 live chat to reach a quick and efficient resolution.",
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Unlimited Revisions",
      description:
        "Premium quality resumes with respect to your industry and get unlimited revisions until completely satisfied.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "100% Quality Assured",
      description:
        "Guarantee absolute, 100% quality. We build ourselves on great customers and we want you to be one of them.",
    },
  ];

  return (
    <div className="container mx-auto">
      <ServiceFeatures features={features} />
    </div>
  );
};

export default FeatureServices;
