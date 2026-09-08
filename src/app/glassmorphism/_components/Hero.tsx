import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles['hero-pill']}`}><b>NEW</b> PDF → AI → CBT in 40 seconds <i></i> Live</div>
      <h1>Your PDF <strong>dissolves.</strong><br /><span className={styles.grad}>Your exam appears.</span></h1>
      <p className={styles.sub}>Drop that messy PYQ, coaching booklet or scanned question bank. Parakh’s glass AI reads every margin, <strong>untangles the paper</strong>, and rebuilds it as a luminous, real CBT — like NTA or TCS iON, only lighter.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#try" className={`${styles['btn-hero-primary']}`}>Upload PDF & watch it turn →</a>
        <a href="#how" className={`${styles['btn-hero-secondary']}`}>See glass demo <span style={{width:'18px', height:'18px', borderRadius:'50%', background:'rgba(124,58,237,.12)', display:'grid', placeItems:'center', fontSize:'10px'}}>▶</span></a>
      </div>
      <div className={styles.trust}>
        <div className={styles.avatars}><span>A</span><span>S</span><span>R</span><span>+40k</span></div>
        <span><strong>40,000+</strong> aspirants • <strong>2.3M</strong> questions rendered • <strong>4.9★</strong> frosted love</span>
        <span style={{background:'rgba(255,255,255,.6)', border:'1px solid rgba(255,255,255,.7)', padding:'5px 10px', borderRadius:'999px', backdropFilter:'blur(8px)'}}>✦ JEE • NEET • UPSC • GATE • SSC</span>
      </div>
    </section>
  );
}
