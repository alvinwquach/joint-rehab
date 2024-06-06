"use client";

import { useQuery, useSuspenseQuery } from "@apollo/client";
import Section from "./components/common/Section";
import WelcomeToJointRehab from "./components/landing/WelcomeToJointRehab";
import AboutUs from "./components/landing/AboutUs";
import Values from "./components/landing/Values";
import { Testimonial } from "@/types/Testimonial";
import { GET_TESTIMONIALS } from "@/graphql/queries";
import Testimonials from "./components/landing/Testimonials";

interface TestimonialsQueryResult {
  allTestimonial: Testimonial[];
}

export default function Home() {
  const { data: testimonialData } =
    useSuspenseQuery<TestimonialsQueryResult>(GET_TESTIMONIALS);

  const testimonials = testimonialData?.allTestimonial ?? [];
  console.log(testimonials);

  return (
    <main>
      <Section className={Section.Colors.Dark}>
        <WelcomeToJointRehab />
      </Section>
      <Section className={Section.Colors.Light}>
        <AboutUs />
      </Section>
      <Section className={Section.Colors.Light}>
        <Values />
      </Section>
      <Section>
        <Testimonials hasShowMore={true} testimonials={testimonials} />
      </Section>
    </main>
  );
}
