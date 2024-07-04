import { getClient } from "./../app/lib/apollo-client";
import { AllServicesQuery, ServiceFragment } from "../src/gql/graphql";
import { NavbarItem } from "@/app/components/common/Navbar";
import { GET_SERVICES } from "@/graphql/queries";

export type Navigation = {
  id: number;
  name: string;
  href?: string;
  pathPrefix: string;
  dropdownOptions?: DropdownOption[];
}[];

type DropdownOption = {
  name: string;
  slug: string;
};

export function transformServices(
  servicesData: AllServicesQuery
): DropdownOption[] {
  // Extract the array of ServiceFragment objects from the servicesData.
  const allServices: ServiceFragment[] = servicesData?.allService;
  // Initialize an empty array to store DropdownOption objects.
  const servicesDropdownOptions: DropdownOption[] = allServices
    .map((service): DropdownOption | undefined => {
      // Check if the service's name is null or undefined; if true, return undefined.
      if (service.name === null || service.name === undefined) {
        return undefined;
      }
      // Check if the service's slug is null or undefined; if true, return undefined.
      if (
        service.slug?.current === null ||
        service.slug?.current === undefined
      ) {
        return undefined;
      }
      // Return a DropdownOption object with properties name and slug.
      return {
        name: service.name,
        slug: service.slug?.current,
      };
    })
    // Filter out any undefined elements from the array, keeping only valid DropdownOption objects.
    .filter(
      (maybeDropdownOption): maybeDropdownOption is DropdownOption =>
        maybeDropdownOption !== undefined
    );

  return servicesDropdownOptions;
}

const { data: servicesData } = await getClient().query({
  query: GET_SERVICES,
});

const servicesDropdownOptions = transformServices(servicesData);

export const navigation: NavbarItem[] = [
  { id: 1, name: "Home", href: "/", pathPrefix: "" },
  {
    id: 2,
    name: "Services",
    pathPrefix: "services",
    dropdownOptions: servicesDropdownOptions,
  },
  {
    id: 3,
    name: "Our Team",
    pathPrefix: "team",
    dropdownOptions: [
      { name: "Physiotherapist", slug: "physiotherapist" },
      { name: "Massage Therapist", slug: "massage-therapist" },
      { name: "Administration", slug: "administration" },
    ],
  },
  {
    id: 4,
    name: "Cancellation Policy",
    href: "/cancellation-policy",
    pathPrefix: "",
  },
  { id: 5, name: "Contact", href: "/contact", pathPrefix: "" },
  {
    id: 6,
    name: "Request Appointment",
    href: "request-appointment",
    pathPrefix: "",
  },
];
