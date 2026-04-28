"use client";

import Link from "next/link";
import { User } from "lucide-react";
import { usePathname } from "next/navigation";
import Marquee from "react-fast-marquee";
import { SlMenu } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
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
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Forum", href: "/forum" },
];

const RIGHT_LINKS = [
  { label: "Numerology", href: "/numerology" },
  { label: "Kundli", href: "/kundli" },
  { label: "Match Making", href: "/match-making" },
];

export default function KundliNavbar() {
  const currentroute = usePathname()
  return (
    <header className="absolute left-0 top-0 z-50 w-full pt-2">
      <div className="w-full pt-[16px] ">
        <div className="mx-auto hidden md:flex max-w-[1540px] flex-wrap items-center justify-start gap-[10px] px-[22px]">
          {TOP_LINKS.map((link, index) => (
            <div key={link.label} className="flex items-center gap-[10px]">
              <Link
                href={link.href}
                className="text-[12px] font-normal leading-none tracking-[0.01em] text-white/90 no-underline"
              >
                {link.label}
              </Link>
              {index < TOP_LINKS.length - 1 && (
                <span className="text-[12px] leading-none text-white/70">|</span>
              )}
            </div>
          ))}
        </div>
        <div className="block md:hidden">
          <Marquee >
            {TOP_LINKS.map((link, index) => (
            <div key={link.label} className="flex items-center gap-[10px]">
              <Link
                href={link.href}
                className="text-[12px] font-normal leading-none tracking-[0.01em] text-white/90 no-underline"
              >
                {link.label}
              </Link>
              {index < TOP_LINKS.length - 1 && (
                <span className="text-[12px] leading-none text-white/70">|</span>
              )}
            </div>
          ))}
        </Marquee>
        </div>
        
      </div>

      <div className="mt-3 md:mt-6 flex w-full justify-center md:px-[22px]">
        <nav className=" py-4 md:py-0 md:min-h-[84px] w-full max-w-[1540px]  items-center md:rounded-[28px] border border-white/20 bg-[linear-gradient(180deg,rgba(11,11,11,0.96)_0%,rgba(12,12,12,0.9)_100%)] px-[34px] shadow-[0_18px_40px_rgba(0,0,0,0.32),inset_0_0_24px_rgba(255,255,255,0.02)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] flex items-center justify-center">
         <div className="flex items-center justify-between md:grid grid-cols-[1fr_auto_1fr] md:max-w-[90%] md:mx-auto w-full">
          <div className="block md:hidden">
            <SlMenu className="text-primary text-2xl" />
          </div>
          <div className="hidden md:flex items-center justify-end xl:justify-start gap-3 xl:gap-6 2xl:gap-10 ">
            {LEFT_LINKS.map((link) => {
              const isActive = link.href === currentroute;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative whitespace-nowrap  text-[17px] font-bold leading-none  no-underline max-[1280px]:text-[15px] ${
                    isActive ? "text-primary !underline !underline-offset-8" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex xl:min-w-[230px] 2xl:min-w-[300px] items-center justify-center px-3 md:px-6">
            <Link href="/" className="whitespace-nowrap text-[33px] font-bold leading-none text-primary no-underline max-[1280px]:text-[28px]">
              ई-Pandit ji
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-end gap-3 xl:gap-6 2xl:gap-10 max-[1280px]:gap-6">
             {RIGHT_LINKS.map((link) => {
              const isActiver = link.href === currentroute;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative whitespace-nowrap  text-[17px] font-bold leading-none  no-underline max-[1280px]:text-[15px] ${
                    isActiver ? "text-primary !underline !underline-offset-8" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
           
             <button
              type="button"
              className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[16px] border-[1.5px] border-primary bg-transparent px-[18px] pl-4 text-[14px] font-medium leading-none text-primary"
            >
              <User size={15} strokeWidth={2.2} />
              <span>Login</span>
            </button>
            
          </div>
          <div className="block md:hidden">
            <FaUser className="text-primary text-2xl" />
          </div>
          </div>
          <div className="absolute right-[1%] xl:right-[8%] hidden lg:block">
            <button
              type="button"
              className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[16px] border-[1.5px] border-primary bg-transparent px-[18px] pl-4 text-[14px] font-medium leading-none text-primary"
            >
              <User size={15} strokeWidth={2.2} />
              <span>Login</span>
            </button>
          </div>
          
        </nav>
      </div>
    </header>
  );
}