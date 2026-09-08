import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>PDF → AI → CBT • 40 seconds</div>
      <h1><span className={styles.thin}>Turn any</span><br /><span className={styles.italic}>PDF into a</span><br /><span className={styles.accent}>real exam.</span></h1>
      <p className={styles.sub}>No decoration. No clutter. Just your <strong>PYQs, coaching PDFs and question banks</strong> — understood by AI and rebuilt as a true CBT with timer, palette and sections. Like NTA, minus the noise.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#try" className={`${styles['btn-accent']}`}>Upload PDF — create mock →</a>
        <a href="#how" className={`${styles['btn-line']}`}>See how it works</a>
      </div>
      <div className={`${styles['meta-row']}`}>
        <span><b>40,000+</b> aspirants</span><span className={styles.dot}></span><span>2.3M questions</span><span className={styles.dot}></span><span style={{color:'var(--accent)'}}>● Free to start</span>
      </div>
    </div>
  );
}
