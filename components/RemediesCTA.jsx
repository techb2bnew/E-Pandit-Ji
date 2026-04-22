import styles from "@/styles/components/RemediesCTA.module.css";

export default function RemediesCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <h2 className={styles.heading}>
          Start Your <span>Journey</span> Today
        </h2>

        <p className={styles.text}>
          Discover your true path. Understand your destiny. Start your journey
          with e-Pandit Ji today.
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