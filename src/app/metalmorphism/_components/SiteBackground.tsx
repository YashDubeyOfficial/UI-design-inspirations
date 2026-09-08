import styles from "../page.module.css";

export default function SiteBackground() {
  return (
    <>
      <div className={`${styles['bg-metal']}`}></div><div className={`${styles['steel-plate']}`}></div><div className={styles.noise}></div>
    </>
  );
}
