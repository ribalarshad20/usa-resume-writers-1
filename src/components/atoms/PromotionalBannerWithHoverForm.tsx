import { useState } from "react";
import ResumeReviewForm from "./ResumeReviewForm";
import { ArrowLeft } from "lucide-react";

interface PromotionalBannerWithFormProps {
  discountPercentage?: number;
  actionText?: string;
}

const PromotionalBannerWithForm: React.FC<PromotionalBannerWithFormProps> = ({
  discountPercentage = 20,
  actionText = "SIGN UP HERE TO GET",
}) => {
  const [showForm, setShowForm] = useState(false);

  const handleBannerClick = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="fixed top-10 right-0 z-50 flex items-stretch">
      <button
        onClick={handleBannerClick}
        className="flex flex-col items-center bg-black text-white rounded-4xl overflow-hidden w-13 md:w-13 h-full transform transition-transform duration-300 hover:scale-105"
      >
        <div className="flex items-center justify-center w-8 h-8 md:w-13 md:h-13 bg-[#ef0a28] rounded-full -mb-4">
          <ArrowLeft
            className={`transition-transform duration-300 ${
              showForm ? "rotate-180" : ""
            }`}
          />
        </div>

        <div className="py-8 px-4">
          <div className="vertical-text text-[#de001e] font-bold text-xl md:text-2xl mb-6">
            {discountPercentage}% OFF
          </div>
          <div className="vertical-text text-white font-bold text-xl md:text-2xl mb-6">
            {actionText}
          </div>
        </div>
      </button>

      {/* Form container */}
      <div
        className={`transform transition-all duration-500 ease-in-out overflow-hidden h-full ${
          showForm
            ? "opacity-100 max-w-lg translate-x-0"
            : "opacity-0 max-w-0 -translate-x-8"
        }`}
      >
        <div className="h-full">
          <ResumeReviewForm
            title="Request A Free Resume Review By HR Experts"
            onSubmit={() => {
              setShowForm(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionalBannerWithForm;
