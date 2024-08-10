"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-20  flex items-center justify-center rounded-full border-2 bg-white p-4 md:p-5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        "md:w-28 md:h-28 w-20 h-20 text-sm md:text-base",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const Card = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-30 p-4 bg-white rounded-lg shadow-md border border-gray-300 text-center",
        "md:text-lg text-sm", // Responsive text size for cards
        className
      )}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef1 = useRef<HTMLDivElement>(null);
  const rightRef2 = useRef<HTMLDivElement>(null);
  const rightRef3 = useRef<HTMLDivElement>(null);
  const rightRef4 = useRef<HTMLDivElement>(null);

  return (
    <div
      className="mx-auto max-w-4xl relative flex  w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-4 md:p-10 md:shadow-xl "
      ref={containerRef}
    >
      <div className="flex w-full max-w-4xl flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Element */}
        <Card ref={leftRef}>Students</Card>

        {/* Center Element */}
        <Circle ref={centerRef}>
          <Icons.AIS_LOGO />
        </Circle>

        {/* Right Elements */}
        <div className="flex flex-col space-y-2 md:space-y-4 text-right">
          <Card ref={rightRef1}>Research</Card>
          <Card ref={rightRef2}>Hackathons</Card>
          <Card ref={rightRef3}>Open Source Projects</Card>
          <Card ref={rightRef4}>Events</Card>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={leftRef}
        toRef={centerRef}
        duration={2}
        className="custom-wire-beam"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={rightRef1}
        toRef={centerRef}
        duration={2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={rightRef2}
        toRef={centerRef}
        duration={2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={rightRef3}
        toRef={centerRef}
        duration={2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={rightRef4}
        toRef={centerRef}
        duration={2}
      />
    </div>
  );
}

const Icons = {
  AIS_LOGO: () => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1598.000000pt"
      height="1356.000000pt"
      viewBox="0 0 1598.000000 1356.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,1356.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M7630 11188 l-1 -2373 171 -4375 c94 -2406 173 -4390 176 -4408 4
-23 10 -32 24 -32 17 0 20 7 20 41 0 23 74 1997 165 4386 l165 4344 0 2395 0
2394 -360 0 -360 0 0 -2372z"
        />
        <path
          d="M35 12967 c11 -7 1245 -717 2743 -1577 1497 -861 2722 -1568 2722
-1571 0 -4 -778 -680 -1730 -1503 -951 -823 -1732 -1501 -1735 -1506 -4 -7
964 -9 2672 -8 l2678 3 3 768 2 767 -285 0 -285 0 0 -490 0 -490 -1647 0
-1648 0 25 24 c14 13 597 518 1295 1121 699 604 1273 1104 1278 1111 4 7 6
122 5 255 l-3 241 -1999 1149 c-1100 632 -2002 1151 -2004 1154 -3 3 1053 5
2346 5 l2352 0 2 -497 3 -498 280 0 280 0 3 778 2 777 -3687 0 c-3054 0 -3684
-2 -3668 -13z"
        />
        <path
          d="M8592 12203 l3 -778 280 0 280 0 3 498 2 497 2352 0 c1293 0 2349 -2
2346 -5 -2 -3 -904 -522 -2004 -1154 l-1999 -1149 -3 -244 c-2 -185 1 -248 10
-260 7 -8 582 -507 1278 -1108 696 -601 1276 -1103 1290 -1116 l25 -24 -1648
0 -1647 0 0 490 0 490 -285 0 -285 0 2 -767 3 -768 2678 -3 c1652 -1 2676 2
2672 7 -3 5 -784 683 -1735 1506 -952 823 -1730 1500 -1730 1503 0 4 1225 711
2723 1571 1497 861 2731 1571 2742 1578 16 11 -612 13 -3668 13 l-3687 0 2
-777z"
        />
      </g>
    </svg>
  ),
};
