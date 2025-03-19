import React from "react";
import resumeImage from "../../assets/optmz-img-01.png";
interface ATSResumeSectionProps {
  // Props can be added to make this component more dynamic
  consultButtonText?: string;
  headerText?: string;
  subHeaderText?: string;
  descriptionText?: string;
  subTitle?: string;
  paragraphText?: string;
}

const ATSResumeSection: React.FC<ATSResumeSectionProps> = ({
  consultButtonText = "Consult Our Experts",
  headerText = "ATS Compliant Resume",
  //   subHeaderText = "Optimized for Applicant Tracking System",
  descriptionText = "Once we custom written your resume, we deploy the services of the ATS technology to make sure that your resume will pass through it when you apply for a prospective job.",
  subTitle = "Professionally Written Resumes Optimized for ATS",
  paragraphText = "Applicants get rejected for using resume templates that are unreadable by Applicant Tracking Systems (ATS) and resume screening software. We make sure that you never get rejected by a computer again. Our expert writers custom write professional resumes that are vetted by recruiters and are optimized to pass ATS and recruitment software.",
}) => {
  return (
    <div className="w-full bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-8">
          <div className="inline-block">
            <h1 className="text-2xl md:text-4xl font-bold">
              <span className="text-emerald-400">
                {headerText.split(" ")[0]} {headerText.split(" ")[1]}
              </span>
              <span className="text-gray-800"> {headerText.split(" ")[2]}</span>
            </h1>
            <div className="h-1 w-full mt-2 bg-emerald-400"></div>
          </div>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-sm md:text-base">
            {descriptionText}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                {subTitle.split("for")[0]}
              </h2>
              <h2 className="text-xl md:text-2xl font-bold">
                Optimized for <span className="text-emerald-400">ATS</span>
              </h2>
              <div className="h-1 w-24 mt-2 bg-emerald-400"></div>
            </div>

            <p className="text-sm md:text-base text-gray-700">
              {paragraphText}
            </p>

            <div>
              <button className="bg-emerald-400 hover:bg-emerald-500 text-gray-800 font-medium py-2 px-6 rounded-md transition duration-300">
                {consultButtonText}
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={resumeImage}
              alt="ATS Recruitment Process Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATSResumeSection;
