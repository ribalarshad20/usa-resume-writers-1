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
import servicesBanner from "../../../assets/services_banner.png";

const MainServicesPage: React.FC = () => {
  return (
    <>
      {" "}
      <div className="relative w-full h-72 md:h-100 lg:h-100 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${servicesBanner})` }}
        />
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center pt-10">
          <div className="flex flex-col md:flex-row w-full pt-16 mb-16">
            <div className="md:w-1/2 flex justify-center">
              <img
                src={resumeCoverImage}
                alt="Resume Writing"
                className="w-[450px] h-[550px] rounded"
              />
            </div>

            {/* Right: Content */}
            <div className="md:w-1/2 bg-white p-8 flex flex-col justify-center">
              <div className="mb-6">
                <div className="text-gray-200 text-8xl font-bold mb-4">01</div>
                <h2 className="text-4xl font-bold text-black mb-6">
                  ATS Compliant
                  <br />
                  Resume Writing Service
                </h2>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Get picked by corporates and multinationals even before going
                through the process of interview. Our self-motivated team of
                writers with ample knowledge in crafting powerful resumes for
                niche industries. Win the attention of Human Resource
                Professionals to review your job application that break the deal
                for you. Get professionally written cover letters to get
                insights from CPCC certified professionals.
              </p>

              <div className="flex items-center">
                <div className="text-2xl">→</div>
              </div>
            </div>
          </div>
        </div>

        {/* Other sections */}
        <ResumeSamplesPage />
        <HeroSectionExample />
        <CareerServicesSection />
        <ProcessSectionExample />
        <CTABannerExample />
        <TestimonialSectionExample />
        <Footer {...footerData} />
      </div>
    </>
  );
};

export default MainServicesPage;
