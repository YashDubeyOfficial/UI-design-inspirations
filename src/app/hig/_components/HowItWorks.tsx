import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={`${styles['section-head']}`}>
        <div className={`${styles['kicker-hig']}`}><i></i> PDF → UNDERSTAND → ATTEMPT</div>
        <h2>Airy by design. <em>Exam-true by default.</em></h2>
        <p>Large type, generous whitespace, no chrome. The hall breathes so you can focus for 180 minutes — exactly like the centre, minus the harshness.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={`${styles['step-icon']}`}>◈</div>
          <h3>Drop any PDF</h3>
          <p>PYQs, coaching scans, phone photos — even 300 pages. The drop zone is quiet, not loud.</p>
          <div className={`${styles['sheet-hig']}`}><div className={`${styles['drop-hig']}`}><div className={styles.ic}>↑</div><strong>Drop PDF</strong><br /><span style={{fontSize:'12px', color:'var(--muted)'}}>or choose file • up to 50MB</span></div><div style={{marginTop:'8px', background:'white', border:'1px solid var(--border2)', borderRadius:'12px', padding:'8px 10px', display:'flex', justifyContent:'space-between', fontSize:'13px', fontWeight:'600'}}><span>NEET_2021.pdf</span><span style={{color:'var(--blue)'}}>18 MB</span></div></div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-icon']}`}>✦</div>
          <h3>Quiet AI understands</h3>
          <p>Duration, negatives, sections — understood without spinners, shown with calm progress.</p>
          <div className={`${styles['sheet-hig']}`}>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}>
              <div style={{background:'white', border:'1px solid var(--border2)', borderRadius:'12px', padding:'12px', textAlign:'center'}}><small style={{fontSize:'10px', letterSpacing:'.08em', color:'var(--muted2)', fontWeight:'700'}}>DURATION</small><br /><strong style={{fontSize:'17px'}}>180m</strong></div>
              <div style={{background:'white', border:'1px solid var(--border2)', borderRadius:'12px', padding:'12px', textAlign:'center'}}><small style={{fontSize:'10px', letterSpacing:'.08em', color:'var(--muted2)', fontWeight:'700'}}>MARKING</small><br /><strong style={{fontSize:'17px'}}>+4 −1</strong></div>
              <div style={{background:'white', border:'1px solid var(--border2)', borderRadius:'12px', padding:'12px', textAlign:'center'}}><small style={{fontSize:'10px', letterSpacing:'.08em', color:'var(--muted2)', fontWeight:'700'}}>SECTIONS</small><br /><strong style={{fontSize:'17px'}}>3</strong></div>
              <div style={{background:'white', border:'1px solid var(--border2)', borderRadius:'12px', padding:'12px', textAlign:'center'}}><small style={{fontSize:'10px', letterSpacing:'.08em', color:'var(--muted2)', fontWeight:'700'}}>Qs</small><br /><strong style={{fontSize:'17px'}}>90</strong></div>
            </div>
            <div style={{marginTop:'8px', background:'var(--ink)', color:'white', padding:'8px', borderRadius:'12px', textAlign:'center', fontSize:'12px', fontWeight:'600'}}>✓ Instructions preserved quietly</div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-icon']}`}>▶</div>
          <h3>Attempt, calmly</h3>
          <p>Palette, timer, mark-for-review — all airy, legible, with SF-weight hierarchy.</p>
          <div className={`${styles['sheet-hig']}`}>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:'12px', fontWeight:'600'}}><span>Q14 / 90</span><span style={{background:'var(--ink)', color:'white', padding:'4px 8px', borderRadius:'999px'}}>01:42:11</span></div>
            <div style={{height:'6px', background:'var(--blue)', borderRadius:'999px', width:'72%', marginTop:'10px'}}></div>
            <div style={{height:'6px', background:'var(--fill)', border:'1px solid var(--border)', borderRadius:'999px', width:'90%', marginTop:'6px'}}></div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'12px'}}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.mark}`}>2</span><span className={styles.pal}>3</span><span className={styles.pal}>4</span><span className={styles.pal}>5</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
