import Image from "next/image";
import Section from "./components/common/Section";
import WelcomeToJointRehab from "./components/landing/WelcomeToJointRehab";
import AboutUs from "./components/landing/AboutUs";
import Values from "./components/landing/Values";

export default function Home() {
  return (
    <main>
      <Section className={Section.Colors.Dark}>
        <WelcomeToJointRehab />
      </Section>
      <Section bg={Section.Colors.Light} className="!py-16">
        <AboutUs />
      </Section>

      <Section bg={Section.Colors.Light} className="!py-16">
        <Values />
      </Section>
    </main>
  );
}
