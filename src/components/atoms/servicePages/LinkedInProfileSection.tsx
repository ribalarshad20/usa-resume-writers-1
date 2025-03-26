import resumeCoverImage from "../../../assets/ser-detail-3.png";
import ResumeSamplesPage from "../ResumeSamplesSection";
import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import ServiceFeatures from "./ServiceFeatures";
import titleBanner from "../../../assets/banner-faq.jpeg";
import ServicesTitleSection from "./ServicesTitleSection";
import CTABanner from "../CTABanner";

const LinkedInProfileSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ServicesTitleSection
        title="LinkedIn Profile Writing"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="LinkedIn Profile"
        title2="Writing Service"
        description="Make your LinkedIn profile work for you. The writers at USA Resume Writers will create profiles using strategic keywords that enhance your visibility while attracting recruiters and presenting your professional essence in the best way possible. USA Resume Writers positions candidates strongly in the market while they search for jobs or network through professional resumes that highlight their skills, accomplishments, and career aspirations."
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

export default LinkedInProfileSection;
