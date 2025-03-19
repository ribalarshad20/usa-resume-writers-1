import React from "react";

type ResumeSample = {
  title: string;
  imageUrl: string;
  description: string;
};

type CustomResumeSectionProps = {
  resumeSamples: ResumeSample[];
};

const CustomResumeSection: React.FC<CustomResumeSectionProps> = ({
  resumeSamples,
}) => {
  return (
    <div className="bg-white py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Custom Written Resume
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Our certified resume writers effortlessly build a job-worthy resume
          that gets you hired faster and fits all the HR standards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resumeSamples.map((sample, index) => (
            <div
              key={index}
              className="bg-white border shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={sample.imageUrl}
                alt={sample.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {sample.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {sample.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-10 bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 focus:outline-none">
          Request For More Samples
        </button>
      </div>
    </div>
  );
};

export default CustomResumeSection;
