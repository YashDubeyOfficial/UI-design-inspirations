import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>🎙 LISTENING… (politely) · SAY “START MOCK”</div>
      <h1>Just<br /><span>say it.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs by voice command</strong> — “upload physics paper”, “give me 90 questions”, “start timer” — with a full visual CBT underneath for the attempting.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>🎙 Upload by voice →</a>
        <a href="#how" className={styles.btn}>See commands</a>
      </div>
    </div>
  );
}
