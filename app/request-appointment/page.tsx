import { Suspense } from "react";
import Section from "../components/common/Section";
import RequestAppointmentForm from "../components/request-appointment/RequestAppointmentForm";

export const metadata = {
  title: "Joint Rehab - Request Appointment",
  openGraph: {
    title: "Joint Rehab - Request Appointment",
  },
};

function RequestAppointment() {
  return (
    <div>
      <Section>
        <Suspense>
          <RequestAppointmentForm />
        </Suspense>
      </Section>
    </div>
  );
}

export default RequestAppointment;
