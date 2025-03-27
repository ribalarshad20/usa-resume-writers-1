import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import titleBanner from "../../../assets/banner-web-portfolio.jpeg";
import ServicesTitleSection from "../servicePages/ServicesTitleSection";
import WorkSamplesSection from "./WorkSamplesSection";
import CTABanner from "../CTABanner";
import MoneyBackGuarantee from "../MoneyBackGuarantee";
import ImpactfulResumesSection from "./ImpactfulResumesSection";
import ServicesSection from "./ServicesSection";
import TechStackSection from "./TechStackSection";

const WebBasedResume: React.FC = () => {
  return (
    <div className="bg-white">
      <ServicesTitleSection
        title="Web Based Resume"
        backgroundImage={titleBanner}
      />
      <ImpactfulResumesSection />
      <ServicesSection />
      <TechStackSection />
      <WorkSamplesSection />
      <HeroSectionExample />
      <CareerServicesSection />
      <ProcessSectionExample />
      <CTABanner />
      <TestimonialSectionExample />
      <MoneyBackGuarantee />
      <Footer {...footerData} />
    </div>
  );
};

export default WebBasedResume;
