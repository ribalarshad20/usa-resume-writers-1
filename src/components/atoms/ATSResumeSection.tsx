import { useRef } from "react";
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
  headerText = "ATS-Friendly Resume Writing",

  descriptionText = "Our experts craft resumes designed to work with modern ATS tools—ensuring your application reaches recruiters without getting lost in the system or filtered out.",
  subTitle = "ATS-Ready Professional Resumes",
  paragraphText = "Many candidates get filtered out due to poorly formatted resumes. Our professional resume writers create custom resumes that work perfectly with Applicant Tracking Systems—designed, written, and recruiter-approved to get noticed by both software and hiring managers.",
}) => {
  const tawkChatRef = useRef<TawkChatRef>(null);

  return (
    <>
      <div className="w-full bg-gray-50 py-8 md:py-8">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center text-center">
              <p className="font-semibold text-black mb-2">
                Built for Applicant Tracking Systems
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-[#C11A2F]">
                  {headerText.split(" ")[0]} {headerText.split(" ")[1]}
                </span>
                <span className="text-[#2F4376]">
                  {" "}
                  {headerText.split(" ")[2]}
                </span>
              </h1>
              <div className="h-[2px] w-16 mt-6 bg-[#C11A2F]"></div>
            </div>

            <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-sm md:text-base">
              {descriptionText}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {subTitle.split("for")[0]}
                </h2>
                <h2 className="text-xl md:text-3xl font-bold mt-2 mb-2">
                  Optimized for <span className="text-[#C11A2F]">ATS</span>
                </h2>
                <div className="h-[2px] w-24 mt-4 bg-[#C11A2F]"></div>
              </div>

              <p className="text-sm md:text-base text-gray-700 text-justify">
                {paragraphText}
              </p>

              <div>
                <button
                  onClick={() => {
                    // On click, call the maximize method on TawkChat
                    tawkChatRef.current?.maximize();
                  }}
                  className="px-6 py-3 font-semibold bg-[#2F4376] border border-transparent hover:bg-transparent hover:border-[#2F4376] hover:text-[#2F4376] text-white transition-colors duration-200"
                >
                  Talk to Our Experts
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
