import styles from "../page.module.css";

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={`${styles['exp-wrap']}`}>
        <div className={`${styles['exp-visual']}`}>
          <div className={`${styles['exp-top']}`}><strong>PARAKH AURORA • UPSC 2022 — Mock 01</strong><span style={{fontSize:'11px', fontWeight:'700', display:'flex', gap:'6px', alignItems:'center', color:'var(--muted)'}}><span style={{width:'7px', height:'7px', background:'#22C55E', borderRadius:'50%', display:'inline-block', boxShadow:'0 0 0 5px rgba(34,197,94,.15)'}}></span> 01:32:14 LEFT</span></div>
          <div className={`${styles['exp-body']}`}>
            <div style={{display:'flex', gap:'6px', marginBottom:'10px', flexWrap:'wrap'}}><span style={{padding:'6px 12px', borderRadius:'999px', background:'white', color:'#080A14', fontSize:'12px', fontWeight:'700'}}>GS I • 100</span><span style={{padding:'6px 12px', borderRadius:'999px', background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.07)', color:'var(--muted)', fontSize:'12px', fontWeight:'700'}}>CSAT</span><span style={{padding:'6px 12px', borderRadius:'999px', background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.07)', color:'var(--muted)', fontSize:'12px', fontWeight:'700'}}>Essay</span></div>
            <div className={`${styles['q-meta']}`}><span style={{background:'rgba(34,197,94,.12)', borderColor:'rgba(34,197,94,.18)', color:'#BBF7D0'}}>Q14 • Single correct • +2 −0.66</span><span style={{background:'rgba(139,92,246,.12)', borderColor:'rgba(139,92,246,.18)', color:'#DDD6FE'}}>Marked for review</span></div>
            <div className={`${styles['q-title']}`}>Q14. With reference to medieval India, which one of the following statements is correct?</div>
            <div className={`${styles['q-options']}`}>
              <div className={styles.opt}><b>A</b> Option A text here about history</div>
              <div className={`${styles.opt} ${styles.sel}`}><b>B</b> Option B — Your answer</div>
              <div className={styles.opt}><b>C</b> Option C text</div>
              <div className={styles.opt}><b>D</b> Option D text</div>
            </div>
            <div className={`${styles['exp-bottom']}`}>
              <div style={{display:'flex', gap:'7px'}}><span className={`${styles['mini-btn']}`} style={{padding:'8px 14px', fontSize:'12px', background:'rgba(255,255,255,.06)'}}>← Prev</span><span className={`${styles['mini-btn']} ${styles.dark}`} style={{padding:'8px 14px', fontSize:'12px'}}>Save & Next →</span><span className={`${styles['mini-btn']}`} style={{padding:'8px 10px', background:'rgba(34,197,94,.12)', borderColor:'rgba(34,197,94,.18)', fontSize:'11px', color:'#BBF7D0'}}>Mark</span></div>
              <div className={`${styles['palette-mini']}`}><b>13</b><b className={styles.mark}>14</b><b>15</b><b className={styles.on}>16</b></div>
            </div>
          </div>
        </div>
        <div className={`${styles['exp-copy']}`}>
          <div className={styles.kicker}><i></i> THE HALL IS DARK FOR FOCUS</div>
          <h2>Soft lights, <em>hard exam.</em> Like the night before.</h2>
          <p>We dimmed everything except the question. Timer pulses green, palette glows — your eyes stay on the text, the aurora stays behind you.</p>
          <div className={`${styles['exp-points']}`}>
            <div className={`${styles['exp-point']}`}><i>◷</i><span><strong>Countdown that breathes.</strong> At 00:00 the aurora stills and submits — just like the centre.</span></div>
            <div className={`${styles['exp-point']}`}><i>▦</i><span><strong>Palette in low light.</strong> Answered white, marked green, not visited dim — instant read.</span></div>
            <div className={`${styles['exp-point']}`}><i>⇄</i><span><strong>Sectional flow.</strong> Jump across VARC/DILR/QA or GS papers with aurora guides.</span></div>
          </div>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
            <a href="#try" className={`${styles['btn-aurora']}`}>Try aurora CBT →</a>
            <span style={{fontSize:'13px', color:'var(--muted)', alignSelf:'center'}}>No signup to feel the lights</span>
          </div>
        </div>
      </div>
    </section>
  );
}
