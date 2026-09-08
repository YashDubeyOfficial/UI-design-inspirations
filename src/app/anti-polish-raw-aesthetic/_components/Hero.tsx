import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Anti-Polish · Raw HTML · No CSS apologies</div>
      <h1>This page is ugly.<br /><span>The exam is perfect.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> turned into a real CBT with default fonts, default buttons and zero gradients. It works in Lynx. It works everywhere.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF (works) →</a>
        <a href="#how" className={styles.btn}>Why unstyled?</a>
      </div>
    </div>
  );
}
