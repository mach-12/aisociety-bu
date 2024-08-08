import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RippleCard } from "../RippleCard";

export default function JoinUsSection() {
  return (
    <section
      id="join-us"
      className="py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground"
    >
      <RippleCard />
    </section>
  );
}
