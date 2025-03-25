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
  answer: string;
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
          <span className="text-green-500 font-medium mr-2">{number}.</span>
          <span
            className={`font-medium ${
              isOpen ? "text-green-500" : "text-gray-800"
            }`}
          >
            {question}
          </span>
        </div>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen ? "transform rotate-180 text-green-500" : "text-gray-400"
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
    answer: string;
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
    <div className="w-full bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
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
      question: "What Do You Need to Get Started?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu purus feugiat, facilisis nisi id, varius justo. Suspendisse potenti. Donec vestibulum purus eget tortor consectetur, nec ultrices tellus dignissim. Nulla facilisi. Etiam efficitur justo id risus faucibus finibus.",
    },
    {
      id: "02",
      number: "02",
      question: "How Are You Different Than A Career Coach?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, magna vel semper commodo, metus nisl consequat metus, in ultrices mi augue id diam. Aenean et vulputate turpis. Mauris et lectus sed sapien posuere lacinia. Vivamus venenatis libero vel lectus tincidunt maximus.",
    },
    {
      id: "03",
      number: "03",
      question: "What Is Your Turnaround Time?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget quam in nisi facilisis facilisis. Cras dapibus risus accumsan, commodo quam quis, semper nulla. Nam id felis libero. Integer ultrices ac dolor non ultricies. Nullam et vulputate orci, ut congue elit.",
    },
    {
      id: "04",
      number: "04",
      question: "Do You Offer ATS-Friendly Resume Formats?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ante ullamcorper, tempus enim sit amet, ullamcorper nulla. Nulla facilisi. In tincidunt, dolor eget faucibus tempus, tellus erat vestibulum odio, in bibendum dui libero eget metus. Donec congue felis nec purus imperdiet, vel euismod libero pharetra.",
    },
    {
      id: "05",
      number: "05",
      question: "Can You Help With LinkedIn Profiles Too?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor mi vel nisl suscipit, in interdum eros elementum. Nunc sed mauris aliquet, feugiat sem quis, condimentum ipsum. Maecenas vestibulum, magna id imperdiet congue, justo dolor commodo quam, a condimentum sem justo quis turpis.",
    },
    {
      id: "06",
      number: "06",
      question: "What Industries Do You Specialize In?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nibh vestibulum, commodo nisi a, tempor magna. Nullam vel vulputate risus. Vivamus semper, magna nec lacinia vestibulum, neque turpis maximus quam, eget rhoncus leo justo eu risus. Aliquam erat volutpat. Etiam feugiat libero metus.",
    },
    {
      id: "07",
      number: "07",
      question: "Do You Offer Any Guarantees?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales purus in diam vehicula varius. Duis imperdiet magna ut purus imperdiet efficitur. Sed at augue pretium, volutpat lorem nec, commodo justo. In fermentum blandit urna, at consequat eros imperdiet vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
    {
      id: "08",
      number: "08",
      question: "How Many Revisions Are Included?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac justo erat. Duis id posuere massa. Vivamus vel varius neque. Nullam quis sagittis nibh. Donec eget augue vitae libero efficitur facilisis. Morbi hendrerit odio eros, non facilisis tellus tristique sed. Donec tincidunt risus eget ultrices consequat.",
    },
    {
      id: "09",
      number: "09",
      question: "What Payment Methods Do You Accept?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu dignissim nunc. Cras ut diam purus. Nulla facilisi. Phasellus pellentesque, sem sed tempus sollicitudin, sapien purus tempus nisi, a imperdiet justo enim nec sapien. Nulla malesuada felis nisi, at mollis massa feugiat vel.",
    },
    {
      id: "10",
      number: "10",
      question: "Can I See Some Sample Resumes?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis justo felis. Nulla facilisi. Suspendisse potenti. Nullam eget convallis dui, vel finibus sapien. Maecenas lobortis magna ut magna tempus, nec elementum quam ornare. Vivamus porta diam mi, eget volutpat enim efficitur at.",
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
