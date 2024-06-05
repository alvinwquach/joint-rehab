import Section from "../components/common/Section";
import React from "react";

type ClauseProps = {
  title: string;
  children?: React.ReactNode;
};

function Clause({ title, children }: ClauseProps) {
  return (
    <>
      <h2 className="mt-12 text-xl font-bold sm:text-2xl">{title}</h2>
      <div className="mt-4 text-xl text-gray-200 font-light">{children}</div>
    </>
  );
}

function PrivacyPolicy() {
  return (
    <Section>
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <div className="h-6" />
      <Clause title="1. Accountability">
        <p>
          Under the direction of our Information Officer, we are responsible for
          maintaining and protecting the personal information we collect, use,
          retain and disclose.
        </p>
      </Clause>
      <Clause title="2. Purposes">
        <div>
          Personal information is collected, used, retained and disclosed in
          order to provide safe and effective physiotherapy and massage therapy
          treatments. For example, we collect information about a patient’s
          health history in order to help us assess what their health needs are,
          to advise them of their options, to avoid contraindicated treatment,
          to obtain a health “baseline” which will serve to measure changes over
          time, and to contact you when necessary.
        </div>
      </Clause>
      <Clause title="3. Consent">
        <p>
          We ask for and receive your consent to collect, use, retain and
          disclose your personal information. The only exceptions would be in
          cases where use or disclosure is required or permitted by law, for
          example in the course of a criminal investigation or medical
          emergency. You have the right to withdraw your consent at any time by
          notifying our Information Officer in writing. If you do not provide
          your consent we will be unable to provide physiotherapy or massage
          therapy treatments to you.
        </p>
      </Clause>
      <Clause title="4. Limiting Collection">
        <p>
          Information is only collected for the purposes mentioned above. This
          information may be shared by all physiotherapists and massage
          therapists in the clinic who treat you. We use information, such as
          addresses and phone numbers, to make introductory calls about our
          services, to set up appointments, to follow up on treatments, to
          discuss therapy options and to provide information on any major
          business changes. We do not mail flyers, or distribute name lists to
          any other business or entity.
        </p>
      </Clause>
      <Clause title="5. Limiting collection, use, retention, and disclosure">
        <p>
          We keep our client files for ten years, or longer if required by law,
          after which it is destroyed by shredding.
        </p>
      </Clause>
      <Clause title="6. Accuracy">
        <p>
          We take reasonable steps to ensure your information is accurate,
          complete and up-to-date.
        </p>
      </Clause>
      <Clause title="7. Safeguards">
        <p>
          Information on paper is retained within staff areas. If we are
          required to mail personal information, it is sent in sealed envelopes,
          hand delivered or sent by reputable companies, such as bonded
          couriers. Staff collect, use, retain and disclose personal information
          only as necessary in order to fulfill their duties and in accordance
          with our privacy policy.
        </p>
      </Clause>
      <Clause title="8. Openness">
        <p>Information is available through our Information Officer.</p>
      </Clause>
      <Clause title="9. Individual Access">
        <p>
          You have the right to see what personal information we hold about you
          upon your request. We will help with any information you do not
          understand. However we will need to confirm your identity and we
          reserve the right to charge a nominal fee. If you believe there is a
          mistake in the factual information, you have the right to ask for it
          to be corrected. We may ask for documentation as proof that our files
          are incorrect.
        </p>
      </Clause>
      <Clause title="10. Openness">
        <p>
          If you have any questions or concerns, you may contact our Information
          Officer: Renuka Kulasingham, co-owner, This policy is made in
          compliance with the {""}
          <span className="font-bold">
            Personal Health Information Protection Act
          </span>{" "}
          (PHIPA). The goals of PHIPA are to protect the privacy of individuals
          and to protect confidentiality and security of personal health
          information in a manner that facilitates the effective provision of
          health care. For information contact:
        </p>
        <p className="mt-4">
          <strong>Joint Rehab</strong>
        </p>
        <p className="mt-2">
          <strong>Information and Privacy Commission Ontario</strong>
        </p>
        <p className="mt-2">
          <strong>2 Bloor Street East, Suite 1400</strong>
        </p>
        <p className="mt-2">
          <strong>Toronto, ON M4W 1A6</strong>
        </p>
        <p className="mt-2">
          <a
            href="tel:+14163263333"
            className="underline hover:text-green-350 hover:no-underline"
            aria-label="Call Joint Rehab"
          >
            Phone: +1 (416) 326-3333
          </a>
        </p>
        <p className="mt-2">
          <a
            href="fax:+14163259395"
            className="underline hover:text-green-350 hover:no-underline"
            aria-label="Send fax to Joint Rehab"
          >
            Fax: +1 (416) 325-9395
          </a>
        </p>
      </Clause>
    </Section>
  );
}

export default PrivacyPolicy;
