import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import contentData from "@/contentData";

export default function EventsSection() {
  return (
    <section id="news" className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
          Events
        </h2>
        <div className="flex flex-wrap justify-center">
          {contentData.club.events.map((events, index) => (
            <div key={index} className="md:w-1/2 lg:w-1/3 p-2">
              <Card className="cursor-pointer">
                <CardHeader>
                  <CardTitle>{events.title}</CardTitle>
                  <CardDescription>{events.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={events.image}
                    alt="News Image"
                    className="rounded-t-md object-cover"
                    width="300"
                    height="200"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                  />
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {events.date}
                    </span>
                    {/* <Link
                      href={events.link}
                      className="text-sm font-medium hover:underline"
                    >
                      Read More
                    </Link> */}
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        {/* <Button variant="link" className="mt-6 mx-auto block text-center">
          Read More Latest Developments
        </Button> */}
      </div>
    </section>
  );
}
