import React, { useState } from "react";
import CountryList from "country-list-with-dial-code-and-flag";
import Select from "react-select"; // Importing react-select

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

const ResumeReviewForm: React.FC<ResumeReviewFormProps> = ({
  title = "Request A Free Resume Review By HR Experts",
  onSubmit,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    CountryList.findOneByCountryCode("US") as Country
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
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
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
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
            placeholder="Full Name"
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
              id="phone"
              value={phoneNumber}
              onChange={handlePhoneChange}
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
            placeholder="Email Address"
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
            placeholder="Enter Your Message"
            rows={4}
            className="block w-full border border-gray-300 rounded-md px-3 py-2"
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 border-gray-300 rounded"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree and accept Terms Conditions and Privacy Policy
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#2F4376] text-white py-2 rounded-md font-bold hover:bg-[#2F4376] transition-colors"
          >
            START YOUR PROJECT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeReviewForm;
