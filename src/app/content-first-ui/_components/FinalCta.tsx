import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <hr className={styles["final-rule"]} />
      <h2>Begin <em>reading.</em></h2>
      <p>Three free mocks, set beautifully. No card at the door.</p>
      <div className={styles["final-actions"]}>
        <a href="#try" className={styles.primary}>Upload PDF</a>
        <a href="#how" className={styles.secondary}>How it works</a>
      </div>
    </section>
  );
}
