"use client";

import { useRef } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-5"
    >
      <div
        className="absolute inset-0  backdrop-blur-xl"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      />
      <div className="relative flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="font-display text-xl font-bold tracking-tight hover:text-accent transition-colors duration-300"
        >
          ARAVIND<span className="text-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        <button className="md:hidden font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
          Menu
        </button>
      </div>
    </nav>
  );
}
