"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import collegeOfPhysiotherapists from "../../../public/images/links/collegeOfPhysiotherapistsOfOntario.jpeg";
import canadianPhysiotherapyAssocation from "../../../public/images/links/canadianPhysiotherapyAssocation.png";
import ontarioPhysiotherapyAssocation from "../../../public/images/links/ontarioPhysiotherapyAssociation.jpeg";
import collegeOfMassageTherapists from "../../../public/images/links/collegeofMassageTherapistsOfOntario.png";
import registeredMassageTherapistsAssociation from "../../../public/images/links/registeredMassageTherapistsAssociationOfOntario .png";
import canadianMassageTherapyResearchNetwork from "../../../public/images/links/canadianMassageTherapyResearchNetwork.jpeg";
import acupunctureFoundationOfCanadaInstitute from "../../../public/images/links/acupunctureFoundationOfCanadaInstitute.png";
import ministryOfHealth from "../../../public/images/links/ministryOfHealthCanada.png";
import publicHealthOntario from "../../../public/images/links/publicHealthOntario.webp";
import wsib from "../../../public/images/links/wsib.svg";
import healthClaimsForAutoInsuranceResource from "../../../public/images/links/healthClaimsAutoInsurance.jpeg";
import insuranceBureauxOfCanada from "../../../public/images/links/insuranceBureauOfCanada.jpg";
import oakValleyHealth from "../../../public/images/links/oakValleyHealth.png";
import worldHealthOrganization from "../../../public/images/links/worldHealthOrganization.png";
import cancerCareOntario from "../../../public/images/links/cancerCareOntario.png";

gsap.registerPlugin(ScrollTrigger);

interface Link {
  title: string;
  image: StaticImageData;
  link: string;
}

const links: Link[] = [
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

function LinksCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Calculate total scroll width
    const totalWidth = scroller.scrollWidth;

    // Create GSAP animation for continuous scrolling effect
    gsap.to(scroller, {
      x: `-${totalWidth}`,
      ease: "none",
      duration: 50, // Duration of one scroll cycle
      repeat: -1, // Repeat indefinitely
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf(scroller);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div ref={scrollerRef} className="flex flex-nowrap whitespace-nowrap">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${link.title}`}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              <div className="relative w-36 h-36 bg-white transition-all duration-300 overflow-hidden hover:shadow-2xl">
                <Image
                  src={link.image}
                  alt={link.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinksCarousel;
