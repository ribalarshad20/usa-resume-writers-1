import React, { useState } from "react";
import salesResume from "../../assets/travel.png";
import automotive from "../../assets/transportation.png";
import itManagement from "../../assets/banking.png";
import healthcare from "../../assets/healthcare.png";
import artDesign from "../../assets/entertainment.png";
import education from "../../assets/education.png";
import business from "../../assets/business.png";
import hospitality from "../../assets/food.png";
import hr from "../../assets/job_career.png";
import finance from "../../assets/fitness.png";

interface Industry {
  id: number;
  name: string;
  imageSrc: string;
  color: string;
}

interface IndustrySectionProps {
  industries: Industry[];
}

const IndustryItem: React.FC<{
  industry: Industry;
  isHovered: boolean;
  isAnyHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ industry, isHovered, isAnyHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="flex flex-col items-center mb-8 transition-all duration-300 ease-in-out"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`flex flex-col items-center mb-4 transition-opacity duration-300 ${
          isAnyHovered && !isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`h-4 w-4 rounded-full mb-2 transition-all duration-300 ${
            isHovered ? "scale-150" : ""
          }`}
          style={{ backgroundColor: industry.color }}
        ></div>
        <div
          className={`h-12 w-0.5 ${isHovered ? "bg-green-400" : "bg-gray-300"}`}
        ></div>
      </div>

      <p
        className={`text-sm font-medium text-center mb-4 transition-all duration-300 
          ${isHovered ? "text-green-400 font-bold" : ""}
          ${isAnyHovered && !isHovered ? "opacity-0" : "opacity-100"}`}
      >
        {industry.name}
      </p>

      {/* Standardized image container with fixed height */}
      <div
        className={`relative w-full h-64 flex items-end justify-center transition-all duration-300 ease-in-out ${
          isHovered ? "z-20" : ""
        }`}
      >
        <img
          src={industry.imageSrc}
          alt={`${industry.name} professional`}
          className={`absolute bottom-0 h-full w-auto max-w-none object-contain transition-all duration-300 ${
            isHovered
              ? "scale-110"
              : isAnyHovered
              ? "filter grayscale opacity-50 blur-sm"
              : ""
          }`}
        />
      </div>
    </div>
  );
};

const IndustrySection: React.FC<IndustrySectionProps> = ({ industries }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative z-10 max-w-full mx-auto">
      <div className="p-2 mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-700">
            Dynamic Resume Services
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-gray-800">Over </span>
            <span className="text-green-400">200 Industries</span>
            <span className="text-gray-800"> Served</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-16 bg-green-400"></div>
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm text-gray-600 text-center">
            Through Our Professional Resume Writing and Job Posting Services, We
            Have Meritoriously Served Clients Emanating from Every Industry
            Throughout the Globe
          </p>
        </div>

        {/* Industry People Grid with equal spacing and standardized image heights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {industries.map((industry) => (
            <IndustryItem
              key={industry.id}
              industry={industry}
              isHovered={hoveredId === industry.id}
              isAnyHovered={hoveredId !== null}
              onMouseEnter={() => setHoveredId(industry.id)}
              onMouseLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;

// Usage example component
const IndustrySectionExample: React.FC = () => {
  // Sample data
  const industries: Industry[] = [
    {
      id: 1,
      name: "Sales Resume",
      imageSrc: salesResume,
      color: "#ff6b6b",
    },
    {
      id: 2,
      name: "Automotive",
      imageSrc: automotive,
      color: "#8d8d8d",
    },
    {
      id: 3,
      name: "IT Management",
      imageSrc: itManagement,
      color: "#7a7a7a",
    },
    {
      id: 4,
      name: "Healthcare",
      imageSrc: healthcare,
      color: "#a4a4a4",
    },
    {
      id: 5,
      name: "Art & Design",
      imageSrc: artDesign,
      color: "#4de8c2",
    },
    {
      id: 6,
      name: "Education",
      imageSrc: education,
      color: "#ff9a3d",
    },
    {
      id: 7,
      name: "Business",
      imageSrc: business,
      color: "#7d9d3e",
    },
    {
      id: 8,
      name: "Restaurant Hospitality",
      imageSrc: hospitality,
      color: "#f57dbc",
    },
    {
      id: 9,
      name: "Human Resource",
      imageSrc: hr,
      color: "#b8b8b8",
    },
    {
      id: 10,
      name: "Finance Accounting",
      imageSrc: finance,
      color: "#47d3d3",
    },
  ];

  return <IndustrySection industries={industries} />;
};

export { IndustrySectionExample };
