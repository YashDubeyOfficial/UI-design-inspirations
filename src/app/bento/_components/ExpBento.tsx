import styles from "../page.module.css";

export default function ExpBento() {
  return (
    <div className={`${styles['exp-bento']}`} style={{marginTop:'14px'}} id="cbt">
      <div className={`${styles['exp-copy-card']}`}>
        <div className={styles.kicker}><i></i> THE BENTO IS THE EXAM</div>
        <h2>Feels like<br /><em>NTA hall.</em><br />Tastes better.</h2>
        <p>Serious exam temperament — countdown, palette, sectional navigation — but organised like a bento: clean, calm, clearly boxed. No clutter.</p>
        <div className={`${styles['exp-point']}`}><i>◷</i><span><strong>Countdown & auto-submit.</strong> At 00:00 the bento closes — just like the centre.</span></div>
        <div className={`${styles['exp-point']}`}><i>▦</i><span><strong>Palette in boxes.</strong> Answered / marked / not visited — colour-coded sage & terracotta.</span></div>
        <div className={`${styles['exp-point']}`}><i>⇄</i><span><strong>Sections as compartments.</strong> Jump between Physics / Chem / Maths with rules intact.</span></div>
        <div className={`${styles['exp-ctas']}`}>
          <button className={`${styles['btn-white-bento']}`}>Try bento CBT →</button>
          <span style={{fontSize:'12px', alignSelf:'center', opacity:'.8'}}>No signup to preview</span>
        </div>
      </div>
      <div className={`${styles['exp-visual-card']}`}>
        <div className={`${styles['exp-top']}`}><strong>PARAKH BENTO • GATE 2024 — MOCK 01</strong><span style={{display:'flex', gap:'6px', alignItems:'center', fontSize:'11px', fontWeight:'700'}}><span className={`${styles['live-dot']}`}></span> 02:14:33 LEFT</span></div>
        <div className={`${styles['exp-body']}`}>
          <div className={`${styles['section-tabs']}`}><span className={styles.active}>APTITUDE • 10</span><span>Core • 55 Qs</span></div>
          <div className={`${styles['q-meta']}`}><span>Q14 • +2 −0.66</span><span style={{background:'var(--sage-light)', borderColor:'rgba(143,169,139,.18)', color:'var(--sage-deep)'}}>Marked for review</span></div>
          <div className={`${styles['q-title']}`}>Q14. A particle moves with r = 3t² î + (4t − t²) ĵ. Magnitude of acceleration at t=1s ?</div>
          <div className={`${styles['q-options']}`}>
            <div className={styles.opt}><b>A</b> 6 m/s²</div>
            <div className={`${styles.opt} ${styles.sel}`} style={{borderColor:'var(--sage)', background:'var(--sage-light)'}}><b>B</b> 136 — Your box ✓</div>
            <div className={styles.opt}><b>C</b> 128</div>
            <div className={styles.opt}><b>D</b> 8 m/s²</div>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'10px', flexWrap:'wrap', paddingTop:'12px', borderTop:'1px solid var(--line2)'}}>
            <div style={{display:'flex', gap:'8px'}}><span className={`${styles['mini-btn']}`} style={{padding:'8px 12px'}}>← Previous</span><span className={`${styles['mini-btn']} ${styles.dark}`} style={{padding:'8px 12px'}}>Save & Next →</span></div>
            <div style={{display:'flex', gap:'6px'}}><span className={`${styles.pal} ${styles.ans}`} style={{width:'26px', height:'26px'}}>12</span><span className={`${styles.pal} ${styles.mark}`} style={{width:'26px', height:'26px'}}>14</span><span className={styles.pal} style={{width:'26px', height:'26px'}}>15</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
