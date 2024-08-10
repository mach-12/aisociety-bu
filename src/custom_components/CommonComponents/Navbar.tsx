"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ShimmerButton from "../ShimmerCard";

const Navbar = () => {
  return (
    <header className="container mx-auto z-50 sticky top-2 px-6 md:px-12 py-2 text-foreground bg-white/60 backdrop-blur-lg border-2 rounded-xl shadow-xl flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            src="/AISociety_Logo_Dark.png"
            width={120}
            height={120}
            alt="Logo"
            className="mx-auto"
          />
          {/* <span className="text-xl font-semibold">AI Society</span> */}
        </div>
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="hidden lg:flex gap-4">
          {/* {["About", "Events", "Team", "Blog", "Projects", "Publications"].map( */}
          {[].map(

            (item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink asChild>
                  <Link
                    href={`${item.toLowerCase()}`}
                    className="font-bold hover:underline underline-offset-4"
                  >
                    {item}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ),
          )}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="join" className="ml-6">
                <ShimmerButton text="Join Us" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="link" size="icon" className="lg:hidden">
            <FaBars className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-start">
            {[
              "Home",
              "About",
              // "Events",
              // "Team",
              // "Blog",
              // "Projects",
              // "Publications",
              "Join",
            ].map((item) => (
              <Link
                href={`${item.toLowerCase().replace(" ", "-")}`}
                key={item}
                className="py-2 hover:underline underline-offset-4"
              >
                {item}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
