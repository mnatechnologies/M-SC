"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./wordmark";

const nav = [
  { href: "/", label: "Home" },
  { href: "/cakes", label: "Cakes" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-line-soft"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="container-x flex items-center justify-between py-5">
        <Wordmark size="sm" />

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-10"
        >
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "link-underline text-[0.78rem] font-medium uppercase tracking-[0.22em] transition-colors",
                  active ? "text-burgundy" : "text-ink hover:text-burgundy",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="btn btn-primary">
            Order a cake
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex flex-col justify-center w-10 h-10 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={[
              "block h-[1.5px] w-6 bg-ink transition-transform duration-300",
              open ? "translate-y-[4px] rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "mt-1.5 block h-[1.5px] w-6 bg-ink transition-transform duration-300",
              open ? "-translate-y-[4px] -rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden overflow-hidden border-t border-line-soft bg-cream transition-[max-height] duration-500",
          open ? "max-h-96" : "max-h-0",
        ].join(" ")}
      >
        <nav className="container-x flex flex-col py-6 gap-5" aria-label="Mobile">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "font-serif text-2xl",
                  active ? "text-burgundy" : "text-ink",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn btn-primary mt-2 self-start">
            Order a cake
          </Link>
        </nav>
      </div>
    </header>
  );
}
