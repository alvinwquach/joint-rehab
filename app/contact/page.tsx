import { getClient } from "../lib/apollo-client";
import {
  GET_MARKHAM_PLAZA_CONTACT_DETAILS,
  GET_ASHGROVE_MEDICAL_CENTER_CONTACT_DETAILS,
} from "@/graphql/queries";
import Section from "../components/common/Section";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";
import ContactUs from "../components/contact/ContactUs";

export const metadata = {
  title: "Joint Rehab - Contact",
  openGraph: {
    title: "Joint Rehab - Contact",
  },
};

async function Contact() {
  const { data: markhamPlazaData } = await getClient().query({
    query: GET_MARKHAM_PLAZA_CONTACT_DETAILS,
  });
  const { data: ashgroveData } = await getClient().query({
    query: GET_ASHGROVE_MEDICAL_CENTER_CONTACT_DETAILS,
  });

  const markhamPlaza = markhamPlazaData?.allMarkhamPlazaLocation ?? [];
  const ashgroveMedicalCentre =
    ashgroveData?.allAshgroveMedicalCenterLocation ?? [];

  return (
    <div>
      <ContactUs />
      <Section>
        <ContactForm />
        <ContactDetails
          markhamPlaza={markhamPlaza}
          ashgroveMedicalCentre={ashgroveMedicalCentre}
        />
      </Section>
    </div>
  );
}

export default Contact;
