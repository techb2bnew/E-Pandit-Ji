import Image from "next/image";
import styles from "@/styles/components/KundliHero.module.css";

export default function KundliHero() {

  return (
    <section className={styles.hero}>
      {/* Background image */}
      <div className={styles.bg}></div>

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <p className={styles.trusted}>Trusted By 10k+ Users...</p>

          <h1 >
            Create Your Accurate
            <br />
            Kundli Instantly
          </h1>

          <p className={styles.desc}>
            Get your detailed birth chart (Janam Kundli) with precise Vedic
            calculations. Understand your future, career, marriage, and life
            path.
          </p>

          {/* <button className={styles.cta} href="#kundliFormSection">
            Get Started Now
          </button> */}
          <button
            className={styles.cta}
            onClick={() => {
              document.getElementById("kundliFormSection")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Get Started Now
          </button>
          <p className={styles.meta}>100% private | Fast delivery</p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <div className={styles.imageWrap}>
            <Image
              src="/assets/kundli-2.png"
              alt="Kundli"
              fill
              priority
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}