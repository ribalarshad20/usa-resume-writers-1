import resumeCoverImage from "../../../assets/ser-detail-9.jpeg";

import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import titleBanner from "../../../assets/banner-web-portfolio.jpeg";
import ServicesTitleSection from "../servicePages/ServicesTitleSection";
import ServiceFeatures from "../servicePages/ServiceFeatures";
import WorkSamplesSection from "./WorkSamplesSection";
import CTABanner from "../CTABanner";

const WebBasedResume: React.FC = () => {
  return (
    <div className="bg-white">
      <ServicesTitleSection
        title="Web Based Resume"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="How We Create Impactful"
        title2="Video & Web-Based Resumes"
        description="The job market is evolving—and your resume should, too. The digital era demands methods that extend beyond essential documents to stand out. Companies can discover important information about candidates by using video or web-based resume platforms, enabling them to display their skills through engaging visual content."
        imageSrc={resumeCoverImage}
        onButtonClick={() => console.log("Button clicked")}
      />
      <p className="relative max-w-7xl mx-auto p-4 text-justify">
        {" "}
        At USA Resume Writers, our certified Professional resume writers
        collaborate with design experts to craft dynamic, mobile-friendly
        resumes that reflect your goals. Whether it's a sleek slideshow, a
        full-screen intro, or an interactive layout, we build customized web
        resumes that captivate employers across devices. With powerful visuals
        and innovative structure, we help you get noticed faster.
      </p>
      <WorkSamplesSection />
      <HeroSectionExample />
      <CareerServicesSection />
      <ProcessSectionExample />
      <CTABanner />
      <TestimonialSectionExample />
      <Footer {...footerData} />
    </div>
  );
};

export default WebBasedResume;
