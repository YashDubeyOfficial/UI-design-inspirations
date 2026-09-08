import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Parakh is typing… always something useful</div>
      <h1>A chat that<br /><span>actually tests you.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs as a conversation</strong> — the mock messages you questions, reacts to answers, nudges on marking. Стрict underneath, chatty on top.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Start chatting →</a>
        <a href="#how" className={styles.btn}>See thread</a>
      </div>
    </div>
  );
}
