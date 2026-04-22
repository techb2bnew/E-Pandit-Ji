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
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
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
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
      }}
    >
      {/* Top strip - desktop only */}
      <div className="navbar-top-strip">
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          {TOP_LINKS.map((link, index) => (
            <div
              key={link.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <Link
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.82)",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  fontFamily: "Raleway, sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </Link>

              {index < TOP_LINKS.length - 1 && (
                <span style={{ color: "rgba(255,255,255,0.22)" }}>|</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="navbar-desktop-wrap">
        <nav
          style={{
            width: "100%",
            maxWidth: "1540px",
            minHeight: "92px",
            borderRadius: "34px",
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.96) 0%, rgba(12,12,12,0.92) 100%)",
            border: "1px solid rgba(255,255,255,0.22)",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.45), inset 0 0 30px rgba(255,255,255,0.03)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 34px",
          }}
        >
          {/* Left */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "38px",
              flex: 1,
            }}
          >
            {LEFT_LINKS.map((link) => {
              const isActive = link.label === "Home";

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    position: "relative",
                    color: isActive ? "#F5C518" : "#FFFFFF",
                    textDecoration: "none",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    paddingBottom: "8px",
                  }}
                >
                  {link.label}

                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: "58px",
                        height: "3px",
                        borderRadius: "10px",
                        background: "#F5C518",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Center logo */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "280px",
              padding: "0 20px",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  color: "#F5C518",
                  fontFamily: "Cinzel, serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  whiteSpace: "nowrap",
                }}
              >
                ई-Pandit ji
              </span>
            </Link>
          </div>

          {/* Right */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "34px",
              flex: 1,
            }}
          >
            {RIGHT_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontFamily: "Raleway, sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </Link>
            ))}

            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                height: "46px",
                padding: "0 22px",
                borderRadius: "999px",
                border: "1.5px solid #F5C518",
                background: "transparent",
                color: "#F5C518",
                cursor: "pointer",
                fontFamily: "Raleway, sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              <User size={16} />
              Login
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="navbar-mobile-wrap">
        <div className="navbar-mobile-bar">
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="navbar-mobile-logo">ई-Pandit ji</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="navbar-mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="navbar-mobile-menu">
            {allMobileLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="navbar-mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <button className="navbar-mobile-login">
              <User size={16} />
              Login
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .navbar-top-strip {
          width: 100%;
          background: rgba(7, 7, 25, 0.92);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 14px 24px;
        }

        .navbar-desktop-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 36px;
          padding: 0 24px;
        }

        .navbar-mobile-wrap {
          display: none;
        }

        @media (max-width: 991px) {
          .navbar-top-strip,
          .navbar-desktop-wrap {
            display: none;
          }

          .navbar-mobile-wrap {
            display: block;
            padding: 16px;
          }

          .navbar-mobile-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 68px;
            padding: 0 18px;
            border-radius: 20px;
            background: linear-gradient(
              180deg,
              rgba(10, 10, 10, 0.96) 0%,
              rgba(12, 12, 12, 0.92) 100%
            );
            border: 1px solid rgba(255, 255, 255, 0.18);
            box-shadow: 0 14px 35px rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }

          .navbar-mobile-logo {
            color: #f5c518;
            font-family: "Cinzel", serif;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 0.02em;
            white-space: nowrap;
          }

          .navbar-mobile-toggle {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            border: 1px solid rgba(245, 197, 24, 0.5);
            background: transparent;
            color: #f5c518;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .navbar-mobile-menu {
            margin-top: 12px;
            padding: 14px;
            border-radius: 20px;
            background: rgba(8, 8, 18, 0.96);
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: 0 14px 35px rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .navbar-mobile-link {
            color: #ffffff;
            text-decoration: none;
            font-family: "Raleway", sans-serif;
            font-size: 16px;
            font-weight: 700;
            padding: 12px 10px;
            border-radius: 12px;
          }

          .navbar-mobile-link:hover {
            background: rgba(255, 255, 255, 0.05);
          }

          .navbar-mobile-login {
            margin-top: 8px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            height: 44px;
            border-radius: 999px;
            border: 1.5px solid #f5c518;
            background: transparent;
            color: #f5c518;
            cursor: pointer;
            font-family: "Raleway", sans-serif;
            font-size: 15px;
            font-weight: 700;
          }
        }
      `}</style>
    </header>
  );
}