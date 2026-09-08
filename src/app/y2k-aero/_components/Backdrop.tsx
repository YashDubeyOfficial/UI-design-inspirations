import styles from "../page.module.css";

export default function Backdrop() {
  return (
    <div className={styles.bubbles}><div className={`${styles.bubble} ${styles.b1}`}></div><div className={`${styles.bubble} ${styles.b2}`}></div><div className={`${styles.bubble} ${styles.b3}`}></div><div className={`${styles.bubble} ${styles.b4}`}></div><div className={`${styles.bubble} ${styles.b5}`}></div><div className={`${styles.bubble} ${styles.b6}`}></div></div>
  );
}
