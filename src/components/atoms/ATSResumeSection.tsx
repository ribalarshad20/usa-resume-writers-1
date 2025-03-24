import React, { useRef } from "react";
import resumeImage from "../../assets/optmz-img-01.png";
import TawkChat, { TawkChatRef } from "./TawkChat";
interface ATSResumeSectionProps {
  consultButtonText?: string;
  headerText?: string;
  subHeaderText?: string;
  descriptionText?: string;
  subTitle?: string;
  paragraphText?: string;
}

const ATSResumeSection: React.FC<ATSResumeSectionProps> = ({
  headerText = "ATS Compliant Resume",

  descriptionText = "Once we custom written your resume, we deploy the services of the ATS technology to make sure that your resume will pass through it when you apply for a prospective job.",
  subTitle = "Professionally Written Resumes",
  paragraphText = "Applicants get rejected for using resume templates that are unreadable by Applicant Tracking Systems (ATS) and resume screening software. We make sure that you never get rejected by a computer again. Our expert writers custom write professional resumes that are vetted by recruiters and are optimized to pass ATS and recruitment software.",
}) => {
  const tawkChatRef = useRef<TawkChatRef>(null);

  return (
    <>
      <div className="w-full bg-gray-50 py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center text-center">
              <p className="italic font-semibold text-black mb-2">
                Optimized for Applicant Tracking System
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-[#5FD797]">
                  {headerText.split(" ")[0]} {headerText.split(" ")[1]}
                </span>
                <span className="text-gray-800">
                  {" "}
                  {headerText.split(" ")[2]}
                </span>
              </h1>
              <div className="h-[2px] w-16 mt-6 bg-[#5FD797]"></div>
            </div>

            <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-sm md:text-base">
              {descriptionText}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                  {subTitle.split("for")[0]}
                </h2>
                <h2 className="text-xl md:text-3xl font-bold mt-2 mb-2">
                  Optimized for <span className="text-[#5FD797]">ATS</span>
                </h2>
                <div className="h-[3px] w-24 mt-4 bg-[#5FD797]"></div>
              </div>

              <p className="text-sm md:text-base text-gray-700">
                {paragraphText}
              </p>

              <div>
                <button
                  onClick={() => {
                    // On click, call the maximize method on TawkChat
                    tawkChatRef.current?.maximize();
                  }}
                  className="w-52 px-6 py-3 font-semibold bg-[#67D794] border border-transparent hover:text-black hover:bg-transparent hover:border-[#67D794] text-black transition-colors duration-200"
                >
                  Consult Our Experts
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

      <div className="fixed bottom-4 right-4 z-50">
        <TawkChat ref={tawkChatRef} />
      </div>
    </>
  );
};

export default ATSResumeSection;
