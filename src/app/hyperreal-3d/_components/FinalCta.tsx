import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <h2>Ready for your <span>close-up?</span></h2>
      <p>Three free mocks. Studio light, hall pressure.</p>
      <div className={styles["final-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.spotlight}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>Behind scenes</a>
      </div>
    </section>
  );
}
