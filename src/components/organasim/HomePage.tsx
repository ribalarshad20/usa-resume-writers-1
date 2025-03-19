import React from "react";
import HeroSection from "../atoms/HeroSection";
import FeatureServices from "../atoms/ServiceFeatures";
import WhyChooseUs from "../atoms/WhyChooseUs";
import CareerServicesSection from "../atoms/CareerServicesSection";
import ATSResumeSection from "../atoms/ATSResumeSection";
import { IndustrySectionExample } from "../atoms/IndustrySection";
import HeroSectionExample from "../atoms/HeroSectionMain";

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-20 pb-20">
      <HeroSection />
      <FeatureServices />
      <WhyChooseUs />
      <CareerServicesSection />
      <ATSResumeSection />
      <IndustrySectionExample />
      <HeroSectionExample />
    </div>
  );
};

export default HomePage;
