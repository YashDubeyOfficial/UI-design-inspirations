import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Ambience 40% · Focus 100% · Lights low</div>
      <h1>The room hums.<br /><span>You answer.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs dissolved into evening light</strong> — a violet-hazed CBT where the timer glows like dusk and the palette breathes slowly.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Dim lights →</a>
        <a href="#how" className={styles.btn}>Feel the room</a>
      </div>
    </div>
  );
}
