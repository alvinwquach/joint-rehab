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
        <RequestAppointmentForm />
      </Section>
    </div>
  );
}

export default RequestAppointment;
