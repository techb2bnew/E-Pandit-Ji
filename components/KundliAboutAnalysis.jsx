import Image from "next/image";
import styles from "@/styles/components/KundliAboutAnalysis.module.css";

export default function KundliAboutAnalysis() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
       

        <div className={styles.bottomGrid}>
          <div className={styles.leftImageWrap}>
            <div className={styles.imageBox}>
              <Image
                src="/assets/ganesh.png"
                alt="Ganesh Kundli"
                fill
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.rightContent}>
            <h3 className={styles.analysisHeading}>
              What We Analyze in
              <br />
              Your Kundli
            </h3>

            <p className={styles.analysisText}>
              Our Kundli creation process provides detailed insights into:
            </p>

            <ul className={styles.list}>
              <li>
                <strong>Lagna (Ascendant):</strong> Your personality and life
                direction
              </li>
              <li>
                <strong>Rashi (Moon Sign):</strong> Emotional nature and mindset
              </li>
              <li>
                <strong>Nakshatra:</strong> Your strengths and destiny patterns
              </li>
              <li>
                <strong>Planetary Positions:</strong> Influence of planets on
                your life
              </li>
              <li>
                <strong>Doshas (if any):</strong> Identify challenges and
                imbalances
              </li>
              <li>
                <strong>Dasha Periods:</strong> Timing of important life events
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}