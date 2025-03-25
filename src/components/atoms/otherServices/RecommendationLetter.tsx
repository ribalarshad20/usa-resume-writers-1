import resumeCoverImage from "../../../assets/ser-detail-8.png";
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

const RecommendationLetter: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ServicesTitleSection
        title="Recommendation Letter"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="Recommendation Letter"
        title2="Resume Writing Service"
        description="It takes lots of concentration and effort to strike a balance when writing recommendations as they need to be professional as well as genuine to create the credibility of the candidate. Resume Writers USA understands your dilemma and that’s why we have a perfect solution for you. Our experts tackle every type of recommendation letter ranging from entry level to executive level by hiring the professionals in the field and of course who can do it better than us."
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

export default RecommendationLetter;
