import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.pill}><b>NEW</b> Flat 2.0 • subtle depth • still honest <i></i> Live</div>
      <h1>Flat, but with<br /><span className={styles.grad}>just enough depth.</span></h1>
      <p className={styles.sub}>Drop your <strong>PYQs, scanned sheets or question banks.</strong> Parakh 2.0 keeps the flat honesty — colors, geometry — but adds soft shadows and gentle gradients so the hall feels usable for 3 hours.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#try" className={`${styles['btn-hero-primary']}`}>Upload PDF — 40s to CBT →</a>
        <a href="#how" className={`${styles['btn-hero-secondary']}`}>See soft demo <span style={{width:'18px', height:'18px', borderRadius:'50%', background:'#EEF2FF', display:'grid', placeItems:'center', fontSize:'10px'}}>▶</span></a>
      </div>
      <div className={styles.trust}>
        <div className={styles.avatars}><span>A</span><span>S</span><span>R</span><span>+40k</span></div>
        <span><strong>40k+</strong> aspirants • <strong>2.3M</strong> Qs rendered • <strong>4.9★</strong> soft flat love</span>
        <span style={{background:'white', border:'1px solid var(--line)', padding:'6px 10px', borderRadius:'999px', boxShadow:'var(--soft)'}}>JEE • NEET • UPSC • GATE</span>
      </div>
    </section>
  );
}
