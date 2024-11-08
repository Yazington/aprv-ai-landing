"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const sectionLinks = document.querySelectorAll('a[href^="#"]');

    sectionLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href")?.substring(1);
        if (!targetId) return;
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    });

    return () => {
      sectionLinks.forEach((link) => {
        link.removeEventListener("click", (e) => {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <header
      style={{
        boxShadow: `
          inset 0 0 0.5px 1px hsla(0, 0%,  100%, 0.3),
          0 0 0 1px hsla(0, 0%, 0%, 0.05),
          0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
          0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
          0 3.5px 6px hsla(0, 0%, 0%, 0.09)
        `,
      }}
      className="bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-sm fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-3 flex justify-between items-center rounded-full sm:w-full md:w-2/3 lg:w-1/2 w-[95%]"
    >
      <div className="flex basis-3/12 items-center gap-8 p-6 m-2">
        <Image
          src="/logo2.png"
          alt="Brand Logo"
          width={120}
          height={120}
          className="hidden sm:block" // Display this on small screens and up
        />
        <Image
          src="/logo-mobile.png"
          alt="Mobile Brand Logo"
          width={60}
          height={60}
          className="block sm:hidden" // Display this on smaller than small screens
        />
      </div>
      <nav className="text-white flex  gap-2  m-2 p-6">
        <a href="#challenges">Challenges</a>
        <a href="#features">Features</a>
        <a href="#about">About Us</a>
      </nav>
    </header>
  );
}
