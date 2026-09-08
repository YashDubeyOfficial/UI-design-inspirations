import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>♥ Designed with toppers, teachers and parents ♥</div>
      <h1>AI that serves<br /><span>humans first.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs handled with care</strong> — explainable parsing you can inspect, controls you can override, and encouragement when the timer bites.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Meet your helper →</a>
        <a href="#how" className={styles.btn}>Our principles</a>
      </div>
    </div>
  );
}
