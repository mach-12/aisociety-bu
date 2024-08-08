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

const Navbar = () => {
  return (
    <header className="z-10 sticky top-0 bg-primary text-primary-foreground px-4 md:px-6 py-4 flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            src="/AISociety_Logo_Light.png"
            width={120}
            height={120}
            alt="Logo"
            className="mx-auto"
          />
          <span className="text-xl font-semibold">AI Society</span>
        </div>
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex gap-4">
          {[
            "About",
            "Events",
            "Team",
            "Blog",
            "Projects",
            "Publications",
          ].map((item) => (
            <NavigationMenuItem key={item}>
              <NavigationMenuLink asChild>
                <Link
                  href={`${item.toLowerCase()}`}
                  className="hover:underline underline-offset-4"
                >
                  {item}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="join"
                className="underline text-secondary hover:underline underline-offset-4 font-bold"
              >
                Join Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="link" size="icon" className="md:hidden">
            <FaBars className="h-6 w-6 text-white" />
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
              "Events",
              "Team",
              "Blog",
              "Projects",
              "Publications",
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
