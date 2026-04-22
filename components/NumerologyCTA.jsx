import styles from "@/styles/components/NumerologyCTA.module.css";

export default function NumerologyCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <h2 className={styles.heading}>
          Start Your <span>Numerology</span> Today
        </h2>

        <p className={styles.text}>
          Take the first step towards a successful and harmonious numerology
          life. Enter your details and let E-Pandit Ji guide you with accurate
          numerology insights.
        </p>

        <p className={styles.subText}>
          Find compatibility. Build trust. Begin your journey together.
        </p>

        <button className={styles.button}>Get Started Now</button>

        <p className={styles.meta}>100% private | Fast delivery</p>
      </div>
    </section>
  );
}