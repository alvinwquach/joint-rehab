import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "./components/ApolloWrapper";
import Navbar from "./components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joint Rehab",
  description:
    "Joint Rehab in Markham provides excellent services in physiotherapy, sports therapy, custom orthotics, acupuncture, massage therapy, and oncology rehab.",
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "#",
    dropdownOptions: [
      { name: "Physiotherapy", href: "/services/physiotherapy" },
      { name: "Sports Therapy", href: "/services/sports-therapy" },
      { name: "Massage Therapy", href: "/services/massage-therapy" },
      { name: "Acupuncture", href: "/services/acupuncture" },
      { name: "Custom Orthotics", href: "/services/custom-orthotics" },
      { name: "Oncology Rehab", href: "/services/oncology-rehab" },
    ],
  },
  {
    name: "Our Team",
    href: "#",
    dropdownOptions: [
      { name: "Physiotherapists", href: "/team/physiotherapists" },
      { name: "Massage Therapists", href: "/team/massage-therapists" },
      { name: "Administration", href: "/team/administration" },
    ],
  },
  { name: "Links", href: "/links" },
  { name: "Contact", href: "/contact" },
];

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
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
