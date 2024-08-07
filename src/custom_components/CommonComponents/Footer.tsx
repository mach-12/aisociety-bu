import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer
    id="contact"
    className="bg-muted text-muted-foreground px-4 md:px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
  >
    <p className="text-sm">&copy; 2024 AIS. All rights reserved.</p>
    <nav className="flex gap-4 md:gap-6">
      <Link href="#" className="text-sm hover:underline underline-offset-4">
        Privacy Policy
      </Link>
      <Link href="#" className="text-sm hover:underline underline-offset-4">
        Terms of Service
      </Link>
      <Link href="#" className="text-sm hover:underline underline-offset-4">
        Contact Us
      </Link>
    </nav>
  </footer>
);

export default Footer;
