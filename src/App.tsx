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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
