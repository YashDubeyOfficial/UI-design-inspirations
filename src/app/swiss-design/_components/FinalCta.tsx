import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <div>
          <h2>Set in <span>order.</span></h2>
          <p>Three free mocks. Ranged left, delivered straight.</p>
          <div className={styles["final-actions"]}>
            <a href="#try" className={`${styles.btn} ${styles.fill}`}>Upload PDF</a>
            <a href="#how" className={styles.btn}>How it works</a>
          </div>
        </div>
        <div className={styles["final-stats"]}>
          <div><b>42</b><span>Mocks avg/user</span></div>
          <div><b>214</b><span>Avg score</span></div>
          <div><b>40s</b><span>Parse time</span></div>
        </div>
      </div>
    </section>
  );
}
