import React from "react";

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

const TermsOfUse: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 mt-8 md:p-6 bg-white rounded">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Use</h1>

      <div className="space-y-6">
        <p className="text-[#676767]">
          The choice of visiting our homepage is solely the customer's decision.
          Any dispute over privacy is subject to this notice and our Privacy
          Policy. This includes limitations on damages, arbitration of disputes,
          and the applicable law of the state. If the customers have any issues
          regarding the Privacy Policy, they should contact us at their best
          convenience. Our customer services shall be most happy to serve them.
        </p>

        <p className="text-[#676767]">
          As our Policies are liable to change at any time, it is recommended
          that the customers go through the policy each time they enter the site
          to purchase.
        </p>

        <p className="text-[#676767]">
          The company gathers navigational information about where visitors go
          on our website and information about the technical efficiencies of our
          website and service (i.e. time to connect and time to download pages).
          This information allows us to see which areas of our Company's Website
          are most visited and helps us understand our customers better than
          before. This also helps us improve the quality of those sites which
          are lacking in some way or the other. Unless otherwise noted, all
          materials, including images, illustrations, designs, icons,
          photographs, written and other materials that are part of this site
          (collectively, the "Contents") are copyrights, trademarks, trade dress
          and/or other intellectual property owned, controlled or licensed by
          the Company.
        </p>

        <p className="text-[#676767]">
          This site and all its contents are intended solely for personal and
          non-commercial use. The customers may download or copy the Contents
          and other downloadable materials displayed on the Site for their
          personal use only. No right, title or interest in any downloaded
          materials or software is transferred to the customer as a result of
          any such downloading or copying. The customer may not reproduce
          (except as noted above), publish, transmit, distribute, display,
          modify, create derivatives, sell or participate in any sale or
          exploitation of the site, its content, or any related software.
        </p>
      </div>

      <Section title="Electronic Communications">
        <p className="text-[#676767]">
          The moment the customer visits our site or sends e-mails to our
          contacts, the customer is communicating with our company
          electronically. It's involuntary for the customers to receive our
          communications electronically. Our Company will communicate with the
          customer by e-mail or by posting notices on this site. Thus the
          customer agrees that all agreements, notices, disclosures and relevant
          communication satisfy and fulfill all legal requirements and are
          equivalent to any legal statement in writing.
        </p>

        <p className="text-[#676767] mt-4">
          YOU agree that Resume Writers USA. is not liable for any
          correspondence from email address (es) other than the ones followed by
          our own domain or/and any Toll-free number that is not mentioned on
          our website. Resume Writers USA. should not be held responsible for
          any damage(s) caused by such correspondence. We only take
          responsibility for any communication through email address (es) under
          our own domain name or/and via Toll-free number i.e. already mentioned
          on Resume Writers USA.'s Website.
        </p>
      </Section>

      <Section title="Copyright/Trademarks">
        <p className="text-[#676767]">
          All content that is included on this site, such as text, graphics,
          logos, button icons, images, digital downloads, data compilations, and
          software, is the property of or its content suppliers and protected by
          and international copyright laws. The compilation of all content at
          this site is the exclusive property of this company and protected by
          and international copyright laws. All software used at this site is
          the property of this company or its software suppliers and protected
          by and international copyright laws. The trademark names used within
          our sites are the property of their respective company or its
          subsidiaries and cannot be used in connection with any product or
          service that is not part of that company.
        </p>
      </Section>

      <Section title="Site Policies, Modification, and Severability">
        <p className="text-[#676767]">
          We suggest all customers to our site review all other policies posted
          here. These policies also govern visits to our site. The Company
          reserves the right to make changes to our site, to our policies, and
          to these Conditions of Use at any time. If any of these conditions
          shall be deemed invalid, void, or for any reason unenforceable, that
          condition shall be deemed severable and shall not affect the validity
          and enforceability of any remaining condition.
        </p>
      </Section>

      <Section title="Revision Policy">
        <p className="text-[#676767]">
          We provide guaranteed three free revisions. Customers can ask us for
          free revisions. In case the number of pages exceeds, appropriate
          charges would then be applicable. In order to receive free revision,
          customers are required to request for a revision within 10 days of the
          order delivery date. However, in case of a large order, the timeline
          exceeds up to 35 days. If the revision request falls within these
          guidelines we will revise the order to meet the customer's initial
          requirements free of charge.
        </p>

        <p className="text-[#676767] mt-4">
          Once the above-mentioned timeline has passed it shall be assumed that
          the customer is satisfied.
        </p>

        <p className="text-[#676767] mt-4">
          Any revision request sent by the customer for plagiarism within the
          order provided must be accompanied by a detailed report for the
          plagiarism. All revision requests pertaining to customers order will
          be completed as per the urgency of the order with 24 hours as standard
          minimum turnaround time.
        </p>

        <p className="text-[#676767] mt-4">
          Revision turnaround time as per urgency is as follows:
        </p>

        <ul className="list-disc pl-6 mt-3">
          <li className="text-[#676767]">
            For orders up to 24 hours of urgency; Revision turnaround time would
            be 24 hours.
          </li>
          <li className="text-[#676767] mt-1">
            For orders between 24-48 hours of urgency; Revision turnaround time
            would be 48 hours.
          </li>
          <li className="text-[#676767] mt-1">
            For orders of 48 hours and above; Revision turnaround time would be
            72 hours.
          </li>
        </ul>
      </Section>

      <Section title="Amendment Policy">
        <p className="text-[#676767]">
          We provide three amendment's guarantee. Through this guarantee,
          customers can ask us for three amendments and we will entertain the
          amendment request.
        </p>

        <p className="text-[#676767] mt-4">
          In order to receive free amendment, customers are required to provide
          a request for a revision within 10 days of the order delivery date.
          However, in case of a reasonably large order, the timeline exceeds up
          to 35 days. If the amendment request falls within these guidelines we
          will revise the order to meet the customer's initial requirements free
          of charge.
        </p>

        <p className="text-[#676767] mt-4">
          Once the above-mentioned timeline has passed it shall be assumed that
          the customer is satisfied.
        </p>

        <p className="text-[#676767] mt-4">
          All amendment requests pertaining to customers order will be completed
          as per the urgency of the order with 24 hours as standard minimum
          turnaround time.
        </p>

        <p className="text-[#676767] mt-4">
          Amendment turnaround time as per urgency is as follows:
        </p>

        <ul className="list-disc pl-6 mt-3">
          <li className="text-[#676767]">
            For orders up to 24 hours of urgency; Amendment turnaround time
            would be 24 hours.
          </li>
          <li className="text-[#676767] mt-1">
            For orders between 24-48 hours of urgency; Amendment turnaround time
            would be 48 hours.
          </li>
          <li className="text-[#676767] mt-1">
            For orders of 48 hours and above; Amendment turnaround time would be
            72 hours.
          </li>
        </ul>
      </Section>

      <Section title="Our Programs">
        <p className="text-[#676767]">
          The amount credited to your account through the Referral Discount
          offer is non-refundable and non-cashable. For programs and offers
          where additional amount is credited to the user account, e.g.
          Affiliate Program, the extra amount credited is non-refundable and
          non-cashable.
        </p>
      </Section>

      <Section title="Refund Policy">
        <p className="text-[#676767]">
          If you request a refund before we start working on your project, a
          100% of your payment will be refunded (transaction charges will be
          deducted). You may ask for a refund if you are not a 100% satisfied
          with your purchase. In such scenarios, we will refund all the balance
          payment of your order. The amount for which we have already completed
          the work for on your project will not be refunded. Please note that
          only the balance payment will be refunded. However, if you have a
          specific complaint and need a complete refund, you may send us a
          refund request and we will take a fair decision accordingly.
        </p>

        <p className="text-[#676767] mt-4">
          In case of a refund, the content written by Resume Writers USA. will
          remain our property and the customer cannot use it, in part or
          otherwise. If, however, it is found that the content written by Resume
          Writers USA. has been used by the customer, we, at Resume Writers
          USA., shall have the right to initiate legal action.
        </p>
      </Section>

      <Section title="Quality Assurance Policy">
        <p className="text-[#676767]">
          In order to provide the desired results, our consultants do not
          deviate from the specifications provided by the customer in the order
          form. All work is proofread prior to final delivery. It is to be noted
          that we guarantee the standard & quality of the order.
        </p>

        <p className="text-[#676767] mt-4">
          Our quality control department double-checks each content for
          plagiarism before sending it to the customer. First, every content
          undergoes our authenticity test through various advanced plagiarism
          detection software's. Finally, it goes to our specially employed board
          of editors that eliminates any possibility of plagiarism. All work
          submitted upon project completion becomes your property if it is paid
          for, and your responsibility.
        </p>
      </Section>

      <Section title="Your Account">
        <p className="text-[#676767]">
          The use of individual customer accounts is solely the responsibility
          of the user in terms of maintaining the Confidentiality of their own
          account and password and for restricting access to their computer. As
          such, the customer agrees to accept responsibility for all activities
          that occur under "your account" or "password."
        </p>
      </Section>

      <Section title="Best Price">
        <p className="text-[#676767]">
          We offer services at the best price along with exclusive free
          features. Customers are charged at a special discounted price. A quick
          read of our exclusive service features will help customers understand
          how we stay successful in the business. If customers find any site
          offering these EXCLUSIVE features we will give them 10% additional
          discount.
        </p>

        <p className="text-[#676767] mt-4">
          Furthermore, once a customer takes advantage of any promotional deals
          offering discounts, other discounts, such as the Bulk Order Discount
          and the Membership Discount will not be applicable to their order.
        </p>
      </Section>

      <Section title="Disclaimers">
        <p className="text-[#676767]">
          1) Customer expressly understands and agree that their use of the
          services is at their sole risk and that the services are provided "as
          is" and "as available." In particular, the company, its subsidiaries,
          and affiliates, and its licensors do not represent or warrant to
          customers that:
        </p>

        <ul className="list-disc pl-6 mt-3">
          <li className="text-[#676767]">
            (a) Customer's use of the services will meet their requirements,
          </li>
          <li className="text-[#676767] mt-1">
            (b) Customer's use of the services will be uninterrupted, timely,
            secure or free from error,
          </li>
          <li className="text-[#676767] mt-1">
            (c) Any information obtained by customers as a result of their use
            of the services will be accurate or reliable
          </li>
        </ul>

        <p className="text-[#676767] mt-4">
          2) Any material downloaded or otherwise obtained through the use of
          the services is done at the customer's own discretion and risk and
          that the customer will be solely responsible for any damage to their
          computer system or other device or loss of data that results from the
          download of any such material.
        </p>

        <p className="text-[#676767] mt-4">
          3) No advice or information, whether oral or written, obtained by the
          customers from the company or through or from the services shall
          create any warranty not expressly stated in the terms.
        </p>
      </Section>

      <Section title="Limitation of liability">
        <p className="text-[#676767]">
          Customers agree that in no event shall the company be liable for any
          direct, indirect, incidental, consequential, special and exemplary
          damages, or any damages whatsoever, arising from the use, misuse, (or
          inability to use) or performance of this website or services provided
          or offered by any means, even if the company has been advised of the
          possibility of such damages. Customers further agree that in no event,
          shall any liability to the company as the result of the agreement, or
          other circumstances involving them and the company exceed the fee
          which has been paid up to the time during which any claim deriving
          liability may arise.
        </p>
      </Section>

      <Section title="Means of Reaching the Company">
        <p className="text-[#676767]">
          The pathway to all communications, starting from the purchase to the
          delivery process to the completion of the order, is done using any of
          the following methods:
        </p>

        <ul className="list-disc pl-6 mt-3">
          <li className="text-[#676767]">
            Toll-Free number:{" "}
            <a
              href="tel:+1 (855) 846-0134"
              className="text-blue-600 hover:underline"
            >
              +1 (855) 846-0134
            </a>
          </li>
          <li className="text-[#676767] mt-1">
            E-mail:{" "}
            <a
              href="mailto:info@resumewritersusa.com"
              className="text-blue-600 hover:underline"
            >
              info@resumewritersusa.com
            </a>
          </li>
        </ul>

        <p className="text-[#676767] mt-4">
          Note: Use of stolen credit cards is strictly prohibited and is
          considered a serious crime. We work in close collaboration to fight
          cybercrime and make sure that all fraudulent orders are reported to
          the Federal and State Agencies.
        </p>
      </Section>
    </div>
  );
};

export default TermsOfUse;
