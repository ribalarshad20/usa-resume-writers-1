interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-emerald-500 mb-2">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 mt-8 md:p-6 bg-white rounded">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

      <div className="space-y-6">
        <p className="text-gray-700 font-medium">Terms Of Use</p>

        <p className="text-gray-700">
          Welcome to our Privacy Policy, where we outline how we handle your
          personal data and what it means for you.
        </p>

        <p className="text-gray-700">
          This notice applies to our website and the services mentioned on our
          website. By using our services, you consent to us collecting and
          processing your personal information. If you disagree with our
          practices, please refrain from using our website.
        </p>

        <p className="text-gray-700">
          Please note that this Privacy Policy only applies to our website and
          not to third-party sites linked to our platform. We respect your
          rights and comply with applicable laws regarding data protection. Any
          changes to this notice will be updated here, so please check back
          periodically for updates.
        </p>
      </div>

      <Section title="About Us">
        <p className="text-gray-700">
          We provide various services to help you stand out and showcase your
          strengths. Our team of professional resume writers offers resume
          writing, editing, CV services, LinkedIn profile creation, cover letter
          writing, and more.
        </p>
      </Section>

      <Section title="What Personal Data Do We Collect?">
        <p className="text-gray-700">
          Personal data includes details about you that can help someone know
          who you are.
        </p>

        <p className="text-gray-700 mt-4">
          Although we will protect your data well, submitting sensitive data
          like racial or ethnic origin, nationality, citizenship, social origin,
          language, health condition, age, religion, marital status, and trade
          union membership is your choice.
        </p>

        <p className="text-gray-700 mt-4">
          We might gather and handle these types of info:
        </p>

        <div className="mt-4">
          <p className="text-gray-700 font-medium">Users Of Our Website:</p>
          <div className="pl-5 mt-2">
            <p className="text-gray-700">
              We use Google Analytics to keep an eye on how people use our
              website. It collects info like where you are, what device you're
              using, and what browser you use. But don't worry, this info
              doesn't tell us who you are personally. Google Analytics also
              records your computer's IP address, but we don't see it. We see
              Google as a separate company that handles data for us.
            </p>
            <p className="text-gray-700 mt-3">
              Sometimes, we use technology to see how people behave on our site.
              This might involve something called a 'cookie' that gets saved on
              your browser. You can find out more about how we use cookies in
              Section 4.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-700 font-medium">Contact Us Form:</p>
          <div className="pl-5 mt-2">
            <p className="text-gray-700">
              We gather personal info like names, emails, and phone numbers
              through our website's contact form. This helps us respond to your
              questions and fulfill your needs.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-700 font-medium">Clients Of Our Website:</p>
          <div className="pl-5 mt-2">
            <p className="text-gray-700">
              We collect personal info from our clients (both writers and
              customers) to help with their questions about our service.
            </p>
            <p className="text-gray-700 mt-3">
              Here's the kind of info we collect:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="text-gray-700">
                <span className="font-medium">Contact details: </span>
                Your real name, social media links (like Google or LinkedIn),
                address, phone number, and email.
              </li>
              <li className="text-gray-700">
                <span className="font-medium">
                  Education and work history:{" "}
                </span>
                Info about your schooling and job experience.
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Other details: </span>
                Anything else you choose to share, like a photo or salary
                expectations.
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              Sometimes, we might need your consent to use your info. If we do,
              we'll let you know clearly.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-700 font-medium">Live Chat:</p>
          <div className="pl-5 mt-2">
            <p className="text-gray-700">
              We have a live chat on our website run by a third-party service
              provider. You can see their policy here:{" "}
              <a
                href="https://www.zendesk.com/company/agreements-and-terms/privacy-notice/"
                className="text-blue-600 hover:underline"
              >
                https://www.zendesk.com/company/agreements-and-terms/privacy-notice/
              </a>
            </p>
            <p className="text-gray-700 mt-3">
              When you use our live chat, we automatically gather these details:
              your IP address, browser type, and operating system. We'll also
              ask for your name, phone number, email, and any other info you
              share so we can follow up on your inquiry.
            </p>
            <p className="text-gray-700 mt-3">
              We get a transcript of your chat via email and keep it on our
              email provider's servers.
            </p>
          </div>
        </div>
      </Section>

      <Section title="How Do We Use Cookies?">
        <p className="text-gray-700">
          Cookies are tiny text files stored on your device for various
          purposes. There are two main types: persistent cookies and session
          cookies.
        </p>

        <p className="text-gray-700 mt-4">
          Persistent cookies stay on your device for a while and help us track
          and target your interests. Session cookies, on the other hand, make it
          easier for you to navigate our website and don't stick around as long.
        </p>

        <p className="text-gray-700 mt-4">
          Cookies can also be either "first party" or "third party". First-party
          cookies come directly from the website you're visiting and help with
          things like analytics and language settings. Third-party cookies come
          from other domains and are used for things like tracking and
          advertising.
        </p>

        <p className="text-gray-700 mt-4">
          You can choose to refuse browser cookies, but this might limit your
          access to parts of the website. If you want to delete stored cookies,
          you can do so manually. But remember, this won't stop more cookies
          from being placed on your device unless you adjust your browser
          settings.
        </p>

        <p className="text-gray-700 mt-4">
          Our cookies are used for the following purposes:
        </p>

        <ul className="mt-3 space-y-2">
          <li className="text-gray-700">
            <span className="font-medium">Essential/Technical: </span>
            These cookies are vital for our website to work as you expect. They
            help us recognize when you're logged in and remember your actions
            during your visit to keep the site secure.
          </li>
          <li className="text-gray-700">
            <span className="font-medium">Analytical/Performance: </span>
            These cookies help us understand how people use our website. They
            track which pages are popular and where our visitors come from.
          </li>
          <li className="text-gray-700">
            <span className="font-medium">Functionality: </span>
            These cookies remember your preferences and choices, making your
            experience on our site smoother.
          </li>
          <li className="text-gray-700">
            <span className="font-medium">Third-Party Advertising: </span>
            These cookies track your activities across different websites to
            provide you with targeted ads. Our third-party service providers,
            like Google and Facebook, may also use these cookies for advertising
            purposes. They have their own privacy policies.
          </li>
        </ul>
      </Section>

      <Section title="Marketing:">
        <p className="text-gray-700">
          We don't share your personal info with advertisers but might share
          anonymous visitor data for marketing purposes.
        </p>

        <p className="text-gray-700 mt-4">
          We might send you promotional emails, but only if you've agreed. You
          can opt-out anytime by following the instructions in the email or
          contacting us.
        </p>

        <p className="text-gray-700 mt-4">
          Even if you opt out of promotional emails, we may still send you
          important emails about your account or the services you've asked for.
        </p>
      </Section>

      <Section title="Security:">
        <p className="text-gray-700">
          We take the security of your personal information seriously and
          implement appropriate technical and organizational measures to
          safeguard it. These measures are designed to match the level of risk
          associated with processing your personal data. Our security protocols
          include encryption, access controls, regular security assessments, and
          staff training on data protection best practices. If you're interested
          in learning more about how we protect your information, feel free to
          get in touch with us.
        </p>
      </Section>

      <Section title="Contact Us:">
        <p className="text-gray-700">
          Your privacy matters to us. If you have any questions about how we
          handle your personal info, feel free to reach out to us at{" "}
          <a
            href="mailto:info@resumewritersusa.com"
            className="text-blue-600 hover:underline"
          >
            info@resumewritersusa.com
          </a>
          .
        </p>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
