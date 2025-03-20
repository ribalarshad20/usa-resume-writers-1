import React, { useState } from "react";

interface CareerGuideDownloadProps {
  title?: string;
  mainHeading?: string;
  accentText?: string;
  buttonText?: string;
  placeholderText?: string;
  onSubmit?: (email: string) => void;
}

const CareerGuideDownload: React.FC<CareerGuideDownloadProps> = ({
  title = "The Comprehensive Career Guide",
  mainHeading = "Download The Complete Guide To",
  accentText = "Ace Your Career",
  buttonText = "Download Now!",
  placeholderText = "Enter Your Email...",
  onSubmit = (email) => console.log(`Email submitted: ${email}`),
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubmit(email);
    }
  };

  return (
    <div className="w-full bg-slate-900 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <p className="text-gray-200 text-center mb-2 font-medium text-sm md:text-base">
            {title}
          </p>

          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3">
            {mainHeading} <span className="text-emerald-400">{accentText}</span>
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholderText}
                className="w-full px-4 py-3 text-gray-800 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-400 hover:bg-emerald-500 text-gray-800 font-medium py-3 px-4 transition duration-150 ease-in-out"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerGuideDownload;
