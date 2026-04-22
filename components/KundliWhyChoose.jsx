import styles from "@/styles/components/KundliWhyChoose.module.css";

export default function KundliWhyChoose() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.topBlock}>
          <h2 className={styles.heading}>Why Choose e-Pandit Ji ?</h2>

          <h3 className={styles.subHeading}>Get Accurate Kundli Instantly</h3>

          <p className={styles.description}>
            We combine traditional Vedic astrology with modern technology to
            deliver quick and precise Kundli reports.
          </p>

          <ul className={styles.list}>
            <li>Accurate and instant Kundli generation</li>
            <li>Easy-to-use online platform</li>
            <li>Detailed analysis with clear explanations</li>
            <li>Trusted Vedic astrology calculations</li>
            <li>Expert guidance and remedies</li>
          </ul>
        </div>

        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaHeading}>
            Make Your <span>Kundli</span> Today
          </h2>

          <p className={styles.ctaText}>
            Take the first step toward understanding your future. Enter your
            birth details and get your personalized Kundli report instantly.
          </p>

          <p className={styles.ctaSubText}>
            Find compatibility. Build trust. Begin your journey together.
          </p>

          <button className={styles.button}>Get Started Now</button>

          <p className={styles.meta}>100% private | Fast delivery</p>
        </div>
      </div>
    </section>
  );
}