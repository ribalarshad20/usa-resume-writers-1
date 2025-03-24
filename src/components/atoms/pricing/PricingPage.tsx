import React from "react";
import resumeCoverImage from "../../../assets/ser-detail-11.png";
import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import titleBanner from "../../../assets/banner-video-resume.jpeg";
import ServicesTitleSection from "../servicePages/ServicesTitleSection";
import ServiceFeatures from "../servicePages/ServiceFeatures";
import PricingGrid from "./PricingGrid";
import CTABanner from "../CTABanner";

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <ServicesTitleSection title="Pricing" backgroundImage={titleBanner} />
      <ServiceFeatures
        title1="How We Make Your"
        title2="Interactive Resume Professionally"
        description="Enhance your persona through your resume by adding visuals and engaging elements to highlight your exposure and industry understanding. Recruiters retain visuals more than text giving you a competitive advantage. Interactive Resumes also give increased authenticity to the profile. We create a winning resume that reflects the eye-catching visual layout of your professional experience and personality."
        imageSrc={resumeCoverImage}
        onButtonClick={() => console.log("Button clicked")}
      />
      <PricingGrid />
      <HeroSectionExample />
      <CareerServicesSection />
      <ProcessSectionExample />
      <CTABanner />
      <TestimonialSectionExample />
      <Footer {...footerData} />
    </div>
  );
};

export default PricingPage;
