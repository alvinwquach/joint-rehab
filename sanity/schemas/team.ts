export const team = {
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Please upload an image of your team member.",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Please provide the name of the team member.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "Please provide the job title of the team member.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "team",
      title: "Team",
      type: "string",
      description: "Please provide the team the team member belongs to.",
      options: {
        list: [
          { title: "Physiotherapist", value: "Physiotherapist" },
          { title: "Massage Therapist", value: "Massage Therapist" },
          { title: "Administration", value: "Administration" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Please provide a short description of the team member.",
      validation: (Rule: any) => [
        Rule.required(),
        Rule.max(1000).warning(
          "Short descriptions are usually better! 1000 characters maximum."
        ),
      ],
    },
  ],
};
