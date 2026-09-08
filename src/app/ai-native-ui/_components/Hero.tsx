import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>✦ AI-NATIVE · INTELLIGENCE IS THE MATERIAL ✦</div>
      <h1>Not AI-powered.<br /><span>AI-composed.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs inside intelligence itself</strong> — no AI button, no chatbot bolted on. Every pixel already knows what you are preparing for.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Think PDF →</a>
        <a href="#how" className={styles.btn}>Meet the mind</a>
      </div>
    </div>
  );
}
