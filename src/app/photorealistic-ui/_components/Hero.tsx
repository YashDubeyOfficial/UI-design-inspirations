import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Golden hour · f/1.8 · Available light only</div>
      <h1>Real light,<br /><span>real pressure.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs photographed at golden hour</strong> — warm shadows, true textures, honest grain — wrapped around an exact NTA-spec CBT.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Capture PDF →</a>
        <a href="#how" className={styles.btn}>View contact sheet</a>
      </div>
    </div>
  );
}
