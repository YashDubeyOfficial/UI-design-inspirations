import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>E</div>
      <h1>A<br /><span>B</span></h1>
      <p className={styles.sub}>S then</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Go</a>
        <a href="#how" className={styles.btn}>How</a>
      </div>
    </div>
  );
}
