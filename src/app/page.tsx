import Navbar from "@/custom_components/CommonComponents/Navbar";
import Footer from "@/custom_components/CommonComponents/Footer";

import AboutUsSection from "@/custom_components/HomePageComponents/AboutUsSection";
import HeroSection from "@/custom_components/HomePageComponents/HeroSection";
import JoinUsSection from "@/custom_components/HomePageComponents/JoinUs";
import LeadershipSection from "@/custom_components/HomePageComponents/Leadership";
import NewsSection from "@/custom_components/HomePageComponents/News";
import ProjectsSection from "@/custom_components/HomePageComponents/Projects";
import PublicationsSection from "@/custom_components/HomePageComponents/Publications";

import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-4">
        <HeroSection />
        <AboutUsSection />

        <NewsSection />
        <ProjectsSection />
        <PublicationsSection />
        <LeadershipSection />
        <JoinUsSection />
      </main>
      <Footer />
    </div>
  );
}
