import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>SYS.MODULAR // 90 MODULES DETECTED</div>
      <h1>Snap together<br /><span>your hall.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs as hot-swappable modules</strong> — MOD-01 timer, MOD-02 palette, MOD-90 analysis. Click together, attempt immediately.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Assemble PDF →</a>
        <a href="#how" className={styles.btn}>Browse modules</a>
      </div>
    </div>
  );
}
