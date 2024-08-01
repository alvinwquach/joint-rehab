import { getClient } from "./lib/apollo-client";
import { GET_TESTIMONIALS, GET_SERVICES } from "@/graphql/queries";
import { Testimonial } from "@/types/Testimonial";
import { Service } from "@/types/Service";
import Section from "./components/common/Section";
import LandingHero from "./components/landing/LandingHero";
import LinksCarousel from "./components/landing/LinksCarousel";
import AboutUs from "./components/landing/AboutUs";
import Accessible from "./components/landing/Accessible";
import Values from "./components/landing/Values";
import ValueMission from "./components/landing/ValueMisson";
import WhyChooseUs from "./components/landing/WhyChooseUs";
import Services from "./components/landing/Services";
import Testimonials from "./components/landing/Testimonials";
import RequestAppointment from "./components/landing/RequestAppointment";

interface ServicesQueryResult {
  allService: Service[];
}

interface TestimonialsQueryResult {
  allTestimonial: Testimonial[];
}

export default async function Home() {
  const { data: testimonialData } =
    await getClient().query<TestimonialsQueryResult>({
      query: GET_TESTIMONIALS,
    });

  const { data: serviceData } = await getClient().query<ServicesQueryResult>({
    query: GET_SERVICES,
  });

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
      <Section bg={Section.Colors.Fifth} className="py-16">
        <ValueMission />
      </Section>
      <Section bg={Section.Colors.Light} className="!py-16">
        <Values />
      </Section>
      <WhyChooseUs />

      <Section bg={Section.Colors.Light} className="py-16">
        <Services services={services} />
      </Section>
      <Section bg={Section.Colors.Fourth}>
        <Testimonials hasShowMore={true} testimonials={testimonials} />
      </Section>
      <RequestAppointment />
    </main>
  );
}
