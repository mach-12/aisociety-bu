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

export default function Join() {
  return (
    <div className="min-h-screen text-center">
      <Navbar />
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
        Join
      </h1>
      <JoinUsBadge />
      <WhatIsAIS />
      <SocietyStructure />
      <TeamStructure />
      <HowToJoin />
      <JoinUsBadge />
      <FAQs />
      <ContactUs />
      <Footer />
    </div>
  );
}
