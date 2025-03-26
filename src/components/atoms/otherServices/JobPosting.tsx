import ResumeSamplesPage from "../ResumeSamplesSection";
import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import titleBanner from "../../../assets/banner-faq.jpeg";
import ServicesTitleSection from "../servicePages/ServicesTitleSection";
import RecruitmentSectionExample from "./RecruitmentSection";
import CTABanner from "../CTABanner";
import MoneyBackGuarantee from "../MoneyBackGuarantee";

const JobPosting: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <ServicesTitleSection title="Job Posting" backgroundImage={titleBanner} />
      <RecruitmentSectionExample />
      <ResumeSamplesPage />

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

export default JobPosting;
