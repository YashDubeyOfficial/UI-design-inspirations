import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Adapting to you: night owl · fast reader · JEE</div>
      <h1>It reshapes<br /><span>around you.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs in an interface that adapts</strong> — late night? It dims. Fast reader? It densifies. Struggling section? It offers hints.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Adapt PDF →</a>
        <a href="#how" className={styles.btn}>See adaptations</a>
      </div>
    </div>
  );
}
