import resumeCoverImage from "../../../assets/ser-detail-1.jpeg";
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

const ResumeWritingSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ServicesTitleSection
        title="Resume Writing"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="ATS-Friendly"
        title2="Resume Writing Service"
        description="Be noticed by top companies before the interview begins. Our certified professional resume writer team creates industry-focused resumes tailored for impact. At USA Resume Writers, our resume services are built to highlight your expertise, align with job requirements, and pass applicant tracking systems—no matter your background or experience."
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

export default ResumeWritingSection;
