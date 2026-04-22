import Image from "next/image";
import styles from "@/styles/components/OurServicesSection.module.css";
import Link from "next/link";


const services = [
  {
    title: "Kundli",
    image: "/assets/kundli.png",
    href: "/kundli",
  },
  {
    title: "Numerology",
    image: "/assets/numerology.png",
    href: "/numerology",
  },
  {
    title: "Match Making",
    image: "/assets/match-making.png",
    href: "/match-making",

  },
  {
    title: "Remedy",
    image: "/assets/remedy.png",
    href: "/remedy",
  },
];

export default function OurServicesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.smallLabel}>Click To Choose</p>

        <h2 className={styles.heading}>Our Services</h2>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>

        <div className={styles.cardsGrid}>
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={240}
                  height={240}
                  className={styles.cardImage}
                />
              </div>
              <p className={styles.cardTitle}>{service.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}