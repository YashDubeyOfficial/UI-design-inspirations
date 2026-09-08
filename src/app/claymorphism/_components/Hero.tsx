import styles from "../page.module.css";

export default function Hero() {
  return (
    <div className={`${styles['hero-copy']}`}>
      <div className={styles.eyebrow}><i></i> CLAYMORPHISM • SOFT • SQUISHY • REAL</div>
      <h1>Squeeze your <span className={styles.soft}>PDF</span><br />into a <span className={`${styles['clay-word']}`}>real mock.</span></h1>
      <p className={styles.sub}>Parakh is the <strong>clay AI that squishes</strong> your PYQs, coaching scans and bloated question banks into a pillowy, palm-pressed CBT. Like NTA’s screen — but kinder, puffier, hug-ready.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#try" className={`${styles['btn-clay']} ${styles['btn-clay-peach']}`} style={{padding:'14px 22px', fontSize:'15px'}}>Upload PDF & squish it →</a>
        <a href="#how" className={`${styles['btn-clay']}`} style={{background:'white', color:'var(--ink)', borderColor:'white'}}>See how it puffs ▶</a>
      </div>
      <div className={styles.trust}>
        <div className={`${styles['trust-pill']}`}><div className={styles.avatars}><span>A</span><span>S</span><span>R</span></div> 40,000+ puff lovers</div>
        <span className={`${styles['trust-pill']}`}>♡ 2.3M Qs puffed</span>
        <span className={`${styles['trust-pill']}`}>✦ JEE • NEET • UPSC</span>
      </div>
    </div>
  );
}
