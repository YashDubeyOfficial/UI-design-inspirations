import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <h2>Step up to <span>your hall.</span></h2>
        <p>Three free mocks. Solid planes, real pressure.</p>
        <div className={styles["final-actions"]}>
          <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
          <a href="#how" className={styles.btn}>How it stacks</a>
        </div>
      </div>
    </section>
  );
}
