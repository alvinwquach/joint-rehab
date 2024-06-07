import { PortableText } from "next-sanity";
import Image from "next/image";
import Section from "@/app/components/common/Section";
import { GET_SPECIFIC_SERVICE } from "@/graphql/queries";
import { getClient } from "@/app/lib/apollo-client";
import { formatTeamAndServiceName } from "@/util/formatTeamAndServiceName";

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
    <Section>
      <div className="flex flex-col md:flex-row pb-12 md:pb-0">
        <div className="w-full flex justify-center">
          <div className="w-2/3 ">
            <Image
              src={service.image.asset.url}
              alt={`Image of ${service.name}`}
              className="object-cover rounded-lg drop-shadow-md transform transition-all duration-300 "
              width={1200}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center ">
        <h2 className="text-3xl sm:text-4xl text-primary font-bold my-4">
          {service.name}
        </h2>
      </div>
      <PortableText
        value={service.descriptionRaw}
        components={{
          block: {
            normal: ({ children }) => (
              <p className="mb-4 font-light text-gray-200">{children}</p>
            ),
          },
        }}
      />
    </Section>
  );
}

export default Service;
