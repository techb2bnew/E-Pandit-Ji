import Link from "next/link";
import styles from "@/styles/components/Footer.module.css";

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "kundli", href: "/kundli" },
  { label: "Numerology", href: "/numerology" },
  { label: "Match making", href: "/match-making" },
  { label: "Panchang", href: "/panchang" },
  { label: "Remedy", href: "/remedy" },
  { label: "Vastu", href: "/vastu" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}></div>
      <div className={styles.planet}></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <h2 className={styles.logo}>ई-Pandit ji</h2>

            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className={styles.socials}>
              <a href="#" className={`${styles.socialLink} ${styles.activeSocial}`} aria-label="LinkedIn">
                <span aria-hidden="true">in</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <span aria-hidden="true">f</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <span aria-hidden="true">📸</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <span aria-hidden="true">▶</span>
              </a>
            </div>
          </div>

          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>UseFul Links</h3>
            <div className={styles.linkList}>
              {usefulLinks.map((item) => (
                <Link key={item.label} href={item.href} className={styles.footerLink}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Our Services</h3>
            <div className={styles.linkList}>
              {serviceLinks.map((item) => (
                <Link key={item.label} href={item.href} className={styles.footerLink}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Contact Us</h3>

            <div className={styles.contactBlock}>
              <p className={styles.contactLabel}>Number</p>
              <a href="tel:0987654321" className={styles.contactText}>
                0987654321
              </a>
            </div>

            <div className={styles.contactBlock}>
              <p className={styles.contactLabel}>Email</p>
              <a href="mailto:info@e-panditji.com.au" className={styles.contactText}>
                info@e-panditji.com.au
              </a>
            </div>

            <div className={styles.contactBlock}>
              <p className={styles.contactLabel}>Address</p>
              <p className={styles.contactText}>enter here company 123address</p>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copy}>
            ©2026 All Rights Reserved | pandit ji | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}