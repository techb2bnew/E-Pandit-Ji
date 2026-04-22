import styles from "@/styles/components/NumerologyResultCard.module.css";

export default function NumerologyResultCard({
  items = [],
  buttonText = "Continue",
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>Result</div>

      <div className={styles.body}>
        <div className={styles.content}>
          {items.map((item, index) => (
            <p key={index} className={styles.item}>
              <strong>{item.label}</strong>
              {item.value ? ` ${item.value}` : ""}
            </p>
          ))}
        </div>

        <button className={styles.button}>{buttonText}</button>
      </div>
    </div>
  );
}