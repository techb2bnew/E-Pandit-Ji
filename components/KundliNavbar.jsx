// "use client";

// import Link from "next/link";
// import { User } from "lucide-react";
// import Marquee from "react-fast-marquee";
// import { SlMenu } from "react-icons/sl";
// import { RiCloseLargeLine } from "react-icons/ri";
// import { FaUser } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import { usePathname } from "next/navigation";
// const TOP_LINKS = [
//   { label: "Rashifal", href: "/#Zodiac" },
//   { label: "Kundli", href: "#" },
//   { label: "Rashifal 2026", href: "#" },
//   { label: "Horoscope 2026", href: "#" },
//   { label: "Today Horoscope", href: "#" },
//   // { label: "Calendar 2026", href: "#" },
// ];

// const LEFT_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about-us" },
//   // { label: "Services", href: "/services" },
//   { label: "Remedy", href: "/remedy" },
//   { label: "Match Making", href: "/match-making" },
//   // { label: "Forum", href: "/forum" },
// ];

// const RIGHT_LINKS = [
//   { label: "Numerology", href: "/numerology" },
//   { label: "Kundli", href: "/kundli" },
//   { label: "Contact Us", href: "/contact-us" },

// ];

// const MOBILE_LINKS = LEFT_LINKS.concat(RIGHT_LINKS)

// const socialLinks = [
//   {
//     name: "Facebook",
//     icon: FaFacebookF,
//     url: "https://facebook.com",
//   },
//   {
//     name: "Instagram",
//     icon: FaInstagram,
//     url: "https://instagram.com",
//   },
//   {
//     name: "Twitter",
//     icon: FaTwitter,
//     url: "https://twitter.com",
//   },
//   // {
//   //   name: "LinkedIn",
//   //   icon: FaLinkedinIn,
//   //   url: "https://linkedin.com",
//   // },
//   {
//     name: "YouTube",
//     icon: FaYoutube,
//     url: "https://youtube.com",
//   },
// ];

// export default function KundliNavbar() {
//   // const [currentroute, setCurrentroute] = useState("");
//   const [openNavbar, setopenNavbar] = useState(false);
//   useEffect(() => {
//     if (openNavbar) {
//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [openNavbar]);
//   const currentroute = usePathname();
//   const isActiveRoute = (href) => {
//   if (href === "/") return currentroute === "/";
//   return currentroute.startsWith(href);
// };
//   return (
//     <header className="absolute left-0 top-0 z-50 w-full pt-2">
//       <div className="w-full min-h-7 pt-[16px] ">
//         <div className="mx-auto hidden md:flex max-w-[1540px] flex-wrap items-center justify-center gap-[10px] px-[22px]">
//           {TOP_LINKS.map((link, index) => (
//             <div key={link.label} className="flex items-center gap-[10px]">
//               <Link
//                 href={link.href}
//                 className="link_hover hover:text-primary text-[12px] font-normal leading-none tracking-[0.01em] text-white/90 no-underline"
//               >
//                 {link.label}
//               </Link>
//               {index < TOP_LINKS.length - 1 && (
//                 <span className="text-[12px] leading-none text-white/70">|</span>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="block md:hidden">
//           <Marquee speed={20}>
//             {TOP_LINKS.map((link, index) => (
//               <div key={link.label} className="flex items-center gap-[10px]">
//                 <Link
//                   href={link.href}
//                   className="link_hover hover:text-primary text-[12px] font-normal leading-none tracking-[0.01em] text-white/90 no-underline"
//                 >
//                   {link.label}
//                 </Link>
//                 {index < TOP_LINKS.length - 1 && (
//                   <span className="text-[12px] leading-none text-white/70 me-2">|</span>
//                 )}
//               </div>
//             ))}
//           </Marquee>
//         </div>

//       </div>

//       <div className="mt-3 md:mt-6 flex w-full justify-center px-2 md:px-[22px]">
//         <nav className=" py-3 md:py-0 md:min-h-[84px] w-full max-w-[1540px]  items-center rounded-[40px] md:rounded-[28px] border border-white/20 bg-[linear-gradient(180deg,rgba(11,11,11,0.96)_0%,rgba(12,12,12,0.9)_100%)] px-[34px] shadow-[0_18px_40px_rgba(0,0,0,0.32),inset_0_0_24px_rgba(255,255,255,0.02)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] flex items-center justify-center">
//           <div className="flex items-center justify-between md:grid grid-cols-[1fr_auto_1fr] md:max-w-[85%]  2xl:max-w-[80%] md:mx-auto w-full">
//             <div className="block lg:hidden">
//               {
//                 openNavbar ?
//                   <RiCloseLargeLine className="text-primary text-2xl" onClick={() => setopenNavbar(false)} />
//                   :
//                   <SlMenu className="text-primary text-2xl" onClick={() => setopenNavbar(true)} />
//               }

//             </div>
//             <div className="hidden lg:flex items-center justify-end xl:justify-start gap-3 xl:gap-6 2xl:gap-10 ">
//               {LEFT_LINKS.map((link) => {
//                  const isActive = isActiveRoute(link.href);
//                 return (
//                   <Link
//                     key={link.label}
//                     href={link.href}
//                     className={`relative hover:text-primary transition-all duration-500 hover:!underline !underline-offset-8 whitespace-nowrap  text-[17px] font-bold leading-none  no-underline max-[1280px]:text-[15px] ${isActive ? "text-primary !underline !underline-offset-8" : "text-white"
//                       }`}
//                   >
//                     {link.label}
//                   </Link>
//                 );
//               })}
//             </div>

//             <div className="flex xl:min-w-[230px] items-center justify-center px-3 md:px-6">
//               <Link href="/" className="whitespace-nowrap text-[33px] font-bold leading-none text-primary no-underline max-[1280px]:text-[28px]">
//                 ई-Pandit ji
//               </Link>
//             </div>

//             <div className="hidden lg:flex items-center justify-end gap-3 xl:gap-6 2xl:gap-10 max-[1280px]:gap-6">
//               {RIGHT_LINKS.map((link) => {
//                  const isActiver = isActiveRoute(link.href);
//                 return (
//                   <Link
//                     key={link.label}
//                     href={link.href}
//                     className={`relative hover:text-primary transition-all duration-500 hover:!underline !underline-offset-8 whitespace-nowrap  text-[17px] font-bold leading-none  no-underline max-[1280px]:text-[15px] ${isActiver ? "text-primary !underline !underline-offset-8" : "text-white"
//                       }`}
//                   >
//                     {link.label}
//                   </Link>
//                 );
//               })}

//               <button
//                 type="button"
//                 className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[16px] border-[1.5px] border-primary bg-transparent px-[18px] pl-4 text-[14px] font-medium leading-none text-primary"
//               >
//                 <User size={15} strokeWidth={2.2} />
//                 <span>Login</span>
//               </button>

//             </div>
//             <div className="block lg:hidden flex justify-end">
//               <FaUser className="text-primary text-2xl" />
//             </div>
//           </div>

//           <div className={`block 2xl:hidden border-t-2 border-primary fixed w-full transition-all duration-700 top-15.5 h-screen bg-[linear-gradient(180deg,rgba(11,11,11,0.96)_0%,rgba(12,12,12,0.9)_100%)] ${openNavbar ? 'left-0' : '-left-[300%]'}`}>
//             <div className="flex flex-col gap-y-6 pt-8 px-8 ">
//               {MOBILE_LINKS.map((link) => {
//                 const isActive = link.href === currentroute;
//                 return (
//                   <Link
//                     key={link.label}
//                     onClick={() => setopenNavbar(false)}
//                     href={link.href}
//                     className={`relative whitespace-nowrap transition-all ${openNavbar ? 'opacity-100' : 'opacity-0'} duration-2000 text-[17px] font-bold leading-none  no-underline max-[1280px]:text-[15px] ${isActive ? "text-primary !underline !underline-offset-8" : "text-white"
//                       }`}
//                   >
//                     {link.label}
//                   </Link>
//                 );
//               })}
//             </div>
//             <div className="flex gap-4 pt-10 px-8 ">
//               {socialLinks.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <a
//                     key={item.name}
//                     href={item.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary transition hover:bg-primary hover:text-black"
//                   >
//                     <Icon size={18} />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>

//           {/* <div className="absolute right-[0%] xl:right-[5%] hidden lg:block">
//             <button
//               type="button"
//               className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[16px] border-[1.5px] border-primary bg-transparent px-[18px] pl-4 text-[14px] font-medium leading-none text-primary"
//             >
//               <User size={15} strokeWidth={2.2} />
//               <span>Login</span>
//             </button>
//           </div> */}

//         </nav>
//       </div>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { User } from "lucide-react";
import Marquee from "react-fast-marquee";
import { SlMenu } from "react-icons/sl";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { usePathname } from "next/navigation";
import LoginPopup from "./LoginPopup";

const TOP_LINKS = [
  { label: "Rashifal", href: "/#Zodiac" },
  { label: "Kundli", href: "#" },
  { label: "Rashifal 2026", href: "#" },
  { label: "Horoscope 2026", href: "#" },
  { label: "Today Horoscope", href: "#" }
];

const LEFT_LINKS = [
  { label: "Home", href: "/", isComingSoon: false },
  { label: "About Us", href: "/about-us", isComingSoon: false },
  { label: "Remedy", href: "/remedy", isComingSoon: true },
  { label: "Match Making", href: "/match-making", isComingSoon: true }
];

const RIGHT_LINKS = [
  { label: "Numerology", href: "/numerology", isComingSoon: false },
  { label: "Kundli", href: "/kundli", isComingSoon: false },
  { label: "Contact Us", href: "/contact-us", isComingSoon: false }
];

const MOBILE_LINKS = LEFT_LINKS.concat(RIGHT_LINKS);

const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, url: "https://facebook.com" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
  { name: "Twitter", icon: FaTwitter, url: "https://twitter.com" },
  { name: "YouTube", icon: FaYoutube, url: "https://youtube.com" }
];

export default function KundliNavbar() {
  const [openNavbar, setopenNavbar] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const isLoggedIn = false;

  const handleOpenLogin = () => setIsLoginOpen(true);
  const handleClose = () => setIsLoginOpen(false);

  useEffect(
    () => {
      if (openNavbar || isLoginOpen) {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }

      return () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      };
    },
    [openNavbar, isLoginOpen]
  );

  const currentroute = usePathname();

  const isActiveRoute = href => {
    if (href === "/") return currentroute === "/";
    return currentroute.startsWith(href);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full pt-2">
      <div className="w-full min-h-7 pt-[16px]">
        <div className="mx-auto hidden md:flex max-w-[1540px] flex-wrap items-center justify-center gap-[10px] px-[22px]">
          {TOP_LINKS.map((link, index) =>
            <div key={link.label} className="flex items-center gap-[10px]">
              <Link
                href={link.href}
                className="link_hover hover:text-primary text-[12px] font-normal leading-none tracking-[0.01em] text-white/90 no-underline"
              >
                {link.label}
              </Link>
              {index < TOP_LINKS.length - 1 &&
                <span className="text-[12px] leading-none text-white/70">
                  |
                </span>}
            </div>
          )}
        </div>

        <div className="block md:hidden">
          <Marquee speed={20}>
            {TOP_LINKS.map((link, index) =>
              <div key={link.label} className="flex items-center gap-[10px]">
                <Link
                  href={link.href}
                  className="link_hover hover:text-primary text-[12px] font-normal leading-none tracking-[0.01em] text-white/90 no-underline"
                >
                  {link.label}
                </Link>
                {index < TOP_LINKS.length - 1 &&
                  <span className="text-[12px] leading-none text-white/70 me-2">
                    |
                  </span>}
              </div>
            )}
          </Marquee>
        </div>
      </div>

      <div className="mt-3 md:mt-6 flex w-full justify-center px-2 md:px-[22px]">
        <nav className="py-3 md:py-0 md:min-h-[84px] w-full max-w-[1540px] items-center rounded-[40px] md:rounded-[28px] border border-white/20 bg-[linear-gradient(180deg,rgba(11,11,11,0.96)_0%,rgba(12,12,12,0.9)_100%)] px-[34px] shadow-[0_18px_40px_rgba(0,0,0,0.32),inset_0_0_24px_rgba(255,255,255,0.02)] backdrop-blur-[10px] flex items-center justify-center">
          <div className="flex items-center justify-between md:grid grid-cols-[1fr_auto_1fr] md:max-w-[85%] 2xl:max-w-[80%] md:mx-auto w-full">
            <div className="block lg:hidden">
              {openNavbar
                ? <RiCloseLargeLine
                  className="text-primary text-2xl"
                  onClick={() => setopenNavbar(false)}
                />
                : <SlMenu
                  className="text-primary text-2xl"
                  onClick={() => setopenNavbar(true)}
                />}
            </div>
            {/* LEFT */}
            <div className="hidden lg:flex items-center justify-end xl:justify-start gap-3 xl:gap-6 2xl:gap-10">
              {LEFT_LINKS.map(link => {
                const isActive = isActiveRoute(link.href);

                return (
                  <div key={link.label} className="relative">
                    {link.isComingSoon &&
                      <span className="absolute -top-4 left-0 text-[10px] px-2 py-[2px] rounded bg-red-500 text-white animate-pulse whitespace-nowrap">
                        Coming Soon
                      </span>}

                    <Link
                      href={link.isComingSoon ? "#" : link.href}
                      onClick={e => {
                        if (link.isComingSoon) e.preventDefault();
                      }}
                      className={`relative hover:text-primary transition-all duration-500 hover:!underline !underline-offset-8 whitespace-nowrap text-[17px] font-bold ${isActive
                        ? "text-primary !underline"
                        : "text-white"}`}
                    >
                      {link.label}
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* LOGO */}
            <div className="flex xl:min-w-[230px] items-center justify-center px-3 md:px-6">
              <Link
                href="/"
                className="whitespace-nowrap text-[33px] font-bold leading-none text-primary"
              >
                ई-Pandit jee
              </Link>
            </div>

            {/* RIGHT */}
            <div className="hidden lg:flex items-center justify-end gap-3 xl:gap-6 2xl:gap-10 max-[1280px]:gap-6">
              {RIGHT_LINKS.map(link => {
                const isActive = isActiveRoute(link.href);

                return (
                  <div key={link.label} className="relative">
                    {link.isComingSoon &&
                      <span className="absolute -top-4 left-0 text-[10px] px-2 py-[2px] rounded bg-red-500 text-white animate-pulse whitespace-nowrap">
                        Coming Soon
                      </span>}

                    <Link
                      href={link.isComingSoon ? "#" : link.href}
                      onClick={e => {
                        if (link.isComingSoon) e.preventDefault();
                      }}
                      className={`relative hover:text-primary transition-all duration-500 hover:!underline !underline-offset-8 whitespace-nowrap text-[17px] font-bold ${isActive
                        ? "text-primary !underline"
                        : "text-white"}`}
                    >
                      {link.label}
                    </Link>
                  </div>
                );
              })}

              <button
                type="button"
                onClick={handleOpenLogin}
                className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[16px] border-[1.5px] border-primary bg-transparent px-[18px] pl-4 text-[14px] font-medium leading-none text-primary"
              >
                <User size={15} strokeWidth={2.2} />
                <span>Login</span>
              </button>
            </div>
            <div
              className={`block 2xl:hidden border-t-2 border-primary fixed inset-x-0 top-15.5 h-[calc(100dvh-3.875rem)] overflow-y-auto overflow-x-hidden bg-[linear-gradient(180deg,rgba(11,11,11,0.96)_0%,rgba(12,12,12,0.9)_100%)] transition-transform duration-500 ${
                openNavbar ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex flex-col gap-y-6 pt-8 px-8 ">
                {MOBILE_LINKS.map((link) => {
                  const isActive = link.href === currentroute;
                  return (
                    <div key={link.label} className="relative">
                      {link.isComingSoon &&
                        <span className="absolute -top-12 left-22 text-[10px] px-2 py-[2px] rounded bg-red-500 text-white animate-pulse whitespace-nowrap">
                          Coming Soon
                        </span>}

                      <Link
                        href={link.isComingSoon ? "#" : link.href}
                        onClick={e => {
                          if (link.isComingSoon) e.preventDefault();
                        }}
                        className={`relative hover:text-primary transition-all duration-500 hover:!underline !underline-offset-8 whitespace-nowrap text-[17px] font-bold ${isActive
                          ? "text-primary !underline"
                          : "text-white"}`}
                      >
                        {link.label}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 pt-10 px-8 ">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary transition hover:bg-primary hover:text-black"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="block lg:hidden flex justify-end">
              {isLoggedIn ? (
                <FaUser className="text-primary text-2xl" />
              ) : (
                <button
                  type="button"
                  onClick={handleOpenLogin}
                  className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-[12px] border border-primary bg-transparent px-3 text-[13px] font-medium leading-none text-primary"
                >
                  <User size={14} strokeWidth={2.1} />
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>

      <LoginPopup isOpen={isLoginOpen} onClose={handleClose} />
    </header>
  );
}
