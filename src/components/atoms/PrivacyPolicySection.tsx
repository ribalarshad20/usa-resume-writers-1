import ServicesTitleSection from "./servicePages/ServicesTitleSection";
import ResumeSamplesPage from "./ResumeSamplesSection";
import HeroSectionExample from "./HeroSectionMain";
import CareerServicesSection from "./CareerServicesSection";
import { ProcessSectionExample } from "./ProcessSection";
import { TestimonialSectionExample } from "./TestimonialSection";
import Footer from "./Footer";
import { footerData } from "../../data/footerData";
import titleBanner from "../../assets/banner-process.jpeg";
import PrivacyPolicy from "./PrivacyPolicy";
import CTABanner from "./CTABanner";

const PrivacyPolicySection: React.FC = () => {
  return (
    <div className="bg-white">
      <ServicesTitleSection
        title="Privacy Policy"
        backgroundImage={titleBanner}
      />
      <PrivacyPolicy />
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

export default PrivacyPolicySection;
