import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function JoinUsBadge() {
  return (
    <section className="border rounded-xl backdrop-blur-md w-full bg-gradient-to-r from-primary to-primary-dark py-3 px-4 sm:px-6 shadow-lg transition-all duration-300 ease-in-out">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="bg-primary-light rounded-full p-2">
            <Calendar className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-primary-foreground">
              Applications Open
            </h2>
            <p className="text-sm text-primary-foreground/80">
              Deadline: August 31, 2024
            </p>
          </div>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-medium text-primary shadow-sm transition-all duration-200 ease-in-out hover:bg-primary-foreground hover:text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            prefetch={false}
          >
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
