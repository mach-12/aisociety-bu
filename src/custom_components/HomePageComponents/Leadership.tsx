import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import contentData from "@/contentData";
import { Button } from "@/components/ui/button";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-12 md:py-24 lg:py-32">
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
          Our Leadership Team
        </h2>
        <Carousel className="w-full">
          <CarouselContent className="flex justify-center">
            {contentData.club.leadership.map((leader, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 px-2"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer">
                      <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                        <Image
                          src={leader.photo}
                          alt="Leadership Photo"
                          className="rounded-full"
                          width="120"
                          height="120"
                          style={{
                            aspectRatio: "120/120",
                            objectFit: "cover",
                          }}
                        />
                        <div className="text-center">
                          <h3 className="text-xl font-semibold">
                            {leader.name}
                          </h3>
                          <p className="text-muted-foreground">
                            {leader.position}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{leader.name}</DialogTitle>
                      <DialogDescription>{leader.position}</DialogDescription>
                    </DialogHeader>
                    <Image
                      src={leader.photo}
                      alt="Leadership Photo"
                      className="rounded-full my-4"
                      width="120"
                      height="120"
                      style={{ aspectRatio: "120/120", objectFit: "cover" }}
                    />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Button variant="link" className="mt-6 mx-auto block text-center">
          Meet our leadership team
        </Button>
      </div>
    </section>
  );
}
