"use client";

import { useQuery } from "@apollo/client";
import Section from "./components/common/Section";
import LivePainFree from "./components/landing/LivePainFree";
import AboutUs from "./components/landing/AboutUs";
import Values from "./components/landing/Values";
import { Testimonial } from "@/types/Testimonial";
import { Service } from "@/types/Service";
import { GET_TESTIMONIALS, GET_SERVICES } from "@/graphql/queries";
import Testimonials from "./components/landing/Testimonials";
import Services from "./components/landing/Services";
import LinksCarousel from "./components/landing/LinksCarousel";
import LandingHero from "./components/landing/Hero";

interface ServicesQueryResult {
  allService: Service[];
}

interface TestimonialsQueryResult {
  allTestimonial: Testimonial[];
}

export default function Home() {
  const { data: testimonialData } =
    useQuery<TestimonialsQueryResult>(GET_TESTIMONIALS);
  const { data: serviceData } = useQuery<ServicesQueryResult>(GET_SERVICES);

  const testimonials = testimonialData?.allTestimonial ?? [];
  const services = serviceData?.allService ?? [];

  return (
    <main>
      <LandingHero />

      <Section bg={Section.Colors.Dark} className="py-16">
        <LinksCarousel />
      </Section>
      <Section bg={Section.Colors.Light} className="!py-16">
        <AboutUs />
      </Section>
      <Section bg={Section.Colors.Dark} className="!py-16">
        <Values />
      </Section>
      <Section bg={Section.Colors.Light} className="py-16">
        <Services services={services} />
      </Section>
      <Section bg={Section.Colors.Dark}>
        <Testimonials hasShowMore={true} testimonials={testimonials} />
      </Section>
    </main>
  );
}
