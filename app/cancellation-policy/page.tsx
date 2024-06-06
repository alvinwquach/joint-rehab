import Section from "../components/common/Section";
import React from "react";

function CancellationPolicy() {
  return (
    <Section>
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        Cancellation Policy
      </h1>
      <div className="h-6" />
      <p className="mt-4 text-lg sm:text-xl text-gray-200 font-light">
        Your appointment is very important to us. It is reserved especially for
        you.
      </p>
      <p className="mt-4 text-lg sm:text-xl text-gray-200 font-light">
        We understand that unplanned circumstances may arise and you may need to
        cancel your appointment. However, when a patient does not show up for a
        scheduled appointment, or does not cancel with at least 24 hours notice,
        another patient loses an opportunity to be seen.
      </p>
      <p className="mt-4 text-lg sm:text-xl text-gray-200 font-light">
        In the event you are unable to keep your appointment, please contact us
        by phone at least 24 hours prior to your appointment. If we are unable
        to answer, please leave a voice-mail for us. Failing to do the above,
        you will be responsible to pay for a cancellation fee which will be the
        cost of your scheduled appointment.
      </p>
      <p className="mt-4 text-lg sm:text-xl text-gray-200 font-light">
        We truly appreciate your understanding regarding this matter.
      </p>
      <p className="mt-4 text-lg sm:text-xl text-gray-200 font-light italic">
        The Joint Rehab Team
      </p>
    </Section>
  );
}

export default CancellationPolicy;