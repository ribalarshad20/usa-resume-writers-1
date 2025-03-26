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
import CTABanner from "../atoms/CTABanner";
import { TestimonialSectionExample } from "../atoms/TestimonialSection";

import Footer from "../atoms/Footer";
import ResumeSamplesPage from "../atoms/ResumeSamplesSection";
import { footerData } from "../../data/footerData";
import MoneyBackGuarantee from "../atoms/MoneyBackGuarantee";

const logos = [
  { src: zip, alt: "ZipRecruiter" },
  { src: glassdoor, alt: "Glassdoor" },
  { src: indeed, alt: "Indeed" },
];

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <FeatureServices />
      <WhyChooseUs />
      <ResumeSamplesPage />
      <CareerServicesSection />
      <ATSResumeSection />
      <IndustrySectionExample />
      <HeroSectionExample />

      <CareerSolutionsSection
        title="Career Growth Partner"
        subtitle="We connect your resume to top referral platforms and networks trusted by global recruiters and employers."
        description="At USA Resume Writers, we go beyond resumes—connecting you to trusted referral networks to boost visibility, credibility, and job opportunities across professional platforms and hiring communities."
        logos={logos}
      />
      <ProcessSectionExample />
      <CTABanner />
      <TestimonialSectionExample />
      <MoneyBackGuarantee />
      <Footer {...footerData} />
    </div>
  );
};

export default HomePage;
