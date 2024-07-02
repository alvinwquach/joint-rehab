import Link from "next/link";
import Section from "../common/Section";

function RequestAppointment() {
  return (
    <Section>
      <div className="flex items-center justify-evenly  ">
        <div className="text-4xl font-medium text-white ">
          Request your appointment today.
        </div>
        <Link
          href="/request-appointment"
          className="px-4 py-2 bg-white text-black rounded-full hover:bg-slate-500 transition"
        >
          Request Appointment
        </Link>
      </div>
    </Section>
  );
}

export default RequestAppointment;
