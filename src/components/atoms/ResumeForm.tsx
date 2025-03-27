import React, { useState } from "react";
import popUpImage from "../../assets/popup-element.png";
import { X } from "lucide-react";
import CountryList, { Country } from "country-list-with-dial-code-and-flag";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

interface PricingDetails {
  serviceName: string;
  price: number;
  originalPrice: number;
}

export interface FormData {
  fullName: string;
  email: string;
  country: string;
  phoneNumber: string;

  termsAgreed: boolean;
  serviceName?: string;
  servicePrice?: number;
}

interface ResumeFormProps {
  onSubmit?: (formData: FormData) => void;
  onClose?: () => void;
  initialPricingDetails?: PricingDetails;
}

const ResumeForm: React.FC<ResumeFormProps> = ({
  onSubmit,
  onClose,
  initialPricingDetails,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    country: "UNITED STATES",
    phoneNumber: "",
    termsAgreed: false,
    serviceName: initialPricingDetails?.serviceName,
    servicePrice: initialPricingDetails?.price,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const [selectedCountry, setSelectedCountry] = useState(
    CountryList.findOneByCountryCode("US") as Country
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  interface CountryOption {
    label: string;
    value: string;
  }

  const handleCountryChange = (selectedOption: CountryOption | null) => {
    if (selectedOption) {
      const country = CountryList.findOneByCountryCode(
        selectedOption.value
      ) as Country;
      setSelectedCountry(country);
      setFormData({
        ...formData,
        country: selectedOption.label,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Call optional onSubmit prop if provided
    if (onSubmit) {
      onSubmit(formData);
    }

    try {
      const response = await fetch(
        "https://crm-martechsol-server-fc6bbfa0ab6c.herokuapp.com/api/email/send-resume-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        navigate("/thankyou");
        setSubmitStatus({
          success: true,
          message: "Resume request submitted successfully!",
        });

        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          country: "UNITED STATES",
          phoneNumber: "",

          termsAgreed: false,
          serviceName: initialPricingDetails?.serviceName,
          servicePrice: initialPricingDetails?.price,
        });
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "Failed to submit resume request",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again.",
      });
      console.error("Error submitting resume request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const allCountries = CountryList.getAll().map((country) => ({
    label: `${country.flag} ${country.name} (${country.dialCode})`,
    value: country.code,
  }));

  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100 max-w-7xl mx-auto overflow-hidden rounded-lg">
      {/* Left side - Image (hidden on mobile) */}
      <div className="hidden md:block md:w-2/5 relative">
        <img
          src={popUpImage}
          alt="Professional woman in business attire"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-3/5 bg-white p-6 md:p-8 relative">
        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#C11A2F] text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            <X />
          </button>
        )}

        {/* Heading with optional service information */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Get A <span className="text-[#C11A2F]">Resume</span> that
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold">
            Aces All HR Standards.
          </h2>
          {initialPricingDetails && (
            <p className="mt-4 text-gray-600">
              Service: {initialPricingDetails.serviceName} - Price: $
              {initialPricingDetails.price}
              <span className="line-through ml-2 text-gray-400">
                ${initialPricingDetails.originalPrice}
              </span>
            </p>
          )}
        </div>

        {/* Submit Status Message */}
        {submitStatus && (
          <div
            className={`mb-4 p-3 rounded ${
              submitStatus.success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div>
            <Select
              value={{
                label: `${selectedCountry.name} (${selectedCountry.dialCode})`,
                value: selectedCountry.code,
              }}
              onChange={handleCountryChange}
              options={allCountries}
              styles={{
                control: (base) => ({
                  ...base,
                  border: "1px solid #D1D5DB", // Tailwind's border-gray-300 color
                  borderRadius: "0.25rem", // Tailwind's rounded
                  boxShadow: "none",
                  "&:hover": {
                    border: "1px solid #D1D5DB",
                  },
                }),
              }}
              className="w-full"
              classNamePrefix="react-select"
            />
          </div>

          <div className="flex">
            <div className="w-16 border border-gray-300 rounded-l p-2 bg-gray-50 text-center">
              {selectedCountry.dialCode}
            </div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter Your Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-r p-2"
              required
            />
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="termsAgreed"
              id="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <label htmlFor="termsAgreed" className="text-sm">
              I Agree and accept Terms Conditions and Privacy Policy
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white py-2 rounded font-medium transition-colors ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#2F4376] hover:bg-opacity-90"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
