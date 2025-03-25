import { useState } from "react";
// Import all portfolio images
import webBasedResume01 from "../../../assets/webBasedResume/web-resume-01.png";
import webBasedResume02 from "../../../assets/webBasedResume/web-resume-02.png";
import webBasedResume03 from "../../../assets/webBasedResume/web-resume-03.png";
import webBasedResume04 from "../../../assets/webBasedResume/web-resume-04.png";
import webBasedResume05 from "../../../assets/webBasedResume/web-resume-05.png";
import webBasedResume06 from "../../../assets/webBasedResume/web-resume-06.png";
import webBasedResume07 from "../../../assets/webBasedResume/web-resume-07.png";
import webBasedResume08 from "../../../assets/webBasedResume/web-resume-08.png";
import ResumeForm, { FormData } from "../ResumeForm";

interface PortfolioSample {
  imageUrl: string;
  alt?: string;
}

interface WorkSamplesProps {
  portfolioSamples: PortfolioSample[];
  onPreviewClick?: (index: number) => void;
}

// Create CSS classes for the hover effect
const hoverStyles = `
  .portfolio-card {
    position: relative;
    overflow: hidden;
    /* Remove the fixed width and margin so it can span full column width */
    width: 100%;
    transform: scale(0.98); /* Slightly scale down the card */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .portfolio-card img {
    transition: filter 0.6s ease;
  }
  
  .portfolio-card:hover {
    transform: scale(1); /* Return to normal size on hover */
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }
  
  .portfolio-card:hover img {
    filter: brightness(0.9);
  }
  
  .overlay-animation {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%);
    opacity: 0;
    transform: translate(100%, -100%);
    transition: transform 0.6s ease, opacity 0.3s ease;
    pointer-events: none;
  }
  
  .portfolio-card:hover .overlay-animation {
    transform: translate(0, 0);
    opacity: 1;
  }
  
  .preview-button-container {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .portfolio-card:hover .preview-button-container {
    opacity: 1;
  }
  
  .preview-button {
    background: transparent;
    color: white;
    border: 3px solid white;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .preview-button:hover {
    background: white;
    color: #C11A2F;
  }
`;

const WorkSamples: React.FC<WorkSamplesProps> = ({
  portfolioSamples,
  onPreviewClick = () => {},
}) => {
  return (
    <section className="w-full py-8 px-4 bg-gradient-to-br from-white to-gray-50">
      {/* Add the styles to the document */}
      <style dangerouslySetInnerHTML={{ __html: hoverStyles }} />

      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#C11A2F] mb-4">
            Work Samples
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F4376] mb-8">
            Web Based Portfolios
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our certified developers effortlessly build a job-worthy portfolio
            that gets you hired faster and fits all the HR standards.
          </p>
        </div>

        {/* Portfolio Cards Grid - narrower spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioSamples.map((sample, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 portfolio-card"
              style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)" }}
            >
              <div className="w-full h-64 md:h-80 relative">
                <img
                  src={sample.imageUrl}
                  alt={sample.alt || `Portfolio sample ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Custom hover overlay with diagonal animation */}
                <div className="overlay-animation"></div>

                {/* Preview button - will show on hover */}
                <div className="preview-button-container">
                  <button
                    onClick={() => onPreviewClick(index)}
                    className="preview-button w-40"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example usage with sample data
export const WorkSamplesSection: React.FC = () => {
  const [showResumeForm, setShowResumeForm] = useState(false);
  const sampleData: PortfolioSample[] = [
    { imageUrl: webBasedResume01, alt: "Web Resume Sample 1" },
    { imageUrl: webBasedResume02, alt: "Web Resume Sample 2" },
    { imageUrl: webBasedResume03, alt: "Web Resume Sample 3" },
    { imageUrl: webBasedResume04, alt: "Web Resume Sample 4" },
    { imageUrl: webBasedResume05, alt: "Web Resume Sample 5" },
    { imageUrl: webBasedResume06, alt: "Web Resume Sample 6" },
    { imageUrl: webBasedResume07, alt: "Web Resume Sample 7" },
    { imageUrl: webBasedResume08, alt: "Web Resume Sample 8" },
  ];

  const handlePreviewClick = (index: number) => {
    console.log(`Preview clicked for sample ${index + 1}`);
    // Add your preview functionality here
  };
  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    setShowResumeForm(false);
  };

  return (
    <>
      <WorkSamples
        portfolioSamples={sampleData}
        onPreviewClick={handlePreviewClick}
      />
      <div className="flex justify-center mb-16">
        <button
          className="w-52 px-6 py-3 font-semibold bg-[#2F4376] text-white border border-transparent hover:bg-transparent hover:text-black hover:border-[#2F4376] transition-colors duration-200"
          onClick={() => setShowResumeForm(true)}
        >
          Request For More
        </button>
      </div>
      {showResumeForm && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-brightness-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full mx-4">
            <ResumeForm
              onSubmit={handleFormSubmit}
              onClose={() => setShowResumeForm(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSamplesSection;
