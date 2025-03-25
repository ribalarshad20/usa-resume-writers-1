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
        title1="How We Make Your"
        title2="Video Resume Professionally"
        description="With the digitalization of every aspect of today’s world, job search has also stepped into the advance era too. A number of online tools help job seekers to win the attention of employers within no time. A strong web presence and findability by employers is a major asset in today's employment/employer search. Display your skills, accomplishments and share your story with your recruiters through a strong digital presence i.e. Web-based resumes."
        imageSrc={resumeCoverImage}
        onButtonClick={() => console.log("Button clicked")}
      />
      <p className="relative max-w-7xl mx-auto p-7">
        {" "}
        Resume Writers USA combines your achievements and opportunities to
        create a nested structure to display you as the best fit for your dream
        job. Show your images and videos in different layouts: thumbnails,
        vertical, horizontal, slideshow or full screen. We create responsive and
        dynamic web resumes that will be visible on any device.
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
