"use client";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navbar />
      <section id="home" className="h-screen">
        Home Content
      </section>
      <section id="about" className="h-screen">
        About Content
      </section>
      <section id="services" className="h-screen">
        Services Content
      </section>
      <section id="contact" className="h-screen">
        Contact Content
      </section>
    </>
  );
}

function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex justify-center items-center w-full fixed top-0 z-50 mt-4">
      <nav className="flex space-x-4 p-2 bg-black/60 rounded-full border border-black">
        <NavItem
          href="#home"
          icon={<FaHome />}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <NavItem
          href="#about"
          icon={<span>Hello</span>}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <NavItem
          href="#services"
          icon={<FaServicestack />}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <NavItem
          href="#contact"
          ƒ
          icon={<FaEnvelope />}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      </nav>
    </header>
  );
}

const NavItem = ({ href, icon, activeLink, setActiveLink }) => {
  const handleClick = () => {
    setActiveLink(href.substring(1));
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`relative flex items-center justify-center p-2 text-lg cursor-pointer font-medium text-neutral-100/60 transition-transform duration-300 ease-in-out ${
        activeLink === href.substring(1) ? "bg-black rounded-full" : ""
      }`}
    >
      {icon}
      {activeLink === href.substring(1) && (
        <div className="absolute inset-0 bg-black rounded-full mix-blend-difference transition-all duration-300 ease-in-out"></div>
      )}
    </Link>
  );
};
