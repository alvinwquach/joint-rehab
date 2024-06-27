export const navigation = [
  { id: 1, name: "Home", href: "/", pathPrefix: "" },
  {
    id: 2,
    name: "Services",
    href: "#",
    pathPrefix: "services",
    dropdownOptions: [
      { name: "Physiotherapy", href: "physiotherapy" },
      { name: "Sports Therapy", href: "sports-therapy" },
      { name: "Massage Therapy", href: "massage-therapy" },
      { name: "Acupuncture", href: "acupuncture" },
      { name: "Orthotics", href: "orthotics" },
      { name: "Oncology Rehab", href: "oncology-rehab" },
    ],
  },
  {
    id: 3,
    name: "Our Team",
    href: "#",
    pathPrefix: "team",
    dropdownOptions: [
      { name: "Physiotherapist", href: "physiotherapist" },
      { name: "Massage Therapist", href: "massage-therapist" },
      { name: "Administration", href: "administration" },
    ],
  },
  { id: 4, name: "Contact", href: "/contact", pathPrefix: "" },
  {
    id: 5,
    name: "Request Appointment",
    href: "request-appointment",
    pathPrefix: "",
  },
];
