import Image from "next/image";
import { PortableText } from "next-sanity";
import { rubik_scribble } from "@/util/fonts";
import Section from "@/app/components/common/Section";
import Hero from "@/app/components/common/Hero";
import { GET_SPECIFIC_TEAM } from "@/graphql/queries";
import MobileHero from "../../../public/images/hero/joint-rehab-photo.jpg";
import DesktopHero from "../../../public/images/hero/joint-rehab-photo.jpg";
import { getClient } from "@/app/lib/apollo-client";
import { formatTeamAndServiceName } from "../../../util/formatTeamAndServiceName";

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

export async function generateMetadata({ params }: TeamProps) {
  const formattedTeamName = formatTeamAndServiceName(params.team);
  const capitalizedTeamName = formattedTeamName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Joint Rehab - ${capitalizedTeamName}`,
    description: `Meet the team. Get to know the people that make up our ${formattedTeamName} team.`,
  };
}

async function Team({ params }: TeamProps) {
  const { data: teamData } = await getClient().query({
    query: GET_SPECIFIC_TEAM,
    variables: { team: params.team },
  });

  // Create a shallow copy of teamData
  const teamInformation = [...(teamData?.allTeam || [])];

  // Sort team data according to the predefined order
  const order = teamOrder[params.team];
  if (order) {
    teamInformation.sort(
      (a, b) => order.indexOf(a.name) - order.indexOf(b.name)
    );
  }

  return (
    <>
      <Hero
        title={
          <>
            <span className={`${rubik_scribble.className}`}> Meet the</span>{" "}
            <strong>Team</strong>
          </>
        }
        description={`Get to know the people that make up our ${formatTeamAndServiceName(params.team)} team.`}
        desktopClassName="bg-contain"
        imageClassName="object-cover object-top"
        image={{
          mobile: MobileHero,
          desktop: DesktopHero,
        }}
      />

      <Section>
        <div>
          {teamInformation.map((member) => (
            <div
              key={member.name}
              className="bg-slate-800 flex flex-col md:flex-row pb-12 [&:not(:first-child)]:pt-12 [&:not(:last-child)]:border-b border-b-zinc-700"
            >
              <div className="relative flex justify-center md:justify-start w-64 h-64 md:w-48 md:h-48 mx-auto md:mx-0">
                <Image
                  src={member.image?.asset?.url ?? ""}
                  alt={`Headshot of ${member.name}` ?? "Member image"}
                  className="rounded-full border-2 border-third drop-shadow-md transform transition-all duration-300 hover:scale-105 overflow-hidden object-cover"
                  fill={true}
                />
              </div>
              <div className="pt-8 md:pt-0 flex-1 flex flex-col pl-0 md:pl-16">
                <h2 className="text-xl sm:text-2xl text-white font-bold mb-1 text-center sm:text-left">
                  {member.name}
                </h2>
                <h3 className=" mb-4 text-center sm:text-left">
                  {member.jobTitle}
                </h3>
                <PortableText
                  value={member.descriptionRaw}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="mb-4">{children}</p>
                      ),
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Team;
