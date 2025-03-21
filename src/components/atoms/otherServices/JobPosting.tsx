import React from "react";
import ResumeSamplesPage from "../ResumeSamplesSection";
import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { CTABannerExample } from "../CTABanner";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import titleBanner from "../../../assets/banner-faq.jpeg";
import ServicesTitleSection from "../servicePages/ServicesTitleSection";
import RecruitmentSectionExample from "./RecruitmentSection";

const JobPosting: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ServicesTitleSection title="Job Posting" backgroundImage={titleBanner} />
      <RecruitmentSectionExample />
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

export default JobPosting;
