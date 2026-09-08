import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>✎ drawn with a shaky hand, checked twice ✎</div>
      <h1>Wobbly lines,<br /><span>steady exam!</span></h1>
      <p className={styles.sub}>Your <strong>PYQs, doodled into existence</strong> — sketchy boxes, hand-drawn arrows, circled answers. Looks erasable. Is unshakeable.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Scribble PDF →</a>
        <a href="#how" className={styles.btn}>See sketch</a>
      </div>
    </div>
  );
}
