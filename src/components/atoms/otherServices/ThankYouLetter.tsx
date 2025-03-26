import resumeCoverImage from "../../../assets/ser-detail-6.png";
import ResumeSamplesPage from "../ResumeSamplesSection";
import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import titleBanner from "../../../assets/banner-faq.jpeg";
import ServicesTitleSection from "../servicePages/ServicesTitleSection";
import ServiceFeatures from "../servicePages/ServiceFeatures";
import CTABanner from "../CTABanner";
import MoneyBackGuarantee from "../MoneyBackGuarantee";

const ThankYouLetter: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <ServicesTitleSection
        title="Thank You Letter"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="Thank You Letter"
        title2="Writing Service"
        description="Got the job? Great! Now, leave a lasting impression with a professionally written thank you letter. USA Resume Writers has experts who create professional and well-structured appreciation letters for their clients. Your professional appreciation is written through our assistance to demonstrate gratitude toward hiring managers and referral connections who maintain their understanding of your worth."
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

export default ThankYouLetter;
