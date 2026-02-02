"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  activeSection?: string;
}

export default function Header({ activeSection = "hero" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-black/80 backdrop-blur-md"
        } border-b border-blue-900/30`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          AA
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Hero", "About", "Projects", "Blog", "Open Source", "Connect"].map((item) => {
            const sectionId = item.toLowerCase().replace(" ", "");
            return (
              <button
                key={item}
                onClick={() => scrollToSection(sectionId)}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === sectionId ? "text-blue-400" : "text-gray-400"
                  }`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div>
          <Link
            href="https://drive.google.com/file/d/1jW2pagU27BON2MVmMqWi1k5w5H67zHme/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105"
          >Resume</Link>
        </div>
      </div>
    </nav>
  );
}