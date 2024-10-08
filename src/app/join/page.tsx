import Link from "next/link";
import JoinUsBadge from "./JoinUsBadge";
import WhatIsAIS from "./WhatIsAIS";
import SocietyStructure from "./SocietyStructure";
import TeamStructure from "./TeamStructure";
import HowToJoin from "./HowToJoin";
import ContactUs from "./ContactUs";
import FAQs from "./FAQs";
import Navbar from "@/custom_components/CommonComponents/Navbar";
import Footer from "@/custom_components/CommonComponents/Footer";
import { Features } from "@/custom_components/HomePageComponents/Features";

export default function Join() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-14 px-4 md:px-6 py-12 min-h-screen text-center">
        {/* <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
          Join Us
        </h1> */}
        <JoinUsBadge />
        <WhatIsAIS />
        <Features />

        <SocietyStructure />
        <TeamStructure />
        <HowToJoin />
        <FAQs />
        <ContactUs />
      </div>
    </div>
  );
}
