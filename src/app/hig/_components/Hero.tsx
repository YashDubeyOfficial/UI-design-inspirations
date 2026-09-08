import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles['hero-label']}`}><b>HIG</b> Content-first • Airy • True to hall</div>
      <h1>The exam, <span className={styles.thin}>not the chrome.</span><br /><span className={styles.blue}>Your PDF becomes hall.</span></h1>
      <p className={styles.sub}>Drop the messy PYQ, the scanned coaching sheet, the 300-page bank. Parakh reads it — <strong>questions, sections, negatives, duration</strong> — and layers a quiet, spacious CBT. Like NTA / TCS iON, but with Apple’s calm.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#try" className={`${styles['btn-hero-blue']}`}>Upload PDF & create mock <span style={{width:'22px', height:'22px', background:'rgba(255,255,255,.18)', borderRadius:'50%', display:'grid', placeItems:'center'}}>→</span></a>
        <a href="#how" className={`${styles['btn-hero-white']}`}>See how quiet it is <span style={{width:'20px', height:'20px', borderRadius:'50%', background:'var(--fill)', border:'1px solid var(--border2)', display:'grid', placeItems:'center', fontSize:'10px'}}>▶</span></a>
      </div>
      <div className={styles.trust}>
        <div className={styles.avatars}><span>A</span><span>S</span><span>R</span></div>
        <span><strong>40,000+</strong> aspirants</span>
        <span>• 2.3M questions rendered</span>
        <span className={`${styles['pill-hig']}`}>✦ JEE • NEET • UPSC • GATE</span>
        <span className={`${styles['pill-hig']}`} style={{background:'var(--ink)', color:'white', borderColor:'var(--ink)'}}>4.9★ • App Store love</span>
      </div>
    </section>
  );
}
