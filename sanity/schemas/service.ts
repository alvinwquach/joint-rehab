export const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Please upload an image of your service.",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Please provide the name of this service.",
    },
    {
      name: "slug",
      title: "Unique URL",
      type: "slug",
      description:
        "Your unique url will be created from the name field above. Please click on the generate button.",
      options: {
        source: "name",
        maxLength: 90,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      description: "Please provide a short description of your service.",
      validation: (Rule: any) => [
        Rule.required(),
        Rule.max(1000).warning(
          "Short descriptions are usually better! 1000 characters maximum."
        ),
      ],
    },
  ],
};
