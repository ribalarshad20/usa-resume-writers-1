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
import ServicesTitleSection from "./ServicesTitleSection";
import titleBanner from "../../../assets/banner-faq.jpeg";
import ServiceFeatures from "./ServiceFeatures";

const ResumeWritingSection: React.FC = () => {
  return (
    <div className="bg-white">
      <ServicesTitleSection
        title="Resume Writing"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="ATS Compliant"
        title2="Resume Writing Service"
        description="Get picked by corporates and multinationals of the market even before going through the process of interview. Resume Writers USA has a self-motivated and energetic team of certified professional resume writers and HR professionals with ample knowledge in analyzing and crafting powerful resumes for niche industries. No matter what your experience is, Resume Writers USA is here to make you appear adroit by highlighting your core expertise."
        imageSrc={resumeCoverImage}
        onButtonClick={() => console.log("Button clicked")}
      />
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

export default ResumeWritingSection;
