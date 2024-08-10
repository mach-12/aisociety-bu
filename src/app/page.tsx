import Navbar from "@/custom_components/CommonComponents/Navbar";
import Footer from "@/custom_components/CommonComponents/Footer";

import AboutUsSection from "@/custom_components/HomePageComponents/AboutUsSection";
import JoinUsSection from "@/custom_components/HomePageComponents/JoinUs";
import LeadershipSection from "@/custom_components/HomePageComponents/Leadership";
import ProjectsSection from "@/custom_components/HomePageComponents/Projects";
import PublicationsSection from "@/custom_components/HomePageComponents/Publications";

import React from "react";
import HeroSection from "@/custom_components/HomePageComponents/HeroSection";
import { Features } from "@/custom_components/HomePageComponents/Features";
import EventsSection from "@/custom_components/HomePageComponents/Events";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
 
      <Features />

      {/* <NewsSection /> */}
      <EventsSection />
      {/* <ProjectsSection /> */}
      {/* <PublicationsSection /> */}
      {/* <LeadershipSection /> */}
      <JoinUsSection />
    </main>
  );
}
