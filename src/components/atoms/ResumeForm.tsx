import React, { useState } from "react";
import popUpImage from "../../assets/popup-element.png";

export interface FormData {
  fullName: string;
  email: string;
  country: string;
  phoneNumber: string;
  marketingConsent: boolean;
  textMessages: boolean;
  termsAgreed: boolean;
}

interface ResumeFormProps {
  onSubmit: (formData: FormData) => void;
  onClose?: () => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    country: "UNITED STATES",
    phoneNumber: "",
    marketingConsent: false,
    textMessages: false,
    termsAgreed: false,
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

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
      <div className="w-full md:w-3/5 bg-white p-4 md:p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Get A <span className="text-green-400">Resume</span> that
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold">
            Aces All HR Standards.
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 appearance-none bg-white"
              required
            >
              <option value="UNITED STATES">🇺🇸 UNITED STATES</option>
              <option value="CANADA">🇨🇦 CANADA</option>
              <option value="UK">🇬🇧 UNITED KINGDOM</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          <div className="flex">
            <div className="w-16 border border-gray-300 rounded-l p-2 bg-gray-50 text-center">
              +1
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
              name="marketingConsent"
              id="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleChange}
              className="mt-1"
            />
            <label htmlFor="marketingConsent" className="text-sm">
              I agree with Policy and provide my consent to receive B2B
              marketing communications from
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="textMessages"
              id="textMessages"
              checked={formData.textMessages}
              onChange={handleChange}
              className="mt-1"
            />
            <label htmlFor="textMessages" className="text-sm">
              Message and data rates may apply. Reply STOP to opt-out, Text Help
              for help. 4 messages/month.
            </label>
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
              I Agree and accepts Terms Conditions and Privacy Policy
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded font-medium hover:bg-green-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
