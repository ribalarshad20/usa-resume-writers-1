import React from "react";
import resumeCoverImage from "../../../assets/ser-detail-3.png";
import ResumeSamplesPage from "../ResumeSamplesSection";
import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import ServiceFeatures from "./ServiceFeatures";
import titleBanner from "../../../assets/banner-faq.jpeg";
import ServicesTitleSection from "./ServicesTitleSection";
import CTABanner from "../CTABanner";

const LinkedInProfileSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ServicesTitleSection
        title="LinkedIn Profile Writing"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="Influential LinkedIn"
        title2="Profile Writing Service"
        description="Get an optimized LinkedIn profile that grabs the instant attention and brings the recruiters at your doorstep. We know how to dress up your professional networking profile to make it look appealing to Human Resource personnel. No matter what your experience is, Resume Writers USA is all set to make you look Proficient by highlighting your core strengths and expertise."
        imageSrc={resumeCoverImage}
        onButtonClick={() => console.log("Button clicked")}
      />
      <ResumeSamplesPage />
      <HeroSectionExample />
      <CareerServicesSection />
      <ProcessSectionExample />
      <CTABanner />
      <TestimonialSectionExample />
      <Footer {...footerData} />
    </div>
  );
};

export default LinkedInProfileSection;
