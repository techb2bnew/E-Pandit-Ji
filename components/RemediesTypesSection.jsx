"use client";

import { useState } from "react";
import styles from "@/styles/components/RemediesTypesSection.module.css";

const TABS = [
  "Puja & Rituals",
  "Gemstone Suggestions",
  "Mantra & Chanting",
  "Yantra & Spiritual Tools",
  "Simple Daily Remedies",
];

export default function RemediesTypesSection() {
  const [activeTab, setActiveTab] = useState("Puja & Rituals");

  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <h2 className={styles.heading}>Types of Remedies We Offer</h2>

        <div className={styles.tabRow}>
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`${styles.tabBtn} ${
                activeTab === tab ? styles.active : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          <h3 className={styles.subHeading}>What Are Puja & Rituals?</h3>

          <p className={styles.highlightText}>
            Puja and rituals are sacred Vedic practices performed to balance
            planetary energies, remove doshas, and bring positivity into life.
            These rituals help reduce negative influences and attract success,
            peace, and prosperity.
          </p>

          <div className={styles.grid}>
            <div className={styles.leftCol}>
              <h4>Types of Puja & Rituals</h4>

              <div className={styles.group}>
                <h5>1. Dosha Nivaran Puja</h5>
                <ul>
                  <li>Mangal Dosha Puja</li>
                  <li>Kaal Sarp Dosha Puja</li>
                  <li>Pitra Dosha Puja</li>
                </ul>
                <p>Removes negative planetary effects and life obstacles</p>
              </div>

              <div className={styles.group}>
                <h5>2. Graha Shanti Puja (Planetary Puja)</h5>
                <ul>
                  <li>Navgraha Shanti Puja</li>
                  <li>Shani Shanti Puja</li>
                  <li>Rahu-Ketu Shanti Puja</li>
                </ul>
                <p>Balances weak or malefic planets</p>
              </div>

              <div className={styles.group}>
                <h5>3. Prosperity & Wealth Puja</h5>
                <ul>
                  <li>Lakshmi Puja</li>
                  <li>Kuber Puja</li>
                </ul>
                <p>Attracts money, success, and financial growth</p>
              </div>

              <div className={styles.group}>
                <h5>4. Marriage & Relationship Puja</h5>
                <ul>
                  <li>Vivah Puja</li>
                  <li>Gauri Shankar Puja</li>
                </ul>
                <p>Helps in marriage delays and relationship harmony</p>
              </div>

              <div className={styles.group}>
                <h5>5. Health & Protection Puja</h5>
                <ul>
                  <li>Maha Mrityunjaya Jaap</li>
                  <li>Hanuman Puja</li>
                </ul>
                <p>Improves health and removes negative energies</p>
              </div>

              <div className={styles.group}>
                <h5>6. Career & Success Puja</h5>
                <ul>
                  <li>Saraswati Puja</li>
                  <li>Ganesh Puja</li>
                </ul>
                <p>Enhances career growth, education, and success</p>
              </div>
            </div>

            <div className={styles.rightCol}>
              <div className={styles.infoBlock}>
                <h4>Key Points</h4>
                <ul>
                  <li>Performed on auspicious dates (Muhurat)</li>
                  <li>Can be done online/offline</li>
                  <li>Guided by expert astrologers</li>
                  <li>Based on Kundli analysis</li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h4>Benefits of Puja & Rituals</h4>
                <ul>
                  <li>Removes negative energy</li>
                  <li>Improves financial condition</li>
                  <li>Strengthens relationships</li>
                  <li>Brings peace and mental clarity</li>
                  <li>Helps in career and growth</li>
                  <li>Protects from unseen obstacles</li>
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h4>Who Should Do Puja?</h4>
                <ul>
                  <li>Facing continuous problems</li>
                  <li>Delays in marriage or career</li>
                  <li>Financial instability</li>
                  <li>Health issues</li>
                  <li>Negative energy or stress</li>
                </ul>
              </div>

              <button className={styles.ctaBtn}>Get My Puja Recommendation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}