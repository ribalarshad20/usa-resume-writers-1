import resumeCoverImage from "../../../assets/ser-detail-11.png";
import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import titleBanner from "../../../assets/banner-video-resume.jpeg";
import ServicesTitleSection from "../servicePages/ServicesTitleSection";
import ServiceFeatures from "../servicePages/ServiceFeatures";
import { VisumeWorkSamples } from "./VisumeWorkSamples";
import CTABanner from "../CTABanner";
import MoneyBackGuarantee from "../MoneyBackGuarantee";

const InteractiveResume: React.FC = () => {
  return (
    <div className="bg-white">
      <ServicesTitleSection
        title="Interactive Resume"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="How We Create Your"
        title2="Interactive Resume with Impact"
        description="USA Resume Writers combines creative design elements and strategic functions to create interactive resumes that showcase your real personality. Modern resumes transform into multimedia experiences because we embed visual elements from charts to infographics together with icons and dynamic layouts. The visual designs create an immediate response in hiring managers since they retain your qualifications more effectively than traditional text-based formats do."
        imageSrc={resumeCoverImage}
        onButtonClick={() => console.log("Button clicked")}
      />
      <p className="relative max-w-7xl mx-auto p-7">
        {" "}
        Our team of writers and designers collaborates to showcase your
        professional accomplishments in visually compelling designs. Our
        professional services will create an elegant, mobile-friendly resume
        that captivates readers without being overwhelming. This is resuming
        writing, reimagined for the modern job market.
      </p>
      <VisumeWorkSamples />
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

export default InteractiveResume;
