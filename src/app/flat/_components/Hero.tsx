import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}><i></i> Zero gradients • Zero shadows • 100% solid</div>
      <h1>PDF IN.<br /><span className={styles.red}>EXAM</span> OUT.<br /><span className={styles.under}>NO STEPS.</span></h1>
      <p className={styles.sub}>Parakh is brutally simple. Drop your <strong>JEE, NEET, UPSC or GATE PDF</strong> — badly scanned or 300 pages — we flat-parse every question, mark and section, and give you a hard, exam-true CBT. No soft gradients. No fuss.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#try" className={`${styles['btn-flat']} ${styles.red}`} style={{padding:'15px 22px', fontSize:'15px'}}>Upload PDF → Create Mock</a>
        <a href="#how" className={`${styles['btn-flat']}`} style={{background:'white'}}>See flat demo</a>
      </div>
      <div className={styles.trust}>
        <div className={styles.avatars}><span>A</span><span>S</span><span>R</span></div>
        <span><b>40k+</b> aspirants</span>
        <span>• 2.3M Qs rendered</span>
        <span style={{border:'3px solid var(--ink)', background:'var(--blue)', color:'white', padding:'4px 8px'}}>4.9 / 5 flat love</span>
      </div>
    </div>
  );
}
