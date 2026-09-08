import styles from "../page.module.css";

export default function SiteBackground() {
  return (
    <>
      <div className={styles.bg}><div className={`${styles.orb} ${styles.o1}`}></div><div className={`${styles.orb} ${styles.o2}`}></div><div className={`${styles.orb} ${styles.o3}`}></div></div>
      <div className={styles.grain}></div>
    </>
  );
}
