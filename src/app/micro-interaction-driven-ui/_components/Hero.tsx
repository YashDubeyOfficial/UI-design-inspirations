import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Hover me · Press me · Watch closely</div>
      <h1>Small moments.<br /><span>Big exam.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs with a thousand tiny delights</strong> — buttons that acknowledge, toggles that confirm, a timer that ticks visibly. Nothing moves without meaning.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Press PDF →</a>
        <a href="#how" className={styles.btn}>Hover first</a>
      </div>
    </div>
  );
}
