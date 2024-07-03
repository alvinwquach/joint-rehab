import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "./components/ApolloWrapper";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import BackToTopButton from "./components/ui/BackToTopButton";
import { navigation } from "@/util/navigation";
import { getClient } from "./lib/apollo-client";
import { Location } from "@/types/Location";
import {
  GET_ASHGROVE_MEDICAL_CENTER_LOCATION,
  GET_MARKHAM_PLAZA_LOCATION,
} from "@/graphql/queries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joint Rehab",
  description:
    "Joint Rehab in Markham provides excellent services in physiotherapy, sports therapy, custom orthotics, acupuncture, massage therapy, and oncology rehab.",
};

interface LayoutData {
  allAshgroveMedicalCenterLocation: Location[];
  allMarkhamPlazaLocation: Location[];
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: markhamPlazaData } = await getClient().query({
    query: GET_MARKHAM_PLAZA_LOCATION,
  });
  const { data: ashgroveData } = await getClient().query({
    query: GET_ASHGROVE_MEDICAL_CENTER_LOCATION,
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <Navbar navigation={navigation} />
          <main className="bg-slate-800">{children}</main>
          <Footer
            markhamPlazaLocation={markhamPlazaData}
            ashgroveMedicalCenterLocation={ashgroveData}
          />
          <BackToTopButton />
        </ApolloWrapper>
      </body>
    </html>
  );
}