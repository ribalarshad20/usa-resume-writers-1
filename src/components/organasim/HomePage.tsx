import React from "react";
import HeroSection from "../atoms/HeroSection";
import FeatureServices from "../atoms/ServiceFeatures";
import WhyChooseUs from "../atoms/WhyChooseUs";
import CareerServicesSection from "../atoms/CareerServicesSection";
import ATSResumeSection from "../atoms/ATSResumeSection";
import { IndustrySectionExample } from "../atoms/IndustrySection";
import HeroSectionExample from "../atoms/HeroSectionMain";
import CareerSolutionsSection from "../atoms/CareerSolutionsSection";
import zip from "../../assets/zip01.png";
import glassdoor from "../../assets/glassdoor02.png";
import indeed from "../../assets/indeed03.png";
import { ProcessSectionExample } from "../atoms/ProcessSection";
import { CTABannerExample } from "../atoms/CTABanner";
import { TestimonialSectionExample } from "../atoms/TestimonialSection";
import CareerGuideDownload from "../atoms/CareerGuideDownload";
import Footer from "../atoms/Footer";
import ResumeSamplesPage from "../atoms/ResumeSamplesSection";
import { footerData } from "../../data/footerData";
import TawkChat from "../atoms/TawkChat"; // Adjust path if necessary

const logos = [
  { src: zip, alt: "ZipRecruiter" },
  { src: glassdoor, alt: "Glassdoor" },
  { src: indeed, alt: "Indeed" },
];

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-20 relative">
      <HeroSection />
      <FeatureServices />
      <WhyChooseUs />
      <ResumeSamplesPage />
      <CareerServicesSection />
      <ATSResumeSection />
      <IndustrySectionExample />
      <HeroSectionExample />

      <CareerSolutionsSection
        title="Ultimate Career Solutions"
        subtitle="We Help You Ace Your Career By Registering You On The World's Most Trusted Referral Portals"
        description="We provide more than just resume writing service! Resume Writers USA is the veritable source of getting yourself registered on various referral platforms to get recognized among employer's social networks."
        logos={logos}
        buttonText="Get Started Now!"
        onButtonClick={() => console.log("Button clicked")}
      />
      <ProcessSectionExample />
      <CTABannerExample />
      <TestimonialSectionExample />
      <CareerGuideDownload
        onSubmit={(email) => {
          console.log(`Processing download for: ${email}`);
        }}
      />
      <Footer {...footerData} />

      {/* TawkChat integrated at the bottom right */}
      <div className="fixed bottom-4 right-4 z-50">
        <TawkChat />
      </div>
    </div>
  );
};

export default HomePage;
