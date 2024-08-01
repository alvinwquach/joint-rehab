import { Suspense } from "react";
import Section from "../components/common/Section";
import RequestAppointmentForm from "../components/request-appointment/RequestAppointmentForm";
import { getClient } from "../lib/apollo-client";
import { GET_SERVICE_NAMES } from "@/graphql/queries";

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
        <Suspense fallback={<p>Loading services...</p>}>
          <RequestAppointmentForm services={services} />
        </Suspense>
      </Section>
    </div>
  );
}
