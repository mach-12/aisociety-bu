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
import contentData from "@/contentData";

export default function NewsSection() {
  return (
    <section id="news" className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
          Latest News
        </h2>
        <Carousel className="w-full">
          <CarouselContent className="flex justify-center">
            {contentData.club.news.map((news, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 px-2"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer">
                      <CardHeader>
                        <CardTitle>{news.title}</CardTitle>
                        <CardDescription>
                          {news.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src={news.image}
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
                            {news.date}
                          </span>
                          <Link
                            href={news.link}
                            className="text-sm font-medium hover:underline"
                          >
                            Read More
                          </Link>
                        </div>
                      </CardFooter>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{news.title}</DialogTitle>
                      <DialogDescription>
                        {news.description}
                      </DialogDescription>
                    </DialogHeader>
                    <p>Date: {news.date}</p>
                    <Image
                      src={news.image}
                      alt="News Image"
                      className="rounded-t-md object-cover my-4"
                      width="300"
                      height="200"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    />
                    <Link
                      href={news.link}
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
        <Button
          variant="link"
          className="mt-6 mx-auto block text-center"
        >
          Read More Latest Developments
        </Button>
      </div>
    </section>
  );
}
