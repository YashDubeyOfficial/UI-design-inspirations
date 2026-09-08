import styles from "../page.module.css";

export default function TopCounter() {
  return (
    <div className={`${styles['top-counter']}`}>
      <span>¤ PARAKH BRUTALIST v1.0 — LAST UPDATED 04/09/2026 — BEST VIEWED IN NETSCAPE NAVIGATOR ¤</span>
      <span className={styles.counter}>VISITORS: <b>0042917</b></span>
    </div>
  );
}
