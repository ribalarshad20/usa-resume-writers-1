import React, { useState } from "react";
import CountryList from "country-list-with-dial-code-and-flag";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

interface ResumeReviewFormProps {
  title?: string;
  onSubmit?: () => void;
}

interface Country {
  name: string;
  dialCode: string;
  code: string;
  flag: string;
}

export interface FormData {
  fullName: string;
  email: string;
  country: string;
  phoneNumber: string;
  message?: string;
  termsAgreed: boolean;
}

const ResumeReviewForm: React.FC<ResumeReviewFormProps> = ({
  title = "Request A Free Resume Review By HR Experts",
  onSubmit,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    country: "UNITED STATES",
    phoneNumber: "",
    message: "",
    termsAgreed: false,
  });

  const [selectedCountry, setSelectedCountry] = useState<Country>(
    CountryList.findOneByCountryCode("US") as Country
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      onSubmit();
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
          message: "Resume review request submitted successfully!",
        });

        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          country: "UNITED STATES",
          phoneNumber: "",
          message: "",
          termsAgreed: false,
        });
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "Failed to submit resume review request",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again.",
      });
      console.error("Error submitting resume review request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const allCountries = CountryList.getAll().map((country) => ({
    label: `${country.flag} ${country.name} (${country.dialCode})`,
    value: country.code,
  }));

  return (
    <div className="w-full h-full bg-white p-6 rounded-xl shadow-xl overflow-y-auto max-h-full">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
        {title}
      </h2>

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
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>

        {/* Country & Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Country / Phone
          </label>
          <div className="flex">
            <Select
              value={{
                label: `${selectedCountry.name} (${selectedCountry.dialCode})`,
                value: selectedCountry.code,
              }}
              onChange={handleCountryChange}
              options={allCountries}
              className="flex-1"
              classNamePrefix="react-select"
            />
            <div className="ml-2 flex items-center px-3 border-t border-b border-gray-300 bg-gray-100 text-gray-500">
              {selectedCountry.dialCode}
            </div>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone number"
              className="flex-1 items-center border border-gray-300 rounded-r-md px-3"
              required
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Enter Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md px-3 py-2"
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="termsAgreed"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleChange}
            className="h-4 w-4 border-gray-300 rounded"
            required
          />
          <label htmlFor="termsAgreed" className="text-sm text-gray-700">
            I agree and accept Terms Conditions and Privacy Policy
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white py-2 rounded-md font-bold transition-colors ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#2F4376] hover:bg-opacity-90"
            }`}
          >
            {isSubmitting ? "SUBMITTING..." : "START YOUR PROJECT"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeReviewForm;
