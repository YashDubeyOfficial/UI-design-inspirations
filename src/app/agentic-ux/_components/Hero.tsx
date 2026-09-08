import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Your role: approver · Their role: everything else</div>
      <h1>Supervise.<br /><span>Don’t operate.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs flow through approvals</strong> — agents propose the structure, you nod once, the hall runs itself. Oversight as a lifestyle.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Review plan →</a>
        <a href="#how" className={styles.btn}>See approvals</a>
      </div>
    </div>
  );
}
