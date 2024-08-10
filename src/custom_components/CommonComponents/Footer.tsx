import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Mail, Github, Instagram, Phone } from "lucide-react";

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) => (
  <div>
    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
      {title}
    </h2>
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col space-y-4">
        {links.map((link) => (
          <NavigationMenuLink key={link.href} asChild>
            <Link
              href={link.href}
              className="text-gray-500 dark:text-gray-400 hover:underline"
            >
              {link.label}
            </Link>
          </NavigationMenuLink>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);

const SocialIcon = ({
  Icon,
  label,
  href,
}: {
  Icon: React.ElementType;
  label: string;
  href: string;
}) => (
  <Button
    variant="ghost"
    size="icon"
    asChild
    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
  >
    <Link href={href}>
      <Icon className="w-4 h-4" />
      <span className="sr-only">{label}</span>
    </Link>
  </Button>
);

const Footer = () => {
  const footerSections = [
    {
      title: "Resources",
      links: [
        { href: "/about", label: "About" },
        { href: "/events", label: "Events" },
      ],
    },
    {
      title: "Follow us",
      links: [
        { href: "https://github.com/ai-society", label: "Github" },
        { href: "https://instagram.com/ai-society", label: "Instagram" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-conditions", label: "Terms & Conditions" },
      ],
    },
  ];

  const socialIcons = [
    { Icon: Mail, label: "Gmail", href: "mailto:contact@aisociety.com" },
    {
      Icon: Phone,
      label: "WhatsApp",
      href: "https://wa.me/yourwhatsappnumber",
    },
    {
      Icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/ai-society",
    },
    { Icon: Github, label: "GitHub", href: "https://github.com/ai-society" },
  ];

  return (
    <footer id="contact">
      <div className="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/AISociety_Logo_Dark.png"
                  width={200}
                  height={200}
                  alt="AI Society Logo"
                />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {footerSections.map((section) => (
              <FooterSection
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href="/" className="hover:underline">
              AI Society™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {socialIcons.map((icon) => (
              <SocialIcon key={icon.label} {...icon} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
