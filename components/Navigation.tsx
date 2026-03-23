"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Einrichtung", href: "#standorte" },
  { label: "Pflege", href: "#pflege" },
  { label: "Services", href: "#freizeit" },
  { label: "Karriere", href: "#karriere" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#start" className="flex items-center shrink-0">
            <div className={`transition-all duration-500 rounded-lg px-2 py-1 ${
              scrolled ? "bg-transparent" : "bg-white/90 backdrop-blur-sm"
            }`}>
              <Image
                src="/logo.jpg"
                alt="Zusammen Zuhause GmbH"
                width={220}
                height={74}
                className="h-12 w-auto"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#C8962E] ${
                  scrolled ? "text-[#1A1A18]" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#kontakt"
            className={`hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-[#1B4D2E] text-white hover:bg-[#0F2E1A]"
                : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"
            }`}
          >
            Kontakt aufnehmen
          </a>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-[#1B4D2E]" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#1A1A18] font-medium text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="mt-2 w-full text-center py-3 rounded-full bg-[#1B4D2E] text-white text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Kontakt aufnehmen
          </a>
        </div>
      )}
    </header>
  );
}
