import Link from "next/link";
import { PortableText } from "next-sanity";
import Section from "@/app/components/common/Section";
import Hero from "@/app/components/common/Hero";
import { formatTeamAndServiceName } from "@/util/formatTeamAndServiceName";
import { rubik_scribble } from "@/util/fonts";
import { getClient } from "@/app/lib/apollo-client";
import { GET_SPECIFIC_SERVICE } from "@/graphql/queries";

interface ServiceProps {
  params: {
    service: string;
  };
}

export async function generateMetadata({ params }: ServiceProps) {
  const formattedServiceName = formatTeamAndServiceName(params.service);
  const capitalizedServiceName = formattedServiceName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Joint Rehab - ${capitalizedServiceName}`,
    description: `${formattedServiceName} is just one of many services offered at Joint Rehab located in both Markham Plaza and Ashtown Medical Center.`,
  };
}

async function Service({ params }: ServiceProps) {
  const { data: serviceData, error } = await getClient().query({
    query: GET_SPECIFIC_SERVICE,
    variables: { slug: params.service },
  });

  if (error) return <p>Error: {error.message}</p>;
  const service = serviceData?.allService[0];

  if (!service) return <p>Service not found</p>;

  return (
    <>
      <Hero
        title={
          <>
            <span className={`${rubik_scribble.className}`}>
              {service.name}
            </span>{" "}
          </>
        }
        description={`This is just one of many services that we provide. Let us help.`}
        desktopClassName="bg-contain"
        imageClassName="object-cover object-top"
        image={{
          mobile: service.image.asset.url,
          desktop: service.image.asset.url,
        }}
      />
      <Section>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-4">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {service.name}
            </h1>

            <Link
              href={{
                pathname: "/request-appointment",
                query: { service: service.name },
              }}
              className="mt-4 md:mt-0 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-all duration-300"
            >
              Request Appointment
            </Link>
          </div>
          <PortableText
            value={service.descriptionRaw}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="mb-4 text-lg sm:text-xl text-gray-200 font-light">
                    {children}
                  </p>
                ),
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}

export default Service;
