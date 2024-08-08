import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JoinUsSection() {
  return (
    <section
      id="join-us"
      className="py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground"
    >
      <div className="container max-w-5xl mx-auto px-4 md:px-6 text-center bg-gray-950 rounded-lg p-9 text-white">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 ">
          Join Us
        </h2>
        <p className="text-lg md:text-xl">
          Be part of a community that is passionate about Artificial
          Intelligence and making a difference. Join us and contribute to
          exciting projects, gain new skills, and connect with like-minded
          individuals.
        </p>
        <Link href="/join">
          <Button size="lg" className="mt-6">
            Join Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
