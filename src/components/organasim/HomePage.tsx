import React from "react";
import HeroSection from "../atoms/HeroSection";
import FeatureServices from "../atoms/ServiceFeatures";
import WhyChooseUs from "../atoms/WhyChooseUs";
import CareerServicesSection from "../atoms/CareerServicesSection";
import ATSResumeSection from "../atoms/ATSResumeSection";
import { IndustrySectionExample } from "../atoms/IndustrySection";
import HeroSectionExample from "../atoms/HeroSectionMain";
import CareerSolutionsSection from "../atoms/CareerSolutionsSection";
import zip from "../../assets/zip01.png";
import glassdoor from "../../assets/glassdoor02.png";
import indeed from "../../assets/indeed03.png";
import { ProcessSectionExample } from "../atoms/ProcessSection";
import { CTABannerExample } from "../atoms/CTABanner";
import { TestimonialSectionExample } from "../atoms/TestimonialSection";
import CareerGuideDownload from "../atoms/CareerGuideDownload";
import Footer from "../atoms/Footer";
import ResumeSamplesPage from "../atoms/ResumeSamplesSection";

const logos = [
  { src: zip, alt: "ZipRecruiter" },
  { src: glassdoor, alt: "Glassdoor" },
  { src: indeed, alt: "Indeed" },
];

const footerData = {
  companyName: "Resume Writers USA",
  address: {
    street: "2251 Barry Ave",
    city: "Los Angeles",
    state: "CA",
    zip: "90064",
    country: "USA",
  },
  contact: {
    email: "info@resumewritersusa.com",
    phone: "+1 (855) 846-0134",
  },
  services: [
    { title: "Resume Writing", link: "/services/resume-writing" },
    { title: "Cover Letter Writing", link: "/services/cover-letter-writing" },
    {
      title: "LinkedIn Profile Writing",
      link: "/services/linkedin-profile-writing",
    },
    { title: "Thank You Letter", link: "/services/thank-you-letter" },
    { title: "Follow Up Letter", link: "/services/follow-up-letter" },
    { title: "Recommendation Letter", link: "/services/recommendation-letter" },
  ],
  companyLinks: [
    { title: "Web Based Resume", link: "/web-based-resume" },
    { title: "How We Work", link: "/how-we-work" },
    { title: "Resume Samples", link: "/resume-samples" },
    { title: "Pricing Plan", link: "/pricing-plan" },
    { title: "FAQs", link: "/faqs" },
    { title: "Contact", link: "/contact" },
  ],
  quickLinks: [
    { title: "Our Services", link: "/services" },
    { title: "Job Posting", link: "/job-posting" },
    { title: "Interactive Resume", link: "/interactive-resume" },
    { title: "Video Resume", link: "/video-resume" },
    { title: "Terms of Use", link: "/terms-of-use" },
    { title: "Privacy Policy", link: "/privacy-policy" },
  ],
  socialMedia: {
    facebook: "https://facebook.com/resumewritersusa",
    linkedin: "https://linkedin.com/company/resumewritersusa",
  },
};

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-20">
      <HeroSection />
      <FeatureServices />
      <WhyChooseUs />
      <ResumeSamplesPage />
      <CareerServicesSection />
      <ATSResumeSection />
      <IndustrySectionExample />
      <HeroSectionExample />

      <CareerSolutionsSection
        title="Ultimate Career Solutions"
        subtitle="We Help You Ace Your Career By Registering You On The World's Most Trusted Referral Portals"
        description="We provide more than just resume writing service! Resume Writers USA is the veritable source of getting yourself registered on various referral platforms to get recognized among employer's social networks."
        logos={logos}
        buttonText="Get Started Now!"
        onButtonClick={() => console.log("Button clicked")}
      />
      <ProcessSectionExample />
      <CTABannerExample />
      <TestimonialSectionExample />
      <CareerGuideDownload
        onSubmit={(email) => {
          // Handle the email submission, e.g., API call
          console.log(`Processing download for: ${email}`);
        }}
      />
      <Footer {...footerData} />
    </div>
  );
};

export default HomePage;
