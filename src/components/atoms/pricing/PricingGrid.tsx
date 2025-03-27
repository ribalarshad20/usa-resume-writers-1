import React, { useState } from "react";
import PricingCard from "./PricingCard";
import ResumeForm from "../ResumeForm";

// Define types for the feature items
interface PricingFeature {
  id: string;
  text: string;
}

// Interface for pricing card details to pass to form
interface PricingDetails {
  serviceName: string;
  price: number;
  originalPrice: number;
}

const PricingGrid: React.FC = () => {
  // First row of pricing cards
  const entryLevelFeatures: PricingFeature[] = [
    { id: "entry-1", text: "Entry Level Professionally Written Resume" },
    { id: "entry-2", text: "48-72 Hours Turnaround Time (TAT)" },
    { id: "entry-3", text: "Money-Back Guarantee" },
    { id: "entry-4", text: "ATS Compatibility: Over 90% Success Rate" },
    { id: "entry-5", text: "ATS Testing Included" },
    { id: "entry-6", text: "Multiple Template Design Options" },
    { id: "entry-7", text: "5 Revisions" },
    { id: "entry-8", text: "Universal Formatting" },
    { id: "entry-9", text: "Final Files in PDF & Word Formats" },
  ];

  const professionalFeatures: PricingFeature[] = [
    { id: "prof-1", text: "Professionally Written Resume" },
    {
      id: "prof-2",
      text: "1-on-1 Consultation with a Certified Professional Resume Writer",
    },
    { id: "prof-3", text: "48-72 Hours Turnaround Time (TAT)" },
    { id: "prof-4", text: "Money-Back Guarantee" },
    { id: "prof-5", text: "ATS Compatibility: Over 90% Success Rate" },
    { id: "prof-6", text: "ATS Testing Included" },
    { id: "prof-7", text: "Multiple Template Design Options" },
    { id: "prof-8", text: "Unlimited Revisions" },
    { id: "prof-9", text: "Universal Formatting" },
    { id: "prof-10", text: "Final Files in PDF & Word Formats" },
    { id: "prof-11", text: "Rush Service Available (24 Hours)" },
  ];

  const professionalBundleFeatures: PricingFeature[] = [
    { id: "bundle-1", text: "Professionally Written Resume" },
    { id: "bundle-2", text: "Cover Letter" },
    {
      id: "bundle-3",
      text: "1-on-1 Consultation with a Certified Professional Resume Writer",
    },
    { id: "bundle-4", text: "48-72 Hours Turnaround Time (TAT)" },
    { id: "bundle-5", text: "Money-Back Guarantee" },
    { id: "bundle-6", text: "ATS Compatibility: Over 90% Success Rate" },
    { id: "bundle-7", text: "ATS Testing Included" },
    { id: "bundle-8", text: "Multiple Template Design Options" },
    { id: "bundle-9", text: "Unlimited Revisions" },
    { id: "bundle-10", text: "Universal Formatting" },
    { id: "bundle-11", text: "Final Files in PDF & Word Formats" },
    { id: "bundle-12", text: "Rush Service Available (24 Hours)" },
  ];

  // Second row of pricing cards
  const corporateBundleFeatures: PricingFeature[] = [
    { id: "corp-1", text: "Corporate Level Professionally Written Resume" },
    { id: "corp-2", text: "LinkedIn Profile Creation & Optimization" },
    { id: "corp-3", text: "Cover Letter" },
    {
      id: "corp-4",
      text: "1-on-1 Consultation with a Certified Professional Resume Writer",
    },
    { id: "corp-5", text: "48-72 Hours Turnaround Time (TAT)" },
    { id: "corp-6", text: "Money-Back Guarantee" },
    { id: "corp-7", text: "ATS Compatibility: Over 90% Success Rate" },
    { id: "corp-8", text: "ATS Testing Included" },
    { id: "corp-9", text: "Custom Design Template" },
    { id: "corp-10", text: "Unlimited Revisions" },
    { id: "corp-11", text: "Universal Formatting" },
    { id: "corp-12", text: "Final Files in PDF & Word Formats" },
    { id: "corp-13", text: "Rush Service Available (24 Hours)" },
  ];

  const executiveBundleFeatures: PricingFeature[] = [
    { id: "exec-1", text: "Executive Level Professionally Written Resume" },
    { id: "exec-2", text: "LinkedIn Profile Creation & Optimization" },
    { id: "exec-3", text: "Cover Letter" },
    {
      id: "exec-4",
      text: "5 Job Posting on Indeed, Glassdoor, USA Jobs & Zip recruiter etc",
    },
    {
      id: "exec-5",
      text: "1-on-1 Consultation with a Certified Professional Resume Writer",
    },
    { id: "exec-6", text: "48-72 Hours Turnaround Time (TAT)" },
    { id: "exec-7", text: "Money-Back Guarantee" },
    { id: "exec-8", text: "ATS Compatibility: Over 90% Success Rate" },
    { id: "exec-9", text: "ATS Testing Included" },
    { id: "exec-10", text: "Custom Design Template" },
    { id: "exec-11", text: "Unlimited Revisions" },
    { id: "exec-12", text: "Universal Formatting" },
    { id: "exec-13", text: "Final Files in PDF & Word Formats" },
    { id: "exec-14", text: "Rush Service Available (24 Hours)" },
  ];

  const webPortfolioFeatures: PricingFeature[] = [
    { id: "web-1", text: "Professionally Written Content" },
    { id: "web-2", text: "Custom Resume Card with Qr code" },
    { id: "web-3", text: "Live Online Portfolio" },
    { id: "web-4", text: "Custom Interactive Design" },
    { id: "web-5", text: "Comprehensive Presentation" },
    { id: "web-6", text: "Dedicated Account Manager" },
    { id: "web-7", text: "Organic testimonials" },
    { id: "web-8", text: "Achievements Showcasing" },
    { id: "web-9", text: "Worldwide Accessibility" },
    { id: "web-10", text: "Cross Browser Compatible" },
    { id: "web-11", text: "Contact Form Integration" },
    { id: "web-12", text: "Custom color schemes" },
    { id: "web-13", text: "LinkedIn Profiles Integration" },
    { id: "web-14", text: "visibility in search engines" },
    { id: "web-15", text: "Turn Around 5 Business Days" },
  ];

  // Third row of pricing cards
  const linkedinFeatures: PricingFeature[] = [
    { id: "linkedin-1", text: "Profile Optimization" },
    { id: "linkedin-2", text: "Custom Headline & Summary" },
    { id: "linkedin-3", text: "Experience & Skills Enhancement" },
    { id: "linkedin-4", text: "Professional Profile & Cover Photos" },
    { id: "linkedin-5", text: "48-72 Hours Turnaround Time (TAT)" },
    {
      id: "linkedin-6",
      text: "Optimization of your profile to improve its ranking in LinkedIn and Google search results",
    },
    {
      id: "linkedin-7",
      text: "Profile's performance and visibility metrics to track improvements",
    },
    {
      id: "linkedin-8",
      text: "Optional: PDF guide with tips on maintaining and updating your LinkedIn profile (additional cost may apply)",
    },
  ];

  const coverLetterFeatures: PricingFeature[] = [
    { id: "cover-1", text: "Custom Cover Letter" },
    { id: "cover-2", text: "Targeted Content" },
    { id: "cover-3", text: "Company Research" },
    { id: "cover-4", text: "Professional Formatting" },
    { id: "cover-5", text: "Unlimited Revisions" },
    { id: "cover-6", text: "ATS Optimization" },
    { id: "cover-7", text: "Final cover letter in PDF and Word formats" },
  ];

  const jobPostingsFeatures: PricingFeature[] = [
    { id: "job-1", text: "Job Post Creation" },
    { id: "job-2", text: "Targeted Job Listings" },
    {
      id: "job-3",
      text: "10 Job Posting on Indeed, Glassdoor, USA Jobs & Zip recruiter etc",
    },
    { id: "job-4", text: "Custom Job Alerts" },
    { id: "job-5", text: "Job Application Tracking" },
    { id: "job-6", text: "Resume and Cover Letter Integration" },
    { id: "job-7", text: "Profile Optimization" },
    { id: "job-8", text: "ATS Compatibility Posts" },
    {
      id: "job-9",
      text: "Optional: Additional job posting services or reposting on new platforms (additional cost may apply)",
    },
  ];

  const [showResumeForm, setShowResumeForm] = useState(false);
  const [selectedPricingDetails, setSelectedPricingDetails] = useState<
    PricingDetails | undefined
  >(undefined);

  const handleOrderClick = (details: PricingDetails) => {
    setSelectedPricingDetails(details);
    setShowResumeForm(true);
  };

  const handleFormClose = () => {
    setShowResumeForm(false);
    setSelectedPricingDetails(undefined);
  };

  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Resume Services Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <PricingCard
            titleLine1="Entry Level"
            titleLine2="Resume"
            subtitle="Make a lasting impression for your first job"
            price={119}
            originalPrice={170}
            features={entryLevelFeatures}
            ctaText="Order Now"
            phoneNumber="+1 (855) 846-0134"
            onCtaClick={() =>
              handleOrderClick({
                serviceName: "Entry Level Resume",
                price: 119,
                originalPrice: 170,
              })
            }
          />

          <PricingCard
            titleLine1="Professional Level"
            titleLine2="Resume"
            subtitle="Beat the competition with a professional resume"
            price={150}
            originalPrice={220}
            features={professionalFeatures}
            popularLabel="MOST POPULAR"
            ctaText="Order Now"
            phoneNumber="+1 (855) 846-0134"
            onCtaClick={() =>
              handleOrderClick({
                serviceName: "Professional Level Resume",
                price: 150,
                originalPrice: 220,
              })
            }
          />

          <PricingCard
            titleLine1="Professional Level"
            titleLine2="Bundle"
            subtitle="Beat the competition with a professional resume"
            price={219}
            originalPrice={320}
            features={professionalBundleFeatures}
            ctaText="Order Now"
            phoneNumber="+1 (855) 846-0134"
            onCtaClick={() =>
              handleOrderClick({
                serviceName: "Professional Level Bundle",
                price: 219,
                originalPrice: 320,
              })
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <PricingCard
            titleLine1="Corporate Level"
            titleLine2="Bundle"
            subtitle="Set a distinguished tone for a class-apart impression"
            price={389}
            originalPrice={520}
            features={corporateBundleFeatures}
            ctaText="Order Now"
            phoneNumber="+1 (855) 846-0134"
            popularLabel="BEST VALUE"
            onCtaClick={() =>
              handleOrderClick({
                serviceName: "Corporate Level Bundle",
                price: 389,
                originalPrice: 520,
              })
            }
          />

          <PricingCard
            titleLine1="Executive Level"
            titleLine2="Bundle"
            subtitle="Set a distinguished tone for a class-apart impression"
            price={499}
            originalPrice={670}
            features={executiveBundleFeatures}
            ctaText="Order Now"
            phoneNumber="+1 (855) 846-0134"
            onCtaClick={() =>
              handleOrderClick({
                serviceName: "Executive Level Bundle",
                price: 499,
                originalPrice: 670,
              })
            }
          />

          <PricingCard
            titleLine1="Web Based"
            titleLine2="Portfolio"
            subtitle="Set a distinguished tone for a class-apart impression"
            price={369}
            originalPrice={720}
            features={webPortfolioFeatures}
            ctaText="Order Now"
            phoneNumber="+1 (855) 846-0134"
            onCtaClick={() =>
              handleOrderClick({
                serviceName: "Web Based Portfolio",
                price: 369,
                originalPrice: 720,
              })
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard
            titleLine1="LinkedIn"
            titleLine2="Profiles"
            subtitle="Set a distinguished tone for a class-apart impression"
            price={219}
            originalPrice={370}
            features={linkedinFeatures}
            ctaText="Order Now"
            phoneNumber="+1 (855) 846-0134"
            onCtaClick={() =>
              handleOrderClick({
                serviceName: "LinkedIn Profiles",
                price: 219,
                originalPrice: 370,
              })
            }
          />

          <PricingCard
            titleLine1="Cover"
            titleLine2="Letter"
            subtitle="Win the HR personal before the resume consideration"
            price={110}
            originalPrice={220}
            features={coverLetterFeatures}
            ctaText="Order Now"
            phoneNumber="+1 (855) 846-0134"
            onCtaClick={() =>
              handleOrderClick({
                serviceName: "Cover Letter",
                price: 110,
                originalPrice: 220,
              })
            }
          />

          <PricingCard
            titleLine1="Job"
            titleLine2="Postings"
            subtitle="Boost your chances of getting hired instantly"
            price={169}
            originalPrice={270}
            features={jobPostingsFeatures}
            ctaText="Order Now"
            phoneNumber="+1 (855) 846-0134"
            onCtaClick={() =>
              handleOrderClick({
                serviceName: "Job Postings",
                price: 169,
                originalPrice: 270,
              })
            }
          />
        </div>

        {/* Render ResumeForm conditionally */}
        {showResumeForm && (
          <div className="fixed inset-0 bg-opacity-30 backdrop-brightness-30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full mx-4">
              <ResumeForm
                onClose={handleFormClose}
                initialPricingDetails={selectedPricingDetails}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingGrid;
