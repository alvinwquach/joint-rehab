import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const companyLinks = [
    { href: "privacy-policy", text: "Privacy Policy" },
    { href: "accessibility-policy", text: "Accessibility Policy" },
    { href: "cancellation-policy", text: "Cancellation Policy" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 ">
        <div>
          {/* Markham Plaza */}
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:w-1/2 md:pr-8">
              <h3 className="text-xl font-bold mb-4">Markham Plaza</h3>
              <address className="font-roboto not-italic text-base text-slate-200 flex flex-col justify-center mb-4 mt-4 w-full gap-2">
                <a
                  className="flex flex-col underline hover:no-underline"
                  target="_blank"
                  href="https://www.google.com/maps?ll=43.893318,-79.263146&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=7975377517180615746"
                  aria-label="Open link to google maps location of Joint Rehab's Markham Plaza location"
                >
                  <span>9275 Markham Road</span>
                  <span>Markham, ON, L6E1A1, Canada</span>
                </a>
                <p>
                  Phone: {""}
                  <a
                    className="underline hover:no-underline"
                    href="tel: +1 (905)-471-3535"
                  >
                    +1 (905)-471-3535
                  </a>
                </p>
                <p>
                  Fax: {""}
                  <a
                    className="underline  hover:no-underline"
                    href="fax: +1 (905) 471-3835"
                  >
                    +1 (905)-471-3835
                  </a>
                </p>
                <p>
                  E-Mail: {""}
                  <a
                    className="underline text-lg italic  hover:no-underline"
                    href="mailto:info@jointrehab.ca?subject=Request%20appointment"
                  >
                    info@jointrehab.ca
                  </a>
                </p>
              </address>
            </div>
            <div className="mb-6 md:w-1/2">
              <div className="footer:flex flex-col text-left">
                <h2 className="mb-4 text-xl font-roboto font-bold capitalize text-left">
                  Store Hours
                </h2>
                <ul className="flex flex-col gap-1 font-roboto text-slate-200 text-left">
                  <li>Sunday: 8:00am - 12:00pm</li>
                  <li>Monday: 9:00am - 8:00pm</li>
                  <li>Tuesday: 10:00am - 7:00pm</li>
                  <li>Wednesday: 9:30am - 7:00pm</li>
                  <li>Thursday: 9:30am - 8:00pm</li>
                  <li>Friday: 9:00am - 5:00pm</li>
                  <li>Saturday: 8:00am - 2:00pm</li>
                </ul>
              </div>
            </div>
            {/* Markham Plaza Map Iframe */}
            <div className="mb-6 md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11500.805662623996!2d-79.262915!3d43.893095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6eae3b98b52ffc42!2sJoint+Rehab+-+Physiotherapy+Markham+-+Massage+Therapy+Markham!5e0!3m2!1sen!2sca!4v1436375584279"
                width="100%"
                height="250"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Markham Plaza Location"
              ></iframe>
            </div>
          </div>
          {/* Ashgrove Medical Center */}
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:w-1/2 md:pr-8">
              <h3 className="text-xl font-bold mb-4">
                Ashgrove Medical Center
              </h3>
              <address className="font-roboto not-italic text-base text-slate-200 flex flex-col justify-center mb-4 mt-4 w-full gap-2">
                <a
                  className="flex flex-col underline hover:no-underline"
                  target={"_blank"}
                  href="https://www.google.com/maps?ll=43.893318,-79.263146&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=7975377517180615746"
                  aria-label="Open link to google maps location of Joint Rehab's Ashgrove Medical Center location"
                >
                  <span>6633, 013 York Regional Rd 7</span>
                  <span> Markham, ON, L3P 7P2, Canada</span>
                </a>
                <p>
                  Phone: {""}
                  <a
                    className="underline hover:text-green-350 hover:no-underline"
                    href="tel: +1 (905)-471-6707"
                  >
                    +1 (905) 471-6707
                  </a>
                </p>
                <p>
                  Fax: {""}
                  <a
                    className="underline hover:no-underline"
                    href="fax: +1 (905) 554-8670"
                  >
                    +1 (905) 554-8670
                  </a>
                </p>
                <p>
                  E-Mail: {""}
                  <a
                    className="underline text-lg italic  hover:no-underline"
                    href="mailto:info-ashgrove@jointrehab.ca?subject=Request%20appointment"
                  >
                    info-ashgrove@jointrehab.ca
                  </a>
                </p>
              </address>
            </div>
            <div className="mb-6 md:w-1/2">
              <div className="footer:flex flex-col text-left">
                <h2 className="mb-4 text-xl font-roboto font-bold capitalize text-left">
                  Store Hours
                </h2>
                <ul className="flex flex-col gap-1 font-roboto text-slate-200 text-left">
                  <li>Sunday: Closed</li>
                  <li>Monday: 9:30am - 7:00pm</li>
                  <li>Tuesday: 8:30am - 8:00pm</li>
                  <li>Wednesday: 9:00am - 6:00pm</li>
                  <li>Thursday: 9:30am - 8:00pm</li>
                  <li>Friday: 8:00am - 6:00pm</li>
                  <li>Saturday: Closed</li>
                </ul>
              </div>
            </div>
            {/* Ashgrove Medical Center Map Iframe */}
            <div className="mb-6 md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.9007471467576!2d-79.23895568449497!3d43.878607979114186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d7cf096ca43b%3A0x7838c5ced3771b86!2sJoint%20Rehab%20-%20Ashgrove%20Site%20-%20Markham%20Physiotherapy%20Center!5e0!3m2!1sen!2sca!4v1598383229601!5m2!1sen!2sca"
                width="100%"
                height="250"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Ashgrove Medical Center Location"
              ></iframe>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 my-8" />
        {/* Company Links */}
        <div className="flex justify-center">
          <div className="text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Joint Rehab.
            </p>
            <div className="mt-4">
              {companyLinks.map((link, index) => (
                <Link key={index} href={link.href} className="mr-4">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center mt-8">
          <div className="flex">
            <a
              href="https://www.instagram.com/jointrehab/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl mr-4 hover:text-blue-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/people/Joint-Rehab/100054544805277/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-500"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
