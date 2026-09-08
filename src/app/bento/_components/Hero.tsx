import styles from "../page.module.css";

export default function Hero() {
  return (
    <div className={`${styles['hero-copy']}`}>
      <div className={`${styles['bento-kicker']}`}><i></i> BENTO-GRID • MODULAR EXAM SYSTEM</div>
      <h1><span className={styles.line1}>Your PDFs,</span><span className={styles.line2}>boxed into a</span><span className={styles.accent}>real exam.</span></h1>
      <p className={styles.sub}>Drop that <strong>JEE bundle, NEET stack or UPSC heap.</strong> Parakh sorts every question, instruction and marking scheme into its perfect bento compartment — and serves a true CBT you’d swear was TCS iON.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#try" className={`${styles['btn-terracotta']}`}>Upload PDF — make bento →</a>
        <a href="#how" className={`${styles['btn-white']}`}>▶ See boxes</a>
      </div>
      <div className={`${styles['meta-row']}`}>
        <div className={styles.avatars}><span>A</span><span>S</span><span>R</span><span>+40k</span></div>
        <span><b style={{color:'var(--ink)'}}>40k+ students</b> • 2.3M boxes packed • Free 3</span>
      </div>
    </div>
  );
}
