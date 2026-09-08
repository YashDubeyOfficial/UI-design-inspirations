import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>● PLAYER 1 READY · 3 CREDITS · NO CONTINUES NEEDED</div>
      <h1>Press start<br /><span>to mock.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs loaded like a cartridge</strong> — blown on once, seated firmly — into a console CBT with combo timer and achievement palette.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>▶ START →</a>
        <a href="#how" className={styles.btn}>OPTIONS</a>
      </div>
    </div>
  );
}
