import Image from "next/image";
import Section from "../components/common/Section";
import collegeOfPhysiotherapists from "../.././public/images/links/collegeOfPhysiotherapistsOfOntario.jpeg";
import canadianPhysiotherapyAssocation from "../.././public/images/links/canadianPhysiotherapyAssocation.png";
import ontarioPhysiotherapyAssocation from "../.././public/images/links/ontarioPhysiotherapyAssociation.jpeg";
import collegeOfMassageTherapists from "../.././public/images/links/collegeofMassageTherapistsOfOntario.png";
import registeredMassageTherapistsAssociation from "../.././public/images/links/registeredMassageTherapistsAssociationOfOntario .png";
import canadianMassageTherapyResearchNetwork from "../.././public/images/links/canadianMassageTherapyResearchNetwork.jpeg";
import acupunctureFoundationOfCanadaInstitute from "../.././public/images/links/acupunctureFoundationOfCanadaInstitute.png";
import ministryOfHealth from "../.././public/images/links/ministryOfHealthCanada.png";
import publicHealthOntario from "../.././public/images/links/publicHealthOntario.webp";
import wsib from "../.././public/images/links/wsib.svg";
import healthClaimsForAutoInsuranceResource from "../.././public/images/links/healthClaimsAutoInsurance.jpeg";
import insuranceBureauxOfCanada from "../.././public/images/links/insuranceBureauOfCanada.jpg";
import oakValleyHealth from "../.././public/images/links/oakValleyHealth.png";
import worldHealthOrganization from "../.././public/images/links/worldHealthOrganization.png";
import cancerCareOntario from "../.././public/images/links/cancerCareOntario.png";

const links = [
  {
    title: "College of Physiotherapists of Ontario",
    image: collegeOfPhysiotherapists,
    link: "https://www.collegept.org/",
  },
  {
    title: "Canadian Physiotherapy Association",
    image: canadianPhysiotherapyAssocation,
    link: "https://physiotherapy.ca/",
  },
  {
    title: "Ontario Physiotherapy Association",
    image: ontarioPhysiotherapyAssocation,
    link: "https://opa.on.ca/",
  },
  {
    title: "College of Massage Therapists of Ontario",
    image: collegeOfMassageTherapists,
    link: "https://www.cmto.com/",
  },
  {
    title: "Registered Massage Therapist's Association of Ontario",
    image: registeredMassageTherapistsAssociation,
    link: "https://www.rmtao.com/",
  },
  {
    title: "Canadian Massage Therapy Research Network",
    image: canadianMassageTherapyResearchNetwork,
    link: "https://www.cmtrn.ca/",
  },
  {
    title: "Acupuncture Foundation of Canada Institute",
    image: acupunctureFoundationOfCanadaInstitute,
    link: "https://www.afcinstitute.com/",
  },
  {
    title: "Ministry of Health",
    image: ministryOfHealth,
    link: "https://www.health.gov.on.ca/",
  },
  {
    title: "Public Health Ontario",
    image: publicHealthOntario,
    link: "https://www.publichealthontario.ca/",
  },
  {
    title: "WSIB",
    image: wsib,
    link: "https://www.wsib.ca/",
  },
  {
    title: "Health Claims for Auto Insurance Resource",
    image: healthClaimsForAutoInsuranceResource,
    link: "https://hcair.ca/",
  },
  {
    title: "Insurance Bureaux of Canada",
    image: insuranceBureauxOfCanada,
    link: "https://www.ibc.ca/",
  },
  {
    title: "Markham Stouffville Hospital",
    image: oakValleyHealth,
    link: "https://www.msh.on.ca/",
  },
  {
    title: "World Health Organization",
    image: worldHealthOrganization,
    link: "https://www.who.int/",
  },
  {
    title: "Cancer Care Ontario",
    image: cancerCareOntario,
    link: "https://www.cancercareontario.ca/",
  },
];

function Links() {
  return (
    <Section>
      <div className="grid grid-cols-3 gap-4">
        {links.map((link, index) => (
          <div key={index} className="text-center relative">
            <a
              href={link.link}
              className="cursor-pointer block"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open link to ${link.title}`}
            >
              <Image
                src={link.image}
                alt={link.title}
                width={150}
                height={150}
                className="w-48 h-48 mx-auto mb-2"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white rounded">
                Visit Website
              </div>
            </a>
            <div>{link.title}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Links;
