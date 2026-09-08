import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>● 4 AGENTS ONLINE · PARSER · PLANNER · TIMER · ANALYST</div>
      <h1>You bring paper.<br /><span>They bring hall.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs handled by a crew</strong> — Parser reads, Planner sections, Timer watches, Analyst scores. You just attempt.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Deploy agents →</a>
        <a href="#how" className={styles.btn}>Meet the crew</a>
      </div>
    </div>
  );
}
