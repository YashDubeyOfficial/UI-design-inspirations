import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}><i></i> OLED • TRUE BLACK • LIME ACCENT • 40s PARSE</div>
      <h1>Turn any<br /><span className={styles.thin}>PDF into a</span><br /><span className={styles.lime}>real exam.</span></h1>
      <p className={styles.sub}>Drop that <strong>midnight PYQ, scanned coaching sheet, Xerox photo.</strong> Parakh glows through it — reading <strong>time, marks, negatives, sections</strong> — and fires a true CBT you attempt exactly like NTA after dark.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#try" className={`${styles['btn-lime']}`} style={{padding:'14px 22px', fontSize:'14px'}}>Upload PDF & launch →</a>
        <a href="#how" className={`${styles['btn-white-dark']}`}>▶ See dark demo</a>
      </div>
      <div className={`${styles['meta-row']}`}>
        <div className={styles.avatars}><span>+</span><span>S</span><span>R</span><span>40k</span></div>
        <span><b style={{color:'white'}}>40k+ night owls</b> • 2.3M Qs rendered • Free 3</span>
      </div>
    </div>
  );
}
