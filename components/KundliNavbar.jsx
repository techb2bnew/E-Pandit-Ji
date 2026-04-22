"use client";

import Link from "next/link";
import { User } from "lucide-react";
import styles from "@/styles/components/KundliNavbar.module.css";

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
  return (
    <header className={styles.header}>
      <div className={styles.topStrip}>
        <div className={styles.topStripInner}>
          {TOP_LINKS.map((link, index) => (
            <div key={link.label} className={styles.topItem}>
              <Link href={link.href} className={styles.topLink}>
                {link.label}
              </Link>
              {index < TOP_LINKS.length - 1 && (
                <span className={styles.topDivider}>|</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.navWrap}>
        <nav className={styles.navbar}>
          <div className={styles.navLeft}>
            {LEFT_LINKS.map((link) => {
              const isActive = link.label === "Home";
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className={styles.logoWrap}>
            <Link href="/" className={styles.logo}>
              ई-Pandit ji
            </Link>
          </div>

          <div className={styles.navRight}>
            {RIGHT_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}

            <button type="button" className={styles.loginBtn}>
              <User size={15} strokeWidth={2.2} />
              <span>Login</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}