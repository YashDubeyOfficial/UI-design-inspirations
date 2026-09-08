import styles from "../page.module.css";

export default function Backdrop() {
  return (
    <div className={styles.bg}><div className={`${styles.blob} ${styles.b1}`}></div><div className={`${styles.blob} ${styles.b2}`}></div><div className={`${styles.blob} ${styles.b3}`}></div><div className={`${styles.blob} ${styles.b4}`}></div></div>
  );
}
