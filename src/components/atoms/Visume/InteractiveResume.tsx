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

const InteractiveResume: React.FC = () => {
  return (
    <div className="bg-white">
      <ServicesTitleSection
        title="Interactive Resume"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="How We Make Your"
        title2="Interactive Resume Professionally"
        description="Enhance your persona through your resume by adding visuals and engaging elements to highlight your exposure and industry understanding. Recruiters retain visuals more than text giving you a competitive advantage. Interactive Resumes also give increased authenticity to the profile. We create a winning resume that reflects the eye-catching visual layout of your professional experience and personality."
        imageSrc={resumeCoverImage}
        onButtonClick={() => console.log("Button clicked")}
      />
      <p className="relative max-w-7xl mx-auto p-7">
        {" "}
        Our expert resume writers and designers not only create visual resume,
        but at Resume Writers USA, we also help you get noticed by countless
        companies out there in the market. A variety of charts and beautiful
        diagrams in the form of infographics will ensure that recruiters do not
        have to go through loads of text, which is often cumbersome.
      </p>
      <VisumeWorkSamples />
      <HeroSectionExample />
      <CareerServicesSection />
      <ProcessSectionExample />
      <CTABanner />
      <TestimonialSectionExample />
      <Footer {...footerData} />
    </div>
  );
};

export default InteractiveResume;
