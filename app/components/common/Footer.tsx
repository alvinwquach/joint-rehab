"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone, FaFax } from "react-icons/fa";
import { RxEnvelopeClosed, RxEnvelopeOpen } from "react-icons/rx";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { Location } from "@/types/Location";

const companyLinks = [
  { href: "accessibility-policy", text: "Accessibility Policy" },
  { href: "privacy-policy", text: "Privacy Policy" },
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
    <footer className="bg-current bg-fourth  text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Markham Plaza Location */}
          {markhamLocation && (
            <div>
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11500.805662623996!2d-79.262915!3d43.893095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6eae3b98b52ffc42!2sJoint+Rehab+-+Physiotherapy+Markham+-+Massage+Therapy+Markham!5e0!3m2!1sen!2sca!4v1436375584279"
                  width="100%"
                  height="250"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Markham Plaza Location"
                />
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mt-4">Markham Plaza</h3>
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="mr-2 inline-block text-white" />
                  <a
                    className="underline hover:no-underline"
                    target="_blank"
                    href="https://www.google.com/maps?ll=43.893318,-79.263146&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=7975377517180615746"
                    aria-label="Open link to google maps location of Joint Rehab's Markham Plaza location"
                  >
                    {markhamLocation.address}
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <FaPhone className="mr-2 text-white" />
                  <a
                    className="underline hover:no-underline"
                    href={`tel:${markhamLocation.phone}`}
                  >
                    {markhamLocation.phone}
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <FaFax className="mr-2 text-white" />
                  <a
                    className="underline hover:no-underline"
                    href={`fax:${markhamLocation.fax}`}
                  >
                    {markhamLocation.fax}
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  {isEnvelopeIconClosed ? (
                    <RxEnvelopeOpen className="mr-2 block h-4 w-4 text-white" />
                  ) : (
                    <RxEnvelopeClosed className="mr-2 block h-4 w-4 text-white" />
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
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Hours</h2>
                <ul className="flex flex-col gap-2 font-roboto text-white">
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>{markhamLocation.sunday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Monday</span>
                    <span>{markhamLocation.monday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tuesday</span>
                    <span>{markhamLocation.tuesday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Wednesday</span>
                    <span>{markhamLocation.wednesday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Thursday</span>
                    <span>{markhamLocation.thursday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday</span>
                    <span>{markhamLocation.friday}</span>
                  </li>
                  <li className="flex justify-between w-full">
                    <span>Saturday</span>
                    <span>{markhamLocation.saturday}</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Ashgrove Medical Center Location */}
          {ashgroveLocation && (
            <div>
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.9007471467576!2d-79.23895568449497!3d43.878607979114186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d7cf096ca43b%3A0x7838c5ced3771b86!2sJoint%20Rehab%20-%20Ashgrove%20Site%20-%20Markham%20Physiotherapy%20Center!5e0!3m2!1sen!2sca!4v1436375584279"
                  width="100%"
                  height="250"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Ashgrove Medical Center Location"
                />
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mt-4">
                  Ashgrove Medical Center
                </h3>
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="mr-2 inline-block text-white" />
                  <a
                    className="underline hover:no-underline"
                    target="_blank"
                    href="https://www.google.com/maps?ll=43.893318,-79.263146&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=7975377517180615746"
                    aria-label="Open link to google maps location of Joint Rehab's Ashgrove Medical Center location"
                  >
                    {ashgroveLocation.address}
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <FaPhone className="mr-2 text-white" />
                  <a
                    className="underline hover:no-underline"
                    href={`tel:${ashgroveLocation.phone}`}
                  >
                    {ashgroveLocation.phone}
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <FaFax className="mr-2 text-white" />
                  <a
                    className="underline hover:no-underline"
                    href={`fax:${ashgroveLocation.fax}`}
                  >
                    {ashgroveLocation.fax}
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  {isEnvelopeIconClosed ? (
                    <RxEnvelopeOpen className="mr-2 block h-4 w-4 text-white" />
                  ) : (
                    <RxEnvelopeClosed className="mr-2 block h-4 w-4 text-white" />
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
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Hours</h2>
                <ul className="flex flex-col gap-2 font-roboto text-white">
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>{ashgroveLocation.sunday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Monday</span>
                    <span>{ashgroveLocation.monday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tuesday</span>
                    <span>{ashgroveLocation.tuesday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Wednesday</span>
                    <span>{ashgroveLocation.wednesday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Thursday</span>
                    <span>{ashgroveLocation.thursday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday</span>
                    <span>{ashgroveLocation.friday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>{ashgroveLocation.saturday}</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        {/* Company Links */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-wrap justify-between items-center">
            <ul className="flex space-x-6 mb-4 md:mb-0">
              {companyLinks.map((link) => (
                <li key={link.href} className="hover:underline">
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://www.facebook.com/jointrehab"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <CiFacebook size={24} className="hover:scale-110" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/jointrehab"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <CiInstagram size={24} className="hover:scale-110" />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center text-base text-white mt-4">
            &copy; {new Date().getFullYear()} Joint Rehab. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
