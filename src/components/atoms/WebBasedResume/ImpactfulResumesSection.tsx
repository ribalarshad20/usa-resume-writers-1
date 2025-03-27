import React from "react";
import imageBanner from "../../../assets/webBased-Banner.png";

interface ResumeHighlightProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const ImpactfulResumesSection: React.FC<ResumeHighlightProps> = ({
  description = "The job market is evolving—and your resume should, too. The digital era demands methods that extend beyond essential documents to stand out. Companies can discover important information about candidates by using video or web-based resume platforms, enabling them to display their skills through engaging visual content.",
  imageUrl = imageBanner,
}) => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto">
      <section className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
          <h2 className="text-5xl font-bold">
            <span className="text-black">How We Create Impactful Video & </span>
            <span className="text-red-600">Web-Based Resumes</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            {description}
          </p>
        </div>

        {/* Illustration Area */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          {/* Image Mockup */}
          <div className="relative w-full max-w-[600px]">
            <img
              src={imageUrl}
              alt="Impactful Resumes Illustration"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactfulResumesSection;
