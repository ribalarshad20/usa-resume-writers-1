import { Mail, MapPin, Phone } from "lucide-react";
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
        <span className="text-[#C11A2F]">Touch With Us</span>
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
              className="bg-[#2F4376] border border-transparent hover:bg-transparent text-white hover:text-black hover:border-[#2F4376] font-medium py-3 px-8 rounded transition duration-300"
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
                  <Phone className="w-5 h-5 text-[#C11A2F] mr-2" />
                  <a
                    href="tel:+18558460134"
                    className="text-slate-700 hover:text-[#2F4376] transition duration-300"
                  >
                    +1 (855) 846-0134
                  </a>
                </div>
              </div>

              <div>
                <p className="text-slate-800 font-medium mb-2">Email :</p>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#C11A2F] mr-2" />
                  <a
                    href="mailto:info@resumewritersusa.com"
                    className="text-slate-700 hover:text-[#2F4376] transition duration-300"
                  >
                    info@resumewritersusa.com
                  </a>
                </div>
              </div>

              <div>
                <p className="text-slate-800 font-medium mb-2">Address :</p>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#C11A2F] mr-2 mt-1" />
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
