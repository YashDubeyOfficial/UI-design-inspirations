import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Soft Brutalism · Chunky · Kind</div>
      <h1>Strong shapes,<br /><span>soft heart.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and question banks</strong> in chunky rounded frames with gentle colors. Brutalist bones, marshmallow manners.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF →</a>
        <a href="#how" className={styles.btn}>Feel it</a>
      </div>
    </div>
  );
}
