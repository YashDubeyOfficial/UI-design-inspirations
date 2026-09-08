import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>parakh@hall:~$ uptime: 40s · load: 90Qs</div>
      <h1>$ sudo attempt<br /><span>--real</span></h1>
      <p className={styles.sub}>Your <strong>PYQs piped through stdout</strong> — grep the questions, awk the marking, tee the timer. Root access to your own preparation.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>$ run →</a>
        <a href="#how" className={styles.btn}>man parakh</a>
      </div>
    </div>
  );
}
