"use client";

import Section from "@/app/components/common/Section";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { GET_SPECIFIC_TEAM } from "@/graphql/queries";
import { useQuery, useSuspenseQuery } from "@apollo/client";
import { PortableTextBlock } from "@portabletext/types";

// Define the types
interface TeamMember {
  name: string;
  jobTitle: string;
  image: {
    asset: {
      url: string;
    };
  };
  descriptionRaw: PortableTextBlock[];
}

interface QueryData {
  allTeam: TeamMember[];
}

interface TeamProps {
  params: {
    team: string;
  };
}

const teamOrder: { [key: string]: string[] } = {
  physiotherapist: [
    "William Hsieh",
    "Renuka Kulasingham",
    "Pha-Ly Ho",
    "Gayatri Hatwalne",
    "Lourdes Race",
  ],
  massageTherapist: [
    "Athina Kiatipi",
    "Cherry Park",
    "Connie Ng",
    "Sandy Wong",
    "Bessie Cheng",
  ],
  administration: [
    "Emilia Holmes",
    "Tracey Nader",
    "Shamitra Rajaratnma",
    "Annie Minassian",
    "Carmela Leone",
    "Diana Ng",
    "Fiza Rind",
    "Karen Maragh-Varley",
    "Linda Chung",
    "Tiffany Wong",
  ],
};

function Team({ params }: TeamProps) {
  const { data, error } = useSuspenseQuery<QueryData>(GET_SPECIFIC_TEAM, {
    variables: { team: params.team },
  });
  if (error) return <p>Error: {error.message}</p>;

  // Create a shallow copy of teamData
  const teamData = [...(data?.allTeam || [])];

  // Sort team data according to the predefined order
  const order = teamOrder[params.team];
  if (order) {
    teamData.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
  }

  return (
    <Section>
      <div>
        {teamData.map((member) => (
          <div
            key={member.name}
            className="flex flex-col md:flex-row pb-12 [&:not(:first-child)]:pt-12 [&:not(:last-child)]:border-b border-b-zinc-700"
          >
            <div className="relative flex justify-center w-64 h-64 md:w-48 md:h-48">
              <Image
                src={member.image?.asset?.url ?? ""}
                alt={`Headshot of ${member.name}` ?? "Member image"}
                className="rounded-full drop-shadow-md transform transition-all duration-300 hover:scale-105 overflow-hidden object-cover"
                fill={true}
              />
            </div>
            <div className="pt-8 md:pt-0 flex-1 flex flex-col pl-0 md:pl-16">
              <h2 className="text-xl sm:text-2xl text-primary font-bold mb-1 text-center sm:text-left">
                {member.name}
              </h2>
              <h3 className="text-gray-400 mb-4 text-center sm:text-left">
                {member.jobTitle}
              </h3>
              <PortableText
                value={member.descriptionRaw}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="mb-4 font-light text-gray-200">
                        {children}
                      </p>
                    ),
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Team;