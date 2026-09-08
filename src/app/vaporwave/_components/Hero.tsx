import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>ＡＥＳＴＨＥＴＩＣ ·  hall.exe</div>
      <h1>Your PDF, but<br /><span>it is 1989 forever.</span></h1>
      <p className={styles.sub}>Your <strong>scanned memories</strong> slowed to mallsoft — a sunset-grid CBT where the timer melts and the palette glows pink.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Enter the mall →</a>
        <a href="#how" className={styles.btn}>Stay nostalgic</a>
      </div>
    </div>
  );
}
