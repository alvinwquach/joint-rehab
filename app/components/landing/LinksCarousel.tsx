"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
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

const LinksCarousel = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "free-snap",
      renderMode: "performance",
      drag: false,
      created: (slider) => {
        slider.moveToIdx(5, true);
      },
      slides: {
        perView: "auto",
        spacing: 15,
      },
    },
    [
      (slider) => {
        let timeout: NodeJS.Timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="keen-slider" ref={sliderRef}>
      {links.map((link, index) => (
        <div key={index} className="keen-slider__slide min-w-[200px]">
          <a
            href={link.link}
            className="block cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open link to ${link.title}`}
          >
            <Image
              src={link.image}
              alt={link.title}
              width={150}
              height={150}
              className="w-36 h-36 mx-auto mb-2 object-contain bg-white"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default LinksCarousel;
