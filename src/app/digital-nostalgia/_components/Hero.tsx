import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>★。.:☆ UNDER CONSTRUCTION FOREVER ☆:.。★ (not really)</div>
      <h1>Welcome to my<br /><span>exam homepage!!!</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and MIDI files</strong> on a guestbook-era CBT — visitor counter, webrings, tiled stars — with a timer that sparkles.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Sign my guestbook →</a>
        <a href="#how" className={styles.btn}>View source</a>
      </div>
    </div>
  );
}
