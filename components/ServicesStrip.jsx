import { ArrowRight, Stars, Sparkles, HeartHandshake, Flower2 } from "lucide-react";
import styles from "@/styles/components/ServicesStrip.module.css";

const services = [
  {
    title: "Kundli",
    icon: <Stars size={24} strokeWidth={2.2} />,
  },
  {
    title: "Numerology",
    icon: <Sparkles size={24} strokeWidth={2.2} />,
  },
  {
    title: "Match Making",
    icon: <HeartHandshake size={24} strokeWidth={2.2} />,
  },
  {
    title: "Remedy",
    icon: <Flower2 size={24} strokeWidth={2.2} />,
  },
];

export default function ServicesStrip() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.strip}>
        {services.map((service) => (
          <button key={service.title} className={styles.card}>
            <div className={styles.left}>
              <span className={styles.iconWrap}>{service.icon}</span>
              <span className={styles.title}>{service.title}</span>
            </div>

            <span className={styles.arrowWrap}>
              <ArrowRight size={24} strokeWidth={2.1} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}