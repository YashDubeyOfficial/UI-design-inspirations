import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <h2>STICK IT ALL DOWN.</h2>
        <p>Three free collages. Glitter optional. Accuracy mandatory.</p>
        <div className={styles["final-actions"]}>
          <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
          <a href="#how" className={styles.btn}>How it works</a>
        </div>
      </div>
    </section>
  );
}
