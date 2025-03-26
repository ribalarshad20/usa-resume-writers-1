import React from "react";
import { useNavigate } from "react-router-dom";
import ResumeSamplesPage from "../ResumeSamplesSection";
import HeroSectionExample from "../HeroSectionMain";
import CareerServicesSection from "../CareerServicesSection";
import { ProcessSectionExample } from "../ProcessSection";
import { TestimonialSectionExample } from "../TestimonialSection";
import Footer from "../Footer";
import { footerData } from "../../../data/footerData";
import ServicesTitleSection from "./ServicesTitleSection";
import titleBanner from "../../../assets/banner-service.png";
import FeaturesOfServices from "./FeaturesOfServices";
import CTABanner from "../CTABanner";
import service01Image from "../../../assets/serviceImages/service-1.jpg";
import service02Image from "../../../assets/serviceImages/service-2.jpg";
import service03Image from "../../../assets/serviceImages/service-3.jpg";
import service04Image from "../../../assets/serviceImages/service-4.jpg";
import service05Image from "../../../assets/serviceImages/service-5.jpg";
import service06Image from "../../../assets/serviceImages/service-6.jpg";
import service07Image from "../../../assets/serviceImages/service-7.jpg";
import service08Image from "../../../assets/serviceImages/service-8.jpg";
import service09Image from "../../../assets/serviceImages/service-9.jpg";
import service10Image from "../../../assets/serviceImages/service-10.jpg";
import service11Image from "../../../assets/serviceImages/service-11.jpg";

const MainServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      number: "01",
      title: "ATS Compliant Resume Writing Service",
      description:
        "Start impressing interviewers immediately through the first encounter. USA Resume Writers has certified experts who create tailored resumes that meet exact industry requirements and make the best use of Applicant Tracking Systems (ATS). The resume profiling demonstrates your experience alongside your skills and accomplishments through text, which bypasses ATS screening protocols and appeals to recruiters. Our priority consists of obtaining resume visibility in the applicant pool through optimized documents for both corporate positions and industries requiring specialized expertise.",
      image: service01Image,
      route: "/services/resume-writing/",
    },
    {
      number: "02",
      title: "Persuasive Cover Letter Writing Service",
      description:
        "Through a powerful cover letter, you may gain an interview opportunity from employers. USA Resume Writers develops individualized cover letters containing relevant keywords that catch the attention of hiring managers. The writers at our service have expertise in creating letters that demonstrate your strengths, along with your excitement and industry expertise while addressing both the employer’s requirements and expectations for any position from entry-level to executive.",
      image: service02Image,
      route: "/services/cover-letters/",
    },
    {
      number: "03",
      title: "Influential LinkedIn Profile Writing Service",
      description:
        "Make recruiters come to you. Our team’s LinkedIn Profile Writing Service creates an impressive digital profile that showcases your abilities, successes, and professional objectives. The profile optimization we provide utilizes proper keywords along with a well-structured layout and express messaging to make sure you reach more job seekers and leave a strong first impression. Your LinkedIn profile becomes an effective networking tool for employment purposes when you choose services from USA Resume Writers.",
      image: service03Image,
      route: "/services/linkedIn-profile/",
    },
    {
      number: "04",
      title: "Career Switch Resume Writing Service",
      description:
        "Changing careers? We help you bridge the gap. At USA Resume Writers, our experts transform your existing experience into a resume tailored to your new direction. We focus on key abilities together with achievements and personality traits that matter most to your selected workplace field. The team will rework your resume so it presents you as an assured professional who demonstrates readiness for a new career path.",
      image: service04Image,
      route: "/services/career-switch/",
    },
    {
      number: "05",
      title: "Entry-Level Resume Writing Service",
      description:
        "New to the job market? We’ve got your back. USA Resume Writers helps students, recent grads, and early-career professionals build resumes that don’t rely on years of experience. Instead, we focus on your education, soft skills, internships, and achievements to craft a resume that tells your story. Our writers ensure you look polished, prepared, and ready for that first opportunity.",
      image: service05Image,
      route: "/services/entry-level/",
    },
    {
      number: "06",
      title: "Web-Based Resume Development Service",
      description:
        "Step into the digital age with a dynamic, web-based resume. With mobile-friendly capabilities, USA Resume Writers develops interactive resumes that display your professional experience using images combined with videos supported by simple organizational designs. Your online resume will show your unique personality together with your professional approach, regardless of the design style you need. The competitive job market benefits from your web-based resume because you can make it visually appealing while keeping it easily shareable.",
      image: service06Image,
      route: "/services/web-based-resume/",
    },
    {
      number: "07",
      title: "Video Resume Creation Service",
      description:
        "Say more than words on a page. A video resume lets your voice, tone, and energy shine through. USA Resume Writers helps you script, guide, and structure a 30–to 60-second video introduction that makes a lasting first impression. Our experts assist with every step—from writing the script to final delivery—ensuring you come across as confident, clear, and career-ready in front of the camera.",
      image: service07Image,
      route: "/services/video-resume/",
    },
    {
      number: "08",
      title: "Interactive Resume Creation Service",
      description:
        "The resume gets brought to life by design elements that interact with the reader. USA Resume Writers creates resumes that blend images, infographics, and charts to design an attention-grabbing, simple document that directs the reader smoothly. The interactive resume service we offer caters to creative professionals alongside anyone who wants to be different through designed formats that both function well and unforgettably tell your unique story.",
      image: service08Image,
      route: "/services/interactive-resume/",
    },
    {
      number: "09",
      title: "Thank You Letter Writing Service",
      description:
        "Gratitude goes a long way. Our Thank You Letter Writing Service allows you to create a formal note that both expresses sincere gratitude and establishes a memorable impact with an interview or offer follow-ups. USA Resume Writers creates specific appreciation-oriented letters that demonstrate your role enthusiasm. USA Resume Writers transforms every expression into meaningful communication through both basic appreciation notes and detailed messages for recruiters.",
      image: service09Image,
      route: "/services/thank-you-letter/",
    },
    {
      number: "10",
      title: "Follow-Up Letter Writing Service",
      description:
        "You will maintain communication with prospective employers through a well-written follow-up letter. USA Resume Writers develops communication materials that confirm your active participation and sustain the presentation of your professional abilities, whether the client contacts you after a conference or interview. Following up at the right time shows eagerness and makes your candidacy stand out from rivals. Our team secures messages that display confident tones and present clear instructions about future steps.",
      image: service10Image,
      route: "/services/follow-up-letter/",
    },
    {
      number: "11",
      title: "Recommendation Letter Writing Service",
      description:
        "Proficiency is needed to create recommendation letters that express authenticity while maintaining professional standards. USA Resume Writers approaches the task with expertise to generate recommendation letters that demonstrate the applicant’s strengths and display natural, enthusiastic support. Our service develops personalized recommendation letters that match the intended professional role, together with appropriate voice and register requirements. A recommendation letter from USA Resume Writers will have a genuine impact on recruiters and academic institutions alike.",
      image: service11Image,
      route: "/services/recommendation-letter/",
    },
  ];

  const handleArrowClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ServicesTitleSection title="Services" backgroundImage={titleBanner} />

      {services.map((service) => (
        <FeaturesOfServices
          key={service.number}
          number={service.number}
          image={service.image}
          imageAlt="Resume Writing Service"
          title={service.title}
          description={service.description}
          onArrowClick={() => handleArrowClick(service.route)}
        />
      ))}

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

export default MainServicesPage;
