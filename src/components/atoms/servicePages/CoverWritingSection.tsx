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
import MoneyBackGuarantee from "../MoneyBackGuarantee";

const CoverWritingSection: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <ServicesTitleSection
        title="Cover Letter Writing"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="Professional Letter"
        title2="Writing Service"
        description="Most important words come from personalized letters that show your distinct personality, professional approach, and what you intend to achieve. USA Resume Writers produces individualized written correspondence, including cover letters, thank-you notes, and recommendations, which leave a strong impression on readers. Your message to the reader will connect through expert recommendations that emphasize your strengths."
        imageSrc={resumeCoverImage}
        onButtonClick={() => console.log("Button clicked")}
      />
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

export default CoverWritingSection;
