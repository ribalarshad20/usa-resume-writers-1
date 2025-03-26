import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import titleBanner from "../../../assets/banner-video-resume.jpeg";
import ServicesTitleSection from "../servicePages/ServicesTitleSection";

import PricingGrid from "./PricingGrid";
import CTABanner from "../CTABanner";
import MoneyBackGuarantee from "../MoneyBackGuarantee";

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white w-full">
      <ServicesTitleSection title="Pricing" backgroundImage={titleBanner} />
      <PricingGrid />
      <MoneyBackGuarantee />
      <HeroSectionExample />
      <CareerServicesSection />
      <ProcessSectionExample />
      <CTABanner />
      <TestimonialSectionExample />
      <Footer {...footerData} />
    </div>
  );
};

export default PricingPage;
