import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}>PDF → Flat AI → CBT</div>
        <h2>THREE FLAT STEPS. <em>ZERO MANUAL WORK.</em></h2>
        <p>No drop shadows, no spinners. Just solid blocks that tell you exactly what happened to your PDF — in 36 flat seconds.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>01 — DROP <span>↗</span></div>
          <h3>Drop any PDF</h3>
          <p>10 years PYQs, coaching scans, phone photos. Up to 300 pages. Flat dropzone, instant read.</p>
          <div className={`${styles['step-visual']}`}>
            <div className={styles.upload}><b style={{fontSize:'20px'}}>↑</b><b>Drop PDF here</b><span style={{fontSize:'11px', fontWeight:'800'}}>or browse • up to 50MB • any scan</span></div>
            <div style={{marginTop:'8px', border:'3px solid var(--ink)', padding:'8px 10px', display:'flex', justifyContent:'space-between', fontWeight:'900', fontSize:'12px', background:'var(--gray)'}}><span>NEET_2020.pdf</span><span style={{background:'var(--ink)', color:'white', padding:'3px 7px'}}>14 MB</span></div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>02 — PARSE <span>✦</span></div>
          <h3>Flat AI slices it</h3>
          <p>Questions, options, sections, duration, marking (+4 −1, +3 −0.33) — sliced into flat squares.</p>
          <div className={`${styles['step-visual']}`}>
            <div className={styles.grid2}>
              <div className={styles.mini}><small>DURATION</small><br /><strong>180 min</strong></div>
              <div className={styles.mini}><small>MARKING</small><br /><strong>+4 −1</strong></div>
              <div className={styles.mini}><small>SECTIONS</small><br /><strong>3</strong></div>
              <div className={styles.mini}><small>Qs</small><br /><strong>90</strong></div>
            </div>
            <div style={{marginTop:'8px', border:'3px solid var(--ink)', background:'var(--ink)', color:'white', padding:'8px', textAlign:'center', fontWeight:'900', fontSize:'11px'}}>✓ Instructions preserved flat</div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>03 — ATTEMPT <span>▶</span></div>
          <h3>Attempt like hall</h3>
          <p>Countdown, palette, mark-for-review, auto-submit. Solid, not soft. Exactly NTA.</p>
          <div className={`${styles['step-visual']}`}>
            <div style={{display:'flex', justifyContent:'space-between', fontWeight:'900', fontSize:'11px'}}><span>Q14 / 90</span><span style={{border:'3px solid var(--ink)', background:'var(--ink)', color:'white', padding:'4px 8px'}}>01:42:11</span></div>
            <div style={{marginTop:'8px', height:'12px', border:'3px solid var(--ink)', background:'var(--red)', width:'72%'}}></div>
            <div style={{height:'10px', border:'3px solid var(--ink)', background:'var(--gray)', width:'90%', marginTop:'6px'}}></div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'10px'}}><span style={{height:'24px', border:'3px solid var(--ink)', background:'var(--ink)', color:'white', display:'grid', placeItems:'center', fontWeight:'900'}}>1</span><span style={{height:'24px', border:'3px solid var(--ink)', background:'var(--yellow)', display:'grid', placeItems:'center', fontWeight:'900'}}>2</span><span style={{height:'24px', border:'3px solid var(--ink)', display:'grid', placeItems:'center'}}>3</span><span style={{height:'24px', border:'3px solid var(--ink)', display:'grid', placeItems:'center'}}>4</span><span style={{height:'24px', border:'3px solid var(--ink)', display:'grid', placeItems:'center'}}>5</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
