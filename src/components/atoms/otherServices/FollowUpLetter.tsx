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

const FollowUpLetter: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ServicesTitleSection
        title="Follow Up Letter"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="Follow Up Letter"
        title2="Resume Writing Service"
        description="Sending a Follow-Up letter after a point of contact is an opportunity for you to mention anything you forgot to say during the meeting. Resume Writers USA has made it easy for you to forward the precise Follow-Up letter to your prospective employers. Our CPCC certified writers make sure that the letter they create is one that shares all that you would like it to share and that asks the questions that you would like to ask. We work magic to structure and create the professional Follow-Up letter that wins you a thorough reply."
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

export default FollowUpLetter;
