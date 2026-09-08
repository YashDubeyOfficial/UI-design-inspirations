import styles from "../page.module.css";

export default function Backdrop() {
  return (
    <>
      <div className={`${styles['bg-aurora']}`}><div className={`${styles['aurora-band']} ${styles.a1}`}></div><div className={`${styles['aurora-band']} ${styles.a2}`}></div><div className={`${styles.orb} ${styles.o1}`}></div><div className={`${styles.orb} ${styles.o2}`}></div><div className={`${styles.orb} ${styles.o3}`}></div></div>
      <div className={styles.stars}></div>
      <div className={`${styles['nav-line']}`}></div>
    </>
  );
}
