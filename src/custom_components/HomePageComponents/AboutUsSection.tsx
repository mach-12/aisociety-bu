import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import contentData from "@/contentData";
import OrbitingCircles from "@/components/magicui/orbiting-circles";

export default function AboutUsSection() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32 border-t">
      <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
            About Us
          </h2>
          <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
            {contentData.club.about.text}
          </p>
          <Button variant="link" className="mt-6 mx-auto block">
            Read More
          </Button>
        </div>
        <div>
          <Image
            src={contentData.club.about.image}
            width={500}
            height={500}
            alt="About Image"
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
