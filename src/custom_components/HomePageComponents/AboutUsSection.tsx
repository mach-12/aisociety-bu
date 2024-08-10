import React from "react";
import { Button } from "@/components/ui/button";
import contentData from "@/contentData";
import PolaroidStack from "../PolaroidStack";

export default function AboutUsSection() {
  const randomImages = [
    { src: "/ais-hero.jpg", alt: "AIS" },
    { src: "/ais-hero.jpg", alt: "AIS" },
    { src: "/ais-hero.jpg", alt: "AIS" },
  ];

  return (
    <section id="about" className="py-12 md:py-24 lg:py-32 border-t">
      <div className="border rounded-xl px-4 md:px-6 py-12 container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center md:text-left mb-6">
            About Us
          </h2>
          <p className="text-muted-foreground text-center md:text-left md:text-xl lg:text-base xl:text-xl">
            {contentData.club.about.text}
          </p>
          {/* <Button variant="link" className="mt-6 mx-auto block">
            Read More
          </Button> */}
        </div>
        <div className="flex items-center justify-center">
          <PolaroidStack images={randomImages} />
        </div>
      </div>
    </section>
  );
}
