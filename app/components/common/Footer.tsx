import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
  FaFax,
  FaEnvelope,
} from "react-icons/fa";
import { CiFacebook, CiInstagram } from "react-icons/ci";

import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { href: "cancellation-policy", text: "Cancellation Policy" },
  { href: "privacy-policy", text: "Privacy Policy" },
  { href: "accessibility-policy", text: "Accessibility Policy" },
];

function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-y-5">
          <Image
            src="/images/logo-new.png"
            alt="Image of company logo with the words physiotherapy and massage therapy"
            width={350}
            height={100}
          />
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
        <div className="flex flex-col md:flex-row justify-between my-8 ">
          {/* Markham Plaza */}
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
                  <span>9275 Markham Road</span>
                  <br />
                  <span className="ml-6">Markham, ON, L6E1A1</span>
                  <br />
                  <span className="ml-6">Canada</span>
                </a>
              </div>

              <div className="flex items-center">
                <FaPhone className="mr-2 text-secondary" />
                <a
                  className="underline hover:no-underline"
                  href="tel:+19054713535"
                >
                  +1 (905)-471-3535
                </a>
              </div>
              <div className="flex items-center">
                <FaFax className="mr-2 text-secondary" />
                <a
                  className="underline hover:no-underline"
                  href="fax:+19054713835"
                >
                  +1 (905)-471-3835
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-secondary" />
                <a
                  className="underline text-lg italic hover:no-underline"
                  href="mailto:info@jointrehab.ca?subject=Request%20appointment"
                >
                  info@jointrehab.ca
                </a>
              </div>
            </address>
            <h2 className="text-xl font-roboto font-bold mt-4">
              Hours of Operation:
            </h2>
            <ul className="flex flex-col gap-1 font-roboto text-slate-200 mt-2">
              <li className="flex justify-between w-full py-1 border-b border-third">
                <span>Sunday</span>
                <span>8:00AM - 12:00PM</span>
              </li>
              <li className="flex justify-between w-full py-1 border-b border-third">
                <span>Monday</span>
                <span>9:00AM - 8:00PM</span>
              </li>
              <li className="flex justify-between w-full py-1 border-b border-third">
                <span>Tuesday</span>
                <span>10:00AM - 7:00PM</span>
              </li>
              <li className="flex justify-between w-full py-1 border-b border-third">
                <span>Wednesday</span>
                <span>9:30AM - 7:00PM</span>
              </li>
              <li className="flex justify-between w-full py-1 border-b border-third">
                <span>Thursday</span>
                <span>9:30AM - 8:00PM</span>
              </li>
              <li className="flex justify-between w-full py-1 border-b border-third">
                <span>Friday</span>
                <span>9:00AM - 5:00PM</span>
              </li>
              <li className="flex justify-between w-full py-1">
                <span>Saturday</span>
                <span>8:00AM - 2:00PM</span>
              </li>
            </ul>
          </div>
          {/* Ashgrove Medical Center */}
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
            <h3 className="text-xl font-bold mt-4">Ashgrove Medical Center</h3>
            <address className="font-roboto not-italic text-base text-slate-200 flex flex-col mt-4 gap-2">
              <div className="flex items-center">
                <a
                  className="underline hover:no-underline"
                  target="_blank"
                  href="https://www.google.com/maps?ll=43.893318,-79.263146&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=7975377517180615746"
                  aria-label="Open link to google maps location of Joint Rehab's Markham Plaza location"
                >
                  <FaMapMarkerAlt className="mr-2 inline-block text-secondary" />
                  <span>6633 Highway 7, Unit 013</span>
                  <br />
                  <span className="ml-6">Markham, ON, L3P 7P2</span>
                  <br />
                  <span className="ml-6">Canada</span>
                </a>
              </div>

              <div className="flex items-center">
                <FaPhone className="mr-2 text-secondary" />
                <a
                  className="underline hover:no-underline"
                  href="tel:+19054716707"
                >
                  +1 (905) 471-6707
                </a>
              </div>
              <div className="flex items-center">
                <FaFax className="mr-2 text-secondary" />
                <a
                  className="underline hover:no-underline"
                  href="fax:+19055548670"
                >
                  +1 (905) 554-8670
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-secondary" />
                <a
                  className="underline text-lg italic hover:no-underline"
                  href="mailto:info-ashgrove@jointrehab.ca?subject=Request%20appointment"
                >
                  info-ashgrove@jointrehab.ca
                </a>
              </div>
            </address>
            <h2 className="text-xl font-roboto font-bold mt-4">
              Hours of Operation:
            </h2>
            <ul className="flex flex-col gap-1 font-roboto text-slate-200 mt-2">
              <li className="flex justify-between w-full py-1 border-b border-third">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between w-full py-1 border-b border-third">
                <span>Monday</span>
                <span>9:30AM - 7:00PM</span>
              </li>
              <li className="flex justify-between w-full py-1 border-b border-third">
                <span>Tuesday</span>
                <span>8:30AM - 8:00PM</span>
              </li>
              <li className="flex justify-between w-full py-1 border-b border-third">
                <span>Wednesday</span>
                <span>9:00AM - 6:00PM</span>
              </li>
              <li className="flex justify-between w-full py-1 border-b border-third">
                <span>Thursday</span>
                <span>9:30AM - 8:00PM</span>
              </li>
              <li className="flex justify-between w-full py-1 border-b border-third">
                <span>Friday</span>
                <span>8:00AM - 6:00PM</span>
              </li>
              <li className="flex justify-between w-full py-1">
                <span>Saturday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-third my-8" />
        <div className="text-center mb-8">
          {companyLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="mr-4 text-white underline hover:no-underline"
              aria-label={`Open link to ${link.text}`}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Joint Rehab
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;





