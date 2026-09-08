import styles from "../page.module.css";

export default function Backdrop() {
  return (
    <>
      <div className={`${styles['bg-grid']}`}></div>
      <div className={`${styles['bg-glow']}`}><div className={`${styles.glow} ${styles.g1}`}></div><div className={`${styles.glow} ${styles.g2}`}></div><div className={`${styles.glow} ${styles.g3}`}></div></div>
    </>
  );
}
