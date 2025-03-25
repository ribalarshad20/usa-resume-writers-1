import resumeCoverImage from "../../../assets/ser-detail-5.png";
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

const EntryLevelResumeSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ServicesTitleSection
        title="Entry Level Resume"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="Entry Level"
        title2="Resume Writing Service"
        description="Represent yourself for the impeccably suitable job, which can be a tough call for fresh graduates otherwise. Our Certified Professional Resume Writers and Career Coaches work round the clock eminently to put you on show in front of your prospective employers. No matter what your experience is, we work magic to make you look proficient by highlighting your core strengths."
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

export default EntryLevelResumeSection;
