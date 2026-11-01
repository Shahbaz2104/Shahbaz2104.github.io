"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Work", href: "work" },
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-border focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-foreground"
        >
          <span className="flex size-6 items-center justify-center border border-accent/40 bg-accent-soft text-[10px] text-accent">
            M
          </span>
          Muhammad Shahbaz
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 text-sm transition-colors hover:border-foreground/40 hover:text-accent"
          >
            Resume
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex size-9 items-center justify-center border border-border text-muted transition-colors hover:text-foreground"
          >
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background px-5 pb-5 pt-2 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent"
            >
              Download resume
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
