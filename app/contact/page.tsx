import Section from "../components/common/Section";
import ContactForm from "../components/contact/ContactForm";

export const metadata = {
  title: "Joint Rehab - Contact",
  openGraph: {
    title: "Joint Rehab - Contact",
  },
};

function Contact() {
  return (
    <div>
      <Section>
        <ContactForm />
      </Section>
    </div>
  );
}

export default Contact;
