"use client";

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

const Section = ({
  id,
  title,
  content,
  buttonText,
  buttonLink,
  isCarousel,
}) => (
  <section id={id} className="py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container max-w-5xl mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
        {title}
      </h2>
      {isCarousel ? (
        <Carousel className="w-full">
          <CarouselContent className="flex justify-center">
            {content.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 px-2"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer">
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src={item.image}
                          alt="Item Image"
                          className="rounded-t-md object-cover"
                          width="300"
                          height="200"
                          style={{ aspectRatio: "300/200", objectFit: "cover" }}
                        />
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                      <DialogDescription>{item.description}</DialogDescription>
                    </DialogHeader>
                    <Image
                      src={item.image}
                      alt="Item Image"
                      className="rounded-t-md object-cover my-4"
                      width="300"
                      height="200"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    />
                    <Link
                      href={item.link || "#"}
                      className="text-sm font-medium hover:underline"
                    >
                      Read More
                    </Link>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-6">
          {content.map((item, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
                {item.title}
              </h2>
              <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                {item.text}
              </p>
              {item.image && (
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt="About Image"
                  className="rounded-lg mx-auto"
                />
              )}
            </div>
          ))}
        </div>
      )}
      <Button
        variant="link"
        href={buttonLink}
        className="mt-6 mx-auto block text-center"
      >
        {buttonText}
      </Button>
    </div>
  </section>
);

export default Section;
