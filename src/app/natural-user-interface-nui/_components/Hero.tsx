import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>✋ wave to begin · nod to confirm · blink to submit (almost)</div>
      <h1>The most natural<br /><span>interface is practice.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs with zero learning curve</strong> — point at answers, glance through sections, speak to the timer. It feels like paper because it behaves like the world.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Wave hello →</a>
        <a href="#how" className={styles.btn}>Try gestures</a>
      </div>
    </div>
  );
}
