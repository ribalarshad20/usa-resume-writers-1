import resumeCoverImage from "../../../assets/ser-detail-10.jpeg";
import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import titleBanner from "../../../assets/banner-video-resume.jpeg";
import ServicesTitleSection from "../servicePages/ServicesTitleSection";
import ServiceFeatures from "../servicePages/ServiceFeatures";
import { VideoSamplesGridComponent } from "./VideoSamples";
import CTABanner from "../CTABanner";
import MoneyBackGuarantee from "../MoneyBackGuarantee";

const VideoResume: React.FC = () => {
  return (
    <div className="bg-white">
      <ServicesTitleSection
        title="video resume"
        backgroundImage={titleBanner}
      />
      <ServiceFeatures
        title1="How We Make Your"
        title2="Video Resume Professionally"
        description="Video Resume is the best way to go beyond outmoded methods of applying for your dream job. Lasting typically 30-60 seconds, these videos are your shot to make the best first impression to your employer. Our experts create a catchy script from the detailed brief you submit. Record that script according to the guidance our experts will provide to you and submit that video to us. ‘Be sure to practice first’!"
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
      <VideoSamplesGridComponent />
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

export default VideoResume;
