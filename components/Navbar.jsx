"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Menu, X } from "lucide-react";

const TOP_LINKS = [
  { label: "Rashifal", href: "/rashifal" },
  { label: "Kundli", href: "/kundli" },
  { label: "Rashifal 2026", href: "/rashifal-2026" },
  { label: "Horoscope 2026", href: "/horoscope-2026" },
  { label: "Today Horoscope", href: "/today-horoscope" },
  { label: "Calendar 2026", href: "/calendar-2026" },
];

const LEFT_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  // { label: "Services", href: "/services" },
  { label: "Remedy", href: "/remedy" },
  { label: "Forum", href: "/forum" },
];

const RIGHT_LINKS = [
  { label: "Numerology", href: "/numerology" },
  { label: "Kundli", href: "/kundli" },
  { label: "Match Making", href: "/match-making" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const allMobileLinks = [...LEFT_LINKS, ...RIGHT_LINKS];

  return (
    <header className="absolute left-0 top-0 z-999 w-full">
      {/* Top strip - desktop only */}
      <div className="w-full border-b border-white/5 bg-[rgba(7,7,25,0.92)] px-6 py-[14px] max-[991px]:hidden">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center gap-[14px]">
          {TOP_LINKS.map((link, index) => (
            <div key={link.label} className="flex items-center gap-[14px]">
              <Link
                href={link.href}
                className="whitespace-nowrap text-[13px] font-medium tracking-[0.04em] text-white/80 no-underline font-[Raleway,sans-serif]"
              >
                {link.label}
              </Link>

              {index < TOP_LINKS.length - 1 && (
                <span className="text-white/20">|</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="mt-9 flex w-full justify-center px-6 max-[991px]:hidden">
        <nav className="flex min-h-[92px] w-full max-w-[1540px] items-center justify-between rounded-[34px] border border-white/20 bg-[linear-gradient(180deg,rgba(10,10,10,0.96)_0%,rgba(12,12,12,0.92)_100%)] px-[34px] shadow-[0_20px_50px_rgba(0,0,0,0.45),inset_0_0_30px_rgba(255,255,255,0.03)] backdrop-blur-md [-webkit-backdrop-filter:blur(12px)]">
          {/* Left */}
          <div className="flex flex-1 items-center gap-[38px]">
            {LEFT_LINKS.map((link) => {
              const isActive = link.label === "Home";

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative whitespace-nowrap pb-2 text-[18px] font-bold no-underline font-[Raleway,sans-serif] ${
                    isActive ? "text-PRIMARY" : "text-white"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 h-[3px] w-[58px] rounded-[10px] bg-PRIMARY"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Center logo */}
          <div className="flex min-w-[280px] items-center justify-center px-5">
            <Link href="/" className="no-underline">
              <span className="whitespace-nowrap text-[28px] font-bold tracking-[0.03em] text-PRIMARY font-[Cinzel,serif]">
                ई-Pandit ji
              </span>
            </Link>
          </div>

          {/* Right */}
          <div className="flex flex-1 items-center justify-end gap-[34px]">
            {RIGHT_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-[18px] font-bold text-white no-underline font-[Raleway,sans-serif]"
              >
                {link.label}
              </Link>
            ))}

            <button
              className="inline-flex h-[46px] items-center justify-center gap-[10px] whitespace-nowrap rounded-full border-[1.5px] border-PRIMARY bg-transparent px-[22px] text-[16px] font-bold text-PRIMARY font-[Raleway,sans-serif]"
            >
              <User size={16} />
              Login
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="hidden p-4 max-[991px]:block">
        <div className="flex min-h-[68px] items-center justify-between rounded-[20px] border border-white/20 bg-[linear-gradient(180deg,rgba(10,10,10,0.96)_0%,rgba(12,12,12,0.92)_100%)] px-[18px] shadow-[0_14px_35px_rgba(0,0,0,0.35)] backdrop-blur-md [-webkit-backdrop-filter:blur(12px)]">
          <Link
            href="/"
            className="flex items-center no-underline"
          >
            <span className="whitespace-nowrap text-[22px] font-bold tracking-[0.02em] text-primary font-[Cinzel,serif]">
              ई-Pandit ji
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-[rgba(245,197,24,0.5)] bg-transparent text-primary"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-3 flex flex-col gap-[6px] rounded-[20px] border border-white/10 bg-[rgba(8,8,18,0.96)] p-[14px] shadow-[0_14px_35px_rgba(0,0,0,0.35)] backdrop-blur-md [-webkit-backdrop-filter:blur(12px)]">
            {allMobileLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-[12px] px-[10px] py-3 text-[16px] font-bold text-white no-underline font-[Raleway,sans-serif] hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <button className="mt-2 inline-flex h-[44px] items-center justify-center gap-2 rounded-full border-[1.5px] border-primary bg-transparent text-[15px] font-bold text-primary font-[Raleway,sans-serif]">
              <User size={16} />
              Login
            </button>
          </div>
        )}
      </div>
    </header>
  );
}