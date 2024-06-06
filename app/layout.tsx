import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "./components/ApolloWrapper";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import BackToTopButton from "./components/ui/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joint Rehab",
  description:
    "Joint Rehab in Markham provides excellent services in physiotherapy, sports therapy, custom orthotics, acupuncture, massage therapy, and oncology rehab.",
};

const navigation = [
  { id: 1, name: "Home", href: "/", pathPrefix: "" },
  {
    id: 2,
    name: "Services",
    href: "#",
    pathPrefix: "services",
    dropdownOptions: [
      { name: "Physiotherapy", href: "physiotherapy" },
      { name: "Sports Therapy", href: "sports-therapy" },
      { name: "Massage Therapy", href: "massage-therapy" },
      { name: "Acupuncture", href: "acupuncture" },
      { name: "Orthotics", href: "orthotics" },
      { name: "Oncology Rehab", href: "oncology-rehab" },
    ],
  },
  {
    id: 3,
    name: "Our Team",
    href: "#",
    pathPrefix: "team",
    dropdownOptions: [
      { name: "Physiotherapist", href: "physiotherapist" },
      { name: "Massage Therapist", href: "massage-therapist" },
      { name: "Administration", href: "administration" },
    ],
  },
  { id: 4, name: "Links", href: "/links", pathPrefix: "" },
  { id: 5, name: "Contact", href: "/contact", pathPrefix: "" },
];

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "#about-us" },
//   {
//     name: "Services",
//     href: "#",
//     dropdownOptions: [
//       { name: "Physiotherapy", href: "/services/physiotherapy" },
//       { name: "Sports Therapy", href: "/services/sports-therapy" },
//       { name: "Massage Therapy", href: "/services/massage-therapy" },
//       { name: "Acupuncture", href: "/services/acupuncture" },
//       { name: "Orthotics", href: "/services/orthotics" },
//       { name: "Oncology Rehab", href: "/services/oncology-rehab" },
//     ],
//   },
//   {
//     name: "Our Team",
//     href: "#",
//     dropdownOptions: [
//       { name: "Physiotherapist", href: "/team/physiotherapist" },
//       { name: "Massage Therapist", href: "/team/massage-therapist" },
//       { name: "Administration", href: "/team/administration" },
//     ],
//   },
//   { name: "Links", href: "/links" },
//   { name: "Contact", href: "/contact" },
// ];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <Navbar navigation={navigation} />
          <main className="bg-slate-800">{children}</main>
          <Footer />
          <BackToTopButton />
        </ApolloWrapper>
      </body>
    </html>
  );
}
