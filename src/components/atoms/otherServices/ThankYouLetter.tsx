import React from "react";
import resumeCoverImage from "../../../assets/ser-detail-6.png";
import ResumeSamplesPage from "../ResumeSamplesSection";
import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import titleBanner from "../../../assets/banner-faq.jpeg";
import ServicesTitleSection from "../servicePages/ServicesTitleSection";
import ServiceFeatures from "../servicePages/ServiceFeatures";
import CTABanner from "../CTABanner";

const ThankYouLetter: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ServicesTitleSection
        title="Thank You Letter"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="Thank You Letter"
        title2="Service"
        description="Congratulations on getting selected for your dream job! Want to thank your employers for choosing you as the best fit? Having the right skills and expertise of writing a good professional thank you letter is paramount. Our self-motivated team of writers with ample knowledge in crafting pleasant Thank You Letter for your employer. Get professionally written Thank You letter to get insights from CPCC certified professionals."
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

export default ThankYouLetter;
