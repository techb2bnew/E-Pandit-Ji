import NumerologyResultCard from "./NumerologyResultCard";
import styles from "@/styles/components/NumerologyToolSection.module.css";

export default function NumerologyToolSection({
  title,
  fields = [],
  buttonText,
  resultItems = [],
  compact = false,
  bgImage,
}) {
  return (
    <section className={`${styles.section} ${compact ? styles.compact : ""}`}
      style={{
          backgroundImage: `url(${bgImage})`, // 👈 APPLY HERE
        }}
    >
      
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>{title}</h2>

          <form className={styles.form}>
            <div
              className={`${styles.fields} ${
                fields.length <= 2
                  ? styles.twoCols
                  : fields.length <= 4
                  ? styles.twoRows
                  : styles.threeCols
              }`}
            >
              {fields.map((field, index) => {
                if (field.type === "select") {
                  return (
                    <div className={styles.field} key={index}>
                      <label>{field.label}</label>
                      <select defaultValue="">
                        <option value="" disabled>
                          {field.placeholder}
                        </option>
                        {(field.options || []).map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  );
                }

                return (
                  <div className={styles.field} key={index}>
                    <label>{field.label}</label>
                    <input type="text" placeholder={field.placeholder} />
                  </div>
                );
              })}
            </div>

            <button type="submit" className={styles.button}>
              {buttonText}
            </button>
          </form>
        </div>

        <div className={styles.right}>
          <NumerologyResultCard items={resultItems} />
        </div>
      </div>
    </section>
  );
}