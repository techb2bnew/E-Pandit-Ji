import Image from "next/image";
import styles from "@/styles/components/Hero.module.css";

export default function Hero() {

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundMedia}>
        <video autoPlay muted loop playsInline className={styles.video}>
          <source
            src="/assets/videos/6575338_Spacecraft_Nature_3840x2160.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.welcomeBadge}>Welcome to Pandit Ji</div>

          <h1 className={styles.mainTitle}>
            Accurate Kundli & Instant Astrology Guidance
          </h1>

          <p className={styles.description}>
            From Kundli to Numerology-discover what the stars say about your
            life today.
          </p>

          <button
            className={styles.ctaBtn}   
            onClick={() => {
              document.getElementById("kundliFormSection")?.scrollIntoView({
                behavior: "smooth",
              });
            }}        
          >
           Get Customized Kundli
          </button>

        </div>

        <div className={styles.rightContent}>
          <div className={styles.zodiacCircle}></div>

          <div className={styles.bookContainer}>
            <Image
              src="/assets/kundli-book.png"
              alt="Premium Personalized Kundli"
              width={520}
              height={700}
              className={styles.bookImg}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}