import ServicesTitleSection from "./servicePages/ServicesTitleSection";
import ResumeSamplesPage from "./ResumeSamplesSection";
import HeroSectionExample from "./HeroSectionMain";
import CareerServicesSection from "./CareerServicesSection";
import { ProcessSectionExample } from "./ProcessSection";
import { TestimonialSectionExample } from "./TestimonialSection";
import Footer from "./Footer";
import { footerData } from "../../data/footerData";
import titleBanner from "../../assets/banner-process.jpeg";
import ContactForm, { FormData as ContactFormData } from "./ContactForm"; // Import the FormData type from ContactForm
import CTABanner from "./CTABanner";

const ContactSection: React.FC = () => {
  const handleFormSubmit = (formData: ContactFormData) => {
    console.log("Form submitted:", formData);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ServicesTitleSection title="Contact Us" backgroundImage={titleBanner} />
      <ContactForm onSubmit={handleFormSubmit} />
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

export default ContactSection;
