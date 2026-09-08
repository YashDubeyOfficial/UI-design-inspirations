import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>🔊 SOUND ON · 🔆 BRIGHT · ✋ TOUCH EVERYTHING</div>
      <h1>LOUD COLORS.<br /><span>EXACT EXAM.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs with the volume up</strong> — warm amber timer that ticks audibly (in spirit), chunky palette you can feel, instructions with aroma. Probably.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Crank it →</a>
        <a href="#how" className={styles.btn}>Feel around</a>
      </div>
    </div>
  );
}
