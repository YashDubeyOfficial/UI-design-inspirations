import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>☁ softness: maximum · edges: none found ☁</div>
      <h1>Sink in.<br /><span>The exam holds you.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs on the softest interface ever shipped</strong> — cloud cards, marshmallow timer, duvet palette. Napping discouraged. Attempting required.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Fluff PDF →</a>
        <a href="#how" className={styles.btn}>Test softness</a>
      </div>
    </div>
  );
}
