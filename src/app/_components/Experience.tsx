import styles from "../page.module.css";

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={`${styles['exp-wrap']}`}>
        <div className={`${styles['exp-copy']}`}>
          <div className={styles.kicker}><i></i> THE EXPERIENCE IS THE EXAM</div>
          <h2>Feels like<br /><em>NTA / TCS iON.</em><br />Not a quiz app.</h2>
          <p>Students told us dull quiz UIs don’t build exam temperament. So we rebuilt the real thing — instructions screen, section locks, timer anxiety and all.</p>
          <div className={`${styles['exp-points']}`}>
            <div className={`${styles['exp-point']}`}><i>◷</i><span><strong>Real countdown & auto-submit.</strong> When time hits zero, your test submits — just like the centre.</span></div>
            <div className={`${styles['exp-point']}`}><i>▦</i><span><strong>Question palette that matters.</strong> Answered, not visited, marked-for-review — at a glance.</span></div>
            <div className={`${styles['exp-point']}`}><i>⇄</i><span><strong>Sectional navigation + rules.</strong> Jump across sections, respect sectional timers if the paper has them.</span></div>
          </div>
          <div className={`${styles['exp-ctas']}`}>
            <a href="#try" className={`${styles['btn-primary']} ${styles['btn-lime']}`}>Try live CBT demo →</a>
            <span style={{fontSize:'13px', color:'rgba(255,255,255,.6)', alignSelf:'center'}}>No signup needed to preview</span>
          </div>
        </div>
        <div className={`${styles['exp-visual']}`}>
          <div className={`${styles['exp-visual-top']}`}><strong>PARAKH CBT • JEE Main 2023 — Mock 01</strong><span style={{fontSize:'11px', fontWeight:'700', display:'flex', gap:'6px', alignItems:'center'}}><span className={`${styles['live-dot']}`}></span> 02:14:33 LEFT</span></div>
          <div className={`${styles['exp-visual-body']}`}>
            <div className={`${styles['section-tabs']}`}><span className={styles.active}>Physics • 30 Qs</span><span>Chemistry • 30 Qs</span><span>Maths • 30 Qs</span></div>
            <div className={`${styles['q-meta']}`}><span>Q14 • Single correct • +4 −1</span><span>Marked for review</span></div>
            <div className={`${styles['q-title']}`}>Q14. A particle moves such that its position vector is r = 3t² î + (4t − t²) ĵ. The magnitude of its acceleration at t = 1s is:</div>
            <div className={`${styles['q-options']}`}>
              <div className={styles.opt}><b>A</b> 6 m/s²</div>
              <div className={styles.opt}><b>B</b> 2√10 m/s²</div>
              <div className={`${styles.opt} ${styles.sel}`}><b>C</b> √40 m/s² — Your answer</div>
              <div className={styles.opt}><b>D</b> 8 m/s²</div>
            </div>
            <div className={`${styles['exp-bottom']}`}>
              <div style={{display:'flex', gap:'8px'}}><span className={`${styles['mini-btn']}`} style={{padding:'8px 14px', fontSize:'12px'}}>← Previous</span><span className={`${styles['mini-btn']} ${styles.dark}`} style={{padding:'8px 14px', fontSize:'12px'}}>Save & Next →</span><span className={`${styles['mini-btn']}`} style={{padding:'8px 10px', background:'#FFF4CC', borderColor:'#FFE9A8'}}>Mark for Review</span></div>
              <div className={`${styles['palette-mini']}`}><b className={styles.on}>12</b><b>13</b><b className={styles.mark}>14</b><b>15</b><span style={{fontSize:'11px', fontWeight:'700', color:'var(--muted)'}}>Submit</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
