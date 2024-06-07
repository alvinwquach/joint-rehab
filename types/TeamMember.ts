import { PortableTextBlock } from "sanity";

export interface TeamMember {
  name: string;
  jobTitle: string;
  image: {
    asset: {
      url: string;
    };
  };
  descriptionRaw: PortableTextBlock[];
}
