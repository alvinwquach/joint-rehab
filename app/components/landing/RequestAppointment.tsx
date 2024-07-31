import Link from "next/link";
import Section from "../common/Section";

function RequestAppointment() {
  return (
    <Section bg={Section.Colors.Fifth}>
      <div className="flex items-center justify-between ">
        <div className="md:text-4xl text-2xl font-medium text-white ">
          Request your appointment today.
        </div>
        <Link
          href="/request-appointment"
          className="px-4 py-2 text-center  rounded-full  bg-white  text-black hover:bg-blue-700 hover:text-white transition"
        >
          Request Appointment
        </Link>
      </div>
      <div className="font-bold text-2xl text-white mt-4">
        We want you to get better.
      </div>
      <div className="mt-4 text-lg">
        At Joint Rehab, we have a dedicated team of registered physiotherapists,
        massage therapists and acupuncturists who will address your pain,
        strength, mobility, and function so you can return to the activities
        that are important to you.
      </div>
    </Section>
  );
}

export default RequestAppointment;
