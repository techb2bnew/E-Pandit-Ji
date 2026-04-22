import styles from "@/styles/components/NumerologyHero.module.css";

export default function NumerologyHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <p className={styles.trusted}>Trusted By 10k+ Users...</p>

        <h1 className={styles.heading}>
          Unlock the Power of <span>Numerology</span> in Your Life
        </h1>

        <p className={styles.description}>
          Discover your destiny through numbers. Get instant numerology reports
          powered by advanced API &amp; expert analysis.
        </p>

        <button className={styles.button}>Calculate My Number</button>

        <p className={styles.meta}>100% private | Fast delivery</p>
      </div>
    </section>
  );
}