import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Fluid UI · Pour · Flow · Attempt</div>
      <h1>Pour it in.<br /><span>Flow it out.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs like water</strong> — currents of questions, eddies of marking, a timer that ripples. Drinkable exam pressure.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Pour PDF →</a>
        <a href="#how" className={styles.btn}>Test waters</a>
      </div>
    </div>
  );
}
