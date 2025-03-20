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
import titleBanner from "../../../assets/banner-service.png";
import FeaturesOfServices from "./FeaturesOfServices";

const MainServicesPage: React.FC = () => {
  // Create an array from 1 to 11
  const featureNumbers = Array.from({ length: 11 }, (_, index) => index + 1);

  return (
    <div className="bg-white">
      <ServicesTitleSection title="Services" backgroundImage={titleBanner} />

      {featureNumbers.map((num) => (
        <FeaturesOfServices
          key={num}
          number={num < 10 ? `0${num}` : `${num}`}
          image={resumeCoverImage}
          imageAlt="Resume Writing Service"
          title="ATS Compliant\nResume Writing Service"
          description="Get picked by corporates and multinationals even before going through the process of interview. Our self-motivated team of writers with ample knowledge in crafting powerful resumes for niche industries. Win the attention of Human Resource Professionals to review your job application that break the deal for you. Get professionally written cover letters to get insights from CPCC certified professionals."
          onArrowClick={() => console.log("Arrow clicked")}
        />
      ))}

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

export default MainServicesPage;
