import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
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
import { Button } from "@/components/ui/button";
import contentData from "@/contentData";

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
          Publications
        </h2>
        <Carousel className="w-full">
          <CarouselContent className="flex justify-center">
            {contentData.club.publications.map((publication, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 px-2"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer">
                      <CardHeader>
                        <CardTitle>{publication.title}</CardTitle>
                        <CardDescription>
                          {publication.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src={publication.image}
                          alt="Publication Image"
                          className="rounded-t-md object-cover"
                          width="300"
                          height="200"
                          style={{
                            aspectRatio: "300/200",
                            objectFit: "cover",
                          }}
                        />
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{publication.title}</DialogTitle>
                      <DialogDescription>
                        {publication.description}
                      </DialogDescription>
                    </DialogHeader>
                    <Image
                      src={publication.image}
                      alt="Publication Image"
                      className="rounded-t-md object-cover my-4"
                      width="300"
                      height="200"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Button
          variant="link"
          href="#publications"
          className="mt-6 mx-auto block text-center"
        >
          Check out our publications
        </Button>
      </div>
    </section>
  );
}
