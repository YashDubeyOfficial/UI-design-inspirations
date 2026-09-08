import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>♡ kawaii pressure ♡ blushing timer ♡</div>
      <h1>So cute,<br /><span>so strict.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs with sparkles and blush</strong> — a kawaii CBT where the timer says ganbatte and the palette hands out stickers for correct answers.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Hug PDF →</a>
        <a href="#how" className={styles.btn}>Be brave</a>
      </div>
    </div>
  );
}
