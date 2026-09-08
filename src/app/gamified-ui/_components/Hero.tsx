import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>★ LVL 1 · 0 XP · 3 LIVES (MOCKS) ★</div>
      <h1>LEVEL UP<br /><span>YOUR RANK.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs as quests</strong> — XP per answer, streaks per section, boss timer per mock. Grind gloriously toward selection.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>▶ START QUEST →</a>
        <a href="#how" className={styles.btn}>VIEW LEADERBOARD</a>
      </div>
    </div>
  );
}
