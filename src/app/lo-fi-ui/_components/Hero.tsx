import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Lo-Fi UI · Draft · Grayscale</div>
      <h1>Looks unfinished.<br /><span>Tests finished.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> in dashed gray boxes and placeholder bars. The fidelity is low; the exam fidelity is maximum.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF →</a>
        <a href="#how" className={styles.btn}>View wireframe</a>
      </div>
    </div>
  );
}
