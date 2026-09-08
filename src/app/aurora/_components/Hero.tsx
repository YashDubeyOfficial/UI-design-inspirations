import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles['hero-glow']}`}></div>
      <div className={`${styles['hero-badge']}`}><b>AURORA</b> PDF → AI → Hall in 40s <i></i> Live now</div>
      <h1>Where paper <strong>fades</strong><br /><span className={`${styles['aurora-text']}`}>and aurora exams begin.</span></h1>
      <p className={styles.sub}>Beneath the northern lights, your dusty PYQs and scanned coaching PDFs <strong>dissolve into a dark, focused hall</strong> — quiet, glowing, exam-true. No setup, no errors — just light.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#try" className={`${styles['btn-hero-primary']}`}>Drop PDF into aurora →</a>
        <a href="#how" className={`${styles['btn-hero-secondary']}`}>Watch aurora demo <span style={{width:'18px', height:'18px', borderRadius:'50%', background:'rgba(255,255,255,.08)', display:'grid', placeItems:'center', fontSize:'10px', border:'1px solid rgba(255,255,255,.1)'}}>▶</span></a>
      </div>
      <div className={styles.trust}>
        <div className={styles.avatars}><span>A</span><span>S</span><span>R</span><span>+40k</span></div>
        <span><strong>40,000+</strong> under the lights • <strong>2.3M</strong> questions rendered • <strong>4.9★</strong> aurora calm</span>
      </div>
    </section>
  );
}
