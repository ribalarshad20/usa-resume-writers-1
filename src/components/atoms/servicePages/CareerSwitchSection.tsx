import React from "react";
import resumeCoverImage from "../../../assets/ser-detail-4.png";
import ResumeSamplesPage from "../ResumeSamplesSection";
import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import ServicesTitleSection from "./ServicesTitleSection";
import ServiceFeatures from "./ServiceFeatures";
import titleBanner from "../../../assets/banner-faq.jpeg";
import CTABanner from "../CTABanner";

const CareerSwitchSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ServicesTitleSection
        title="LinkedIn Profile Writing"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="Career Switch"
        title2="Resume Writing Service"
        description="Transiting from a career demands a powerful and impactful resume from scratch. HR Professionals and recruiters usually avoid to hire someone fresh and coming from another field, unless our writers’ word your resume in a way that lands you interview calls. Lack of experience does not stop us from creating impressive resumes. We work magic to make you look proficient by highlighting your core strengths."
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

export default CareerSwitchSection;
