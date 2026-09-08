import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>What is the outcome you want?</div>
      <h1>State the goal.<br /><span>Skip the steps.</span></h1>
      <p className={styles.sub}>Tell it <strong>“JEE-ready in 30 days”</strong> — it composes the papers, the marking, the schedule. You never touch a setting.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Declare intent →</a>
        <a href="#how" className={styles.btn}>See intents</a>
      </div>
    </div>
  );
}
