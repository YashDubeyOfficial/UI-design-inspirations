import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}><i></i> Hyperreal 3D · Studio light · True hall</div>
      <h1>Shot like cinema. <span>Graded like NTA.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> under studio lighting — a photoreal CBT where every shadow, timer glow and palette state is rendered true.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>Behind scenes</a>
      </div>
      <div className={styles.spot}><i></i> KEY LIGHT 5600K · HALL GRADED</div>
    </div>
  );
}
