import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}><i></i> SYSTEM ONLINE • NEURAL PARSER ACTIVE • 40.2s AVG</div>
      <h1><span className={styles.l1}>TURN ANY</span><span className={`${styles.l2} ${styles.glitch}`} data-text="PDF INTO">PDF INTO</span><span className={styles.l3}>REAL CBT</span></h1>
      <p className={styles.sub}>Drop the <strong>scanned PYQ dump, coaching drive link, photo of a Xerox</strong> — Parakh&apos;s neural net rips it like a deck, parses the <strong>marking ghosts (+4 −1), sections & instructions</strong> and respawns a true hall simulation. <span style={{color:'var(--cyan)'}}>Neon grid, chrome timer, same dread.</span></p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#" className={`${styles['btn-neon']}`} style={{padding:'14px 22px', fontSize:'12px'}}>UPLOAD PDF — JACK IN →</a>
        <a href="#" className={`${styles['btn-neon']} ${styles.mag}`} style={{padding:'14px 18px'}}>▶ WATCH DECK DEMO</a>
      </div>
      <div className={styles.trust}><span><b>40K+</b> RUNNERS</span><span><b>2.3M</b> Qs DECODED</span><span style={{color:'var(--yellow)', borderColor:'rgba(255,230,0,.3)'}}>★ 4.9 NEON RATING</span><span style={{background:'var(--yellow)', color:'#000', fontWeight:'800'}}>FREE // 3 RUNS</span></div>
    </div>
  );
}
