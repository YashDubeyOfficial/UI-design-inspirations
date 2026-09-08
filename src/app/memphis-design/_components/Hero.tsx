import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>▲ ● ■ squiggles approved ● ■ ▲</div>
      <h1>Serious exam.<br /><span>Silly shapes.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs in full Memphis Milano</strong> — squiggles, dots, clashing brights — wrapped around a CBT with perfect manners.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Play PDF →</a>
        <a href="#how" className={styles.btn}>See shapes</a>
      </div>
    </div>
  );
}
