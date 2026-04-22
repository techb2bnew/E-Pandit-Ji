import Image from "next/image";
import styles from "@/styles/components/RemediesHero.module.css";

export default function RemediesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.kicker}>Powerful Astrological Solutions</p>

          <h1 className={styles.heading}>
            Effective Remedies to
            <br />
            Improve Your Life
          </h1>

          <p className={styles.description}>
            Overcome life challenges with simple and powerful Vedic remedies.
            Balance your energies, reduce doshas, and attract positivity.
          </p>

          <button className={styles.button}>Get Personalized Remedies</button>

          <p className={styles.meta}>100% private | Fast delivery</p>
        </div>

        <div className={styles.right}>
          {/* <div className={styles.circle}></div> */}
            <div className={styles.bgImage}></div>
          <div className={styles.imageWrap}>
            <Image
              src="/assets/remedies-hero.png"
              alt="Astrological remedies"
              fill
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}