import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Anti-Design · Clashing · Proud</div>
      <h1>TASTE IS OPTIONAL.<br /><span>ACCURACY IS NOT.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and ugly scans</strong> belong here. Clashing colors, loud type, zero alignment worship — and an exam engine sharper than the pretty ones.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>DUMP PDF HERE →</a>
        <a href="#how" className={styles.btn}>WHY SO LOUD</a>
      </div>
    </div>
  );
}
