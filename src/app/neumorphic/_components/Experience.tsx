import styles from "../page.module.css";

export default function Experience() {
  return (
    <section className={styles.section}>
      <div className={`${styles['exp-wrap']}`}>
        <div className={`${styles['exp-copy']}`}>
          <div className={styles.kicker}><i></i> THE EXAM IS THE INTERFACE</div>
          <h2>Feels like paper.<br /><em>Behaves like CBT.</em></h2>
          <p>Neumorphism isn’t just style — it’s focus. No harsh contrasts, no glare. Just soft depth that keeps you in exam mode for hours.</p>
          <div className={styles.point}><i>◷</i><span><strong>Real countdown.</strong> Inset timer ticks like a desk clock, auto-submits at zero.</span></div>
          <div className={styles.point}><i>▦</i><span><strong>Tactile palette.</strong> Pressed = visited, raised = marked, lime = selected.</span></div>
          <div style={{display:'flex', gap:'10px', marginTop:'14px'}}><a href="#" className={`${styles['btn-neu']} ${styles.lime}`}>Try demo →</a><span style={{fontSize:'12px', color:'var(--muted)', alignSelf:'center'}}>No signup</span></div>
        </div>
        <div className={`${styles['exp-visual']}`}>
          <div className={`${styles['exp-top']}`}><strong style={{fontSize:'11px', letterSpacing:'.05em'}}>PARAKH CBT • JEE 2023 — Mock 01</strong><span className={`${styles['btn-neu']}`} style={{padding:'5px 9px', fontSize:'11px'}}>● 02:14:33 LEFT</span></div>
          <div className={`${styles['exp-body']}`}>
            <div style={{display:'flex', gap:'6px', marginBottom:'10px'}}><span className={`${styles.tab} ${styles.active}`}>Physics • 30</span><span className={styles.tab}>Chemistry</span><span className={styles.tab}>Maths</span></div>
            <div style={{fontSize:'11px', fontWeight:'700', color:'var(--muted)', marginBottom:'6px'}}>Q14 • +4 −1 • Marked for review</div>
            <div className={styles.question}>Q14. A particle moves with r = 3t² î + (4t − t²) ĵ. Magnitude of acceleration at t=1s is:</div>
            <div className={styles.options}><div className={`${styles['opt-row']}`}><b>A</b>6 m/s²</div><div className={`${styles['opt-row']} ${styles.sel}`}><b>C</b>√40 m/s² — Your answer</div><div className={`${styles['opt-row']}`}><b>D</b>8 m/s²</div></div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}><div style={{display:'flex', gap:'6px'}}><span className={`${styles['btn-neu']}`} style={{padding:'7px 12px', fontSize:'11px'}}>← Prev</span><span className={`${styles['btn-neu']} ${styles.dark}`} style={{padding:'7px 12px', fontSize:'11px'}}>Save & Next →</span></div><div className={styles.palette} style={{margin:'0'}}><span className={`${styles.pal} ${styles.ans}`}>13</span><span className={`${styles.pal} ${styles.mark}`}>14</span><span className={styles.pal}>15</span></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
