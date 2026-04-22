import Image from "next/image";
import styles from "@/styles/components/RemediesIntro.module.css";

export default function RemediesIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/assets/remedies-intro.png"
              alt="What are astrological remedies"
              fill
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.contentCol}>
          <h2 className={styles.heading}>
            What Are Astrological
            <br />
            Remedies?
          </h2>

          <p className={styles.text}>
            At e-Pandit Ji, we provide trusted and effective remedies based on
            Vedic astrology principles. These remedies are designed to reduce
            the negative effects of planetary positions and enhance positive
            influences in your life.
          </p>

          <p className={styles.text}>
            Whether you are facing issues in career, marriage, health, or
            finances, our remedies help restore balance and guide you toward
            success and peace.
          </p>
        </div>
      </div>
    </section>
  );
}