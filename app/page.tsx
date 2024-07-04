"use client";

import { useSuspenseQuery } from "@apollo/client";
import Section from "./components/common/Section";
import LandingHero from "./components/landing/LandingHero";
import LinksCarousel from "./components/landing/LinksCarousel";
import AboutUs from "./components/landing/AboutUs";
import Values from "./components/landing/Values";
import { Testimonial } from "@/types/Testimonial";
import { Service } from "@/types/Service";
import { GET_TESTIMONIALS, GET_SERVICES } from "@/graphql/queries";
import Testimonials from "./components/landing/Testimonials";
import Services from "./components/landing/Services";
import WhyChooseUs from "./components/landing/WhyChooseUs";
import Accessible from "./components/landing/Accessible";
import ValueMission from "./components/landing/ValueMisson";
import RequestAppointment from "./components/landing/RequestAppointment";

interface ServicesQueryResult {
  allService: Service[];
}

interface TestimonialsQueryResult {
  allTestimonial: Testimonial[];
}

export default function Home() {
  const { data: testimonialData } =
    useSuspenseQuery<TestimonialsQueryResult>(GET_TESTIMONIALS);
  const { data: serviceData } =
    useSuspenseQuery<ServicesQueryResult>(GET_SERVICES);

  const testimonials = testimonialData?.allTestimonial ?? [];
  const services = serviceData?.allService ?? [];

  return (
    <main>
      <LandingHero />
      <Section bg={Section.Colors.Light} className="py-16">
        <LinksCarousel />
        <AboutUs />
        <Accessible />
      </Section>

      <Section bg={Section.Colors.Primary} className="!py-16">
        <Values />
      </Section>
      <Section bg={Section.Colors.Light} className="py-16">
        <ValueMission />
      </Section>
      <WhyChooseUs />
      <Section bg={Section.Colors.Light} className="py-16">
        <Services services={services} />
      </Section>
      <Section bg={Section.Colors.Primary}>
        <Testimonials hasShowMore={true} testimonials={testimonials} />
      </Section>
      <RequestAppointment />
    </main>
  );
}
