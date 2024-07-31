import Section from "../components/common/Section";
import React from "react";

export const metadata = {
  title: "Joint Rehab - Accessibility Policy",
  openGraph: {
    title: "Joint Rehab - Accessibility Policy",
  },
};

type ClauseProps = {
  title: string;
  children?: React.ReactNode;
};

function Clause({ title, children }: ClauseProps) {
  return (
    <>
      <h2 className="mt-12 text-xl font-bold sm:text-2xl text-black">
        {title}
      </h2>
      <div className="mt-4 text-xl text-black font-light">{children}</div>
    </>
  );
}

function AccessibilityPolicy() {
  return (
    <Section>
      <h1 className="mt-12 text-3xl font-extrabold tracking-tight sm:text-4xl text-black">
        Accessibility Policy
      </h1>
      <div className="h-6" />
      <Clause title="Policy Statement">
        <p>
          This policy is intended to meet the requirements of the Accessibility
          Standards for Customer Service, Ontario Regulation 429/07 under the
          Accessibility for Ontarians with Disabilities Act, 2005 (AODA). Joint
          Rehab is committed to applying the principles and guidelines of the
          AODA and strives to provide services while respecting the dignity and
          independence of persons with disabilities. Joint Rehab strives to
          provide a barrier-free environment for its clients and ensures that
          its clients with disabilities receive the same high standard of
          service that is provided to all clients.
        </p>
      </Clause>
      <Clause title="Joint Rehab's plan in servicing people with disabilities"></Clause>

      <Clause title="Assistive Devices">
        <div>
          We will ensure that our staff are trained and familiar with various
          assistive devices that may be used by customers with disabilities
          while accessing our services.
        </div>
      </Clause>
      <Clause title="Communication">
        <p>
          We will communicate with people with disabilities in ways that take
          into account their disability.
        </p>
      </Clause>
      <Clause title="Service Animals">
        <p>We welcome people with disabilities and their service animals.</p>
      </Clause>
      <Clause title="Notice of Temporary Disruption">
        <p>
          In the event of a planned or unexpected disruption to our services,
          Joint Rehab will notify clients promptly. This clearly posted notice
          will include information about the reason for the disruption, its’
          anticipated length of time, and a description of alternative
          facilities or services. The notice will be placed at our clinic’s
          front entrance and on our website.
        </p>
      </Clause>
      <Clause title="Training for Staff">
        <p>
          Joint Rehab will provide training to employees, contractors, and
          others who deal with clients on their behalf. This training shall be
          provided to staff within 2 weeks of hiring. Training will include: An
          overview of the Accessibility for Ontarians with Disabilities Act,
          2005 and the requirements of the customer service standard. Joint
          Rehab ‘s plan related to the customer service standard. How to
          interact and communicate with people with various types of
          disabilities. How to interact with people with disabilities who use an
          assistive device or require the assistance of a service animal or a
          support person. How to use assistive device including wheelchairs,
          canes, crutches, and walkers which may help with providing services to
          people with disabilities. What to do if a person with a disability is
          having difficulty in accessing Joint Rehab’s goods and services. Staff
          will also be trained when changes are made to our Accessible Customer
          Service Plan.
        </p>
      </Clause>
      <Clause title="Feedback Process">
        <p>
          Clients who wish to provide feedback regarding Joint Rehab’s
          Accessibility Customer Service Plan for persons with a disability may
          contact our clinic by:
        </p>
        <p className="mt-2">
          E-Mail: {""}
          <a
            className="underline text-lg italic  hover:no-underline"
            href="mailto:william@jointrehab.ca?subject=Feedback%20process"
          >
            william@jointrehab.ca
          </a>
        </p>
        <p className="mt-2">
          Phone: {""}
          <a
            href="tel:+19054713535"
            className="underline  hover:no-underline"
            aria-label="Call Joint Rehab"
          >
            +1 (905) 471-3535
          </a>
        </p>
        <p className="mt-2">
          Complaints will be addressed according to our organization’s regular
          complaint management procedures.
        </p>
      </Clause>
      <Clause title="Modifications to this or other Policies">
        <p>
          Any policy of Joint Rehab which does not respect and promote the
          dignity and independence of people with disabilities will be modified
          or removed.
        </p>
      </Clause>
    </Section>
  );
}

export default AccessibilityPolicy;
