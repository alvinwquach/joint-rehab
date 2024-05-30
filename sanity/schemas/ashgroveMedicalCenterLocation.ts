export const ashgroveMedicalCenterLocation = {
  name: "ashgroveMedicalCenterLocation",
  title: "Location (Ashgrove Medical Center)",
  description: "Location",
  type: "document",
  fields: [
    {
      name: "address",
      title: "Address",
      type: "string",
      description:
        "Please provide the address of your location. (i.e. 6633, 013 York Regional Rd 7)",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "addresslinen",
      title: "Address Line N",
      type: "string",
      description:
        "Please provide the city, state, zip code, and country of your location. (i.e. Markham, ON, L3P 7P2)",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      description:
        "Please provide the phone number for the Ashgrove Medical Center location.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "fax",
      title: "Fax",
      type: "string",
      description:
        "Please provide the fax for the Ashgrove Medical Center location.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      description:
        "Please provide the email address for the Ashgrove Medical Center .",
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Sunday",
      name: "sunday",
      type: "string",
      description: "Please provide the hours for Sunday.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Monday",
      name: "monday",
      type: "string",
      description: "Please provide the hours for Monday.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Tuesday",
      name: "tuesday",
      type: "string",
      description: "Please provide the hours for Tuesday.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Wednesday",
      name: "wednesday",
      type: "string",
      description: "Please provide the hours for Wednesday.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Thursday",
      name: "thursday",
      type: "string",
      description: "Please provide the hours for Thursday.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Friday",
      name: "friday",
      type: "string",
      description: "Please provide the hours for Friday.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Saturday",
      name: "saturday",
      type: "string",
      description: "Please provide the hours for Saturday.",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
