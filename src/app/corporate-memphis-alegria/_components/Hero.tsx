import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>People-shaped blobs · Big smiles · Bigger deadlines</div>
      <h1>Diverse blobs.<br /><span>One deadline.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs high-fived by flat vector people</strong> — long limbs, bigger smiles — pointing at a CBT with real timer discipline.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>High-five PDF →</a>
        <a href="#how" className={styles.btn}>Meet the blobs</a>
      </div>
    </div>
  );
}
