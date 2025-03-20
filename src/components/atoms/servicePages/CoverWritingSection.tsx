import React from "react";
import resumeCoverImage from "../../../assets/ser-detail-1.jpeg";
import ResumeSamplesPage from "../ResumeSamplesSection";
import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { CTABannerExample } from "../CTABanner";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";

const CoverWritingSection: React.FC = () => {
  const onButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center pt-30">
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={resumeCoverImage}
            alt="Resume Writing"
            className="w-[580px] h-[600px] rounded shadow border-2 border-green-400"
          />
        </div>

        {/* Right: Text Content */}
        <div className="mt-8 md:mt-0 md:w-1/2 md:pl-4">
          <div className="flex items-center mb-4">
            {/* Vertical green line */}
            <div className="w-[3px] h-10 bg-green-400 mr-3"></div>
            <h2 className="text-3xl font-bold text-green-600">
              ATS Compliant Resume Writing Service
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Get picked by corporates and multinationals of the market even
            before going through the process of interview. Resume Writers USA
            has a self-motivated and energetic team of certified professional
            resume writers and HR professionals with ample knowledge in
            analyzing and crafting powerful resumes for niche industries. No
            matter what your experience is, Resume Writers USA is here to make
            you appear adroit by highlighting your core expertise.
          </p>
          <button
            type="button"
            onClick={onButtonClick}
            className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </div>
      <ResumeSamplesPage />
      <HeroSectionExample />
      <CareerServicesSection />
      <ProcessSectionExample />
      <CTABannerExample />
      <TestimonialSectionExample />
      <Footer {...footerData} />
    </div>
  );
};

export default CoverWritingSection;
