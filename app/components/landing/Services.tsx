import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceFragment } from "@/src/gql/graphql";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";

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
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Link>
      </div>
      <h3 className="mt-2 text-xl font-bold">{service.name}</h3>
    </div>
  );
}

interface ServicesProps {
  services: ServiceFragment[];
}

const Services = ({ services }: ServicesProps) => {
  return (
    <>
      <div className="flex pb-12 flex-col items-center justify-center">
        <h3 className="text-3xl sm:text-5xl font-roboto font-bold text-center text-blue-550 dark:text-white font-title">
          Our Services
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-md sm:text-xl font-roboto sm:mt-4 text-center dark:text-green-350">
          Check out what we have in store!
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="w-full"
        grabCursor={true}
        slidesPerView={2}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        navigation
        keyboard={{ enabled: true, onlyInViewport: false }}
        lazy={true}
        loop
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Services;
