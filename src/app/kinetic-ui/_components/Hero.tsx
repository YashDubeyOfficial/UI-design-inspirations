import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>SPEED LINES INCLUDED · HOLD ON</div>
      <h1>FASTER THAN<br /><span>YOUR SYLLABUS.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs at full velocity</strong> — skewed headlines, speed-line rules, italic everything — with a timer that visibly strains to keep up.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Accelerate PDF →</a>
        <a href="#how" className={styles.btn}>Catch breath</a>
      </div>
    </div>
  );
}
