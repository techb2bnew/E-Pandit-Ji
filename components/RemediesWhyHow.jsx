import styles from "@/styles/components/RemediesWhyHow.module.css";

export default function RemediesWhyHow() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.col}>
          <h2 className={styles.heading}>
            Why Choose e-Pandit Ji
            <br />
            Remedies
          </h2>

          <ul className={styles.list}>
            <li>Based on accurate Kundli analysis</li>
            <li>Simple and easy to follow</li>
            <li>Effective and result-oriented</li>
            <li>No harmful or complicated rituals</li>
            <li>Trusted Vedic practices</li>
          </ul>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.col}>
          <h2 className={styles.heading}>How It Works</h2>

          <ul className={styles.list}>
            <li>Enter your birth details</li>
            <li>We analyze your Kundli</li>
            <li>Identify doshas and issues</li>
            <li>Get personalized remedies instantly</li>
          </ul>
        </div>
      </div>
    </section>
  );
}