import styles from "../page.module.css";

export default function Backdrop() {
  return (
    <div className={`${styles['bg-deco']}`}><div className={`${styles.blob} ${styles.blob1}`}></div><div className={`${styles.blob} ${styles.blob2}`}></div><div className={`${styles.blob} ${styles.blob3}`}></div></div>
  );
}
