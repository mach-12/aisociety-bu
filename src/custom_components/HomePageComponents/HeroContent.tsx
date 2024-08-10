import React from "react";
import Image from "next/image";
import contentData from "@/contentData";
import BadgeButton from "../BadgeButton";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroContent() {
  return (
    <section className="z-20 px-4 py-10 flex flex-col items-center justify-center">
      <div className="container max-w-5xl mx-auto text-center">

        <Image
          src={contentData.club.logo}
          alt="Logo"
          width={800}
          height={800}
          className="mx-auto w-full max-w-[100%] h-auto"
        />
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
          {contentData.club.name}
        </h1>
        <p className="text-muted-foreground text-xl mt-10">
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
        <div className="space-y-4 text-center">
          <Link
            href={contentData.whatsapp_link}
            target="_blank"
            className="inline-flex items-center justify-center rounded-md bg-green-500 px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 mt-4"
            prefetch={false}
          >
            <FaWhatsapp className="mr-2 h-5 w-5" /> Join our WhatsApp community
          </Link>
        </div>
      </div>
    </section>
  );
}
