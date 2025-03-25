import { useState } from "react";

interface ContactFormProps {
  onSubmit: (formData: FormData) => void;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  marketingConsent: boolean;
  termsAndPrivacy: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    marketingConsent: false,
    termsAndPrivacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        <span className="text-slate-800">Get In </span>
        <span className="text-emerald-400">Touch With Us</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Form Section */}
        <div className="w-full md:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-gray-100 rounded p-4 text-slate-800"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full bg-gray-100 rounded p-4 text-slate-800"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full bg-gray-100 rounded p-4 text-slate-800"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-gray-100 rounded p-4 text-slate-800"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Write Message"
              rows={8}
              className="w-full bg-gray-100 rounded p-4 text-slate-800"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <div className="space-y-2">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="marketingConsent"
                  name="marketingConsent"
                  className="mt-1 mr-2"
                  checked={formData.marketingConsent}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="marketingConsent"
                  className="text-sm text-slate-700"
                >
                  I agree with Policy and provide my consent to receive B2B
                  marketing communications from
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="messageRates"
                  className="mt-1 mr-2"
                />
                <label
                  htmlFor="messageRates"
                  className="text-sm text-slate-700"
                >
                  Message and data rates may apply. Reply STOP to opt-out, Text
                  Help for help. 4 messages/month.
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="termsAndPrivacy"
                  name="termsAndPrivacy"
                  className="mt-1 mr-2"
                  checked={formData.termsAndPrivacy}
                  onChange={handleCheckboxChange}
                  required
                />
                <label
                  htmlFor="termsAndPrivacy"
                  className="text-sm text-slate-700"
                >
                  I Agree and accepts Terms Conditions and Privacy Policy
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="bg-emerald-400 hover:bg-emerald-500 text-white font-medium py-3 px-8 rounded transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <div className="p-4">
            <p className="text-gray-500 mb-6">
              We are here to accommodate to all your resume writing
              requirements. One of our customer support representatives will get
              in touch with you shortly.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-slate-800 font-medium mb-2">Phone :</p>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-emerald-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <a
                    href="tel:+18558460134"
                    className="text-slate-700 hover:text-emerald-500 transition duration-300"
                  >
                    +1 (855) 846-0134
                  </a>
                </div>
              </div>

              <div>
                <p className="text-slate-800 font-medium mb-2">Email :</p>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-emerald-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <a
                    href="mailto:info@resumewritersusa.com"
                    className="text-slate-700 hover:text-emerald-500 transition duration-300"
                  >
                    info@resumewritersusa.com
                  </a>
                </div>
              </div>

              <div>
                <p className="text-slate-800 font-medium mb-2">Address :</p>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-emerald-400 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="text-slate-700">
                    2251 Barry Ave, Los Angeles, CA 90064, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
