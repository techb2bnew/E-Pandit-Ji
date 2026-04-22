import styles from "@/styles/components/Subscription.module.css";

const plans = [
  {
    tag: "Weekly",
    price: "300",
    duration: "/week",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  {
    tag: "Monthly",
    price: "1500",
    duration: "/month",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    featured: true,
  },
  {
    tag: "Yearly",
    price: "12000",
    duration: "/year",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
];

export default function Subscription() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.smallLabel}>Click To Choose</p>
        <h2 className={styles.heading}>Our Subscription</h2>

        <div className={styles.toggleRow}>
          <button className={`${styles.toggleBtn} ${styles.activeToggle}`}>
            Kundli
          </button>
          <button className={styles.toggleBtn}>Numerology</button>
        </div>

        <div className={styles.cardsGrid}>
          {plans.map((plan) => (
            <div
              key={plan.tag}
              className={`${styles.card} ${
                plan.featured ? styles.featuredCard : ""
              }`}
            >
              <div className={styles.tag}>{plan.tag}</div>

              <div className={styles.priceRow}>
                <span className={styles.currency}>₹</span>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.duration}>{plan.duration}</span>
              </div>

              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className={styles.features}>
                {plan.features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <span className={styles.featureIcon}>✿</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={styles.bookBtn}>Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}