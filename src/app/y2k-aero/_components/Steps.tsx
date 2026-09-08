import styles from "../page.module.css";

export default function Steps() {
  return (
    <div className={styles.steps}>
      <div className={styles.step}>
        <div className={`${styles['step-num']}`}>01 — SPLASH <span>↗</span></div><h3>Drop any PDF</h3><p>PYQs since 2012, coaching rafts, phone-scanned puddles — even 300 pages. Just plop it on the bubble.</p>
        <div className={`${styles['step-visual']}`}><div className={`${styles['upload-box']}`}><div className={`${styles['up-icon']}`}>↑</div><strong>Bubble drop — plop!</strong><br /><span style={{fontSize:'11px', color:'var(--ink2)'}}>PDF up to 50MB • glossy dropzone</span></div><div className={`${styles['mini-row']}`}>UPSC_2022_GS1.pdf <b>12.4 MB</b></div><div className={`${styles['mini-row']}`}>Allen_Minor_03.pdf <b>9.1 MB</b></div></div>
      </div>
      <div className={styles.step}>
        <div className={`${styles['step-num']}`}>02 — GLOSS AI <span>✦</span></div><h3>Aero AI blows bubbles</h3><p>We scan every droplet: questions, options, diagrams, marking (+4 −1), duration — all inflated intact.</p>
        <div className={`${styles['step-visual']}`}><div className={styles.grid2}><div className={`${styles['mini-card']}`}><small>DURATION</small><strong>180 mins</strong></div><div className={`${styles['mini-card']}`}><small>MARKING</small><strong>+4 −1</strong></div><div className={`${styles['mini-card']}`}><small>SECTIONS</small><strong>3 found</strong></div><div className={`${styles['mini-card']}`}><small>QUESTIONS</small><strong>90 popped</strong></div></div><div style={{marginTop:'8px', background:'linear-gradient(135deg,#00D4FF,#0097B2)', color:'#fff', textAlign:'center', padding:'7px', borderRadius:'999px', fontSize:'11px', fontWeight:'700', border:'1px solid #fff'}}>✓ Instructions kept bubbly verbatim</div></div>
      </div>
      <div className={styles.step}>
        <div className={`${styles['step-num']}`}>03 — DIVE <span>▶</span></div><h3>Dive into gloss</h3><p>Aquatic exam hall: liquid countdown, bubble palette, glossy mark-for-review, auto-pop. So wet, so real.</p>
        <div className={`${styles['step-visual']}`} style={{padding:'10px'}}>
          <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', fontWeight:'700', marginBottom:'8px'}}><span>Q 14 / 90</span><span style={{background:'linear-gradient(135deg,#00D4FF,#0097B2)', color:'#fff', padding:'4px 8px', borderRadius:'999px'}}>01:42:11</span></div>
          <div style={{height:'8px', background:'linear-gradient(90deg,#00D4FF,#C8FF00)', borderRadius:'999px', width:'74%', marginBottom:'8px'}}></div><div style={{height:'7px', background:'rgba(14,36,64,.08)', borderRadius:'999px', width:'88%', marginBottom:'6px'}}></div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'10px'}}><span className={`${styles.pal} ${styles.ans}`} style={{width:'100%', height:'24px'}}>1</span><span className={`${styles.pal} ${styles.mark}`} style={{width:'100%', height:'24px'}}>2</span><span className={styles.pal} style={{width:'100%', height:'24px'}}>3</span><span className={styles.pal} style={{width:'100%', height:'24px'}}>4</span><span className={styles.pal} style={{width:'100%', height:'24px'}}>5</span></div>
        </div>
      </div>
    </div>
  );
}
