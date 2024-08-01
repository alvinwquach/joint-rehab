import { GET_SERVICE_NAMES } from "@/graphql/queries";
import { Service } from "@/types/Service";
import { Suspense } from "react";
import Section from "../components/common/Section";
import RequestAppointmentForm from "../components/request-appointment/RequestAppointmentForm";
import { getClient } from "../lib/apollo-client";

export const metadata = {
  title: "Joint Rehab - Request Appointment",
  openGraph: {
    title: "Joint Rehab - Request Appointment",
  },
};

interface ServicesQueryResult {
  allService: Service[];
}

export default async function RequestAppointment() {
  const { data: serviceData } = await getClient().query<ServicesQueryResult>({
    query: GET_SERVICE_NAMES,
  });

  const services = serviceData?.allService ?? [];

  return (
    <div>
      <Section>
        <Suspense fallback={<RequestAppointmentForm services={[]} />}>
          <RequestAppointmentForm services={services} />
        </Suspense>
      </Section>
    </div>
  );
}
