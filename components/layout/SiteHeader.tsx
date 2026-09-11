"use client";

import { useRef, useState } from "react";

const navigation: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Home", href: "#home" },
  { label: "Coaching", href: "#services" },
  { label: "About Ravi", href: "#about" },
  { label: "Client Results", href: "#results" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full h-14 md:h-16 shadow-md bg-black/95 backdrop-blur z-50"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex justify-between items-center gap-3">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex min-w-0 min-h-11 items-center gap-2 sm:gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5b533]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#f5b533] text-[#f5b533] font-extrabold text-lg tracking-tight">
            RF
          </div>
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="text-base font-semibold text-white">
              Rav<span className="text-[#f5b533]"> Fitness</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#f5b533]">
              Never Break The Chain
            </span>
          </div>
        </a>

        <nav aria-label="Primary navigation" className="hidden lg:flex shrink-0 items-center gap-4 text-sm font-medium">
          {navigation.map(({ label, href }) => (
            <a key={href} href={href} className="inline-flex min-h-11 items-center rounded-md px-1 text-white hover:text-[#f5b533] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5b533]">
              {label}
            </a>
          ))}
          <a href="#contact" className="inline-flex min-h-11 items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold bg-[#f5b533] text-black hover:brightness-110 shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5b533]">
            Book a Complimentary Session
          </a>
        </nav>

        <button
          ref={menuButton}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md border border-[#f5b533]/60 text-[#f5b533] lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5b533]"
        >
          <span aria-hidden="true" className="block h-0.5 w-5 bg-current" />
          <span aria-hidden="true" className="block h-0.5 w-5 bg-current" />
          <span aria-hidden="true" className="block h-0.5 w-5 bg-current" />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="absolute top-full inset-x-0 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-neutral-800 bg-black px-4 py-3 shadow-md lg:hidden"
      >
        <ul className="flex min-w-0 flex-col gap-1 text-sm font-medium">
          {navigation.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center rounded-md px-3 py-3 text-white hover:bg-neutral-900 hover:text-[#f5b533] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5b533]">
                {label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a href="#contact" onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center justify-center rounded-xl bg-[#f5b533] px-3 py-3 text-center font-semibold text-black hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5b533]">
              Book a Complimentary Session
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
