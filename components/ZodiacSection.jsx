import Image from "next/image";
import styles from "@/styles/components/ZodiacSection.module.css";

const zodiacCards = [
  {
    name: "Leo",
    image: "/assets/leo.png",
  },
  {
    name: "Virgo",
    image: "/assets/virgo.png",
    active: true,
  },
  {
    name: "libra",
    image: "/assets/libra.png",
  },
  {
    name: "Scorpio",
    image: "/assets/scorpio.png",
  },
];

const stats = [
  {
    image: "/assets/stat-1.png",
    alt: "Trusted by Million Clients",
    label: "Trusted by\nMillion Clients",
  },
  {
    image: "/assets/stat-2.png",
    alt: "Years of Experience",
    label: "Years of Experience",
  },
  {
    image: "/assets/stat-3.png",
    alt: "Types of Horoscopes",
    label: "Types of Horoscopes",
  },
  {
    image: "/assets/stat-4.png",
    alt: "Qualified Astrologers",
    label: "Qualified Astrologers",

  },
  {
    image: "/assets/stat-4.png",
    alt: "Success Horoscope",
    label: "Success Horoscope", 
  },
];

export default function ZodiacSection() {
  return (
    <section className={styles.section}>
      {/* Background video */}
      <div className={styles.bgVideoWrap}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={styles.bgVideo}
        >
          <source
            src="/assets/videos/0_Space_Planet_3840x2160.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        {/* Top content */}
        <div className={styles.topRow}>
          <div className={styles.leftContent}>
            <p className={styles.smallLabel}>Click To Choose</p>
            <h2 className={styles.heading}>Choose Your Zodiac Sign</h2>
            <h3 className={styles.subHeading}>
              Know What Your Horoscope Sign Says About You
            </h3>
            <p className={styles.description}>
              Click on your Rashi to know about your Personality, Traits, Life
              Predictions, and Remedies — including Daily, Weekly, Monthly, and
              Yearly Horoscope 2026 insights!
            </p>
          </div>

          <div className={styles.rightButtons}>
            <button className={styles.filterButton}>Daily Horoscope</button>
            <button className={styles.filterButton}>Weekly Horoscope</button>
            <button className={styles.filterButton}>Monthly Horoscope</button>
            <button className={`${styles.filterButton} ${styles.outlineButton}`}>
              Yearly Horoscope
            </button>
          </div>
        </div>

        {/* Zodiac cards area */}
        <div className={styles.cardsRow}>
          <button className={styles.navButton} aria-label="Previous zodiac">
            ←
          </button>

          <div className={styles.cardsGrid}>
            {zodiacCards.map((card) => (
              <div
                key={card.name}
                className={`${styles.zodiacCard} ${
                  card.active ? styles.activeCard : ""
                }`}
              >
                <div className={styles.cardImageWrap}>
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={180}
                    height={180}
                    className={styles.cardImage}
                  />
                </div>
                <p className={styles.cardTitle}>{card.name}</p>
              </div>
            ))}
          </div>

          <button className={styles.navButton} aria-label="Next zodiac">
            →
          </button>
        </div>

        {/* Bottom stats */}
       <div className={styles.statsRow}>
        {stats.map((item, index) => (
          <div key={index} className={styles.statItem}>
            <img
              src={item.image}
              alt={item.alt}
              className={styles.statImage}
            />
            <p className={styles.statLabel}>{item.label}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}


