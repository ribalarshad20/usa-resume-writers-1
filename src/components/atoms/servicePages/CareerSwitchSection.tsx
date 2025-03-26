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
        title1="Career Change"
        title2="Resume Writing Service"
        description="Switching careers? We create resumes that translate your past experience into relevant value for new industries. At USA Resume Writers, our experts craft impactful documents that show your potential, highlight transferable skills, and grab recruiter attention—no matter your background. A lack of direct experience won’t hold you back."
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
