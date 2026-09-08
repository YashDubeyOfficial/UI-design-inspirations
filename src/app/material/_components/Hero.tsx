import styles from "../page.module.css";

export default function Hero() {
  return (
    <div className={`${styles['hero-copy']}`}>
      <div className={`${styles['eyebrow-m3']}`}><i></i> MATERIAL 3 • ELEVATION • MOTION</div>
      <h1>Turn any <strong>PDF</strong> into a <span className={`${styles['m3-accent']}`}>real CBT.</span></h1>
      <p className={styles.sub}>Parakh understands your <strong>PYQs, scanned sheets and question banks</strong> — extracts questions, sections, timers and marking — and builds a Material-elevated exam hall. Like NTA / TCS iON, with motion and elevation.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#try" className={`${styles['btn-extended']}`}>Upload PDF & create mock <span style={{width:'24px', height:'24px', background:'white', color:'var(--primary)', borderRadius:'50%', display:'grid', placeItems:'center'}}>→</span></a>
        <a href="#how" className={`${styles['tonal-btn']}`}>Watch M3 demo</a>
      </div>
      <div className={styles.supporting}>
        <div className={styles.avatars}><span>A</span><span>S</span><span>R</span></div>
        <span><strong>40,000+</strong> Material users</span>
        <span>•</span><span>2.3M Qs</span>
        <span className={`${styles.chip} ${styles.filled}`}>4.9★</span>
        <span className={styles.chip}>JEE • NEET • UPSC</span>
      </div>
    </div>
  );
}
