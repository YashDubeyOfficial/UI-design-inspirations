import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}><i></i> SOLARPUNK • RENEWABLE EXAMS • 100% PAPER-POWERED</div>
      <h1><span className={styles.line1}>TURN YOUR</span><span className={styles.line2}>PDF INTO</span><br /><span className={styles.grow}>A LIVING EXAM 🌱</span></h1>
      <p className={styles.sub}>Drop that <strong>sun-bleached PYQ, coaching sapling, greenhouse scan</strong>. Parakh composts it — reading every <strong>root (marking +4 −1), branch (sections) & leaf (instructions)</strong> — and grows a real CBT that breathes. Like NTA’s hall, only photosynthetic.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#" className={`${styles['btn-leaf']}`} style={{padding:'14px 22px', fontSize:'14px'}}>Upload PDF & grow →</a>
        <a href="#" className={`${styles['btn-cream']}`} style={{padding:'13px 18px'}}>▶ See greenhouse demo</a>
      </div>
      <div className={styles.trust}>
        <div className={`${styles['trust-pill']}`}><div className={styles.avatars}><span>A</span><span>S</span><span>R</span></div> 40k+ growers</div>
        <span className={`${styles['trust-pill']}`}>🌞 2.3M leaves rendered</span>
        <span className={`${styles['trust-pill']}`} style={{background:'var(--lime)', borderColor:'var(--lime)'}}>★ 4.9/5 rooted love</span>
      </div>
    </div>
  );
}
