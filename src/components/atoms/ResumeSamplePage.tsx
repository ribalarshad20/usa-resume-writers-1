import ServicesTitleSection from "./servicePages/ServicesTitleSection";
import ResumeSamplesPage from "./ResumeSamplesSection";
import HeroSectionExample from "./HeroSectionMain";
import CareerServicesSection from "./CareerServicesSection";
import { ProcessSectionExample } from "./ProcessSection";
import { TestimonialSectionExample } from "./TestimonialSection";
import Footer from "./Footer";
import { footerData } from "../../data/footerData";
import titleBanner from "../../assets/banner-process.jpeg";
import CTABanner from "./CTABanner";
import ResumeGallery from "./ResumeGallery";

const ResumeSamplePage: React.FC = () => {
  return (
    <div className="bg-white">
      <ServicesTitleSection
        title="Resume Samples"
        backgroundImage={titleBanner}
      />
      <ResumeGallery />
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

export default ResumeSamplePage;
