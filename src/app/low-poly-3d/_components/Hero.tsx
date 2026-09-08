import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Low-Poly 3D · Faceted · Sharp</div>
      <h1>Cut the PDF. <span>Keep the edge.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong>, faceted into a crystalline CBT. Hard edges, brilliant clarity, zero blur.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it cuts</a>
      </div>
      <div className={styles["facet-row"]}><span className={styles.facet}></span><span className={`${styles.facet} ${styles.f2}`}></span><span className={`${styles.facet} ${styles.f3}`}></span></div>
    </div>
  );
}
