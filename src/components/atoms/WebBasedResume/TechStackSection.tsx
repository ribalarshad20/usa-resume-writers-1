import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaGitAlt,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGooglecloud,
  SiKubernetes,
  SiJest,
  SiStorybook,
} from "react-icons/si";

interface TechStackItem {
  name: string;
  icon: React.ComponentType;
  color: string;
}

interface TechStackProps {
  title?: string;
  technologies?: TechStackItem[];
}

const TechStackSection: React.FC<TechStackProps> = ({
  title = "Web Development Tech Stack",
  technologies = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
    { name: "Angular", icon: FaAngular, color: "#DD0031" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Sass", icon: FaSass, color: "#CC6699" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
  ],
}) => {
  return (
    <div className="relative z-10 bg-white py-16 max-w-7xl mx-auto">
      <section className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-[#C11A2F] text-lg font-medium mb-2 uppercase tracking-wide">
            Modern Web Technologies
          </h3>
          <h2 className="text-5xl font-extrabold text-[#2F4376] bg-clip-text">
            {title}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive collection of cutting-edge technologies powering
            modern web development
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-center items-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-4 group"
              title={tech.name}
            >
              <div
                className="p-5 bg-white shadow-lg rounded-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  backgroundColor: `${tech.color}10`, // Light background with 10% opacity
                  borderWidth: "1px",
                  borderColor: `${tech.color}30`, // Light border with 30% opacity
                }}
              >
                <tech.icon
                  className="w-14 h-14 transition-all duration-300"
                  color={tech.color}
                  style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}
                />
              </div>
              <span className="text-gray-700 font-medium text-sm group-hover:text-blue-600 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechStackSection;
