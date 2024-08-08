import React from "react";
import Image from "next/image";
import contentData from "@/contentData";



export default function HeroSection() {
  return (
    <section className="mt-4 border py-12 md:py-24 lg:py-32">
      <div className="container max-w-5xl mx-auto text-center">
        <Image
          src={contentData.club.logo}
          width={500}
          height={500}
          alt="Logo"
          className="mx-auto"
        />
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
          {contentData.club.name}
        </h1>
        <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl mt-10">
          {contentData.club.supportedBy}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {contentData.club.logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              width={140}
              height={70}
              alt="Logo"
              className="aspect-[2/1] rounded-lg object-contain object-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
