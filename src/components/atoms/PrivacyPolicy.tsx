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

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 mt-8 md:p-6 bg-white rounded text-justify">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

      {/* Intro */}
      <p className="text-gray-700 mb-6">
        Welcome to USA Resume Writers’ Privacy Policy. This policy outlines how
        we collect, use, and safeguard your personal information when you
        interact with our website and services.
      </p>
      <p className="text-gray-700 mb-6">
        By using our website, you agree to the collection and use of information
        in accordance with this Privacy Policy. If you do not agree, please
        refrain from using our services.
      </p>
      <p className="text-gray-700 mb-6">
        Note: This policy applies only to the USA Resume Writers’ website and
        not to any third-party sites linked through our platform.
      </p>

      <Section title="About USA Resume Writers">
        <p className="text-gray-700">
          USA Resume Writers provides career-focused services, including
          professional resume writing, editing, CV creation, cover letter
          writing, and LinkedIn profile optimization to help individuals
          showcase their skills and reach their career goals.
        </p>
      </Section>

      <Section title="What Personal Data We Collect">
        <p className="text-gray-700 mb-4">
          Personal data refers to any information that can be used to identify
          you. While some data is necessary for providing our services, you
          choose what information to share with us.
        </p>
        <p className="text-gray-700 mb-4">
          Information We May Collect Includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Contact details:</span> Name, email
            address, phone number, mailing address, and social media links
            (e.g., LinkedIn or Google).
          </li>
          <li>
            <span className="font-medium">Career-related data:</span> Work
            history, education, certifications, skills, and professional
            achievements.
          </li>
          <li>
            <span className="font-medium">Optional details:</span> Photo, salary
            expectations, or any additional information shared during
            consultations.
          </li>
          <li>
            <span className="font-medium">Sensitive data:</span> You may choose
            to submit information like nationality, ethnicity, religion, health
            condition, or marital status; however, it is not required for our
            services.
          </li>
        </ul>
      </Section>

      <Section title="Visitors to Our Website">
        <p className="text-gray-700 mb-4">
          We use analytics tools such as Google Analytics to track website
          activity. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Browser type, device, and location (non-identifiable)</li>
          <li>Time spent on pages, click patterns, and navigation behavior</li>
        </ul>
        <p className="text-gray-700 mt-4">
          While Google Analytics logs IP addresses, we do not access or store
          personally identifiable information through it. Cookies and similar
          tracking tools may be used to monitor site interaction. For details,
          see the “Cookies” section below.
        </p>
      </Section>

      <Section title="Contact Forms">
        <p className="text-gray-700 mb-4">
          When you use our contact forms, we collect basic details such as:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Your full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Any message or additional information you provide</li>
        </ul>
        <p className="text-gray-700 mt-4">
          This allows us to follow up with your inquiry and provide better
          support.
        </p>
      </Section>

      <Section title="Clients of USA Resume Writers">
        <p className="text-gray-700">
          If you purchase our services, we may collect additional personal and
          professional data necessary for completing your project. This helps us
          deliver custom-tailored documents and ensures an efficient process.
        </p>
      </Section>

      <Section title="Live Chat Services">
        <p className="text-gray-700 mb-4">
          Our live chat is powered by a trusted third-party provider. When you
          use this feature, we may collect:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Your name and contact information</li>
          <li>IP address, device type, browser, and operating system</li>
          <li>
            Transcripts of the chat, which are securely stored on our email
            server
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          This data is used only to respond to your inquiry or follow-up as
          needed.
        </p>
      </Section>

      <Section title="How We Use Cookies">
        <p className="text-gray-700 mb-4">
          Cookies are small files placed on your device to improve your
          experience on our site. We use:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Essential Cookies:</span> These are
            required for core functionality—like remembering your login status
            or ensuring site security.
          </li>
          <li>
            <span className="font-medium">Analytical Cookies:</span> Help us
            understand user behavior and improve our website’s performance by
            tracking page visits and navigation patterns.
          </li>
          <li>
            <span className="font-medium">Functional Cookies:</span> Allow the
            site to remember your preferences (e.g., language or layout
            choices).
          </li>
          <li>
            <span className="font-medium">Third-Party Cookies:</span> Used by
            external services such as Google Ads or Facebook for analytics and
            advertising. These platforms have their own privacy policies.
          </li>
        </ol>
        <p className="text-gray-700 mt-4">
          You may choose to disable cookies via your browser settings, but this
          may limit site functionality.
        </p>
      </Section>

      <Section title="Marketing Communications">
        <p className="text-gray-700 mb-4">
          We do not sell your personal data. However, we may use non-personally
          identifiable information for marketing purposes.
        </p>
        <p className="text-gray-700 mb-4">
          You may receive promotional emails only if you’ve opted in. You can
          unsubscribe anytime using the link provided in the email or by
          contacting us.
        </p>
        <p className="text-gray-700">
          We may still send important transactional emails related to your
          account or services, even if you opt out of promotional content.
        </p>
      </Section>

      <Section title="Data Security">
        <p className="text-gray-700 mb-4">
          Your privacy is a priority. USA Resume Writers implements technical
          and organizational safeguards, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Data encryption</li>
          <li>Secure user accounts</li>
          <li>Access Restrictions</li>
          <li>Staff training</li>
          <li>Routine system checks and software updates</li>
        </ul>
        <p className="text-gray-700 mt-4">
          These steps help protect your information from unauthorized access,
          loss, or misuse.
        </p>
      </Section>

      <Section title="Children’s Privacy">
        <p className="text-gray-700">
          Our services are not intended for individuals under the age of 18. We
          do not knowingly collect personal information from children. If we
          discover that such information has been submitted, we will take steps
          to delete it promptly.
        </p>
      </Section>

      <Section title="Policy Updates">
        <p className="text-gray-700">
          We may revise this Privacy Policy occasionally. Any changes will be
          posted on this page. We encourage you to review the policy
          periodically to stay informed.
        </p>
      </Section>

      <Section title="Contact Information">
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns regarding our Privacy Policy or
          the handling of your data, please contact us:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:contact@usaresumewriters.com"
              className="text-blue-600 hover:underline"
            >
              contact@usaresumewriters.com
            </a>
          </li>
          <li>
            <span className="font-medium">Address:</span> 7901 4th St N # 21629,
            St. Petersburg, FL 33702
          </li>
        </ul>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
