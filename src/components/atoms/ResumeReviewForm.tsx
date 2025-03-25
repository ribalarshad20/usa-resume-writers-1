interface ResumeReviewFormProps {
  title?: string;
  onSubmit?: () => void;
}

const ResumeReviewForm: React.FC<ResumeReviewFormProps> = ({
  title = "Request A Free Resume Review By HR Experts",
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <div className="w-full h-full bg-white p-6 rounded-xl shadow-xl">
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
            className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
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
            <select
              defaultValue="US"
              className="border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              {/* Add more countries as needed */}
            </select>
            <input
              type="tel"
              id="phone"
              placeholder="000 000 000"
              className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
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
            className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
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
            className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="mr-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree and accept Terms Conditions and Privacy Policy
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md font-bold hover:bg-green-600 transition-colors"
        >
          START YOUR PROJECT
        </button>
      </form>
    </div>
  );
};

export default ResumeReviewForm;
