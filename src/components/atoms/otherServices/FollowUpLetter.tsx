import resumeCoverImage from "../../../assets/ser-detail-7.png";
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

const FollowUpLetter: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <ServicesTitleSection
        title="Follow Up Letter"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="Follow Up Letter"
        title2="Writing Service"
        description="A well-crafted follow-up letter can make all the difference after an interview or networking conversation. At USA Resume Writers, our certified experts write personalized follow-up letters that help you reaffirm interest, add anything you missed, and professionally ask questions that matter. We make sure your message is clear, courteous, and aligned with your goals—helping you leave a lasting impression. With our expertise, you’ll follow up the right way and stay at the top of your mind."
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

export default FollowUpLetter;
