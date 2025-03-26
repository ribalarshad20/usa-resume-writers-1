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
        title1="Entry-Level"
        title2="Resume Writing Service"
        description="Just starting your career? Our organization creates professional resumes that demonstrate the strengths of students and new graduates. USA Resume Writers demonstrates extensive experience in turning educational achievements combined with potential into employer impressions through their certified professionals’ work. We position you confidently for the roles you want."
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
