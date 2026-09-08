import styles from "../page.module.css";

const items = ["JEE", "NEET", "UPSC", "GATE", "SSC", "Banking", "CAT", "CUET"];

export default function Strip() {
  return (
    <div className={styles.strip}>
      <div className={styles["strip-inner"]}>
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
