import Ripple from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function RippleCard() {
  return (
    <div className="py-24 max-w-5xl mx-auto relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-slate-200 md:shadow-xl">
      <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 ">
        Join Us
      </h2>
      <p className="px-2 text-lg md:text-xl max-w-2xl text-center">
        Be part of a community that is passionate about Artificial Intelligence
        and making a difference. Join us and contribute to exciting projects,
        gain new skills, and connect with like-minded individuals.
      </p>
      <Link href="/join">
        <Button size="lg" className="mt-6">
          Join Now
        </Button>
      </Link>
      <Ripple />
    </div>
  );
}
