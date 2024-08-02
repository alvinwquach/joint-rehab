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

async function FetchContactData() {
  try {
    // Perform all API queries concurrently
    const [{ data: markhamPlazaData }, { data: ashgroveData }] =
      await Promise.all([
        getClient().query({ query: GET_MARKHAM_PLAZA_CONTACT_DETAILS }),
        getClient().query({
          query: GET_ASHGROVE_MEDICAL_CENTER_CONTACT_DETAILS,
        }),
      ]);
    // Return the extracted data, defaulting to empty arrays if data is missing
    return {
      markhamPlaza: markhamPlazaData?.allMarkhamPlazaLocation ?? [],
      ashgroveMedicalCentre: ashgroveData?.ashgroveMedicalCentre ?? [],
    };
  } catch (error) {
    throw new Error(
      `Failed to fetch data: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

async function Contact() {
  const { markhamPlaza, ashgroveMedicalCentre } = await FetchContactData();

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
