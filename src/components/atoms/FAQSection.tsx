import { useState } from "react";
import ServicesTitleSection from "./servicePages/ServicesTitleSection";
import ResumeSamplesPage from "./ResumeSamplesSection";
import HeroSectionExample from "./HeroSectionMain";
import CareerServicesSection from "./CareerServicesSection";
import { ProcessSectionExample } from "./ProcessSection";
import { TestimonialSectionExample } from "./TestimonialSection";
import Footer from "./Footer";
import { footerData } from "../../data/footerData";
import titleBanner from "../../assets/banner-faq.jpeg";
import CTABanner from "./CTABanner";

interface FAQItemProps {
  id: string;
  number: string;
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggleFAQ: (id: string) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  id,
  number,
  question,
  answer,
  isOpen,
  toggleFAQ,
}) => {
  return (
    <div className="w-full h-full mt-6 mb-4 bg-white rounded-lg shadow-sm">
      <button
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
        onClick={() => toggleFAQ(id)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <span className="text-[#C11A2F] font-medium mr-2">{number}.</span>
          <span
            className={`font-medium ${
              isOpen ? "text-[#C11A2F]" : "text-gray-800"
            }`}
          >
            {question}
          </span>
        </div>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen ? "transform rotate-180 text-[#2F4376]" : "text-gray-400"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <div className="px-6 text-gray-500">{answer}</div>
      </div>
    </div>
  );
};

interface FAQAccordionProps {
  faqs: {
    id: string;
    number: string;
    question: string;
    answer: React.ReactNode;
  }[];
  defaultOpen?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  defaultOpen = "01",
}) => {
  const [openId, setOpenId] = useState<string>(defaultOpen);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <div className="w-full bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          id={faq.id}
          number={faq.number}
          question={faq.question}
          answer={faq.answer}
          isOpen={openId === faq.id}
          toggleFAQ={toggleFAQ}
        />
      ))}
    </div>
  );
};

export default function FAQSection() {
  const faqData = [
    {
      id: "01",
      number: "01",
      question: "How do I get started with USA Resume Writer?",
      answer:
        "Getting started is simple. The package selection process leads to asking whether customers already have a resume or requesting detailed career information to create the document. The information provided enables us to understand your background, career objectives, and professional strengths. Our certified resume writer receives your project assignment, after which they create a tailored resume suitable for job applications.",
    },
    {
      id: "02",
      number: "02",
      question: "How is a USA Resume Writer different from a career coaches?",
      answer:
        "Your service differs from that of career coaches because we deliver completed writing tasks alongside professional career advice. The company commits to creating professional career documents which comprise complete resumes together with cover letters LinkedIn profiles and additional career materials that produce swift results for clients. Through our mix of career know-how and ATS-friendly document construction we provide professional document development services that boost applicant visibility in the job market.",
    },
    {
      id: "03",
      number: "03",
      question: "How long does the process take from start to finish?",
      answer:
        "The turnaround duration for the first draft typically spans between 3 to 5 business days once we obtain all essential information from customers. We provide express document development services through priority and urgent options for clients who need fast delivery. The final delivery process extends over specific periods determined by both project complexity and needed revisions.",
    },
    {
      id: "04",
      number: "04",
      question: "Will I be able to communicate with my assigned writer?",
      answer:
        "Yes. A certified resume writer will join your project after you place your order and will initiate direct contact with you. Users can communicate through the client portal or email system to discuss their experience preferences along with their goals during the entire process.",
    },
    {
      id: "05",
      number: "05",
      question: "Are there any hidden or recurring charges?",
      answer:
        "No, never. Our service costs appear straightforward and easy to understand. Your fee for this selected service remains a one-time purchase, while it excludes both recurring payments and hidden fees. Our service includes a dedicated number of free revisions, which allows you to achieve full satisfaction without additional costs.",
    },
    {
      id: "06",
      number: "06",
      question: "What industries or roles do you specialize in?",
      answer:
        "The professional resume writing service of USA Resume Writer serves all more than 200 different industries. The writers at USA Resume Writer specialize in adapting your resume content to align with professional expectations from tech, healthcare, finance, marketing, education, government, and creative job markets.",
    },
    {
      id: "07",
      number: "07",
      question:
        "What if I’m not satisfied with the final version of my resume?",
      answer:
        "Your satisfaction is our priority. Under our terms, your resume is subjected to an unlimited number of revisions during the set period of time, while our service is protected by a money-back guarantee if you continue to be dissatisfied. Through our services we aim to establish a confident and ready candidate who can efficiently submit their resumes for applications.",
    },
    {
      id: "08",
      number: "08",
      question: "What guarantees do you offer on quality and results?",
      answer:
        "Our company delivers fully written documents that utilize target keywords while following application tracking system standards. Real professional resume writers crafting new resumes use their expertise in current hiring procedures to provide premium quality documents. The resume optimization entails multiple checks on plagiarism together with grammatical accuracy and optimal formatting.",
    },
    {
      id: "09",
      number: "09",
      question: "Do you offer visual resumes or infographic-style designs?",
      answer:
        "Yes, we do. Our service provides infographic-style layouts together with modern resume styles for creative purposes that enhance the visuals of design work and marketing and media environments. We establish these designs in collaboration with our designers to maintain design attractiveness while ensuring readability remains seamless.",
    },
    {
      id: "10",
      number: "10",
      question: "What does the complete resume writing process look like?",
      answer: (
        <>
          <p className="mb-2">The process includes four key steps:</p>
          <ul className="list-disc ml-6 mb-2">
            <li>Submit your career information or previous resume.</li>
            <li>A certified writer creates your first draft.</li>
            <li>You review the draft and request revisions if needed.</li>
            <li>
              Once approved, we deliver the final files in multiple formats so
              you’re ready to apply immediately.
            </li>
          </ul>
          <p>
            We keep the process simple, collaborative, and centered around your
            success.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-white">
      <ServicesTitleSection title="FAQS" backgroundImage={titleBanner} />
      <FAQAccordion faqs={faqData} defaultOpen="01" />
      <ResumeSamplesPage />
      <HeroSectionExample />
      <CareerServicesSection />
      <ProcessSectionExample />
      <CTABanner />
      <TestimonialSectionExample />
      <Footer {...footerData} />
    </div>
  );
}
