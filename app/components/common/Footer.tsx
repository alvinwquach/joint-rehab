"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone, FaFax } from "react-icons/fa";
import { RxEnvelopeClosed, RxEnvelopeOpen } from "react-icons/rx";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { Location } from "@/types/Location";

const companyLinks = [
  { href: "cancellation-policy", text: "Cancellation Policy" },
  { href: "privacy-policy", text: "Privacy Policy" },
  { href: "accessibility-policy", text: "Accessibility Policy" },
];

interface FooterProps {
  markhamPlazaLocation?: { allMarkhamPlazaLocation: Location[] };
  ashgroveMedicalCenterLocation?: {
    allAshgroveMedicalCenterLocation: Location[];
  };
}

function Footer({
  markhamPlazaLocation,
  ashgroveMedicalCenterLocation,
}: FooterProps) {
  const markhamLocation = markhamPlazaLocation?.allMarkhamPlazaLocation[0];
  const ashgroveLocation =
    ashgroveMedicalCenterLocation?.allAshgroveMedicalCenterLocation[0];

  const [isEnvelopeIconClosed, setIsEnvelopeIconClosed] = useState(false);

  const handleMouseToggle = () => {
    setIsEnvelopeIconClosed((prev) => !prev);
  };

  return (
    <footer className="bg-gray-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between my-8 ">
          {/* Markham Plaza */}
          {markhamLocation && (
            <div className="flex flex-col md:w-1/2 md:pr-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11500.805662623996!2d-79.262915!3d43.893095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6eae3b98b52ffc42!2sJoint+Rehab+-+Physiotherapy+Markham+-+Massage+Therapy+Markham!5e0!3m2!1sen!2sca!4v1436375584279"
                width="100%"
                height="250"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Markham Plaza Location"
              ></iframe>
              <h3 className="text-xl font-bold mt-4">Markham Plaza</h3>
              <address className="font-roboto not-italic text-base text-slate-200 flex flex-col mt-4 gap-2">
                <div className="flex items-center">
                  <a
                    className="underline hover:no-underline"
                    target="_blank"
                    href="https://www.google.com/maps?ll=43.893318,-79.263146&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=7975377517180615746"
                    aria-label="Open link to google maps location of Joint Rehab's Markham Plaza location"
                  >
                    <FaMapMarkerAlt className="mr-2 inline-block text-secondary" />
                    <span>{markhamLocation.address}</span>
                    <br />
                    <span className="ml-6">
                      {markhamLocation.addresslinen
                        .split(", ")
                        .slice(0, -1)
                        .join(", ")}
                    </span>{" "}
                    <br />
                    <span className="ml-6">
                      {markhamLocation.addresslinen.split(", ").pop()}
                    </span>
                  </a>
                </div>

                <div className="flex items-center">
                  <FaPhone className="mr-2 text-secondary" />
                  <a
                    className="underline hover:no-underline"
                    href={`tel:${markhamLocation.phone}`}
                  >
                    {markhamLocation.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <FaFax className="mr-2 text-secondary" />
                  <a
                    className="underline hover:no-underline"
                    href={`fax:${markhamLocation.fax}`}
                  >
                    {markhamLocation.fax}
                  </a>
                </div>
                <div className="flex items-center">
                  {isEnvelopeIconClosed ? (
                    <RxEnvelopeOpen className="mr-2 block h-4 w-4 text-secondary" />
                  ) : (
                    <RxEnvelopeClosed className="mr-2 block h-4 w-4 text-secondary" />
                  )}
                  <a
                    className="underline text-lg italic hover:no-underline"
                    href={`mailto:${markhamLocation.email}?subject=Contact`}
                    onMouseEnter={handleMouseToggle}
                    onMouseLeave={handleMouseToggle}
                  >
                    {markhamLocation.email}
                  </a>
                </div>
              </address>
              {/* Markham Plaza Hours */}
              <h2 className="text-xl font-roboto font-bold mt-4">
                Hours of Operation:
              </h2>
              <ul className="flex flex-col gap-1 font-roboto text-slate-200 mt-2">
                <li className="flex justify-between w-full py-1 border-b border-third">
                  <span>Sunday</span>
                  <span>{markhamLocation.sunday}</span>
                </li>
                <li className="flex justify-between w-full py-1 border-b border-third">
                  <span>Monday</span>
                  <span>{markhamLocation.monday}</span>
                </li>
                <li className="flex justify-between w-full py-1 border-b border-third">
                  <span>Tuesday</span>
                  <span>{markhamLocation.tuesday}</span>
                </li>
                <li className="flex justify-between w-full py-1 border-b border-third">
                  <span>Wednesday</span>
                  <span>{markhamLocation.wednesday}</span>
                </li>
                <li className="flex justify-between w-full py-1 border-b border-third">
                  <span>Thursday</span>
                  <span>{markhamLocation.thursday}</span>
                </li>
                <li className="flex justify-between w-full py-1 border-b border-third">
                  <span>Friday</span>
                  <span>{markhamLocation.friday}</span>
                </li>
                <li className="flex justify-between w-full py-1">
                  <span>Saturday</span>
                  <span>{markhamLocation.saturday}</span>
                </li>
              </ul>
            </div>
          )}
          {/* Ashgrove Medical Center */}
          {ashgroveLocation && (
            <div className="flex flex-col md:w-1/2 md:pl-8 mt-8 md:mt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.9007471467576!2d-79.23895568449497!3d43.878607979114186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d7cf096ca43b%3A0x7838c5ced3771b86!2sJoint%20Rehab%20-%20Ashgrove%20Site%20-%20Markham%20Physiotherapy%20Center!5e0!3m2!1sen!2sca!4v1598383229601!5m2!1sen!2sca"
                width="100%"
                height="250"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Ashgrove Medical Center Location"
              ></iframe>
              <h3 className="text-xl font-bold mt-4">
                Ashgrove Medical Center
              </h3>
              <address className="font-roboto not-italic text-base text-slate-200 flex flex-col mt-4 gap-2">
                <div className="flex items-center">
                  <a
                    className="underline hover:no-underline"
                    target="_blank"
                    href="https://www.google.com/maps?ll=43.893318,-79.263146&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=7975377517180615746"
                    aria-label="Open link to google maps location of Joint Rehab's Ashgrove Medical Center location"
                  >
                    <FaMapMarkerAlt className="mr-2 inline-block text-secondary" />
                    <span>{ashgroveLocation.address}</span>
                    <br />
                    <span className="ml-6">
                      {ashgroveLocation.addresslinen
                        .split(", ")
                        .slice(0, -1)
                        .join(", ")}
                    </span>{" "}
                    <br />
                    <span className="ml-6">
                      {ashgroveLocation.addresslinen.split(", ").pop()}
                    </span>
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-2 text-secondary" />
                  <a
                    className="underline hover:no-underline"
                    href={`tel:${ashgroveLocation.phone}`}
                  >
                    {ashgroveLocation.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <FaFax className="mr-2 text-secondary" />
                  <a
                    className="underline hover:no-underline"
                    href={`fax:${ashgroveLocation.fax}`}
                  >
                    {ashgroveLocation.fax}
                  </a>
                </div>
                <div className="flex items-center">
                  {isEnvelopeIconClosed ? (
                    <RxEnvelopeOpen className="mr-2 block h-4 w-4 text-secondary" />
                  ) : (
                    <RxEnvelopeClosed className="mr-2 block h-4 w-4 text-secondary" />
                  )}
                  <a
                    className="underline text-lg italic hover:no-underline"
                    href={`mailto:${ashgroveLocation.email}?subject=Contact`}
                    onMouseEnter={handleMouseToggle}
                    onMouseLeave={handleMouseToggle}
                  >
                    {ashgroveLocation.email}
                  </a>
                </div>
              </address>
              {/* Ashgrove Medical Center Hours */}
              <h2 className="text-xl font-roboto font-bold mt-4">
                Hours of Operation:
              </h2>
              <ul className="flex flex-col gap-1 font-roboto text-slate-200 mt-2">
                <li className="flex justify-between w-full py-1 border-b border-third">
                  <span>Sunday</span>
                  <span>{ashgroveLocation.sunday}</span>
                </li>
                <li className="flex justify-between w-full py-1 border-b border-third">
                  <span>Monday</span>
                  <span>{ashgroveLocation.monday}</span>
                </li>
                <li className="flex justify-between w-full py-1 border-b border-third">
                  <span>Tuesday</span>
                  <span>{ashgroveLocation.tuesday}</span>
                </li>
                <li className="flex justify-between w-full py-1 border-b border-third">
                  <span>Wednesday</span>
                  <span>{ashgroveLocation.wednesday}</span>
                </li>
                <li className="flex justify-between w-full py-1 border-b border-third">
                  <span>Thursday</span>
                  <span>{ashgroveLocation.thursday}</span>
                </li>
                <li className="flex justify-between w-full py-1 border-b border-third">
                  <span>Friday</span>
                  <span>{ashgroveLocation.friday}</span>
                </li>
                <li className="flex justify-between w-full py-1">
                  <span>Saturday</span>
                  <span>{ashgroveLocation.saturday}</span>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {companyLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className="underline hover:no-underline"
              aria-label={`Open link to ${link.text}`}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex justify-end gap-y-5">
          <div className="flex gap-x-4">
            <a
              href="https://www.facebook.com/people/Joint-Rehab/100054544805277/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open link to Joint Rehab Facebook"
            >
              <CiFacebook className="text-4xl hover:text-secondary" />
            </a>
            <a
              href="https://www.instagram.com/jointrehab/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open link to Joint Rehab Instagram"
            >
              <CiInstagram className="text-4xl hover:text-secondary" />
            </a>
          </div>
        </div>
        <p className="text-center mt-4">
          © {new Date().getFullYear()} Joint Rehab
        </p>
      </div>
    </footer>
  );
}

export default Footer;
