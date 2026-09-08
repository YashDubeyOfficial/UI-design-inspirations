import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Grown from seed #42 · watered daily</div>
      <h1>Planted papers,<br /><span>harvested halls.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs as seeds</strong> — watered by algorithms into organic layouts where timer vines and palette leaves arrange themselves.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Plant PDF →</a>
        <a href="#how" className={styles.btn}>Tour garden</a>
      </div>
    </div>
  );
}
