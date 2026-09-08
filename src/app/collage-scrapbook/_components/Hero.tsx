import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>★ CUT · TEAR · GLUE · EXAM ★</div>
      <h1>BEAUTIFUL MESS.<br /><span>EXACT EXAM.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs torn from magazines</strong> (metaphorically) and glued into a roaring CBT — washi, headlines, stickers — with NTA bones underneath.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Rip PDF →</a>
        <a href="#how" className={styles.btn}>See the mess</a>
      </div>
    </div>
  );
}
