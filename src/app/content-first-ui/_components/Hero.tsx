import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Content-first · Typography-led · Hall-true</div>
      <h1>The exam, <em>set in beautiful type.</em></h1>
      <p className={styles.dek}>Your <strong>PYQs and question banks</strong> deserve better than a quiz widget. Parakh sets them like an editor — and examines you like NTA.</p>
      <div className={styles.byline}><span><b>By Parakh Editors</b> · 40-second typesetting</span><span>40,000+ readers</span></div>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={styles.primary}>Upload PDF</a>
        <a href="#how" className={styles.secondary}>Read how it works</a>
      </div>
    </div>
  );
}
