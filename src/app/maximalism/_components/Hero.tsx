import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>★ MAXIMALISM ★ MORE IS MORE ★ 40s ★ FREE ★</div>
      <h1>EVERYTHING!<br /><span>EVERYWHERE! EXAM!</span></h1>
      <p className={styles.sub}>Your <strong>PYQs AND scans AND banks AND notes AND dreams</strong> — stickers, badges, sparkles, marquees — and underneath it ALL a deadly serious CBT!!!</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>GET IT ALL →</a>
        <a href="#how" className={styles.btn}>MORE PLEASE</a>
      </div>
    </div>
  );
}
