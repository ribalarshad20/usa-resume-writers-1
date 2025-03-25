import resumeCoverImage from "../../../assets/ser-detail-2.jpeg";
import ResumeSamplesPage from "../ResumeSamplesSection";
import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import ServicesTitleSection from "./ServicesTitleSection";
import titleBanner from "../../../assets/banner-faq.jpeg";
import ServiceFeatures from "./ServiceFeatures";
import CTABanner from "../CTABanner";

const CoverWritingSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ServicesTitleSection
        title="Cover Letter Writing"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="Persuasive Cover"
        title2="Letter Writing Service"
        description="Win the attention of Human Resource Professional to review your job application that break the deal for you. Get professionally written cover letters to get insights from Certified Professional Co-Active Coach (CPCC) certified professionals. No matter what your experience is, Resume Writers USA is all set to make you look proficient by highlighting your core strengths and expertise."
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

export default CoverWritingSection;
