import styles from "../page.module.css";

export default function Steps() {
  return (
    <div className={styles.steps}>
      <div className={styles.step}>
        <div className={`${styles['step-num']}`}>01 — SEED <span>↗</span></div><h3>Drop any PDF</h3><p>Monsoon-damaged PYQs, coaching mulch, phone-scanned leaves — even 300 pages. Plant it.</p>
        <div className={`${styles['step-visual']}`}><div className={`${styles['upload-box']}`}><div className={`${styles['up-icon']}`}>↑</div><strong>Plant PDF seed</strong><br /><span style={{fontSize:'11px', color:'var(--earth)'}}>PDF up to 50MB • compost enabled</span></div><div className={`${styles['mini-row']}`}>UPSC_2022_GS1.pdf <b>12.4 MB</b></div><div className={`${styles['mini-row']}`}>Allen_Green_Test.pdf <b>8.1 MB</b></div></div>
      </div>
      <div className={styles.step}>
        <div className={`${styles['step-num']}`}>02 — SPROUT <span>✦</span></div><h3>Seed AI sprouts</h3><p>Sun + code reads duration, marking, section mycorrhiza — even when PDF is a bad photocopy under a tree.</p>
        <div className={`${styles['step-visual']}`}><div className={styles.grid2}><div className={`${styles['mini-card']}`}><small>DURATION</small><strong>180 mins</strong></div><div className={`${styles['mini-card']}`}><small>MARKING</small><strong>+4 −1</strong></div><div className={`${styles['mini-card']}`}><small>ROOTS</small><strong>3 found</strong></div><div className={`${styles['mini-card']}`}><small>LEAVES</small><strong>90 grown</strong></div></div><div style={{marginTop:'8px', background:'var(--green)', color:'#fff', textAlign:'center', padding:'7px', borderRadius:'999px', fontSize:'11px', fontWeight:'700'}}>✓ Instructions preserved — sun-dried verbatim</div></div>
      </div>
      <div className={styles.step}>
        <div className={`${styles['step-num']}`}>03 — CANOPY <span>▶</span></div><h3>Enter the canopy</h3><p>Breathing hall: leaf-timer, seed palette, wind mark-for-review, auto-harvest. Exam temperament, but oxygenated.</p>
        <div className={`${styles['step-visual']}`} style={{padding:'10px'}}>
          <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', fontWeight:'700', marginBottom:'8px'}}><span>Q 14 / 90</span><span style={{background:'var(--green)', color:'#fff', padding:'4px 8px', borderRadius:'999px'}}>01:42:11</span></div>
          <div style={{height:'8px', background:'linear-gradient(90deg, var(--green), var(--lime))', borderRadius:'999px', width:'74%', marginBottom:'8px'}}></div><div style={{height:'7px', background:'rgba(27,67,50,.08)', borderRadius:'999px', width:'88%', marginBottom:'6px'}}></div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'10px'}}><span className={`${styles.pal} ${styles.ans}`} style={{width:'100%', height:'24px'}}>1</span><span className={`${styles.pal} ${styles.mark}`} style={{width:'100%', height:'24px'}}>2</span><span className={styles.pal} style={{width:'100%', height:'24px'}}>3</span><span className={styles.pal} style={{width:'100%', height:'24px'}}>4</span><span className={styles.pal} style={{width:'100%', height:'24px'}}>5</span></div>
        </div>
      </div>
    </div>
  );
}
