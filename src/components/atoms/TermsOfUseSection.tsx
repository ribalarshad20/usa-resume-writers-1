import React from "react";
import ServicesTitleSection from "./servicePages/ServicesTitleSection";
import ResumeSamplesPage from "./ResumeSamplesSection";
import HeroSectionExample from "./HeroSectionMain";
import CareerServicesSection from "./CareerServicesSection";
import { ProcessSectionExample } from "./ProcessSection";
import { CTABannerExample } from "./CTABanner";
import { TestimonialSectionExample } from "./TestimonialSection";
import Footer from "./Footer";
import { footerData } from "../../data/footerData";
import titleBanner from "../../assets/banner-process.jpeg";
import TermsOfUse from "./TermsOfUse";

const TermsOfUseSection: React.FC = () => {
  return (
    <div className="bg-white">
      <ServicesTitleSection
        title="Terms Of Use"
        backgroundImage={titleBanner}
      />
      <TermsOfUse />
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

export default TermsOfUseSection;
