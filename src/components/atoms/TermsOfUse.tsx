import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-[#C11A2F] mb-2">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

const TermsOfUse: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 mt-8 md:p-6 bg-white rounded text-justify">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms of Use</h1>

      <Section title="Acceptance of Terms">
        <p className="text-[#676767]">
          By accessing or using the USA Resume Writers website, you agree to
          comply with and be bound by the terms and conditions outlined below.
          These Terms of Use apply to all users of the site and services. If you
          disagree with any part, please refrain from using our website or
          services.
        </p>
      </Section>

      <Section title="Privacy and Data Usage">
        <p className="text-[#676767]">
          Visiting this website and using our services are your choices. Any
          concerns regarding privacy are governed by our Terms of Use and
          Privacy Policy, which include provisions on dispute resolution, data
          handling, and applicable laws of the State of Florida.
        </p>
      </Section>

      <Section title="Policy Updates">
        <p className="text-[#676767]">
          Our policies are subject to change at any time. It is the customer’s
          responsibility to review them each time they visit the site or place
          an order.
        </p>
      </Section>

      <Section title="Navigational Data Collection">
        <p className="text-[#676767]">
          We collect non-personal data such as page visits and technical
          performance (e.g., load time and device type) to enhance website
          functionality and user experience. This data helps us understand user
          behavior and improve our services accordingly.
        </p>
      </Section>

      <Section title="Use of Site Content">
        <p className="text-[#676767]">
          All content—including images, text, logos, graphics, and software—is
          the intellectual property of USA Resume Writers and is protected under
          copyright laws. Users may only download material for personal,
          non-commercial use. Reproduction, distribution, or modification of
          site content for commercial purposes is strictly prohibited.
        </p>
      </Section>

      <Section title="Electronic Communication">
        <p className="text-[#676767]">
          By visiting our website or contacting us via email, you agree to
          receive communication from us electronically. These communications
          meet the legal requirements for written communication.
        </p>
      </Section>

      <Section title="Official Communication Channels">
        <p className="text-[#676767]">
          USA Resume Writers will only communicate through emails from our
          official domain:{" "}
          <a
            href="mailto:contact@usaresumewriters.com"
            className="text-blue-600 hover:underline"
          >
            contact@usaresumewriters.com
          </a>
          . We are not responsible for any communication from third-party or
          unauthenticated sources.
        </p>
      </Section>

      <Section title="Copyrights and Trademarks">
        <p className="text-[#676767]">
          All content, designs, software, and materials on this site are owned
          or licensed by USA Resume Writers and are protected by national and
          international intellectual property laws. Unauthorized use is strictly
          prohibited.
        </p>
      </Section>

      <Section title="Revisions Policy">
        <p className="text-[#676767]">
          We offer three complimentary revisions on your order.
        </p>
        <ul className="list-disc pl-6 mt-3 text-[#676767]">
          <li>
            Revision requests must be submitted within 10 days of delivery (35
            days for larger orders).
          </li>
          <li>
            After this period, it is assumed that the customer is satisfied.
          </li>
          <li>
            Revision turnaround times are based on project urgency and may range
            between 24 to 72 hours.
          </li>
          <li>
            Revisions beyond the complimentary limit may incur additional
            charges.
          </li>
        </ul>
      </Section>

      <Section title="Amendments Policy">
        <p className="text-[#676767]">
          Customers are entitled to three free amendments under the same
          conditions and timeframes as the revisions policy. Amendment requests
          beyond this will require an additional fee. All turnaround timelines
          follow the urgency of the initial order.
        </p>
      </Section>

      <Section title="Refund Policy">
        <ul className="list-disc pl-6 mt-3 text-[#676767]">
          <li>
            A full refund may be requested before work begins (minus processing
            fees).
          </li>
          <li>
            If work has begun, a partial refund may be considered based on
            completed work.
          </li>
          <li>
            Once refunded, any written content remains the property of USA
            Resume Writers and must not be used in any form.
          </li>
          <li>
            Unauthorized use of refunded content may result in legal action.
          </li>
        </ul>
      </Section>

      <Section title="Quality Assurance Policy">
        <p className="text-[#676767]">
          All resumes, letters, and other content are crafted to meet industry
          standards. Every document goes through proofreading, formatting
          checks, and plagiarism detection using advanced tools. Once delivered
          and paid in full, ownership of the final content is transferred to the
          client.
        </p>
      </Section>

      <Section title="Account Responsibility">
        <p className="text-[#676767]">
          Customers are responsible for safeguarding their account credentials.
          All actions under a customer’s account are their responsibility.
          Please ensure you use strong passwords and protect your login
          information.
        </p>
      </Section>

      <Section title="Pricing and Best Price Commitment">
        <p className="text-[#676767]">
          We offer competitive pricing with exclusive features. Promotional
          discounts cannot be combined with other offers. If you find a
          competing service offering similar value, let us know—we may offer an
          additional 10% discount.
        </p>
      </Section>

      <Section title="Disclaimers">
        <p className="text-[#676767]">
          USA Resume Writers provides services “as-is.” We make no warranties
          regarding:
        </p>
        <ul className="list-disc pl-6 mt-3 text-[#676767]">
          <li>Uninterrupted service</li>
          <li>100% guaranteed job placement</li>
          <li>Error-free experience</li>
        </ul>
        <p className="text-[#676767] mt-3">
          We are not liable for loss of data, delays, or external system issues.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p className="text-[#676767]">
          Under no circumstance shall USA Resume Writers be liable for any
          indirect, incidental, or consequential damages arising out of the
          use—or inability to use—of our website or services.
        </p>
      </Section>

      <Section title="Communication with USA Resume Writers">
        <p className="text-[#676767]">
          All official communications, from order placement to final delivery,
          must be conducted via our secure platform or email.
        </p>
        <ul className="list-disc pl-6 mt-3 text-[#676767]">
          <li>
            Email:{" "}
            <a
              href="mailto:contact@usaresumewriters.com"
              className="text-blue-600 hover:underline"
            >
              contact@usaresumewriters.com
            </a>
          </li>
          <li>
            Business Address: 7901 4th St N #21629, St. Petersburg, FL 33702
          </li>
        </ul>
        <p className="text-[#676767] mt-3">
          Note: Fraudulent activity, including the use of stolen payment
          methods, is prohibited and will be reported to authorities.
        </p>
      </Section>
    </div>
  );
};

export default TermsOfUse;
