import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/organasim/MainLayout";
import HomePage from "./components/organasim/HomePage";
import ResumeWritingSection from "./components/atoms/servicePages/ResumeWritingSection";
import CoverWritingSection from "./components/atoms/servicePages/CoverWritingSection";
import LinkedInProfileSection from "./components/atoms/servicePages/LinkedInProfileSection";
import CareerSwitchSection from "./components/atoms/servicePages/CareerSwitchSection";
import EntryLevelResumeSection from "./components/atoms/servicePages/EntryLevelResumeSection";
import MainServicesPage from "./components/atoms/servicePages/MainServicesPage";
import ThankYouLetter from "./components/atoms/otherServices/ThankYouLetter";
import FollowUpLetter from "./components/atoms/otherServices/FollowUpLetter";
import RecommendationLetter from "./components/atoms/otherServices/RecommendationLetter";
import JobPosting from "./components/atoms/otherServices/JobPosting";
import WebBasedResume from "./components/atoms/WebBasedResume/WebBasedResume";
import VideoResume from "./components/atoms/Visume/VideoResume";
import InteractiveResume from "./components/atoms/Visume/InteractiveResume";
import PricingPage from "./components/atoms/pricing/PricingPage";
import FAQSection from "./components/atoms/FAQSection";
import ContactSection from "./components/atoms/ContactSection";
import TermsOfUseSection from "./components/atoms/TermsOfUseSection";
import PrivacyPolicySection from "./components/atoms/PrivacyPolicySection";
import ProcessPage from "./components/atoms/ProcessPage";
import ResumeSamplePage from "./components/atoms/ResumeSamplePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<MainServicesPage />} />
          <Route
            path="/services/resume-writing/"
            element={<ResumeWritingSection />}
          />
          <Route
            path="/services/cover-letters/"
            element={<CoverWritingSection />}
          />
          <Route
            path="/services/linkedIn-profile/"
            element={<LinkedInProfileSection />}
          />
          <Route
            path="/services/career-switch/"
            element={<CareerSwitchSection />}
          />
          <Route
            path="/services/entry-level/"
            element={<EntryLevelResumeSection />}
          />

          <Route
            path="/services/thank-you-letter/"
            element={<ThankYouLetter />}
          />
          <Route
            path="/services/follow-up-letter/"
            element={<FollowUpLetter />}
          />

          <Route
            path="/services/recommendation-letter/"
            element={<RecommendationLetter />}
          />

          <Route path="/services/job-posting/" element={<JobPosting />} />

          <Route
            path="/services/web-based-resume/"
            element={<WebBasedResume />}
          />
          <Route path="/services/video-resume/" element={<VideoResume />} />

          <Route
            path="/services/interactive-resume/"
            element={<InteractiveResume />}
          />
          <Route path="/pricing/" element={<PricingPage />} />

          <Route path="/faqs/" element={<FAQSection />} />
          <Route path="/contact-us/" element={<ContactSection />} />
          <Route path="/term-of-use/" element={<TermsOfUseSection />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicySection />} />
          <Route path="/process/" element={<ProcessPage />} />
          <Route path="/resume-sample/" element={<ResumeSamplePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
