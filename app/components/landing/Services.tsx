import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceFragment } from "@/src/gql/graphql";

interface ServiceCardProps {
  service: ServiceFragment;
}

function ServiceCard({ service }: ServiceCardProps) {
  const serviceUrl = `/services/${encodeURIComponent(service?.slug?.current?.toLocaleLowerCase() ?? "")}`;

  return (
    <div className="p-4">
      <div className="relative w-full h-64">
        <Link href={serviceUrl}>
          <Image
            src={service.image?.asset?.url || ""}
            alt={service?.name ?? ""}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
            }}
            quality={100}
          />
        </Link>
      </div>
      <h3 className="mt-2 text-xl font-bold text-black">{service.name}</h3>
    </div>
  );
}

interface ServicesProps {
  services: ServiceFragment[];
}

const Services = ({ services }: ServicesProps) => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex pb-12 flex-col items-center justify-center">
        <h3 className="text-3xl sm:text-5xl font-roboto font-bold text-center  text-blue-500 font-title">
          Our Services
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-md sm:text-xl font-roboto sm:mt-4 text-center text-black">
          Check out what we have in store!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
