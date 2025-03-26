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
        title2="Writing Service"
        description="Writing a recommendation letter that’s both heartfelt and professional can be tricky. That’s where USA Resume Writers steps in. Our Certified Professional resume writers craft compelling, personalized recommendation letters that reflect credibility, sincerity, and professionalism. Whether you’re endorsing an intern, employee, or executive, we tailor each letter to suit the opportunity. From structure to tone, we ensure your message hits the mark—leaving a strong impression on hiring managers or academic boards."
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
