"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Recommendation", href: "/recommendation" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 xl:w-3/4 w-full border-b bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-muted-foreground">
      <nav className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        {/* logo/title */}
        <Link
          href="/"
          className="text-lg font-bold border-b-2 border-transparent hover:border-gray-300"
        >
          Yuelin (Lucas) Wen
        </Link>

        {/* desktop nav */}
        <ul className="hidden items-center gap-6 text-lg xl:flex">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="transition-colors border-b-2 border-transparent hover:border-gray-300 text-"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* right controls */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-gray-200 bg-background px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4 text-lg">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="transition-colors border-b border-transparent hover:border-gray-300"
              >
                <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}